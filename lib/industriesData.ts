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
  product: string
  service?: string
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

export type IndustryTier = 'PRIMARY' | 'SECONDARY'

export interface Industry {
  id: string
  name: string
  tagline: string
  description: string
  icon: LucideIcon
  color: string
  heroImage: string
  tier: IndustryTier
  heroHeadline?: string
  heroSubheadline?: string
  heroCTA?: string
  problemStatement?: string
  challenges: IndustryChallenge[]
  solutions: IndustrySolution[]
  metrics: IndustryMetric[]
  testimonial: IndustryTestimonial
  compliance: IndustryCompliance[]
  useCases: string[]
  relatedProducts: string[]
  contractVehicles?: {
    cageCode?: string
    uei?: string
    gsaStatus?: string
    businessType?: string
    naics?: string[]
  }
}

// ============================================================================
// HEALTHCARE
// ============================================================================

export const healthcareIndustry: Industry = {
  id: 'healthcare',
  name: 'Healthcare IT',
  tagline: '60% Labor Reduction. 96% AI Accuracy. 99.8% Uptime.',
  description: 'Healthcare IT modernization that delivers measurable outcomes -- from patient portals serving 100K+ daily users to AI-powered document processing for state Medicaid agencies.',
  icon: HeartPulse,
  color: '#10B981',
  heroImage: '/images/industries/healthcare-hero.jpg',
  tier: 'PRIMARY',
  heroHeadline: '60% Labor Reduction. 96% AI Accuracy. 99.8% Uptime.',
  heroSubheadline: 'Healthcare IT modernization that delivers measurable outcomes -- from patient portals serving 100K+ daily users to AI-powered document processing for state Medicaid agencies.',
  heroCTA: 'See Healthcare Case Studies',
  problemStatement: 'Healthcare organizations face mounting pressure to modernize legacy systems while maintaining HIPAA compliance, ensuring 24/7 availability, and reducing operational costs. Manual document processing creates backlogs. Disconnected systems frustrate patients. Security vulnerabilities put PHI at risk. You need a partner who understands both healthcare operations and enterprise technology -- and can prove outcomes, not just promise them.',
  challenges: [
    {
      title: 'Legacy System Modernization',
      description: 'Modernizing aging systems while maintaining HIPAA compliance and 24/7 availability for critical patient services.',
    },
    {
      title: 'Manual Document Processing',
      description: 'Paper-intensive processes create backlogs, delays, and unsustainable labor costs as volumes grow.',
    },
    {
      title: 'EMR Integration Complexity',
      description: 'Seamless integration with Epic, Cerner, and other major EMR systems while maintaining data integrity and security.',
    },
    {
      title: 'Security & Compliance',
      description: 'Protecting PHI across all systems while meeting HIPAA, HITECH, and Section 508 requirements.',
    },
  ],
  solutions: [
    {
      product: '',
      service: 'Patient Portal Development',
      description: 'Secure, HIPAA-compliant portals integrated with Epic, Cerner, and other major EMR systems. Appointment scheduling, prescription management, telehealth capabilities, and health record access -- all built on cloud-native architecture with zero-trust security. Epic HealthConnect integration via SOAP/REST and Kafka streaming. ADA/Section 508 compliant interfaces. eVisit and video visit telehealth delivery.',
    },
    {
      product: '',
      service: 'Document Intelligence & AI',
      description: 'AI-powered OCR and NLP systems for eligibility documents, claims processing, and clinical documentation. Custom-trained models for healthcare-specific terminology with human-in-the-loop review workflows. 96% extraction accuracy on complex medical documents. Confidence scoring with exception routing. Integration with legacy eligibility and claims systems.',
    },
    {
      product: '',
      service: 'EMR Integration',
      description: 'End-to-end integration services connecting clinical, administrative, and financial systems. HIPAA-compliant data pipelines handling millions of patient records. 5M+ patient records integrated across systems. HL7 FHIR and legacy interface support. Real-time data synchronization and audit logging.',
    },
  ],
  metrics: [
    { value: '99.8%', label: 'System Uptime', description: 'Patient portal SLA achieved' },
    { value: '60%', label: 'Labor Reduction', description: 'Document processing automation' },
    { value: '5M+', label: 'Records Integrated', description: 'HIPAA-compliant data migration' },
    { value: '96%', label: 'AI Accuracy', description: 'Document extraction accuracy' },
  ],
  testimonial: {
    quote: 'The AI document processing system has revolutionized our Medicaid operations. What took days now takes hours with higher accuracy.',
    author: 'IT Director',
    title: 'State Department of Health Care Services',
    organization: 'Western U.S. State Agency',
  },
  compliance: [
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'HITRUST', description: 'HITRUST Ready' },
    { name: 'Section 508', description: 'Accessibility Compliance' },
    { name: 'FedRAMP-Ready', description: 'Federal Cloud Security' },
  ],
  useCases: [
    'Patient portal development with Epic EMR integration',
    'AI-powered document processing for Medicaid claims',
    'Telehealth platform development',
    'Clinical documentation automation',
    'Claims processing at scale',
  ],
  relatedProducts: ['Pro-Portal', 'DocSnip', 'Pro-Integration'],
}

