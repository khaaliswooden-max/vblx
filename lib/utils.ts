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
 * Product Suite data constants
 */
export const PRODUCTS = {
  'pro-sales': {
    name: 'Pro-Sales',
    tagline: 'CRM Excellence',
    description: 'Revolutionize your sales process management and build lasting customer relationships.',
    color: '#10B981',
    features: [
      'Contact management',
      'Advanced analytics',
      'Pipeline tracking',
      'Deal automation',
    ],
    href: '/products/pro-sales',
  },
  'pro-assure': {
    name: 'Pro-Assure',
    tagline: 'Quality Assurance',
    description: 'Comprehensive warranty and quality assurance management for enterprise operations.',
    color: '#3B82F6',
    features: [
      'Warranty tracking',
      'Quality metrics',
      'Compliance reports',
      'SLA management',
    ],
    href: '/products/pro-assure',
  },
  'pro-biz': {
    name: 'Pro-Biz',
    tagline: 'Business Intelligence',
    description: 'Drive strategic decisions with powerful business intelligence and analytics.',
    color: '#8B5CF6',
    features: [
      'Real-time dashboards',
      'Predictive analytics',
      'Custom reporting',
      'Data visualization',
    ],
    href: '/products/pro-biz',
  },
  'pro-people': {
    name: 'Pro-People',
    tagline: 'Workforce Management',
    description: 'Optimize your workforce with intelligent HR and people management solutions.',
    color: '#EC4899',
    features: [
      'Employee records',
      'Performance tracking',
      'Attendance management',
      'HR analytics',
    ],
    href: '/products/pro-people',
  },
  'pro-project': {
    name: 'Pro-Project',
    tagline: 'Project Management',
    description: 'Deliver projects on time and budget with comprehensive project management tools.',
    color: '#F59E0B',
    features: [
      'Task scheduling',
      'Resource allocation',
      'Milestone tracking',
      'Collaboration tools',
    ],
    href: '/products/pro-project',
  },
  'pro-task': {
    name: 'Pro-Task',
    tagline: 'Task Automation',
    description: 'Streamline workflows with intelligent task management and automation.',
    color: '#06B6D4',
    features: [
      'Workflow automation',
      'Priority management',
      'Team assignments',
      'Progress tracking',
    ],
    href: '/products/pro-task',
  },
  'pro-ticket': {
    name: 'Pro-Ticket',
    tagline: 'Service Management',
    description: 'Deliver exceptional customer service with robust ticketing and support management.',
    color: '#EF4444',
    features: [
      'Ticket routing',
      'SLA monitoring',
      'Customer portal',
      'Resolution analytics',
    ],
    href: '/products/pro-ticket',
  },
  'pro-pupil': {
    name: 'Pro-Pupil',
    tagline: 'Education Management',
    description: 'Transform educational administration with comprehensive student management.',
    color: '#14B8A6',
    features: [
      'Student records',
      'Grade tracking',
      'Attendance system',
      'Parent portal',
    ],
    href: '/products/pro-pupil',
  },
  'pro-visit': {
    name: 'Pro-Visit',
    tagline: 'Visitor Management',
    description: 'Secure and streamline visitor management for modern facilities.',
    color: '#6366F1',
    features: [
      'Check-in/check-out',
      'Badge printing',
      'Host notifications',
      'Security compliance',
    ],
    href: '/products/pro-visit',
  },
  'docsnip': {
    name: 'DocSnip',
    tagline: 'Document Intelligence',
    description: 'Effortless data extraction and document management for professionals.',
    color: '#84CC16',
    features: [
      'Smart extraction',
      'Snippet organization',
      'Seamless integration',
      'Rapid deployment',
    ],
    href: '/products/docsnip',
  },
} as const

export type ProductKey = keyof typeof PRODUCTS

/**
 * Platform data constants (legacy - kept for backward compatibility with case studies)
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
    website: 'https://www.visionblox.org',
  },
} as const

/**
 * Navigation links
 */
export const NAV_LINKS = [
  {
    label: 'Product Suite',
    href: '#products',
    children: [
      { label: 'Pro-Sales', href: '/products/pro-sales', description: 'CRM Excellence' },
      { label: 'Pro-Assure', href: '/products/pro-assure', description: 'Quality Assurance' },
      { label: 'Pro-Biz', href: '/products/pro-biz', description: 'Business Intelligence' },
      { label: 'Pro-People', href: '/products/pro-people', description: 'Workforce Management' },
      { label: 'Pro-Project', href: '/products/pro-project', description: 'Project Management' },
      { label: 'Pro-Task', href: '/products/pro-task', description: 'Task Automation' },
      { label: 'Pro-Ticket', href: '/products/pro-ticket', description: 'Service Management' },
      { label: 'Pro-Pupil', href: '/products/pro-pupil', description: 'Education Management' },
      { label: 'Pro-Visit', href: '/products/pro-visit', description: 'Visitor Management' },
      { label: 'DocSnip', href: '/products/docsnip', description: 'Document Intelligence' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Federal & Government', href: '/industries/federal', description: 'Public sector solutions' },
      { label: 'Healthcare', href: '/industries/healthcare', description: 'HIPAA-compliant platforms' },
      { label: 'Financial Services', href: '/industries/fintech', description: 'SOX-compliant operations' },
      { label: 'Manufacturing', href: '/industries/manufacturing', description: 'Multi-site visibility' },
      { label: 'View All Industries', href: '/industries', description: '7 industries served' },
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

