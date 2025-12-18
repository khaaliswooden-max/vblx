// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface CaseStudyMetric {
  value: string
  label: string
  description?: string
}

export interface CaseStudyQuote {
  text: string
  author: string
  title: string
}

export type IndustryId = 
  | 'federal' 
  | 'healthcare' 
  | 'fintech' 
  | 'manufacturing' 
  | 'defense' 
  | 'education' 
  | 'technology'
  | 'government'
  | 'retail'
  | 'aviation'
  | 'cross-industry'

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  client: string
  industry: string
  industryId: IndustryId
  platform: 'austra' | 'aureon' | 'civium'
  modules: string[]
  heroImage: string
  summary: string
  challenge: string
  solution: string
  implementation: string
  results: string
  metrics: CaseStudyMetric[]
  quote: CaseStudyQuote
  tags: string[]
  duration: string
  teamSize: string
  publishedDate: string
  featured: boolean
  // New optional fields from portfolio data
  technologies?: string[]
  teamLeads?: string[]
  year?: string
  value?: string
  relatedStudies?: string[]
}


// ============================================================================
// PORTFOLIO CASE STUDIES - Enterprise Implementations
// ============================================================================

export const kaiserVCareCase: CaseStudy = {
  id: 'kaiser-vcare-portal',
  title: 'Kaiser Permanente VCare Patient Portal Transformation',
  subtitle: '100K+ Daily Users Served with 99.8% Uptime',
  client: 'Kaiser Permanente',
  industry: 'Healthcare',
  industryId: 'healthcare',
  platform: 'austra',
  modules: ['Pro-Portal', 'Pro-Integration'],
  heroImage: '/images/case-studies/kaiser-portal.jpg',
  summary: 'Deployed a secure patient portal serving 100,000+ daily users with Epic EMR integration, achieving 99.8% uptime SLA and transforming how patients access healthcare services.',
  challenge: 'Kaiser Permanente needed a modern, secure patient portal capable of handling massive daily traffic while maintaining seamless integration with their Epic EMR system. The existing solution struggled with performance during peak hours and lacked mobile optimization.',
  solution: `Visionblox architected and developed the VCare Patient Portal using Angular-based UI with Node.js APIs deployed as Docker containers on Cloud Foundry. The solution integrated:

• Chatbot functionality for appointment scheduling
• Google Maps integration for facility location
• ADA-compliant design patterns
• Apigee Gateway for secure API access
• Kafka for real-time event processing`,
  implementation: `The implementation followed an agile approach over 6 months:

**Phase 1: Architecture & Foundation**
• Cloud Foundry infrastructure setup
• Docker containerization strategy
• Epic EMR integration layer

**Phase 2: Core Features**
• Patient authentication and profiles
• Appointment scheduling system
• Health records access
• Prescription management

**Phase 3: Enhanced Experience**
• Chatbot deployment
• Mobile optimization
• Accessibility compliance`,
  results: `The portal transformation delivered exceptional outcomes:

**User Adoption**
• 100,000+ daily active users
• 5-10% year-over-year traffic growth
• High patient satisfaction scores

**Operational Excellence**
• 99.8% uptime SLA achieved
• Zero-downtime deployments
• Seamless Epic EMR synchronization`,
  metrics: [
    { value: '100K+', label: 'Daily Users', description: 'Active daily user sessions' },
    { value: '99.8%', label: 'Uptime SLA', description: 'Service availability achieved' },
    { value: '5-10%', label: 'Annual Growth', description: 'Year-over-year increase' },
    { value: '0', label: 'Downtime', description: 'Zero-downtime releases' },
  ],
  quote: {
    text: 'Visionblox delivered a patient portal that exceeds our expectations. The seamless Epic integration and reliability have transformed how our patients access care.',
    author: 'Healthcare Technology Director',
    title: 'Kaiser Permanente',
  },
  tags: ['Healthcare', 'Patient Portal', 'Epic EMR', 'Cloud Native', 'High Availability'],
  duration: '6 months implementation',
  teamSize: '8 Visionblox consultants',
  publishedDate: '2023-12-15',
  featured: true,
  technologies: ['Angular', 'Node.js', 'Docker', 'Cloud Foundry', 'Apigee', 'Epic EMR', 'Kafka'],
  teamLeads: ['Akil Chellam', 'Magesh Ramalingam'],
  year: '2023',
  value: '$1.2M',
}

export const caDhcsMedicaidCase: CaseStudy = {
  id: 'ca-dhcs-medicaid',
  title: 'California DHCS Medicaid Document Processing',
  subtitle: '96% AI Accuracy with 60% Labor Cost Reduction',
  client: 'California Department of Health Care Services',
  industry: 'Healthcare',
  industryId: 'healthcare',
  platform: 'austra',
  modules: ['Pro-AI', 'Pro-Documents'],
  heroImage: '/images/case-studies/dhcs-medicaid.jpg',
  summary: 'Implemented an AI-powered OCR system for Medicaid document processing that achieved 96% accuracy and reduced labor costs by 60%, transforming how California processes healthcare claims.',
  challenge: 'CA DHCS was overwhelmed with manual document processing for Medicaid claims. The paper-intensive process resulted in delays, errors, and unsustainable labor costs as claim volumes continued to grow.',
  solution: `Visionblox deployed an AI-powered document intelligence system:

• NLP and OCR automation pipeline
• Machine learning models trained on healthcare documents
• Data extraction and validation workflows
• Integration with existing state systems
• Section 508 accessibility compliance`,
  implementation: `Implementation spanned 8 months:

**Phase 1: ML Model Development**
• Training data preparation
• Model architecture design
• OCR pipeline development

**Phase 2: Integration**
• State system connections
• Validation workflow implementation
• Staff training programs

**Phase 3: Optimization**
• Model fine-tuning
• Accuracy improvements
• Scale testing`,
  results: `The AI system transformed document processing:

**Accuracy & Efficiency**
• 96% document processing accuracy
• 60% reduction in labor costs
• Significantly faster claim processing

**Compliance**
• Section 508 accessibility standards met
• Complete audit trail maintained`,
  metrics: [
    { value: '96%', label: 'AI Accuracy', description: 'Document processing accuracy' },
    { value: '60%', label: 'Labor Reduction', description: 'Cost savings achieved' },
    { value: '$2.1M', label: 'Project Value', description: 'Contract value delivered' },
    { value: '508', label: 'Compliance', description: 'Section 508 accessibility' },
  ],
  quote: {
    text: 'The AI document processing system has revolutionized our Medicaid operations. What took days now takes hours with higher accuracy.',
    author: 'IT Director',
    title: 'California DHCS',
  },
  tags: ['Healthcare', 'AI/ML', 'OCR', 'Government', 'Document Processing'],
  duration: '8 months implementation',
  teamSize: '6 Visionblox consultants',
  publishedDate: '2022-10-20',
  featured: true,
  technologies: ['Python', 'TensorFlow', 'OCR', 'NLP', 'Azure', 'SQL Server'],
  teamLeads: ['Antony Jayaraj', 'Akil Chellam'],
  year: '2022',
  value: '$2.1M',
}

