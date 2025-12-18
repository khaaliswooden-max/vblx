import {
  Cloud,
  Cog,
  Database,
  Shield,
  Users,
  Code,
  Brain,
  Workflow,
  Monitor,
  HeadphonesIcon,
  Layers,
  Rocket,
  type LucideIcon,
} from 'lucide-react'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface ServiceDeliverable {
  title: string
  description: string
}

export interface ServicePhase {
  name: string
  duration: string
  activities: string[]
}

export interface ServiceBenefit {
  title: string
  description: string
}

export interface Service {
  id: string
  name: string
  shortName: string
  tagline: string
  description: string
  icon: LucideIcon
  color: string
  category: 'consulting' | 'implementation' | 'managed' | 'development'
  deliverables: ServiceDeliverable[]
  methodology: ServicePhase[]
  benefits: ServiceBenefit[]
  relatedPlatforms: ('austra' | 'aureon' | 'civium')[]
  idealFor: string[]
  engagementModels: string[]
}

export interface ServiceCategory {
  id: string
  name: string
  description: string
  services: string[]
}

// ============================================================================
// CONSULTING SERVICES
// ============================================================================

export const digitalStrategyService: Service = {
  id: 'digital-strategy',
  name: 'Digital Transformation Strategy',
  shortName: 'Digital Strategy',
  tagline: 'Chart Your Path to Digital Excellence',
  description: 'Comprehensive digital transformation roadmaps that align technology investments with business objectives. We assess your current state, define your target architecture, and create actionable plans for modernization.',
  icon: Rocket,
  color: '#6366F1',
  category: 'consulting',
  deliverables: [
    {
      title: 'Current State Assessment',
      description: 'Comprehensive analysis of existing systems, processes, and capabilities.',
    },
    {
      title: 'Target Architecture Design',
      description: 'Future-state technology architecture aligned with business goals.',
    },
    {
      title: 'Transformation Roadmap',
      description: 'Phased implementation plan with timelines, milestones, and resource requirements.',
    },
    {
      title: 'Business Case Development',
      description: 'ROI analysis and investment justification for stakeholder approval.',
    },
  ],
  methodology: [
    {
      name: 'Discovery',
      duration: '2-3 weeks',
      activities: ['Stakeholder interviews', 'System inventory', 'Process mapping', 'Pain point identification'],
    },
    {
      name: 'Analysis',
      duration: '2-3 weeks',
      activities: ['Gap analysis', 'Technology assessment', 'Competitive benchmarking', 'Risk identification'],
    },
    {
      name: 'Design',
      duration: '3-4 weeks',
      activities: ['Architecture design', 'Roadmap development', 'Business case creation', 'Governance framework'],
    },
    {
      name: 'Presentation',
      duration: '1 week',
      activities: ['Executive presentation', 'Stakeholder alignment', 'Implementation planning', 'Quick wins identification'],
    },
  ],
  benefits: [
    {
      title: 'Strategic Clarity',
      description: 'Clear vision and roadmap for technology investments.',
    },
    {
      title: 'Risk Reduction',
      description: 'Identify and mitigate transformation risks early.',
    },
    {
      title: 'Stakeholder Alignment',
      description: 'Unified vision across business and IT leadership.',
    },
    {
      title: 'Optimized Investment',
      description: 'Prioritized initiatives with clear ROI projections.',
    },
  ],
  relatedPlatforms: ['austra', 'aureon', 'civium'],
  idealFor: ['C-suite executives', 'IT leadership', 'Digital transformation teams', 'Operations leaders'],
  engagementModels: ['Fixed-price project', 'Time & materials', 'Retainer'],
}

