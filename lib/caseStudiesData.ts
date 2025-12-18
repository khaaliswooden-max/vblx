// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface CaseStudyMetric {
  value: string
  label: string
}

export interface CaseStudyQuote {
  text: string
  author: string
  title: string
}

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  client: string
  industry: string
  industryId: 'federal' | 'healthcare' | 'fintech' | 'manufacturing' | 'defense' | 'education' | 'technology'
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
}

// ============================================================================
// FEDERAL CASE STUDIES
// ============================================================================

export const defenseCaptureCase: CaseStudy = {
  id: 'defense-contractor-pipeline',
  title: 'Defense Contractor Transforms Federal Capture Operations',
  subtitle: '300% Pipeline Growth with AUREON',
  client: 'Mid-Size Defense Technology Company',
  industry: 'Federal Contracting',
  industryId: 'defense',
  platform: 'aureon',
  modules: ['Pro-Sales', 'Pro-Biz'],
  heroImage: '/images/case-studies/defense-capture.jpg',
  summary: 'A mid-size defense contractor was missing opportunities due to manual tracking and resource constraints. AUREON automated their entire capture management process, resulting in 300% pipeline growth and a 10-point improvement in win rate within 12 months.',
  challenge: `The client, a defense technology company with 250 employees, faced significant challenges in their federal business development operations:

• Manual opportunity tracking across spreadsheets led to missed RFPs
• No systematic approach to competitive intelligence gathering
• Proposal development took 6-8 weeks, often missing response windows
• Win rate stagnated at 18% for three consecutive years
• BD team spent 60% of time on administrative tasks vs. relationship building

The leadership recognized they needed to modernize their capture process to compete effectively for larger contracts.`,
  solution: `Visionblox deployed AUREON's Pro-Sales and Pro-Biz modules to transform their federal BD operations:

**Opportunity Intelligence (Pro-Sales)**
• Automated monitoring of SAM.gov, GovWin, and agency-specific portals
• AI-powered matching against their capability matrix and past performance
• Competitive landscape analysis for each opportunity
• Win probability scoring based on 40+ factors

**Proposal Automation (Pro-Biz)**
• Centralized proposal content library with AI-assisted search
• Compliance matrix automation for Section L/M requirements
• Collaborative workflow with role-based assignments
• Past performance database with searchable project details

**Integration**
• Bi-directional sync with Salesforce CRM
• Microsoft Teams notifications for opportunity alerts
• SharePoint integration for document management`,
  implementation: `The implementation followed a phased approach over 10 weeks:

**Phase 1: Foundation (Weeks 1-3)**
• Imported 2 years of historical opportunity data
• Configured capability matrix and NAICS code mapping
• Set up user roles and access permissions
• Integrated SAM.gov and GovWin feeds

**Phase 2: Content Library (Weeks 4-6)**
• Migrated 500+ proposal sections to the knowledge base
• Tagged content by contract type, NAICS, and keywords
• Built past performance database with 45 projects
• Created compliance templates for common solicitation types

**Phase 3: Workflow & Training (Weeks 7-9)**
• Configured proposal workflows and approval chains
• Trained 25 BD and proposal team members
• Established daily standup dashboards
• Set up executive reporting views

**Phase 4: Optimization (Week 10+)**
• Fine-tuned opportunity matching algorithms
• Customized win probability model with historical outcomes
• Established monthly review cadence`,
  results: `Within 12 months of deployment, the client achieved remarkable results:

**Pipeline Growth**
The qualified pipeline grew from $45M to $180M—a 300% increase—driven by:
• 10x more opportunities evaluated per month
• 40% improvement in bid/no-bid accuracy
• Earlier engagement in opportunity lifecycle

**Win Rate Improvement**
Overall win rate improved from 18% to 28%:
• Better competitive intelligence informing capture strategies
• Higher quality proposals with consistent compliance
• More time for relationship building and orals preparation

**Operational Efficiency**
• Proposal development time reduced by 40%
• BD administrative time reduced by 60%
• First submission within 3 weeks of RFP release

**Major Wins**
• Secured first $50M+ contract (5-year IDIQ)
• Won 3 new agency relationships
• Achieved Prime contractor status on 2 vehicles`,
  metrics: [
    { value: '300%', label: 'Pipeline Growth' },
    { value: '10pts', label: 'Win Rate Improvement' },
    { value: '40%', label: 'Faster Proposals' },
    { value: '$50M+', label: 'Largest Contract Won' },
  ],
  quote: {
    text: 'AUREON transformed how we pursue federal opportunities. The intelligence and automation let our small BD team compete with companies three times our size.',
    author: 'Sarah Mitchell',
    title: 'VP of Federal Programs',
  },
  tags: ['Federal', 'Defense', 'Business Development', 'Proposal Automation', 'Capture Management'],
  duration: '10 weeks implementation',
  teamSize: '3 Visionblox consultants',
  publishedDate: '2024-09-15',
  featured: true,
}