export const metaSapCase: CaseStudy = {
  id: 'meta-sap-analytics',
  title: 'Meta Platforms Enterprise SAP Analytics Migration',
  subtitle: '30% Analytics Accuracy Improvement with S/4HANA Cloud',
  client: 'Meta Platforms',
  industry: 'Technology',
  industryId: 'technology',
  platform: 'austra',
  modules: ['Pro-Analytics', 'Pro-Integration'],
  heroImage: '/images/case-studies/meta-sap.jpg',
  summary: 'Led S/4HANA cloud migration delivering predictive analytics with 30% accuracy improvement, transforming Meta\'s enterprise data capabilities across global operations.',
  challenge: 'Meta Platforms required migration of their legacy SAP systems to S/4HANA cloud while enhancing their predictive analytics capabilities. The existing on-premise infrastructure limited scalability and real-time insights.',
  solution: `Visionblox executed a comprehensive S/4HANA cloud migration:

• Optimized React components for business sites
• Reusable components across Reality Labs Hub, Security Portal, and Marketing Hub
• Enhanced data visualization
• Streamlined onboarding with interactive site tours`,
  implementation: `Multi-year engagement with phased approach:

**Phase 1: Assessment & Planning**
• Legacy system analysis
• Migration strategy development
• Component architecture design

**Phase 2: Cloud Migration**
• S/4HANA deployment
• Data migration
• Integration testing

**Phase 3: Portal Development**
• Reality Labs Hub
• Security Portal
• Marketing Hub`,
  results: `Enterprise-wide transformation achieved:

**Analytics Performance**
• 30% improvement in predictive analytics accuracy
• Real-time insights across global operations
• Unified data platform

**Portal Unification**
• 3+ portals consolidated
• Consistent user experience
• Improved decision-making`,
  metrics: [
    { value: '30%', label: 'Accuracy Gain', description: 'Predictive analytics enhancement' },
    { value: '$3.5M', label: 'Contract Value', description: 'Multi-year engagement' },
    { value: 'Global', label: 'Deployment', description: 'Enterprise-wide rollout' },
    { value: '3+', label: 'Portals', description: 'RL Hub, Security, MBG Hub' },
  ],
  quote: {
    text: 'Visionblox\'s expertise in SAP and modern web technologies helped us achieve a seamless migration while improving our analytics capabilities.',
    author: 'Enterprise Architecture Lead',
    title: 'Meta Platforms',
  },
  tags: ['Technology', 'SAP', 'S/4HANA', 'Cloud Migration', 'Analytics'],
  duration: '18 months implementation',
  teamSize: '10 Visionblox consultants',
  publishedDate: '2023-06-15',
  featured: true,
  technologies: ['SAP S/4HANA', 'React', 'Cloud Migration', 'Predictive Analytics'],
  teamLeads: ['Akil Chellam', 'Peter Jayaraj'],
  year: '2022-2023',
  value: '$3.5M',
}

export const basfSapCase: CaseStudy = {
  id: 'basf-sap-integration',
  title: 'BASF Catalyst Global SAP BTP Integration',
  subtitle: '$2M+ Annual Savings Through Enterprise Integration',
  client: 'BASF Catalyst',
  industry: 'Manufacturing',
  industryId: 'manufacturing',
  platform: 'austra',
  modules: ['Pro-Integration', 'Pro-ERP'],
  heroImage: '/images/case-studies/basf-sap.jpg',
  summary: 'Migrated solutions from SAP PO 7.5 to SAP BTP Cloud Integration, implementing employee master data replication and payroll processing across Germany, China, India, and global operations.',
  challenge: 'BASF needed to modernize their SAP integration landscape, migrating from legacy PO 7.5 to cloud-native BTP while maintaining complex B2B integrations with Elemica and global payroll operations across multiple countries.',
  solution: `Visionblox implemented comprehensive SAP BTP Cloud Integration:

• Complex transformations using Format Conversion Bean
• S/4 object integration with Chromeriver
• B2B integration using EDI AS2 protocols for Elemica
• Employee master data replication between S/4, Employee Central, and FCM`,
  implementation: `Global rollout over 14 months:

**Phase 1: Architecture Design**
• Integration pattern definition
• EDI AS2 setup
• Security architecture

**Phase 2: Regional Deployments**
• Germany operations
• China operations
• India operations

**Phase 3: Global Operations**
• Unified integration layer
• Performance optimization`,
  results: `Multi-nation success achieved:

**Financial Impact**
• $2M+ annual operational savings
• 25% faster data processing

**Operational Excellence**
• Seamless multi-country payroll
• Real-time B2B document exchange`,
  metrics: [
    { value: '$2M+', label: 'Annual Savings', description: 'Operational cost reduction' },
    { value: '25%', label: 'Processing Speed', description: 'Improvement in data processing' },
    { value: 'Multi-Nation', label: 'Deployment', description: 'Germany, China, India' },
    { value: 'B2B', label: 'Integration', description: 'Elemica EDI AS2' },
  ],
  quote: {
    text: 'The migration to SAP BTP has transformed our global operations. The integration with our B2B partners is now seamless and reliable.',
    author: 'Global IT Director',
    title: 'BASF Catalyst',
  },
  tags: ['Manufacturing', 'SAP', 'BTP', 'Global', 'B2B Integration'],
  duration: '14 months implementation',
  teamSize: '6 Visionblox consultants',
  publishedDate: '2023-09-01',
  featured: true,
  technologies: ['SAP BTP', 'SAP PO 7.5', 'S/4HANA', 'oData', 'EDI AS2', 'Groovy Script'],
  teamLeads: ['Peter Jayaraj'],
  year: '2022-2023',
  value: '$2.4M',
}

export const strakeAviationCase: CaseStudy = {
  id: 'strake-aviation',
  title: 'Strake Aviation Flight Intelligence Platform',
  subtitle: 'FAA-Certified Data Pipeline with 40% Route Optimization',
  client: 'Strake Aviation',
  industry: 'Aviation',
  industryId: 'aviation',
  platform: 'austra',
  modules: ['Pro-Analytics', 'Pro-Data'],
  heroImage: '/images/case-studies/strake-aviation.jpg',
  summary: 'Developed an FAA-certified data pipeline delivering 40% faster route optimization with real-time analytics dashboard, transforming flight operations intelligence.',
  challenge: 'Strake Aviation needed an FAA-certified system for real-time flight data processing and route optimization. Legacy systems couldn\'t handle the volume of data required for modern aviation intelligence.',
  solution: `Visionblox built an FAA-certified aviation data pipeline:

• Real-time flight data processing at scale
• Advanced route optimization algorithms
• Operational dashboards for decision-making
• FAA data standards compliance`,
  implementation: `Rapid development over 6 months:

**Phase 1: Certification Planning**
• FAA requirements analysis
• Architecture design
• Security framework

**Phase 2: Core Development**
• Data pipeline implementation
• Optimization engine
• Dashboard development

**Phase 3: Certification**
• FAA compliance testing
• Performance validation`,
  results: `Aviation intelligence transformed:

**Performance Gains**
• 40% faster route optimization
• Real-time operational visibility

**Compliance**
• Full FAA certification achieved
• Audit-ready documentation`,
  metrics: [
    { value: '40%', label: 'Faster Routes', description: 'Route optimization improvement' },
    { value: 'FAA', label: 'Certified', description: 'Regulatory compliance achieved' },
    { value: 'Real-time', label: 'Analytics', description: 'Live operational dashboards' },
    { value: '$800K', label: 'Contract Value', description: 'Platform development' },
  ],
  quote: {
    text: 'The flight intelligence platform has given us capabilities we never thought possible. Route optimization is now a competitive advantage.',
    author: 'Chief Operations Officer',
    title: 'Strake Aviation',
  },
  tags: ['Aviation', 'FAA', 'Analytics', 'Route Optimization', 'Real-time'],
  duration: '6 months implementation',
  teamSize: '5 Visionblox consultants',
  publishedDate: '2025-01-15',
  featured: true,
  technologies: ['Python', 'Real-time Analytics', 'FAA Data Standards', 'Cloud Architecture'],
  teamLeads: ['Visionblox Team'],
  year: '2025',
  value: '$800K',
}

