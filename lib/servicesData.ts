import {
  Code,
  Cloud,
  ShoppingCart,
  Shield,
  Terminal,
  FileCode,
  Database,
  Rocket,
  Layers,
  Users,
  Brain,
  Lock,
  GraduationCap,
  AlertTriangle,
  Scale,
  Building2,
  RefreshCw,
  Bot,
  FileCheck,
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
  category: 'development' | 'sap-ai' | 'risk-compliance'
  deliverables: ServiceDeliverable[]
  methodology: ServicePhase[]
  benefits: ServiceBenefit[]
  technologies?: string[]
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
// DEVELOPMENT SERVICES
// ============================================================================

export const webDevelopmentService: Service = {
  id: 'web-development',
  name: 'Web Development',
  shortName: 'Web Dev',
  tagline: 'Build Modern, Scalable Web Applications',
  description: 'Our PHP, Python, and .NET services offer comprehensive solutions for web and mobile development. Our PHP experts ensure seamless API integration and robust infrastructures. Python services cover web development, API design, consultation, testing, and DevOps. Our .NET team excels in custom applications, legacy system modernization, and enterprise integration.',
  icon: Code,
  color: '#3B82F6',
  category: 'development',
  deliverables: [
    {
      title: 'Custom Web Applications',
      description: 'Tailored web solutions built with PHP, Python, or .NET frameworks.',
    },
    {
      title: 'API Development & Integration',
      description: 'RESTful and GraphQL API design with seamless third-party integrations.',
    },
    {
      title: 'Legacy Modernization',
      description: 'Transform outdated systems into modern, maintainable applications.',
    },
    {
      title: 'DevOps Implementation',
      description: 'CI/CD pipelines, automated testing, and deployment workflows.',
    },
  ],
  methodology: [
    {
      name: 'Discovery',
      duration: '1-2 weeks',
      activities: ['Requirements gathering', 'Technical assessment', 'Architecture planning', 'Technology selection'],
    },
    {
      name: 'Development',
      duration: '4-12 weeks',
      activities: ['Agile sprints', 'Code reviews', 'Unit testing', 'Continuous integration'],
    },
    {
      name: 'Testing & QA',
      duration: '2-3 weeks',
      activities: ['Functional testing', 'Performance testing', 'Security audit', 'UAT'],
    },
    {
      name: 'Deployment',
      duration: '1-2 weeks',
      activities: ['Production deployment', 'Documentation', 'Training', 'Support transition'],
    },
  ],
  benefits: [
    {
      title: 'Scalable Solutions',
      description: 'Applications designed to grow with your business needs.',
    },
    {
      title: 'Modern Architecture',
      description: 'Built with current best practices and technologies.',
    },
    {
      title: 'Robust Infrastructure',
      description: 'Reliable, secure, and high-performance systems.',
    },
    {
      title: 'Expert Support',
      description: 'Ongoing maintenance and technical support.',
    },
  ],
  technologies: ['PHP', 'Python', '.NET', 'Laravel', 'Django', 'ASP.NET Core'],
  idealFor: ['Startups', 'Enterprises', 'Digital agencies', 'Tech companies'],
  engagementModels: ['Fixed-price project', 'Time & materials', 'Dedicated team'],
}

export const cloudTechnologyService: Service = {
  id: 'cloud-technology',
  name: 'Cloud Technology',
  shortName: 'Cloud',
  tagline: 'Power Your Business in the Cloud',
  description: 'AWS, GCP, and Azure are leading cloud platforms. AWS offers scalable, reliable, and secure cloud services with a global infrastructure. GCP excels in data analytics, AI, and machine learning, providing robust, low-latency performance. Azure provides comprehensive cloud services, including AI and hybrid cloud capabilities, ensuring high availability and security for diverse business needs.',
  icon: Cloud,
  color: '#06B6D4',
  category: 'development',
  deliverables: [
    {
      title: 'Cloud Architecture Design',
      description: 'Optimized cloud infrastructure tailored to your requirements.',
    },
    {
      title: 'Migration Services',
      description: 'Seamless migration of applications and data to the cloud.',
    },
    {
      title: 'Cost Optimization',
      description: 'Strategies to minimize cloud spending while maximizing performance.',
    },
    {
      title: 'Managed Cloud Services',
      description: '24/7 monitoring, maintenance, and support.',
    },
  ],
  methodology: [
    {
      name: 'Assessment',
      duration: '2-3 weeks',
      activities: ['Infrastructure audit', 'Workload analysis', 'Cost modeling', 'Security review'],
    },
    {
      name: 'Design',
      duration: '2-4 weeks',
      activities: ['Architecture design', 'Migration planning', 'Security framework', 'Disaster recovery'],
    },
    {
      name: 'Implementation',
      duration: '4-12 weeks',
      activities: ['Infrastructure provisioning', 'Data migration', 'Application deployment', 'Testing'],
    },
    {
      name: 'Optimization',
      duration: 'Ongoing',
      activities: ['Performance tuning', 'Cost management', 'Security hardening', 'Continuous monitoring'],
    },
  ],
  benefits: [
    {
      title: 'Scalability',
      description: 'Instantly scale resources based on demand.',
    },
    {
      title: 'Global Reach',
      description: 'Deploy applications closer to your users worldwide.',
    },
    {
      title: 'High Availability',
      description: 'Built-in redundancy and disaster recovery.',
    },
    {
      title: 'Cost Efficiency',
      description: 'Pay only for what you use with optimized spending.',
    },
  ],
  technologies: ['AWS', 'Google Cloud Platform', 'Microsoft Azure', 'Kubernetes', 'Terraform'],
  idealFor: ['Enterprises', 'Startups', 'SaaS companies', 'E-commerce businesses'],
  engagementModels: ['Fixed-price project', 'Managed services', 'Consulting'],
}

export const ecommerceService: Service = {
  id: 'ecommerce',
  name: 'ECommerce',
  shortName: 'E-Commerce',
  tagline: 'Launch and Scale Your Online Store',
  description: 'Magento, Shopify, and WooCommerce are leading e-commerce platforms. Magento offers robust, scalable, and customizable online stores. Shopify provides a user-friendly interface and comprehensive tools for easy store management and scaling. WooCommerce integrates with WordPress, democratizing e-commerce with its user-friendly interface and extensive customization options.',
  icon: ShoppingCart,
  color: '#10B981',
  category: 'development',
  deliverables: [
    {
      title: 'Custom E-Commerce Store',
      description: 'Fully branded online store built on your preferred platform.',
    },
    {
      title: 'Payment Integration',
      description: 'Secure payment gateways and checkout optimization.',
    },
    {
      title: 'Inventory Management',
      description: 'Real-time inventory tracking and fulfillment integration.',
    },
    {
      title: 'Marketing Tools',
      description: 'SEO, analytics, and marketing automation integration.',
    },
  ],
  methodology: [
    {
      name: 'Planning',
      duration: '1-2 weeks',
      activities: ['Requirements analysis', 'Platform selection', 'UX design', 'Feature planning'],
    },
    {
      name: 'Design & Development',
      duration: '4-8 weeks',
      activities: ['UI/UX design', 'Theme customization', 'Feature development', 'Integration setup'],
    },
    {
      name: 'Testing',
      duration: '1-2 weeks',
      activities: ['Functional testing', 'Payment testing', 'Performance optimization', 'Mobile testing'],
    },
    {
      name: 'Launch',
      duration: '1 week',
      activities: ['Production deployment', 'Data migration', 'Training', 'Go-live support'],
    },
  ],
  benefits: [
    {
      title: 'Scalable Platform',
      description: 'Grow from startup to enterprise on the same platform.',
    },
    {
      title: 'User-Friendly',
      description: 'Easy-to-manage stores for non-technical users.',
    },
    {
      title: 'Customizable',
      description: 'Extensive customization options to match your brand.',
    },
    {
      title: 'Comprehensive Tools',
      description: 'Built-in marketing, analytics, and management tools.',
    },
  ],
  technologies: ['Magento', 'Shopify', 'WooCommerce', 'BigCommerce', 'Stripe', 'PayPal'],
  idealFor: ['Retailers', 'B2B companies', 'Startups', 'Enterprise brands'],
  engagementModels: ['Fixed-price project', 'Monthly retainer', 'Support packages'],
}

export const cybersecurityService: Service = {
  id: 'cybersecurity',
  name: 'Cybersecurity',
  shortName: 'Cybersecurity',
  tagline: 'Protect Your Digital Assets',
  description: 'Comprehensive cybersecurity services to protect your organization from evolving threats. We provide vulnerability assessments, penetration testing, security architecture design, and incident response planning to ensure your systems and data remain secure.',
  icon: Shield,
  color: '#DC2626',
  category: 'development',
  deliverables: [
    {
      title: 'Security Assessment',
      description: 'Comprehensive vulnerability and risk analysis.',
    },
    {
      title: 'Penetration Testing',
      description: 'Simulated attacks to identify security weaknesses.',
    },
    {
      title: 'Security Architecture',
      description: 'Design and implementation of secure infrastructure.',
    },
    {
      title: 'Incident Response Plan',
      description: 'Procedures for handling security breaches.',
    },
  ],
  methodology: [
    {
      name: 'Assessment',
      duration: '2-4 weeks',
      activities: ['Vulnerability scanning', 'Risk assessment', 'Policy review', 'Threat modeling'],
    },
    {
      name: 'Testing',
      duration: '2-3 weeks',
      activities: ['Penetration testing', 'Social engineering tests', 'Application security testing', 'Network analysis'],
    },
    {
      name: 'Remediation',
      duration: '4-8 weeks',
      activities: ['Vulnerability patching', 'Configuration hardening', 'Security controls implementation', 'Training'],
    },
    {
      name: 'Monitoring',
      duration: 'Ongoing',
      activities: ['Continuous monitoring', 'Threat intelligence', 'Incident response', 'Compliance reporting'],
    },
  ],
  benefits: [
    {
      title: 'Risk Reduction',
      description: 'Identify and mitigate security vulnerabilities.',
    },
    {
      title: 'Compliance',
      description: 'Meet regulatory and industry security requirements.',
    },
    {
      title: 'Business Continuity',
      description: 'Minimize impact of security incidents.',
    },
    {
      title: 'Customer Trust',
      description: 'Demonstrate commitment to data protection.',
    },
  ],
  technologies: ['SIEM', 'IDS/IPS', 'WAF', 'Encryption', 'Zero Trust Architecture'],
  idealFor: ['Financial services', 'Healthcare', 'Government', 'E-commerce'],
  engagementModels: ['Fixed-price assessment', 'Retainer', 'Managed security services'],
}

export const scriptingLanguageService: Service = {
  id: 'scripting-language',
  name: 'Scripting Language',
  shortName: 'Scripting',
  tagline: 'Build Dynamic, Interactive Applications',
  description: 'React.js empowers developers to build high-quality, interactive UIs with its component-based architecture, virtual DOM, and rich ecosystem. Node.js excels in scalable, high-performance applications with its asynchronous, event-driven architecture and vast NPM ecosystem. We leverage modern JavaScript frameworks to deliver exceptional user experiences.',
  icon: Terminal,
  color: '#F59E0B',
  category: 'development',
  deliverables: [
    {
      title: 'Frontend Applications',
      description: 'Interactive single-page applications with React.js.',
    },
    {
      title: 'Backend Services',
      description: 'Scalable server-side applications with Node.js.',
    },
    {
      title: 'Full-Stack Solutions',
      description: 'End-to-end applications with unified JavaScript stack.',
    },
    {
      title: 'Performance Optimization',
      description: 'Code optimization and bundle size reduction.',
    },
  ],
  methodology: [
    {
      name: 'Architecture',
      duration: '1-2 weeks',
      activities: ['Technology selection', 'Component design', 'State management planning', 'API design'],
    },
    {
      name: 'Development',
      duration: '4-10 weeks',
      activities: ['Component development', 'API implementation', 'Testing', 'Code review'],
    },
    {
      name: 'Optimization',
      duration: '1-2 weeks',
      activities: ['Performance profiling', 'Bundle optimization', 'SEO implementation', 'Accessibility audit'],
    },
    {
      name: 'Deployment',
      duration: '1 week',
      activities: ['CI/CD setup', 'Production deployment', 'Monitoring setup', 'Documentation'],
    },
  ],
  benefits: [
    {
      title: 'Rich User Experience',
      description: 'Fast, responsive, and interactive interfaces.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Handle millions of concurrent users.',
    },
    {
      title: 'Large Ecosystem',
      description: 'Access to vast NPM package library.',
    },
    {
      title: 'Unified Stack',
      description: 'JavaScript across frontend and backend.',
    },
  ],
  technologies: ['React.js', 'Node.js', 'Next.js', 'Vue.js', 'Express.js', 'TypeScript'],
  idealFor: ['Startups', 'SaaS companies', 'Digital agencies', 'Tech companies'],
  engagementModels: ['Fixed-price project', 'Time & materials', 'Staff augmentation'],
}

export const cmsService: Service = {
  id: 'content-management-system',
  name: 'Content Management System',
  shortName: 'CMS',
  tagline: 'Manage Content with Ease',
  description: 'Joomla, WordPress, and Drupal are leading CMS platforms transforming business website development. Joomla offers dynamic, scalable solutions for robust online presence. WordPress democratizes website creation with its intuitive interface and extensive plugins, powering over 40% of websites. Drupal excels in scalability and customization for complex, large-scale sites.',
  icon: FileCode,
  color: '#8B5CF6',
  category: 'development',
  deliverables: [
    {
      title: 'Custom CMS Implementation',
      description: 'Tailored CMS setup based on your requirements.',
    },
    {
      title: 'Theme Development',
      description: 'Custom themes matching your brand identity.',
    },
    {
      title: 'Plugin/Module Development',
      description: 'Custom functionality extensions.',
    },
    {
      title: 'Content Migration',
      description: 'Seamless migration from legacy systems.',
    },
  ],
  methodology: [
    {
      name: 'Analysis',
      duration: '1-2 weeks',
      activities: ['Requirements gathering', 'CMS selection', 'Content audit', 'Architecture planning'],
    },
    {
      name: 'Design',
      duration: '2-3 weeks',
      activities: ['UX/UI design', 'Theme mockups', 'Content structure', 'User roles definition'],
    },
    {
      name: 'Development',
      duration: '3-6 weeks',
      activities: ['Theme development', 'Plugin customization', 'Content migration', 'Integration setup'],
    },
    {
      name: 'Launch',
      duration: '1 week',
      activities: ['Testing', 'SEO setup', 'Training', 'Go-live support'],
    },
  ],
  benefits: [
    {
      title: 'Easy Management',
      description: 'Non-technical users can manage content easily.',
    },
    {
      title: 'Scalability',
      description: 'Grow your site as your business expands.',
    },
    {
      title: 'Extensive Plugins',
      description: 'Thousands of plugins for added functionality.',
    },
    {
      title: 'SEO-Friendly',
      description: 'Built-in SEO capabilities for better visibility.',
    },
  ],
  technologies: ['WordPress', 'Drupal', 'Joomla', 'Contentful', 'Strapi', 'Sanity'],
  idealFor: ['Media companies', 'Nonprofits', 'Educational institutions', 'Corporate websites'],
  engagementModels: ['Fixed-price project', 'Monthly maintenance', 'Support packages'],
}

// ============================================================================
// SAP & AI SERVICES
// ============================================================================

export const sapBtpService: Service = {
  id: 'sap-btp',
  name: 'SAP BTP',
  shortName: 'SAP BTP',
  tagline: 'Extend and Innovate on SAP',
  description: 'SAP Business Technology Platform (BTP) is a unified platform that enables businesses to integrate, extend, and build applications. It combines database, analytics, integration, and intelligent technologies to help you innovate and transform your business processes.',
  icon: Database,
  color: '#0066CC',
  category: 'sap-ai',
  deliverables: [
    {
      title: 'BTP Implementation',
      description: 'Full SAP BTP setup and configuration.',
    },
    {
      title: 'Custom Extensions',
      description: 'Build custom applications on BTP.',
    },
    {
      title: 'Integration Services',
      description: 'Connect SAP and non-SAP systems.',
    },
    {
      title: 'Analytics Setup',
      description: 'Business intelligence and reporting dashboards.',
    },
  ],
  methodology: [
    {
      name: 'Discovery',
      duration: '2-3 weeks',
      activities: ['Business requirements', 'Technical assessment', 'Architecture design', 'Roadmap planning'],
    },
    {
      name: 'Setup',
      duration: '3-4 weeks',
      activities: ['BTP provisioning', 'Security configuration', 'Identity setup', 'Connectivity setup'],
    },
    {
      name: 'Development',
      duration: '6-12 weeks',
      activities: ['Application development', 'Integration build', 'Testing', 'Documentation'],
    },
    {
      name: 'Go-Live',
      duration: '2 weeks',
      activities: ['Production deployment', 'User training', 'Knowledge transfer', 'Support setup'],
    },
  ],
  benefits: [
    {
      title: 'Unified Platform',
      description: 'Single platform for multiple technologies.',
    },
    {
      title: 'Faster Innovation',
      description: 'Rapid development and deployment.',
    },
    {
      title: 'Seamless Integration',
      description: 'Connect all your business systems.',
    },
    {
      title: 'Future-Ready',
      description: 'Built for evolving business needs.',
    },
  ],
  technologies: ['SAP BTP', 'SAP HANA', 'SAP Integration Suite', 'SAP Build', 'Cloud Foundry'],
  idealFor: ['SAP customers', 'Large enterprises', 'Manufacturing', 'Retail'],
  engagementModels: ['Fixed-price project', 'Time & materials', 'Managed services'],
}

export const s4HanaService: Service = {
  id: 's4-hana',
  name: 'S/4 HANA',
  shortName: 'S/4 HANA',
  tagline: 'Transform with Next-Gen ERP',
  description: 'Built upon an ERP system, your organization\'s base is crucial. SAP S/4HANA outperforms traditional ERP by providing advantages like faster innovation cycles, in-memory computing, and real-time analytics. Our services, led by experts, guarantee a seamless transition for S/4HANA implementation and migration.',
  icon: Rocket,
  color: '#E91E63',
  category: 'sap-ai',
  deliverables: [
    {
      title: 'Greenfield Implementation',
      description: 'Fresh S/4HANA deployment with best practices.',
    },
    {
      title: 'System Conversion',
      description: 'Convert existing SAP ECC to S/4HANA.',
    },
    {
      title: 'Landscape Transformation',
      description: 'Consolidate and optimize SAP landscape.',
    },
    {
      title: 'Custom Development',
      description: 'Tailored S/4HANA extensions and apps.',
    },
  ],
  methodology: [
    {
      name: 'Assess',
      duration: '3-4 weeks',
      activities: ['Current state analysis', 'Fit-gap assessment', 'Data assessment', 'TCO analysis'],
    },
    {
      name: 'Design',
      duration: '4-6 weeks',
      activities: ['Solution design', 'Process optimization', 'Integration architecture', 'Change management'],
    },
    {
      name: 'Build',
      duration: '8-16 weeks',
      activities: ['System configuration', 'Data migration', 'Custom development', 'Testing cycles'],
    },
    {
      name: 'Deploy',
      duration: '2-4 weeks',
      activities: ['Cutover', 'Go-live support', 'Hypercare', 'Optimization'],
    },
  ],
  benefits: [
    {
      title: 'Real-Time Analytics',
      description: 'Instant insights from in-memory computing.',
    },
    {
      title: 'Faster Cycles',
      description: 'Accelerated innovation and deployment.',
    },
    {
      title: 'Simplified IT',
      description: 'Reduced complexity and maintenance costs.',
    },
    {
      title: 'Enhanced UX',
      description: 'Modern Fiori user experience.',
    },
  ],
  technologies: ['SAP S/4HANA', 'SAP HANA', 'SAP Fiori', 'ABAP', 'SAP Integration Suite'],
  idealFor: ['Large enterprises', 'Manufacturing', 'Retail', 'Utilities'],
  engagementModels: ['Fixed-price project', 'Time & materials', 'Managed services'],
}

export const sapRiseService: Service = {
  id: 'sap-rise',
  name: 'SAP Rise',
  shortName: 'SAP Rise',
  tagline: 'Business Transformation as a Service',
  description: 'SAP has introduced RISE with SAP, offering Business Transformation as a Service. This subscription-based service encompasses a diverse range of products and services. The RISE with SAP package supports every phase of this business transformation, empowering organizations to integrate, enhance, and expand real-time data from SAP S/4HANA Cloud.',
  icon: Layers,
  color: '#FF5722',
  category: 'sap-ai',
  deliverables: [
    {
      title: 'RISE Assessment',
      description: 'Evaluate your readiness for RISE with SAP.',
    },
    {
      title: 'Migration Planning',
      description: 'Detailed roadmap for RISE adoption.',
    },
    {
      title: 'Implementation',
      description: 'End-to-end RISE deployment and configuration.',
    },
    {
      title: 'Optimization',
      description: 'Ongoing performance and cost optimization.',
    },
  ],
  methodology: [
    {
      name: 'Discover',
      duration: '2-4 weeks',
      activities: ['Business case development', 'Current landscape analysis', 'RISE fit assessment', 'Contract negotiation support'],
    },
    {
      name: 'Plan',
      duration: '3-4 weeks',
      activities: ['Migration strategy', 'Timeline planning', 'Resource allocation', 'Risk mitigation'],
    },
    {
      name: 'Implement',
      duration: '12-24 weeks',
      activities: ['System provisioning', 'Configuration', 'Data migration', 'Integration setup'],
    },
    {
      name: 'Optimize',
      duration: 'Ongoing',
      activities: ['Performance monitoring', 'Cost optimization', 'Feature adoption', 'Continuous improvement'],
    },
  ],
  benefits: [
    {
      title: 'Subscription Model',
      description: 'Predictable costs with flexible scaling.',
    },
    {
      title: 'All-Inclusive',
      description: 'Infrastructure, tools, and services bundled.',
    },
    {
      title: 'Faster Time-to-Value',
      description: 'Pre-configured solutions accelerate deployment.',
    },
    {
      title: 'Continuous Innovation',
      description: 'Automatic updates and new features.',
    },
  ],
  technologies: ['SAP S/4HANA Cloud', 'SAP BTP', 'SAP Business Network', 'SAP Analytics Cloud'],
  idealFor: ['Mid-size to large enterprises', 'Organizations seeking cloud ERP', 'Digital transformation initiatives'],
  engagementModels: ['Fixed-price project', 'Time & materials', 'Managed services'],
}

export const sapFioriService: Service = {
  id: 'sap-fiori',
  name: 'SAP Fiori',
  shortName: 'SAP Fiori',
  tagline: 'Modern User Experience for SAP',
  description: 'Implementing SAP Fiori brings a multitude of benefits. It revolutionizes the user experience by providing a modern, intuitive interface across devices, driving increased adoption and productivity. Fiori streamlines processes, offering role-based access to streamline workflows and enhance efficiency. Real-time insights empower informed decision-making.',
  icon: Users,
  color: '#00BCD4',
  category: 'sap-ai',
  deliverables: [
    {
      title: 'Fiori Implementation',
      description: 'Deploy and configure SAP Fiori applications.',
    },
    {
      title: 'Custom Apps',
      description: 'Build custom Fiori applications for your needs.',
    },
    {
      title: 'UI/UX Design',
      description: 'User experience design following Fiori guidelines.',
    },
    {
      title: 'Mobile Enablement',
      description: 'Mobile-first SAP access for your workforce.',
    },
  ],
  methodology: [
    {
      name: 'Analysis',
      duration: '2-3 weeks',
      activities: ['User research', 'Process analysis', 'App selection', 'Priority matrix'],
    },
    {
      name: 'Design',
      duration: '2-4 weeks',
      activities: ['UX design', 'Prototyping', 'User validation', 'Technical design'],
    },
    {
      name: 'Development',
      duration: '4-8 weeks',
      activities: ['Fiori configuration', 'Custom development', 'Integration', 'Testing'],
    },
    {
      name: 'Rollout',
      duration: '2-3 weeks',
      activities: ['User training', 'Change management', 'Deployment', 'Support setup'],
    },
  ],
  benefits: [
    {
      title: 'Modern Interface',
      description: 'Intuitive, consumer-grade user experience.',
    },
    {
      title: 'Role-Based Access',
      description: 'Right information for the right users.',
    },
    {
      title: 'Mobile Ready',
      description: 'Access SAP from any device, anywhere.',
    },
    {
      title: 'Increased Adoption',
      description: 'Higher user satisfaction and productivity.',
    },
  ],
  technologies: ['SAP Fiori', 'SAPUI5', 'SAP Gateway', 'OData', 'SAP Build'],
  idealFor: ['SAP customers', 'Mobile workforce', 'User experience improvement'],
  engagementModels: ['Fixed-price project', 'Time & materials', 'Support packages'],
}

export const sapSuccessFactorsService: Service = {
  id: 'sap-success-factors',
  name: 'SAP Success Factors',
  shortName: 'SuccessFactors',
  tagline: 'Transform Your HR Experience',
  description: 'SAP SuccessFactors is a cloud-based Human Capital Management (HCM) software suite widely utilized globally. It enables companies to attract top talent, streamline hiring processes, set and track performance goals, deliver training programs, manage employee data centrally, design compensation plans, identify and develop future leaders, and gain insights through workforce analytics.',
  icon: Users,
  color: '#4CAF50',
  category: 'sap-ai',
  deliverables: [
    {
      title: 'HCM Implementation',
      description: 'Full SuccessFactors suite deployment.',
    },
    {
      title: 'Module Configuration',
      description: 'Configure specific HR modules to your needs.',
    },
    {
      title: 'Integration',
      description: 'Connect SuccessFactors with your HR ecosystem.',
    },
    {
      title: 'Workforce Analytics',
      description: 'HR reporting and insights dashboards.',
    },
  ],
  methodology: [
    {
      name: 'Discover',
      duration: '2-3 weeks',
      activities: ['HR process analysis', 'Requirements gathering', 'Module selection', 'Project planning'],
    },
    {
      name: 'Configure',
      duration: '6-10 weeks',
      activities: ['System configuration', 'Workflow setup', 'Form design', 'Integration build'],
    },
    {
      name: 'Test',
      duration: '3-4 weeks',
      activities: ['Unit testing', 'Integration testing', 'UAT', 'Performance testing'],
    },
    {
      name: 'Deploy',
      duration: '2-3 weeks',
      activities: ['Data migration', 'Training', 'Go-live', 'Hypercare support'],
    },
  ],
  benefits: [
    {
      title: 'Unified HR Platform',
      description: 'All HR functions in one cloud platform.',
    },
    {
      title: 'Talent Management',
      description: 'Attract, develop, and retain top talent.',
    },
    {
      title: 'Employee Engagement',
      description: 'Improve employee experience and satisfaction.',
    },
    {
      title: 'HR Analytics',
      description: 'Data-driven HR decisions.',
    },
  ],
  technologies: ['SAP SuccessFactors', 'SAP Integration Suite', 'SAP Analytics Cloud'],
  idealFor: ['HR departments', 'Large enterprises', 'Global organizations', 'Growing companies'],
  engagementModels: ['Fixed-price project', 'Time & materials', 'Managed services'],
}

export const aiMlSolutionsService: Service = {
  id: 'ai-ml-solutions',
  name: 'AI & ML Solutions',
  shortName: 'AI & ML',
  tagline: 'Where Innovation Meets Intelligence',
  description: 'Revolutionize your business processes with our AI and ML solutions! Whether you need to automate repetitive tasks, analyze complex data, or enhance customer experiences, we\'re here to turn your challenges into opportunities. Our solutions include product recommendation, sentiment analysis, image recognition, market analysis, and behavior mining.',
  icon: Brain,
  color: '#9C27B0',
  category: 'sap-ai',
  deliverables: [
    {
      title: 'AI Strategy',
      description: 'Comprehensive AI adoption roadmap.',
    },
    {
      title: 'ML Model Development',
      description: 'Custom machine learning models for your use cases.',
    },
    {
      title: 'Production Deployment',
      description: 'Deploy AI solutions at scale.',
    },
    {
      title: 'MLOps Implementation',
      description: 'End-to-end ML operations framework.',
    },
  ],
  methodology: [
    {
      name: 'Use Case Discovery',
      duration: '2-3 weeks',
      activities: ['Business problem framing', 'Data assessment', 'Feasibility analysis', 'ROI estimation'],
    },
    {
      name: 'Data Preparation',
      duration: '3-6 weeks',
      activities: ['Data collection', 'Data cleaning', 'Feature engineering', 'Pipeline setup'],
    },
    {
      name: 'Model Development',
      duration: '4-8 weeks',
      activities: ['Algorithm selection', 'Model training', 'Hyperparameter tuning', 'Validation'],
    },
    {
      name: 'Deployment',
      duration: '2-4 weeks',
      activities: ['Production deployment', 'Monitoring setup', 'API integration', 'Performance tracking'],
    },
  ],
  benefits: [
    {
      title: 'Intelligent Automation',
      description: 'Automate complex tasks with AI.',
    },
    {
      title: 'Predictive Insights',
      description: 'Anticipate trends and behaviors.',
    },
    {
      title: 'Enhanced Decisions',
      description: 'Data-driven decision making.',
    },
    {
      title: 'Competitive Edge',
      description: 'Stay ahead with cutting-edge AI.',
    },
  ],
  technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'AWS SageMaker', 'Azure ML', 'Google AI'],
  idealFor: ['Data-driven companies', 'E-commerce', 'Finance', 'Healthcare'],
  engagementModels: ['Fixed-price project', 'Time & materials', 'Retainer'],
}