export const federalVisitorCase: CaseStudy = {
  id: 'federal-campus-security',
  title: 'Federal Agency Modernizes Campus Security',
  subtitle: 'FISMA Compliance with 80% Faster Processing',
  client: 'Federal Government Agency',
  industry: 'Federal Government',
  industryId: 'federal',
  platform: 'civium',
  modules: ['Pro-Visit'],
  heroImage: '/images/case-studies/federal-campus.jpg',
  summary: 'A major federal agency needed to modernize visitor management across 15 facilities while achieving FISMA compliance. CIVIUM\'s Pro-Visit module reduced processing time by 80% and delivered 100% audit compliance.',
  challenge: `The agency faced mounting pressure to modernize their visitor management systems:

• Paper-based visitor logs across 15 geographically distributed facilities
• No integration with PIV/CAC authentication systems
• Inconsistent compliance with HSPD-12 requirements
• Average visitor processing time of 12+ minutes
• Audit findings related to visitor record retention and watchlist screening
• No visibility into real-time visitor population across facilities`,
  solution: `Visionblox implemented CIVIUM Pro-Visit with federal-specific capabilities:

**Pre-Registration Portal**
• Secure self-service visitor registration with document upload
• Automated sponsor notification and approval workflow
• NDA and security acknowledgment collection

**Check-In Experience**
• PIV/CAC reader integration for escort verification
• Real-time watchlist screening against configured databases
• Photo capture and thermal badge printing
• QR code express check-in for pre-registered visitors

**Compliance & Audit**
• Complete audit trail with tamper-proof logging
• Automated record retention policies meeting NARA requirements
• FISMA control implementation documentation
• Real-time compliance dashboards

**Operations Center**
• Unified view of visitors across all 15 facilities
• Emergency mustering capabilities
• Capacity monitoring and alerts`,
  implementation: `The rollout followed a hub-and-spoke model over 16 weeks:

**Phase 1: Headquarters Pilot (Weeks 1-6)**
• Core configuration and PIV integration
• Watchlist database integration
• Staff training and change management
• Compliance documentation

**Phase 2: Regional Hub Deployment (Weeks 7-12)**
• Deployed to 4 regional hub facilities
• Standardized processes across locations
• Established 24/7 support procedures

**Phase 3: Full Rollout (Weeks 13-16)**
• Deployed to remaining 10 facilities
• Unified reporting and dashboards
• Final compliance certification`,
  results: `The modernization delivered significant improvements across all metrics:

**Processing Efficiency**
• Average check-in time reduced from 12 minutes to 2.5 minutes
• 80% reduction in visitor processing time
• 95% of visitors now pre-register, enabling express check-in

**Compliance Achievement**
• 100% compliance with HSPD-12 requirements
• Zero findings in subsequent FISMA audits
• Complete audit trail for all visitor activities

**Operational Visibility**
• Real-time visibility across all 15 facilities
• Unified emergency mustering capability
• Historical analytics for space planning

**Staff Satisfaction**
• Security staff can focus on security vs. paperwork
• Simplified escort notification process
• Mobile alerts for sponsor approvals`,
  metrics: [
    { value: '80%', label: 'Faster Processing' },
    { value: '100%', label: 'FISMA Compliance' },
    { value: '15', label: 'Facilities Unified' },
    { value: '0', label: 'Audit Findings' },
  ],
  quote: {
    text: 'The transformation from paper logs to CIVIUM was remarkable. Our security posture improved dramatically, and our staff can focus on actual security instead of paperwork.',
    author: 'Director of Facility Security',
    title: 'Federal Government Agency',
  },
  tags: ['Federal', 'Security', 'Visitor Management', 'FISMA', 'PIV/CAC'],
  duration: '16 weeks implementation',
  teamSize: '4 Visionblox consultants',
  publishedDate: '2024-07-20',
  featured: true,
}

