import React, { useState } from 'react';
import { LanguageCode } from '../types';
import { globalPresenceLocations, translations } from '../data/initialData';

interface GlobalPresenceSectionProps {
  currentLang: LanguageCode;
}

export const GlobalPresenceSection: React.FC<GlobalPresenceSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang] || translations.en;
  const [selectedHub, setSelectedHub] = useState(globalPresenceLocations[0]);

  return (
    <section
      id="global-presence"
      className="py-24 bg-[#06264A] text-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1769E0]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
            <i className="fa-solid fa-earth-americas text-xs text-[#60A5FA]"></i>
            <span>{t.globalPresence.globalFirst}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t.globalPresence.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {t.globalPresence.sectionSub}
          </p>
        </div>

        {/* Interactive World Map & Hub Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left / Main: Interactive stylized Map Canvas */}
          <div className="lg:col-span-8 bg-[#0B1F3A]/80 rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Infrastructure Operations</span>
              </div>
              <span className="text-slate-400">Click any node to inspect capability</span>
            </div>

            {/* Stylized SVG Global Map with Pins */}
            <div className="relative w-full aspect-[2/1] bg-[#08182D] rounded-xl overflow-hidden border border-white/5 p-4 flex items-center justify-center">
              
              {/* World Map Graticule / Outline representation */}
              <svg viewBox="0 0 1000 500" className="w-full h-full opacity-30 select-none pointer-events-none">
                {/* Continents stylized vectors */}
                <path
                  d="M150,120 Q200,80 300,100 T400,160 T350,220 T200,260 T140,180 Z"
                  fill="#334155"
                />
                <path
                  d="M250,270 Q300,280 350,340 T320,440 T260,380 Z"
                  fill="#334155"
                />
                <path
                  d="M480,100 Q560,70 650,110 T680,180 T540,240 T460,160 Z"
                  fill="#334155"
                />
                <path
                  d="M490,240 Q580,240 600,320 T560,420 T480,360 Z"
                  fill="#334155"
                />
                <path
                  d="M680,110 Q800,90 890,140 T880,260 T760,280 T690,180 Z"
                  fill="#334155"
                />
                <path
                  d="M750,340 Q840,320 890,370 T850,440 T760,400 Z"
                  fill="#334155"
                />
              </svg>

              {/* Pins positioned based on coordinates */}
              {globalPresenceLocations.map((hub) => {
                const isSelected = selectedHub.city === hub.city;
                return (
                  <button
                    key={hub.city}
                    onClick={() => setSelectedHub(hub)}
                    style={{ left: `${hub.coordinates.x}%`, top: `${hub.coordinates.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none transition-transform ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110 z-20'
                    }`}
                    aria-label={`${hub.city}, ${hub.country}`}
                  >
                    <div className="relative flex items-center justify-center">
                      <span
                        className={`absolute w-7 h-7 rounded-full transition-opacity ${
                          isSelected
                            ? 'bg-[#1769E0] animate-ping opacity-75'
                            : 'bg-white/20 group-hover:bg-[#1769E0]/50'
                        }`}
                      ></span>
                      <div
                        className={`w-3.5 h-3.5 rounded-full border-2 transition-colors flex items-center justify-center ${
                          isSelected
                            ? 'bg-white border-[#1769E0] shadow-md shadow-blue-500'
                            : 'bg-[#1769E0] border-white group-hover:bg-blue-300'
                        }`}
                      ></div>
                    </div>

                    <span
                      className={`absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold whitespace-nowrap px-1.5 py-0.5 rounded transition-all ${
                        isSelected
                          ? 'bg-[#1769E0] text-white shadow-sm'
                          : 'bg-[#0B1F3A]/90 text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {hub.city}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom quick pills for hubs */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {globalPresenceLocations.map((hub) => (
                <button
                  key={hub.city}
                  onClick={() => setSelectedHub(hub)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                    selectedHub.city === hub.city
                      ? 'bg-[#1769E0] text-white font-bold shadow-sm'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {hub.city}, {hub.country}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Selected Hub Details Inspector */}
          <div className="lg:col-span-4 bg-[#0B1F3A]/90 rounded-2xl p-6 sm:p-7 border border-white/10 shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                  Regional Command Center
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  {selectedHub.timezone}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <h3 className="text-2xl font-bold text-white">{selectedHub.city}</h3>
                <span className="text-sm font-semibold text-blue-300">({selectedHub.country})</span>
              </div>

              <div className="text-xs text-slate-300 font-medium mb-4 flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-[#1769E0]"></i>
                <span>{selectedHub.address}</span>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-5">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Primary Strategic Function
                </div>
                <div className="text-sm font-bold text-white leading-snug">
                  {selectedHub.role}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-400">Active Accounts</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">{selectedHub.activeClients}</div>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-[10px] text-slate-400">Bilingual Support</div>
                  <div className="text-sm font-bold text-blue-300 mt-0.5">Native Certified</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="#contact"
                className="w-full py-2.5 px-4 rounded-xl bg-[#1769E0] hover:bg-[#155fc9] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-500/25"
              >
                <span>Connect with {selectedHub.city} Team</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
