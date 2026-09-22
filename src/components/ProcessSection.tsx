import React from 'react';
import { LanguageCode } from '../types';

interface ProcessSectionProps {
  currentLang: LanguageCode;
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ currentLang, onOpenConsultation }) => {
  const steps = [
    {
      number: '01',
      title: 'Global Audit & Market Strategy',
      desc: 'We analyze your target territories, competitor positioning, organic search gaps, and customer unit economics.',
      icon: 'fa-solid fa-compass'
    },
    {
      number: '02',
      title: 'Architecture & Creative Foundation',
      desc: 'We construct your digital infrastructure — high-speed web apps, multilingual conversion funnels, and tracking pipelines.',
      icon: 'fa-solid fa-cubes'
    },
    {
      number: '03',
      title: 'High-Velocity Growth Sprints',
      desc: 'Deploying performance media, entity-level SEO/AEO indexing, and localized multi-channel acquisition campaigns.',
      icon: 'fa-solid fa-rocket'
    },
    {
      number: '04',
      title: 'Automated Scale & Retention',
      desc: 'Integrating AI customer support, ongoing conversion optimization, and continuous multi-market expansion.',
      icon: 'fa-solid fa-chart-line'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[#1769E0] text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-timeline text-xs"></i>
            <span>How We Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] tracking-tight mb-4">
            A Proven 4-Stage Execution Methodology
          </h2>
          <p className="text-sm sm:text-base text-[#52657D] leading-relaxed">
            From initial cross-border market intelligence to automated global customer acquisition, our process is transparent, data-governed, and built for speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F5F8FC]/60 border border-slate-200/80 relative flex flex-col justify-between hover:bg-white hover:shadow-lg hover:border-blue-200 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#1769E0] font-mono opacity-80">
                    {step.number}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#1769E0] text-sm">
                    <i className={step.icon}></i>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#0B1F3A] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#52657D] leading-relaxed mb-4">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/60 flex items-center text-[11px] font-semibold text-[#1769E0]">
                <span>Phase {step.number} Milestone</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1769E0] hover:bg-[#155fc9] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/20 transition-all cursor-pointer"
          >
            <span>Schedule a Strategy Discovery Session</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </button>
        </div>

      </div>
    </section>
  );
};