// ============================================================================
// FINANCIAL SERVICES
// ============================================================================

export const fintechIndustry: Industry = {
  id: 'fintech',
  name: 'Financial Services',
  tagline: 'Secure. Compliant. Scalable.',
  description: 'Loan origination systems, mobile payment platforms, and enterprise integrations for regional banks and financial institutions.',
  icon: Building,
  color: '#8B5CF6',
  heroImage: '/images/industries/fintech-hero.jpg',
  tier: 'SECONDARY',
  heroHeadline: 'Secure. Compliant. Scalable.',
  heroSubheadline: 'Loan origination systems, mobile payment platforms, and enterprise integrations for regional banks and financial institutions.',
  heroCTA: 'Discuss Your Project',
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
      product: '',
      service: 'Web Development',
      description: 'Microservices-based loan origination systems with rate calculation engines and automated document generation for agricultural lending. Built using .NET Core 2.0 with Angular frontend, featuring customer account portal with Web APIs for loan origination, configurable rate sheets across associations, SSIS packages for data extraction and transformation, and ACH cash management integration. Modernized legacy systems to support modern agricultural lending requirements with farm credit regulation compliance.',
    },
    {
      product: '',
      service: 'Web Development',
      description: 'B2B portal modernization with WebSphere migration and real-time revenue projection dashboards for financial services. Led migration of B2B sites to WebSphere v8.5 and developed Single Page Application using Aurelia for Message Center. Provides real-time revenue projections and enhanced financial forecasting accuracy. Long-term engagement spanning 8+ years with continuous innovation and platform stability improvements.',
    },
    {
      product: '',
      service: 'Cloud Technology',
      description: 'Highly available Spring Boot APIs for mobile payment features with Firebase-powered personalized notifications. Designed, developed, and deployed APIs powering payment features on mobile platforms with Google Firebase for personalized notifications. Features include outstanding payment alerts and enterprise entity services integration. Achieved 99.9%+ uptime with enterprise-grade reliability.',
    },
  ],
  metrics: [
    { value: '100%', label: 'Audit Pass Rate' },
    { value: '60%', label: 'Vendor Onboarding Time Reduction' },
    { value: '45%', label: 'Compliance Cost Reduction' },
    { value: '$2M+', label: 'Annual Risk Mitigation' },
  ],
  testimonial: {
    quote: 'The audit trail capabilities in Pro-Visit made our last SOX examination the smoothest we\'ve ever had. Every visitor, every access event, completely documented.',
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
  relatedProducts: ['Pro-Visit', 'Pro-Biz', 'Pro-Assure', 'Pro-Project'],
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
      product: '',
      service: 'SAP BTP',
      description: 'SAP BTP Cloud Integration migration from SAP PO 7.5 with global employee master data replication and B2B EDI AS2 integration across Germany, China, and India. Implemented complex transformations using Format Conversion Bean, S/4 object integration with Chromeriver, and B2B integration using EDI AS2 protocols for Elemica. Employee master data replication between S/4, Employee Central, and FCM. Delivered $2M+ annual operational savings with 25% faster data processing and seamless multi-country payroll operations.',
    },
  ],
  metrics: [
    { value: '45%', label: 'Downtime Reduction' },
    { value: '$1.2M', label: 'Warranty Recovery' },
    { value: '30%', label: 'Space Optimization' },
    { value: '12+', label: 'Sites Unified' },
  ],
  testimonial: {
    quote: 'Pro-Project gave us the operational visibility we never had across our 12 manufacturing sites. We standardized best practices and reduced unplanned downtime by 45%.',
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
  relatedProducts: ['Pro-Project', 'Pro-Assure', 'Pro-Visit', 'Pro-Sales'],
}

