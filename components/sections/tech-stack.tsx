import { techStack } from '@/data/skills'
import { Container } from '@/components/ui/container'
import { TechIcon } from '@/components/ui/tech-icon'
import { FadeIn, Stagger, StaggerItem } from '@/components/motion/reveal'

export function TechStack() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <FadeIn>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Tools I work with
            </h2>
            <p className="mx-auto mt-3 max-w-md text-fg-muted text-pretty">
              From data wrangling to dashboards and the web, a toolkit for
              turning information into decisions.
            </p>
          </div>
        </FadeIn>

        <Stagger className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9">
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
    </section>
  )
}
