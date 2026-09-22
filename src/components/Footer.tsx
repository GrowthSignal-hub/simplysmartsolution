import React from 'react';
import { LanguageCode, SiteSettings } from '../types';
import { translations } from '../data/initialData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  currentLang: LanguageCode;
  siteSettings: SiteSettings;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  siteSettings,
  onOpenConsultation,
}) => {
  const t = translations[currentLang] || translations.en;

  return (
    <footer id="footer" className="bg-[#0B1F3A] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Business Call to Action (Pre-Footer CTA) */}
        <section aria-labelledby="footer-cta-heading" className="mb-16">
          <div className="rounded-2xl bg-gradient-to-r from-[#1769E0] to-[#2563EB] p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 id="footer-cta-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t.footer.topCtaHeading}
              </h2>
              <p className="text-sm sm:text-base text-blue-100 mt-2 leading-relaxed">
                {t.footer.topCtaSub}
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-xl bg-white text-[#0B1F3A] font-bold text-sm sm:text-base hover:bg-slate-100 shadow-xl transition-all duration-200 transform hover:scale-105 shrink-0 flex items-center gap-2.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/80"
              aria-label="Get a Free Consultation"
            >
              <span>{t.footer.topCtaButton}</span>
              <i className="fa-solid fa-arrow-right text-xs text-[#1769E0]"></i>
            </button>
          </div>
        </section>

        {/* Brand Logo Section */}
        <div className="mb-12 pb-12 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <BrandLogo size="medium" className="w-16 h-16" alt="Simply Smart Solution Logo" />
            <div className="flex flex-col">
              <h2 className="text-xl font-extrabold text-white">Simply Smart</h2>
              <p className="text-sm text-slate-300">Global Digital Growth</p>
            </div>
          </div>
        </div>

        {/* Primary 5-Column Navigation Directory */}
        <nav aria-label="Footer Navigation" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 text-xs">
          
          {/* SECTION 1: SERVICES */}
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4 text-blue-300">
              Services
            </h3>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-150 inline-block">
                  SEO / AEO / GEO Discovery
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-150 inline-block">
                  Google Ads &amp; Performance Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-150 inline-block">
                  Social Media &amp; Brand Growth
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-150 inline-block">
                  High-Performance Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-150 inline-block">
                  Global Ecommerce Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-150 inline-block">
                  AI Chat &amp; Support Automation
                </a>
              </li>
            </ul>
          </div>

          {/* SECTION 2: INDUSTRIES */}
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4 text-blue-300">
              Industries
            </h3>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a href="#industries" className="hover:text-white transition-colors duration-150 inline-block">
                  IT &amp; Enterprise Software
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors duration-150 inline-block">
                  Cross-Border Ecommerce
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors duration-150 inline-block">
                  SaaS &amp; Cloud Platforms
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors duration-150 inline-block">
                  Car Rental &amp; Mobility
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors duration-150 inline-block">
                  Healthcare &amp; Life Sciences
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors duration-150 inline-block">
                  Advanced Manufacturing
                </a>
              </li>
            </ul>
          </div>

          {/* SECTION 3: COMPANY */}
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4 text-blue-300">
              Company
            </h3>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a href="#top" className="hover:text-white transition-colors duration-150 inline-block">
                  About Simply Smart
                </a>
              </li>
              <li>
                <a href="#global-presence" className="hover:text-white transition-colors duration-150 inline-block">
                  Global Presence &amp; Hubs
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors duration-150 inline-block">
                  Our Methodology
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors duration-150 inline-block">
                  Client Case Studies
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors duration-150 inline-block">
                  Client Testimonials
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="hover:text-white transition-colors duration-150 text-left cursor-pointer inline-flex items-center gap-1 text-slate-300"
                >
                  <span>Contact Us</span>
                  <i className="fa-solid fa-arrow-right text-[9px] text-[#1769E0]"></i>
                </button>
              </li>
            </ul>
          </div>

          {/* SECTION 4: RESOURCES (Customer-Facing Only) */}
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4 text-blue-300">
              Resources
            </h3>
            <ul className="space-y-2.5 text-slate-300">
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors duration-150 inline-block">
                  Client Case Studies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors duration-150 inline-block">
                  Growth Methodology Framework
                </a>
              </li>
              <li>
                <a href="#trust" className="hover:text-white transition-colors duration-150 inline-block">
                  Verified Performance Metrics
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors duration-150 inline-block">
                  Cross-Border Scaling Insights
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="hover:text-white transition-colors duration-150 text-left cursor-pointer inline-flex items-center gap-1 text-slate-300"
                >
                  <span>Free Strategy Audit</span>
                  <i className="fa-solid fa-arrow-right text-[9px] text-[#1769E0]"></i>
                </button>
              </li>
            </ul>
          </div>

          {/* SECTION 5: CONTACT & GLOBAL OPERATIONS */}
          <div>
            <h3 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4 text-blue-300">
              Contact &amp; Hubs
            </h3>
            
            <div className="space-y-2.5 text-slate-300 mb-4">
              <div className="flex items-start gap-2.5">
                <i className="fa-solid fa-location-dot text-[#1769E0] text-xs mt-0.5 shrink-0"></i>
                <span className="leading-snug text-[11.5px]">{siteSettings.businessAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="fa-solid fa-envelope text-[#1769E0] text-xs shrink-0"></i>
                <a
                  href={`mailto:${siteSettings.contactEmail}`}
                  className="hover:text-white transition-colors duration-150 text-[11.5px]"
                >
                  {siteSettings.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="fa-solid fa-phone text-[#1769E0] text-xs shrink-0"></i>
                <span className="text-[11.5px]">{siteSettings.contactPhone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <i className="fa-solid fa-clock text-[#1769E0] text-xs shrink-0"></i>
                <span className="text-[11.5px]">{siteSettings.businessHours}</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-2 text-slate-300">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-[#1769E0] hover:text-white text-slate-300 flex items-center justify-center transition-colors"
              >
                <i className="fa-brands fa-linkedin-in text-xs"></i>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X Twitter profile"
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-[#1769E0] hover:text-white text-slate-300 flex items-center justify-center transition-colors"
              >
                <i className="fa-brands fa-x-twitter text-xs"></i>
              </a>
              <a
                href="https://Facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook profile"
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-[#1769E0] hover:text-white text-slate-300 flex items-center justify-center transition-colors"
              >
                <i className="fa-brands fa-facebook text-xs"></i>
              </a>
            </div>
          </div>

        </nav>

        {/* Technical & AI Discovery Resources (Subtle Secondary Area) */}
        <section
          aria-label="Technical and AI Resources"
          className="pt-6 pb-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400"
        >
          {/* <div className="flex items-center gap-2 text-slate-400">
            <i className="fa-solid fa-code-branch text-[10px] text-slate-500"></i>
            <span className="font-semibold text-slate-400 text-[10.5px] tracking-wide">
              Technical &amp; AI Discovery
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-[10.5px] text-slate-400">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
            >
              XML Sitemap
            </a>
            <span className="text-slate-600 select-none">•</span>
            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
            >
              robots.txt
            </a>
            <span className="text-slate-600 select-none">•</span>
            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
            >
              llms.txt
            </a>
            <span className="text-slate-600 select-none">•</span>
            <a
              href="/llms-full.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors"
            >
              llms-full.txt
            </a>
          </div> */}
        </section>

        {/* Bottom Legal, Trust & Copyright Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">Simply Smart Solution</span>
            <span className="text-slate-600 select-none">•</span>
            <span>{t.footer.copyright}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a href="#privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-slate-200 transition-colors">
              Cookie Preferences
            </a>
            <a href="#accessibility" className="hover:text-slate-200 transition-colors">
              Accessibility
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
