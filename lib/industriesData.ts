import {
  Shield,
  Building,
  HeartPulse,
  Landmark,
  Factory,
  Cpu,
  Plane,
  GraduationCap,
  ShoppingBag,
  Globe,
  type LucideIcon,
} from 'lucide-react'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface IndustryChallenge {
  title: string
  description: string
}

export interface IndustrySolution {
  platform: 'austra' | 'aureon' | 'civium'
  module: string
  description: string
}

export interface IndustryMetric {
  value: string
  label: string
}

export interface IndustryTestimonial {
  quote: string
  author: string
  title: string
  organization: string
}

export interface IndustryCompliance {
  name: string
  description: string
}

export interface Industry {
  id: string
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  color: string
  heroImage: string
  challenges: IndustryChallenge[]
  solutions: IndustrySolution[]
  metrics: IndustryMetric[]
  testimonial: IndustryTestimonial
  compliance: IndustryCompliance[]
  useCases: string[]
  relatedPlatforms: ('austra' | 'aureon' | 'civium')[]
}

// ============================================================================
// FEDERAL / GOVERNMENT
// ============================================================================

export const federalIndustry: Industry = {
  id: 'federal',
  name: 'Federal & Government',
  tagline: 'Mission-Critical Solutions for Public Sector Excellence',
  description: 'Purpose-built platforms that meet the stringent requirements of federal agencies, defense organizations, and government contractors. From FedRAMP compliance to FISMA certification, our solutions are engineered for the unique demands of public sector operations.',
  icon: Landmark,
  color: '#3B82F6',
  heroImage: '/images/industries/federal-hero.jpg',
  challenges: [
    {
      title: 'Complex Procurement Cycles',
      description: 'Navigating FAR/DFARS requirements, multi-year contract vehicles, and competitive bidding processes.',
    },
    {
      title: 'Stringent Security Requirements',
      description: 'Meeting FedRAMP, FISMA, and agency-specific security controls while maintaining operational efficiency.',
    },
    {
      title: 'Legacy System Integration',
      description: 'Modernizing operations while integrating with existing government IT infrastructure.',
    },
    {
      title: 'Workforce Management',
      description: 'Managing distributed federal workforce with compliance to OPM regulations and security clearance requirements.',
    },
  ],
  solutions: [
    {
      platform: 'aureon',
      module: 'Pro-Sales',
      description: 'Automated opportunity discovery across SAM.gov, GovWin, and agency-specific portals with FAR compliance checking.',
    },
    {
      platform: 'aureon',
      module: 'Pro-Biz',
      description: 'Proposal development automation with Section L/M compliance and past performance library management.',
    },
    {
      platform: 'civium',
      module: 'Pro-Visit',
      description: 'PIV/CAC-integrated visitor management with watchlist screening and HSPD-12 compliance.',
    },
    {
      platform: 'austra',
      module: 'Pro-People',
      description: 'Workforce intelligence with clearance tracking, performance management, and OPM reporting.',
    },
  ],
  metrics: [
    { value: '300%', label: 'Pipeline Growth' },
    { value: '35%', label: 'Win Rate Improvement' },
    { value: '100%', label: 'Compliance Score' },
    { value: '80%', label: 'Faster Processing' },
  ],
  testimonial: {
    quote: 'AUREON transformed our federal BD operations. We went from tracking opportunities in spreadsheets to a fully automated capture management system that helped us win our first $50M contract.',
    author: 'Sarah Mitchell',
    title: 'VP of Federal Programs',
    organization: 'Defense Technology Solutions',
  },
  compliance: [
    { name: 'FedRAMP', description: 'Federal Risk and Authorization Management Program' },
    { name: 'FISMA', description: 'Federal Information Security Management Act' },
    { name: 'NIST 800-53', description: 'Security and Privacy Controls' },
    { name: 'ITAR', description: 'International Traffic in Arms Regulations' },
    { name: 'Section 508', description: 'Accessibility Compliance' },
  ],
  useCases: [
    'Contract capture and proposal management',
    'Secure facility visitor management',
    'Workforce clearance tracking',
    'Compliance documentation and audit trails',
    'Multi-agency operations coordination',
  ],
  relatedPlatforms: ['aureon', 'civium', 'austra'],
}

