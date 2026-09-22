import { Service, CaseStudy, Industry, BlogPost, Testimonial, Lead, MediaItem, SiteSettings, ClientProject } from '../types';

export const initialSiteSettings: SiteSettings = {
  brandName: 'Simply Smart Solution',
  logoUrl: '/assets/images/logos/sss-logo.svg',
  faviconUrl: '/assets/images/favicon/favicon.svg',
  heroHeadline: 'Your Digital Growth Partner',
  heroHighlight: 'Built for Global Business',
  heroSupportingText: 'We help ambitious businesses grow through data-driven digital marketing, high-performance websites, ecommerce solutions and intelligent technology.',
  taglines: [
    'Your Digital Growth Partner',
    'Digital Solutions Built for Global Growth',
    'Build, Grow, Scale, Globally'
  ],
  contactEmail: 'contact@simplysmartsolution.net',
  contactPhone: '+1 (415) 890-7820',
  businessAddress: 'Global Operations: Tokyo • San Francisco • London',
  businessHours: '24/7 Global Client Support'
};

export const initialServices: Service[] = [
  {
    id: 'srv-1',
    slug: 'seo-aeo-geo',
    name: 'SEO / AEO / GEO Discovery',
    icon: 'fa-solid fa-magnifying-glass-chart',
    shortDesc: 'Search visibility, AI discovery engines, and Generative Engine Optimization to dominate modern search results.',
    fullDesc: 'We architect next-generation search visibility systems that go far beyond legacy keywords. By combining technical SEO, semantic entity architecture, and Generative Engine Optimization (GEO/AEO), we position your brand as the definitive authority referenced by Google Search, Gemini, Perplexity, and ChatGPT.',
    benefits: [
      'Multi-engine organic visibility across Google, Bing, and AI search engines',
      'Entity authority mapping for automated citation in AI-generated answers',
      'High-intent organic lead flow with sustainable, compounding customer acquisition',
      'Localized multilingual search dominance in Japan, USA, and European markets'
    ],
    features: [
      'Technical Core Web Vitals and crawl budget optimization',
      'Schema.org JSON-LD graph architecture and semantic entity building',
      'AI answer engine optimization (Perplexity, ChatGPT, Gemini indexing)',
      'High-authority global digital PR and backlink acquisition',
      'Comprehensive competitor gap analysis and keyword intent clustering'
    ],
    processSteps: [
      { step: 1, title: 'Deep Technical & AI Audit', desc: 'Full scan of domain authority, crawlability, indexation status, and AI knowledge graph presence.' },
      { step: 2, title: 'Entity Architecture', desc: 'Structuring content into interconnected topic clusters with semantic markup.' },
      { step: 3, title: 'Content & Authority Sprint', desc: 'Producing high-impact research, localized landing pages, and editorial PR backlinks.' },
      { step: 4, title: 'Continuous AI Monitoring', desc: 'Tracking brand citation frequency in LLM search engines and SERP rankings.' }
    ],
    deliverables: [
      'Monthly Technical Health & Ranking Scorecard',
      'AI Citation & Search Engine Discovery Index',
      'Full Competitor Movement & Market Share Report',
      'Bi-weekly Strategic Optimization Calls'
    ],
    industries: ['SaaS', 'Ecommerce', 'Healthcare', 'IT & Software', 'Finance'],
    whyChoose: [
      'Proprietary GEO auditing methodology testing AI answer inclusion',
      'Bilingual Japanese and English search specialists with native cultural understanding',
      'Zero black-hat shortcuts — 100% white-hat algorithmic safety'
    ],
    pricingRange: '$3,500 – $8,500 / month',
    faqs: [
      { q: 'What is the difference between SEO and AEO/GEO?', a: 'Traditional SEO optimizes for blue links on Google. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) optimize your content so AI assistants like ChatGPT, Perplexity, and Gemini cite your brand as the recommended solution in direct answers.' },
      { q: 'Can you optimize for both Japanese and American search engines?', a: 'Yes. We have dedicated native teams in Tokyo and the USA who adapt tone, search intent, and platform preferences (e.g. Yahoo! JAPAN vs Google US).' }
    ],
    image: '/assets/images/services/seo-aeo.jpg',
    isFeatured: true,
    isActive: true
  },
  {
    id: 'srv-2',
    slug: 'google-ads-ppc',
    name: 'Google Ads & Performance Marketing',
    icon: 'fa-solid fa-bullseye',
    shortDesc: 'Qualified traffic, automated bidding architectures, and high-ROI multi-channel paid media campaigns.',
    fullDesc: 'Maximize your advertising spend with data-driven paid media execution. We construct tightly calibrated Google Ads, YouTube, LinkedIn, and Meta campaigns engineered for qualified lead generation and scalable customer acquisition across global territories.',
    benefits: [
      'Drastically reduced Cost Per Acquisition (CPA) through predictive bidding',
      'High-intent buyer targeting capturing customers at the exact decision moment',
      'Multi-currency and multi-language campaign coordination',
      'Transparent live attribution dashboards with zero vanity metrics'
    ],
    features: [
      'Google Search, Performance Max, Display & YouTube video campaigns',
      'First-party conversion API and server-side tracking infrastructure',
      'Dynamic multi-variant creative testing and copywriting',
      'Negative keyword and bot traffic filtering algorithms',
      'Cross-border ad spend optimization and local compliance'
    ],
    processSteps: [
      { step: 1, title: 'Tracking & Attribution Setup', desc: 'Implementing server-side tracking, conversion values, and CRM webhook sync.' },
      { step: 2, title: 'Audience & Intent Modeling', desc: 'Identifying highest-converting search terms and building customized remarketing lists.' },
      { step: 3, title: 'Campaign Deployment', desc: 'Launching targeted ad sets with localized ad copy and responsive creative.' },
      { step: 4, title: 'Algorithmic Optimization', desc: 'Scaling winning ad clusters and adjusting bid strategies for maximum ROAS.' }
    ],
    deliverables: [
      'Real-time Executive Looker Studio Dashboard',
      'Weekly Search Term & Placement Waste Audits',
      'Quarterly Creative Refresh and Landing Page Variants',
      'Dedicated Account Director'
    ],
    industries: ['Car Rental', 'Ecommerce', 'SaaS', 'Education', 'Hospitality'],
    whyChoose: [
      'Certified Google Premier Partner status with access to beta ad features',
      'Rigorous unit-economics approach targeting bottom-line profitability',
      'Experience managing over $25M in cumulative global media budgets'
    ],
    pricingRange: '$2,500 / month + % of ad spend',
    faqs: [
      { q: 'How fast can we expect results from Google Ads?', a: 'Paid campaigns begin driving targeted traffic immediately upon launch. We typically reach stable conversion efficiency within 14 to 28 days of algorithmic learning.' }
    ],
    image: '/assets/images/services/google-ads.jpg',
    isFeatured: true,
    isActive: true
  },
  {
    id: 'srv-3',
    slug: 'social-media-marketing',
    name: 'Social Media & Brand Growth',
    icon: 'fa-solid fa-share-nodes',
    shortDesc: 'Brand visibility, audience scaling, and multi-channel acquisition across LinkedIn, X, Meta, and Instagram.',
    fullDesc: 'Build an enduring global brand identity that commands attention. We develop strategic social media campaigns that combine engaging storytelling, executive thought leadership, and viral short-form media to turn casual followers into passionate brand advocates.',
    benefits: [
      'Elevated international brand prestige and industry recognition',
      'Executive thought leadership establishing C-suite authority',
      'Strong organic engagement driving low-cost inbound inquiries',
      'Culturally adapted messaging for diverse global demographics'
    ],
    features: [
      'End-to-end editorial calendar design and content scheduling',
      'Video production and dynamic infographic creative',
      'Executive LinkedIn ghostwriting and personal brand acceleration',
      'Community engagement, influencer partnerships, and brand monitoring'
    ],
    processSteps: [
      { step: 1, title: 'Brand Narrative Design', desc: 'Defining unique voice, visual design system, and key thematic content pillars.' },
      { step: 2, title: 'Creative Production', desc: 'Producing high-fidelity visuals, motion graphics, and localized copy.' },
      { step: 3, title: 'Distribution & Engagement', desc: 'Publishing during optimal regional time windows and managing community discussions.' },
      { step: 4, title: 'Analytics Review', desc: 'Refining content formulas based on audience retention and click-through rates.' }
    ],
    deliverables: [
      '30-Day Predictive Content Grid',
      'Custom Graphic and Video Asset Deliverables',
      'Monthly Engagement & Follower Growth Report'
    ],
    industries: ['IT & Software', 'Manufacturing', 'Hospitality', 'Healthcare'],
    whyChoose: [
      'Multi-cultural creative team providing seamless cross-border resonance',
      'Data-backed creative iterations based on actual conversion data'
    ],
    pricingRange: '$2,800 – $6,000 / month',
    image: '/assets/images/services/social-media.jpg',
    isFeatured: true,
    isActive: true
  },
  {
    id: 'srv-4',
    slug: 'web-development',
    name: 'High-Performance Web Development',
    icon: 'fa-solid fa-code',
    shortDesc: 'Fast, scalable websites, enterprise portals, and conversion-optimized digital web applications.',
    fullDesc: 'Engineering web experiences that load in milliseconds, convert visitors into buyers, and scale effortlessly under heavy global traffic. We build custom corporate websites, client portals, and web applications adhering strictly to WCAG 2.2 AA accessibility, Core Web Vitals standards, and modern security protocols.',
    benefits: [
      'Lightning-fast page load speeds (LCP < 1.8s) boosting conversion rates',
      'Flawless responsive behavior across desktop, tablet, and mobile devices',
      'Robust application-level security, clean MVC separation, and modern architecture',
      'Intuitive CMS control giving your team full autonomy over content updates'
    ],
    features: [
      'Custom frontend architecture with responsive Tailwind CSS systems',
      'Secure backend APIs, session protection, CSRF defense, and database optimization',
      'Interactive client portals with file management, approvals, and milestone trackers',
      'Multilingual internationalization (i18n) and localized currency handling',
      'Automated CI/CD deployment pipelines with zero-downtime rollouts'
    ],
    processSteps: [
      { step: 1, title: 'UX & Information Architecture', desc: 'Wireframing user journeys, conversion funnels, and component hierarchies.' },
      { step: 2, title: 'UI System Design', desc: 'Crafting pixel-perfect design systems with accessible contrast and responsive behavior.' },
      { step: 3, title: 'Clean Code Implementation', desc: 'Building modular, maintainable, and thoroughly tested codebase.' },
      { step: 4, title: 'Performance & Security QA', desc: 'Running Core Web Vitals profiling, penetration checks, and accessibility audits.' }
    ],
    deliverables: [
      'Fully Deployed Production Web Application',
      'Complete Source Code Repository & Documentation',
      'Comprehensive Admin Panel and CMS Training Guide',
      '12-Month Security & Performance Guarantee'
    ],
    industries: ['IT & Software', 'SaaS', 'Finance', 'Manufacturing', 'Car Rental'],
    whyChoose: [
      'Obsessive performance optimization reaching 95+ Google Lighthouse scores',
      'Full-stack engineering expertise across scalable web architectures',
      'Enterprise-grade security standards with zero bloat'
    ],
    pricingRange: '$5,000 – $25,000 / project',
    image: '/assets/images/services/web-dev.jpg',
    isFeatured: true,
    isActive: true
  },
  {
    id: 'srv-5',
    slug: 'ecommerce-solutions',
    name: 'Global Ecommerce Solutions',
    icon: 'fa-solid fa-cart-shopping',
    shortDesc: 'Conversion-focused ecommerce storefronts, cross-border payments, and unified inventory systems.',
    fullDesc: 'Transform online browsing into high-ticket global revenue. We architect high-converting ecommerce platforms featuring seamless international checkouts, multi-currency support, automated tax/duties calculation, and frictionless mobile user experiences.',
    benefits: [
      'Frictionless multi-currency checkouts boosting global conversion by up to 45%',
      'Seamless integration with global ERPs, warehouses, and shipping logistics',
      'Fast 1-click mobile checkout workflows (Apple Pay, Google Pay, local methods)',
      'Built-in upselling, cross-selling, and automated abandoned cart recovery'
    ],
    features: [
      'Headless commerce or custom Shopify Plus / WooCommerce setups',
      'International localization (currency, language, shipping, payment gateways)',
      'Automated inventory synchronization across multiple sales channels',
      'Real-time customer reviews, product bundling, and subscription engines'
    ],
    processSteps: [
      { step: 1, title: 'Ecommerce Strategy', desc: 'Auditing SKU catalogs, international shipping routes, and payment gateways.' },
      { step: 2, title: 'Checkout & UX Design', desc: 'Designing high-converting product detail pages and 1-click checkout funnels.' },
      { step: 3, title: 'Custom Integration', desc: 'Integrating payment gateways (Stripe, PayPay, Apple Pay) and ERP connectors.' },
      { step: 4, title: 'Conversion Rate Testing', desc: 'A/B testing checkout friction points and optimizing cart conversion.' }
    ],
    deliverables: [
      'Turnkey Global Ecommerce Storefront',
      'Automated Order & Shipping Notification Flows',
      'Integrated Multi-Currency Merchant Accounts'
    ],
    industries: ['Ecommerce', 'Manufacturing', 'Retail', 'Hospitality'],
    whyChoose: [
      'Deep experience in cross-border commerce between Japan, North America, and Europe',
      'Technical mastery of fraud protection and PCI-DSS compliance'
    ],
    pricingRange: '$6,500 – $30,000 / project',
    image: '/assets/images/services/ecommerce.jpg',
    isFeatured: true,
    isActive: true
  },
  {
    id: 'srv-6',
    slug: 'ai-chat-automation',
    name: 'AI Chat & Intelligent Automation',
    icon: 'fa-solid fa-robot',
    shortDesc: 'Intelligent customer support, 24/7 lead qualification, and custom CRM automation workflows.',
    fullDesc: 'Empower your sales and support operations with intelligent AI automation. We deploy custom-trained conversational AI assistants that understand nuanced customer queries, qualify inbound prospects, schedule appointments, and sync data directly into your CRM.',
    benefits: [
      'Instant 24/7 client response time reducing lead drop-off to zero',
      'Automated qualification of high-value prospects before routing to human sales',
      'Substantial reduction in repetitive customer support tickets',
      'Multilingual real-time translation handling international inquiries effortlessly'
    ],
    features: [
      'Custom LLM agent fine-tuned on your company knowledge base',
      'Guardrailed reasoning ensuring compliant, accurate company answers',
      'Automated calendar booking and CRM contact creation',
      'Seamless human agent handoff for complex escalation scenarios'
    ],
    processSteps: [
      { step: 1, title: 'Knowledge Base Curation', desc: 'Ingesting FAQs, case studies, service catalogs, and pricing rules.' },
      { step: 2, title: 'Agent Configuration & Guardrails', desc: 'Programming safety boundaries, tone guidelines, and lead qualification logic.' },
      { step: 3, title: 'CRM & Widget Integration', desc: 'Connecting live chat widgets to Slack, HubSpot, or custom databases.' },
      { step: 4, title: 'Continuous Learning', desc: 'Auditing conversation logs and closing knowledge gaps.' }
    ],
    deliverables: [
      'Custom AI Agent Widget & API Gateway',
      'Knowledge Base Admin Management Interface',
      'Weekly Conversation Analytics & Lead Qualification Logs'
    ],
    industries: ['SaaS', 'Car Rental', 'Healthcare', 'Education', 'IT & Software'],
    whyChoose: [
      'Strict truthfulness guardrails preventing hallucinated commitments',
      'Enterprise-grade privacy with zero training on proprietary client data'
    ],
    pricingRange: '$3,000 – $7,500 setup + maintenance',
    image: '/assets/images/services/ai-chat.jpg',
    isFeatured: true,
    isActive: true
  }
];