// ============================================================================
// HEALTHCARE CASE STUDIES
// ============================================================================

export const hospitalWorkforceCase: CaseStudy = {
  id: 'hospital-workforce-optimization',
  title: 'Regional Hospital Optimizes Workforce Operations',
  subtitle: '25% Overtime Reduction with AUSTRA',
  client: 'Regional Medical Center',
  industry: 'Healthcare',
  industryId: 'healthcare',
  platform: 'austra',
  modules: ['Pro-People', 'Pro-Canteen'],
  heroImage: '/images/case-studies/hospital-workforce.jpg',
  summary: 'A 500-bed regional hospital struggled with nursing staff scheduling inefficiencies, resulting in excessive overtime costs and staff burnout. AUSTRA\'s Pro-People module transformed their workforce management, achieving 25% overtime reduction and 18-point improvement in staff satisfaction.',
  challenge: `The hospital faced chronic workforce management challenges:

• Nursing overtime costs exceeded $3.5M annually
• Staff satisfaction scores at historic lows (52 out of 100)
• Manual scheduling process took 20+ hours per week per unit
• High turnover rates, especially among experienced nurses
• Reactive staffing decisions based on gut feel vs. data
• No visibility into optimal staff-to-patient ratios

Leadership knew that improving workforce management was essential for both financial performance and patient care quality.`,
  solution: `Visionblox implemented AUSTRA Pro-People with healthcare-specific configurations:

**Intelligent Scheduling**
• AI-powered schedule generation based on historical patterns
• Patient acuity integration for dynamic staffing ratios
• Staff preference incorporation (shifts, units, overtime willingness)
• Credential and certification tracking to ensure qualified coverage

**Predictive Analytics**
• Patient volume forecasting using historical trends and seasonality
• Burnout risk indicators for early intervention
• Attrition prediction to proactively address retention

**Employee Self-Service**
• Mobile app for schedule viewing, shift swaps, and PTO requests
• Real-time open shift notifications with one-click acceptance
• Transparent overtime distribution visibility

**Manager Tools**
• Unit-level dashboards with key workforce metrics
• Automated compliance checking for union agreements
• One-click reporting for leadership`,
  implementation: `The implementation was carefully phased to minimize disruption to patient care:

**Phase 1: Foundation (Weeks 1-4)**
• Historical data import (3 years of schedules, overtime, turnover)
• Integration with existing timekeeping and HR systems
• Staff preference surveys and data collection

**Phase 2: Pilot Units (Weeks 5-8)**
• Deployed to 3 high-overtime nursing units
• Staff training and change management
• Algorithm tuning based on real-world feedback

**Phase 3: Hospital-Wide Rollout (Weeks 9-12)**
• Extended to all 25 nursing units
• Manager training and dashboard access
• Executive reporting configuration

**Phase 4: Optimization (Ongoing)**
• Continuous algorithm refinement
• Monthly performance reviews
• Best practice sharing across units`,
  results: `Within 8 months of full deployment, the hospital achieved transformative results:

**Financial Impact**
• 25% reduction in overtime costs ($875K annual savings)
• Reduced agency staffing spend by 40%
• Total annual savings of $2.1M

**Staff Experience**
• Staff satisfaction increased from 52 to 70 (18-point improvement)
• Voluntary turnover decreased by 15%
• 90% of shifts filled within 24 hours of posting

**Operational Improvements**
• Schedule generation time reduced from 20 hours to 2 hours per unit
• 100% compliance with union scheduling requirements
• 30% reduction in last-minute call-outs through better matching

**Patient Care**
• Improved staff-to-patient ratios during peak periods
• Reduced reliance on overtime-fatigued nurses
• Better continuity of care with consistent staffing`,
  metrics: [
    { value: '25%', label: 'Overtime Reduction' },
    { value: '18pts', label: 'Satisfaction Increase' },
    { value: '$2.1M', label: 'Annual Savings' },
    { value: '90%', label: 'Shift Fill Rate' },
  ],
  quote: {
    text: 'AUSTRA gave us the data-driven approach we needed. Our nurses are happier, our overtime is down, and most importantly, our patient care has improved.',
    author: 'Dr. Michael Chen',
    title: 'Chief Nursing Officer',
  },
  tags: ['Healthcare', 'Workforce Optimization', 'Scheduling', 'Staff Satisfaction', 'Cost Reduction'],
  duration: '12 weeks implementation',
  teamSize: '4 Visionblox consultants',
  publishedDate: '2024-11-10',
  featured: true,
}

