import React, { useState, useRef, useEffect } from 'react';
import { Service, CaseStudy } from '../types';

interface AIAssistantWidgetProps {
  services: Service[];
  caseStudies: CaseStudy[];
  onOpenConsultation: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const AIAssistantWidget: React.FC<AIAssistantWidgetProps> = ({
  services,
  caseStudies,
  onOpenConsultation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-init',
      sender: 'assistant',
      text: 'Hello! I am the Simply Smart Solution AI Growth Consultant. How can I assist with your international expansion, search engine visibility, or web engineering goals today?',
      timestamp: 'Just now',
    },
  ]);

  const quickPrompts = [
    'What is your AEO / GEO strategy?',
    'How do you handle Japan vs USA cross-border scaling?',
    'What are your typical pricing ranges and deliverables?',
    'Can I schedule a free strategy consultation?',
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    try {
      // Call backend API if available, or fall back to client-side grounded reasoning
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query }),
      });

      if (res.ok) {
        const data = await res.json();
        const replyText = data.reply;
        setMessages((prev) => [
          ...prev,
          {
            id: 'bot-' + Date.now(),
            sender: 'assistant',
            text: replyText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ]);
        setIsTyping(false);
        return;
      }
    } catch {
      // Fallback to grounded local knowledge base response
    }

    // Grounded fallback response generator enforcing all PRD guidelines
    setTimeout(() => {
      let botResponse = '';
      const q = query.toLowerCase();

      if (q.includes('aeo') || q.includes('geo') || q.includes('search') || q.includes('seo')) {
        botResponse = 'Our SEO / AEO / GEO Discovery service combines technical Core Web Vitals, Schema.org JSON-LD graph architecture, and Generative Engine Optimization. We ensure your brand is not only ranked on Google Search, but actively cited in AI-generated answers across ChatGPT, Perplexity, and Gemini. Pricing ranges from $3,500 to $8,500/month.';
      } else if (q.includes('japan') || q.includes('usa') || q.includes('cross-border') || q.includes('local')) {
        botResponse = 'Simply Smart Solution operates dedicated regional hubs in Tokyo and San Francisco/New York. We tailor UX, checkout preferences (e.g. konbini vs Apple Pay), search intent, and cultural messaging to ensure effortless customer acquisition across both Asian and Western digital markets.';
      } else if (q.includes('price') || q.includes('pricing') || q.includes('cost') || q.includes('budget')) {
        botResponse = 'Our services are structured for high-ROI scalability. Web development ranges from $5,000–$25,000; Performance Marketing / Google Ads starts at $2,500/month; SEO/AEO ranges from $3,500–$8,500/month; and AI Chat Automation starts at $3,000 setup. Please note we never make speculative guarantees on ranking or revenue, but operate on strict, transparent KPIs.';
      } else if (q.includes('consultation') || q.includes('contact') || q.includes('book') || q.includes('schedule')) {
        botResponse = "We'd be delighted to discuss your expansion! You can click the 'Schedule Consultation' button right now, or use the form in our header to speak with our senior growth directors.";
      } else if (q.includes('ecommerce') || q.includes('shopify') || q.includes('store')) {
        botResponse = 'Our Global Ecommerce service covers headless architecture, Shopify Plus, multi-currency checkouts, automated customs/tax rules, and unified ERP integration. For client NipponCraft Global, this drove a +320% increase in organic international traffic and +120% global revenue.';
      } else {
        botResponse = `Simply Smart Solution is a global digital growth agency operating across Tokyo, San Francisco, London, and worldwide. We provide 6 core capabilities: SEO/AEO/GEO, Performance Marketing, Social Media, High-Performance Web Development, Global Ecommerce, and AI Support Automation. Would you like to review a specific service or discuss your project?`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: 'bot-' + Date.now(),
          sender: 'assistant',
          text: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div id="ai-assistant-root" className="fixed bottom-5 right-5 z-40">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          id="ai-assistant-launcher-btn"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1769E0] hover:bg-[#155fc9] text-white shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer"
          aria-label="Open AI Growth Consultant"
        >
          <div className="relative">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute -top-0.5 -right-0.5 border-2 border-[#1769E0]"></span>
            <i className="fa-solid fa-sparkles text-base"></i>
          </div>
          <span className="text-xs font-bold tracking-wide">
            Ask SSS AI Consultant
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          id="ai-assistant-window"
          className="w-[92vw] sm:w-[380px] h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="p-4 bg-[#0B1F3A] text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1769E0] flex items-center justify-center text-white text-sm shadow-xs">
                <i className="fa-solid fa-robot"></i>
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">
                  SSS Growth AI
                </div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Grounded in SSS Knowledge Base
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <i className="fa-solid fa-xmark text-xs"></i>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#F5F8FC]/50 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#1769E0] text-white rounded-br-none shadow-xs'
                      : 'bg-white text-[#10233F] border border-slate-200/80 rounded-bl-none shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-slate-400 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 bg-white border border-slate-200 rounded-2xl rounded-bl-none w-16 text-slate-400 text-xs">
                <span className="w-1.5 h-1.5 bg-[#1769E0] rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-[#1769E0] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-[#1769E0] rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Starters */}
          <div className="p-2 border-t border-slate-100 bg-white flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="text-[10px] px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-[#1769E0] text-slate-600 transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 border-t border-slate-200 bg-white flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about SEO, web development, markets..."
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1769E0]/40 text-[#10233F]"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim()}
              className="w-8 h-8 rounded-xl bg-[#1769E0] hover:bg-[#155fc9] text-white flex items-center justify-center transition-colors disabled:opacity-40"
            >
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </div>

          {/* Consultation Bridge */}
          <div className="px-3 py-1.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[10px] text-[#52657D]">
            <span>Ready for customized strategy?</span>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenConsultation();
              }}
              className="text-[#1769E0] font-bold hover:underline"
            >
              Free Consultation →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
