import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines clsx and tailwind-merge for conditional class handling
 * with proper Tailwind CSS class merging
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Product Suite data (empty; add products when ready)
 */
export const PRODUCTS: Record<string, { name: string; tagline: string; color: string; href: string }> = {}

/**
 * Company information
 */
export const COMPANY = {
  name: 'Visionblox LLC',
  tagline: 'The Operating System for Enterprise Operations',
  mission: 'We build software for institutions.',
  cageCode: '9Z4X2',
  uei: 'H4X2Z7R9E3E3',
  status: 'Minority-Owned, GSA MAS Springboard',
  headquarters: 'San Jose, CA',
  locations: [
    { city: 'San Jose, CA', country: 'USA', type: 'HQ' },
    { city: 'Philadelphia, PA', country: 'USA', type: 'Office' },
    { city: 'Muscat', country: 'Oman', type: 'Office' },
    { city: 'Dubai', country: 'UAE', type: 'Office' },
    { city: 'Chennai', country: 'India', type: 'Office' },
  ],
  contact: {
    name: 'Khaalis Wooden',
    title: 'Director of Enterprise Capture & Compliance',
    email: 'khaalis.wooden@visionblox.com',
    phone: '+1 (210) 429-4227',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/100849749/',
    website: 'https://www.visionblox.org',
  },
} as const

/**
 * Assessment tools / calculators (external links)
 * Home to SAP Migration and Digital Transformation Readiness Assessment.
 */
export const TOOLS = [
  {
    id: 'sap-migration',
    title: 'SAP S/4 HANA Migration Readiness Assessment',
    description:
      'Discover your migration timeline, estimated costs, and readiness score for transitioning from SAP ECC/R/3 to S/4 HANA. Get a personalized roadmap and potential savings.',
    url: 'https://luxury-lamington-69160b.netlify.app/',
  },
  {
    id: 'iso-27001',
    title: 'ISO 27001 Readiness Assessment',
    description:
      'Evaluate your organization\'s information security maturity and certification readiness in under 5 minutes. Get a readiness score, gap analysis, and estimated timeline to certification.',
    url: 'https://reliable-gumption-55bfd8.netlify.app/',
  },
  {
    id: 'cmmc-level-2',
    title: 'CMMC Level 2 Readiness Assessment & Cost Calculator',
    description:
      'Assess CMMC Level 2 readiness, estimate costs, and build a compliance roadmap. For defense contractors—get your readiness score and prioritized roadmap in under 5 minutes.',
    url: 'https://poetic-banoffee-a6f976.netlify.app/#assessment',
  },
  {
    id: 'lotgrid-parking-visitor',
    title: 'LotGrid Parking & Visitor Management ROI Assessment',
    description:
      'Quantify parking and visitor management inefficiencies across labor, leakage, and operations. Estimate annual savings and ROI from implementing LotGrid\'s platform for your facility.',
    url: 'https://timely-hamster-f5a51f.netlify.app/',
  },
  {
    id: 'digital-transformation-readiness',
    title: 'Digital Transformation Readiness Assessment',
    description:
      'Discover the right services to accelerate your enterprise evolution. This 5-minute assessment analyzes your current state, identifies gaps, and recommends tailored solutions across SAP, AI/ML, Development, and Risk & Compliance.',
    url: 'https://resplendent-fairy-e1b773.netlify.app/',
  },
  {
    id: 'document-accessibility-score',
    title: 'Document Accessibility Score Calculator',
    description:
      'Assess Section 508 & WCAG 2.1 AA compliance for your document inventory and estimate potential savings from AI-powered remediation.',
    url: 'https://astounding-daffodil-2eaf9f.netlify.app/',
  },
] as const

/**
 * Navigation links
 */
export const NAV_LINKS = [
  { label: 'Product Suite', href: '/products' },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Healthcare', href: '/industries/healthcare', description: 'HIPAA-compliant platforms' },
      { label: 'Financial Services', href: '/industries/fintech', description: 'SOX-compliant operations' },
      { label: 'Manufacturing', href: '/industries/manufacturing', description: 'Multi-site visibility' },
      { label: 'View All Industries', href: '/industries', description: '9 industries with case studies' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Web Development', href: '/services/web-development', description: 'PHP, Python, .NET solutions' },
      { label: 'SAP S/4 HANA', href: '/services/s4-hana', description: 'Next-gen ERP transformation' },
      { label: 'AI & ML Solutions', href: '/services/ai-ml-solutions', description: 'Intelligent automation' },
      { label: 'View All Services', href: '/services', description: '20 service offerings' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Tools', href: '/tools' },
  { label: 'About', href: '/about' },
  {
    label: 'Contact',
    href: '/contact',
    children: [
      { label: 'Commercial', href: '/contact/commercial', description: 'Enterprise & Commercial inquiries' },
      { label: 'Federal & SLED', href: '/contact/federal', description: 'Government & Public Sector' },
    ],
  },
] as const

/**
 * Stats for display
 */
export const STATS = [
  { value: '10+', label: 'Enterprise Clients' },
  { value: '5', label: 'Global Offices' },
  { value: '99.9%', label: 'Platform Uptime' },
  { value: '24/7', label: 'Support Coverage' },
] as const

/**
 * Format a phone number for display
 */
export function formatPhone(phone: string): string {
  return phone.replace(/[^\d+]/g, '')
}

/**
 * Delay utility for animations
 */
export function staggerDelay(index: number, base: number = 0.1): number {
  return index * base
}