export const healthcareVisitorCase: CaseStudy = {
  id: 'hospital-hipaa-visitor',
  title: 'Hospital System Achieves HIPAA Visitor Compliance',
  subtitle: 'Zero Audit Findings with CIVIUM',
  client: 'Multi-Hospital Health System',
  industry: 'Healthcare',
  industryId: 'healthcare',
  platform: 'civium',
  modules: ['Pro-Visit'],
  heroImage: '/images/case-studies/hospital-visitor.jpg',
  summary: 'A multi-hospital health system needed to modernize visitor management across 8 facilities while maintaining strict HIPAA compliance. CIVIUM Pro-Visit eliminated paper logs, integrated with their Epic EMR, and achieved zero HIPAA findings in their next audit.',
  challenge: `The health system faced compliance and operational challenges:

• Paper visitor logs at 8 hospitals created HIPAA exposure
• No systematic vendor and contractor management
• Health screening requirements post-COVID added complexity
• Patient matching for visitor authorization was manual
• Previous audit had 3 HIPAA-related findings
• No visibility into who was on-site in emergencies`,
  solution: `Visionblox deployed CIVIUM Pro-Visit with healthcare-specific features:

**Patient Authorization**
• Epic EMR integration for patient visitor preferences
• HIPAA-compliant visitor-to-patient matching
• Configurable visiting hour enforcement
• Special handling for minors and protected patients

**Health Screening**
• Digital health attestation before arrival
• Temperature screening integration at kiosks
• Automatic visit restrictions based on screening results
• Outbreak mode for enhanced protocols

**Vendor Management**
• Pre-registration with credentialing verification
• NDA and HIPAA acknowledgment collection
• Pharmaceutical rep tracking and reporting
• Equipment vendor scheduling

**Audit Trail**
• Complete HIPAA-compliant logging
• 7-year retention with secure archival
• Audit report generation
• Access request documentation`,
  implementation: `Deployment followed a controlled rollout across 14 weeks:

**Phase 1: EMR Integration & Pilot (Weeks 1-6)**
• Epic integration development and testing
• Pilot at flagship hospital
• Workflow refinement based on staff feedback

**Phase 2: Regional Rollout (Weeks 7-10)**
• Deployed to 4 additional hospitals
• Standardized health screening protocols
• Vendor registration portal launch

**Phase 3: Full Deployment (Weeks 11-14)**
• Remaining 3 hospitals brought online
• Unified dashboards and reporting
• Final compliance certification`,
  results: `The implementation delivered exceptional compliance and operational outcomes:

**Compliance Achievement**
• Zero HIPAA findings in subsequent OCR audit
• 100% visitor activity logging
• Complete audit trail for every entry

**Operational Efficiency**
• 70% reduction in check-in time
• 85% of visitors pre-register
• Eliminated paper logs entirely

**Vendor Control**
• 100% pharmaceutical rep visit tracking
• Reduced unauthorized vendor access by 95%
• Improved contractor safety compliance

**Emergency Preparedness**
• Real-time visibility into all visitors across 8 facilities
• Unified emergency mustering capability
• Instant notification system for building alerts`,
  metrics: [
    { value: '0', label: 'HIPAA Findings' },
    { value: '70%', label: 'Faster Check-in' },
    { value: '8', label: 'Hospitals Unified' },
    { value: '100%', label: 'Activity Logging' },
  ],
  quote: {
    text: 'CIVIUM\'s integration with Epic was seamless. We went from audit findings to audit commendation in one year.',
    author: 'Jennifer Walsh',
    title: 'Chief Compliance Officer',
  },
  tags: ['Healthcare', 'HIPAA', 'Visitor Management', 'EMR Integration', 'Compliance'],
  duration: '14 weeks implementation',
  teamSize: '3 Visionblox consultants',
  publishedDate: '2024-08-05',
  featured: false,
}

