import React from 'react';
import { Testimonial, LanguageCode } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  currentLang: LanguageCode;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1769E0] text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-star text-xs"></i>
            <span>Client Perspectives</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] tracking-tight mb-4">
            Trusted by Leaders in Fast-Growing Global Markets
          </h2>
          <p className="text-sm sm:text-base text-[#52657D]">
            Here is how Simply Smart Solution helps enterprises navigate cross-border digital scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#F5F8FC]/60 border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & country badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-1 text-xs">
                    {[...Array(t.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#1769E0] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {t.country}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#10233F] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div>
                {/* Quantitative result badge */}
                <div className="mb-4 p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-[#1769E0] flex items-center gap-2">
                  <i className="fa-solid fa-arrow-trend-up"></i>
                  <span>Outcome: {t.projectResult}</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60">
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#0B1F3A]">{t.clientName}</div>
                    <div className="text-[11px] text-[#52657D]">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