export const cybersecurityComplianceService: Service = {
  id: 'cybersecurity-compliance-framework',
  name: 'Cybersecurity & Compliance Framework Services',
  shortName: 'Compliance Framework',
  tagline: 'Security and Compliance Excellence',
  description: 'Comprehensive cybersecurity and compliance framework services that help organizations establish, maintain, and improve their security posture while meeting regulatory requirements. We provide frameworks aligned with NIST, ISO 27001, SOC 2, and industry-specific regulations.',
  icon: Lock,
  color: '#607D8B',
  category: 'sap-ai',
  deliverables: [
    {
      title: 'Framework Assessment',
      description: 'Evaluate current security and compliance posture.',
    },
    {
      title: 'Framework Implementation',
      description: 'Deploy comprehensive security frameworks.',
    },
    {
      title: 'Policy Development',
      description: 'Create security policies and procedures.',
    },
    {
      title: 'Compliance Certification',
      description: 'Support for certification audits.',
    },
  ],
  methodology: [
    {
      name: 'Assessment',
      duration: '3-4 weeks',
      activities: ['Gap analysis', 'Risk assessment', 'Control evaluation', 'Compliance mapping'],
    },
    {
      name: 'Design',
      duration: '3-4 weeks',
      activities: ['Framework selection', 'Control design', 'Policy creation', 'Implementation roadmap'],
    },
    {
      name: 'Implementation',
      duration: '8-16 weeks',
      activities: ['Control implementation', 'Process deployment', 'Training', 'Documentation'],
    },
    {
      name: 'Certification',
      duration: '4-8 weeks',
      activities: ['Pre-audit preparation', 'Evidence collection', 'Audit support', 'Remediation'],
    },
  ],
  benefits: [
    {
      title: 'Regulatory Compliance',
      description: 'Meet industry and regulatory requirements.',
    },
    {
      title: 'Risk Reduction',
      description: 'Systematic approach to security risks.',
    },
    {
      title: 'Trust Building',
      description: 'Demonstrate security commitment to stakeholders.',
    },
    {
      title: 'Operational Excellence',
      description: 'Streamlined security operations.',
    },
  ],
  technologies: ['NIST Framework', 'ISO 27001', 'SOC 2', 'GDPR', 'HIPAA', 'PCI DSS'],
  idealFor: ['Regulated industries', 'SaaS companies', 'Healthcare', 'Financial services'],
  engagementModels: ['Fixed-price project', 'Annual retainer', 'Managed services'],
}

