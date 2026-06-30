export type EngagementCategory =
  | 'healthcare-it'
  | 'enterprise-sap'
  | 'government-sled'
  | 'financial-services'
  | 'data-ai'
  | 'cloud-modernization'
  | 'security-compliance'
  | 'aviation-logistics'

export interface CategoryMeta {
  id: EngagementCategory
  label: string
  shortLabel: string
  color: string
  description: string
}

export const CATEGORY_META: Record<EngagementCategory, CategoryMeta> = {
  'healthcare-it': {
    id: 'healthcare-it',
    label: 'Healthcare IT',
    shortLabel: 'HEALTHCARE',
    color: '#2EA891',
    description: 'EMR integration, patient portals, Medicaid modernization, HITRUST audit.',
  },
  'enterprise-sap': {
    id: 'enterprise-sap',
    label: 'Enterprise & SAP',
    shortLabel: 'SAP / ENTERPRISE',
    color: '#3B82F6',
    description: 'S/4HANA migrations, BTP cloud integration, global B2B / EDI.',
  },
  'government-sled': {
    id: 'government-sled',
    label: 'Government & SLED',
    shortLabel: 'GOV / SLED',
    color: '#F7B801',
    description: 'Multi-portal workforce systems, claims management, regulated workflows.',
  },
  'financial-services': {
    id: 'financial-services',
    label: 'Financial Services',
    shortLabel: 'FIN SERVICES',
    color: '#A855F7',
    description: 'Loan origination, B2B portal modernization, mobile payment APIs.',
  },
  'data-ai': {
    id: 'data-ai',
    label: 'Data & AI/ML',
    shortLabel: 'DATA / AI',
    color: '#22D3EE',
    description: 'Enterprise data platforms, predictive ML, NLP, document intelligence.',
  },
  'cloud-modernization': {
    id: 'cloud-modernization',
    label: 'Cloud Modernization',
    shortLabel: 'CLOUD',
    color: '#34D399',
    description: 'AWS / Azure / GCP migration, serverless conversion, legacy lift-and-shift.',
  },
  'security-compliance': {
    id: 'security-compliance',
    label: 'Security & Compliance',
    shortLabel: 'SEC / COMPLIANCE',
    color: '#F97316',
    description: 'HITRUST, ISO 27001/27017/27018, vendor risk, audit execution.',
  },
  'aviation-logistics': {
    id: 'aviation-logistics',
    label: 'Aviation & Logistics',
    shortLabel: 'AVIATION',
    color: '#F472B6',
    description: 'FAA-certified data pipelines, route optimization, real-time analytics.',
  },
}

export interface Engagement {
  number: string
  client: string
  project: string
  category: EngagementCategory
  contractValue: string
  period: string
  location: string
  federalRelevance: number
  personnel: string[]
  stack: string[]
  outcomes: string[]
  federalApplicability: string
  slug: string
}