export const processOptimizationService: Service = {
  id: 'process-optimization',
  name: 'Process Optimization & Automation',
  shortName: 'Process Optimization',
  tagline: 'Streamline Operations, Amplify Results',
  description: 'Identify bottlenecks, eliminate waste, and automate repetitive tasks. We combine lean methodology with intelligent automation to transform your operational efficiency.',
  icon: Workflow,
  color: '#10B981',
  category: 'consulting',
  deliverables: [
    {
      title: 'Process Maps',
      description: 'Detailed documentation of current and future-state processes.',
    },
    {
      title: 'Automation Specifications',
      description: 'Technical requirements for process automation implementation.',
    },
    {
      title: 'Efficiency Metrics',
      description: 'KPIs and measurement frameworks for ongoing optimization.',
    },
    {
      title: 'Change Management Plan',
      description: 'Communication and training plans for process transitions.',
    },
  ],
  methodology: [
    {
      name: 'Process Discovery',
      duration: '1-2 weeks',
      activities: ['Process interviews', 'Workflow observation', 'Time studies', 'Volume analysis'],
    },
    {
      name: 'Analysis & Design',
      duration: '2-3 weeks',
      activities: ['Value stream mapping', 'Waste identification', 'Automation opportunity assessment', 'Future-state design'],
    },
    {
      name: 'Pilot',
      duration: '2-4 weeks',
      activities: ['Proof of concept', 'Metric collection', 'User feedback', 'Refinement'],
    },
    {
      name: 'Scale',
      duration: 'Ongoing',
      activities: ['Full deployment', 'Training rollout', 'Continuous improvement', 'Performance monitoring'],
    },
  ],
  benefits: [
    {
      title: 'Cost Reduction',
      description: 'Eliminate manual effort and reduce operational costs.',
    },
    {
      title: 'Speed Improvement',
      description: 'Faster cycle times and reduced processing delays.',
    },
    {
      title: 'Error Reduction',
      description: 'Automated processes with built-in quality controls.',
    },
    {
      title: 'Scalability',
      description: 'Processes that grow with your business without linear cost increases.',
    },
  ],
  relatedPlatforms: ['austra'],
  idealFor: ['Operations managers', 'Process owners', 'Quality teams', 'Shared services leaders'],
  engagementModels: ['Fixed-price project', 'Outcome-based pricing'],
}

// ============================================================================
// IMPLEMENTATION SERVICES
// ============================================================================

export const platformImplementationService: Service = {
  id: 'platform-implementation',
  name: 'Platform Implementation',
  shortName: 'Implementation',
  tagline: 'Expert Deployment of Enterprise Platforms',
  description: 'Full-lifecycle implementation of AUSTRA, AUREON, and CIVIUM platforms. From requirements gathering through go-live, our certified consultants ensure successful deployment and user adoption.',
  icon: Layers,
  color: '#3B82F6',
  category: 'implementation',
  deliverables: [
    {
      title: 'Configured Platform',
      description: 'Fully configured platform instance tailored to your requirements.',
    },
    {
      title: 'Data Migration',
      description: 'Clean, validated data migrated from legacy systems.',
    },
    {
      title: 'Integration Setup',
      description: 'Connected integrations with existing enterprise systems.',
    },
    {
      title: 'User Training',
      description: 'Comprehensive training program for all user roles.',
    },
    {
      title: 'Documentation',
      description: 'System documentation, runbooks, and user guides.',
    },
  ],
  methodology: [
    {
      name: 'Initiation',
      duration: '1-2 weeks',
      activities: ['Kickoff meeting', 'Project charter', 'Team onboarding', 'Environment setup'],
    },
    {
      name: 'Requirements',
      duration: '2-3 weeks',
      activities: ['Business requirements', 'Technical requirements', 'Integration mapping', 'Data assessment'],
    },
    {
      name: 'Configuration',
      duration: '4-6 weeks',
      activities: ['Platform configuration', 'Integration development', 'Data migration', 'Custom workflows'],
    },
    {
      name: 'Testing',
      duration: '2-3 weeks',
      activities: ['System testing', 'UAT', 'Performance testing', 'Security validation'],
    },
    {
      name: 'Go-Live',
      duration: '1-2 weeks',
      activities: ['Production deployment', 'User training', 'Hypercare support', 'Knowledge transfer'],
    },
  ],
  benefits: [
    {
      title: 'Faster Time-to-Value',
      description: 'Proven methodology accelerates deployment.',
    },
    {
      title: 'Reduced Risk',
      description: 'Experienced team with platform expertise.',
    },
    {
      title: 'User Adoption',
      description: 'Change management drives actual usage.',
    },
    {
      title: 'Long-term Success',
      description: 'Knowledge transfer ensures self-sufficiency.',
    },
  ],
  relatedPlatforms: ['austra', 'aureon', 'civium'],
  idealFor: ['IT project managers', 'Business sponsors', 'Operations leaders', 'Procurement teams'],
  engagementModels: ['Fixed-price project', 'Time & materials'],
}

