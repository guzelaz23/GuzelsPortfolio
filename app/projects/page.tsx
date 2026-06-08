import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/page-header'
import { ProjectDetail } from '@/components/ui/project-detail'
import { PageTransition } from '@/components/motion/page-transition'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected projects across data analytics, system analysis, and product management.',
}

export default function ProjectsPage() {
  return (
    <PageTransition>
      <Container className="py-16 sm:py-24">
        <PageHeader
          label="Featured Work"
          title="Projects & case studies"
          description="A closer look at how I approach problems, from mapping processes and designing systems to building dashboards and shaping product strategy."
        />
        <div className="mt-14 space-y-8">
          {projects.map((project, i) => (
            <ProjectDetail key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </PageTransition>
  )
}
