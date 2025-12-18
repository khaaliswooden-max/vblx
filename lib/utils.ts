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
 * Platform data constants
 */
export const PLATFORMS = {
  austra: {
    name: 'AUSTRA',
    tagline: 'Operational Intelligence OS',
    description: 'Know your operations. Act with precision.',
    color: '#3182CE',
    features: [
      'Workforce intelligence',
      'Facility operations',
      'Project management',
      'AI anomaly detection',
    ],
    modules: ['Pro-People', 'Pro-School', 'Pro-Canteen', 'Pro-Parking', 'Pro-Project'],
    href: '/platforms/austra',
  },
  aureon: {
    name: 'AUREON',
    tagline: 'Procurement Substrate',
    description: 'The procurement layer for the next decade.',
    color: '#6B46C1',
    features: [
      'Opportunity intelligence',
      'Proposal automation',
      'Supply chain visibility',
      'Win probability modeling',
    ],
    modules: ['Pro-Sales', 'Pro-Biz'],
    href: '/platforms/aureon',
  },
  civium: {
    name: 'CIVIUM',
    tagline: 'Compliance Engine',
    description: 'Compliance at the speed of business.',
    color: '#38B2AC',
    features: [
      'Visitor management',
      'Threat assessment',
      'Service management',
      'Warranty assurance',
    ],
    modules: ['Pro-Visit', 'Pro-Ticket', 'Pro-Assure'],
    href: '/platforms/civium',
  },
} as const

export type PlatformKey = keyof typeof PLATFORMS

/**
 * Company information
 */
export const COMPANY = {
  name: 'Visionblox LLC',
  tagline: 'The Operating System for Enterprise Operations',
  mission: 'We build software that powers institutions',
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
    website: 'https://visionblox.com',
  },
} as const

/**
 * Navigation links
 */
export const NAV_LINKS = [
  {
    label: 'Platforms',
    href: '#platforms',
    children: [
      { label: 'AUSTRA', href: '/platforms/austra', description: 'Operational Intelligence OS' },
      { label: 'AUREON', href: '/platforms/aureon', description: 'Procurement Substrate' },
      { label: 'CIVIUM', href: '/platforms/civium', description: 'Compliance Engine' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Services', href: '/services' },
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