export const systemIntegrationService: Service = {
  id: 'system-integration',
  name: 'System Integration',
  shortName: 'Integration',
  tagline: 'Connect Your Enterprise Ecosystem',
  description: 'Seamlessly connect Visionblox platforms with your existing enterprise systems. We design and implement integrations that enable real-time data flow across your technology stack.',
  icon: Database,
  color: '#8B5CF6',
  category: 'implementation',
  deliverables: [
    {
      title: 'Integration Architecture',
      description: 'Detailed design of data flows, APIs, and middleware.',
    },
    {
      title: 'API Development',
      description: 'Custom API endpoints and integration code.',
    },
    {
      title: 'Data Mapping',
      description: 'Field-level mapping between source and target systems.',
    },
    {
      title: 'Error Handling',
      description: 'Robust error handling and retry mechanisms.',
    },
    {
      title: 'Monitoring Setup',
      description: 'Integration health monitoring and alerting.',
    },
  ],
  methodology: [
    {
      name: 'Discovery',
      duration: '1-2 weeks',
      activities: ['System inventory', 'API assessment', 'Data profiling', 'Security review'],
    },
    {
      name: 'Design',
      duration: '2-3 weeks',
      activities: ['Integration architecture', 'Data mapping', 'Error handling design', 'Security model'],
    },
    {
      name: 'Development',
      duration: '3-6 weeks',
      activities: ['API development', 'Middleware configuration', 'Unit testing', 'Documentation'],
    },
    {
      name: 'Validation',
      duration: '1-2 weeks',
      activities: ['Integration testing', 'Performance testing', 'Security testing', 'UAT'],
    },
    {
      name: 'Deployment',
      duration: '1 week',
      activities: ['Production deployment', 'Monitoring setup', 'Runbook creation', 'Support handoff'],
    },
  ],
  benefits: [
    {
      title: 'Data Consistency',
      description: 'Single source of truth across systems.',
    },
    {
      title: 'Process Automation',
      description: 'Eliminate manual data entry and transfers.',
    },
    {
      title: 'Real-time Visibility',
      description: 'Current data available when needed.',
    },
    {
      title: 'Reduced Errors',
      description: 'Automated validation and error handling.',
    },
  ],
  relatedPlatforms: ['austra', 'aureon', 'civium'],
  idealFor: ['Enterprise architects', 'IT integration teams', 'Application owners', 'Data management teams'],
  engagementModels: ['Fixed-price project', 'Time & materials', 'Retainer'],
}

