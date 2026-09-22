import React, { useState } from 'react';
import { CaseStudy, LanguageCode } from '../types';
import { translations } from '../data/initialData';

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
  currentLang: LanguageCode;
  onOpenConsultation: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  caseStudies,
  currentLang,
  onOpenConsultation,
}) => {
  const t = translations[currentLang] || translations.en;
  const [activeFilter, setActiveFilter] = useState<'all' | 'japan' | 'usa' | 'global'>('all');

  const filteredStudies = caseStudies.filter((study) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'japan') return study.country.toLowerCase().includes('japan');
    if (activeFilter === 'usa') return study.country.toLowerCase().includes('usa') || study.country.toLowerCase().includes('united states');
    if (activeFilter === 'global') return !study.country.toLowerCase().includes('japan') || study.country.toLowerCase().includes('global');
    return true;
  });

  return (
    <section id="case-studies" className="py-20 bg-[#F5F8FC]/50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1769E0] text-xs font-bold uppercase tracking-wider mb-3">
              <i className="fa-solid fa-chart-line text-xs"></i>
              <span>{t.caseStudies.sectionTitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] tracking-tight mb-3">
              {t.caseStudies.sectionHeading}
            </h2>
            <p className="text-sm sm:text-base text-[#52657D]">
              {t.caseStudies.sectionSub}
            </p>
          </div>

          {/* Market Filter Tabs */}
          <div className="flex flex-wrap items-center bg-white p-1 rounded-xl border border-slate-200 shadow-xs text-xs font-semibold text-[#52657D]">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#1769E0] text-white shadow-xs'
                  : 'hover:text-[#10233F]'
              }`}
            >
              {t.caseStudies.allTab}
            </button>
            <button
              onClick={() => setActiveFilter('japan')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === 'japan'
                  ? 'bg-[#1769E0] text-white shadow-xs'
                  : 'hover:text-[#10233F]'
              }`}
            >
              {t.caseStudies.japanTab}
            </button>
            <button
              onClick={() => setActiveFilter('usa')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === 'usa'
                  ? 'bg-[#1769E0] text-white shadow-xs'
                  : 'hover:text-[#10233F]'
              }`}
            >
              {t.caseStudies.usaTab}
            </button>
            <button
              onClick={() => setActiveFilter('global')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeFilter === 'global'
                  ? 'bg-[#1769E0] text-white shadow-xs'
                  : 'hover:text-[#10233F]'
              }`}
            >
              {t.caseStudies.globalTab}
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              id={`case-study-${study.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#0B1F3A]/90 text-white text-[11px] font-bold backdrop-blur-sm">
                    {study.industry}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#1769E0]/90 text-white text-[11px] font-bold backdrop-blur-sm">
                    {study.country}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="text-xs font-medium text-slate-200">{study.client}</div>
                  <h3 className="text-lg font-bold leading-tight drop-shadow-sm">{study.title}</h3>
                </div>
              </div>

              {/* Body: Challenge & Solution */}
              <div className="p-6 space-y-4">
                <div className="text-xs text-[#52657D]">
                  <span className="font-bold text-[#0B1F3A]">Challenge: </span>
                  {study.challenge}
                </div>
                <div className="text-xs text-[#52657D]">
                  <span className="font-bold text-[#1769E0]">Solution: </span>
                  {study.solution}
                </div>

                {/* Measurable Results Metrics Bar */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {study.results.map((res, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-[#F5F8FC] border border-blue-100/50 text-center"
                    >
                      <div className="text-lg sm:text-xl font-extrabold text-[#1769E0] font-mono">
                        {res.value}
                      </div>
                      <div className="text-[10px] font-semibold text-[#52657D] uppercase tracking-wider mt-0.5">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Services applied tags */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {study.services.map((srv, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-medium text-slate-700"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-bold text-[#1769E0] hover:text-[#155fc9] flex items-center gap-1 group"
                  >
                    <span>Request Similar Case Study</span>
                    <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
