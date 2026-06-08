import { ArrowRight } from 'lucide-react'
import { site } from '@/data/site'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/motion/reveal'

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-sky-deep px-8 py-16 text-center text-white sm:px-16 sm:py-20">
            <div className="dot-grid pointer-events-none absolute inset-0 opacity-10" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
                Let&rsquo;s build something meaningful together.
              </h2>
              <p className="mx-auto mt-5 max-w-lg leading-relaxed text-white/80 text-pretty">
                I&rsquo;m open to internship and early-career opportunities in
                data analytics, system analysis, and product management.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-primary transition-all hover:-translate-y-0.5 hover:shadow-float"
                >
                  Contact Me
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
