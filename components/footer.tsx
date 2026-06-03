import { site, socials } from '@/data/site'
import { Container } from '@/components/ui/container'
import { SocialIcon } from '@/components/ui/social-icons'

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg font-semibold text-ink">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-fg-subtle">
              © {new Date().getFullYear()} {site.name}. {site.tagline}.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-fg-muted transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <SocialIcon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