export const vcareUrgentCareCase: CaseStudy = {
  id: 'vcare-urgent-care',
  title: 'VCare Urgent Care EMR Integration Platform',
  subtitle: 'Unified Patient Experience Across Multiple Facilities',
  client: 'VCare Urgent Care Network',
  industry: 'Healthcare',
  industryId: 'healthcare',
  platform: 'austra',
  modules: ['Pro-Portal', 'Pro-Integration'],
  heroImage: '/images/case-studies/vcare-urgent.jpg',
  summary: 'Built a comprehensive patient portal with microservices architecture integrating EMR systems to manage patient demographics, appointments, health records, insurance, and lab reports across urgent care facilities.',
  challenge: 'VCare Urgent Care needed a unified platform to manage patient information across multiple facilities while integrating with various EMR systems. The existing fragmented systems created data silos and poor patient experience.',
  solution: `Visionblox designed a microservices architecture using .NET Core 3.0 with Angular frontend:

• EMR integration via HL7 data transformation
• Secure document storage on AWS S3 with pre-signed URLs
• Admin tools for provider scheduling and resource management
• HIPAA-compliant data handling`,
  implementation: `Platform built over 8 months:

**Phase 1: Architecture**
• Microservices design
• EMR integration layer
• Security framework

**Phase 2: Core Features**
• Patient demographics
• Appointment management
• Health records access

**Phase 3: Integration**
• Multi-site deployment
• Real-time data sync`,
  results: `Unified platform delivered:

**Integration Success**
• Multi-site platform unified
• HL7 standard compliance
• Real-time cross-facility sync

**Security & Compliance**
• HIPAA-compliant document storage
• Secure patient data management`,
  metrics: [
    { value: 'Multi-Site', label: 'Integration', description: 'Unified platform deployment' },
    { value: 'HL7', label: 'Standard', description: 'Healthcare data integration' },
    { value: 'AWS S3', label: 'Secure Storage', description: 'HIPAA-compliant documents' },
    { value: 'Real-time', label: 'Data Sync', description: 'Cross-facility sync' },
  ],
  quote: {
    text: 'Our patient experience has been transformed. Information flows seamlessly across all our facilities now.',
    author: 'Medical Director',
    title: 'VCare Urgent Care',
  },
  tags: ['Healthcare', 'EMR', 'Microservices', 'Patient Portal', 'HL7'],
  duration: '8 months implementation',
  teamSize: '6 Visionblox consultants',
  publishedDate: '2024-04-15',
  featured: false,
  technologies: ['.NET Core', 'Angular', 'AWS S3', 'HL7', 'SQL Server', 'Microservices'],
  teamLeads: ['Saravanan Swaminathan', 'Akil Chellam'],
  year: '2024',
  value: '$800K',
}

export const sapLabsProcurementCase: CaseStudy = {
  id: 'sap-labs-procurement',
  title: 'SAP Labs Procurement Invoice Automation',
  subtitle: 'Automated Multi-Source Invoice Processing',
  client: 'SAP Labs - Procurement Division',
  industry: 'Technology',
  industryId: 'technology',
  platform: 'aureon',
  modules: ['Pro-Biz', 'Pro-Integration'],
  heroImage: '/images/case-studies/sap-procurement.jpg',
  summary: 'Developed S/4 HANA Gateway Services for integration, supporting Accounts Payable operations with automated invoice and PDF document sharing across systems including BrightFlag and American Express.',
  challenge: 'SAP Labs procurement needed seamless invoice processing across multiple vendor systems including BrightFlag and American Express, with secure document handling and automated validation workflows.',
  solution: `Visionblox developed integration flows using CPI/HCI:

• BrightFlag Invoice to S/4 HANA via IDOC adapter
• XSLT transformation for status updates
• American Express invoice integration via sFTP with SSH Key authentication
• oData services for binary data streaming to SAP Backend`,
  implementation: `Integration built over 12 months:

**Phase 1: Core Integration**
• S/4 HANA Gateway Services
• IDOC adapter configuration
• Security setup

**Phase 2: Vendor Integration**
• BrightFlag connection
• American Express sFTP
• Document processing

**Phase 3: Automation**
• Workflow automation
• Status synchronization`,
  results: `Procurement automation achieved:

**Process Improvement**
• Automated multi-source invoice flow
• Secure SSH authentication
• Real-time status updates

**Vendor Unification**
• BrightFlag and AmEx integrated
• Consistent document handling`,
  metrics: [
    { value: 'Automated', label: 'Invoice Flow', description: 'Multi-source processing' },
    { value: 'Secure', label: 'SSH Auth', description: 'Key-based authentication' },
    { value: 'Real-time', label: 'Status Updates', description: 'XSLT transformation' },
    { value: 'Multi-Vendor', label: 'Integration', description: 'BrightFlag, AmEx unified' },
  ],
  quote: {
    text: 'Invoice processing that used to take days now happens automatically. The integration is robust and reliable.',
    author: 'Procurement Director',
    title: 'SAP Labs',
  },
  tags: ['Technology', 'SAP', 'Invoice Automation', 'Procurement', 'Integration'],
  duration: '12 months implementation',
  teamSize: '4 Visionblox consultants',
  publishedDate: '2022-03-15',
  featured: false,
  technologies: ['SAP CPI/HCI', 'S/4 HANA', 'oData', 'XSLT', 'sFTP', 'IDOC'],
  teamLeads: ['Peter Jayaraj'],
  year: '2020-2022',
  value: '$1.8M',
}

export const agfirstLoanCase: CaseStudy = {
  id: 'agfirst-loan-modernization',
  title: 'AgFirst Farm Credit Bank Loan Origination Modernization',
  subtitle: 'Microservices Architecture for Agricultural Lending',
  client: 'AgFirst Farm Credit Bank',
  industry: 'Financial Services',
  industryId: 'fintech',
  platform: 'aureon',
  modules: ['Pro-Biz', 'Pro-Finance'],
  heroImage: '/images/case-studies/agfirst-loan.jpg',
  summary: 'Modernized the loan origination system with microservices architecture, implementing rate/fee calculation engines, document generation, and ACH cash management for agricultural lending.',
  challenge: 'AgFirst needed to modernize their legacy loan origination system to support modern agricultural lending requirements, including configurable rate sheets, automated document generation, and compliance with farm credit regulations.',
  solution: `Visionblox architected a microservices-based solution using .NET Core 2.0 with Angular frontend:

• Customer account portal with Web APIs for loan origination
• Rate and fee calculation engines
• Admin tools for configuring rate sheets across associations
• SSIS packages for data extraction and transformation
• ACH cash management integration`,
  implementation: `Modernization over 14 months:

**Phase 1: Architecture**
• Microservices design
• API layer development
• Rate engine prototype

**Phase 2: Core Systems**
• Loan origination workflow
• Document generation
• Fee calculations

**Phase 3: Integration**
• ACH integration
• Multi-association support`,
  results: `Lending platform transformed:

**Architecture**
• Modern microservices design
• Configurable per association

**Automation**
• Automated document generation
• ACH cash management integrated`,
  metrics: [
    { value: 'Microservices', label: 'Architecture', description: 'Modern scalable design' },
    { value: 'Multi-Assoc', label: 'Support', description: 'Configurable per association' },
    { value: 'Automated', label: 'Doc Gen', description: 'Loan document generation' },
    { value: 'ACH', label: 'Integration', description: 'Cash management system' },
  ],
  quote: {
    text: 'The modernized platform has transformed how we serve our agricultural community. Loan processing is faster and more accurate.',
    author: 'VP of Technology',
    title: 'AgFirst Farm Credit Bank',
  },
  tags: ['Financial Services', 'Lending', 'Microservices', 'Agricultural', 'Modernization'],
  duration: '14 months implementation',
  teamSize: '5 Visionblox consultants',
  publishedDate: '2024-02-15',
  featured: false,
  technologies: ['.NET Core 2.0', 'Angular', 'RabbitMQ', 'Azure DevOps', 'SSIS', 'SQL Server'],
  teamLeads: ['Saravanan Swaminathan'],
  year: '2023-2024',
  value: '$1.5M',
}