export const cloudMigrationService: Service = {
  id: 'cloud-migration',
  name: 'Cloud Migration',
  shortName: 'Cloud Migration',
  tagline: 'Modernize Your Infrastructure',
  description: 'Migrate legacy systems and on-premise applications to modern cloud infrastructure. We plan, execute, and optimize cloud migrations with minimal disruption to your operations.',
  icon: Cloud,
  color: '#06B6D4',
  category: 'implementation',
  deliverables: [
    {
      title: 'Migration Assessment',
      description: 'Comprehensive analysis of applications and dependencies.',
    },
    {
      title: 'Cloud Architecture',
      description: 'Target cloud architecture design.',
    },
    {
      title: 'Migration Execution',
      description: 'Phased migration of applications and data.',
    },
    {
      title: 'Optimization',
      description: 'Post-migration cost and performance optimization.',
    },
  ],
  methodology: [
    {
      name: 'Assessment',
      duration: '2-4 weeks',
      activities: ['Application inventory', 'Dependency mapping', 'TCO analysis', 'Cloud readiness scoring'],
    },
    {
      name: 'Planning',
      duration: '2-3 weeks',
      activities: ['Architecture design', 'Migration waves', 'Risk mitigation', 'Runbook creation'],
    },
    {
      name: 'Migration',
      duration: '4-12 weeks',
      activities: ['Environment provisioning', 'Data migration', 'Application migration', 'Testing'],
    },
    {
      name: 'Optimization',
      duration: '2-4 weeks',
      activities: ['Performance tuning', 'Cost optimization', 'Security hardening', 'Monitoring setup'],
    },
  ],
  benefits: [
    {
      title: 'Cost Efficiency',
      description: 'Optimize infrastructure spending with cloud economics.',
    },
    {
      title: 'Scalability',
      description: 'Scale resources up or down based on demand.',
    },
    {
      title: 'Modernization',
      description: 'Access modern cloud services and capabilities.',
    },
    {
      title: 'Resilience',
      description: 'Improved disaster recovery and business continuity.',
    },
  ],
  relatedPlatforms: ['austra', 'aureon', 'civium'],
  idealFor: ['IT infrastructure teams', 'Application teams', 'CIOs/CTOs', 'Cloud architects'],
  engagementModels: ['Fixed-price project', 'Time & materials'],
}

// ============================================================================
// MANAGED SERVICES
// ============================================================================

export const managedOperationsService: Service = {
  id: 'managed-operations',
  name: 'Managed Platform Operations',
  shortName: 'Managed Ops',
  tagline: 'Expert Platform Management, 24/7',
  description: 'Comprehensive managed services for Visionblox platforms. Our team handles day-to-day operations, monitoring, and optimization so you can focus on your core business.',
  icon: Monitor,
  color: '#EF4444',
  category: 'managed',
  deliverables: [
    {
      title: '24/7 Monitoring',
      description: 'Continuous platform health monitoring and alerting.',
    },
    {
      title: 'Incident Management',
      description: 'Rapid response and resolution for platform issues.',
    },
    {
      title: 'Performance Optimization',
      description: 'Ongoing tuning and optimization.',
    },
    {
      title: 'Regular Updates',
      description: 'Managed patching and feature updates.',
    },
    {
      title: 'Monthly Reporting',
      description: 'Comprehensive health and performance reports.',
    },
  ],
  methodology: [
    {
      name: 'Onboarding',
      duration: '2-4 weeks',
      activities: ['System documentation', 'Runbook creation', 'Monitoring setup', 'Team training'],
    },
    {
      name: 'Steady State',
      duration: 'Ongoing',
      activities: ['24/7 monitoring', 'Incident response', 'Change management', 'Performance reviews'],
    },
    {
      name: 'Continuous Improvement',
      duration: 'Quarterly',
      activities: ['Health assessments', 'Optimization recommendations', 'Roadmap planning', 'Technology updates'],
    },
  ],
  benefits: [
    {
      title: 'Reduced Burden',
      description: 'Free your team from day-to-day operations.',
    },
    {
      title: 'Expert Support',
      description: 'Access to certified platform specialists.',
    },
    {
      title: 'Predictable Costs',
      description: 'Fixed monthly fees for operations.',
    },
    {
      title: 'Improved Uptime',
      description: 'Proactive monitoring prevents issues.',
    },
  ],
  relatedPlatforms: ['austra', 'aureon', 'civium'],
  idealFor: ['IT operations leaders', 'Lean IT teams', 'Organizations lacking platform expertise'],
  engagementModels: ['Monthly subscription', 'Annual contract'],
}