export const ENGAGEMENTS: Engagement[] = [
  {
    number: '01',
    client: 'Kaiser Permanente',
    project: 'Patient Portal - Digital Health Platform',
    category: 'healthcare-it',
    contractValue: '$1,200,000',
    period: '2019 - 2023',
    location: 'West Coast (on-site + remote)',
    federalRelevance: 10,
    personnel: ['Akil R. Chellam (TPO / Architect)'],
    stack: [
      'Epic HealthConnect', 'SOAP/REST', 'Kafka', 'AEM 6.5',
      'Pexip', 'Angular', 'Node.js', 'Cloud Foundry', 'Apigee', 'Federated SSO',
    ],
    outcomes: [
      '99.8% uptime SLA sustained across 100,000+ daily users',
      '5-10% annual growth in online appointment volume over engagement period',
      'Zero downtime deployments across all production releases',
      'eVisit and Video Visit infrastructure delivered (telehealth)',
      '21st Century Cures Act information blocking compliance implemented',
      'Appointment Center, Pharmacy Center, My Account Manager, Online Payment, and Claim Status modules delivered',
    ],
    federalApplicability:
      'Epic HealthConnect integration, Cures Act compliance, and 99.8% uptime at 100K+ daily users map directly to VA OIT, HHS, and state Medicaid RFP evaluation criteria. Primary citable reference for any federal RFP requiring EMR integration experience.',
    slug: 'kaiser-vcare-portal',
  },
  {
    number: '02',
    client: 'California Department of Health Care Services (DHCS)',
    project: 'Cost & Finance Reporting System (CFRS) - Medicaid Modernization',
    category: 'healthcare-it',
    contractValue: '$2,100,000',
    period: '2022',
    location: 'Sacramento, CA (on-site)',
    federalRelevance: 10,
    personnel: ['Saravanan Swaminathan (Senior Solution Architect)'],
    stack: [
      'MITA', '.NET Core 2.0', 'Angular', 'Azure DevOps',
      'SQL Server', 'SSIS', 'SSRS', 'SOA', 'REST/Web API',
    ],
    outcomes: [
      'Eliminated manual cost sheet errors for all state and county users',
      'Real-time cost reporting pipeline deployed statewide',
      '60% labor cost reduction via AI-powered document processing',
      '96% OCR accuracy on healthcare document extraction',
      'Full SDLC: requirements through UAT, data dictionaries, user manuals, and training plans delivered',
      'ITWS inter-agency integration layer interfaces documented and managed',
    ],
    federalApplicability:
      'MITA compliance is the CMS federal architectural standard for all state Medicaid agencies. This engagement demonstrates adherence to the federal CMS framework - not merely state government experience. Directly maps to CMS, HHS, HRSA, and any state Medicaid modernization procurement evaluation.',
    slug: 'ca-dhcs-medicaid',
  },
  {
    number: '03',
    client: 'VCare Urgent Care',
    project: 'Patient & Provider Portal - Full EMR Integration',
    category: 'healthcare-it',
    contractValue: 'TCV PENDING DOCUMENTATION',
    period: 'TBD',
    location: 'Remote',
    federalRelevance: 9,
    personnel: ['Saravanan Swaminathan (Senior Solution Architect / Technical Manager)'],
    stack: [
      'HL7 ETL', 'Microservices', 'Angular', 'SQL Server',
      'SSRS', 'AWS S3', 'Pre-signed URLs', 'PHI Data Management',
    ],
    outcomes: [
      'End-to-end patient portal: demographics, scheduling, health records, insurance, lab reports - complete PHI data surface',
      'HL7 data extraction, transformation, and loading from underlying EMR',
      'Provider portal: doctor availability, billing/payment, resource management',
      'AWS S3 pre-signed URL pattern for secure PHI document storage/retrieval',
    ],
    federalApplicability:
      'HL7 ETL experience is directly applicable to VA Cerner/Oracle Health migrations, HHS FHIR API requirements, and any RFP involving EMR data interoperability. HL7/FHIR fluency is a mandatory technical discriminator on federal healthcare IT RFPs.',
    slug: 'vcare-urgent-care',
  },
  {
    number: '04',
    client: 'Global Healthcare Organization (via Wipro)',
    project: 'HITRUST Security Assessment Program',
    category: 'security-compliance',
    contractValue: 'CONFIDENTIAL',
    period: '13-year tenure',
    location: 'Global (Europe + US)',
    federalRelevance: 9,
    personnel: ['Tony Paul (CISO - assessment lead)'],
    stack: [
      'HITRUST CSF', 'ISO 27001', 'CISA', 'CRISC',
      'CISM', 'GDPR/PIMS', 'Vendor Risk Management',
    ],
    outcomes: [
      'Third-party security assessments conducted using HITRUST framework',
      'End-to-end vendor risk management including acquired organizations',
      'Global scope: Europe and US coverage',
      '13 years of sustained healthcare security governance',
    ],
    federalApplicability:
      "HITRUST framework experience is a genuine technical discriminator against firms that cite HIPAA without credentialed audit personnel on staff. Tony Paul's CISA, CRISC, CISM, and HITRUST credentials apply directly to VA, HHS, and CMS security volume evaluations. HIPAA compliance attestation is supported by demonstrated HITRUST audit execution - not self-certification.",
    slug: 'global-healthcare-hitrust',
  },
  {
    number: '05',
    client: 'Fortune 10 Technology Company',
    project: 'Enterprise SAP S/4HANA Cloud Transformation',
    category: 'enterprise-sap',
    contractValue: '$3,500,000',
    period: '2022 - 2023',
    location: 'Global (remote + on-site)',
    federalRelevance: 8,
    personnel: ['Akil Chellam (Architect)', 'Peter Jayaraj (SAP Lead)'],
    stack: [
      'SAP S/4HANA', 'SAP BTP', 'React', 'Cloud Migration',
      'Predictive Analytics', 'Reusable Component Libraries',
    ],
    outcomes: [
      'S/4HANA cloud migration delivered across global enterprise footprint',
      '30% improvement in predictive analytics accuracy on unified data platform',
      'Three internal portals consolidated (Reality Labs Hub, Security Portal, Marketing Hub)',
      'Reusable React component library standardized across business sites',
      'Real-time insights enabled for global operational decision making',
    ],
    federalApplicability:
      'Demonstrates large-scale ERP modernization and cloud migration delivery comparable in scope to GSA, DoD, and civilian agency S/4HANA programs. Reusable component library and unified portal pattern apply directly to federal shared-services portal consolidations.',
    slug: 'fortune10-tech-s4hana',
  },
  {
    number: '06',
    client: 'Fortune 500 Multinational Chemical Manufacturer',
    project: 'SAP BTP Cloud Integration & Global Payroll Platform',
    category: 'enterprise-sap',
    contractValue: '$2,400,000',
    period: '2022 - 2023',
    location: 'Germany / China / India (global)',
    federalRelevance: 7,
    personnel: ['Peter Jayaraj (SAP Integration Lead)'],
    stack: [
      'SAP BTP', 'SAP PO 7.5', 'S/4HANA', 'oData',
      'EDI AS2', 'Groovy Script', 'Employee Central',
    ],
    outcomes: [
      'Migrated legacy SAP PO 7.5 landscape to SAP BTP Cloud Integration',
      '$2M+ annual operational savings sustained post-cutover',
      '25% faster data processing across global integration layer',
      'Multi-country payroll replication (S/4 ↔ Employee Central ↔ FCM) delivered',
      'B2B EDI AS2 integration with Elemica live across Germany, China, India',
    ],
    federalApplicability:
      'Multi-country, multi-system integration engineering is directly relevant to federal supply-chain and ERP integration programs requiring secure B2B exchange and global payroll/HR data replication.',
    slug: 'fortune500-chem-sap-btp',
  },
  {
    number: '07',
    client: 'Media & Consumer Data Company',
    project: 'Enterprise Data Platform & ML Models',
    category: 'data-ai',
    contractValue: '$2,800,000',
    period: '2016 - 2024 (8 years)',
    location: 'Remote',
    federalRelevance: 8,
    personnel: ['Antony Jayaraj (Data Architect / ML Lead)'],
    stack: [
      'Python', 'Snowflake', 'SQL Server', 'Scikit-learn',
      'TensorFlow / Keras', 'SSIS', 'Star / Snowflake Schemas',
    ],
    outcomes: [
      'Enterprise data architecture spanning Consumer, eMail, and Auto verticals',
      'Migrated multi-vertical data products to Snowflake multi-cluster warehouse',
      'Production ML models: regression, classification, clustering for targeted campaigns',
      'NLP-driven trend analysis on live data feeds',
      '8-year continuous architecture engagement with sustained ROI',
    ],
    federalApplicability:
      'Long-tenure enterprise data platform delivery with production ML and NLP maps to federal data-modernization initiatives (e.g., Treasury, CMS analytics, civilian-agency data fabrics). Demonstrates Snowflake, Python, and ML engineering depth required for AI/ML evaluation factors.',
    slug: 'media-data-ml-platform',
  },
  {
    number: '08',
    client: 'Multiple Global Clients (US + Europe)',
    project: 'ISO 27001 / 27017 / 27018 / 22301 / 9001 Certification Programs',
    category: 'security-compliance',
    contractValue: '$1,800,000',
    period: '2021 - 2023',
    location: 'US + Europe',
    federalRelevance: 9,
    personnel: ['Selvakumar Paulraj "Tony" (CISO - Lead Auditor)'],
    stack: [
      'ISO 27001', 'ISO 27017', 'ISO 27018', 'ISO 22301',
      'ISO 9001', 'Process Unity', 'Risk Assessment',
    ],
    outcomes: [
      '100% certification achievement rate across multi-client portfolio',
      'Audits delivered across Europe and US client base',
      'Multi-standard scope: 27001, 27017 (cloud), 27018 (PII), 22301 (BCP), 9001 (quality)',
      'Information security awareness training delivered organization-wide',
      'Contractual and regulatory security consulting embedded in delivery',
    ],
    federalApplicability:
      'ISO 27001/27017/27018 mappings underpin FedRAMP, CMMC, and StateRAMP control families. Multi-standard audit execution demonstrates credentialed control assessment - not self-attestation - and applies directly to federal security-volume evaluations.',
    slug: 'iso27001-certifications',
  },
  {
    number: '09',
    client: 'Howard County Public School System (HCPSS)',
    project: 'Enterprise Applications & Data Platform - SIS, LMS, Data Warehouse & Data Quality',
    category: 'data-ai',
    contractValue: 'TCV PENDING DOCUMENTATION',
    period: 'TBD',
    location: 'Maryland (Remote)',
    federalRelevance: 8,
    personnel: ['Saravanan Swaminathan (Data Platform Architect)'],
    stack: [
      'Synergy SIS (Edupoint)', 'Canvas LMS (Instructure)', 'Snowflake',
      'Workday ERP', 'MS SQL Server', 'OneRoster / SIF Rostering',
      'Power BI', 'Cloud ELT', 'Active Directory SSO / MFA',
    ],
    outcomes: [
      'Unified four interdependent platforms - Synergy SIS, Canvas LMS, Snowflake data warehouse, and data quality - under one governance umbrella as a single source of truth',
      'SIS-to-LMS rostering integration (OneRoster / SIF) auto-provisioning Canvas courses and users from authoritative Synergy records',
      'Enterprise Data Warehouse on Snowflake consolidating student, staff, course, attendance, assessment, and finance data into conformed dimensional models',
      'Cross-cutting data quality layer profiling, validating, and reconciling records at every system handoff before anomalies propagate downstream',
      'MSDE state-compliance reporting datasets produced from curated, FERPA-aligned extracts',
      'Role-based access aligned to Active Directory groups with row/column-level controls on sensitive student data',
    ],
    federalApplicability:
      'Multi-system data platform governance with Snowflake warehousing, MSDE state reporting, and FERPA-aligned access controls maps directly to U.S. Department of Education, state SIS modernization, and federal data-quality / master-data-management evaluation criteria. Demonstrates single-source-of-truth delivery across SIS, LMS, ERP, and analytics layers.',
    slug: 'hcpss-enterprise-data-platform',
  },
  {
    number: '10',
    client: 'SolGenie Technologies / Horizon Global',
    project: 'SAP BTP Integration Solutioning - B2B / EDI Transaction Transformation',
    category: 'enterprise-sap',
    contractValue: 'TCV PENDING DOCUMENTATION',
    period: 'TBD',
    location: 'Remote',
    federalRelevance: 7,
    personnel: ['Visionblox SAP Integration Team'],
    stack: [
      'SAP BTP', 'Cloud Foundry', 'SAP HANA Cloud', 'Cloud Integration',
      'API Management', 'Open Connectors', 'Integration Advisor',
      'EDI AS2', 'EDIFACT / ANSI X12', 'OData / REST / SOAP',
    ],
    outcomes: [
      'Up to 50% reduction in manual IT maintenance and runtime cost using SAP integration flows',
      'Reliable real-time synchronization handling 100,000+ daily transactions across complex multi-system environments',
      'EDI AS2 integration scenarios delivered: order receipt/validation, acknowledgement, changes, shipping/logistics, invoicing, and payment/remittance',
      'Legacy SAP PO 7.5 landscape migrated to SAP BTP Cloud Integration',
      'SAP CRM and Gateway services integrated with R/3 and cloud applications; industry-specific solution migrated to S/4 core',
      'Agile / Scrum delivery with daily standups, sprint planning, desk checks, and weekly stakeholder status reviews',
    ],
    federalApplicability:
      'Multi-protocol B2B / EDI integration (AS2, EDIFACT, ANSI X12) on SAP BTP Cloud Integration, with legacy SAP PO migration and high-volume real-time transaction synchronization, aligns with federal supply-chain, ERP integration, and inter-agency data-exchange modernization requirements.',
    slug: 'solgenie-sap-btp-integration',
  },
]

export function getEngagementBySlug(slug: string) {
  return ENGAGEMENTS.find((engagement) => engagement.slug === slug)
}

export function getFederalRelevanceColor(score: number) {
  if (score >= 10) return '#2EA891'
  if (score >= 9) return '#F7B801'
  if (score >= 8) return '#F97316'
  return '#94A3B8'
}

export const ENGAGEMENT_CATEGORIES: EngagementCategory[] = [
  'healthcare-it',
  'enterprise-sap',
  'government-sled',
  'financial-services',
  'data-ai',
  'cloud-modernization',
  'security-compliance',
  'aviation-logistics',
]