// ============================================================================
// ADDITIONAL INDUSTRIES
// ============================================================================

export const educationIndustry: Industry = {
  id: 'education',
  name: 'Higher Education',
  tagline: 'Unified Operations for Academic Excellence',
  description: 'Purpose-built platforms for universities, colleges, and educational institutions. Optimize campus operations, manage research compliance, and create efficient environments for learning and discovery.',
  icon: GraduationCap,
  color: '#EC4899',
  heroImage: '/images/industries/education-hero.jpg',
  tier: 'SECONDARY',
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
      product: '',
      service: 'Cloud Technology',
      description: 'AWS cloud migration for education platforms with serverless Lambda functions, Step Functions, and secure document management using S3. Modernizing Synergy and TVUE Portal with AWS services integration, converting legacy SSIS packages to .NET Core functions, and implementing secure document management. Features AWS Lambda functions and Step Functions for serverless architecture, secure document storage with AWS S3 and pre-signed URL functionality, and SSRS reporting modernization. Cloud-native deployment with .NET 8 framework upgrade.',
    },
  ],
  metrics: [
    { value: '30%', label: 'Space Optimization' },
    { value: '22%', label: 'Energy Reduction' },
    { value: '15%', label: 'Parking Efficiency' },
    { value: '50+', label: 'Buildings Managed' },
  ],
  testimonial: {
    quote: 'Pro-Pupil helped us identify 30% underutilized classroom space and reduce our energy consumption by 22%. The ROI was evident within the first semester.',
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
  relatedProducts: ['Pro-Pupil', 'Pro-Task', 'Pro-Visit', 'Pro-Project'],
}

export const technologyIndustry: Industry = {
  id: 'technology',
  name: 'Technology',
  tagline: 'Scaled Operations for Rapid Growth',
  description: 'Flexible platforms designed for technology companies scaling rapidly. Manage distributed workforces, optimize real estate portfolios, and maintain the operational agility that drives innovation.',
  icon: Cpu,
  color: '#06B6D4',
  heroImage: '/images/industries/technology-hero.jpg',
  tier: 'SECONDARY',
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
      product: '',
      service: 'SAP S/4 HANA',
      description: 'S/4HANA cloud migration with predictive analytics delivering 30% accuracy improvement and unified portal experiences across Reality Labs, Security, and Marketing hubs. Led comprehensive S/4HANA cloud migration with optimized React components for business sites and reusable components across multiple hubs. Enhanced data visualization and streamlined onboarding with interactive site tours. Multi-year engagement delivering real-time insights across global operations with unified data platform.',
    },
    {
      product: '',
      service: 'SAP BTP',
      description: 'S/4 HANA Gateway Services for automated invoice processing with multi-vendor integration including BrightFlag and American Express. Developed integration flows using CPI/HCI with BrightFlag Invoice to S/4 HANA via IDOC adapter, XSLT transformation for status updates, and American Express invoice integration via sFTP with SSH Key authentication. oData services for binary data streaming to SAP Backend. Automated multi-source invoice flow with secure SSH authentication and real-time status updates.',
    },
    {
      product: '',
      service: 'AI & ML Solutions',
      description: 'Enterprise data platform architecture with machine learning models for targeted campaigns, NLP trend analysis, and multi-vertical data products. Led enterprise architecture implementation for data products spanning Consumer, eMail, and Auto verticals. Features chronic builds across products, DataMarts in SQL Server with Star and Snowflake schemas, ML models using Python with Scikit-learn and TensorFlow/Keras, and data product migration to Snowflake for multi-cluster warehouse. 8-year transformation journey with regression, classification, and clustering models plus NLP trend analysis live feeds.',
    },
    {
      product: '',
      service: 'Web Development',
      description: 'Full-stack admin panel development using React with Redux Toolkit and Nest.js backend for comprehensive platform management. Developed comprehensive admin panel using React with Redux Toolkit and Nest.js backend with MySQL, delivering full-stack enterprise solution. Features comprehensive admin functionality with module enhancements and API development. Clean and maintainable architecture for complete platform control.',
    },
  ],
  metrics: [
    { value: '40%', label: 'Operational Overhead Reduction' },
    { value: '3x', label: 'Faster Scaling' },
    { value: '60%', label: 'Vendor Spend Visibility' },
    { value: '25%', label: 'Real Estate Optimization' },
  ],
  testimonial: {
    quote: 'As we scaled from 200 to 2,000 employees, Pro-People and Pro-Project scaled with us. The operational visibility helped us make data-driven decisions about office space and team structure.',
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
  relatedProducts: ['Pro-People', 'Pro-Project', 'Pro-Ticket', 'Pro-Biz'],
}