export const initialCaseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Cross-Border Ecommerce Scaling',
    client: 'NipponCraft Global',
    industry: 'Ecommerce',
    country: 'Japan & USA',
    services: ['SEO / AEO / GEO', 'Ecommerce Solutions', 'Google Ads'],
    challenge: 'A Tokyo-based artisan manufacturer struggled to acquire customers in the US and Europe due to high checkout friction, language barriers, and poor international search visibility.',
    solution: 'Engineered a high-performance multi-currency storefront, instituted an entity-based SEO and AI Answer Engine strategy, and launched hyper-targeted Google Search campaigns across North America.',
    results: [
      { label: 'Organic Traffic', value: '+320%', metricNumber: 320, suffix: '%' },
      { label: 'Qualified Leads', value: '+180%', metricNumber: 180, suffix: '%' },
      { label: 'Global Revenue', value: '+120%', metricNumber: 120, suffix: '%' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    isFeatured: true
  },
  {
    id: 'cs-2',
    title: 'Enterprise SaaS Customer Acquisition Platform',
    client: 'CloudVector Systems',
    industry: 'SaaS / IT',
    country: 'USA & Global',
    services: ['Web Development', 'Google Ads / PPC', 'SEO / AEO / GEO'],
    challenge: 'High cost-per-lead and an outdated marketing website that failed to articulate their enterprise cloud security value proposition to Fortune 500 CTOs.',
    solution: 'Designed and deployed an ultra-fast web portal (LCP 1.1s) with interactive product calculators, gated technical whitepapers, and predictive PPC campaign bidding.',
    results: [
      { label: 'MQL Volume', value: '+240%', metricNumber: 240, suffix: '%' },
      { label: 'Cost Per Acquisition', value: '-48%', metricNumber: 48, suffix: '%' },
      { label: 'Pipeline Value', value: '$8.4M', metricNumber: 8, suffix: 'M+' }
    ],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    isFeatured: true
  },
  {
    id: 'cs-3',
    title: 'Nationwide Fleet Booking & AI Reservation Portal',
    client: 'Apex Drive International',
    industry: 'Car Rental & Mobility',
    country: 'Canada & Australia',
    services: ['Web Development', 'AI Chat & Support', 'Google Ads'],
    challenge: 'Legacy phone booking bottlenecks and high cart drop-off rates during peak international travel holiday periods.',
    solution: 'Created a frictionless mobile booking flow, integrated multi-lingual AI support for instant vehicle reservation changes, and optimized local search maps.',
    results: [
      { label: 'Online Bookings', value: '+195%', metricNumber: 195, suffix: '%' },
      { label: 'Support Ticket Reduction', value: '-62%', metricNumber: 62, suffix: '%' },
      { label: 'Customer CSAT', value: '4.9/5', metricNumber: 98, suffix: '%' }
    ],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    isFeatured: true
  },
  {
    id: 'cs-4',
    title: 'Medical HealthTech Brand Launch & Compliance System',
    client: 'OmniHealth Solutions',
    industry: 'Healthcare',
    country: 'Germany & UK',
    services: ['SEO / AEO / GEO', 'Web Development', 'Social Media'],
    challenge: 'Complex health regulatory compliance, low digital presence, and high competition among European diagnostic platforms.',
    solution: 'Constructed an authoritative medical portal adhering to strict privacy laws, executed physician-oriented LinkedIn growth, and secured top AI answer citations for diagnostic procedures.',
    results: [
      { label: 'Specialist Referrals', value: '+310%', metricNumber: 310, suffix: '%' },
      { label: 'Page Speed Index', value: '99/100', metricNumber: 99, suffix: '/100' },
      { label: 'AI Citations', value: '450+', metricNumber: 450, suffix: '+' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    isFeatured: false
  }
];

export const initialIndustries: Industry[] = [
  {
    id: 'ind-1',
    name: 'IT & Software',
    icon: 'fa-solid fa-laptop-code',
    description: 'Technical positioning, developer marketing, and high-velocity lead acquisition for tech companies.',
    stats: '60+ Tech Clients Scaled',
    sampleProject: 'Developer Documentation & Enterprise Portal'
  },
  {
    id: 'ind-2',
    name: 'Ecommerce & Retail',
    icon: 'fa-solid fa-bag-shopping',
    description: 'Cross-border commerce, Shopify Plus optimization, and ROAS-focused performance media.',
    stats: '+140% Average GMV Growth',
    sampleProject: 'Global Luxury Direct-to-Consumer Brand'
  },
  {
    id: 'ind-3',
    name: 'SaaS & Cloud Platforms',
    icon: 'fa-solid fa-cloud-arrow-up',
    description: 'Product-led growth loops, demo booking funnel design, and churn reduction strategies.',
    stats: '$42M+ Pipeline Generated',
    sampleProject: 'B2B Enterprise Workflow Automation'
  },
  {
    id: 'ind-4',
    name: 'Car Rental & Mobility',
    icon: 'fa-solid fa-car',
    description: 'Instant reservation engines, dynamic fleet pricing displays, and local tourist acquisition.',
    stats: '2.5M+ Reservations Processed',
    sampleProject: 'Multi-City Fleet Management Booking Engine'
  },
  {
    id: 'ind-5',
    name: 'Healthcare & Biotech',
    icon: 'fa-solid fa-heart-pulse',
    description: 'HIPAA/GDPR compliant web design, patient education portals, and medical authority SEO.',
    stats: '100% Regulatory Compliance',
    sampleProject: 'Telehealth Consultation & Booking Platform'
  },
  {
    id: 'ind-6',
    name: 'Education & EdTech',
    icon: 'fa-solid fa-graduation-cap',
    description: 'Student enrollment acquisition, course marketing, and interactive learning portals.',
    stats: '85k+ Students Enrolled',
    sampleProject: 'Global Language Learning Subscription Platform'
  },
  {
    id: 'ind-7',
    name: 'Finance & Fintech',
    icon: 'fa-solid fa-coins',
    description: 'High-security financial portals, institutional trust building, and accredited investor funnels.',
    stats: 'Tier-1 Bank Grade Security',
    sampleProject: 'Cross-Border Wealth Advisory Portal'
  },
  {
    id: 'ind-8',
    name: 'Advanced Manufacturing',
    icon: 'fa-solid fa-industry',
    description: 'B2B distributor lead generation, complex 3D product visualizers, and global RFP acquisition.',
    stats: '+210% Inbound RFPs',
    sampleProject: 'Precision Industrial Components Global Catalog'
  },
  {
    id: 'ind-9',
    name: 'Hospitality & Luxury Travel',
    icon: 'fa-solid fa-hotel',
    description: 'Visual immersive storytelling, high-yield direct guest bookings, and localized concierge AI.',
    stats: '+35% Direct Booking Ratio',
    sampleProject: 'Boutique Hotel Collection International Portal'
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Kenji Takahashi',
    role: 'Managing Director',
    company: 'Tokyo Precision Robotics',
    country: 'Japan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Simply Smart Solution transformed our global presence. We expanded our enterprise machinery sales into North America and Germany within six months. Their bilingual team and data-driven approach delivered measurable results.',
    rating: 5,
    projectResult: '+280% Overseas B2B Inquiries'
  },
  {
    id: 't-2',
    clientName: 'Sarah Jenkins',
    role: 'VP of Growth',
    company: 'Nexura Cloud Systems',
    country: 'United States',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    quote: 'Most agencies promise rankings, but SSS built an entire customer acquisition ecosystem. Their combination of modern web engineering, AI search engine optimization, and Google Ads reduced our CAC by half while doubling demo bookings.',
    rating: 5,
    projectResult: '2.4x Demo Conversion Rate'
  },
  {
    id: 't-3',
    clientName: 'Marcus Weber',
    role: 'Chief Commercial Officer',
    company: 'Aethelgard Logistics',
    country: 'Germany',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'Simply Smart Solution executes with engineering precision. Their work on our international portal and multilingual marketing campaigns has made them an indispensable long-term growth partner for our executive board.',
    rating: 5,
    projectResult: '99.9% Uptime & +160% Leads'
  }
];

export const initialMediaItems: MediaItem[] = [
  {
    id: 'med-1',
    name: 'sss-logo.svg',
    section: 'logos',
    url: '/assets/images/logos/sss-logo.svg',
    size: '12 KB',
    dimensions: '240x60',
    mimeType: 'image/svg+xml',
    uploadedAt: '2026-09-19',
    isActive: true,
    usage: 'Header & Global Navbar'
  },
  {
    id: 'med-2',
    name: 'sss-logo-white.svg',
    section: 'logos',
    url: '/assets/images/logos/sss-logo-white.svg',
    size: '12 KB',
    dimensions: '240x60',
    mimeType: 'image/svg+xml',
    uploadedAt: '2026-09-19',
    isActive: true,
    usage: 'Dark Footer & Dark Global Section'
  },
  {
    id: 'med-3',
    name: 'favicon.svg',
    section: 'favicon',
    url: '/assets/images/favicon/favicon.svg',
    size: '4 KB',
    dimensions: '64x64',
    mimeType: 'image/svg+xml',
    uploadedAt: '2026-09-19',
    isActive: true,
    usage: 'Browser Tab & Bookmark Favicon'
  },
  {
    id: 'med-4',
    name: 'hero-dashboard-preview.png',
    section: 'hero',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    size: '420 KB',
    dimensions: '1200x800',
    mimeType: 'image/png',
    uploadedAt: '2026-09-19',
    isActive: true,
    usage: 'Homepage Hero Live Interactive Visual'
  },
  {
    id: 'med-5',
    name: 'seo-aeo-service.png',
    section: 'services',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    size: '310 KB',
    dimensions: '800x600',
    mimeType: 'image/jpeg',
    uploadedAt: '2026-09-19',
    isActive: true,
    usage: 'Services Section & Details Modal'
  },
  {
    id: 'med-6',
    name: 'nipponcraft-case-study.png',
    section: 'portfolio',
    url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    size: '350 KB',
    dimensions: '800x600',
    mimeType: 'image/jpeg',
    uploadedAt: '2026-09-19',
    isActive: true,
    usage: 'Case Studies Showcase'
  }
];

export const initialLeads: Lead[] = [
  {
    id: 'ld-1',
    name: 'Hiroshi Tanaka',
    email: 'h.tanaka@sora-auto.jp',
    phone: '+81 3-5555-0192',
    company: 'Sora Mobility Systems',
    country: 'Japan',
    serviceInterested: 'High-Performance Web Development',
    budget: '$15,000 – $30,000',
    message: 'We require a modern car rental and fleet booking web application localized for Japanese domestic and inbound English travelers.',
    status: 'mql',
    createdAt: '2026-09-18 14:20'
  },
  {
    id: 'ld-2',
    name: 'David Reynolds',
    email: 'david@zenithscale.io',
    phone: '+1 (415) 321-9988',
    company: 'Zenith Scale Inc',
    country: 'United States',
    serviceInterested: 'SEO / AEO / GEO Discovery',
    budget: '$5,000 – $10,000 / mo',
    message: 'Looking to optimize our B2B SaaS for Generative Engine Discovery on ChatGPT and Google SGE.',
    status: 'proposal',
    createdAt: '2026-09-17 09:45'
  },
  {
    id: 'ld-3',
    name: 'Emma Watson',
    email: 'e.watson@nordic-luxe.co.uk',
    phone: '+44 20 7946 0912',
    company: 'Nordic Luxe Goods',
    country: 'United Kingdom',
    serviceInterested: 'Global Ecommerce Solutions',
    budget: '$20,000+',
    message: 'Planning cross-border ecommerce expansion to North America and Japan with localized payment checkouts.',
    status: 'new',
    createdAt: '2026-09-19 01:15'
  }
];

export const initialClientProjects: ClientProject[] = [
  {
    id: 'cp-101',
    title: 'Global Headless Storefront & AI Chat Integration',
    clientName: 'NipponCraft Global',
    status: 'In Progress',
    completionPercent: 78,
    milestones: [
      { title: 'Information Architecture & Wireframes', done: true },
      { title: 'Tailwind Design System & UI Components', done: true },
      { title: 'Multi-Currency Checkout & Stripe Integration', done: true },
      { title: 'AI Assistant Support Training', done: false },
      { title: 'Final Core Web Vitals Optimization', done: false }
    ],
    nextDeliverable: 'AI Customer Qualification Bot Staging Review',
    dueDate: '2026-09-28'
  },
  {
    id: 'cp-102',
    title: 'Enterprise SEO & AEO Knowledge Graph Migration',
    clientName: 'CloudVector Systems',
    status: 'Review',
    completionPercent: 92,
    milestones: [
      { title: 'Schema.org JSON-LD Infrastructure', done: true },
      { title: 'Entity Authority Clustering', done: true },
      { title: 'Digital PR & Editorial Backlink Syndication', done: true },
      { title: 'Executive Analytics Looker Studio Dashboard', done: true }
    ],
    nextDeliverable: 'Quarterly Organic Growth Executive Summary',
    dueDate: '2026-09-22'
  }
];

export const initialBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'future-of-aeo-and-geo-in-2026',
    title: 'The Shift from Traditional SEO to AEO & Generative Engine Optimization',
    excerpt: 'How AI search engines like ChatGPT Search and Gemini are reshaping consumer discovery, and why traditional keyword stuffing is obsolete.',
    content: 'In 2026, search is no longer just ten blue links. Modern searchers rely heavily on AI summaries and conversational answer engines. Businesses that optimize their entities, schema architecture, and verifiable data sources enjoy direct citations and higher-converting referral traffic.',
    author: 'Alex Vance, Chief Growth Strategist',
    category: 'SEO & AI Search',
    date: 'Sep 15, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    tags: ['AEO', 'GEO', 'AI Search', 'Digital Marketing'],
    isPublished: true
  },
  {
    id: 'blog-2',
    slug: 'scaling-cross-border-ecommerce-japan-usa',
    title: 'Cross-Border Ecommerce: Bridging the Gap Between Japanese and US Consumers',
    excerpt: 'Key cultural nuances, payment preferences, and checkout ergonomics required to succeed in two of the world’s most lucrative digital economies.',
    content: 'Expanding an ecommerce brand across the Pacific requires far more than automated translation. From Japanese konbini payments and high-detail product specifications to streamlined US 1-click Apple Pay checkouts, your digital architecture must adapt natively.',
    author: 'Kenji Sato, Global Commerce Director',
    category: 'Ecommerce',
    date: 'Sep 10, 2026',
    featuredImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    tags: ['Ecommerce', 'Japan', 'USA', 'Global Business'],
    isPublished: true
  }
];

