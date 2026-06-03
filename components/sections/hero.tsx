'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { site, socials } from '@/data/site'
import { SocialIcon } from '@/components/ui/social-icons'

const ease = [0.16, 1, 0.3, 1] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" style={{ height: 'calc(100svh - 5rem)' }}>

      {/* Large background text */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[44%] z-0 -translate-y-1/2 select-none text-center"
      >
        <span
          className="whitespace-nowrap font-black leading-none text-sky-100"
          style={{ fontSize: 'clamp(4rem, 13vw, 12rem)', letterSpacing: '-0.04em' }}
        >
          Hey, there
        </span>
      </div>

      {/* Center photo — fills full section height */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease }}
        className="absolute inset-0 z-10 flex justify-center"
      >
        <div className="relative h-full">
          <Image
            src="/profile.jpg"
            alt={site.name + ' — ' + site.role}
            width={420}
            height={700}
            priority
            className="h-full w-auto object-cover object-top"
          />
          {/* Bottom gradient shadow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20"
            style={{ height: '40%', background: 'linear-gradient(to top, #ffffff 25%, rgba(255,255,255,0.6) 65%, transparent)' }}
          />
        </div>
      </motion.div>

      {/* Left badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.65, ease }}
        className="absolute left-8 top-[40%] z-20 -translate-y-6 md:left-14"
      >
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-fg-muted">currently</span>
          <p className="text-sm font-bold leading-snug text-ink">
            Available for<br />new opportunities
          </p>
        </div>
      </motion.div>

      {/* Right floating description */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.75, ease }}
        className="absolute right-8 top-[40%] z-20 max-w-[150px] text-right md:right-14"
      >
        <p className="text-sm leading-relaxed text-fg-muted">
          Passionate about<br />Data, Business &<br />Technology.
        </p>
      </motion.div>

      {/* Bottom overlay — CTA above, name/role below */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col gap-3 px-8 pb-7 md:px-14">

        {/* Social + CTA — centered */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-blue text-primary transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
              >
                <SocialIcon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(78,154,217,0.6)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl border border-border-strong bg-white px-5 py-2.5 text-sm font-semibold text-fg transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow-card"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Name row */}
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
          >
            <p className="font-black leading-none text-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 3.4rem)', letterSpacing: '-0.03em' }}>
              I AM
            </p>
            <p className="font-black leading-none text-ink" style={{ fontSize: 'clamp(1.6rem, 4vw, 3.4rem)', letterSpacing: '-0.03em' }}>
              RYANTINISA
            </p>
            <p className="font-black leading-none text-ink/40" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.6rem)', letterSpacing: '-0.03em' }}>
              GUZELAZKIA
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="text-right"
          >
            <p className="font-bold uppercase tracking-widest text-primary" style={{ fontSize: 'clamp(0.55rem, 1.1vw, 0.82rem)' }}>
              DATA ANALYST<br />&amp; BI ENTHUSIAST
            </p>
          </motion.div>
        </div>

      </div>

    </section>
  )
}
