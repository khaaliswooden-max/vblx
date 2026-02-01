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
 * Each connects to Google Sheets via webhook for lead capture:
 * - Sheet: https://docs.google.com/spreadsheets/d/1-CGWDlwAilR2Q_MKyE7tNrMP7Sf_PnrABonNDALzSXs/
 * - Webhook: configurable via ASSESSMENT_WEBHOOK_URL env
 */
export const TOOLS = [
  {
    id: 'dod-compliance',
    title: 'DoD Compliance Readiness Assessment',
    description: 'Evaluate zero-trust and compliance posture in 2 minutes',
    url: 'https://eloquent-churros-6a929a.netlify.app/',
  },
  {
    id: 'sap-s4hana-roi',
    title: 'SAP S/4HANA Migration ROI Calculator',
    description: 'Calculate potential savings and timeline for S/4HANA migration',
    url: 'https://nimble-daffodil-ff9878.netlify.app/',
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation Readiness Assessment',
    description: 'Discover the right services to accelerate your enterprise evolution',
    url: 'https://luminous-cheesecake-d7c9dd.netlify.app/',
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

