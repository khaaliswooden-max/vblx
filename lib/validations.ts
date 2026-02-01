import { z } from 'zod'

// ============================================================================
// COMMERCIAL INTAKE FORM SCHEMA
// ============================================================================

export const commercialFormSchema = z.object({
  // Contact Information
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  jobTitle: z.string().optional(),
  
  // Company Information
  companyName: z.string().min(2, 'Company name is required'),
  companySize: z.enum(['1-50', '51-200', '201-500', '501-1000', '1000+'], {
    required_error: 'Please select company size',
  }),
  industry: z.string().min(1, 'Please select an industry'),
  website: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  
  // Interest
  productInterest: z.enum(['pro-sales', 'pro-biz', 'pro-people', 'pro-visit', 'pro-ticket', 'multiple', 'unsure'], {
    required_error: 'Please select a product of interest',
  }),
  useCase: z.string().min(10, 'Please describe your use case (minimum 10 characters)'),
  timeline: z.enum(['immediate', '1-3months', '3-6months', '6-12months', 'exploring'], {
    required_error: 'Please select a timeline',
  }),
  budget: z.enum(['under50k', '50k-100k', '100k-250k', '250k-500k', '500k+', 'unsure']).optional(),
  
  // Additional
  referralSource: z.string().optional(),
  additionalNotes: z.string().optional(),
  marketingConsent: z.boolean().default(false),
})

export type CommercialFormData = z.infer<typeof commercialFormSchema>

// ============================================================================
// FEDERAL/SLED INTAKE FORM SCHEMA
// ============================================================================

export const federalFormSchema = z.object({
  // Contact Information
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  jobTitle: z.string().min(2, 'Job title is required'),
  
  // Organization Information
  organizationName: z.string().min(2, 'Organization name is required'),
  organizationType: z.enum(['federal', 'state', 'local', 'tribal', 'education', 'contractor'], {
    required_error: 'Please select organization type',
  }),
  agency: z.string().optional(),
  department: z.string().optional(),
  
  // Contract Information
  contractVehicle: z.enum(['gsa-mas', 'gwac', 'bpa', 'idiq', 'open-market', 'other', 'unsure'], {
    required_error: 'Please select a contract vehicle',
  }),
  naicsCodes: z.string().optional(),
  setAsidePreference: z.enum(['none', 'small-business', '8a', 'hubzone', 'sdvosb', 'wosb', 'other']).optional(),
  
  // Project Details
  productInterest: z.enum(['pro-sales', 'pro-biz', 'pro-people', 'pro-visit', 'pro-ticket', 'multiple', 'unsure'], {
    required_error: 'Please select a product of interest',
  }),
  projectDescription: z.string().min(20, 'Please provide a project description (minimum 20 characters)'),
  complianceRequirements: z.array(z.string()).optional(),
  securityLevel: z.enum(['unclassified', 'cui', 'secret', 'topsecret', 'other']).optional(),
  
  // Timeline & Budget
  timeline: z.enum(['immediate', '1-3months', '3-6months', '6-12months', 'fy-planning'], {
    required_error: 'Please select a timeline',
  }),
  estimatedValue: z.enum(['under100k', '100k-500k', '500k-1m', '1m-5m', '5m+', 'unsure']).optional(),
  fundingStatus: z.enum(['funded', 'pending', 'unfunded', 'unsure']).optional(),
  
  // Additional
  currentIncumbent: z.string().optional(),
  additionalNotes: z.string().optional(),
  bdFollowUp: z.boolean().default(true),
})

export type FederalFormData = z.infer<typeof federalFormSchema>

// ============================================================================
// ASSESSMENT / CALCULATOR LEAD CAPTURE SCHEMA
// ============================================================================
// Used by: DoD Compliance, SAP S/4HANA ROI, Digital Transformation assessments
// Submits to Google Sheets via webhook

export const assessmentLeadSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  organization: z.string().min(1, 'Organization is required'),
  role: z.string().optional(),
  // Assessment source (which tool generated this lead)
  source: z.enum(['dod-compliance', 'sap-s4hana-roi', 'digital-transformation']).optional(),
  // Flexible payload for assessment-specific data (scores, answers, etc.)
  assessmentData: z.record(z.unknown()).optional(),
})

export type AssessmentLeadData = z.infer<typeof assessmentLeadSchema>

// ============================================================================
// FORM OPTIONS
// ============================================================================

export const INDUSTRY_OPTIONS = [
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'financial-services', label: 'Financial Services' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'technology', label: 'Technology' },
  { value: 'retail', label: 'Retail & E-commerce' },
  { value: 'education', label: 'Education' },
  { value: 'energy', label: 'Energy & Utilities' },
  { value: 'transportation', label: 'Transportation & Logistics' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'professional-services', label: 'Professional Services' },
  { value: 'other', label: 'Other' },
]

