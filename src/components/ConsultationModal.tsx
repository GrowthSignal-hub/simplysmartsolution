import React, { useState } from 'react';
import { Lead } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  onAddLead: (lead: Lead) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  onAddLead,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: 'United States',
    serviceInterested: preselectedService || 'SEO / AEO / GEO Discovery',
    budget: '$5,000 – $10,000',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newLead: Lead = {
        id: 'ld-' + Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '+1 (555) 000-0000',
        company: formData.company || 'Enterprise Prospect',
        country: formData.country,
        serviceInterested: formData.serviceInterested,
        budget: formData.budget,
        message: formData.message || 'Requested free strategy audit through website modal.',
        status: 'new',
        createdAt: new Date().toISOString().replace('T', ' ').slice(0, 16),
      };

      onAddLead(newLead);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      id="consultation-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0B1F3A]/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="consultation-modal-card"
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#0B1F3A] text-white flex items-start justify-between">
          <div>
            <span className="text-[11px] font-bold text-blue-300 uppercase tracking-wider">
              Strategic Partnership
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              Request Your Free Strategy Consultation
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Discuss your expansion goals with our senior growth architects. Zero obligations.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
          >
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>

        {/* Form or Confirmation */}
        <div className="p-5 sm:p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl">
                <i className="fa-solid fa-check"></i>
              </div>
              <h4 className="text-xl font-bold text-[#0B1F3A]">
                Strategy Request Received!
              </h4>
              <p className="text-xs sm:text-sm text-[#52657D] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. A dedicated growth strategist will review your market details for <strong>{formData.company}</strong> and contact you within 24 business hours at <strong>{formData.email}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-[#1769E0] text-white text-xs font-bold hover:bg-[#155fc9] transition-colors"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#10233F] mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Kenji Tanaka / Sarah Jenkins"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1769E0]/40 text-xs text-[#10233F]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#10233F] mb-1">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1769E0]/40 text-xs text-[#10233F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#10233F] mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Company or Brand Name"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1769E0]/40 text-xs text-[#10233F]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#10233F] mb-1">
                    Target Expansion Market
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1769E0]/40 text-xs text-[#10233F] bg-white"
                  >
                    <option value="United States">United States</option>
                    <option value="Japan">Japan (日本)</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany / DACH</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Brazil">Brazil / LatAm</option>
                    <option value="Global">Global Cross-Border</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#10233F] mb-1">
                    Service of Interest
                  </label>
                  <select
                    value={formData.serviceInterested}
                    onChange={(e) => setFormData({ ...formData, serviceInterested: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1769E0]/40 text-xs text-[#10233F] bg-white"
                  >
                    <option value="SEO / AEO / GEO Discovery">SEO / AEO / GEO Discovery</option>
                    <option value="Google Ads & Performance Marketing">Google Ads & Performance Marketing</option>
                    <option value="Social Media & Brand Growth">Social Media & Brand Growth</option>
                    <option value="High-Performance Web Development">High-Performance Web Development</option>
                    <option value="Global Ecommerce Solutions">Global Ecommerce Solutions</option>
                    <option value="AI Chat & Intelligent Automation">AI Chat & Intelligent Automation</option>
                    <option value="Comprehensive Enterprise Growth Suite">Comprehensive Enterprise Growth Suite</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#10233F] mb-1">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1769E0]/40 text-xs text-[#10233F] bg-white"
                  >
                    <option value="$3,000 – $5,000 / mo">$3,000 – $5,000 / mo</option>
                    <option value="$5,000 – $10,000 / mo">$5,000 – $10,000 / mo</option>
                    <option value="$10,000 – $25,000 / mo">$10,000 – $25,000 / mo</option>
                    <option value="$25,000+ Enterprise / mo">$25,000+ Enterprise / mo</option>
                    <option value="Project-based ($10k – $50k)">Project-based ($10k – $50k)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#10233F] mb-1">
                  Project Goals &amp; Specific Challenges
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any specific requirements, current website URLs, target launch dates, or key performance indicators..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1769E0]/40 text-xs text-[#10233F]"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <i className="fa-solid fa-lock text-slate-400"></i>
                  <span>Strict NDA &amp; GDPR compliance</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-[#1769E0] hover:bg-[#155fc9] text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin text-xs"></i>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Strategy Request</span>
                      <i className="fa-solid fa-arrow-right text-xs"></i>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