// ============================================================================
// RISK & COMPLIANCE SERVICES
// ============================================================================

export const infoSecurityTrainingService: Service = {
  id: 'information-security-awareness-training',
  name: 'Information Security Awareness & Training',
  shortName: 'Security Training',
  tagline: 'Empower Your Human Firewall',
  description: 'Comprehensive security awareness programs that transform your employees into your first line of defense. Our training covers phishing prevention, data protection, secure computing practices, and incident reporting to create a security-conscious culture.',
  icon: GraduationCap,
  color: '#3F51B5',
  category: 'risk-compliance',
  deliverables: [
    {
      title: 'Training Program',
      description: 'Customized security awareness curriculum.',
    },
    {
      title: 'Phishing Simulations',
      description: 'Regular phishing tests with metrics.',
    },
    {
      title: 'E-Learning Platform',
      description: 'On-demand security training modules.',
    },
    {
      title: 'Compliance Tracking',
      description: 'Training completion and compliance reports.',
    },
  ],
  methodology: [
    {
      name: 'Assessment',
      duration: '1-2 weeks',
      activities: ['Current awareness baseline', 'Risk identification', 'Content needs analysis', 'Platform selection'],
    },
    {
      name: 'Development',
      duration: '3-4 weeks',
      activities: ['Curriculum design', 'Content creation', 'Platform setup', 'Simulation configuration'],
    },
    {
      name: 'Deployment',
      duration: '2-3 weeks',
      activities: ['Program launch', 'Initial training', 'Phishing baseline', 'Communication plan'],
    },
    {
      name: 'Ongoing',
      duration: 'Continuous',
      activities: ['Regular simulations', 'New content updates', 'Metrics reporting', 'Program refinement'],
    },
  ],
  benefits: [
    {
      title: 'Reduced Risk',
      description: 'Lower likelihood of successful attacks.',
    },
    {
      title: 'Compliance',
      description: 'Meet training requirements for regulations.',
    },
    {
      title: 'Security Culture',
      description: 'Build organization-wide security awareness.',
    },
    {
      title: 'Measurable Results',
      description: 'Track improvement through metrics.',
    },
  ],
  technologies: ['KnowBe4', 'Proofpoint', 'Cofense', 'Custom LMS'],
  idealFor: ['All organizations', 'Regulated industries', 'Remote workforce'],
  engagementModels: ['Annual subscription', 'Per-user pricing', 'Custom programs'],
}