export const voyaPortalCase: CaseStudy = {
  id: 'voya-portal-modernization',
  title: 'Voya Financial B2B Portal Modernization',
  subtitle: 'WebSphere to Modern SPA Migration',
  client: 'Voya Financial',
  industry: 'Financial Services',
  industryId: 'fintech',
  platform: 'austra',
  modules: ['Pro-Portal', 'Pro-Analytics'],
  heroImage: '/images/case-studies/voya-portal.jpg',
  summary: 'Led migration of B2B sites to WebSphere v8.5 and developed Single Page Application using Aurelia for Message Center, providing real-time revenue projections and enhanced financial forecasting.',
  challenge: 'Voya Financial\'s legacy WebSphere portal infrastructure needed modernization while maintaining complex B2B integrations and financial reporting capabilities.',
  solution: `Visionblox installed and configured WebSphere Portal 8.5:

• Led B2B site migration improving platform stability and security
• Developed Single Page Application using Aurelia and C3.js
• Message Center app with real-time revenue projections
• Enhanced financial forecasting accuracy`,
  implementation: `Long-term engagement over 8+ years:

**Continuous Improvement**
• Platform upgrades
• Feature enhancements
• Performance optimization

**SPA Development**
• Aurelia framework adoption
• Real-time visualization
• Revenue forecasting`,
  results: `Sustained transformation achieved:

**Partnership**
• 8+ year engagement
• Continuous innovation

**Technical Excellence**
• Modern SPA architecture
• Real-time projections
• Improved platform stability`,
  metrics: [
    { value: '8+ Years', label: 'Engagement', description: 'Long-term partnership' },
    { value: 'Modern SPA', label: 'Architecture', description: 'Aurelia-based frontend' },
    { value: 'Real-time', label: 'Projections', description: 'Revenue forecasting' },
    { value: 'Improved', label: 'Stability', description: 'Platform reliability' },
  ],
  quote: {
    text: 'Visionblox has been a trusted partner for nearly a decade. Their expertise has kept our platform modern and competitive.',
    author: 'Technology Director',
    title: 'Voya Financial',
  },
  tags: ['Financial Services', 'Portal', 'WebSphere', 'SPA', 'B2B'],
  duration: '8+ year engagement',
  teamSize: '4 Visionblox consultants',
  publishedDate: '2023-08-15',
  featured: false,
  technologies: ['WebSphere Portal 8.5', 'Aurelia', 'C3.js', 'RESTful Services'],
  teamLeads: ['Magesh Ramalingam'],
  year: '2015-2023',
  value: '$2.2M',
}

export const dcDoesCase: CaseStudy = {
  id: 'dc-does-syep',
  title: 'DC DOES Summer Youth Employment Program',
  subtitle: 'Multi-Portal Youth Employment Management System',
  client: 'DC Department of Employment Services',
  industry: 'Government',
  industryId: 'government',
  platform: 'civium',
  modules: ['Pro-Visit', 'Pro-People'],
  heroImage: '/images/case-studies/dc-does.jpg',
  summary: 'Developed Youth Portal, Employer Portal, and Admin Portal for the Mayor Marion S. Barry Summer Youth Employment Program, enabling subsidized job placements for 14-24 year olds across DC.',
  challenge: 'DC DOES needed a comprehensive system to manage the Summer Youth Employment Program connecting District youth ages 14-24 with subsidized employment opportunities in private and government sectors.',
  solution: `Visionblox developed MVC5-based multi-portal system:

• Youth Portal for job seekers
• Employer Portal for hiring organizations
• Admin Portal for program management
• SharePoint document management
• Tableau reporting dashboards
• Comprehensive workflow automation`,
  implementation: `Multi-year program support:

**Phase 1: Core Portals**
• Youth registration
• Employer management
• Admin workflows

**Phase 2: Integration**
• SharePoint integration
• Reporting dashboards

**Phase 3: Enhancement**
• Workflow improvements
• Scale support`,
  results: `Youth employment transformed:

**Portal Success**
• 3 portals deployed
• Ages 14-24 served

**Analytics & Management**
• Tableau reporting active
• SharePoint document management`,
  metrics: [
    { value: '3 Portals', label: 'Deployed', description: 'Youth, Employer, Admin' },
    { value: 'Ages 14-24', label: 'Youth Served', description: 'Program participants' },
    { value: 'Tableau', label: 'Reporting', description: 'Analytics dashboard' },
    { value: 'SharePoint', label: 'Integration', description: 'Document management' },
  ],
  quote: {
    text: 'The SYEP platform has transformed how we connect DC youth with employment opportunities. The system handles thousands of participants smoothly.',
    author: 'Program Director',
    title: 'DC DOES',
  },
  tags: ['Government', 'Youth Employment', 'Multi-Portal', 'Workforce', 'DC'],
  duration: '4 year engagement',
  teamSize: '4 Visionblox consultants',
  publishedDate: '2019-08-15',
  featured: false,
  technologies: ['.NET MVC5', 'Entity Framework', 'SQL Server', 'Tableau', 'SharePoint'],
  teamLeads: ['Saravanan Swaminathan'],
  year: '2015-2019',
  value: '$1.3M',
}

export const dcOwcCase: CaseStudy = {
  id: 'dc-owc-workers-comp',
  title: 'DC Office of Workers\' Compensation System',
  subtitle: 'End-to-End Claims Management Platform',
  client: 'DC Department of Employment Services',
  industry: 'Government',
  industryId: 'government',
  platform: 'civium',
  modules: ['Pro-Claims', 'Pro-Workflow'],
  heroImage: '/images/case-studies/dc-owc.jpg',
  summary: 'Built comprehensive workers\' compensation claims management system handling claim filing, mediation conferences, compensation orders, settlement agreements, and wage loss payments.',
  challenge: 'DC Office of Workers\' Compensation needed a modern system to manage the complete lifecycle of workers\' compensation claims, from filing through settlement, while ensuring compliance with DC regulations.',
  solution: `Visionblox developed a .NET Core-based system with custom application framework:

• Claim creation and management
• Informal and mediation conference scheduling
• Compensation order issuance
• Lump-sum settlement approvals
• Wage loss and medical payment processing`,
  implementation: `Platform built over 24 months:

**Phase 1: Core Claims**
• Claim filing
• Initial processing
• Workflow setup

**Phase 2: Conference Management**
• Mediation scheduling
• Conference tracking

**Phase 3: Settlements**
• Order processing
• Payment integration`,
  results: `Claims management transformed:

**Process Improvements**
• End-to-end claims management
• Automated conference scheduling

**Compliance**
• DC regulations compliance
• Unified stakeholder platform`,
  metrics: [
    { value: 'End-to-End', label: 'Claims Mgmt', description: 'Full lifecycle support' },
    { value: 'Automated', label: 'Workflows', description: 'Conference scheduling' },
    { value: 'Compliant', label: 'Processing', description: 'DC regulations met' },
    { value: 'Unified', label: 'Platform', description: 'All stakeholder access' },
  ],
  quote: {
    text: 'The claims management system has streamlined our entire operation. Processing times have improved dramatically.',
    author: 'Claims Administrator',
    title: 'DC OWC',
  },
  tags: ['Government', 'Workers Compensation', 'Claims', 'DC', 'Compliance'],
  duration: '24 months implementation',
  teamSize: '4 Visionblox consultants',
  publishedDate: '2018-06-15',
  featured: false,
  technologies: ['.NET Core 1.0', 'MVC6', 'Entity Framework', 'SQL Server 2014'],
  teamLeads: ['Saravanan Swaminathan'],
  year: '2016-2018',
  value: '$950K',
}