// ============================================================================
// SAP & ENTERPRISE SYSTEMS
// ============================================================================

export const sapEnterpriseIndustry: Industry = {
  id: 'sap-enterprise',
  name: 'SAP & Enterprise Systems',
  tagline: '$2M+ Annual Savings. 25% Faster Processing. Global Scale.',
  description: 'S/4HANA migrations, BTP integrations, and enterprise transformations for Fortune 500 organizations. We\'ve delivered SAP solutions across three continents -- with measurable ROI.',
  icon: Cpu,
  color: '#6366F1',
  heroImage: '/images/industries/sap-enterprise-hero.jpg',
  tier: 'PRIMARY',
  heroHeadline: '$2M+ Annual Savings. 25% Faster Processing. Global Scale.',
  heroSubheadline: 'S/4HANA migrations, BTP integrations, and enterprise transformations for Fortune 500 organizations. We\'ve delivered SAP solutions across three continents -- with measurable ROI.',
  heroCTA: 'Explore SAP Solutions',
  problemStatement: 'Enterprise SAP landscapes grow complex. Legacy PO interfaces slow down integrations. Siloed data across regions creates inconsistencies. S/4HANA migrations stall without clear roadmaps. You need a team that has delivered SAP transformations at scale -- from cloud migrations to B2B EDI connectivity to predictive analytics -- and can demonstrate the business outcomes.',
  challenges: [
    {
      title: 'S/4HANA Migration Complexity',
      description: 'Navigating brownfield and greenfield migrations while minimizing business disruption and maintaining data integrity.',
    },
    {
      title: 'Legacy Integration Modernization',
      description: 'Migrating from SAP PO 7.5 to Cloud Integration while maintaining complex B2B EDI scenarios.',
    },
    {
      title: 'Global Data Consistency',
      description: 'Unifying operations across multiple countries and regions with consistent data standards.',
    },
    {
      title: 'Predictive Analytics Integration',
      description: 'Building predictive capabilities integrated with SAP BW for real-time business insights.',
    },
  ],
  solutions: [
    {
      product: '',
      service: 'S/4HANA Cloud Migration',
      description: 'End-to-end migration services from assessment through hypercare. Phased cutover strategies that minimize business disruption. Brownfield and greenfield implementations. Data quality remediation and cleansing. Custom code adaptation and optimization.',
    },
    {
      product: '',
      service: 'BTP Integration Suite',
      description: 'Modern integration architecture using SAP Business Technology Platform. Migration from PO 7.5 to Cloud Integration, API management, and event-driven architectures. Legacy PO interface modernization. B2B EDI scenarios with AS2 protocol. Trading partner management.',
    },
  ],
  metrics: [
    { value: '$2M+', label: 'Annual Savings', description: 'Automation & optimization' },
    { value: '30%', label: 'Analytics Accuracy', description: 'Predictive model improvement' },
    { value: '15+ Years', label: 'Experience', description: 'SAP implementations' },
    { value: '25%', label: 'Faster Processing', description: 'Data processing improvement' },
  ],
  testimonial: {
    quote: 'The migration to SAP BTP has transformed our global operations. The integration with our B2B partners is now seamless and reliable.',
    author: 'Global IT Director',
    title: 'Fortune 500 Multinational Chemical Manufacturer',
    organization: 'European HQ',
  },
  compliance: [
    { name: 'SOX', description: 'Sarbanes-Oxley Act' },
    { name: 'GDPR', description: 'General Data Protection Regulation' },
    { name: 'ISO 27001', description: 'Information Security Management' },
  ],
  useCases: [
    'S/4HANA cloud migration',
    'BTP Integration Suite deployment',
    'B2B EDI connectivity',
    'Predictive analytics integration',
    'Global payroll and HR data replication',
  ],
  relatedProducts: ['Pro-Integration', 'Pro-Biz'],
}