// ============================================================================
// MANUFACTURING CASE STUDIES
// ============================================================================

export const manufacturingOpsCase: CaseStudy = {
  id: 'manufacturing-multi-site',
  title: 'Manufacturing Company Achieves Multi-Site Visibility',
  subtitle: '45% Downtime Reduction with AUSTRA',
  client: 'Precision Manufacturing Inc.',
  industry: 'Manufacturing',
  industryId: 'manufacturing',
  platform: 'austra',
  modules: ['Pro-Project', 'Pro-People'],
  heroImage: '/images/case-studies/manufacturing-ops.jpg',
  summary: 'A manufacturing company with 12 facilities lacked visibility into cross-site operational performance. AUSTRA unified their operations, reduced unplanned downtime by 45%, and standardized best practices across all locations.',
  challenge: `The company faced significant operational challenges across their manufacturing footprint:

• 12 facilities operating as independent silos
• No standardized metrics or reporting across sites
• Inconsistent maintenance practices leading to equipment failures
• Manual data collection and reporting took 2 weeks per month
• Best practices trapped within individual facilities
• Leadership lacked real-time visibility into operations`,
  solution: `Visionblox deployed AUSTRA with manufacturing-focused configurations:

**Unified Operations Dashboard**
• Real-time OEE metrics across all 12 facilities
• Standardized KPI definitions and calculations
• Drill-down from enterprise to machine level
• Mobile access for plant managers

**Predictive Maintenance**
• Machine learning models for failure prediction
• Integration with SCADA and PLC systems
• Automated work order generation
• Spare parts inventory optimization

**Workforce Optimization**
• Cross-facility labor utilization tracking
• Skills matrix and certification management
• Shift scheduling optimization
• Safety incident tracking and trending

**Best Practice Sharing**
• Performance benchmarking across facilities
• Improvement initiative tracking
• Knowledge base for standard procedures`,
  implementation: `The rollout followed a hub-and-spoke model:

**Phase 1: Data Foundation (Weeks 1-4)**
• Standardized metric definitions across facilities
• SCADA/PLC integration architecture
• Data warehouse setup

**Phase 2: Pilot Facilities (Weeks 5-8)**
• Deployed to 3 representative facilities
• Dashboard development and refinement
• Predictive model training

**Phase 3: Full Rollout (Weeks 9-14)**
• Extended to remaining 9 facilities
• Manager training program
• Executive reporting activation

**Phase 4: Optimization (Ongoing)**
• Continuous model improvement
• Quarterly best practice reviews
• New facility onboarding playbook`,
  results: `The transformation delivered measurable improvements:

**Downtime Reduction**
• 45% reduction in unplanned downtime
• Predictive maintenance catching 80% of failures before occurrence
• Mean time to repair reduced by 30%

**Operational Efficiency**
• OEE improved by 8 percentage points across fleet
• Best practices identified and replicated, saving $3M annually
• Reporting time reduced from 2 weeks to real-time

**Workforce Productivity**
• 15% improvement in labor utilization
• Cross-training identified $500K in overtime reduction opportunity
• Safety incidents reduced by 25%

**Leadership Visibility**
• Real-time visibility into all 12 facilities
• Data-driven capital investment decisions
• Proactive issue resolution`,
  metrics: [
    { value: '45%', label: 'Downtime Reduction' },
    { value: '12', label: 'Sites Unified' },
    { value: '$3M', label: 'Annual Savings' },
    { value: '8pts', label: 'OEE Improvement' },
  ],
  quote: {
    text: 'For the first time, I can see all 12 facilities in real-time. We\'ve standardized best practices and reduced downtime dramatically.',
    author: 'Robert Torres',
    title: 'VP of Operations',
  },
  tags: ['Manufacturing', 'Operations', 'Multi-Site', 'Predictive Maintenance', 'OEE'],
  duration: '14 weeks implementation',
  teamSize: '5 Visionblox consultants',
  publishedDate: '2024-06-15',
  featured: true,
}

