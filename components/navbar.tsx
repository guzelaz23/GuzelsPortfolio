'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { nav, site } from '@/data/site'
import { Container } from '@/components/ui/container'

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-display text-xl font-semibold tracking-tight text-ink transition-colors hover:text-primary"
          >
            {site.name}
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-1 lg:flex">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href)
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        active ? 'text-primary' : 'text-fg-muted hover:text-ink'
                      }`}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-primary"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(78,154,217,0.55)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Download CV
              <Download className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-strong text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-border bg-white lg:hidden"
          >
            <Container>
              <ul className="flex flex-col gap-1 py-4">
                {nav.map((item) => {
                  const active =
                    item.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(item.href)
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                          active
                            ? 'bg-bg-blue text-primary'
                            : 'text-fg-muted hover:bg-bg-subtle hover:text-ink'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
                <li className="px-2 pt-2">
                  <a
                    href={site.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white"
                  >
                    Download CV
                    <Download className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