export const cloudSecurityGovernanceService: Service = {
  id: 'cloud-security-risk-governance',
  name: 'Cloud Security Risk Governance Services',
  shortName: 'Cloud Security',
  tagline: 'Secure Your Cloud Journey',
  description: 'Comprehensive cloud security governance services that help organizations establish robust security controls, manage cloud risks, and maintain compliance across multi-cloud environments. We provide visibility, control, and protection for your cloud workloads.',
  icon: Cloud,
  color: '#00ACC1',
  category: 'risk-compliance',
  deliverables: [
    {
      title: 'Cloud Security Assessment',
      description: 'Evaluate security posture across cloud environments.',
    },
    {
      title: 'Governance Framework',
      description: 'Cloud security policies and standards.',
    },
    {
      title: 'Security Architecture',
      description: 'Secure cloud architecture design.',
    },
    {
      title: 'Monitoring & Compliance',
      description: 'Continuous security monitoring setup.',
    },
  ],
  methodology: [
    {
      name: 'Discovery',
      duration: '2-3 weeks',
      activities: ['Cloud inventory', 'Security assessment', 'Compliance gap analysis', 'Risk identification'],
    },
    {
      name: 'Design',
      duration: '3-4 weeks',
      activities: ['Security architecture', 'Policy framework', 'Control selection', 'Tool selection'],
    },
    {
      name: 'Implementation',
      duration: '6-12 weeks',
      activities: ['Security controls deployment', 'Configuration hardening', 'Monitoring setup', 'Policy enforcement'],
    },
    {
      name: 'Operations',
      duration: 'Ongoing',
      activities: ['Continuous monitoring', 'Compliance reporting', 'Incident response', 'Regular reviews'],
    },
  ],
  benefits: [
    {
      title: 'Visibility',
      description: 'Complete view of cloud security posture.',
    },
    {
      title: 'Control',
      description: 'Enforce security policies consistently.',
    },
    {
      title: 'Compliance',
      description: 'Meet regulatory requirements in the cloud.',
    },
    {
      title: 'Risk Reduction',
      description: 'Proactive identification and mitigation.',
    },
  ],
  technologies: ['AWS Security Hub', 'Azure Security Center', 'Google Security Command Center', 'Prisma Cloud'],
  idealFor: ['Cloud-first organizations', 'Multi-cloud environments', 'Regulated industries'],
  engagementModels: ['Fixed-price project', 'Managed services', 'Consulting'],
}