export const porchGroupCase: CaseStudy = {
  id: 'porch-group-data',
  title: 'Porch Group Media Enterprise Data Platform',
  subtitle: 'Enterprise Architecture for Consumer Data Analytics',
  client: 'Porch Group Media',
  industry: 'Technology',
  industryId: 'technology',
  platform: 'austra',
  modules: ['Pro-Data', 'Pro-Analytics'],
  heroImage: '/images/case-studies/porch-data.jpg',
  summary: 'Led enterprise architecture implementation for data products spanning Consumer, eMail, and Auto verticals, including machine learning models for targeted campaigns and NLP trend analysis.',
  challenge: 'Porch Group Media needed a unified enterprise architecture to manage data products across multiple verticals while enabling advanced analytics and machine learning capabilities for targeted marketing campaigns.',
  solution: `Visionblox implemented comprehensive enterprise architecture:

• Chronic builds across products
• DataMarts in SQL Server with Star and Snowflake schemas
• ML models using Python with Scikit-learn and TensorFlow/Keras
• Data product migration to Snowflake for multi-cluster warehouse`,
  implementation: `8-year transformation journey:

**Continuous Architecture**
• Product evolution
• Schema optimization
• ML model deployment

**Platform Migration**
• Snowflake adoption
• Performance optimization`,
  results: `Data platform excellence:

**Partnership**
• 8 year partnership
• 3 verticals unified

**ML Capabilities**
• Regression, Classification, Clustering models
• NLP trend analysis live feeds`,
  metrics: [
    { value: '8 Years', label: 'Partnership', description: 'Long-term engagement' },
    { value: '3 Verticals', label: 'Unified', description: 'Consumer, eMail, Auto' },
    { value: 'ML Models', label: 'Deployed', description: 'Regression, Classification, Clustering' },
    { value: 'NLP', label: 'Analytics', description: 'Trend analysis live feeds' },
  ],
  quote: {
    text: 'Visionblox has been instrumental in building our data platform. Their ML expertise has given us a significant competitive edge.',
    author: 'Chief Data Officer',
    title: 'Porch Group Media',
  },
  tags: ['Technology', 'Data Platform', 'ML', 'Analytics', 'Enterprise Architecture'],
  duration: '8 year engagement',
  teamSize: '5 Visionblox consultants',
  publishedDate: '2024-01-15',
  featured: false,
  technologies: ['Python', 'Snowflake', 'SQL Server', 'Scikit-learn', 'TensorFlow', 'SSIS'],
  teamLeads: ['Antony Jayaraj'],
  year: '2016-2024',
  value: '$2.8M',
}

export const homeDepotCase: CaseStudy = {
  id: 'home-depot-data-warehouse',
  title: 'Home Depot Supply Data Warehousing Platform',
  subtitle: 'Enterprise Architecture for Multi-LOB Analytics',
  client: 'Home Depot Supply',
  industry: 'Retail',
  industryId: 'retail',
  platform: 'austra',
  modules: ['Pro-Data', 'Pro-Analytics'],
  heroImage: '/images/case-studies/hd-warehouse.jpg',
  summary: 'Implemented enterprise architecture for various Home Depot Supply lines of business, including DataMart development, sales dashboards, and automated job scheduling.',
  challenge: 'Home Depot Supply needed unified enterprise architecture across multiple lines of business with consistent data warehousing, reporting dashboards, and automated scheduling capabilities.',
  solution: `Visionblox implemented enterprise architecture:

• Different feeds from departments integrated
• DataMarts in SQL Server with Star and Snowflake schemas
• MVC4-based dashboards for different LOBs
• Datastage parallel jobs for ETL processes
• UC4 job scheduling with automated monitoring`,
  implementation: `4-year platform development:

**Phase 1: Data Foundation**
• DataMart architecture
• ETL pipeline design

**Phase 2: Dashboards**
• LOB-specific views
• Sales analytics

**Phase 3: Automation**
• UC4 scheduling
• Monitoring setup`,
  results: `Enterprise analytics achieved:

**Architecture**
• Multi-LOB integration
• DataMarts with Star & Snowflake schemas

**Operations**
• Automated scheduling
• Business intelligence dashboards`,
  metrics: [
    { value: 'Multi-LOB', label: 'Integration', description: 'Unified data architecture' },
    { value: 'DataMarts', label: 'Built', description: 'Star & Snowflake schemas' },
    { value: 'Automated', label: 'Scheduling', description: 'UC4 job management' },
    { value: 'Dashboards', label: 'Deployed', description: 'Business intelligence' },
  ],
  quote: {
    text: 'The data warehousing platform has unified our analytics across all lines of business. Decision-making is now data-driven.',
    author: 'Analytics Director',
    title: 'Home Depot Supply',
  },
  tags: ['Retail', 'Data Warehouse', 'ETL', 'Analytics', 'Enterprise'],
  duration: '4 year engagement',
  teamSize: '4 Visionblox consultants',
  publishedDate: '2016-05-15',
  featured: false,
  technologies: ['.NET MVC4', 'Oracle Apex', 'Datastage', 'SQL Server', 'UC4', 'SSRS'],
  teamLeads: ['Antony Jayaraj'],
  year: '2012-2016',
  value: '$1.6M',
}

export const globalHealthcareHitrustCase: CaseStudy = {
  id: 'global-healthcare-hitrust',
  title: 'Global Healthcare HITRUST Security Assessment',
  subtitle: 'Comprehensive Third-Party Vendor Risk Management',
  client: 'Global Healthcare Organization',
  industry: 'Healthcare',
  industryId: 'healthcare',
  platform: 'civium',
  modules: ['Pro-Security', 'Pro-Compliance'],
  heroImage: '/images/case-studies/hitrust.jpg',
  summary: 'Conducted comprehensive third-party security assessments based on HITRUST framework, managing end-to-end vendor risk globally including acquired organizations.',
  challenge: 'A global healthcare organization needed comprehensive third-party vendor risk management across their global operations, including newly acquired entities, while maintaining HITRUST compliance.',
  solution: `Visionblox CISO led third-party security assessments:

• HITRUST framework implementation
• End-to-end vendor risk management globally
• Security awareness training programs
• Targeted remediation strategies with follow-up until closure`,
  implementation: `Ongoing engagement:

**Phase 1: Assessment Framework**
• HITRUST alignment
• Vendor inventory

**Phase 2: Global Rollout**
• Multi-country assessments
• Risk remediation

**Phase 3: Continuous Improvement**
• Training programs
• Process refinement`,
  results: `Global security achieved:

**Assessment Success**
• Global scope covered
• HITRUST compliance validated

**Risk Management**
• End-to-end vendor lifecycle
• Training delivered`,
  metrics: [
    { value: 'Global', label: 'Scope', description: 'Multi-country assessment' },
    { value: 'HITRUST', label: 'Framework', description: 'Compliance validated' },
    { value: 'End-to-End', label: 'Risk Mgmt', description: 'Full vendor lifecycle' },
    { value: 'Training', label: 'Delivered', description: 'Security awareness' },
  ],
  quote: {
    text: 'The HITRUST assessment program has transformed our vendor risk management. We now have confidence in our third-party security posture.',
    author: 'Chief Security Officer',
    title: 'Global Healthcare Organization',
  },
  tags: ['Healthcare', 'HITRUST', 'Security', 'Vendor Risk', 'Global'],
  duration: 'Ongoing engagement',
  teamSize: '3 Visionblox consultants',
  publishedDate: '2024-06-15',
  featured: false,
  technologies: ['HITRUST', 'Process Unity', 'Risk Assessment', 'Security Training'],
  teamLeads: ['Selvakumar Paulraj (Tony)'],
  year: '2023-2025',
  value: '$1.1M',
}

