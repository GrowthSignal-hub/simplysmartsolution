export interface Service {
  id: string;
  slug: string;
  name: string;
  icon: string; // Font Awesome class, e.g. "fa-solid fa-magnifying-glass-chart"
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  features: string[];
  processSteps: { step: number; title: string; desc: string }[];
  deliverables: string[];
  industries: string[];
  whyChoose: string[];
  pricingRange?: string;
  faqs?: { q: string; a: string }[];
  image: string;
  isFeatured: boolean;
  isActive: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  country: string;
  services: string[];
  challenge: string;
  solution: string;
  results: { label: string; value: string; metricNumber: number; suffix: string }[];
  image: string;
  isFeatured: boolean;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  stats: string;
  sampleProject: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  date: string;
  featuredImage: string;
  tags: string[];
  isPublished: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  country: string;
  avatar: string;
  quote: string;
  rating: number;
  projectResult: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  serviceInterested: string;
  budget: string;
  message: string;
  status: 'new' | 'contacted' | 'mql' | 'proposal' | 'won' | 'archived';
  createdAt: string;
}

export interface MediaItem {
  id: string;
  name: string;
  section: 'hero' | 'services' | 'portfolio' | 'blog' | 'testimonials' | 'industries' | 'about' | 'team' | 'logos' | 'favicon' | 'misc';
  url: string;
  size: string;
  dimensions: string;
  mimeType: string;
  uploadedAt: string;
  isActive: boolean;
  usage: string;
}

export interface SiteSettings {
  brandName: string;
  logoUrl: string;
  faviconUrl: string;
  heroHeadline: string;
  heroHighlight: string;
  heroSupportingText: string;
  taglines: string[];
  contactEmail: string;
  contactPhone: string;
  businessAddress: string;
  businessHours: string;
}

export interface ClientProject {
  id: string;
  title: string;
  clientName: string;
  status: 'In Progress' | 'Review' | 'Delivered';
  completionPercent: number;
  milestones: { title: string; done: boolean }[];
  nextDeliverable: string;
  dueDate: string;
}

export type LanguageCode = 'en' | 'ja' | 'ar' | 'zh';
