import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { featuredProjects } from '@/data/projects'
import { Container } from '@/components/ui/container'
import { ProjectCard } from '@/components/ui/project-card'
import { FadeIn } from '@/components/motion/reveal'

export function FeaturedProjects() {
  return (
    <section className="bg-bg-subtle py-20 sm:py-24">
      <Container>
        <FadeIn>
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Selected Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-opacity hover:opacity-70 sm:inline-flex"
            >
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <FadeIn>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-opacity hover:opacity-70 sm:hidden"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  )
}
