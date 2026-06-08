import type { LucideIcon } from 'lucide-react'
import { BarChart3, Network, PieChart, Lightbulb } from 'lucide-react'

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Data Analysis',
    description: 'Transforming raw data into clear, actionable insights.',
    icon: BarChart3,
  },
  {
    title: 'System Analysis',
    description: 'Mapping processes, modeling systems, and designing solutions that fit how organizations actually work.',
    icon: Network,
  },
  {
    title: 'Data Visualization',
    description: 'Designing visuals that make complex data easy to understand.',
    icon: PieChart,
  },
  {
    title: 'Insight Generation',
    description: 'Turning numbers into stories that guide real decisions.',
    icon: Lightbulb,
  },
]
