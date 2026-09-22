import React, { useState, useEffect } from 'react';
import { LanguageCode, Service, CaseStudy, Lead, MediaItem, SiteSettings, ClientProject } from './types';
import {
  initialSiteSettings,
  initialServices,
  initialCaseStudies,
  initialIndustries,
  initialTestimonials,
  initialLeads,
  initialMediaItems,
  initialClientProjects,
} from './data/initialData';
import { useRoute } from './hooks/useRoute';
import { useAdminAuth } from './hooks/useAdminAuth';

import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustMetrics } from './components/TrustMetrics';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { GlobalPresenceSection } from './components/GlobalPresenceSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { AIAssistantWidget } from './components/AIAssistantWidget';
import { AdminPanel } from './components/AdminPanel';
import { AdminLogin } from './components/AdminLogin';

export default function App() {
  // Routing
  const { currentRoute, navigateTo } = useRoute();
  
  // Admin Authentication
  const { isAuthenticated, isLoading: authLoading, login: adminLogin, logout: adminLogout } = useAdminAuth();

  // Language selection (EN, JA, AR, ZH)
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');

  // Load persistent state from localStorage if available, or fall back to rich PRD data
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('sss_site_settings');
    if (saved) {
      try { return JSON.parse(saved); } catch { /* ignore */ }
    }
    return initialSiteSettings;
  });

  const [services, setServices] = useState<Service[]>(() => {
    const saved = localStorage.getItem('sss_services');
    if (saved) {
      try { return JSON.parse(saved); } catch { /* ignore */ }
    }
    return initialServices;
  });

  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(() => {
    const saved = localStorage.getItem('sss_case_studies');
    if (saved) {
      try { return JSON.parse(saved); } catch { /* ignore */ }
    }
    return initialCaseStudies;
  });

  const [leads, setLeads] = useState<Lead[]>(() => {
    const saved = localStorage.getItem('sss_leads');
    if (saved) {
      try { return JSON.parse(saved); } catch { /* ignore */ }
    }
    return initialLeads;
  });

  const [mediaItems, setMediaItems] = useState<MediaItem[]>(() => {
    const saved = localStorage.getItem('sss_media');
    if (saved) {
      try { return JSON.parse(saved); } catch { /* ignore */ }
    }
    return initialMediaItems;
  });

  const [clientProjects] = useState<ClientProject[]>(initialClientProjects);

  // Modals & Mode states
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPreselectedService, setConsultationPreselectedService] = useState('');

  // Sync siteSettings to localStorage
  const handleUpdateSiteSettings = (updated: SiteSettings) => {
    setSiteSettings(updated);
    localStorage.setItem('sss_site_settings', JSON.stringify(updated));
  };

  // Sync services to localStorage
  const handleUpdateServices = (updated: Service[]) => {
    setServices(updated);
    localStorage.setItem('sss_services', JSON.stringify(updated));
  };

  // Sync caseStudies to localStorage
  const handleUpdateCaseStudies = (updated: CaseStudy[]) => {
    setCaseStudies(updated);
    localStorage.setItem('sss_case_studies', JSON.stringify(updated));
  };

  // Sync leads to localStorage
  const handleAddLead = (newLead: Lead) => {
    const updated = [newLead, ...leads];
    setLeads(updated);
    localStorage.setItem('sss_leads', JSON.stringify(updated));
  };

  const handleUpdateLeads = (updated: Lead[]) => {
    setLeads(updated);
    localStorage.setItem('sss_leads', JSON.stringify(updated));
  };

  // Sync mediaItems to localStorage
  const handleUpdateMediaItems = (updated: MediaItem[]) => {
    setMediaItems(updated);
    localStorage.setItem('sss_media', JSON.stringify(updated));
  };

  const handleOpenConsultationWithService = (serviceName: string) => {
    setConsultationPreselectedService(serviceName);
    setIsConsultationOpen(true);
  };

  // Update HTML tag lang & direction
  useEffect(() => {
    document.documentElement.lang = currentLang;
    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [currentLang]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#10233F] font-sans antialiased selection:bg-[#1769E0] selection:text-white">
      
      {/* Route: Admin Login & Dashboard */}
      {currentRoute === 'admin' && !authLoading && (
        <>
          {!isAuthenticated ? (
            <AdminLogin
              onLogin={(userId, password) => {
                const success = adminLogin(userId, password);
                return success;
              }}
            />
          ) : (
            <div className="min-h-screen flex flex-col bg-slate-50">
              {/* Admin Dashboard Header */}
              <header className="bg-[#0B1F3A] text-white px-6 py-4 border-b border-white/10 shadow-lg">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">Simply Smart Solution - Admin Panel</h1>
                  <button
                    onClick={() => {
                      adminLogout();
                      navigateTo('home');
                    }}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors text-sm flex items-center gap-2"
                  >
                    <i className="fa-solid fa-sign-out-alt"></i>
                    Logout
                  </button>
                </div>
              </header>

              {/* Admin Panel Content */}
              <main className="flex-1">
                <AdminPanel
                  siteSettings={siteSettings}
                  onUpdateSiteSettings={handleUpdateSiteSettings}
                  services={services}
                  onUpdateServices={handleUpdateServices}
                  caseStudies={caseStudies}
                  onUpdateCaseStudies={handleUpdateCaseStudies}
                  leads={leads}
                  onUpdateLeads={handleUpdateLeads}
                  mediaItems={mediaItems}
                  onUpdateMediaItems={handleUpdateMediaItems}
                  clientProjects={clientProjects}
                  onCloseAdmin={() => {
                    adminLogout();
                    navigateTo('home');
                  }}
                />
              </main>
            </div>
          )}
        </>
      )}

      {/* Route: Home / Public Website */}
      {currentRoute === 'home' && (
        <>
          {/* Sticky Header with continuous looping animated tagline underneath logo */}
          <Header
            currentLang={currentLang}
            onLanguageChange={setCurrentLang}
            siteSettings={siteSettings}
            onOpenConsultation={() => {
              setConsultationPreselectedService('');
              setIsConsultationOpen(true);
            }}
          />

          {/* Main Page Sections */}
          <main className="flex-1">
            
            {/* Hero Section */}
            <HeroSection
              currentLang={currentLang}
              siteSettings={siteSettings}
              onOpenConsultation={() => {
                setConsultationPreselectedService('');
                setIsConsultationOpen(true);
              }}
            />

            {/* Real-time Trust & Numeric Counter Metrics */}
            <TrustMetrics currentLang={currentLang} />

            {/* Services Section with Dynamic Glassmorphism Modal */}
            <ServicesSection
              services={services}
              currentLang={currentLang}
              onOpenConsultationWithService={handleOpenConsultationWithService}
            />

            {/* Targeted Industries Bento Grid */}
            <IndustriesSection
              industries={initialIndustries}
              currentLang={currentLang}
            />

            {/* Global Presence Hubs & Interactive Map */}
            <GlobalPresenceSection currentLang={currentLang} />

            {/* Case Studies & Quantitative ROI Outcomes */}
            <CaseStudiesSection
              caseStudies={caseStudies}
              currentLang={currentLang}
              onOpenConsultation={() => {
                setConsultationPreselectedService('Enterprise Expansion');
                setIsConsultationOpen(true);
              }}
            />

            {/* 4-Stage Execution Methodology */}
            <ProcessSection
              currentLang={currentLang}
              onOpenConsultation={() => {
                setConsultationPreselectedService('Execution Roadmap');
                setIsConsultationOpen(true);
              }}
            />

            {/* Client Perspective Testimonials */}
            <TestimonialsSection
              testimonials={initialTestimonials}
              currentLang={currentLang}
            />

          </main>

          {/* Global Navy Footer */}
          <Footer
            currentLang={currentLang}
            siteSettings={siteSettings}
            onOpenConsultation={() => {
              setConsultationPreselectedService('');
              setIsConsultationOpen(true);
            }}
          />

          {/* Consultation Booking Modal */}
          <ConsultationModal
            isOpen={isConsultationOpen}
            onClose={() => setIsConsultationOpen(false)}
            preselectedService={consultationPreselectedService}
            onAddLead={handleAddLead}
          />

          {/* SSS AI Growth Consultant Floating Widget */}
          <AIAssistantWidget
            services={services}
            caseStudies={caseStudies}
            onOpenConsultation={() => {
              setConsultationPreselectedService('');
              setIsConsultationOpen(true);
            }}
          />
        </>
      )}

    </div>
  );
}
