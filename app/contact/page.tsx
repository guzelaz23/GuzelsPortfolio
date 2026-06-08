import type { Metadata } from 'next'
import { site, socials } from '@/data/site'
import { Container } from '@/components/ui/container'
import { PageHeader } from '@/components/ui/page-header'
import { SocialIcon } from '@/components/ui/social-icons'
import { PageTransition } from '@/components/motion/page-transition'
import { FadeIn } from '@/components/motion/reveal'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${site.name} about internship and early-career opportunities.`,
}

export default function ContactPage() {
  return (
    <PageTransition>
      <Container className="py-16 sm:py-24">
        <div className="grid gap-14 md:grid-cols-[1.3fr_1fr]">
          <FadeIn>
            <PageHeader
              label="Contact"
              title="Let's build something meaningful."
              description="I'm actively looking for internship and early-career opportunities in data analytics, system analysis, product management, and business analysis. Whether it's a role, a project, or just a conversation, I'd love to hear from you."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(37,99,235,0.65)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/ryantinisa-guzelazkia/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border-strong bg-white px-7 py-3.5 text-sm font-semibold text-fg transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                Connect on LinkedIn
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-border bg-white p-7 shadow-card">
              <h2 className="font-heading text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                Reach me
              </h2>
              <ul className="mt-5 space-y-1">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-bg-subtle"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg-blue text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <SocialIcon name={s.icon} className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="text-sm font-medium text-fg">{s.label}</span>
                        <span className="block text-xs text-fg-subtle">{s.value}</span>
                      </span>
                      <span className="ml-auto text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-5 text-xs leading-relaxed text-fg-subtle">
                Based in {site.location} · Open to remote and on-site internship
                opportunities.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </PageTransition>
  )
}
