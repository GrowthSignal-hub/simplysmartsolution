import React, { useState } from 'react';
import { Service, LanguageCode } from '../types';
import { translations } from '../data/initialData';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  services: Service[];
  currentLang: LanguageCode;
  onOpenConsultationWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  currentLang,
  onOpenConsultationWithService,
}) => {
  const t = translations[currentLang] || translations.en;
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section
      id="services"
      className="py-20 bg-[#F5F8FC]/60 relative border-b border-slate-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1769E0] text-xs font-bold uppercase tracking-wider mb-3">
            <i className="fa-solid fa-shapes text-xs"></i>
            <span>{t.services.sectionTitle}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] tracking-tight mb-4">
            {t.services.sectionHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#52657D] leading-relaxed">
            {t.services.sectionSub}
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services
            .filter((s) => s.isActive)
            .map((service) => (
              <div
                key={service.id}
                id={`service-card-${service.slug}`}
                onClick={() => setSelectedService(service)}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Featured Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1769E0] flex items-center justify-center text-xl group-hover:bg-[#1769E0] group-hover:text-white transition-colors duration-200 shadow-xs">
                      <i className={service.icon}></i>
                    </div>
                    {service.isFeatured && (
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1769E0] text-[11px] font-bold border border-blue-100">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B1F3A] group-hover:text-[#1769E0] transition-colors duration-200 mb-2.5">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#52657D] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Key Highlights Bullet points */}
                  <div className="space-y-2 mb-6">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#10233F]">
                        <i className="fa-solid fa-check text-[#1769E0] mt-0.5 text-[10px]"></i>
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1769E0]">
                  <span className="group-hover:underline">{t.services.learnMore}</span>
                  <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#1769E0] group-hover:bg-[#1769E0] group-hover:text-white transition-all duration-200">
                    <i className="fa-solid fa-arrow-right text-[11px] transform group-hover:translate-x-0.5 transition-transform"></i>
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>

      {/* Glassmorphism Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForConsultation={onOpenConsultationWithService}
        currentLang={currentLang}
      />
    </section>
  );
};