export const supportService: Service = {
  id: 'support-services',
  name: 'Technical Support Services',
  shortName: 'Support',
  tagline: 'Expert Help When You Need It',
  description: 'Tiered technical support with guaranteed response times. From basic troubleshooting to complex problem resolution, our support team keeps your platforms running smoothly.',
  icon: HeadphonesIcon,
  color: '#F59E0B',
  category: 'managed',
  deliverables: [
    {
      title: 'Ticket Support',
      description: 'Issue tracking and resolution through our portal.',
    },
    {
      title: 'Phone Support',
      description: 'Direct access to support engineers for urgent issues.',
    },
    {
      title: 'Knowledge Base',
      description: 'Self-service documentation and troubleshooting guides.',
    },
    {
      title: 'Escalation Path',
      description: 'Clear escalation to senior engineers and product teams.',
    },
  ],
  methodology: [
    {
      name: 'Tier 1',
      duration: 'Initial response',
      activities: ['Issue triage', 'Known issue resolution', 'Documentation referral', 'Escalation if needed'],
    },
    {
      name: 'Tier 2',
      duration: 'Escalated issues',
      activities: ['Deep troubleshooting', 'Configuration analysis', 'Log analysis', 'Workaround development'],
    },
    {
      name: 'Tier 3',
      duration: 'Complex issues',
      activities: ['Product engineering', 'Custom development', 'Root cause analysis', 'Permanent fixes'],
    },
  ],
  benefits: [
    {
      title: 'Fast Resolution',
      description: 'SLA-backed response and resolution times.',
    },
    {
      title: 'Expert Access',
      description: 'Direct line to platform specialists.',
    },
    {
      title: 'Proactive Guidance',
      description: 'Best practice recommendations.',
    },
    {
      title: 'Reduced Downtime',
      description: 'Quick issue resolution minimizes impact.',
    },
  ],
  relatedPlatforms: ['austra', 'aureon', 'civium'],
  idealFor: ['IT support teams', 'System administrators', 'Business users', 'All platform customers'],
  engagementModels: ['Included with platform', 'Premium support tier', 'Extended support hours'],
}

// ============================================================================
// DEVELOPMENT SERVICES
// ============================================================================

export const customDevelopmentService: Service = {
  id: 'custom-development',
  name: 'Custom Application Development',
  shortName: 'Custom Dev',
  tagline: 'Tailored Solutions for Unique Needs',
  description: 'When off-the-shelf doesn\'t fit, we build custom applications and extensions that integrate seamlessly with Visionblox platforms. Modern architectures, agile delivery, enterprise quality.',
  icon: Code,
  color: '#EC4899',
  category: 'development',
  deliverables: [
    {
      title: 'Custom Applications',
      description: 'Purpose-built applications for your unique requirements.',
    },
    {
      title: 'Platform Extensions',
      description: 'Custom modules that extend platform capabilities.',
    },
    {
      title: 'API Development',
      description: 'Custom APIs for system integration.',
    },
    {
      title: 'Source Code',
      description: 'Fully documented, maintainable source code.',
    },
  ],
  methodology: [
    {
      name: 'Discovery',
      duration: '1-2 weeks',
      activities: ['Requirements gathering', 'Technical design', 'Architecture planning', 'Sprint planning'],
    },
    {
      name: 'Development Sprints',
      duration: '2-week cycles',
      activities: ['Feature development', 'Code review', 'Testing', 'Demo to stakeholders'],
    },
    {
      name: 'Quality Assurance',
      duration: 'Throughout',
      activities: ['Unit testing', 'Integration testing', 'Security testing', 'Performance testing'],
    },
    {
      name: 'Delivery',
      duration: '1-2 weeks',
      activities: ['Production deployment', 'Documentation', 'Training', 'Support transition'],
    },
  ],
  benefits: [
    {
      title: 'Perfect Fit',
      description: 'Solutions designed for your exact needs.',
    },
    {
      title: 'Platform Integration',
      description: 'Seamless connection with Visionblox platforms.',
    },
    {
      title: 'Modern Architecture',
      description: 'Built with current best practices.',
    },
    {
      title: 'Ownership',
      description: 'You own the code and IP.',
    },
  ],
  relatedPlatforms: ['austra', 'aureon', 'civium'],
  idealFor: ['Product owners', 'IT leaders', 'Innovation teams', 'Operations leaders with unique needs'],
  engagementModels: ['Fixed-price project', 'Time & materials', 'Staff augmentation'],
}

