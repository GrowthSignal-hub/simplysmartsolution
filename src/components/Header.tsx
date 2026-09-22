import React, { useState, useEffect } from 'react';
import { LanguageCode, SiteSettings } from '../types';
import { translations } from '../data/initialData';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentLang: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
  siteSettings: SiteSettings;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  siteSettings,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'enter' | 'exit'>('enter');

  const t = translations[currentLang] || translations.en;
  const taglines = siteSettings.taglines && siteSettings.taglines.length > 0
    ? siteSettings.taglines
    : [
        'Your Digital Growth Partner',
        'Digital Solutions Built for Global Growth',
        'Build, Grow, Scale, Globally'
      ];

  // Scroll detection for compact elevated navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Looping animated tagline sequence (2.8s display, smooth fade/slide upward)
  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      setFadeState('exit');
      setTimeout(() => {
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
        setFadeState('enter');
      }, 350); // duration of exit transition before switching text
    }, 3000); // visible for ~2.6-3s

    return () => clearInterval(interval);
  }, [taglines.length]);

  const languages = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'ja', label: '日本語 (JP)', short: 'JA' },
    { code: 'ar', label: 'العربية', short: 'AR' },
    { code: 'zh', label: '中文 (CN)', short: 'ZH' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-slate-200/80'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo + Looping Animated Tagline directly underneath */}
          <div className="flex flex-col items-start justify-center">
            <a href="#top" className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#1769E0] rounded-lg">
              <BrandLogo size="medium" className="flex-shrink-0" />
             <div className="flex flex-col -ml-4">
                <span className="text-[19px] sm:text-[21px] font-extrabold tracking-tight text-[#0B1F3A] leading-tight hidden sm:block">
                  Simply Smart <span className="text-[#1769E0] font-bold">Solution</span>
                </span>
              </div>
            </a>

            {/* Continuously Looping Animated Tagline Container */}
            <div
              id="header-animated-tagline-container"
              className="h-4 sm:h-4.5 overflow-hidden flex items-center pl-11.5 mt-0.5"
              aria-live="polite"
            >
              <div
                id="header-animated-tagline"
                className={`text-[11px] sm:text-[12px] font-medium tracking-wide text-[#52657D] transition-all duration-350 ease-out select-none ${
                  fadeState === 'enter'
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-2'
                }`}
              >
                {taglines[taglineIndex]}
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-[#10233F]">
            <a href="#services" className="hover:text-[#1769E0] transition-colors duration-150 py-1">
              {t.nav.services}
            </a>
            <a href="#industries" className="hover:text-[#1769E0] transition-colors duration-150 py-1">
              {t.nav.industries}
            </a>
            <a href="#case-studies" className="hover:text-[#1769E0] transition-colors duration-150 py-1">
              {t.nav.caseStudies}
            </a>
            <a href="#global-presence" className="hover:text-[#1769E0] transition-colors duration-150 py-1">
              {currentLang === 'ja' ? 'グローバル拠点' : 'Global Reach'}
            </a>
            <a href="#process" className="hover:text-[#1769E0] transition-colors duration-150 py-1">
              {currentLang === 'ja' ? '進め方' : 'Process'}
            </a>
            <a href="#resources" className="hover:text-[#1769E0] transition-colors duration-150 py-1">
              {t.nav.resources}
            </a>
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Globe Selector */}
            <div className="relative">
              <button
                id="language-selector-button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-[#10233F] bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#1769E0]/40"
                aria-label="Select Language"
              >
                <i className="fa-solid fa-globe text-[#1769E0]"></i>
                <span>{languages.find((l) => l.code === currentLang)?.short || 'EN'}</span>
                <i className="fa-solid fa-chevron-down text-[10px] text-slate-400"></i>
              </button>

              {langDropdownOpen && (
                <div
                  id="language-dropdown-menu"
                  className="absolute right-0 mt-1.5 w-40 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50 text-xs"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code as LanguageCode);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-blue-50 transition-colors ${
                        currentLang === lang.code ? 'font-bold text-[#1769E0] bg-blue-50/50' : 'text-[#10233F]'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {currentLang === lang.code && <i className="fa-solid fa-check text-[#1769E0]"></i>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Consultation CTA */}
            <button
              id="nav-consultation-btn"
              onClick={onOpenConsultation}
              className="bg-[#1769E0] hover:bg-[#155fc9] text-white text-[13px] font-semibold px-4 py-2 rounded-lg shadow-sm shadow-[#1769E0]/30 hover:shadow-md transition-all duration-200 flex items-center gap-2 group"
            >
              <span>{t.nav.consultation}</span>
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-0.5 transition-transform duration-180"></i>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-nav-panel" className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-100 space-y-2">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#10233F] hover:bg-slate-50"
            >
              {t.nav.services}
            </a>
            <a
              href="#industries"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#10233F] hover:bg-slate-50"
            >
              {t.nav.industries}
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#10233F] hover:bg-slate-50"
            >
              {t.nav.caseStudies}
            </a>
            <a
              href="#global-presence"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#10233F] hover:bg-slate-50"
            >
              {currentLang === 'ja' ? 'グローバル拠点' : 'Global Reach'}
            </a>
            <a
              href="#resources"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-[#10233F] hover:bg-slate-50"
            >
              {t.nav.resources}
            </a>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Language:</span>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code as LanguageCode);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-2 py-1 text-xs rounded ${
                      currentLang === lang.code
                        ? 'bg-[#1769E0] text-white font-bold'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {lang.short}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => {
                    onOpenConsultation();
                    setMobileMenuOpen(false);
                  }}
                  className="flex-1 text-center py-2 text-xs font-semibold rounded-lg bg-[#1769E0] text-white"
                >
                  {t.nav.consultation}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
