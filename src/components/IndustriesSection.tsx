import React, { useState } from 'react';
import { Industry, LanguageCode } from '../types';
import { translations } from '../data/initialData';

interface IndustriesSectionProps {
  industries: Industry[];
  currentLang: LanguageCode;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  industries,
  currentLang,
}) => {
  const t = translations[currentLang] || translations.en;
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#0B1F3A] text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-briefcase text-xs text-[#1769E0]"></i>
            <span>{t.industries.sectionTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] tracking-tight mb-4">
            {t.industries.sectionHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#52657D] leading-relaxed">
            {t.industries.sectionSub}
          </p>
        </div>

        {/* 9 Industry Cards Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => {
            const isExpanded = selectedIndustry === ind.id;
            return (
              <div
                key={ind.id}
                id={`industry-card-${ind.id}`}
                onClick={() => setSelectedIndustry(isExpanded ? null : ind.id)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isExpanded
                    ? 'bg-blue-50/40 border-[#1769E0] shadow-md'
                    : 'bg-[#F5F8FC]/50 border-slate-200/70 hover:bg-white hover:shadow-md hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#1769E0] text-lg shadow-xs">
                    <i className={ind.icon}></i>
                  </div>
                  <span className="text-[11px] font-bold text-[#1769E0] bg-white px-2.5 py-1 rounded-md border border-blue-100">
                    {ind.stats}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0B1F3A] mb-2">
                  {ind.name}
                </h3>
                <p className="text-xs text-[#52657D] leading-relaxed mb-4">
                  {ind.description}
                </p>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Featured System:</span>
                  <span className="font-semibold text-[#10233F]">{ind.sampleProject}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