export const iso27001Case: CaseStudy = {
  id: 'iso27001-certifications',
  title: 'Multi-Client ISO 27001 Certification Programs',
  subtitle: 'Global Security Compliance for US and European Clients',
  client: 'Multiple Global Clients',
  industry: 'Cross-Industry',
  industryId: 'cross-industry',
  platform: 'civium',
  modules: ['Pro-Security', 'Pro-Compliance'],
  heroImage: '/images/case-studies/iso27001.jpg',
  summary: 'Implemented and managed ISO27001 projects for various global clients, conducted certification audits across Europe and US, delivering certifications and comprehensive security consulting.',
  challenge: 'Multiple global clients required ISO 27001 certification with varying scopes including ISO 27017, ISO 27018, ISO 22301, and ISO 9001, requiring coordinated audit and implementation programs.',
  solution: `Visionblox implemented comprehensive ISO certification programs:

• ISO 27001, 27017, 27018, 22301, 9001 certifications
• Audits across Europe and US
• Security consulting on contractual and regulatory requirements
• Information security training for organizational awareness`,
  implementation: `Multi-client engagement:

**Standardized Approach**
• Gap assessment
• Implementation roadmap
• Audit preparation

**Certification Process**
• Document development
• Control implementation
• External audit coordination`,
  results: `Certification excellence:

**Success Rate**
• 100% certification achievement
• Multi-standard coverage

**Global Reach**
• Europe and US clients served
• Training programs delivered`,
  metrics: [
    { value: 'Multi-Cert', label: 'Programs', description: '27001, 27017, 27018, 22301, 9001' },
    { value: 'Global', label: 'Reach', description: 'Europe and US clients' },
    { value: '100%', label: 'Success Rate', description: 'Certification achievement' },
    { value: 'Training', label: 'Programs', description: 'Security awareness delivered' },
  ],
  quote: {
    text: 'Visionblox made our ISO certification journey smooth and successful. Their expertise spans multiple standards and geographies.',
    author: 'Compliance Director',
    title: 'Global Enterprise Client',
  },
  tags: ['Cross-Industry', 'ISO 27001', 'Compliance', 'Security', 'Global'],
  duration: '2+ year engagement',
  teamSize: '3 Visionblox consultants',
  publishedDate: '2023-07-15',
  featured: false,
  technologies: ['ISO 27001', 'ISO 27017', 'ISO 27018', 'ISO 22301', 'ISO 9001'],
  teamLeads: ['Selvakumar Paulraj (Tony)'],
  year: '2021-2023',
  value: '$1.8M',
}

export const lowesEmployeeCase: CaseStudy = {
  id: 'lowes-employee-portal',
  title: 'Lowe\'s Home Improvement iWE Employee Portal',
  subtitle: 'Enterprise Portal Integration with Siebel and Sterling Commerce',
  client: 'Lowe\'s Home Improvement',
  industry: 'Retail',
  industryId: 'retail',
  platform: 'austra',
  modules: ['Pro-Portal', 'Pro-Integration'],
  heroImage: '/images/case-studies/lowes-portal.jpg',
  summary: 'Developed portlets for the iWE Employee Portal on WebSphere enhancing time management, sales tracking, and operational efficiency with integrated Siebel, Sterling Commerce, and Outlook.',
  challenge: 'Lowe\'s needed an integrated employee portal combining time management, sales tracking, and operational tools while maintaining connections to their Siebel CRM, Sterling Commerce, and Microsoft Outlook systems.',
  solution: `Visionblox developed WebSphere Portal portlets:

• Siebel, Sterling Commerce, and Outlook integration
• CI/CD pipeline for automated deployments
• Bunchball gamification POC for employee engagement
• Enhanced time management and sales tracking`,
  implementation: `6-year engagement:

**Continuous Development**
• Portlet development
• System integrations
• Performance optimization

**Innovation**
• CI/CD automation
• Gamification pilot`,
  results: `Employee experience transformed:

**Portal Success**
• Unified employee experience
• CI/CD automation achieved

**Engagement**
• Gamification POC successful
• Multi-system integration`,
  metrics: [
    { value: 'Unified', label: 'Portal', description: 'Employee experience' },
    { value: 'CI/CD', label: 'Automation', description: 'Release efficiency' },
    { value: 'Gamification', label: 'POC', description: 'Employee engagement' },
    { value: 'Multi-System', label: 'Integration', description: 'Siebel, Sterling, Outlook' },
  ],
  quote: {
    text: 'The employee portal has become central to our store operations. The integrations work seamlessly across all our systems.',
    author: 'IT Director',
    title: 'Lowe\'s Home Improvement',
  },
  tags: ['Retail', 'Employee Portal', 'WebSphere', 'Integration', 'Gamification'],
  duration: '6 year engagement',
  teamSize: '4 Visionblox consultants',
  publishedDate: '2015-06-15',
  featured: false,
  technologies: ['WebSphere Portal', 'Siebel', 'Sterling Commerce', 'Outlook', 'Bunchball'],
  teamLeads: ['Magesh Ramalingam'],
  year: '2009-2015',
  value: '$1.4M',
}

export const tescoProductCase: CaseStudy = {
  id: 'tesco-product-mapping',
  title: 'TESCO UK Retail Product Mapping System',
  subtitle: 'Store-Level Merchandising Automation',
  client: 'TESCO UK',
  industry: 'Retail',
  industryId: 'retail',
  platform: 'austra',
  modules: ['Pro-Retail', 'Pro-Mobile'],
  heroImage: '/images/case-studies/tesco-mapping.jpg',
  summary: 'Developed mobile product mapping system for in-store merchandising, capturing product locations and display sequences as the final step in store merchandising routines.',
  challenge: 'TESCO needed a mobile solution for store-level product mapping to capture product locations and display sequences, enabling efficient merchandising across their UK retail network.',
  solution: `Visionblox developed handheld device screens:

• Product scanning using Compact Framework
• Offline capability with web services integration
• CAT Automation Tool for scheduled job management
• Ranging Controls System for space and merchandising configuration`,
  implementation: `2-year development:

**Phase 1: Mobile Development**
• Compact Framework app
• Offline capability

**Phase 2: Integration**
• Web services
• Job scheduling

**Phase 3: Rollout**
• UK network deployment`,
  results: `Merchandising transformed:

**Mobile Solution**
• Handheld device app deployed
• Offline capability enabled

**Operations**
• Automated job scheduling
• Store-wide UK deployment`,
  metrics: [
    { value: 'Mobile', label: 'Solution', description: 'Handheld device app' },
    { value: 'Offline', label: 'Capable', description: 'Works without connectivity' },
    { value: 'Automated', label: 'Jobs', description: 'CAT scheduling tool' },
    { value: 'Store-Wide', label: 'Deployment', description: 'UK retail network' },
  ],
  quote: {
    text: 'The product mapping system has revolutionized our in-store merchandising. Staff efficiency has improved significantly.',
    author: 'Operations Manager',
    title: 'TESCO UK',
  },
  tags: ['Retail', 'Mobile', 'Merchandising', 'UK', 'Offline'],
  duration: '2 year engagement',
  teamSize: '3 Visionblox consultants',
  publishedDate: '2009-05-15',
  featured: false,
  technologies: ['.NET Compact Framework', 'Web Services', 'SQL Server', 'Clear Case'],
  teamLeads: ['Magesh Ramalingam'],
  year: '2007-2009',
  value: '$950K',
}