export const aiMlService: Service = {
  id: 'ai-ml-services',
  name: 'AI & Machine Learning Services',
  shortName: 'AI/ML',
  tagline: 'Intelligent Insights from Your Data',
  description: 'Harness the power of artificial intelligence and machine learning to unlock insights, automate decisions, and predict outcomes. We build and deploy production-ready AI solutions.',
  icon: Brain,
  color: '#14B8A6',
  category: 'development',
  deliverables: [
    {
      title: 'AI Strategy',
      description: 'Use case identification and prioritization.',
    },
    {
      title: 'ML Models',
      description: 'Trained and validated machine learning models.',
    },
    {
      title: 'Production Pipeline',
      description: 'MLOps infrastructure for model deployment.',
    },
    {
      title: 'Integration',
      description: 'AI capabilities integrated into business processes.',
    },
  ],
  methodology: [
    {
      name: 'Use Case Definition',
      duration: '1-2 weeks',
      activities: ['Business problem framing', 'Data assessment', 'Feasibility analysis', 'Success criteria'],
    },
    {
      name: 'Data Preparation',
      duration: '2-4 weeks',
      activities: ['Data collection', 'Data cleaning', 'Feature engineering', 'Data pipeline setup'],
    },
    {
      name: 'Model Development',
      duration: '4-8 weeks',
      activities: ['Algorithm selection', 'Model training', 'Hyperparameter tuning', 'Model validation'],
    },
    {
      name: 'Deployment',
      duration: '2-4 weeks',
      activities: ['Production deployment', 'Monitoring setup', 'Model retraining pipeline', 'Performance tracking'],
    },
  ],
  benefits: [
    {
      title: 'Predictive Insights',
      description: 'Anticipate outcomes before they happen.',
    },
    {
      title: 'Automated Decisions',
      description: 'Intelligent automation at scale.',
    },
    {
      title: 'Continuous Learning',
      description: 'Models that improve over time.',
    },
    {
      title: 'Competitive Advantage',
      description: 'Data-driven decision making.',
    },
  ],
  relatedPlatforms: ['austra', 'aureon', 'civium'],
  idealFor: ['Data science teams', 'Business analysts', 'Operations leaders', 'Product teams'],
  engagementModels: ['Fixed-price project', 'Time & materials', 'Retainer'],
}

export const securityComplianceService: Service = {
  id: 'security-compliance',
  name: 'Security & Compliance Services',
  shortName: 'Security',
  tagline: 'Protect Your Data, Meet Your Requirements',
  description: 'Comprehensive security assessments, compliance preparation, and security engineering services. We help you meet regulatory requirements and protect your organization from threats.',
  icon: Shield,
  color: '#DC2626',
  category: 'consulting',
  deliverables: [
    {
      title: 'Security Assessment',
      description: 'Comprehensive vulnerability and risk assessment.',
    },
    {
      title: 'Compliance Roadmap',
      description: 'Gap analysis and remediation planning.',
    },
    {
      title: 'Security Architecture',
      description: 'Secure architecture design and implementation.',
    },
    {
      title: 'Audit Preparation',
      description: 'Documentation and evidence collection for audits.',
    },
  ],
  methodology: [
    {
      name: 'Assessment',
      duration: '2-4 weeks',
      activities: ['Vulnerability scanning', 'Penetration testing', 'Policy review', 'Control assessment'],
    },
    {
      name: 'Gap Analysis',
      duration: '1-2 weeks',
      activities: ['Framework mapping', 'Control gaps', 'Risk prioritization', 'Remediation planning'],
    },
    {
      name: 'Remediation',
      duration: '4-12 weeks',
      activities: ['Control implementation', 'Policy development', 'Technical hardening', 'Training'],
    },
    {
      name: 'Validation',
      duration: '2-3 weeks',
      activities: ['Control testing', 'Documentation review', 'Audit preparation', 'Certification support'],
    },
  ],
  benefits: [
    {
      title: 'Risk Reduction',
      description: 'Identify and mitigate security risks.',
    },
    {
      title: 'Compliance Achievement',
      description: 'Meet regulatory and customer requirements.',
    },
    {
      title: 'Customer Trust',
      description: 'Demonstrate security commitment.',
    },
    {
      title: 'Audit Readiness',
      description: 'Be prepared for any examination.',
    },
  ],
  relatedPlatforms: ['austra', 'aureon', 'civium'],
  idealFor: ['CISOs', 'Compliance officers', 'IT security teams', 'Risk management'],
  engagementModels: ['Fixed-price project', 'Time & materials', 'Annual retainer'],
}

