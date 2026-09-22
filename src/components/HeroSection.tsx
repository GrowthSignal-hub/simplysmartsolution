import React, { useState } from 'react';
import { LanguageCode, SiteSettings } from '../types';
import { translations } from '../data/initialData';

interface HeroSectionProps {
  currentLang: LanguageCode;
  siteSettings: SiteSettings;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  siteSettings,
  onOpenConsultation,
}) => {
  const t = translations[currentLang] || translations.en;
  const [activeTab, setActiveTab] = useState<'global' | 'japan' | 'usa' | 'europe'>('global');

  // Interactive dashboard data according to selected region
  const marketMetrics = {
    global: {
      leads: '14,820',
      roas: '380%',
      speed: '99.4%',
      activeCampaigns: '86 active',
      chartTrend: [40, 52, 68, 75, 92, 110, 138, 165]
    },
    japan: {
      leads: '4,610',
      roas: '410%',
      speed: '99.8%',
      activeCampaigns: '28 active in Tokyo & Kansai',
      chartTrend: [28, 38, 50, 62, 78, 95, 118, 142]
    },
    usa: {
      leads: '6,240',
      roas: '360%',
      speed: '99.2%',
      activeCampaigns: '34 active in SF, NY & Austin',
      chartTrend: [35, 48, 60, 70, 85, 102, 125, 150]
    },
    europe: {
      leads: '3,970',
      roas: '375%',
      speed: '99.5%',
      activeCampaigns: '24 active in UK & Germany',
      chartTrend: [20, 30, 42, 55, 68, 84, 105, 130]
    }
  };

  const currentMetric = marketMetrics[activeTab];

  return (
    <section
      id="top"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F5F8FC]/80 via-white to-white"
    >
      {/* Subtle geometric ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Storytelling & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow badge */}
            <div
              id="hero-eyebrow"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#1769E0] text-[12px] font-bold tracking-wider uppercase mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-[#1769E0] animate-ping"></span>
              <span>{t.hero.eyebrow}</span>
              <span className="text-slate-300">|</span>
              <span className="text-[#52657D] font-medium lowercase">simplysmartsolution.net</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-headline"
              className="text-[34px] sm:text-[46px] md:text-[54px] font-extrabold text-[#0B1F3A] tracking-tight leading-[1.12] mb-4"
            >
              {siteSettings.heroHeadline}{' '}
              <span className="block mt-1 bg-gradient-to-r from-[#1769E0] to-[#2563EB] bg-clip-text text-transparent">
                {siteSettings.heroHighlight}
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p
              id="hero-supporting-text"
              className="text-base sm:text-lg text-[#52657D] font-normal leading-relaxed max-w-2xl mb-8"
            >
              {siteSettings.heroSupportingText}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                id="hero-primary-cta"
                onClick={onOpenConsultation}
                className="bg-[#1769E0] hover:bg-[#155fc9] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg shadow-[#1769E0]/25 hover:shadow-xl hover:shadow-[#1769E0]/35 transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-200"></i>
              </button>

              <a
                id="hero-secondary-cta"
                href="#case-studies"
                className="bg-white hover:bg-slate-50 text-[#10233F] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-layer-group text-xs text-[#1769E0]"></i>
                <span>{t.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 border-t border-slate-200/70 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#52657D]">
              <div className="flex items-center gap-1.5">
                <i className="fa-solid fa-circle-check text-[#1769E0]"></i>
                <span className="font-semibold text-[#10233F]">100% Transparent ROI</span>
              </div>
              <div className="flex items-center gap-1.5">
                <i className="fa-solid fa-circle-check text-[#1769E0]"></i>
                <span className="font-semibold text-[#10233F]">Global &amp; Local Execution</span>
              </div>
              <div className="flex items-center gap-1.5">
                <i className="fa-solid fa-circle-check text-[#1769E0]"></i>
                <span className="font-semibold text-[#10233F]">WCAG 2.2 AA Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Dashboard */}
          <div className="lg:col-span-5 relative">
            <div
              id="hero-dashboard-card"
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-xl shadow-slate-900/5 border border-slate-200/90 relative"
            >
              {/* Dashboard Header with region filters */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider">
                    Global Growth Console
                  </span>
                </div>

                {/* Region selector tabs */}
                <div className="flex items-center bg-slate-100 p-0.5 rounded-lg text-[11px] font-semibold text-[#52657D]">
                  <button
                    onClick={() => setActiveTab('global')}
                    className={`px-2 py-1 rounded-md transition-all ${
                      activeTab === 'global' ? 'bg-white text-[#1769E0] shadow-xs' : 'hover:text-[#10233F]'
                    }`}
                  >
                    Global
                  </button>
                  <button
                    onClick={() => setActiveTab('japan')}
                    className={`px-2 py-1 rounded-md transition-all ${
                      activeTab === 'japan' ? 'bg-white text-[#1769E0] shadow-xs' : 'hover:text-[#10233F]'
                    }`}
                  >
                    Japan
                  </button>
                  <button
                    onClick={() => setActiveTab('usa')}
                    className={`px-2 py-1 rounded-md transition-all ${
                      activeTab === 'usa' ? 'bg-white text-[#1769E0] shadow-xs' : 'hover:text-[#10233F]'
                    }`}
                  >
                    USA
                  </button>
                  <button
                    onClick={() => setActiveTab('europe')}
                    className={`px-2 py-1 rounded-md transition-all ${
                      activeTab === 'europe' ? 'bg-white text-[#1769E0] shadow-xs' : 'hover:text-[#10233F]'
                    }`}
                  >
                    EU
                  </button>
                </div>
              </div>

              {/* Metric Highlights Grid */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="p-3 rounded-xl bg-[#F5F8FC] border border-blue-100/60">
                  <div className="text-[11px] font-medium text-[#52657D]">Inbound Leads</div>
                  <div className="text-lg sm:text-xl font-bold text-[#0B1F3A] mt-0.5">{currentMetric.leads}</div>
                  <div className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                    <i className="fa-solid fa-arrow-trend-up"></i> +28.4%
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#F5F8FC] border border-blue-100/60">
                  <div className="text-[11px] font-medium text-[#52657D]">Avg. ROAS</div>
                  <div className="text-lg sm:text-xl font-bold text-[#1769E0] mt-0.5">{currentMetric.roas}</div>
                  <div className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                    <i className="fa-solid fa-arrow-trend-up"></i> Target 3.5x
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#F5F8FC] border border-blue-100/60">
                  <div className="text-[11px] font-medium text-[#52657D]">Web Speed</div>
                  <div className="text-lg sm:text-xl font-bold text-[#0B1F3A] mt-0.5">{currentMetric.speed}</div>
                  <div className="text-[10px] font-semibold text-[#1769E0] flex items-center gap-0.5 mt-0.5">
                    <i className="fa-solid fa-bolt"></i> LCP 1.1s
                  </div>
                </div>
              </div>

              {/* Interactive Trend Chart simulation */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-[#10233F]">Customer Acquisition Velocity</span>
                  <span className="text-[11px] text-slate-400 font-mono">{currentMetric.activeCampaigns}</span>
                </div>
                
                {/* SVG Graph */}
                <div className="h-28 w-full bg-slate-50/80 rounded-xl p-2 border border-slate-100 flex items-end justify-between gap-1.5">
                  {currentMetric.chartTrend.map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                      <div
                        style={{ height: `${height * 0.55}px` }}
                        className="w-full bg-gradient-to-t from-[#1769E0] to-[#60A5FA] rounded-sm group-hover:brightness-110 transition-all duration-300 relative"
                      >
                        <span className="opacity-0 group-hover:opacity-100 absolute -top-5 left-1/2 -translate-x-1/2 bg-[#0B1F3A] text-white text-[9px] px-1 rounded transition-opacity">
                          {height}k
                        </span>
                      </div>
                      <span className="text-[9px] text-slate-400 font-mono">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Pipeline Badges */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px]">
                <div className="flex items-center gap-1.5 text-[#52657D]">
                  <i className="fa-solid fa-shield-halved text-emerald-500"></i>
                  <span>Zero Data Breach Architecture</span>
                </div>
                <div className="flex items-center gap-1 font-semibold text-[#1769E0]">
                  <i className="fa-solid fa-sparkles"></i>
                  <span>AI Engine Sync Active</span>
                </div>
              </div>

              {/* Floating Floating UI Card: Metric Spotlight */}
              <div
                id="hero-floating-metric-badge"
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-3 shadow-lg border border-slate-100 hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#1769E0] flex items-center justify-center font-bold text-lg">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0B1F3A]">14+ Global Markets</div>
                  <div className="text-[10px] text-[#52657D]">Tokyo • San Francisco • London</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
