export type Education = {
  degree: string
  school: string
  period: string
  detail: string
  coursework: string[]
  courseworkLabel?: string
}

export const education: Education[] = [
  {
    degree: 'B.Sc. in Information Systems',
    school: 'President University',
    period: '2024 - Present',
    detail:
      'Focused on the intersection of business, technology, and data, covering systems analysis, databases, and analytics.',
    coursework: [
      'Database Systems',
      'System Analysis & Design',
      'Business Process Management',
      'Data Analytics',
      'Project Management',
      'Information Systems Strategy',
    ],
  },

  {
    degree: 'Natural Sciences (High School)',
    school: 'SMAS IT Abu Bakar Yogyakarta',
    period: '2021 - 2024',
    detail:
      'Built a strong foundation in analytical thinking, leadership, and teamwork through science education, student organizations, and competitive academic activities.',
    courseworkLabel: 'Highlights',
    coursework: [
      'Graduated as Top Science Student of the Class of 2024',
      'Student Council (OSIS) Member',
      'Scouting Council Vice Leader',
      'Active participant in academic competitions',
    ],
  },
]