export const COMPANY_SIZE_OPTIONS = [
  { value: '1-50', label: '1-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '501-1000', label: '501-1,000 employees' },
  { value: '1000+', label: '1,000+ employees' },
]

export const PRODUCT_OPTIONS = [
  { value: 'pro-sales', label: 'Pro-Sales — CRM Excellence' },
  { value: 'pro-biz', label: 'Pro-Biz — Business Intelligence' },
  { value: 'pro-people', label: 'Pro-People — Workforce Management' },
  { value: 'pro-visit', label: 'Pro-Visit — Visitor Management' },
  { value: 'pro-ticket', label: 'Pro-Ticket — Service Management' },
  { value: 'multiple', label: 'Multiple Products' },
  { value: 'unsure', label: 'Not sure yet' },
]

export const TIMELINE_OPTIONS = [
  { value: 'immediate', label: 'Immediate (within 30 days)' },
  { value: '1-3months', label: '1-3 months' },
  { value: '3-6months', label: '3-6 months' },
  { value: '6-12months', label: '6-12 months' },
  { value: 'exploring', label: 'Just exploring' },
]

export const FEDERAL_TIMELINE_OPTIONS = [
  { value: 'immediate', label: 'Immediate requirement' },
  { value: '1-3months', label: '1-3 months' },
  { value: '3-6months', label: '3-6 months' },
  { value: '6-12months', label: '6-12 months' },
  { value: 'fy-planning', label: 'FY planning/budgeting' },
]

export const BUDGET_OPTIONS = [
  { value: 'under50k', label: 'Under $50K' },
  { value: '50k-100k', label: '$50K - $100K' },
  { value: '100k-250k', label: '$100K - $250K' },
  { value: '250k-500k', label: '$250K - $500K' },
  { value: '500k+', label: '$500K+' },
  { value: 'unsure', label: 'Not determined' },
]

export const ORGANIZATION_TYPE_OPTIONS = [
  { value: 'federal', label: 'Federal Agency' },
  { value: 'state', label: 'State Government' },
  { value: 'local', label: 'Local Government' },
  { value: 'tribal', label: 'Tribal Government' },
  { value: 'education', label: 'Education (K-12, Higher Ed)' },
  { value: 'contractor', label: 'Government Contractor' },
]

export const CONTRACT_VEHICLE_OPTIONS = [
  { value: 'gsa-mas', label: 'GSA MAS (Multiple Award Schedule)' },
  { value: 'gwac', label: 'GWAC (Government-Wide Acquisition Contract)' },
  { value: 'bpa', label: 'BPA (Blanket Purchase Agreement)' },
  { value: 'idiq', label: 'IDIQ (Indefinite Delivery/Indefinite Quantity)' },
  { value: 'open-market', label: 'Open Market' },
  { value: 'other', label: 'Other' },
  { value: 'unsure', label: 'Not sure' },
]

export const SECURITY_LEVEL_OPTIONS = [
  { value: 'unclassified', label: 'Unclassified' },
  { value: 'cui', label: 'CUI (Controlled Unclassified Information)' },
  { value: 'secret', label: 'Secret' },
  { value: 'topsecret', label: 'Top Secret' },
  { value: 'other', label: 'Other/Special Programs' },
]

export const ESTIMATED_VALUE_OPTIONS = [
  { value: 'under100k', label: 'Under $100K' },
  { value: '100k-500k', label: '$100K - $500K' },
  { value: '500k-1m', label: '$500K - $1M' },
  { value: '1m-5m', label: '$1M - $5M' },
  { value: '5m+', label: '$5M+' },
  { value: 'unsure', label: 'Not determined' },
]

export const COMPLIANCE_OPTIONS = [
  { value: 'fedramp', label: 'FedRAMP' },
  { value: 'fisma', label: 'FISMA' },
  { value: 'hipaa', label: 'HIPAA' },
  { value: 'cmmc', label: 'CMMC' },
  { value: 'nist-800-53', label: 'NIST 800-53' },
  { value: 'nist-800-171', label: 'NIST 800-171' },
  { value: 'section-508', label: 'Section 508' },
  { value: 'stateramp', label: 'StateRAMP' },
  { value: 'itar', label: 'ITAR' },
  { value: 'other', label: 'Other' },
]

export const SET_ASIDE_OPTIONS = [
  { value: 'none', label: 'No preference / Full & Open' },
  { value: 'small-business', label: 'Small Business Set-Aside' },
  { value: '8a', label: '8(a) Set-Aside' },
  { value: 'hubzone', label: 'HUBZone Set-Aside' },
  { value: 'sdvosb', label: 'SDVOSB Set-Aside' },
  { value: 'wosb', label: 'WOSB/EDWOSB Set-Aside' },
  { value: 'other', label: 'Other' },
]

export const FUNDING_STATUS_OPTIONS = [
  { value: 'funded', label: 'Funded / Obligated' },
  { value: 'pending', label: 'Pending Approval' },
  { value: 'unfunded', label: 'Unfunded Requirement' },
  { value: 'unsure', label: 'Unknown' },
]