export const warrantyRecoveryCase: CaseStudy = {
  id: 'manufacturing-warranty',
  title: 'Manufacturer Recovers $1.2M in Warranty Claims',
  subtitle: 'Asset Lifecycle Management with CIVIUM',
  client: 'Industrial Equipment Manufacturer',
  industry: 'Manufacturing',
  industryId: 'manufacturing',
  platform: 'civium',
  modules: ['Pro-Assure'],
  heroImage: '/images/case-studies/warranty-recovery.jpg',
  summary: 'An industrial manufacturer was losing over $2M annually in expired warranties and missed claims. CIVIUM Pro-Assure automated warranty tracking across 10,000+ assets, recovering $1.2M in the first year.',
  challenge: `The company faced significant asset management challenges:

• 10,000+ pieces of production equipment across 8 facilities
• Warranty information scattered across spreadsheets and filing cabinets
• No systematic approach to claim filing
• Equipment failures often occurred after warranty expiration
• Maintenance team unaware of active warranty coverage
• Vendor relationships strained by poor claim documentation`,
  solution: `Visionblox implemented CIVIUM Pro-Assure for comprehensive warranty management:

**Asset Registry**
• Centralized database of all production equipment
• Warranty terms, coverage, and expiration tracking
• Document storage for purchase orders and manuals
• QR code tagging for easy asset lookup

**Proactive Alerting**
• 90/60/30 day warranty expiration alerts
• Maintenance trigger notifications
• Coverage verification before repair work
• Vendor SLA tracking

**Claim Automation**
• Pre-populated claim forms with asset data
• Photo and documentation attachment
• Vendor portal integration where available
• Claim status tracking through resolution

**Analytics & Reporting**
• Warranty coverage by facility and equipment type
• Claim success rates by vendor
• Cost avoidance tracking
• Renewal decision support`,
  implementation: `Implementation was completed in 12 weeks:

**Phase 1: Asset Inventory (Weeks 1-4)**
• Physical inventory of all equipment
• Warranty document collection and digitization
• Asset tagging and database population

**Phase 2: System Configuration (Weeks 5-8)**
• Alerting rules and escalation setup
• Vendor profile configuration
• Integration with maintenance system

**Phase 3: Training & Launch (Weeks 9-12)**
• Maintenance team training
• Procurement team training
• Go-live and hypercare support`,
  results: `The first year delivered exceptional ROI:

**Financial Recovery**
• $1.2M in warranty claims successfully filed and paid
• 60% claim success rate (up from 20%)
• $400K in avoided repair costs through proactive claims

**Operational Improvement**
• 100% of assets tracked with warranty status
• Zero expired warranties missed in year one
• Average claim processing time reduced by 50%

**Vendor Relationships**
• Improved documentation quality accelerated claim resolution
• Data-driven vendor performance discussions
• Better negotiating position for warranty terms

**Process Maturity**
• Warranty considerations integrated into procurement
• Maintenance SOPs updated to check coverage first
• Leadership visibility into warranty portfolio`,
  metrics: [
    { value: '$1.2M', label: 'Claims Recovered' },
    { value: '10K+', label: 'Assets Tracked' },
    { value: '60%', label: 'Claim Success Rate' },
    { value: '0', label: 'Missed Expirations' },
  ],
  quote: {
    text: 'We had no idea how much money was walking out the door in missed warranty claims. Pro-Assure paid for itself in the first quarter.',
    author: 'Linda Martinez',
    title: 'Director of Maintenance',
  },
  tags: ['Manufacturing', 'Warranty', 'Asset Management', 'Cost Recovery', 'Maintenance'],
  duration: '12 weeks implementation',
  teamSize: '2 Visionblox consultants',
  publishedDate: '2024-04-20',
  featured: false,
}

// ============================================================================
// FINANCIAL SERVICES CASE STUDIES
// ============================================================================