export const riskManagementService: Service = {
  id: 'risk-management-services',
  name: 'Risk Management Services',
  shortName: 'Risk Management',
  tagline: 'Identify, Assess, Mitigate',
  description: 'Comprehensive risk management services that help organizations identify, assess, and mitigate risks across their operations. We provide frameworks, processes, and tools to manage operational, strategic, and technology risks effectively.',
  icon: AlertTriangle,
  color: '#FF9800',
  category: 'risk-compliance',
  deliverables: [
    {
      title: 'Risk Assessment',
      description: 'Comprehensive risk identification and analysis.',
    },
    {
      title: 'Risk Framework',
      description: 'Customized risk management framework.',
    },
    {
      title: 'Mitigation Planning',
      description: 'Risk treatment plans and controls.',
    },
    {
      title: 'Risk Monitoring',
      description: 'Ongoing risk tracking and reporting.',
    },
  ],
  methodology: [
    {
      name: 'Identification',
      duration: '2-3 weeks',
      activities: ['Risk inventory', 'Stakeholder interviews', 'Process analysis', 'Threat assessment'],
    },
    {
      name: 'Assessment',
      duration: '2-3 weeks',
      activities: ['Impact analysis', 'Likelihood evaluation', 'Risk scoring', 'Heat mapping'],
    },
    {
      name: 'Treatment',
      duration: '4-8 weeks',
      activities: ['Control selection', 'Mitigation implementation', 'Residual risk analysis', 'Documentation'],
    },
    {
      name: 'Monitoring',
      duration: 'Ongoing',
      activities: ['Risk tracking', 'KRI monitoring', 'Regular reviews', 'Reporting'],
    },
  ],
  benefits: [
    {
      title: 'Risk Visibility',
      description: 'Clear understanding of organizational risks.',
    },
    {
      title: 'Informed Decisions',
      description: 'Risk-aware decision making.',
    },
    {
      title: 'Resilience',
      description: 'Improved organizational resilience.',
    },
    {
      title: 'Compliance',
      description: 'Meet risk management requirements.',
    },
  ],
  technologies: ['GRC platforms', 'Risk registers', 'Analytics tools'],
  idealFor: ['All organizations', 'Regulated industries', 'Complex operations'],
  engagementModels: ['Fixed-price assessment', 'Retainer', 'Managed services'],
}

