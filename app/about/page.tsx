import type { Metadata } from 'next'
import Image from 'next/image'
import { site, stats } from '@/data/site'
import { services } from '@/data/services'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/page-header'
import { Button } from '@/components/ui/button'
import { PageTransition } from '@/components/motion/page-transition'
import { FadeIn, Stagger, StaggerItem } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'About',
  description: `About ${site.name} — an Information Systems student and aspiring data analyst.`,
}

export default function AboutPage() {
  return (
    <PageTransition>
      <Container className="py-16 sm:py-24">
        <PageHeader label="About Me" title="Turning complexity into clarity." />

        <div className="mt-14 grid gap-12 md:grid-cols-[1fr_320px]">
          <FadeIn delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-fg-muted text-pretty">
              <p>
                I&rsquo;m {site.name}, an Information Systems student who enjoys
                living at the intersection of business, technology, and data. I
                describe myself as an aspiring data analyst and BI enthusiast. I
                love turning raw numbers into stories and decisions.
              </p>
              <p>
                I care about understanding how organizations actually work,
                mapping the messy reality of a process, and designing systems and
                dashboards that make that work simpler and more measurable. I
                value clear stakeholder communication, structured problem
                solving, and continuous learning.
              </p>
              <p>
                Through leadership roles across student organizations and
                ambassador programs, I&rsquo;ve practiced coordinating people,
                managing stakeholders, and executing under real constraints.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink">
                What I do
              </h2>
              <Stagger className="mt-6 grid gap-4 sm:grid-cols-2">
                {services.map((service) => {
                  const Icon = service.icon
                  return (
                    <StaggerItem key={service.title}>
                      <div className="flex gap-3 rounded-xl border border-border bg-white p-5 shadow-card">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bg-blue text-primary">
                          <Icon className="h-5 w-5" strokeWidth={1.9} />
                        </span>
                        <div>
                          <h3 className="font-heading font-bold text-ink">
                            {service.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </StaggerItem>
                  )
                })}
              </Stagger>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-bg-blue to-white p-1 shadow-card">
                <Image
                  src="/profile.jpg"
                  alt={site.name}
                  width={400}
                  height={500}
                  className="h-auto w-full rounded-xl object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border bg-white p-4 text-center shadow-card"
                  >
                    <p className="font-display text-2xl font-bold text-primary">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs text-fg-subtle">{s.label}</p>
                  </div>
                ))}
              </div>

              <Button href={site.resumeUrl} variant="outline" external className="w-full">
                Download CV
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </PageTransition>
  )
}