export const staffAugmentationService: Service = {
  id: 'staff-augmentation',
  name: 'Staff Augmentation',
  shortName: 'Staff Aug',
  tagline: 'Extend Your Team with Experts',
  description: 'Supplement your team with experienced consultants and developers. Whether you need short-term project support or long-term capacity, we provide skilled professionals who integrate seamlessly with your organization.',
  icon: Users,
  color: '#7C3AED',
  category: 'managed',
  deliverables: [
    {
      title: 'Qualified Resources',
      description: 'Pre-vetted consultants matched to your requirements.',
    },
    {
      title: 'Flexible Engagement',
      description: 'Scale up or down based on needs.',
    },
    {
      title: 'Knowledge Transfer',
      description: 'Skills and knowledge shared with your team.',
    },
    {
      title: 'Project Continuity',
      description: 'Consistent coverage for critical initiatives.',
    },
  ],
  methodology: [
    {
      name: 'Requirements',
      duration: '1 week',
      activities: ['Role definition', 'Skills assessment', 'Team fit analysis', 'Candidate matching'],
    },
    {
      name: 'Selection',
      duration: '1-2 weeks',
      activities: ['Candidate presentation', 'Interviews', 'Reference checks', 'Final selection'],
    },
    {
      name: 'Onboarding',
      duration: '1-2 weeks',
      activities: ['System access', 'Team introduction', 'Project briefing', 'Process orientation'],
    },
    {
      name: 'Engagement',
      duration: 'Ongoing',
      activities: ['Daily standups', 'Weekly check-ins', 'Performance reviews', 'Scope adjustments'],
    },
  ],
  benefits: [
    {
      title: 'Speed to Productivity',
      description: 'Experienced resources hit the ground running.',
    },
    {
      title: 'Flexibility',
      description: 'Adjust team size without hiring overhead.',
    },
    {
      title: 'Expertise Access',
      description: 'Skills you need, when you need them.',
    },
    {
      title: 'Risk Mitigation',
      description: 'Reduce dependency on individual employees.',
    },
  ],
  relatedPlatforms: ['austra', 'aureon', 'civium'],
  idealFor: ['IT managers', 'Project managers', 'HR leaders', 'Procurement teams'],
  engagementModels: ['Hourly', 'Monthly retainer', 'Project-based'],
}

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const SERVICES = {
  'digital-strategy': digitalStrategyService,
  'process-optimization': processOptimizationService,
  'platform-implementation': platformImplementationService,
  'system-integration': systemIntegrationService,
  'cloud-migration': cloudMigrationService,
  'managed-operations': managedOperationsService,
  'support-services': supportService,
  'custom-development': customDevelopmentService,
  'ai-ml-services': aiMlService,
  'security-compliance': securityComplianceService,
  'staff-augmentation': staffAugmentationService,
} as const

export type ServiceKey = keyof typeof SERVICES

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'consulting',
    name: 'Consulting',
    description: 'Strategic advisory and planning services',
    services: ['digital-strategy', 'process-optimization', 'security-compliance'],
  },
  {
    id: 'implementation',
    name: 'Implementation',
    description: 'Deployment and integration services',
    services: ['platform-implementation', 'system-integration', 'cloud-migration'],
  },
  {
    id: 'managed',
    name: 'Managed Services',
    description: 'Ongoing operations and support',
    services: ['managed-operations', 'support-services', 'staff-augmentation'],
  },
  {
    id: 'development',
    name: 'Development',
    description: 'Custom software and AI solutions',
    services: ['custom-development', 'ai-ml-services'],
  },
]

// Featured services for homepage
export const FEATURED_SERVICES: ServiceKey[] = [
  'platform-implementation',
  'digital-strategy',
  'managed-operations',
  'ai-ml-services',
]

export const ALL_SERVICES = Object.values(SERVICES)