export const hcpssEducationCase: CaseStudy = {
  id: 'hcpss-synergy',
  title: 'Howard County Public School System Platform Modernization',
  subtitle: 'AWS Cloud Migration for Education Systems',
  client: 'Howard County Public School System',
  industry: 'Education',
  industryId: 'education',
  platform: 'austra',
  modules: ['Pro-Cloud', 'Pro-Portal'],
  heroImage: '/images/case-studies/hcpss.jpg',
  summary: 'Modernizing Synergy and TVUE Portal with AWS services integration, converting legacy SSIS packages to .NET Core functions, and implementing secure document management.',
  challenge: 'HCPSS needed to modernize their educational platforms including Synergy student information system, migrating to cloud-native architecture while maintaining data security and compliance requirements.',
  solution: `Visionblox is creating and modifying web portals:

• AWS Lambda functions and Step Functions for serverless architecture
• Converting SSIS packages to .NET Core for cloud deployment
• Secure document storage with AWS S3 and pre-signed URL functionality
• SSRS reporting modernization`,
  implementation: `Ongoing modernization:

**Phase 1: Cloud Foundation**
• AWS architecture setup
• Security framework

**Phase 2: Migration**
• SSIS to .NET Core conversion
• Portal modernization

**Phase 3: Enhancement**
• Document management
• Reporting modernization`,
  results: `Education platform modernized:

**Architecture**
• Cloud-native AWS deployment
• .NET 8 framework upgrade

**Serverless**
• Lambda and Step Functions
• Secure S3 document storage`,
  metrics: [
    { value: 'Cloud-Native', label: 'Architecture', description: 'AWS migration' },
    { value: '.NET 8', label: 'Upgrade', description: 'Framework modernization' },
    { value: 'Serverless', label: 'Functions', description: 'Lambda, Step Functions' },
    { value: 'Secure', label: 'Documents', description: 'S3 with pre-signed URLs' },
  ],
  quote: {
    text: 'The cloud migration has transformed our IT capabilities. We can now serve students and staff more effectively.',
    author: 'Director of Technology',
    title: 'HCPSS',
  },
  tags: ['Education', 'AWS', 'Cloud Migration', 'Serverless', 'Modernization'],
  duration: 'Ongoing engagement',
  teamSize: '4 Visionblox consultants',
  publishedDate: '2024-09-15',
  featured: false,
  technologies: ['.NET Core 8', 'AWS Lambda', 'Step Functions', 'S3', 'SSRS', 'PowerShell'],
  teamLeads: ['Saravanan Swaminathan'],
  year: '2024-Present',
  value: '$1.2M',
}

export const cignaRebateCase: CaseStudy = {
  id: 'cigna-rebate-sharing',
  title: 'CIGNA Manufacturer Rebate Sharing Platform',
  subtitle: 'Millions of Medical Claims Processed Daily',
  client: 'CIGNA',
  industry: 'Healthcare',
  industryId: 'healthcare',
  platform: 'austra',
  modules: ['Pro-Data', 'Pro-Claims'],
  heroImage: '/images/case-studies/cigna-rebate.jpg',
  summary: 'Designed and built cross-functional solutions processing millions of medical claims daily using AWS services including Batch, Lambda, Fargate, and EMR with Apache Spark.',
  challenge: 'CIGNA needed a scalable platform to process manufacturer rebate sharing across millions of daily medical claims, requiring complex calculations and cross-functional coordination.',
  solution: `Visionblox designed solutions leveraging AWS services:

• AWS Batch, Lambda, Fargate, and EMR
• Optimal service selection for each business use case
• Large-scale Spring Boot applications in Apache Spark
• Complex rebate calculation processing`,
  implementation: `Platform development over 18 months:

**Phase 1: Architecture**
• AWS service selection
• Processing pipeline design

**Phase 2: Development**
• Spark applications
• Batch processing

**Phase 3: Scale**
• Performance optimization
• Volume testing`,
  results: `Claims processing transformed:

**Scale Achieved**
• Millions of daily claims processed
• AWS native architecture

**Processing Power**
• Spark-based calculations
• End-to-end automation`,
  metrics: [
    { value: 'Millions', label: 'Daily Claims', description: 'Processing volume' },
    { value: 'AWS Native', label: 'Architecture', description: 'Batch, Lambda, Fargate, EMR' },
    { value: 'Spark', label: 'Processing', description: 'Large-scale calculations' },
    { value: 'Cross-Func', label: 'Solution', description: 'End-to-end automation' },
  ],
  quote: {
    text: 'The rebate platform processes at a scale we never thought possible. AWS and Spark have been game-changers.',
    author: 'VP of Technology',
    title: 'CIGNA',
  },
  tags: ['Healthcare', 'AWS', 'Big Data', 'Spark', 'Claims Processing'],
  duration: '18 months implementation',
  teamSize: '6 Visionblox consultants',
  publishedDate: '2024-03-15',
  featured: false,
  technologies: ['AWS Batch', 'Lambda', 'Fargate', 'EMR', 'Apache Spark', 'Spring Boot'],
  teamLeads: ['Magesh Ramalingam'],
  year: '2023-2024',
  value: '$1.8M',
}

export const nylMobileCase: CaseStudy = {
  id: 'new-york-life-mobile',
  title: 'New York Life Mobile App Payment Features',
  subtitle: 'Firebase-Powered Mobile Payment Notifications',
  client: 'New York Life',
  industry: 'Financial Services',
  industryId: 'fintech',
  platform: 'austra',
  modules: ['Pro-Mobile', 'Pro-Payments'],
  heroImage: '/images/case-studies/nyl-mobile.jpg',
  summary: 'Designed, developed, and deployed highly available Spring Boot APIs powering payment features on mobile platforms with Google Firebase for personalized notifications.',
  challenge: 'New York Life needed secure, highly available APIs for mobile payment features with personalized notification capabilities to improve customer payment experience.',
  solution: `Visionblox architected and developed Spring Boot APIs:

• My NYL Mobile App APIs
• Google Firebase for personalized notifications
• Outstanding payment alerts
• Enterprise entity services integration`,
  implementation: `Platform development over 12 months:

**Phase 1: API Development**
• Spring Boot architecture
• Security implementation

**Phase 2: Mobile Integration**
• Firebase setup
• Notification system

**Phase 3: Launch**
• Performance optimization
• Monitoring setup`,
  results: `Mobile payments enabled:

**Features**
• API-powered payment features
• Firebase personalized alerts

**Availability**
• 99.9%+ uptime achieved
• Enterprise integration complete`,
  metrics: [
    { value: 'Mobile', label: 'Payments', description: 'API-powered features' },
    { value: 'Firebase', label: 'Notifications', description: 'Personalized alerts' },
    { value: 'High Avail', label: 'APIs', description: '99.9%+ uptime' },
    { value: 'Enterprise', label: 'Integration', description: 'Entity services' },
  ],
  quote: {
    text: 'The mobile payment features have significantly improved customer engagement. Payment completion rates have increased dramatically.',
    author: 'Digital Product Manager',
    title: 'New York Life',
  },
  tags: ['Financial Services', 'Mobile', 'Payments', 'Firebase', 'Spring Boot'],
  duration: '12 months implementation',
  teamSize: '4 Visionblox consultants',
  publishedDate: '2024-05-15',
  featured: false,
  technologies: ['Spring Boot', 'Google Firebase', 'Mobile APIs', 'Enterprise Services'],
  teamLeads: ['Magesh Ramalingam'],
  year: '2023-2024',
  value: '$1.3M',
}

