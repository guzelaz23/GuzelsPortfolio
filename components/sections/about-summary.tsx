import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { stats } from '@/data/site'
import { services } from '@/data/services'
import { Container } from '@/components/ui/container'
import { FadeIn, Stagger, StaggerItem } from '@/components/motion/reveal'

export function AboutSummary() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-14 md:grid-cols-2">
          {/* Who I Am */}
          <FadeIn>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Who I Am
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-fg-muted text-pretty">
              I&rsquo;m an Information Systems student who enjoys exploring the
              intersection of technology, data, and business. I&rsquo;m
              passionate about solving problems, analyzing data, and building
              systems that provide value.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
            >
              Learn more about me
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="mt-10 flex gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-bold text-primary">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-fg-subtle">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* What I Do */}
          <div>
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <StaggerItem key={service.title}>
                    <div className="group h-full rounded-2xl border border-border bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-blue text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.9} />
                      </span>
                      <h3 className="mt-4 font-heading text-base font-bold text-ink">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                        {service.description}
                      </p>
                    </div>
                  </StaggerItem>
                )
              })}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  )
}
