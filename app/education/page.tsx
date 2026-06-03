import type { Metadata } from 'next'
import { GraduationCap, School, BookOpen } from 'lucide-react'
import { education } from '@/data/education'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/page-header'
import { PageTransition } from '@/components/motion/page-transition'
import { FadeIn } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Education',
  description: 'Academic background and relevant coursework in Information Systems.',
}

export default function EducationPage() {
  return (
    <PageTransition>
      <Container className="py-16 sm:py-24">
        <PageHeader
          label="Background"
          title="Education"
          description="My academic foundation in Information Systems, where business meets technology and data."
        />

        <div className="mt-14 space-y-6">
          {education.map((edu, i) => (
            <FadeIn key={edu.degree} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-white p-8 shadow-card">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bg-blue text-primary">
                      {edu.degree.includes('High School') ? (
                        <School className="h-6 w-6" strokeWidth={1.8} />
                      ) : (
                        <GraduationCap className="h-6 w-6" strokeWidth={1.8} />
                      )}
                    </span>
                    <div>
                      <h2 className="font-display text-xl font-bold text-ink">
                        {edu.degree}
                      </h2>
                      <p className="mt-1 text-sm font-semibold text-primary">
                        {edu.school}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-fg-subtle">
                    {edu.period}
                  </span>
                </div>

                <p className="mt-5 leading-relaxed text-fg-muted text-pretty">
                  {edu.detail}
                </p>

                <div className="mt-6">
                  <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                    {edu.courseworkLabel ?? 'Relevant coursework'}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.coursework.map((c) => (
                      <span
                        key={c}
                        className="rounded-lg bg-bg-subtle px-3 py-1.5 text-sm font-medium text-fg-muted"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </PageTransition>
  )
}