// ============================================================================
// FEDERAL & SLED
// ============================================================================

export const governmentIndustry: Industry = {
  id: 'government',
  name: 'Federal & SLED',
  tagline: 'Mission-Critical Systems. Compliance Built In. Proven Delivery.',
  description: 'Federal-ready solutions from a minority-owned small business. GSA MAS Springboard. FedRAMP-ready controls. Multi-year track record with state and municipal agencies.',
  icon: Landmark,
  color: '#3B82F6',
  heroImage: '/images/industries/government-hero.jpg',
  tier: 'PRIMARY',
  heroHeadline: 'Mission-Critical Systems. Compliance Built In. Proven Delivery.',
  heroSubheadline: 'Federal-ready solutions from a minority-owned small business. GSA MAS Springboard. FedRAMP-ready controls. Multi-year track record with state and municipal agencies.',
  heroCTA: 'Partner With Us',
  problemStatement: 'Government IT modernization demands more than technical competence. You need contractors who understand FAR compliance, security requirements, and the stakes of mission-critical systems. Legacy portals frustrate citizens. Manual processes create backlogs. Outdated systems expose vulnerabilities. We bring commercial innovation with federal discipline -- and past performance to prove it.',
  challenges: [
    {
      title: 'FAR Compliance & Procurement',
      description: 'Navigating complex federal acquisition regulations and procurement processes while delivering innovation.',
    },
    {
      title: 'Security & FedRAMP Requirements',
      description: 'Meeting stringent federal security standards including FedRAMP, FISMA, and agency-specific requirements.',
    },
    {
      title: 'Legacy System Modernization',
      description: 'Modernizing aging government systems while maintaining continuity of critical citizen services.',
    },
    {
      title: 'Citizen Service Delivery',
      description: 'Providing efficient, accessible services across diverse populations while meeting Section 508 requirements.',
    },
  ],
  solutions: [
    {
      product: '',
      service: 'Web Development',
      description: 'Multi-portal youth employment management system with Youth Portal, Employer Portal, and Admin Portal for DC Summer Youth Employment Program. Developed MVC5-based multi-portal system enabling subsidized job placements for 14-24 year olds across DC. Features SharePoint document management, Tableau reporting dashboards, and comprehensive workflow automation. Multi-year program support connecting District youth with employment opportunities in private and government sectors.',
    },
    {
      product: '',
      service: 'Web Development',
      description: 'End-to-end workers compensation claims management system handling claim filing, mediation conferences, compensation orders, and wage loss payments. Built comprehensive .NET Core-based system with custom application framework. Features claim creation and management, informal and mediation conference scheduling, compensation order issuance, lump-sum settlement approvals, and wage loss and medical payment processing. Ensures DC regulations compliance with unified stakeholder platform.',
    },
  ],
  metrics: [
    { value: '60%', label: 'Processing Time Reduction' },
    { value: '95%', label: 'Citizen Satisfaction' },
    { value: '40%', label: 'Cost Savings' },
    { value: 'Multi-Year', label: 'Track Record', description: 'State and municipal agencies' },
  ],
  testimonial: {
    quote: 'The multi-portal system transformed how we connect DC youth with employment opportunities. We serve thousands of participants efficiently every summer.',
    author: 'Program Director',
    title: 'Director of Youth Employment',
    organization: 'Municipal Department of Employment Services',
  },
  compliance: [
    { name: 'ADA', description: 'Americans with Disabilities Act' },
    { name: 'Section 508', description: 'Accessibility Compliance' },
    { name: 'FedRAMP-Ready', description: 'Federal Cloud Security' },
    { name: 'FISMA', description: 'Federal Information Security Management' },
    { name: 'CJIS', description: 'Criminal Justice Information Services' },
  ],
  useCases: [
    'Youth employment program management',
    'Workers compensation claims processing',
    'Citizen appointment scheduling',
    'Benefits administration',
    'Government workforce optimization',
  ],
  relatedProducts: ['Pro-Visit', 'Pro-Ticket', 'Pro-People', 'DocSnip'],
  contractVehicles: {
    cageCode: '9Z4X2',
    uei: 'H4X2Z7R9E3E3',
    gsaStatus: 'MAS Springboard (In Progress)',
    businessType: 'Minority-Owned Small Business',
    naics: ['541511', '541512', '541519', '518210', '541611'],
  },
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
      product: 'Pro-Biz',
      service: 'AI & ML Solutions',
      description: 'Enterprise data warehousing with DataMarts, Star and Snowflake schemas, and automated ETL processes for multi-line of business analytics.',
    },
    {
      product: 'Pro-Portal',
      service: 'Web Development',
      description: 'Employee portal integration with Siebel, Sterling Commerce, and Outlook, featuring CI/CD automation and gamification capabilities.',
    },
    {
      product: 'Pro-Task',
      service: 'Web Development',
      description: 'Mobile product mapping system for in-store merchandising with offline capability and automated job scheduling across retail networks.',
    },
    {
      product: 'Pro-Portal',
      service: 'Web Development',
      description: 'Store Admin and Zone Controller panels for restaurant order management and driver tracking with real-time data visualization.',
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
  relatedProducts: ['Pro-People', 'Pro-Biz', 'Pro-Task', 'Pro-Ticket'],
}

