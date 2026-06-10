export type Experience = {
  role: string
  organization: string
  period: string
  summary: string
  highlights: string[]
  logo: string
}

export type ProjectHighlight = {
  role: string
  event: string
  period: string
  image: string
  description: string
  metrics: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Google Student Ambassador Indonesia',
    organization: 'Google',
    period: 'Apr 2026 – Present',
    logo: '/GSAlogo.jpg',
    summary:
      'Promote Google technologies, programs, and opportunities while connecting students with learning and career development initiatives.',
    highlights: [
      'Organized workshops and community programs',
      'Created digital campaigns and educational content',
      'Connected students with technology and career opportunities',
    ],
  },
  {
    role: 'StudentsCatalyst National Batch 6',
    organization: 'Student · Team Lead of IdeAct Consulting Project',
    period: 'Nov 2025 – Jun 2026',
    logo: '/StudentsCatalystLogo.jpg',
    summary:
      'Selected among 150 students nationwide from thousands of applicants for StudentsCatalyst National Batch 6. Led a consulting team for IdeAct, a real client consulting project focused on business problem analysis and solution design. Recognized as Top 25 Students of Batch 6 upon graduation.',
    highlights: [
      'Selected from thousands of applicants',
      'Led collaborative student initiatives',
      'Worked with mentors and peers nationwide',
    ],
  },
  {
    role: 'Division Deputy Leader of Relation',
    organization: 'PU Developer Clubs',
    period: 'Oct 2025 – Present',
    logo: '/PUDeveloperClubsLogo.jpg',
    summary:
      'Co-led community outreach, partnerships, and communication strategies to strengthen engagement and visibility.',
    highlights: [
      'Managed social media initiatives',
      'Supported partnership development',
      'Coordinated stakeholder communication',
    ],
  },
  {
    role: 'Member of Ministry of Student Activity',
    organization: 'President University Student Board (BEM PU)',
    period: 'Nov 2024 – Nov 2025',
    logo: '/BEMlogo.jpg',
    summary:
      'Supported student organizations and campus-wide programs through activity supervision and event coordination.',
    highlights: [
      'Supervised student clubs and communities',
      'Coordinated campus programs',
      'Ensured alignment with organizational goals',
    ],
  },
]

export const projectHighlights: ProjectHighlight[] = [
  {
    role: 'Project Manager',
    event: 'Grant of Hopes 2025',
    period: '2025',
    image: '/GOH25.jpg',
    description:
      'Led planning and execution of a large-scale social impact event involving multiple committees and external stakeholders.',
    metrics: [
      'Led 50+ committee members',
      'Coordinated 9 divisions',
      '300+ participants',
    ],
  },
  {
    role: 'Vice Project Manager',
    event: 'Student Awarding Night 2025',
    period: '2025',
    image: '/SAN25.jpg',
    description:
      "Supported the execution of the university's flagship awarding event through planning, coordination, and stakeholder management.",
    metrics: [
      'Coordinated 70+ committee members',
      'Managed 10 divisions',
      '100+ attendees',
    ],
  },
]
