export type CitationStatus =
  | { type: 'citable'; label: string }
  | { type: 'pending'; label: string }

export interface Engagement {
  number: string
  client: string
  project: string
  contractValue: string
  period: string
  location: string
  federalRelevance: number
  personnel: string[]
  stack: string[]
  outcomes: string[]
  federalApplicability: string
  citation: CitationStatus
  slug: string
}

export const ENGAGEMENTS: Engagement[] = [
  {
    number: '01',
    client: 'Kaiser Permanente',
    project: 'VCare Patient Portal - Digital Health Platform',
    contractValue: '$1,200,000',
    period: '2019 - 2023',
    location: 'West Coast (on-site + remote)',
    federalRelevance: 10,
    personnel: [
      'Akil R. Chellam (TPO / Architect)',
      'Magesh Ramalingam (Technical Architect)',
    ],
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
    citation: { type: 'citable', label: 'CITABLE // $1.2M VERIFIED' },
    slug: 'kaiser-vcare-portal',
  },
  {
    number: '02',
    client: 'California Department of Health Care Services (DHCS)',
    project: 'Cost & Finance Reporting System (CFRS) - Medicaid Modernization',
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
    citation: { type: 'citable', label: 'CITABLE // $2.1M VERIFIED' },
    slug: 'ca-dhcs-medicaid',
  },
  {
    number: '03',
    client: 'VCare Urgent Care',
    project: 'Patient & Provider Portal - Full EMR Integration',
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
    citation: { type: 'pending', label: 'TCV PENDING DOCUMENTATION' },
    slug: 'vcare-urgent-care',
  },
  {
    number: '04',
    client: 'Cigna',
    project: 'Manufacturer Rebate Sharing / Claims Processing Pipeline',
    contractValue: 'TCV PENDING DOCUMENTATION',
    period: 'TBD',
    location: 'Remote',
    federalRelevance: 8,
    personnel: ['Magesh Ramalingam (Tech Lead)'],
    stack: [
      'AWS Batch', 'Lambda', 'Fargate', 'EMR',
      'Apache Spark', 'Spring Boot', 'Serverless Architecture',
    ],
    outcomes: [
      'Millions of medical claims processed daily via cloud-native pipeline',
      'Cross-functional rebate sharing solution for complex calculations at payer scale',
      'Full serverless/cloud-native architecture: Batch, Lambda, Fargate, EMR',
      'Apache Spark for large-scale claims processing and calculation workflows',
    ],
    federalApplicability:
      'Payer-side healthcare infrastructure at this scale is directly analogous to CMS/Medicare claims processing at HHS, VA payment systems, and TRICARE claims adjudication. The architectural pattern has been validated in production at commercial payer scale.',
    citation: { type: 'pending', label: 'TCV PENDING DOCUMENTATION' },
    slug: 'cigna-rebate-sharing',
  },
  {
    number: '05',
    client: 'Global Healthcare Organization (via Wipro)',
    project: 'HITRUST Security Assessment Program',
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
    citation: { type: 'citable', label: 'CITABLE // PERSONNEL RECORD' },
    slug: 'global-healthcare-hitrust',
  },
]

export function getEngagementBySlug(slug: string) {
  return ENGAGEMENTS.find((engagement) => engagement.slug === slug)
}

export function getFederalRelevanceColor(score: number) {
  if (score >= 10) return '#2EA891'
  if (score >= 9) return '#F7B801'
  return '#F97316'
}
