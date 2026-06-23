export type SkillGroup = {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Data & Analytics',
    skills: ['SQL', 'Excel', 'Power BI', 'Python'],
  },
  {
    category: 'Product / Business / Systems',
    skills: [
      'Requirement Analysis',
      'KPI Tracking',
      'Workflow Mapping',
      'Stakeholder Management',
      'Agile Fundamentals',
      'Business Process Analysis',
    ],
  },
  {
    category: 'Tools',
    skills: ['Figma', 'Notion', 'GitHub'],
  },
]

// Tech stack row (homepage). `brand` maps to an inline SVG mark in components/ui/tech-icon.tsx
export type Tech = { name: string; brand: string }

export const techStack: Tech[] = [
  { name: 'Python', brand: 'python' },
  { name: 'SQL', brand: 'sql' },
  { name: 'Power BI', brand: 'powerbi' },
  { name: 'Excel', brand: 'excel' },
  { name: 'JavaScript', brand: 'javascript' },
  { name: 'React', brand: 'react' },
  { name: 'Next.js', brand: 'nextjs' },
  { name: 'TypeScript', brand: 'typescript' },
  { name: 'Django', brand: 'django' },
  { name: 'Laravel', brand: 'laravel' },
  { name: 'PHP', brand: 'php' },
  { name: 'PostgreSQL', brand: 'postgresql' },
]