export const bankComplianceCase: CaseStudy = {
  id: 'bank-sox-compliance',
  title: 'Regional Bank Achieves SOX Compliance Excellence',
  subtitle: 'Audit-Ready Operations with CIVIUM',
  client: 'Atlantic Financial Group',
  industry: 'Financial Services',
  industryId: 'fintech',
  platform: 'civium',
  modules: ['Pro-Visit', 'Pro-Assure'],
  heroImage: '/images/case-studies/bank-compliance.jpg',
  summary: 'A regional bank needed to strengthen SOX compliance for visitor management and IT asset controls. CIVIUM delivered complete audit trails and automated controls, resulting in the smoothest examination in company history.',
  challenge: `The bank faced increasing regulatory scrutiny:

• Previous SOX examination had material weakness findings
• Visitor logs at 35 branches were paper-based and inconsistent
• IT asset disposal lacked proper documentation
• No systematic NDA management for vendors
• Examiners required detailed access logs the bank couldn't produce
• Board and audit committee demanding improvement`,
  solution: `Visionblox deployed CIVIUM across visitor management and asset compliance:

**Visitor Compliance (Pro-Visit)**
• Digital visitor registration at all 35 branches
• Automatic NDA presentation and signature capture
• Restricted zone access logging
• Audit report generation on demand

**Asset Lifecycle (Pro-Assure)**
• IT asset inventory with chain of custody
• Disposal certification and data destruction documentation
• Lease and warranty tracking
• Vendor access correlation with asset interactions

**Compliance Reporting**
• Examiner-ready report templates
• Automated control testing evidence
• Exception tracking and remediation
• Board reporting dashboards`,
  implementation: `Rollout prioritized compliance-critical locations:

**Phase 1: Headquarters & Data Center (Weeks 1-6)**
• High-security visitor management
• IT asset controls implementation
• Integration with Active Directory

**Phase 2: Branch Rollout (Weeks 7-14)**
• Phased deployment to 35 branches
• Regional manager training
• Standardized procedures

**Phase 3: Compliance Validation (Weeks 15-16)**
• Internal audit walkthrough
• Control testing validation
• Examiner presentation preparation`,
  results: `The SOX examination was transformed:

**Examination Outcome**
• Zero material weaknesses (down from 2)
• Zero significant deficiencies
• Examiner commended control environment
• Audit committee satisfaction dramatically improved

**Operational Efficiency**
• 60% reduction in compliance documentation time
• Audit requests fulfilled in hours vs. weeks
• Year-round control monitoring vs. annual scramble

**Risk Reduction**
• Complete visitor audit trail
• IT asset chain of custody documentation
• NDA compliance for all vendor interactions

**Cost Savings**
• Reduced external audit fees by 15%
• Eliminated manual compliance tracking roles
• Avoided regulatory penalties`,
  metrics: [
    { value: '0', label: 'Material Weaknesses' },
    { value: '35', label: 'Branches Unified' },
    { value: '60%', label: 'Less Documentation Time' },
    { value: '15%', label: 'Audit Fee Reduction' },
  ],
  quote: {
    text: 'Our examiners specifically called out our visitor management and asset controls as best-in-class. That\'s never happened before.',
    author: 'David Anderson',
    title: 'Chief Audit Executive',
  },
  tags: ['Financial Services', 'SOX', 'Compliance', 'Audit', 'Risk Management'],
  duration: '16 weeks implementation',
  teamSize: '4 Visionblox consultants',
  publishedDate: '2024-10-01',
  featured: false,
}

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const CASE_STUDIES: CaseStudy[] = [
  defenseCaptureCase,
  federalVisitorCase,
  hospitalWorkforceCase,
  healthcareVisitorCase,
  manufacturingOpsCase,
  warrantyRecoveryCase,
  bankComplianceCase,
]

export const FEATURED_CASE_STUDIES = CASE_STUDIES.filter(cs => cs.featured)

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return CASE_STUDIES.find(cs => cs.id === id)
}

export function getCaseStudiesByIndustry(industryId: string): CaseStudy[] {
  return CASE_STUDIES.filter(cs => cs.industryId === industryId)
}

export function getCaseStudiesByPlatform(platform: 'austra' | 'aureon' | 'civium'): CaseStudy[] {
  return CASE_STUDIES.filter(cs => cs.platform === platform)
}
