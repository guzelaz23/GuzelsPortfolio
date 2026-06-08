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
  /** Multiple screenshots — used for mobile apps to render a scrollable gallery */
  images?: string[]
  /** Status badge shown on the card and detail view, e.g. "Prototype" */
  badge?: string
  /** Live deployment URL — takes priority over githubUrl */
  liveUrl?: string
  /** Fallback GitHub link when no live demo is available */
  githubUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'store-analytics-genai',
    title: 'Store Analytics Dashboard with GenAI',
    category: 'Data Analytics',
    year: '2026',
    summary:
      'ML-powered store analytics platform integrating 6 forecasting models with a GenAI chatbot for natural-language business queries.',
    description:
      'Built a full-stack analytics dashboard for store management, combining ARIMA, LSTM, XGBoost, Random Forest, Transformer, and Ensemble forecasting models with an automated performance leaderboard. A Groq LLM–powered chatbot lets non-technical users query business insights in plain language, while interactive Plotly dashboards visualize KPIs, revenue trends, and customer behavior.',
    problem:
      'Store managers lacked a centralized, intelligent analytics tool to monitor sales performance and forecast demand, relying instead on manual spreadsheets with no predictive capability.',
    solution:
      'Built an ML-powered analytics platform integrating 6 forecasting models (ARIMA, LSTM, XGBoost, Random Forest, Transformer, Ensemble) with an automated leaderboard and a GenAI chatbot that enables non-technical users to query business insights in natural language.',
    impact: [
      'Integrated 6 forecasting models with automated performance leaderboard, with XGBoost achieving the lowest RMSE among all tested models on the DVD rental dataset',
      'Enabled natural language business queries through Groq LLM chatbot, eliminating the need for SQL knowledge to access analytics',
      'Visualized KPIs, revenue trends, and customer behavior through interactive Plotly dashboards',
    ],
    tools: ['Python', 'Flask', 'PostgreSQL', 'PyTorch', 'XGBoost', 'ARIMA', 'LSTM', 'Plotly', 'Groq LLM', 'Scikit-learn'],
    featured: true,
    visual: 'dashboard',
    image: '/projects/store-analytics-dashboard.png',
    githubUrl: 'https://github.com/guzelaz23/StoreAnalyticsDashboardGenAI',
  },
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
    githubUrl: 'https://github.com/guzelaz23/LogisticsInventorySystem',
  },
  {
    slug: 'super-app-product-case-study',
    title: 'Super App Product Case Study',
    category: 'Product Management',
    year: '2026',
    summary:
      'Designed an MVP super app integrating ride-hailing, food delivery, public transit, and restaurant reservations into a unified mobile experience.',
    description:
      'Led the analysis and planning of a super app inspired by Indonesia\'s digital service ecosystem. Defined product scope, gathered requirements, mapped user journeys, and developed testing strategies for an integrated platform combining transportation, food delivery, transit, and dining services.',
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
    githubUrl: 'https://github.com/guzelaz23/AKSES',
  },
  {
    slug: 'akses-platform',
    title: 'AKSES: Inclusive Digital Learning Platform',
    category: 'Product Management',
    year: '2026',
    summary:
      'Accessibility-first LMS with Text-to-Speech and live transcription pathways, persistent accessibility profiles, and WCAG-compliant design serving Indonesia\'s 22M+ users with disabilities.',
    description:
      'Designed and developed an inclusive digital learning platform with dual learning pathways: integrated Text-to-Speech with real-time word highlighting for visually impaired students, and live session transcription for hearing-impaired students. The platform features persistent accessibility profiles, WCAG-compliant ARIA standards, and a teacher analytics dashboard tracking per-student accessibility feature usage with proactive alerts.',
    problem:
      'Over 22 million Indonesians live with disabilities (Susenas 2020), yet almost all existing digital learning platforms are designed exclusively for users without sensory limitations.',
    solution:
      'Designed and developed an accessibility-first LMS with dual learning pathways: integrated Text-to-Speech with real-time word highlighting for visually impaired students, and live session transcription for hearing-impaired students.',
    impact: [
      'Gathered and documented accessibility requirements for 3 user groups, translating 22M+ user needs into 15+ functional specifications',
      'Built persistent accessibility profiles covering disability mode, font scale (3 levels), high-contrast mode, and subtitle preferences, applied automatically across all pages',
      'Applied WCAG-compliant ARIA standards (landmarks, live regions, progressbar roles, skip links, focus-visible rings) throughout the platform',
      'Developed teacher analytics dashboard tracking per-student accessibility feature usage with proactive alerts',
    ],
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Web Speech API', 'WCAG'],
    featured: false,
    visual: 'dashboard',
    image: '/projects/AKSES1.jpeg',
    images: [
      '/projects/AKSES1.jpeg',
      '/projects/AKSES2.jpeg',
      '/projects/AKSES3.jpeg',
      '/projects/AKSES4.jpeg',
      '/projects/AKSES5.jpeg',
      '/projects/AKSES6.jpeg',
      '/projects/AKSES7.jpeg',
    ],
    badge: 'Prototype',
    githubUrl: 'https://github.com/guzelaz23/AKSES',
  },
  {
    slug: 'circlebloom-app',
    title: 'CircleBloom: AI-Powered Study Partner App',
    category: 'Product Management',
    year: '2026',
    summary:
      'Android app connecting university students through smart compatibility matching across course overlap, skill synergy, schedule, and learning style, with compatibility scores from 0 to 100%.',
    description:
      'Defined product requirements and built an Android study partner app in a team of 4 using Java, Android Studio, and Firebase. The platform scores student compatibility (0–100%) across 3 match types (Study, Skill Exchange, Hybrid) through a 6-step onboarding flow. Managed with Jira across the full development lifecycle with 204 commits.',
    problem:
      'University students struggle to find compatible academic partners, which leads to isolation, inefficient study sessions, and missed skill-sharing opportunities.',
    solution:
      'Defined product requirements and collaborated in a team of 4 to build an Android app connecting students through smart matching based on course overlap, skill synergy, schedule compatibility, and learning style (compatibility score 0–100%).',
    impact: [
      'Defined product requirements and scoped 3 match types (Study, Skill Exchange, Hybrid) based on user need analysis',
      'Designed 6-step onboarding flow capturing academic profile, skills inventory, schedule, and learning preferences',
      'Collaborated in a team of 4 using Jira for sprint planning, backlog management, and milestone tracking, with 204 commits across the full development lifecycle',
      'Integrated Firebase Authentication and Firebase Realtime Database for real-time chat and session management',
    ],
    tools: ['Java', 'Android Studio', 'Firebase', 'Jira', 'Gradle'],
    featured: false,
    visual: 'mobile',
    image: '/projects/circlebloom-app.png',
    images: [
      '/projects/circlebloom-1.jpeg',
      '/projects/circlebloom-2.jpeg',
      '/projects/circlebloom-3.jpeg',
      '/projects/circlebloom-4.jpeg',
      '/projects/circlebloom-5.jpeg',
      '/projects/circlebloom-6.jpeg',
    ],
    githubUrl: 'https://github.com/keira1934/CircleBloom',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
