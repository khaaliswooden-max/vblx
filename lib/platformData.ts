import {
  Users,
  Building2,
  Utensils,
  Car,
  FolderKanban,
  Brain,
  BarChart3,
  Zap,
  Shield,
  Clock,
  Target,
  TrendingUp,
  FileText,
  Search,
  LineChart,
  Boxes,
  Link2,
  ShoppingCart,
  UserCheck,
  AlertTriangle,
  Headphones,
  FileCheck,
  Eye,
  Lock,
  Bell,
  Fingerprint,
  type LucideIcon,
} from 'lucide-react'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface Capability {
  icon: LucideIcon
  title: string
  description: string
  highlights: string[]
}

export interface ArchitectureStep {
  icon: LucideIcon
  label: string
  description: string
}

export interface Metric {
  value: number
  suffix: string
  prefix?: string
  label: string
  description: string
}

export interface UseCase {
  industry: string
  title: string
  challenge: string
  solution: string
  outcome: string
  metrics: string[]
}

export interface Integration {
  name: string
  category: 'data-sources' | 'outputs' | 'enterprise'
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface PlatformData {
  capabilities: Capability[]
  architecture: {
    title: string
    subtitle: string
    steps: ArchitectureStep[]
  }
  metrics: Metric[]
  useCases: UseCase[]
  integrations: {
    categories: {
      id: string
      label: string
    }[]
    items: Integration[]
  }
  faq: FAQItem[]
}

// ============================================================================
// AUSTRA - Operational Intelligence OS
// ============================================================================

export const austraData: PlatformData = {
  capabilities: [
    {
      icon: Users,
      title: 'Workforce Intelligence',
      description: 'Real-time visibility into workforce dynamics, performance patterns, and resource allocation across your organization.',
      highlights: ['Employee lifecycle tracking', 'Performance analytics', 'Capacity planning'],
    },
    {
      icon: Building2,
      title: 'Facility Operations',
      description: 'Unified management of physical spaces, assets, and infrastructure with predictive maintenance capabilities.',
      highlights: ['Space utilization', 'Asset tracking', 'Maintenance scheduling'],
    },
    {
      icon: Brain,
      title: 'AI Anomaly Detection',
      description: 'Machine learning models that identify operational anomalies before they become critical issues.',
      highlights: ['Pattern recognition', 'Predictive alerts', 'Root cause analysis'],
    },
    {
      icon: BarChart3,
      title: 'Operational Analytics',
      description: 'Comprehensive dashboards and reports that transform raw data into actionable operational insights.',
      highlights: ['Custom dashboards', 'Trend analysis', 'Benchmarking'],
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline repetitive tasks and workflows with intelligent automation that adapts to your processes.',
      highlights: ['Workflow builder', 'Rule-based triggers', 'Integration hooks'],
    },
    {
      icon: Clock,
      title: 'Real-Time Monitoring',
      description: 'Live operational data streams with configurable alerts and escalation protocols.',
      highlights: ['Live dashboards', 'Alert management', 'Mobile notifications'],
    },
  ],
  architecture: {
    title: 'How AUSTRA Works',
    subtitle: 'From data ingestion to actionable intelligence in four seamless steps',
    steps: [
      {
        icon: Link2,
        label: 'Connect',
        description: 'Integrate with existing HR, facilities, and operational systems via secure APIs',
      },
      {
        icon: Boxes,
        label: 'Aggregate',
        description: 'Normalize and consolidate data into a unified operational data layer',
      },
      {
        icon: Brain,
        label: 'Analyze',
        description: 'Apply AI/ML models to identify patterns, anomalies, and optimization opportunities',
      },
      {
        icon: Target,
        label: 'Act',
        description: 'Deliver insights through dashboards, alerts, and automated workflows',
      },
    ],
  },
  metrics: [
    {
      value: 40,
      suffix: '%',
      label: 'Reduction in Operational Overhead',
      description: 'Average decrease in manual operational tasks',
    },
    {
      value: 3,
      suffix: 'hrs',
      label: 'Saved Daily Per Manager',
      description: 'Time recovered from automated reporting',
    },
    {
      value: 99.9,
      suffix: '%',
      label: 'Platform Uptime',
      description: 'Enterprise-grade reliability and availability',
    },
    {
      value: 60,
      suffix: '%',
      label: 'Faster Issue Resolution',
      description: 'Reduction in time-to-resolution for operational issues',
    },
  ],
  useCases: [
    {
      industry: 'Healthcare',
      title: 'Hospital Workforce Optimization',
      challenge: 'A 500-bed regional hospital struggled with staff scheduling inefficiencies, leading to overtime costs and burnout.',
      solution: 'AUSTRA\'s Pro-People module analyzed scheduling patterns, patient flow data, and staff preferences to generate optimized schedules automatically.',
      outcome: 'Achieved 25% reduction in overtime costs while improving staff satisfaction scores by 18 points.',
      metrics: ['25% overtime reduction', '18-point satisfaction increase', '$2.1M annual savings'],
    },
    {
      industry: 'Education',
      title: 'University Campus Operations',
      challenge: 'A large university needed to optimize space utilization across 50+ buildings while reducing energy costs.',
      solution: 'Deployed Pro-School and Pro-Parking modules to create a unified view of campus operations with real-time occupancy tracking.',
      outcome: 'Identified 30% underutilized spaces and reduced energy consumption by 22% through smart scheduling.',
      metrics: ['30% space optimization', '22% energy reduction', '15% parking efficiency gain'],
    },
    {
      industry: 'Manufacturing',
      title: 'Multi-Site Facility Management',
      challenge: 'A manufacturing company with 12 facilities lacked visibility into cross-site operational performance.',
      solution: 'AUSTRA consolidated data from all facilities into unified dashboards with AI-powered anomaly detection.',
      outcome: 'Reduced unplanned downtime by 45% and standardized best practices across all locations.',
      metrics: ['45% downtime reduction', '12 sites unified', '3x faster reporting'],
    },
  ],
  integrations: {
    categories: [
      { id: 'data-sources', label: 'Data Sources' },
      { id: 'enterprise', label: 'Enterprise Systems' },
      { id: 'outputs', label: 'Outputs & Actions' },
    ],
    items: [
      { name: 'Workday', category: 'data-sources', description: 'HR and workforce data' },
      { name: 'SAP SuccessFactors', category: 'data-sources', description: 'Employee management' },
      { name: 'ADP', category: 'data-sources', description: 'Payroll and time tracking' },
      { name: 'ServiceNow', category: 'enterprise', description: 'IT service management' },
      { name: 'Salesforce', category: 'enterprise', description: 'CRM integration' },
      { name: 'Microsoft 365', category: 'enterprise', description: 'Productivity suite' },
      { name: 'Slack', category: 'outputs', description: 'Team notifications' },
      { name: 'Power BI', category: 'outputs', description: 'Advanced analytics' },
      { name: 'Webhooks', category: 'outputs', description: 'Custom integrations' },
    ],
  },
  faq: [
    {
      question: 'How long does AUSTRA implementation typically take?',
      answer: 'Standard implementations take 8-12 weeks depending on scope. We follow a phased approach starting with core modules and expanding based on your priorities. Our team handles data migration, integration setup, and user training.',
    },
    {
      question: 'Can AUSTRA integrate with our existing HR and facilities systems?',
      answer: 'Yes, AUSTRA is designed for enterprise integration. We support 50+ out-of-the-box connectors for major HR, facilities, and ERP systems. For custom systems, our API-first architecture enables seamless integration.',
    },
    {
      question: 'What security certifications does AUSTRA hold?',
      answer: 'AUSTRA maintains SOC 2 Type II certification, supports HIPAA compliance for healthcare clients, and follows FedRAMP guidelines for federal deployments. All data is encrypted at rest and in transit.',
    },
    {
      question: 'How does the AI anomaly detection work?',
      answer: 'Our ML models learn normal operational patterns from your historical data. They continuously monitor for deviations and alert you to potential issues before they escalate. The system improves accuracy over time as it learns your specific environment.',
    },
    {
      question: 'Is AUSTRA available for on-premise deployment?',
      answer: 'Yes, we offer both cloud (SaaS) and on-premise deployment options. On-premise deployments are common for federal clients and organizations with strict data residency requirements.',
    },
    {
      question: 'What support is included with AUSTRA?',
      answer: 'All plans include 24/7 technical support, dedicated customer success manager, quarterly business reviews, and access to our training portal. Enterprise plans add priority support SLAs and on-site training options.',
    },
  ],
}

// ============================================================================
// AUREON - Procurement Substrate
// ============================================================================

export const aureonData: PlatformData = {
  capabilities: [
    {
      icon: Search,
      title: 'Opportunity Intelligence',
      description: 'AI-powered discovery and analysis of procurement opportunities across federal, state, and commercial markets.',
      highlights: ['Market scanning', 'Opportunity matching', 'Competitor tracking'],
    },
    {
      icon: FileText,
      title: 'Proposal Automation',
      description: 'Streamlined proposal development with intelligent templates, compliance checking, and collaborative workflows.',
      highlights: ['Template library', 'Compliance validation', 'Version control'],
    },
    {
      icon: LineChart,
      title: 'Win Probability Modeling',
      description: 'Data-driven predictions of win likelihood based on historical performance and competitive landscape.',
      highlights: ['Predictive scoring', 'Factor analysis', 'Portfolio optimization'],
    },
    {
      icon: Boxes,
      title: 'Supply Chain Visibility',
      description: 'End-to-end visibility into supplier networks, risk assessment, and performance monitoring.',
      highlights: ['Supplier scoring', 'Risk alerts', 'Performance tracking'],
    },
    {
      icon: TrendingUp,
      title: 'Pipeline Analytics',
      description: 'Comprehensive dashboards for tracking opportunities from identification through award.',
      highlights: ['Stage tracking', 'Revenue forecasting', 'Resource planning'],
    },
    {
      icon: Target,
      title: 'Strategic Positioning',
      description: 'Tools for analyzing competitive landscape and positioning your organization for success.',
      highlights: ['Competitor analysis', 'Capability mapping', 'Teaming recommendations'],
    },
  ],
  architecture: {
    title: 'How AUREON Works',
    subtitle: 'From opportunity discovery to proposal submission in a unified workflow',
    steps: [
      {
        icon: Search,
        label: 'Discover',
        description: 'AI scans federal databases, SAM.gov, and commercial sources for matching opportunities',
      },
      {
        icon: BarChart3,
        label: 'Evaluate',
        description: 'Score opportunities based on fit, competition, and win probability',
      },
      {
        icon: FileText,
        label: 'Develop',
        description: 'Build compliant proposals using intelligent templates and automated workflows',
      },
      {
        icon: Target,
        label: 'Win',
        description: 'Track submissions, analyze outcomes, and continuously improve win rates',
      },
    ],
  },
  metrics: [
    {
      value: 35,
      suffix: '%',
      label: 'Increase in Win Rate',
      description: 'Average improvement in proposal success',
    },
    {
      value: 50,
      suffix: '%',
      label: 'Faster Proposal Development',
      description: 'Reduction in time from RFP to submission',
    },
    {
      value: 10,
      suffix: 'x',
      label: 'More Opportunities Evaluated',
      description: 'Increase in pipeline coverage capacity',
    },
    {
      value: 2.5,
      suffix: 'M',
      prefix: '$',
      label: 'Average Annual Contract Value',
      description: 'Per client wins attributed to AUREON',
    },
  ],
  useCases: [
    {
      industry: 'Federal Contracting',
      title: 'Defense Contractor Pipeline Management',
      challenge: 'A mid-size defense contractor missed opportunities due to manual tracking and couldn\'t scale their BD efforts.',
      solution: 'AUREON\'s Pro-Sales module automated opportunity discovery and qualification, while Pro-Biz streamlined proposal development.',
      outcome: 'Increased qualified pipeline by 300% and improved win rate from 18% to 28% within 12 months.',
      metrics: ['300% pipeline growth', '10-point win rate increase', '40% faster submissions'],
    },
    {
      industry: 'IT Services',
      title: 'State & Local Government Expansion',
      challenge: 'An IT services firm wanted to expand into SLED markets but lacked visibility into state procurement processes.',
      solution: 'Deployed AUREON to monitor all 50 states plus major municipalities, with AI matching opportunities to capability matrix.',
      outcome: 'Entered 12 new state markets and secured first contracts within 6 months of deployment.',
      metrics: ['12 new markets', '$8M in new contracts', '60% bid/no-bid accuracy'],
    },
    {
      industry: 'Healthcare IT',
      title: 'HHS Contract Capture',
      challenge: 'A healthcare IT vendor needed to improve their capture process for large HHS contracts.',
      solution: 'AUREON provided competitive intelligence, teaming partner recommendations, and proposal automation.',
      outcome: 'Won a $45M HHS contract with a proposal developed in 40% less time than previous efforts.',
      metrics: ['$45M contract won', '40% development time reduction', '25% cost savings'],
    },
  ],
  integrations: {
    categories: [
      { id: 'data-sources', label: 'Opportunity Sources' },
      { id: 'enterprise', label: 'Enterprise Systems' },
      { id: 'outputs', label: 'Collaboration & Output' },
    ],
    items: [
      { name: 'SAM.gov', category: 'data-sources', description: 'Federal opportunities' },
      { name: 'GovWin', category: 'data-sources', description: 'Market intelligence' },
      { name: 'Bloomberg Government', category: 'data-sources', description: 'Federal analytics' },
      { name: 'Salesforce', category: 'enterprise', description: 'CRM and pipeline' },
      { name: 'Microsoft Dynamics', category: 'enterprise', description: 'Business applications' },
      { name: 'SharePoint', category: 'enterprise', description: 'Document management' },
      { name: 'DocuSign', category: 'outputs', description: 'Contract execution' },
      { name: 'Microsoft Word', category: 'outputs', description: 'Proposal export' },
      { name: 'Teams', category: 'outputs', description: 'Collaboration' },
    ],
  },
  faq: [
    {
      question: 'Does AUREON support federal acquisition regulations (FAR)?',
      answer: 'Yes, AUREON is built with FAR compliance at its core. Our proposal templates include FAR/DFARS compliance checking, and the platform tracks regulatory updates to ensure your submissions meet current requirements.',
    },
    {
      question: 'How does the win probability model work?',
      answer: 'Our model analyzes 40+ factors including your past performance, incumbent relationships, pricing competitiveness, and competitive landscape. It\'s trained on thousands of federal awards and continuously improves based on your outcomes.',
    },
    {
      question: 'Can AUREON help with teaming arrangements?',
      answer: 'Absolutely. AUREON includes teaming partner recommendations based on capability gaps, past performance, and relationship mapping. You can track teaming agreements and joint proposals within the platform.',
    },
    {
      question: 'What opportunity sources does AUREON monitor?',
      answer: 'We integrate with SAM.gov, state procurement portals, GovWin, Bloomberg Government, and commercial RFP databases. Our AI continuously scans these sources and matches opportunities to your capability profile.',
    },
    {
      question: 'Is there a proposal content library?',
      answer: 'Yes, AUREON includes a knowledge management system for storing and reusing proposal content. The AI suggests relevant past content based on RFP requirements, significantly speeding up proposal development.',
    },
    {
      question: 'How does pricing compare to other GovCon tools?',
      answer: 'AUREON is competitively priced with transparent per-seat licensing. We offer modules separately or as a bundle. Most clients see ROI within the first won contract attributed to AUREON insights.',
    },
  ],
}

// ============================================================================
// CIVIUM - Compliance Engine
// ============================================================================

export const civiumData: PlatformData = {
  capabilities: [
    {
      icon: UserCheck,
      title: 'Visitor Management',
      description: 'Enterprise-grade visitor registration, badge printing, and access control with compliance logging.',
      highlights: ['Pre-registration', 'ID verification', 'Watchlist screening'],
    },
    {
      icon: AlertTriangle,
      title: 'Threat Assessment',
      description: 'Real-time risk evaluation and alerting based on visitor profiles and behavioral patterns.',
      highlights: ['Risk scoring', 'Real-time alerts', 'Incident tracking'],
    },
    {
      icon: Headphones,
      title: 'Service Management',
      description: 'Comprehensive ticketing and issue resolution tracking with SLA management.',
      highlights: ['Ticket routing', 'SLA tracking', 'Knowledge base'],
    },
    {
      icon: FileCheck,
      title: 'Warranty Assurance',
      description: 'Complete warranty and asset lifecycle management with automated claim processing.',
      highlights: ['Warranty tracking', 'Claim automation', 'Vendor management'],
    },
    {
      icon: Eye,
      title: 'Audit Trail',
      description: 'Immutable logging of all compliance-related activities for regulatory requirements.',
      highlights: ['Complete history', 'Export capabilities', 'Tamper-proof logs'],
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Role-based permissions and physical access management integrated with visitor systems.',
      highlights: ['Badge management', 'Zone restrictions', 'Temporal access'],
    },
  ],
  architecture: {
    title: 'How CIVIUM Works',
    subtitle: 'Comprehensive compliance management from entry to audit',
    steps: [
      {
        icon: Fingerprint,
        label: 'Verify',
        description: 'Authenticate visitors and assets through multi-factor verification',
      },
      {
        icon: Shield,
        label: 'Assess',
        description: 'Evaluate risk levels and apply appropriate security protocols',
      },
      {
        icon: Bell,
        label: 'Monitor',
        description: 'Continuous tracking and real-time alerting for compliance events',
      },
      {
        icon: FileCheck,
        label: 'Document',
        description: 'Maintain complete audit trails for regulatory compliance',
      },
    ],
  },
  metrics: [
    {
      value: 90,
      suffix: '%',
      label: 'Reduction in Check-in Time',
      description: 'Faster visitor processing with pre-registration',
    },
    {
      value: 100,
      suffix: '%',
      label: 'Audit Compliance',
      description: 'Complete documentation for regulatory requirements',
    },
    {
      value: 75,
      suffix: '%',
      label: 'Faster Ticket Resolution',
      description: 'Improved SLA performance with intelligent routing',
    },
    {
      value: 45,
      suffix: '%',
      label: 'Warranty Recovery Increase',
      description: 'More successful claims through automated tracking',
    },
  ],
  useCases: [
    {
      industry: 'Federal Facilities',
      title: 'Secure Federal Campus Management',
      challenge: 'A federal agency needed to modernize visitor management across 15 facilities while meeting FISMA requirements.',
      solution: 'CIVIUM\'s Pro-Visit module provided pre-registration, ID verification, and watchlist screening integrated with existing PIV systems.',
      outcome: 'Reduced visitor processing time by 80% while achieving full FISMA compliance certification.',
      metrics: ['80% faster processing', 'FISMA compliant', '15 facilities unified'],
    },
    {
      industry: 'Healthcare',
      title: 'Hospital Security Compliance',
      challenge: 'A hospital system needed to track all visitors, manage contractor access, and maintain HIPAA compliance.',
      solution: 'Deployed Pro-Visit with healthcare-specific workflows and integration with Epic for patient matching.',
      outcome: 'Eliminated paper logs, reduced unauthorized access incidents by 95%, and passed HIPAA audits with zero findings.',
      metrics: ['95% security improvement', 'Zero HIPAA findings', '100% digital records'],
    },
    {
      industry: 'Manufacturing',
      title: 'Warranty and Asset Compliance',
      challenge: 'A manufacturing company lost $2M annually in expired warranties and untracked asset claims.',
      solution: 'Pro-Assure automated warranty tracking, claim filing, and vendor communication for 10,000+ assets.',
      outcome: 'Recovered $1.2M in previously missed warranty claims in the first year.',
      metrics: ['$1.2M recovered', '10,000+ assets tracked', '60% claim success rate'],
    },
  ],
  integrations: {
    categories: [
      { id: 'data-sources', label: 'Identity Sources' },
      { id: 'enterprise', label: 'Enterprise Systems' },
      { id: 'outputs', label: 'Security & Compliance' },
    ],
    items: [
      { name: 'Azure AD', category: 'data-sources', description: 'Identity management' },
      { name: 'Okta', category: 'data-sources', description: 'SSO and identity' },
      { name: 'PIV/CAC', category: 'data-sources', description: 'Federal credentials' },
      { name: 'ServiceNow', category: 'enterprise', description: 'ITSM integration' },
      { name: 'SAP', category: 'enterprise', description: 'Asset management' },
      { name: 'Maximo', category: 'enterprise', description: 'Facilities management' },
      { name: 'Splunk', category: 'outputs', description: 'Security analytics' },
      { name: 'SIEM', category: 'outputs', description: 'Security monitoring' },
      { name: 'Compliance Reports', category: 'outputs', description: 'Audit documentation' },
    ],
  },
  faq: [
    {
      question: 'Is CIVIUM compliant with federal security requirements?',
      answer: 'Yes, CIVIUM supports FISMA, FedRAMP, and NIST 800-53 controls. Our visitor management module integrates with PIV/CAC systems and maintains complete audit trails required for federal compliance.',
    },
    {
      question: 'Can visitors pre-register before arriving?',
      answer: 'Absolutely. CIVIUM provides a branded self-service portal where visitors can pre-register, upload ID documents, complete NDAs, and receive QR codes for expedited check-in upon arrival.',
    },
    {
      question: 'How does the watchlist screening work?',
      answer: 'CIVIUM integrates with configurable watchlists including internal deny lists, government databases (where authorized), and custom screening criteria. Matches trigger immediate alerts to security personnel.',
    },
    {
      question: 'Does Pro-Ticket integrate with existing ITSM tools?',
      answer: 'Yes, we have bi-directional integrations with ServiceNow, Jira Service Management, Zendesk, and other major ITSM platforms. Tickets can flow seamlessly between systems while maintaining SLA tracking.',
    },
    {
      question: 'How are warranty claims automated?',
      answer: 'Pro-Assure tracks warranty terms for all registered assets. When issues arise, it automatically checks warranty status, pre-fills claim forms, and routes to vendors. The system tracks claim status through resolution.',
    },
    {
      question: 'What badge printing options are available?',
      answer: 'CIVIUM supports all major badge printer brands (Zebra, HID, Evolis). We offer temporary visitor badges with photos, contractor badges with expiration dates, and integration with permanent access control systems.',
    },
  ],
}

// ============================================================================
// COMBINED EXPORT
// ============================================================================

export const PLATFORM_DATA = {
  austra: austraData,
  aureon: aureonData,
  civium: civiumData,
} as const

export type PlatformDataKey = keyof typeof PLATFORM_DATA
