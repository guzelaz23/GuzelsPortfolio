import type { Metadata } from 'next'
import Image from 'next/image'
import { experiences, projectHighlights } from '@/data/experience'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/page-header'

import { PageTransition } from '@/components/motion/page-transition'
import { FadeIn, Stagger, StaggerItem } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Leadership and project experience across ambassador programs and campus organizations.',
}

export default function ExperiencePage() {
  return (
    <PageTransition>
      <Container className="py-16 sm:py-24">

        {/* ── Section 1: Leadership & Community Experience ── */}
        <PageHeader
          label="Experience"
          title="Leadership & Community Experience"
          description="Leadership roles focused on stakeholder management, communication, community growth, and team collaboration."
        />

        <Stagger className="mt-16 sm:mt-20">
          <div className="relative">
            {/* Vertical timeline line — runs center of logo column */}
            <div
              aria-hidden="true"
              className="absolute left-6 top-6 bottom-6 w-px bg-border"
            />

            {experiences.map((exp, i) => (
              <StaggerItem key={exp.role}>
                <div
                  className={`relative flex gap-7 sm:gap-10 ${
                    i < experiences.length - 1 ? 'pb-16 sm:pb-20' : ''
                  }`}
                >
                  {/* Organisation logo node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 border-border bg-white shadow-card">
                      <Image
                        src={exp.logo}
                        alt={`${exp.organization} logo`}
                        width={40}
                        height={40}
                        className="h-9 w-9 object-contain"
                      />
                    </div>
                  </div>

                  {/* Content block */}
                  <div className="min-w-0 flex-1 pt-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                      <h2 className="font-heading text-lg font-bold text-ink sm:text-xl">
                        {exp.role}
                      </h2>
                      <span className="shrink-0 rounded-full border border-border bg-bg-subtle px-2.5 py-1 text-[11px] font-medium text-fg-subtle">
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-1.5 text-sm font-semibold text-primary">
                      {exp.organization}
                    </p>

                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-muted text-pretty">
                      {exp.summary}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-subtle px-3 py-1.5 text-xs font-medium text-fg-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary opacity-50"
                          />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>

        {/* ── Section 2: Leadership & Project Highlights ── */}
        <div className="mt-24 sm:mt-32">
          <FadeIn>
            <h2 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink text-balance sm:text-5xl">
              Leadership &amp; Project Highlights
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-muted text-pretty">
              Selected projects where I led teams, coordinated stakeholders, and
              delivered measurable outcomes.
            </p>
          </FadeIn>

          <Stagger className="mt-12 sm:mt-16 space-y-8 sm:space-y-10">
            {projectHighlights.map((project) => (
              <StaggerItem key={project.event}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover sm:flex sm:min-h-[320px]">

                  {/* Event photo */}
                  <div className="relative h-60 flex-shrink-0 overflow-hidden sm:h-auto sm:w-[45%]">
                    <Image
                      src={project.image}
                      alt={project.event}
                      fill
                      sizes="(max-width: 640px) 100vw, 45vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                    {/* Gradient overlay — bottom fade on mobile, removed on desktop */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent sm:hidden"
                    />
                    {/* Role badge */}
                    <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                      <span className="inline-block rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm backdrop-blur-sm">
                        {project.role}
                      </span>
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="flex flex-1 flex-col justify-center p-7 sm:p-10">
                    <span className="text-xs font-medium text-fg-subtle">
                      {project.period}
                    </span>
                    <h3 className="mt-2 font-heading text-2xl font-bold leading-tight text-ink sm:text-[1.65rem]">
                      {project.event}
                    </h3>
                    <p className="mt-3 max-w-prose text-sm leading-relaxed text-fg-muted text-pretty">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.metrics.map((m) => (
                        <span
                          key={m}
                          className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-primary"
                        >
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"
                          />
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

      </Container>
    </PageTransition>
  )
}
