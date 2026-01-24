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
  relatedProducts: string[]
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
      product: '',
      service: 'Web Development',
      description: 'Patient portal platforms with Epic EMR integration serving 100K+ daily users with 99.8% uptime. Built using Angular-based UI with Node.js APIs deployed as Docker containers on Cloud Foundry. Features include chatbot functionality for appointment scheduling, Google Maps integration for facility location, ADA-compliant design patterns, Apigee Gateway for secure API access, and Kafka for real-time event processing. Achieved zero-downtime deployments with seamless Epic EMR synchronization.',
    },
    {
      product: '',
      service: 'AI & ML Solutions',
      description: 'AI-powered OCR document processing achieving 96% accuracy and 60% labor cost reduction for Medicaid claims. Implemented NLP and OCR automation pipeline with machine learning models trained on healthcare documents. Features data extraction and validation workflows, integration with existing state systems, and Section 508 accessibility compliance. Transformed paper-intensive processes into automated digital workflows.',
    },
    {
      product: '',
      service: 'Cloud Technology',
      description: 'Scalable claims processing platforms processing millions of medical claims daily using AWS services including Batch, Lambda, Fargate, and EMR with Apache Spark. Designed cross-functional solutions for manufacturer rebate sharing with optimal service selection for each business use case. Large-scale Spring Boot applications handle complex rebate calculation processing with end-to-end automation.',
    },
    {
      product: '',
      service: 'Cybersecurity',
      description: 'HITRUST framework security assessments and third-party vendor risk management for global healthcare organizations. Comprehensive end-to-end vendor risk management globally including acquired organizations. Includes security awareness training programs and targeted remediation strategies with follow-up until closure. Ensures compliance across multi-country operations.',
    },
  ],
  metrics: [
    { value: '25%', label: 'Overtime Reduction' },
    { value: '18pts', label: 'Staff Satisfaction Increase' },
    { value: '95%', label: 'Security Improvement' },
    { value: '0', label: 'HIPAA Violations' },
  ],
  testimonial: {
    quote: 'Pro-Visit helped us achieve zero HIPAA findings in our last audit. The integration with Epic for patient matching was seamless.',
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
  relatedProducts: ['Pro-People', 'Pro-Visit', 'Pro-Ticket', 'Pro-Task'],
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
  relatedProducts: ['Pro-Visit', 'Pro-Ticket', 'Pro-People', 'DocSnip'],
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
  fintech: fintechIndustry,
  manufacturing: manufacturingIndustry,
  education: educationIndustry,
  technology: technologyIndustry,
  government: governmentIndustry,
  retail: retailIndustry,
  aviation: aviationIndustry,
  'cross-industry': crossIndustryCategory,
} as const

export type IndustryKey = keyof typeof INDUSTRIES

// Featured industries (subset with most case studies)
export const FEATURED_INDUSTRIES: IndustryKey[] = ['healthcare', 'fintech', 'manufacturing', 'technology']

// All industries (case-study-backed only)
export const ALL_INDUSTRIES = Object.values(INDUSTRIES)