// ============================================================================
// AVIATION
// ============================================================================

export const aviationIndustry: Industry = {
  id: 'aviation',
  name: 'Aviation & Aerospace',
  tagline: 'FAA-Certified. 40% Faster Optimization.',
  description: 'Flight intelligence platforms with real-time analytics, AI-driven route optimization, and data pipelines that meet aviation safety standards.',
  icon: Plane,
  color: '#6366F1',
  heroImage: '/images/industries/aviation-hero.jpg',
  tier: 'SECONDARY',
  heroHeadline: 'FAA-Certified. 40% Faster Optimization.',
  heroSubheadline: 'Flight intelligence platforms with real-time analytics, AI-driven route optimization, and data pipelines that meet aviation safety standards.',
  heroCTA: 'Learn More',
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
      product: '',
      service: 'AI & ML Solutions',
      description: 'FAA-certified data pipeline delivering 40% faster route optimization with real-time flight operations analytics and operational dashboards. Built FAA-certified aviation data pipeline with real-time flight data processing at scale, advanced route optimization algorithms, operational dashboards for decision-making, and FAA data standards compliance. Rapid development over 6 months with full FAA certification achieved and audit-ready documentation. Transformed flight operations intelligence with competitive advantage in route optimization.',
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
  relatedProducts: ['Pro-Biz', 'DocSnip', 'Pro-Assure', 'Pro-Project'],
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
  tier: 'SECONDARY',
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
      product: '',
      service: 'Cybersecurity',
      description: 'ISO 27001, 27017, 27018, 22301, and 9001 certification programs with audits across Europe and US, delivering 100% certification success rate. Implemented and managed ISO27001 projects for various global clients, conducted certification audits across Europe and US, delivering certifications and comprehensive security consulting. Features security consulting on contractual and regulatory requirements, information security training for organizational awareness, gap assessment, implementation roadmap, audit preparation, document development, control implementation, and external audit coordination. Multi-standard coverage with global reach.',
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
  relatedProducts: ['Pro-Assure', 'Pro-Ticket', 'Pro-Biz', 'Pro-People'],
}

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const INDUSTRIES = {
  healthcare: healthcareIndustry,
  'sap-enterprise': sapEnterpriseIndustry,
  government: governmentIndustry,
  fintech: fintechIndustry,
  aviation: aviationIndustry,
  education: educationIndustry,
  technology: technologyIndustry,
  'cross-industry': crossIndustryCategory,
} as const

export type IndustryKey = keyof typeof INDUSTRIES

// Featured industries (PRIMARY tier industries)
export const FEATURED_INDUSTRIES: IndustryKey[] = ['healthcare', 'sap-enterprise', 'government']

// All industries (case-study-backed only)
export const ALL_INDUSTRIES = Object.values(INDUSTRIES)
