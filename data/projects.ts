export type Project = {
  slug: string
  title: string
  category: string
  year: string
  summary: string
  description: string
  problem: string
  solution: string
  impact: string[]
  tools: string[]
  featured: boolean
  /** controls the mockup illustration style on the card */
  visual: 'erp' | 'dashboard' | 'mobile'
  image?: string
  /** Live deployment URL — takes priority over githubUrl */
  liveUrl?: string
  /** Fallback GitHub link when no live demo is available */
  githubUrl?: string
}

export const projects: Project[] = [
  {
slug: 'logistics-erp-system',
title: 'Logistics ERP & Accounting Information System',
category: 'System Analysis',
year: '2026',
summary:
'Integrated logistics and accounting information system with shipment tracking, invoicing, payment management, and automated financial reporting.',
description:
'Designed a logistics ERP and accounting information system that streamlines shipment tracking, billing, payment processing, and financial reporting through automated workflows and centralized data management.',
problem:
'Disconnected shipment and accounting processes caused duplicate data entry, delayed reporting, and higher risk of financial inaccuracies.',
solution:
'Built an integrated ERP solution that connects shipment operations with accounting processes. The system automatically generates invoices, records payments, posts journal entries, and produces real-time financial reports without requiring manual bookkeeping.',
impact: [
'Eliminated manual journal entry processes through accounting automation',
'Centralized shipment, billing, and financial data into a single platform',
'Improved visibility of operational and financial performance through real-time reporting',
'Reduced accounting errors through automated double-entry bookkeeping',
],
tools: [
'Django',
'Python',
'PostgreSQL',
'JavaScript',
'System Analysis',
'Business Process Modeling',
'Accounting Information System',
],
featured: true,
visual: 'erp',
image: '/projects/logistics-erp-dashboard.png',
liveUrl: 'https://guzelaz23.pythonanywhere.com/dashboard/',
},
  {
    slug: 'logistics-inventory-management-system',
    title: 'Logistics Inventory Management System',
    category: 'System Analysis',
    year: '2025',
    summary:
      'Enterprise-grade inventory system for a logistics company to manage assets and operational stock across multiple branches in real time.',
    description:
      'Designed and developed a full-stack ERP inventory platform using Laravel and Filament. The system handles end-to-end inventory management, from procurement tracking to branch distribution with an executive dashboard, business intelligence metrics, and multi-format reporting.',
    problem:
      'Logistics operations lacked centralized visibility into inventory levels, stock movement, and asset distribution across branches, leading to stockouts and untracked consumption.',
    solution:
      'Built a modular inventory system with automated stock tracking, real-time KPI dashboards, and branch-level distribution logs, eliminating manual spreadsheets and giving operations teams instant visibility.',
    impact: [
      'Automated stock in/out tracking with instant low-stock and out-of-stock alerts',
      'Processed 9,000+ transactions with full audit trail',
      'Reduced reporting effort with one-click PDF, Excel, and CSV export',
    ],
    tools: ['Laravel', 'Filament', 'PostgreSQL', 'PHP', 'Chart.js', 'Tailwind CSS'],
    featured: true,
    visual: 'dashboard',
    image: '/projects/inventory-dashboard.png',
    githubUrl: 'https://github.com/guzelaz23',
  },
  {
slug: 'super-app-product-case-study',
title: 'Super App Product Case Study',
category: 'Product Management',
year: '2026',
summary:
'Designed an MVP super app integrating ride-hailing, food delivery, public transit, and restaurant reservations into a unified mobile experience.',
description:
'Led the analysis and planning of a super app inspired by Indonesia’s digital service ecosystem. Defined product scope, gathered requirements, mapped user journeys, and developed testing strategies for an integrated platform combining transportation, food delivery, transit, and dining services.',
problem:
'Users depend on multiple disconnected applications to access transportation, food delivery, public transit information, and dining reservations, creating a fragmented and inefficient user experience.',
solution:
'Defined and validated an MVP super app that consolidates multiple daily services into a single platform. Established requirements, business processes, user flows, testing scenarios, and feature priorities to support a scalable product roadmap.',
impact: [
'Defined MVP scope across 4 core service modules',
'Produced 20+ functional and non-functional requirements',
'Designed end-to-end user journeys and business process flows',
'Developed QA test scenarios for MVP validation',
'Managed requirements and project tracking using Jira',
],
tools: [
'Jira',
'Figma',
'Draw.io',
'Agile',
'User Story Mapping',
'Requirements Analysis',
'QA Testing',
],
featured: true,
visual: 'mobile',
image: '/projects/jira.png',
githubUrl: 'https://github.com/guzelaz23',
},

{
  slug: 'workflow-automation',
  title: 'Operational Workflow Automation',
  category: 'Business Analysis',
  year: '2024',
  summary:
    'Process mapping and lightweight automation that removed repetitive manual steps from a campus program.',
  description:
     'Analyzed an existing operational process, identified bottlenecks, and proposed an automated workflow that reduced handoffs and errors.',
  problem:
    'A recurring program relied on manual coordination across forms, spreadsheets, and chat threads.',   solution:
      'Documented the as-is process, redesigned the to-be flow, and introduced simple automation for intake and status tracking.',
  impact: [
      'Removed 3 manual handoffs from the process',
      'Reduced intake errors significantly',
      'Freed organizer time for higher-value work',
    ],
  tools: ['Process Mapping', 'Workflow Design', 'Notion', 'Requirement Analysis'],
    featured: false,
    visual: 'dashboard',
    githubUrl: 'https://github.com/guzelaz23',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