// ============================================================================
// HEALTHCARE
// ============================================================================

export const healthcareIndustry: Industry = {
  id: 'healthcare',
  name: 'Healthcare & Life Sciences',
  tagline: 'Operational Excellence for Patient-Centered Care',
  description: 'HIPAA-compliant platforms designed for healthcare systems, hospitals, and life sciences organizations. Optimize workforce scheduling, visitor management, and operational efficiency while maintaining the highest standards of patient data protection.',
  icon: HeartPulse,
  color: '#10B981',
  heroImage: '/images/industries/healthcare-hero.jpg',
  challenges: [
    {
      title: 'Staff Scheduling Complexity',
      description: 'Managing 24/7 operations with complex shift patterns, credentialing requirements, and union agreements.',
    },
    {
      title: 'HIPAA Compliance',
      description: 'Ensuring patient data protection across all operational systems and visitor interactions.',
    },
    {
      title: 'Visitor & Contractor Management',
      description: 'Controlling facility access while maintaining a welcoming environment for patients and families.',
    },
    {
      title: 'Vendor Compliance',
      description: 'Managing pharmaceutical reps, equipment vendors, and contractors with appropriate access controls.',
    },
  ],
  solutions: [
    {
      platform: 'austra',
      module: 'Pro-People',
      description: 'Healthcare workforce optimization with credential tracking, shift management, and burnout prediction.',
    },
    {
      platform: 'civium',
      module: 'Pro-Visit',
      description: 'HIPAA-compliant visitor management with health screening, NDA collection, and patient matching.',
    },
    {
      platform: 'civium',
      module: 'Pro-Ticket',
      description: 'Clinical service request management with priority routing and compliance documentation.',
    },
    {
      platform: 'austra',
      module: 'Pro-Canteen',
      description: 'Cafeteria and dietary services management for staff, patients, and visitors.',
    },
  ],
  metrics: [
    { value: '25%', label: 'Overtime Reduction' },
    { value: '18pts', label: 'Staff Satisfaction Increase' },
    { value: '95%', label: 'Security Improvement' },
    { value: '0', label: 'HIPAA Violations' },
  ],
  testimonial: {
    quote: 'CIVIUM\'s visitor management system helped us achieve zero HIPAA findings in our last audit. The integration with Epic for patient matching was seamless.',
    author: 'Dr. Michael Chen',
    title: 'Chief Information Security Officer',
    organization: 'Regional Medical Center',
  },
  compliance: [
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'HITECH', description: 'Health Information Technology for Economic and Clinical Health' },
    { name: 'Joint Commission', description: 'Healthcare Accreditation Standards' },
    { name: 'OSHA', description: 'Occupational Safety and Health Administration' },
    { name: 'CMS', description: 'Centers for Medicare & Medicaid Services' },
  ],
  useCases: [
    'Nurse and physician scheduling optimization',
    'Patient visitor registration and screening',
    'Vendor and pharmaceutical rep management',
    'Equipment maintenance tracking',
    'Clinical service request management',
  ],
  relatedPlatforms: ['austra', 'civium'],
}

// ============================================================================
// FINANCIAL SERVICES
// ============================================================================