export const lineageConnectCase: CaseStudy = {
  id: 'lineage-connect',
  title: 'Lineage Connect Enterprise Platform',
  subtitle: 'Full-Stack Admin Panel Development',
  client: 'Lineage Connect',
  industry: 'Technology',
  industryId: 'technology',
  platform: 'austra',
  modules: ['Pro-Portal', 'Pro-Admin'],
  heroImage: '/images/case-studies/lineage.jpg',
  summary: 'Developed comprehensive admin panel using React with Redux Toolkit and Nest.js backend with MySQL, delivering full-stack enterprise solution.',
  challenge: 'Lineage Connect needed a comprehensive admin panel for managing their platform with modern architecture and robust state management.',
  solution: `Visionblox developed full-stack platform:

• React frontend with Redux Toolkit
• Nest.js backend with MySQL
• Comprehensive admin functionality
• Module enhancements and API development`,
  implementation: `Platform built over 6 months:

**Phase 1: Backend**
• Nest.js API development
• Database design

**Phase 2: Frontend**
• React with Redux Toolkit
• Admin panel UI

**Phase 3: Integration**
• End-to-end testing
• Deployment`,
  results: `Enterprise platform delivered:

**Architecture**
• Full-stack React + Nest.js
• Redux state management

**Admin Capabilities**
• Comprehensive management panel
• API module enhancements`,
  metrics: [
    { value: 'Full-Stack', label: 'Platform', description: 'React + Nest.js' },
    { value: 'Admin Panel', label: 'Deployed', description: 'Comprehensive management' },
    { value: 'Redux', label: 'State Mgmt', description: 'Toolkit implementation' },
    { value: 'API', label: 'Development', description: 'Module enhancements' },
  ],
  quote: {
    text: 'The admin panel has given us complete control over our platform. The architecture is clean and maintainable.',
    author: 'Product Manager',
    title: 'Lineage Connect',
  },
  tags: ['Technology', 'Full-Stack', 'React', 'Nest.js', 'Admin Panel'],
  duration: '6 months implementation',
  teamSize: '3 Visionblox consultants',
  publishedDate: '2024-07-15',
  featured: false,
  technologies: ['React', 'Redux Toolkit', 'Nest.js', 'MySQL', 'TypeScript'],
  teamLeads: ['Sandhiya Ganesan', 'Khrishanth M', 'Vinoth Kanna'],
  year: '2024',
  value: '$600K',
}

export const americanaRestaurantsCase: CaseStudy = {
  id: 'americana-restaurants',
  title: 'Americana Restaurants Multi-Panel Management System',
  subtitle: 'Store Admin and Zone Controller Panels',
  client: 'Americana Restaurants',
  industry: 'Retail',
  industryId: 'retail',
  platform: 'austra',
  modules: ['Pro-Retail', 'Pro-Admin'],
  heroImage: '/images/case-studies/americana.jpg',
  summary: 'Developed Store Admin Panel for restaurant order management and Zone Controller Admin Panel for driver tracking using React with Redux Toolkit and Recharts.',
  challenge: 'Americana Restaurants needed management panels for store operations and zone controller functions including order management and driver tracking.',
  solution: `Visionblox developed multi-panel system:

• Store Admin Panel for restaurant order management
• Zone Controller Admin Panel for driver tracking
• React with Redux Toolkit
• Recharts for data visualization`,
  implementation: `Platform built over 6 months:

**Phase 1: Store Panel**
• Order management
• Restaurant operations

**Phase 2: Zone Controller**
• Driver tracking
• Zone management

**Phase 3: Visualization**
• Recharts dashboards`,
  results: `Restaurant operations enhanced:

**Panels Delivered**
• Store Admin and Zone Controller
• Order management system

**Visibility**
• Real-time driver tracking
• Data visualization dashboards`,
  metrics: [
    { value: '2 Panels', label: 'Delivered', description: 'Store Admin, Zone Controller' },
    { value: 'Order Mgmt', label: 'System', description: 'Restaurant operations' },
    { value: 'Driver', label: 'Tracking', description: 'Real-time visibility' },
    { value: 'Recharts', label: 'Visualization', description: 'Data dashboards' },
  ],
  quote: {
    text: 'The management panels have streamlined our restaurant and delivery operations significantly.',
    author: 'Operations Director',
    title: 'Americana Restaurants',
  },
  tags: ['Retail', 'Restaurant', 'Delivery', 'React', 'Management'],
  duration: '6 months implementation',
  teamSize: '2 Visionblox consultants',
  publishedDate: '2024-08-15',
  featured: false,
  technologies: ['React', 'Redux Toolkit', 'Recharts', 'Flexbox', 'UI Development'],
  teamLeads: ['Vinoth Kanna'],
  year: '2024',
  value: '$750K',
}

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const CASE_STUDIES: CaseStudy[] = [
  // Portfolio case studies - Featured
  kaiserVCareCase,
  caDhcsMedicaidCase,
  metaSapCase,
  basfSapCase,
  strakeAviationCase,
  // Portfolio case studies - Healthcare
  vcareUrgentCareCase,
  cignaRebateCase,
  globalHealthcareHitrustCase,
  // Portfolio case studies - Technology
  sapLabsProcurementCase,
  porchGroupCase,
  lineageConnectCase,
  // Portfolio case studies - Financial Services
  agfirstLoanCase,
  voyaPortalCase,
  nylMobileCase,
  // Portfolio case studies - Government
  dcDoesCase,
  dcOwcCase,
  // Portfolio case studies - Retail
  homeDepotCase,
  lowesEmployeeCase,
  tescoProductCase,
  americanaRestaurantsCase,
  // Portfolio case studies - Other
  hcpssEducationCase,
  iso27001Case,
]

export const FEATURED_CASE_STUDIES = CASE_STUDIES.filter(cs => cs.featured)

// ============================================================================
// AGGREGATE METRICS
// ============================================================================

export const AGGREGATE_METRICS = {
  totalClientSavings: '$50M+',
  averageEfficiencyGain: '45%',
  complianceAchievement: '100%',
  clientSatisfaction: '95%',
  totalProjects: CASE_STUDIES.length,
  totalContractValue: '$35M+',
  yearsExperience: '130+',
  industriesServed: 9,
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return CASE_STUDIES.find(cs => cs.id === id)
}

export function getCaseStudiesByIndustry(industryId: string): CaseStudy[] {
  return CASE_STUDIES.filter(cs => cs.industryId === industryId)
}

export function getCaseStudiesByPlatform(platform: 'austra' | 'aureon' | 'civium'): CaseStudy[] {
  return CASE_STUDIES.filter(cs => cs.platform === platform)
}

export function getCaseStudiesByTechnology(technology: string): CaseStudy[] {
  return CASE_STUDIES.filter(cs => cs.technologies?.includes(technology))
}

export function getRelatedCaseStudies(currentId: string, limit: number = 3): CaseStudy[] {
  const current = getCaseStudyById(currentId)
  if (!current) return []
  
  // First try explicit related studies
  if (current.relatedStudies?.length) {
    const related = current.relatedStudies
      .map(id => getCaseStudyById(id))
      .filter((cs): cs is CaseStudy => cs !== undefined)
    if (related.length >= limit) return related.slice(0, limit)
  }
  
  // Fall back to same platform or industry
  return CASE_STUDIES
    .filter(cs => cs.id !== currentId && (cs.platform === current.platform || cs.industryId === current.industryId))
    .slice(0, limit)
}