export const ermService: Service = {
  id: 'enterprise-risk-management',
  name: 'Enterprise Risk Management (ERM) Services',
  shortName: 'ERM',
  tagline: 'Holistic Risk Governance',
  description: 'Enterprise Risk Management services that provide a holistic approach to identifying, assessing, and managing risks across your entire organization. We help align risk management with strategic objectives and create a risk-aware culture.',
  icon: Building2,
  color: '#795548',
  category: 'risk-compliance',
  deliverables: [
    {
      title: 'ERM Framework',
      description: 'Enterprise-wide risk management framework.',
    },
    {
      title: 'Risk Appetite Statement',
      description: 'Define organizational risk tolerance.',
    },
    {
      title: 'Board Reporting',
      description: 'Executive risk dashboards and reports.',
    },
    {
      title: 'Risk Culture Program',
      description: 'Build risk awareness across the organization.',
    },
  ],
  methodology: [
    {
      name: 'Foundation',
      duration: '3-4 weeks',
      activities: ['ERM maturity assessment', 'Framework design', 'Governance structure', 'Risk appetite definition'],
    },
    {
      name: 'Development',
      duration: '6-8 weeks',
      activities: ['Policy creation', 'Process design', 'Tool selection', 'Training development'],
    },
    {
      name: 'Implementation',
      duration: '8-12 weeks',
      activities: ['Framework rollout', 'Training delivery', 'Tool deployment', 'Initial risk assessments'],
    },
    {
      name: 'Maturation',
      duration: 'Ongoing',
      activities: ['Continuous improvement', 'Program evolution', 'Maturity advancement', 'Benchmarking'],
    },
  ],
  benefits: [
    {
      title: 'Strategic Alignment',
      description: 'Risk management aligned with strategy.',
    },
    {
      title: 'Holistic View',
      description: 'Enterprise-wide risk visibility.',
    },
    {
      title: 'Better Governance',
      description: 'Improved board oversight of risk.',
    },
    {
      title: 'Value Protection',
      description: 'Protect and create organizational value.',
    },
  ],
  technologies: ['COSO ERM', 'ISO 31000', 'GRC platforms'],
  idealFor: ['Large enterprises', 'Public companies', 'Financial services', 'Healthcare'],
  engagementModels: ['Fixed-price project', 'Multi-year engagement', 'Advisory retainer'],
}

