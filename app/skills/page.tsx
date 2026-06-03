import type { Metadata } from 'next'
import { skillGroups, techStack } from '@/data/skills'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/page-header'
import { TechIcon } from '@/components/ui/tech-icon'
import { PageTransition } from '@/components/motion/page-transition'
import { FadeIn, Stagger, StaggerItem } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Skills across data & analytics, product, business, systems, and the tools to deliver.',
}

export default function SkillsPage() {
  return (
    <PageTransition>
      <Container className="py-16 sm:py-24">
        <PageHeader
          label="Capabilities"
          title="Skills & toolkit"
          description="The mix of analytical, business, and technical skills I bring to turning data into decisions."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 shadow-card">
                <h2 className="font-heading text-lg font-bold text-ink">
                  {group.category}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-bg-subtle px-3 py-1.5 text-sm font-medium text-fg-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <h2 className="mt-16 font-display text-2xl font-bold tracking-tight text-ink">
            Tech stack
          </h2>
        </FadeIn>
        <Stagger className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9">
          {techStack.map((tech) => (
            <StaggerItem key={tech.name}>
              <div className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
                <TechIcon brand={tech.brand} className="h-8 w-8 transition-transform group-hover:scale-110" />
                <span className="text-center text-xs font-medium text-fg-muted">
                  {tech.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </PageTransition>
  )
}
