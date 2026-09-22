import React, { useEffect } from 'react';
import { Service, LanguageCode } from '../types';

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectServiceForConsultation: (serviceName: string) => void;
  currentLang: LanguageCode;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
  onSelectServiceForConsultation,
}) => {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div
      id="service-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B1F3A]/60 backdrop-blur-md transition-all duration-300 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="service-detail-dialog"
        className="glass-panel w-full max-w-3xl rounded-2xl shadow-2xl border border-white/60 bg-white/95 my-auto max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-service-title"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#0B1F3A] to-[#10233F] text-white flex items-start justify-between relative">
          <div className="flex items-center gap-4 pr-8">
            <div className="w-12 h-12 rounded-xl bg-[#1769E0] flex items-center justify-center text-white text-xl shadow-md shrink-0">
              <i className={service.icon}></i>
            </div>
            <div>
              <div className="text-[11px] font-bold text-blue-300 uppercase tracking-wider">
                Capabilities Deep Dive
              </div>
              <h2 id="modal-service-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
                {service.name}
              </h2>
            </div>
          </div>

          <button
            id="modal-close-button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
            aria-label="Close dialog"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-[#10233F] text-sm">
          
          {/* Overview & Pricing Pill */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100">
              <p className="text-base text-[#10233F] font-semibold leading-relaxed">
                {service.shortDesc}
              </p>
              {service.pricingRange && (
                <div className="px-3 py-1 bg-blue-50 text-[#1769E0] rounded-full text-xs font-bold border border-blue-100 shrink-0">
                  <i className="fa-solid fa-tag mr-1.5 text-xs"></i>
                  {service.pricingRange}
                </div>
              )}
            </div>
            <p className="text-[#52657D] leading-relaxed text-sm">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Benefits Grid */}
          <div>
            <h3 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-3 flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-[#1769E0]"></i>
              Key Strategic Benefits
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F5F8FC] border border-slate-100 text-xs text-[#10233F]"
                >
                  <i className="fa-solid fa-check text-[#1769E0] mt-0.5 shrink-0"></i>
                  <span className="font-medium leading-normal">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process / How it Works */}
          {service.processSteps && service.processSteps.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-3 flex items-center gap-2">
                <i className="fa-solid fa-diagram-project text-[#1769E0]"></i>
                Execution Methodology
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {service.processSteps.map((step) => (
                  <div key={step.step} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                    <div>
                      <span className="w-5 h-5 rounded-full bg-[#1769E0] text-white text-[10px] font-bold flex items-center justify-center mb-2">
                        {step.step}
                      </span>
                      <div className="font-bold text-xs text-[#0B1F3A] mb-1">{step.title}</div>
                      <p className="text-[11px] text-[#52657D] leading-tight">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables & Industries */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100">
              <h4 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <i className="fa-solid fa-box-open text-[#1769E0]"></i>
                Concrete Deliverables
              </h4>
              <ul className="space-y-1.5 text-xs text-[#52657D]">
                {service.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#1769E0] font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
              <h4 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <i className="fa-solid fa-building-user text-[#1769E0]"></i>
                Targeted Industries
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {service.industries.map((ind, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-[#10233F]"
                  >
                    {ind}
                  </span>
                ))}
              </div>
              <div className="mt-3 text-[11px] text-[#52657D]">
                Optimized for cross-border global operations.
              </div>
            </div>
          </div>

          {/* FAQs if present */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="pt-2 border-t border-slate-100">
              <h4 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-2">
                Frequently Asked Questions
              </h4>
              <div className="space-y-2">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#F5F8FC] border border-slate-100 text-xs">
                    <div className="font-bold text-[#0B1F3A] mb-1">Q: {faq.q}</div>
                    <div className="text-[#52657D] leading-relaxed">A: {faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer CTA Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#52657D] flex items-center gap-1.5">
            <i className="fa-solid fa-shield-check text-emerald-500"></i>
            <span>No long-term lock-in • Free initial strategy assessment</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
            <button
              id="modal-consultation-btn"
              onClick={() => {
                onClose();
                onSelectServiceForConsultation(service.name);
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#1769E0] hover:bg-[#155fc9] shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Consult on {service.name}</span>
              <i className="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