export const businessContinuityService: Service = {
  id: 'business-continuity-cyber-resilience',
  name: 'Business Continuity & Cyber Resilience Services',
  shortName: 'BC/DR',
  tagline: 'Prepare, Respond, Recover',
  description: 'Business continuity and cyber resilience services that ensure your organization can withstand and recover from disruptions. We develop comprehensive plans, conduct exercises, and build capabilities to maintain operations during crises.',
  icon: RefreshCw,
  color: '#8BC34A',
  category: 'risk-compliance',
  deliverables: [
    {
      title: 'Business Impact Analysis',
      description: 'Identify critical processes and dependencies.',
    },
    {
      title: 'BC/DR Plans',
      description: 'Comprehensive continuity and recovery plans.',
    },
    {
      title: 'Exercise Program',
      description: 'Regular testing and exercises.',
    },
    {
      title: 'Incident Response',
      description: 'Cyber incident response procedures.',
    },
  ],
  methodology: [
    {
      name: 'Analysis',
      duration: '3-4 weeks',
      activities: ['Business impact analysis', 'Risk assessment', 'Recovery requirements', 'Dependency mapping'],
    },
    {
      name: 'Planning',
      duration: '4-6 weeks',
      activities: ['Strategy development', 'Plan creation', 'Procedure documentation', 'Resource planning'],
    },
    {
      name: 'Implementation',
      duration: '4-8 weeks',
      activities: ['Plan deployment', 'Training', 'Technology setup', 'Communication protocols'],
    },
    {
      name: 'Testing',
      duration: 'Ongoing',
      activities: ['Tabletop exercises', 'Functional tests', 'Full-scale exercises', 'Plan updates'],
    },
  ],
  benefits: [
    {
      title: 'Operational Resilience',
      description: 'Maintain operations during disruptions.',
    },
    {
      title: 'Faster Recovery',
      description: 'Minimize downtime and impact.',
    },
    {
      title: 'Compliance',
      description: 'Meet BC/DR regulatory requirements.',
    },
    {
      title: 'Stakeholder Confidence',
      description: 'Demonstrate preparedness.',
    },
  ],
  technologies: ['BC planning tools', 'DR orchestration', 'Crisis management platforms'],
  idealFor: ['All organizations', 'Critical infrastructure', 'Financial services', 'Healthcare'],
  engagementModels: ['Fixed-price project', 'Annual retainer', 'Exercise-based'],
}

