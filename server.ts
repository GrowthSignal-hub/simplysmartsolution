import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', brand: 'Simply Smart Solution', timestamp: new Date().toISOString() });
  });

  // Server-side Gemini AI Chat endpoint for SSS Growth Consultant
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      if (!message || typeof message !== 'string') {
        res.status(400).json({ error: 'Message is required' });
        return;
      }

      // Check for Gemini API key
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Return grounded response if no key configured
        res.json({
          reply: 'Thank you for inquiring! Simply Smart Solution provides end-to-end digital growth across SEO/AEO/GEO, Performance Marketing (Google Ads), High-Performance Web Development, Global Ecommerce, and AI Support Automation. We operate across Tokyo, San Francisco, New York, and London. Would you like to schedule a free strategy session with our directors?'
        });
        return;
      }

      // Lazy initialize GoogleGenAI client
      const ai = new GoogleGenAI({ apiKey });

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          {
            role: 'user',
            parts: [{ text: message }]
          }
        ],
        config: {
          systemInstruction: `You are the Simply Smart Solution AI Growth Consultant for simplysmartsolution.net.
Simply Smart Solution is a premium global digital agency specializing in:
1. SEO / AEO / GEO (Generative Engine Optimization & AI discovery on ChatGPT, Perplexity, Gemini)
2. Performance Marketing & Google Ads (qualified traffic, predictive bidding, transparent ROI)
3. Social Media & Brand Growth (LinkedIn thought leadership, multi-channel scaling)
4. High-Performance Web Development (ultra-fast web applications, WCAG 2.2 AA accessibility, custom CMS)
5. Global Ecommerce Solutions (cross-border checkout, multi-currency, Shopify Plus, headless)
6. AI Chat & Intelligent Automation (24/7 client qualification, CRM automation)

Guidelines:
- Tone: Professional, authoritative, helpful, concise.
- Core Markets: Global, with dedicated regional hubs in Tokyo (Japan), San Francisco & New York (USA), London (UK), Berlin (Germany), and Sydney (Australia).
- Strictly avoid promising guaranteed rankings, guaranteed 1st page, or speculative revenue guarantees.
- Always recommend scheduling a free strategy discovery consultation via the website.`
        }
      });

      const reply = response.text || 'I would be glad to connect you with our global digital growth team for a free strategy consultation.';
      res.json({ reply });
    } catch (error) {
      console.error('Gemini API chat error:', error);
      res.json({
        reply: 'Simply Smart Solution provides full-service global digital growth, including SEO/AEO/GEO, Google Ads, high-performance web development, and ecommerce systems. Please feel free to request a strategy consultation!'
      });
    }
  });

  // Redirect /admin to /#/admin for clean admin URL
  app.get('/admin', (req, res) => {
    res.redirect(301, '/#/admin');
  });

  // Vite middleware in dev mode, static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Simply Smart Solution server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