export const globalPresenceLocations = [
  {
    city: 'Tokyo',
    country: 'Japan',
    role: 'Asia-Pacific Regional Hub & Engineering',
    address: 'Marunouchi, Chiyoda-ku, Tokyo 100-0005',
    activeClients: '120+ Clients',
    timezone: 'UTC+9 (JST)',
    coordinates: { x: 82, y: 38 }
  },
  {
    city: 'San Francisco',
    country: 'United States',
    role: 'Americas Headquarters & Growth Lab',
    address: 'Market St, San Francisco, CA 94105',
    activeClients: '180+ Clients',
    timezone: 'UTC-8 (PST)',
    coordinates: { x: 20, y: 36 }
  },
  {
    city: 'New York',
    country: 'United States',
    role: 'East Coast Media & Enterprise Accounts',
    address: 'Madison Ave, New York, NY 10017',
    activeClients: '95+ Clients',
    timezone: 'UTC-5 (EST)',
    coordinates: { x: 28, y: 34 }
  },
  {
    city: 'Toronto',
    country: 'Canada',
    role: 'North American Expansion Center',
    address: 'Bay St, Toronto, ON M5J 2T3',
    activeClients: '45+ Clients',
    timezone: 'UTC-5 (EST)',
    coordinates: { x: 27, y: 30 }
  },
  {
    city: 'London',
    country: 'United Kingdom',
    role: 'European Commercial Operations',
    address: 'Bishopsgate, London EC2M 4NP',
    activeClients: '65+ Clients',
    timezone: 'UTC+1 (BST)',
    coordinates: { x: 48, y: 28 }
  },
  {
    city: 'Berlin',
    country: 'Germany',
    role: 'DACH Technology & Compliance Hub',
    address: 'Friedrichstraße, 10117 Berlin',
    activeClients: '40+ Clients',
    timezone: 'UTC+2 (CEST)',
    coordinates: { x: 52, y: 26 }
  },
  {
    city: 'Sydney',
    country: 'Australia',
    role: 'Oceania Strategic Growth Desk',
    address: 'George St, Sydney NSW 2000',
    activeClients: '35+ Clients',
    timezone: 'UTC+10 (AEST)',
    coordinates: { x: 88, y: 76 }
  },
  {
    city: 'São Paulo',
    country: 'Brazil',
    role: 'Latin America Emerging Markets Desk',
    address: 'Av. Paulista, São Paulo - SP',
    activeClients: '25+ Clients',
    timezone: 'UTC-3 (BRT)',
    coordinates: { x: 35, y: 72 }
  }
];

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      industries: 'Industries',
      caseStudies: 'Case Studies',
      resources: 'Resources',
      company: 'Company',
      contact: 'Contact',
      adminCms: 'Admin & CMS',
      consultation: 'Get a Free Consultation'
    },
    hero: {
      eyebrow: 'GLOBAL DIGITAL GROWTH PLATFORM',
      taglineSub: 'Data-driven marketing, web development, and intelligent technology.',
      ctaPrimary: 'Get a Free Consultation',
      ctaSecondary: 'View Our Work',
      trustBadge: 'Trusted by 500+ global brands across 14+ markets'
    },
    stats: {
      clients: '500+ Clients',
      retention: '95% Retention',
      support: '24/7 Support',
      markets: '14+ Markets'
    },
    services: {
      sectionTitle: 'Our Capabilities',
      sectionHeading: 'Comprehensive Digital Solutions Built for Global Scale',
      sectionSub: 'We combine performance marketing, cutting-edge web engineering, and AI automation to deliver measurable business outcomes.',
      learnMore: 'Learn More'
    },
    industries: {
      sectionTitle: 'Industries We Serve',
      sectionHeading: 'Tailored Digital Strategies for High-Growth Sectors',
      sectionSub: 'Deep industry domain expertise paired with global client acquisition systems.'
    },
    globalPresence: {
      sectionTitle: 'Global Reach. Local Understanding.',
      sectionSub: 'We work with businesses across markets, combining global digital expertise with localized strategy and communication.',
      activeLabel: 'Active Regional Operations',
      globalFirst: 'Global First Architecture'
    },
    caseStudies: {
      sectionTitle: 'Case Studies & Measurable Outcomes',
      sectionHeading: 'Proven Results for Ambitious Global Brands',
      sectionSub: 'Explore how we engineer sustainable, high-velocity growth across markets.',
      allTab: 'All Markets',
      japanTab: 'Japan Market',
      usaTab: 'USA Market',
      globalTab: 'Global Markets'
    },
    footer: {
      topCtaHeading: 'Ready to Grow Your Business Online?',
      topCtaSub: "Let's build a smarter digital growth strategy for your business.",
      topCtaButton: 'Get a Free Consultation',
      copyright: '© 2026 Simply Smart Solution. All rights reserved.'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      services: 'サービス',
      industries: '対応業界',
      caseStudies: '導入事例',
      resources: 'リソース',
      company: '会社概要',
      contact: 'お問い合わせ',
      adminCms: '管理・CMS',
      consultation: '無料相談を申し込む'
    },
    hero: {
      eyebrow: 'グローバル・デジタル成長プラットフォーム',
      taglineSub: 'データ主導のデジタルマーケティング、高速Web開発、および高度なAIテクノロジー。',
      ctaPrimary: '無料相談を申し込む',
      ctaSecondary: '事例・実績を見る',
      trustBadge: '世界14以上の市場で500社を超える企業に選ばれています'
    },
    stats: {
      clients: '500社以上の実績',
      retention: '95%の継続率',
      support: '24/7 グローバル対応',
      markets: '14以上の展開市場'
    },
    services: {
      sectionTitle: '提供サービス',
      sectionHeading: 'グローバルスケールを実現する包括的デジタルソリューション',
      sectionSub: 'パフォーマンスマーケティング、最先端Webエンジニアリング、AI自動化を融合し、測定可能な事業成果を提供します。',
      learnMore: '詳細を見る'
    },
    industries: {
      sectionTitle: '対応業界',
      sectionHeading: '高成長セクターに特化したデジタル戦略',
      sectionSub: '業界特有の深い知見と、グローバルな顧客獲得システムを融合。'
    },
    globalPresence: {
      sectionTitle: 'グローバルな展開力、ローカルな深い理解。',
      sectionSub: '日本と米国を主軸に、世界各地の市場において現地に最適化された戦略とコミュニケーションを展開します。',
      activeLabel: '地域拠点オペレーション',
      globalFirst: 'グローバル・ファースト設計'
    },
    caseStudies: {
      sectionTitle: '導入事例・成果実績',
      sectionHeading: '野心的なグローバル企業のための確かな成果',
      sectionSub: '各市場において持続可能で加速的な成長を実現したプロジェクトをご覧ください。',
      allTab: '全市場',
      japanTab: '日本市場',
      usaTab: '米国市場',
      globalTab: 'グローバル市場'
    },
    footer: {
      topCtaHeading: 'ビジネスをグローバルに成長させる準備はできましたか？',
      topCtaSub: 'デジタル目標を測定可能な確かな成果へと変えましょう。',
      topCtaButton: 'プロジェクトを開始する',
      copyright: '© 2026 Simply Smart Solution. All rights reserved.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'الخدمات',
      industries: 'الصناعات',
      caseStudies: 'دراسات الحالة',
      resources: 'الموارد',
      company: 'الشركة',
      contact: 'اتصل بنا',
      adminCms: 'لوحة التحكم',
      consultation: 'احجز استشارة مجانية'
    },
    hero: {
      eyebrow: 'منصة النمو الرقمي العالمية',
      taglineSub: 'حلول رقمية قائمة على البيانات للتوسع والنمو العالمي.',
      ctaPrimary: 'احجز استشارة مجانية',
      ctaSecondary: 'شاهد أعمالنا',
      trustBadge: 'موثوق به من أكثر من 500 علامة تجارية عالمية'
    },
    stats: {
      clients: '+500 عميل',
      retention: '95% احتفاظ',
      support: '24/7 دعم',
      markets: '+14 سوق'
    },
    services: {
      sectionTitle: 'خدماتنا',
      sectionHeading: 'حلول رقمية متكاملة للنمو العالمي',
      sectionSub: 'نجمع بين التسويق وتطوير الويب والذكاء الاصطناعي لتحقيق نتائج ملموسة.',
      learnMore: 'اعرف المزيد'
    },
    industries: {
      sectionTitle: 'الصناعات التي نخدمها',
      sectionHeading: 'استراتيجيات رقمية مخصصة للقطاعات الحيوية',
      sectionSub: 'خبرة صناعية عميقة ممزوجة بأنظمة الاستحواذ العالمية.'
    },
    globalPresence: {
      sectionTitle: 'انتشار عالمي. فهم محلي.',
      sectionSub: 'نعمل عبر الأسواق لتقديم نتائج ملموسة.',
      activeLabel: 'عمليات إقليمية نشطة',
      globalFirst: 'نهج عالمي أولاً'
    },
    caseStudies: {
      sectionTitle: 'دراسات الحالة',
      sectionHeading: 'نتائج مثبتة للعلامات التجارية العالمية',
      sectionSub: 'استكشف كيف نحقق نمواً استثنائياً.',
      allTab: 'جميع الأسواق',
      japanTab: 'سوق اليابان',
      usaTab: 'سوق أمريكا',
      globalTab: 'الأسواق العالمية'
    },
    footer: {
      topCtaHeading: 'هل أنت مستعد لتنمية أعمالك عالمياً؟',
      topCtaSub: 'دعنا نحول أهدافك الرقمية إلى نمو ملموس.',
      topCtaButton: 'ابدأ مشروعك الآن',
      copyright: '© 2026 Simply Smart Solution. جميع الحقوق محفوظة.'
    }
  },
  zh: {
    nav: {
      home: '首页',
      services: '核心服务',
      industries: '服务行业',
      caseStudies: '客户案例',
      resources: '资源中心',
      company: '关于我们',
      contact: '联系我们',
      adminCms: '管理后台',
      consultation: '免费获取咨询'
    },
    hero: {
      eyebrow: '全球数字化增长平台',
      taglineSub: '数据驱动的数字营销、高性能网站开发与智能技术系统。',
      ctaPrimary: '免费获取咨询',
      ctaSecondary: '查看案例成果',
      trustBadge: '全球14+市场超过500家企业的信赖之选'
    },
    stats: {
      clients: '500+ 全球客户',
      retention: '95% 留存率',
      support: '24/7 全天候支持',
      markets: '14+ 运营市场'
    },
    services: {
      sectionTitle: '专业能力',
      sectionHeading: '专为全球化扩张打造的全方位数字化解决方案',
      sectionSub: '融合效果营销、前沿Web工程与AI自动化，创造可衡量的商业回报。',
      learnMore: '查看详情'
    },
    industries: {
      sectionTitle: '服务行业',
      sectionHeading: '高增长行业的定制化数字化战略',
      sectionSub: '深厚的行业洞察与全球获客系统深度融合。'
    },
    globalPresence: {
      sectionTitle: '全球视野，本土洞察',
      sectionSub: '跨市场协作，结合全球数字经验与本地化策略沟通。',
      activeLabel: '区域运营中心',
      globalFirst: '全球优先架构'
    },
    caseStudies: {
      sectionTitle: '成功案例与实效',
      sectionHeading: '赋能全球雄心品牌的实证成果',
      sectionSub: '探索我们如何在各个市场实现持续的高速增长。',
      allTab: '全部市场',
      japanTab: '日本市场',
      usaTab: '美国市场',
      globalTab: '全球市场'
    },
    footer: {
      topCtaHeading: '准备好开启全球业务增长了吗？',
      topCtaSub: '让我们将您的数字化目标转化为可衡量的业务成果。',
      topCtaButton: '启动您的项目',
      copyright: '© 2026 Simply Smart Solution. 保留所有权利。'
    }
  }
};
