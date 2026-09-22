import React, { useEffect, useState, useRef } from 'react';
import { LanguageCode } from '../types';
import { translations } from '../data/initialData';

interface TrustMetricsProps {
  currentLang: LanguageCode;
}

export const TrustMetrics: React.FC<TrustMetricsProps> = ({ currentLang }) => {
  const t = translations[currentLang] || translations.en;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Animated counters state
  const [counts, setCounts] = useState({
    clients: 0,
    retention: 0,
    support: 24,
    markets: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate clients 0 -> 500
          let c = 0;
          const clientTimer = setInterval(() => {
            c += 15;
            if (c >= 500) {
              setCounts((prev) => ({ ...prev, clients: 500 }));
              clearInterval(clientTimer);
            } else {
              setCounts((prev) => ({ ...prev, clients: c }));
            }
          }, 30);

          // Animate retention 0 -> 95
          let r = 0;
          const retTimer = setInterval(() => {
            r += 3;
            if (r >= 95) {
              setCounts((prev) => ({ ...prev, retention: 95 }));
              clearInterval(retTimer);
            } else {
              setCounts((prev) => ({ ...prev, retention: r }));
            }
          }, 35);

          // Animate markets 0 -> 14
          let m = 0;
          const mktTimer = setInterval(() => {
            m += 1;
            if (m >= 14) {
              setCounts((prev) => ({ ...prev, markets: 14 }));
              clearInterval(mktTimer);
            } else {
              setCounts((prev) => ({ ...prev, markets: m }));
            }
          }, 70);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="trust"
      ref={sectionRef}
      className="py-12 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Counter Blocks */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 pb-10 border-b border-slate-100 text-center">
          
          <div id="metric-clients" className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight font-mono">
              {counts.clients}+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#52657D] mt-1">
              {t.stats.clients}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Across 6 Continents
            </div>
          </div>

          <div id="metric-retention" className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1769E0] tracking-tight font-mono">
              {counts.retention}%
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#52657D] mt-1">
              {t.stats.retention}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Long-Term Partnership
            </div>
          </div>

          <div id="metric-support" className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] tracking-tight font-mono">
              24/7
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#52657D] mt-1">
              {t.stats.support}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Follow-the-Sun Coverage
            </div>
          </div>

          <div id="metric-markets" className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1769E0] tracking-tight font-mono">
              {counts.markets}+
            </div>
            <div className="text-xs sm:text-sm font-semibold text-[#52657D] mt-1">
              {t.stats.markets}
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">
              Active Regional Campaigns
            </div>
          </div>

        </div>

        {/* Global Partner Accreditation Bar */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <i className="fa-brands fa-google text-base text-[#4285F4]"></i>
            <span>Google Premier Partner</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <i className="fa-brands fa-shopify text-base text-[#96bf48]"></i>
            <span>Shopify Plus Partner</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <i className="fa-brands fa-meta text-base text-[#0668E1]"></i>
            <span>Meta Business Partner</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <i className="fa-brands fa-aws text-base text-[#FF9900]"></i>
            <span>AWS Cloud Certified</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <i className="fa-solid fa-certificate text-base text-[#1769E0]"></i>
            <span>WCAG 2.2 AA Compliant</span>
          </div>
        </div>

      </div>
    </section>
  );
};
