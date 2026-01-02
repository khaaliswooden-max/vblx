import { 
  TrendingUp, 
  Shield, 
  BarChart3, 
  Users, 
  FolderKanban, 
  ListTodo, 
  Ticket, 
  GraduationCap, 
  UserCheck, 
  FileText,
  type LucideIcon
} from 'lucide-react'

export interface ProductFeature {
  title: string
  description: string
}

export interface Product {
  id: string
  name: string
  tagline: string
  subtitle: string
  description: string
  color: string
  icon: LucideIcon
  features: ProductFeature[]
  benefits: string[]
  useCases: string[]
  href: string
}

export const PRODUCTS_DATA: Record<string, Product> = {
  'pro-sales': {
    id: 'pro-sales',
    name: 'Pro-Sales',
    tagline: 'A Complete CRM Solution',
    subtitle: 'CRM Excellence',
    description: 'Pro-Sales CRM is designed to revolutionize your sales process management, allowing you to focus on what truly matters – building relationships and closing deals. Whether you\'re a small business or a large enterprise, our CRM adapts to your unique needs, offering powerful tools and insights to drive your success.',
    color: '#10B981',
    icon: TrendingUp,
    features: [
      { title: 'Contact Management', description: 'Centralize all customer information in one place with comprehensive contact profiles.' },
      { title: 'Pipeline Tracking', description: 'Visualize your sales pipeline and track deals through every stage of the sales process.' },
      { title: 'Advanced Analytics', description: 'Gain insights into your sales performance with detailed reports and dashboards.' },
      { title: 'Deal Automation', description: 'Automate repetitive tasks and focus on closing deals faster.' },
      { title: 'Email Integration', description: 'Seamlessly sync emails and track all communications with prospects.' },
      { title: 'Mobile Access', description: 'Access your CRM on the go with our mobile-friendly interface.' },
    ],
    benefits: [
      'Increased Productivity',
      'Improved Customer Relationships',
      'Enhanced Collaboration',
      'Scalability',
    ],
    useCases: [
      'Sales Team Management',
      'Lead Generation & Tracking',
      'Customer Retention Programs',
      'Sales Forecasting',
    ],
    href: '/products/pro-sales',
  },
  'pro-assure': {
    id: 'pro-assure',
    name: 'Pro-Assure',
    tagline: 'The Ultimate Solution for Warranty, Claims, and Annual Maintenance Contract',
    subtitle: 'Quality Assurance',
    description: 'Pro-Assure provides comprehensive warranty and quality assurance management for enterprise operations. Track warranties, manage claims, and ensure compliance with service level agreements across your organization.',
    color: '#3B82F6',
    icon: Shield,
    features: [
      { title: 'Warranty Tracking', description: 'Track all product warranties with automated expiration alerts and renewal reminders.' },
      { title: 'Claims Management', description: 'Streamline the claims process from submission to resolution.' },
      { title: 'AMC Management', description: 'Manage Annual Maintenance Contracts with comprehensive tracking and reporting.' },
      { title: 'Quality Metrics', description: 'Monitor quality indicators and compliance across all operations.' },
      { title: 'SLA Management', description: 'Track and ensure compliance with service level agreements.' },
      { title: 'Audit Trail', description: 'Complete documentation and history for compliance and auditing purposes.' },
    ],
    benefits: [
      'Reduced Warranty Costs',
      'Faster Claims Resolution',
      'Improved Customer Satisfaction',
      'Compliance Assurance',
    ],
    useCases: [
      'Manufacturing Quality Control',
      'Service Contract Management',
      'Product Warranty Administration',
      'Compliance Reporting',
    ],
    href: '/products/pro-assure',
  },
  'pro-biz': {
    id: 'pro-biz',
    name: 'Pro-Biz',
    tagline: 'Drive Strategic Decisions with Powerful Business Intelligence',
    subtitle: 'Business Intelligence',
    description: 'Pro-Biz delivers powerful business intelligence and analytics capabilities to help organizations make data-driven decisions. Transform raw data into actionable insights with real-time dashboards, predictive analytics, and custom reporting.',
    color: '#8B5CF6',
    icon: BarChart3,
    features: [
      { title: 'Real-time Dashboards', description: 'Visualize key metrics and KPIs with interactive, real-time dashboards.' },
      { title: 'Predictive Analytics', description: 'Leverage AI-powered predictions to anticipate trends and opportunities.' },
      { title: 'Custom Reporting', description: 'Create tailored reports that match your specific business requirements.' },
      { title: 'Data Visualization', description: 'Transform complex data into clear, actionable visual insights.' },
      { title: 'Data Integration', description: 'Connect and unify data from multiple sources across your organization.' },
      { title: 'Automated Alerts', description: 'Receive notifications when key metrics exceed defined thresholds.' },
    ],
    benefits: [
      'Data-Driven Decision Making',
      'Improved Operational Efficiency',
      'Competitive Advantage',
      'Revenue Growth',
    ],
    useCases: [
      'Executive Reporting',
      'Sales Performance Analysis',
      'Financial Planning',
      'Market Trend Analysis',
    ],
    href: '/products/pro-biz',
  },
  'pro-people': {
    id: 'pro-people',
    name: 'Pro-People',
    tagline: 'Intelligent HR and Workforce Management Solutions',
    subtitle: 'Workforce Management',
    description: 'Pro-People optimizes your workforce with intelligent HR and people management solutions. From employee onboarding to performance management, streamline all HR processes in one comprehensive platform.',
    color: '#EC4899',
    icon: Users,
    features: [
      { title: 'Employee Records', description: 'Centralized employee database with comprehensive profile management.' },
      { title: 'Performance Tracking', description: 'Monitor and evaluate employee performance with customizable metrics.' },
      { title: 'Attendance Management', description: 'Track attendance, leaves, and work hours with automated systems.' },
      { title: 'HR Analytics', description: 'Gain insights into workforce trends and HR metrics.' },
      { title: 'Onboarding Automation', description: 'Streamline new employee onboarding with automated workflows.' },
      { title: 'Training Management', description: 'Plan and track employee training and development programs.' },
    ],
    benefits: [
      'Streamlined HR Operations',
      'Better Employee Engagement',
      'Reduced Administrative Burden',
      'Compliance Management',
    ],
    useCases: [
      'HR Department Operations',
      'Talent Acquisition',
      'Employee Development',
      'Workforce Planning',
    ],
    href: '/products/pro-people',
  },
  'pro-project': {
    id: 'pro-project',
    name: 'Pro-Project',
    tagline: 'Comprehensive Project Management Tools for Success',
    subtitle: 'Project Management',
    description: 'Pro-Project delivers comprehensive project management tools to help you deliver projects on time and budget. Plan, execute, and monitor projects with powerful scheduling, resource allocation, and collaboration features.',
    color: '#F59E0B',
    icon: FolderKanban,
    features: [
      { title: 'Task Scheduling', description: 'Create and manage project tasks with dependencies and milestones.' },
      { title: 'Resource Allocation', description: 'Optimize resource distribution across projects and teams.' },
      { title: 'Milestone Tracking', description: 'Monitor project progress against key milestones and deadlines.' },
      { title: 'Collaboration Tools', description: 'Enable team collaboration with shared workspaces and communication.' },
      { title: 'Gantt Charts', description: 'Visualize project timelines with interactive Gantt chart views.' },
      { title: 'Budget Management', description: 'Track project costs and manage budgets effectively.' },
    ],
    benefits: [
      'On-time Project Delivery',
      'Better Resource Utilization',
      'Improved Team Collaboration',
      'Cost Control',
    ],
    useCases: [
      'IT Project Management',
      'Construction Projects',
      'Product Development',
      'Marketing Campaigns',
    ],
    href: '/products/pro-project',
  },
  'pro-task': {
    id: 'pro-task',
    name: 'Pro-Task',
    tagline: 'Streamline Workflows with Intelligent Task Management',
    subtitle: 'Task Automation',
    description: 'Pro-Task streamlines workflows with intelligent task management and automation. Create, assign, and track tasks efficiently while automating repetitive processes to boost productivity.',
    color: '#06B6D4',
    icon: ListTodo,
    features: [
      { title: 'Workflow Automation', description: 'Automate routine tasks and create efficient workflow processes.' },
      { title: 'Priority Management', description: 'Organize tasks by priority to focus on what matters most.' },
      { title: 'Team Assignments', description: 'Assign tasks to team members with clear responsibilities.' },
      { title: 'Progress Tracking', description: 'Monitor task completion and track team productivity.' },
      { title: 'Deadline Reminders', description: 'Automated reminders ensure no task falls through the cracks.' },
      { title: 'Task Dependencies', description: 'Define task relationships and dependencies for smooth execution.' },
    ],
    benefits: [
      'Increased Productivity',
      'Better Task Visibility',
      'Reduced Manual Work',
      'Improved Accountability',
    ],
    useCases: [
      'Daily Operations',
      'Team Task Management',
      'Process Automation',
      'Deadline Management',
    ],
    href: '/products/pro-task',
  },
  'pro-ticket': {
    id: 'pro-ticket',
    name: 'Pro-Ticket',
    tagline: 'Robust Ticketing and Support Management System',
    subtitle: 'Service Management',
    description: 'Pro-Ticket delivers exceptional customer service with robust ticketing and support management. Handle customer inquiries, track issues, and resolve problems efficiently with our comprehensive helpdesk solution.',
    color: '#EF4444',
    icon: Ticket,
    features: [
      { title: 'Ticket Routing', description: 'Automatically route tickets to the right agents based on rules.' },
      { title: 'SLA Monitoring', description: 'Track and ensure compliance with service level agreements.' },
      { title: 'Customer Portal', description: 'Self-service portal for customers to submit and track tickets.' },
      { title: 'Resolution Analytics', description: 'Analyze resolution times and support team performance.' },
      { title: 'Knowledge Base', description: 'Build a searchable knowledge base to reduce ticket volume.' },
      { title: 'Multi-channel Support', description: 'Handle tickets from email, phone, chat, and social media.' },
    ],
    benefits: [
      'Faster Issue Resolution',
      'Improved Customer Satisfaction',
      'Better Agent Productivity',
      'Service Quality Insights',
    ],
    useCases: [
      'Customer Support',
      'IT Helpdesk',
      'Internal Service Desk',
      'Field Service Management',
    ],
    href: '/products/pro-ticket',
  },
  'pro-pupil': {
    id: 'pro-pupil',
    name: 'Pro-Pupil',
    tagline: 'Comprehensive Student Management for Educational Institutions',
    subtitle: 'Education Management',
    description: 'Pro-Pupil transforms educational administration with comprehensive student management. Manage student records, track academic progress, and streamline communication between teachers, students, and parents.',
    color: '#14B8A6',
    icon: GraduationCap,
    features: [
      { title: 'Student Records', description: 'Centralized database for all student information and documents.' },
      { title: 'Grade Tracking', description: 'Record and track student grades across all subjects and terms.' },
      { title: 'Attendance System', description: 'Automated attendance tracking with absence notifications.' },
      { title: 'Parent Portal', description: 'Enable parents to view grades, attendance, and communicate with teachers.' },
      { title: 'Course Management', description: 'Manage courses, schedules, and curriculum planning.' },
      { title: 'Report Cards', description: 'Generate comprehensive report cards and progress reports.' },
    ],
    benefits: [
      'Streamlined Administration',
      'Better Parent Engagement',
      'Improved Academic Tracking',
      'Reduced Paperwork',
    ],
    useCases: [
      'K-12 Schools',
      'Higher Education',
      'Training Institutes',
      'Educational Centers',
    ],
    href: '/products/pro-pupil',
  },
  'pro-visit': {
    id: 'pro-visit',
    name: 'Pro-Visit',
    tagline: 'Secure and Streamlined Visitor Management',
    subtitle: 'Visitor Management',
    description: 'Pro-Visit provides secure and streamlined visitor management for modern facilities. Track visitors, manage access, and ensure security compliance with our comprehensive visitor management system.',
    color: '#6366F1',
    icon: UserCheck,
    features: [
      { title: 'Check-in/Check-out', description: 'Fast and efficient visitor registration and departure tracking.' },
      { title: 'Badge Printing', description: 'Automatic visitor badge printing with photo and details.' },
      { title: 'Host Notifications', description: 'Instant alerts to hosts when their visitors arrive.' },
      { title: 'Security Compliance', description: 'Ensure visitor compliance with security policies and regulations.' },
      { title: 'Pre-registration', description: 'Allow visitors to pre-register for faster check-in.' },
      { title: 'Visitor Analytics', description: 'Track visitor patterns and generate facility reports.' },
    ],
    benefits: [
      'Enhanced Security',
      'Professional Reception',
      'Faster Check-in Process',
      'Compliance Management',
    ],
    useCases: [
      'Corporate Offices',
      'Manufacturing Facilities',
      'Educational Institutions',
      'Healthcare Facilities',
    ],
    href: '/products/pro-visit',
  },
  'docsnip': {
    id: 'docsnip',
    name: 'DocSnip',
    tagline: 'Effortless Data Extraction and Document Management',
    subtitle: 'Document Intelligence',
    description: 'DocSnip is your go-to solution for managing snippets of information with ease and efficiency. Designed for professionals, developers, and content creators alike, DocSnip empowers users to capture, organize, and retrieve valuable text, code, and document snippets in a streamlined and intuitive interface.',
    color: '#84CC16',
    icon: FileText,
    features: [
      { title: 'Smart Extraction', description: 'Intelligent data extraction from documents using AI technology.' },
      { title: 'Snippet Organization', description: 'Organize and categorize snippets for easy retrieval.' },
      { title: 'Seamless Integration', description: 'Integrate with your existing tools and workflows.' },
      { title: 'Rapid Deployment', description: 'Deploy in hours, not weeks, with our streamlined setup.' },
      { title: 'Search & Retrieve', description: 'Powerful search capabilities to find any snippet instantly.' },
      { title: 'Team Collaboration', description: 'Share and collaborate on snippets with your team.' },
    ],
    benefits: [
      'Effortless Data Extraction',
      'Accuracy',
      'Seamless Integration',
      'Deploy in Hours',
    ],
    useCases: [
      'Content Creation',
      'Software Development',
      'Research & Documentation',
      'Knowledge Management',
    ],
    href: '/products/docsnip',
  },
}

export type ProductKey = keyof typeof PRODUCTS_DATA

export const PRODUCT_KEYS = Object.keys(PRODUCTS_DATA) as ProductKey[]