export const aiGovernanceService: Service = {
  id: 'ai-governance-services',
  name: 'AI Governance Services',
  shortName: 'AI Governance',
  tagline: 'Responsible AI Implementation',
  description: 'AI Governance services that help organizations implement AI responsibly and ethically. We develop governance frameworks, policies, and controls to ensure AI systems are transparent, fair, and compliant with emerging regulations.',
  icon: Bot,
  color: '#673AB7',
  category: 'risk-compliance',
  deliverables: [
    {
      title: 'AI Governance Framework',
      description: 'Comprehensive AI governance structure.',
    },
    {
      title: 'AI Ethics Policy',
      description: 'Ethical guidelines for AI development.',
    },
    {
      title: 'Risk Assessment',
      description: 'AI-specific risk evaluation framework.',
    },
    {
      title: 'Compliance Mapping',
      description: 'Alignment with AI regulations.',
    },
  ],
  methodology: [
    {
      name: 'Assessment',
      duration: '2-3 weeks',
      activities: ['AI inventory', 'Risk assessment', 'Regulatory mapping', 'Stakeholder analysis'],
    },
    {
      name: 'Framework Design',
      duration: '3-4 weeks',
      activities: ['Governance structure', 'Policy development', 'Control design', 'Metrics definition'],
    },
    {
      name: 'Implementation',
      duration: '6-10 weeks',
      activities: ['Policy deployment', 'Process integration', 'Training', 'Tool implementation'],
    },
    {
      name: 'Operations',
      duration: 'Ongoing',
      activities: ['Monitoring', 'Auditing', 'Continuous improvement', 'Regulatory updates'],
    },
  ],
  benefits: [
    {
      title: 'Responsible AI',
      description: 'Ethical and transparent AI systems.',
    },
    {
      title: 'Regulatory Readiness',
      description: 'Prepare for emerging AI regulations.',
    },
    {
      title: 'Risk Mitigation',
      description: 'Address AI-specific risks proactively.',
    },
    {
      title: 'Stakeholder Trust',
      description: 'Build confidence in AI initiatives.',
    },
  ],
  technologies: ['AI governance platforms', 'Model monitoring tools', 'Explainability frameworks'],
  idealFor: ['AI-adopting organizations', 'Regulated industries', 'Technology companies'],
  engagementModels: ['Fixed-price project', 'Advisory retainer', 'Managed services'],
}

export const regulatoryComplianceService: Service = {
  id: 'regulatory-compliance-services',
  name: 'Regulatory Compliance Services',
  shortName: 'Compliance',
  tagline: 'Navigate Complex Regulations',
  description: 'Regulatory compliance services that help organizations understand and meet their regulatory obligations. We provide expertise across various regulatory frameworks including GDPR, HIPAA, SOX, PCI DSS, and industry-specific regulations.',
  icon: FileCheck,
  color: '#009688',
  category: 'risk-compliance',
  deliverables: [
    {
      title: 'Compliance Assessment',
      description: 'Gap analysis against regulatory requirements.',
    },
    {
      title: 'Compliance Roadmap',
      description: 'Prioritized path to compliance.',
    },
    {
      title: 'Policy & Procedures',
      description: 'Compliance documentation development.',
    },
    {
      title: 'Audit Support',
      description: 'Preparation and support for regulatory audits.',
    },
  ],
  methodology: [
    {
      name: 'Assessment',
      duration: '3-4 weeks',
      activities: ['Regulatory mapping', 'Gap analysis', 'Risk assessment', 'Prioritization'],
    },
    {
      name: 'Planning',
      duration: '2-3 weeks',
      activities: ['Roadmap development', 'Resource planning', 'Timeline creation', 'Budget estimation'],
    },
    {
      name: 'Implementation',
      duration: '8-16 weeks',
      activities: ['Control implementation', 'Policy development', 'Process changes', 'Training'],
    },
    {
      name: 'Validation',
      duration: '2-4 weeks',
      activities: ['Internal audit', 'Evidence collection', 'Remediation', 'Certification support'],
    },
  ],
  benefits: [
    {
      title: 'Regulatory Compliance',
      description: 'Meet all applicable requirements.',
    },
    {
      title: 'Risk Reduction',
      description: 'Avoid fines and penalties.',
    },
    {
      title: 'Competitive Advantage',
      description: 'Compliance as a differentiator.',
    },
    {
      title: 'Operational Efficiency',
      description: 'Streamlined compliance processes.',
    },
  ],
  technologies: ['GRC platforms', 'Compliance management tools', 'Audit management systems'],
  idealFor: ['Regulated industries', 'Healthcare', 'Financial services', 'Technology companies'],
  engagementModels: ['Fixed-price project', 'Annual retainer', 'Compliance-as-a-Service'],
}

// ============================================================================
// COMBINED EXPORTS
// ============================================================================

export const SERVICES = {
  // Development Services
  'web-development': webDevelopmentService,
  'cloud-technology': cloudTechnologyService,
  'ecommerce': ecommerceService,
  'cybersecurity': cybersecurityService,
  'scripting-language': scriptingLanguageService,
  'content-management-system': cmsService,
  // SAP & AI
  'sap-btp': sapBtpService,
  's4-hana': s4HanaService,
  'sap-rise': sapRiseService,
  'sap-fiori': sapFioriService,
  'sap-success-factors': sapSuccessFactorsService,
  'ai-ml-solutions': aiMlSolutionsService,
  'cybersecurity-compliance-framework': cybersecurityComplianceService,
  // Risk & Compliance
  'information-security-awareness-training': infoSecurityTrainingService,
  'cloud-security-risk-governance': cloudSecurityGovernanceService,
  'risk-management-services': riskManagementService,
  'enterprise-risk-management': ermService,
  'business-continuity-cyber-resilience': businessContinuityService,
  'ai-governance-services': aiGovernanceService,
  'regulatory-compliance-services': regulatoryComplianceService,
} as const

export type ServiceKey = keyof typeof SERVICES

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'development',
    name: 'Development Services',
    description: 'Comprehensive web, cloud, and application development solutions',
    services: [
      'web-development',
      'cloud-technology',
      'ecommerce',
      'cybersecurity',
      'scripting-language',
      'content-management-system',
    ],
  },
  {
    id: 'sap-ai',
    name: 'SAP & AI',
    description: 'SAP products, solutions, and artificial intelligence services',
    services: [
      'sap-btp',
      's4-hana',
      'sap-rise',
      'sap-fiori',
      'sap-success-factors',
      'ai-ml-solutions',
      'cybersecurity-compliance-framework',
    ],
  },
  {
    id: 'risk-compliance',
    name: 'Risk & Compliance',
    description: 'Risk management, security training, and regulatory compliance',
    services: [
      'information-security-awareness-training',
      'cloud-security-risk-governance',
      'risk-management-services',
      'enterprise-risk-management',
      'business-continuity-cyber-resilience',
      'ai-governance-services',
      'regulatory-compliance-services',
    ],
  },
]

// Featured services for homepage
export const FEATURED_SERVICES: ServiceKey[] = [
  's4-hana',
  'ai-ml-solutions',
  'web-development',
  'cloud-technology',
]

export const ALL_SERVICES = Object.values(SERVICES)