export const fintechIndustry: Industry = {
  id: 'fintech',
  name: 'Financial Services',
  tagline: 'Secure Operations for Regulated Excellence',
  description: 'SOX-compliant platforms for banks, insurance companies, and financial institutions. Manage vendor relationships, facility security, and operational compliance with audit-ready documentation at every step.',
  icon: Building,
  color: '#8B5CF6',
  heroImage: '/images/industries/fintech-hero.jpg',
  challenges: [
    {
      title: 'Regulatory Compliance',
      description: 'Meeting SOX, PCI-DSS, and GLBA requirements across all operational systems.',
    },
    {
      title: 'Third-Party Risk Management',
      description: 'Vetting and monitoring vendors, contractors, and service providers with appropriate controls.',
    },
    {
      title: 'Physical Security',
      description: 'Managing access to sensitive areas including data centers, trading floors, and vault facilities.',
    },
    {
      title: 'Audit Readiness',
      description: 'Maintaining complete documentation trails for regulatory examinations and internal audits.',
    },
  ],
  solutions: [
    {
      platform: 'civium',
      module: 'Pro-Visit',
      description: 'Financial-grade visitor management with NDA workflows, restricted zone access, and audit logging.',
    },
    {
      platform: 'aureon',
      module: 'Pro-Biz',
      description: 'Vendor procurement and RFP management with compliance scoring and risk assessment.',
    },
    {
      platform: 'civium',
      module: 'Pro-Assure',
      description: 'Asset and warranty management with SOX-compliant documentation and approval workflows.',
    },
    {
      platform: 'austra',
      module: 'Pro-Project',
      description: 'IT project management with compliance checkpoints and resource allocation.',
    },
  ],
  metrics: [
    { value: '100%', label: 'Audit Pass Rate' },
    { value: '60%', label: 'Vendor Onboarding Time Reduction' },
    { value: '45%', label: 'Compliance Cost Reduction' },
    { value: '$2M+', label: 'Annual Risk Mitigation' },
  ],
  testimonial: {
    quote: 'The audit trail capabilities in CIVIUM made our last SOX examination the smoothest we\'ve ever had. Every visitor, every access event, completely documented.',
    author: 'Jennifer Walsh',
    title: 'Chief Compliance Officer',
    organization: 'Atlantic Financial Group',
  },
  compliance: [
    { name: 'SOX', description: 'Sarbanes-Oxley Act' },
    { name: 'PCI-DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'GLBA', description: 'Gramm-Leach-Bliley Act' },
    { name: 'FFIEC', description: 'Federal Financial Institutions Examination Council' },
    { name: 'GDPR', description: 'General Data Protection Regulation' },
  ],
  useCases: [
    'Branch and data center visitor management',
    'Vendor due diligence and procurement',
    'IT asset lifecycle management',
    'Regulatory examination preparation',
    'Third-party risk monitoring',
  ],
  relatedPlatforms: ['civium', 'aureon', 'austra'],
}

// ============================================================================
// MANUFACTURING
// ============================================================================

export const manufacturingIndustry: Industry = {
  id: 'manufacturing',
  name: 'Manufacturing & Industrial',
  tagline: 'Operational Intelligence for Industrial Excellence',
  description: 'Platform solutions for discrete and process manufacturing, industrial facilities, and supply chain operations. Optimize workforce efficiency, maintain equipment compliance, and achieve operational visibility across all production sites.',
  icon: Factory,
  color: '#F59E0B',
  heroImage: '/images/industries/manufacturing-hero.jpg',
  challenges: [
    {
      title: 'Multi-Site Visibility',
      description: 'Achieving consistent operational visibility and standards across geographically distributed facilities.',
    },
    {
      title: 'Equipment Maintenance',
      description: 'Preventing unplanned downtime through predictive maintenance and warranty management.',
    },
    {
      title: 'Contractor Management',
      description: 'Safely managing contractors and vendors on production floors with appropriate safety training verification.',
    },
    {
      title: 'Supply Chain Disruption',
      description: 'Navigating supplier risks and procurement challenges in volatile global markets.',
    },
  ],
  solutions: [
    {
      platform: 'austra',
      module: 'Pro-Project',
      description: 'Multi-site project management with resource allocation and operational analytics.',
    },
    {
      platform: 'civium',
      module: 'Pro-Assure',
      description: 'Equipment warranty tracking and automated claim processing across all facilities.',
    },
    {
      platform: 'civium',
      module: 'Pro-Visit',
      description: 'Contractor management with safety training verification and site access control.',
    },
    {
      platform: 'aureon',
      module: 'Pro-Sales',
      description: 'Supply chain vendor management and procurement optimization.',
    },
  ],
  metrics: [
    { value: '45%', label: 'Downtime Reduction' },
    { value: '$1.2M', label: 'Warranty Recovery' },
    { value: '30%', label: 'Space Optimization' },
    { value: '12+', label: 'Sites Unified' },
  ],
  testimonial: {
    quote: 'AUSTRA gave us the operational visibility we never had across our 12 manufacturing sites. We standardized best practices and reduced unplanned downtime by 45%.',
    author: 'Robert Torres',
    title: 'VP of Operations',
    organization: 'Precision Manufacturing Inc.',
  },
  compliance: [
    { name: 'ISO 9001', description: 'Quality Management Systems' },
    { name: 'OSHA', description: 'Occupational Safety and Health' },
    { name: 'ISO 14001', description: 'Environmental Management' },
    { name: 'AS9100', description: 'Aerospace Quality Standards' },
    { name: 'ITAR', description: 'Export Control Compliance' },
  ],
  useCases: [
    'Cross-facility operational dashboards',
    'Predictive maintenance scheduling',
    'Contractor safety compliance',
    'Warranty and asset lifecycle management',
    'Supply chain procurement',
  ],
  relatedPlatforms: ['austra', 'civium', 'aureon'],
}

// ============================================================================
// ADDITIONAL INDUSTRIES
// ============================================================================

export const defenseIndustry: Industry = {
  id: 'defense',
  name: 'Defense & Aerospace',
  tagline: 'Mission-Ready Solutions for National Security',
  description: 'ITAR-compliant platforms for defense contractors, aerospace manufacturers, and national security organizations. Manage classified programs, security clearances, and supply chain integrity with military-grade operational precision.',
  icon: Plane,
  color: '#6366F1',
  heroImage: '/images/industries/defense-hero.jpg',
  challenges: [
    {
      title: 'Classified Program Management',
      description: 'Maintaining information security across programs with varying classification levels.',
    },
    {
      title: 'Clearance Management',
      description: 'Tracking security clearances, access levels, and reinvestigation timelines for all personnel.',
    },
    {
      title: 'ITAR/EAR Compliance',
      description: 'Ensuring export control compliance across global supply chains and partnerships.',
    },
    {
      title: 'Contract Performance',
      description: 'Meeting complex contract requirements with cost-plus, T&M, and fixed-price vehicles.',
    },
  ],
  solutions: [
    {
      platform: 'austra',
      module: 'Pro-People',
      description: 'Cleared workforce management with SF-86 tracking and polygraph scheduling.',
    },
    {
      platform: 'aureon',
      module: 'Pro-Sales',
      description: 'Defense opportunity intelligence with DPAS rating tracking and set-aside analysis.',
    },
    {
      platform: 'civium',
      module: 'Pro-Visit',
      description: 'SCIF-grade visitor management with escort tracking and access logging.',
    },
    {
      platform: 'aureon',
      module: 'Pro-Biz',
      description: 'Proposal management with DD254 compliance and technical volume automation.',
    },
  ],
  metrics: [
    { value: '99.9%', label: 'Security Compliance' },
    { value: '50%', label: 'Proposal Time Reduction' },
    { value: '100%', label: 'Clearance Visibility' },
    { value: '$45M+', label: 'Contract Wins' },
  ],
  testimonial: {
    quote: 'Managing clearances across 500+ employees used to be a nightmare. AUSTRA\'s Pro-People module gives us complete visibility and proactive reinvestigation alerts.',
    author: 'Col. James Patterson (Ret.)',
    title: 'Director of Security',
    organization: 'Apex Defense Systems',
  },
  compliance: [
    { name: 'ITAR', description: 'International Traffic in Arms Regulations' },
    { name: 'EAR', description: 'Export Administration Regulations' },
    { name: 'NIST 800-171', description: 'Controlled Unclassified Information' },
    { name: 'CMMC', description: 'Cybersecurity Maturity Model Certification' },
    { name: 'DFARS', description: 'Defense Federal Acquisition Regulation Supplement' },
  ],
  useCases: [
    'Security clearance lifecycle management',
    'Classified facility access control',
    'Defense contract capture management',
    'CMMC compliance preparation',
    'Supply chain security',
  ],
  relatedPlatforms: ['austra', 'aureon', 'civium'],
}

export const educationIndustry: Industry = {
  id: 'education',
  name: 'Higher Education',
  tagline: 'Unified Operations for Academic Excellence',
  description: 'Purpose-built platforms for universities, colleges, and educational institutions. Optimize campus operations, manage research compliance, and create efficient environments for learning and discovery.',
  icon: GraduationCap,
  color: '#EC4899',
  heroImage: '/images/industries/education-hero.jpg',
  challenges: [
    {
      title: 'Campus Space Utilization',
      description: 'Maximizing usage of classrooms, labs, and facilities across large campus footprints.',
    },
    {
      title: 'Research Compliance',
      description: 'Managing IRB approvals, grant compliance, and research participant tracking.',
    },
    {
      title: 'Visitor & Event Management',
      description: 'Handling prospective students, parents, vendors, and large campus events.',
    },
    {
      title: 'Decentralized Operations',
      description: 'Coordinating across autonomous schools, departments, and administrative units.',
    },
  ],
  solutions: [
    {
      platform: 'austra',
      module: 'Pro-School',
      description: 'Campus operations management with space scheduling and utilization analytics.',
    },
    {
      platform: 'austra',
      module: 'Pro-Parking',
      description: 'Parking and transportation management for students, faculty, and visitors.',
    },
    {
      platform: 'civium',
      module: 'Pro-Visit',
      description: 'Campus visitor management with event registration and building access.',
    },
    {
      platform: 'austra',
      module: 'Pro-Canteen',
      description: 'Dining services optimization across campus food service locations.',
    },
  ],
  metrics: [
    { value: '30%', label: 'Space Optimization' },
    { value: '22%', label: 'Energy Reduction' },
    { value: '15%', label: 'Parking Efficiency' },
    { value: '50+', label: 'Buildings Managed' },
  ],
  testimonial: {
    quote: 'AUSTRA helped us identify 30% underutilized classroom space and reduce our energy consumption by 22%. The ROI was evident within the first semester.',
    author: 'Dr. Patricia Williams',
    title: 'VP of Campus Operations',
    organization: 'State University System',
  },
  compliance: [
    { name: 'FERPA', description: 'Family Educational Rights and Privacy Act' },
    { name: 'Clery Act', description: 'Campus Security Reporting' },
    { name: 'Title IX', description: 'Education Amendments' },
    { name: 'ADA', description: 'Americans with Disabilities Act' },
    { name: 'GLBA', description: 'Student Financial Information' },
  ],
  useCases: [
    'Classroom and lab scheduling optimization',
    'Campus visitor and event management',
    'Parking and transportation coordination',
    'Dining services management',
    'Research compliance tracking',
  ],
  relatedPlatforms: ['austra', 'civium'],
}

export const technologyIndustry: Industry = {
  id: 'technology',
  name: 'Technology',
  tagline: 'Scaled Operations for Rapid Growth',
  description: 'Flexible platforms designed for technology companies scaling rapidly. Manage distributed workforces, optimize real estate portfolios, and maintain the operational agility that drives innovation.',
  icon: Cpu,
  color: '#06B6D4',
  heroImage: '/images/industries/technology-hero.jpg',
  challenges: [
    {
      title: 'Hypergrowth Operations',
      description: 'Scaling operational infrastructure as quickly as your business grows.',
    },
    {
      title: 'Distributed Workforce',
      description: 'Managing hybrid and remote teams across multiple offices and time zones.',
    },
    {
      title: 'Real Estate Optimization',
      description: 'Right-sizing office portfolios as workspace needs evolve post-pandemic.',
    },
    {
      title: 'Vendor Management',
      description: 'Managing the proliferation of SaaS vendors, contractors, and service providers.',
    },
  ],
  solutions: [
    {
      platform: 'austra',
      module: 'Pro-People',
      description: 'Workforce analytics for hybrid teams with capacity planning and engagement tracking.',
    },
    {
      platform: 'austra',
      module: 'Pro-Project',
      description: 'Agile project management with resource allocation and delivery analytics.',
    },
    {
      platform: 'civium',
      module: 'Pro-Ticket',
      description: 'IT service management with SLA tracking and automated escalations.',
    },
    {
      platform: 'aureon',
      module: 'Pro-Biz',
      description: 'Vendor procurement and contract management for SaaS and service providers.',
    },
  ],
  metrics: [
    { value: '40%', label: 'Operational Overhead Reduction' },
    { value: '3x', label: 'Faster Scaling' },
    { value: '60%', label: 'Vendor Spend Visibility' },
    { value: '25%', label: 'Real Estate Optimization' },
  ],
  testimonial: {
    quote: 'As we scaled from 200 to 2,000 employees, AUSTRA scaled with us. The operational visibility helped us make data-driven decisions about office space and team structure.',
    author: 'Amanda Foster',
    title: 'Chief Operating Officer',
    organization: 'TechScale Ventures',
  },
  compliance: [
    { name: 'SOC 2', description: 'Service Organization Control' },
    { name: 'ISO 27001', description: 'Information Security Management' },
    { name: 'GDPR', description: 'General Data Protection Regulation' },
    { name: 'CCPA', description: 'California Consumer Privacy Act' },
    { name: 'SOX', description: 'Sarbanes-Oxley (for public companies)' },
  ],
  useCases: [
    'Hybrid workforce optimization',
    'Real estate portfolio management',
    'IT service desk operations',
    'Vendor and SaaS management',
    'Rapid onboarding at scale',
  ],
  relatedPlatforms: ['austra', 'civium', 'aureon'],
}

// ============================================================================
// GOVERNMENT (STATE/LOCAL)
// ============================================================================

export const governmentIndustry: Industry = {
  id: 'government',
  name: 'State & Local Government',
  tagline: 'Citizen-Centric Solutions for Public Service',
  description: 'Purpose-built platforms for state agencies, municipalities, and local government organizations. Streamline citizen services, manage workforce programs, and ensure compliance with state regulations.',
  icon: Landmark,
  color: '#3B82F6',
  heroImage: '/images/industries/government-hero.jpg',
  challenges: [
    {
      title: 'Citizen Service Delivery',
      description: 'Providing efficient, accessible services across diverse populations and needs.',
    },
    {
      title: 'Workforce Program Management',
      description: 'Managing employment programs, benefits administration, and case management at scale.',
    },
    {
      title: 'Legacy System Modernization',
      description: 'Upgrading aging systems while maintaining continuity of services.',
    },
    {
      title: 'Budget Constraints',
      description: 'Delivering maximum value with limited public funds and strict procurement rules.',
    },
  ],
  solutions: [
    {
      platform: 'civium',
      module: 'Pro-Visit',
      description: 'Citizen appointment scheduling and government facility visitor management.',
    },
    {
      platform: 'civium',
      module: 'Pro-Claims',
      description: 'Benefits and claims management with workflow automation and compliance tracking.',
    },
    {
      platform: 'austra',
      module: 'Pro-People',
      description: 'Government workforce management and employee scheduling optimization.',
    },
    {
      platform: 'austra',
      module: 'Pro-Portal',
      description: 'Citizen self-service portals with secure document submission and status tracking.',
    },
  ],
  metrics: [
    { value: '60%', label: 'Processing Time Reduction' },
    { value: '95%', label: 'Citizen Satisfaction' },
    { value: '40%', label: 'Cost Savings' },
    { value: '3', label: 'Portals Deployed' },
  ],
  testimonial: {
    quote: 'The multi-portal system transformed how we connect DC youth with employment opportunities. We serve thousands of participants efficiently every summer.',
    author: 'Program Director',
    title: 'Director of Youth Employment',
    organization: 'DC Department of Employment Services',
  },
  compliance: [
    { name: 'ADA', description: 'Americans with Disabilities Act' },
    { name: 'Section 508', description: 'Accessibility Compliance' },
    { name: 'State Privacy Laws', description: 'Jurisdiction-Specific Requirements' },
    { name: 'CJIS', description: 'Criminal Justice Information Services' },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
  ],
  useCases: [
    'Youth employment program management',
    'Workers compensation claims processing',
    'Citizen appointment scheduling',
    'Benefits administration',
    'Government workforce optimization',
  ],
  relatedPlatforms: ['civium', 'austra'],
}

// ============================================================================
// RETAIL
// ============================================================================

export const retailIndustry: Industry = {
  id: 'retail',
  name: 'Retail & Consumer',
  tagline: 'Operational Excellence for Retail Innovation',
  description: 'Scalable platforms for retailers, e-commerce companies, and consumer brands. Optimize employee experiences, manage multi-location operations, and drive data-driven decision making across your retail network.',
  icon: ShoppingBag,
  color: '#F59E0B',
  heroImage: '/images/industries/retail-hero.jpg',
  challenges: [
    {
      title: 'Multi-Location Operations',
      description: 'Managing consistent operations across hundreds or thousands of store locations.',
    },
    {
      title: 'Employee Experience',
      description: 'Engaging and retaining retail workforce in high-turnover environment.',
    },
    {
      title: 'Merchandising Efficiency',
      description: 'Optimizing product placement and inventory across diverse store formats.',
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Leveraging analytics across sales, operations, and customer data.',
    },
  ],
  solutions: [
    {
      platform: 'austra',
      module: 'Pro-Portal',
      description: 'Employee portals with time management, sales tracking, and operational tools.',
    },
    {
      platform: 'austra',
      module: 'Pro-Data',
      description: 'Enterprise data warehousing and analytics for multi-location insights.',
    },
    {
      platform: 'austra',
      module: 'Pro-Retail',
      description: 'Mobile merchandising solutions with offline capability and store-level optimization.',
    },
    {
      platform: 'civium',
      module: 'Pro-Admin',
      description: 'Store administration panels for order management and operations.',
    },
  ],
  metrics: [
    { value: 'Multi-LOB', label: 'Data Integration' },
    { value: '35+', label: 'Stores Unified' },
    { value: '6+', label: 'Years Partnership' },
    { value: 'CI/CD', label: 'Automation' },
  ],
  testimonial: {
    quote: 'The employee portal has become central to our store operations. The integrations work seamlessly across all our systems.',
    author: 'IT Director',
    title: 'Director of Technology',
    organization: 'Lowe\'s Home Improvement',
  },
  compliance: [
    { name: 'PCI-DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'GDPR', description: 'General Data Protection Regulation' },
    { name: 'CCPA', description: 'California Consumer Privacy Act' },
    { name: 'ADA', description: 'Americans with Disabilities Act' },
    { name: 'OSHA', description: 'Occupational Safety and Health' },
  ],
  useCases: [
    'Employee portal and engagement',
    'Store-level merchandising',
    'Enterprise data warehousing',
    'Multi-location analytics',
    'Restaurant operations management',
  ],
  relatedPlatforms: ['austra', 'civium'],
}

// ============================================================================
// AVIATION
// ============================================================================

export const aviationIndustry: Industry = {
  id: 'aviation',
  name: 'Aviation & Aerospace',
  tagline: 'Certified Solutions for Flight Operations',
  description: 'FAA-compliant platforms for aviation companies, airlines, and aerospace organizations. Optimize flight operations, manage regulatory compliance, and achieve operational intelligence across your aviation network.',
  icon: Plane,
  color: '#6366F1',
  heroImage: '/images/industries/aviation-hero.jpg',
  challenges: [
    {
      title: 'Regulatory Compliance',
      description: 'Meeting FAA, EASA, and international aviation authority requirements.',
    },
    {
      title: 'Route Optimization',
      description: 'Maximizing efficiency in flight planning while maintaining safety standards.',
    },
    {
      title: 'Real-Time Operations',
      description: 'Managing dynamic operational environments with real-time data requirements.',
    },
    {
      title: 'Safety Documentation',
      description: 'Maintaining comprehensive safety records and audit trails.',
    },
  ],
  solutions: [
    {
      platform: 'austra',
      module: 'Pro-Analytics',
      description: 'FAA-certified data pipelines for flight operations analytics.',
    },
    {
      platform: 'austra',
      module: 'Pro-Data',
      description: 'Real-time flight data processing and route optimization.',
    },
    {
      platform: 'civium',
      module: 'Pro-Compliance',
      description: 'Aviation regulatory compliance documentation and tracking.',
    },
    {
      platform: 'austra',
      module: 'Pro-Portal',
      description: 'Operational dashboards for flight operations centers.',
    },
  ],
  metrics: [
    { value: '40%', label: 'Route Optimization' },
    { value: 'FAA', label: 'Certified' },
    { value: 'Real-time', label: 'Analytics' },
    { value: '99.9%', label: 'System Uptime' },
  ],
  testimonial: {
    quote: 'The flight intelligence platform has given us capabilities we never thought possible. Route optimization is now a competitive advantage.',
    author: 'Chief Operations Officer',
    title: 'COO',
    organization: 'Strake Aviation',
  },
  compliance: [
    { name: 'FAA', description: 'Federal Aviation Administration' },
    { name: 'EASA', description: 'European Union Aviation Safety Agency' },
    { name: 'ICAO', description: 'International Civil Aviation Organization' },
    { name: 'TSA', description: 'Transportation Security Administration' },
    { name: 'DOT', description: 'Department of Transportation' },
  ],
  useCases: [
    'Flight route optimization',
    'Real-time operations monitoring',
    'Regulatory compliance tracking',
    'Pilot and crew scheduling',
    'Maintenance scheduling',
  ],
  relatedPlatforms: ['austra', 'civium'],
}

// ============================================================================
// CROSS-INDUSTRY
// ============================================================================

export const crossIndustryCategory: Industry = {
  id: 'cross-industry',
  name: 'Cross-Industry Solutions',
  tagline: 'Universal Compliance and Security Excellence',
  description: 'Industry-agnostic platforms for security, compliance, and operational excellence. ISO certifications, security assessments, and governance solutions applicable across all sectors.',
  icon: Globe,
  color: '#8B5CF6',
  heroImage: '/images/industries/cross-industry-hero.jpg',
  challenges: [
    {
      title: 'Multi-Standard Compliance',
      description: 'Achieving and maintaining certifications across ISO, SOC, and industry-specific standards.',
    },
    {
      title: 'Third-Party Risk',
      description: 'Managing vendor risk across complex supply chains and partner ecosystems.',
    },
    {
      title: 'Security Posture',
      description: 'Maintaining robust security controls across evolving threat landscapes.',
    },
    {
      title: 'Global Operations',
      description: 'Ensuring compliance across multiple jurisdictions and regulatory frameworks.',
    },
  ],
  solutions: [
    {
      platform: 'civium',
      module: 'Pro-Security',
      description: 'HITRUST, ISO 27001, and multi-framework security assessments.',
    },
    {
      platform: 'civium',
      module: 'Pro-Compliance',
      description: 'Compliance management with gap analysis and remediation tracking.',
    },
    {
      platform: 'aureon',
      module: 'Pro-Risk',
      description: 'Third-party vendor risk management and continuous monitoring.',
    },
    {
      platform: 'austra',
      module: 'Pro-Training',
      description: 'Security awareness training and compliance education programs.',
    },
  ],
  metrics: [
    { value: '100%', label: 'Certification Success' },
    { value: 'Global', label: 'Reach' },
    { value: 'Multi-Cert', label: 'Programs' },
    { value: '5+', label: 'ISO Standards' },
  ],
  testimonial: {
    quote: 'Visionblox made our ISO certification journey smooth and successful. Their expertise spans multiple standards and geographies.',
    author: 'Compliance Director',
    title: 'Director of Compliance',
    organization: 'Global Enterprise Client',
  },
  compliance: [
    { name: 'ISO 27001', description: 'Information Security Management' },
    { name: 'ISO 27017', description: 'Cloud Security' },
    { name: 'ISO 27018', description: 'Cloud Privacy' },
    { name: 'ISO 22301', description: 'Business Continuity' },
    { name: 'ISO 9001', description: 'Quality Management' },
  ],
  useCases: [
    'ISO certification programs',
    'HITRUST security assessments',
    'Third-party vendor risk management',
    'Security awareness training',
    'Compliance gap analysis',
  ],
  relatedPlatforms: ['civium', 'aureon', 'austra'],
}

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const INDUSTRIES = {
  federal: federalIndustry,
  healthcare: healthcareIndustry,
  fintech: fintechIndustry,
  manufacturing: manufacturingIndustry,
  defense: defenseIndustry,
  education: educationIndustry,
  technology: technologyIndustry,
  government: governmentIndustry,
  retail: retailIndustry,
  aviation: aviationIndustry,
  'cross-industry': crossIndustryCategory,
} as const

export type IndustryKey = keyof typeof INDUSTRIES

// Featured industries for homepage/landing page
export const FEATURED_INDUSTRIES: IndustryKey[] = ['federal', 'healthcare', 'fintech', 'manufacturing']

// All industries list for navigation
export const ALL_INDUSTRIES = Object.values(INDUSTRIES)
