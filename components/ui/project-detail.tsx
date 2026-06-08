'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import type { Project } from '@/data/projects'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { ProjectMockup } from '@/components/ui/project-mockup'

function Detail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-primary">
        {label}
      </h4>
      <div className="mt-3 text-sm leading-relaxed text-fg-muted text-pretty">
        {children}
      </div>
    </div>
  )
}

function TextPanel({ project, index }: { project: Project; index: number }) {
  return (
    <div className="p-8 sm:p-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-semibold text-primary">
          {String(index + 1).padStart(2, '0')} · {project.category}
        </span>
        <div className="flex items-center gap-2">
          {project.badge && (
            <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700">
              {project.badge}
            </span>
          )}
          <span className="text-xs text-fg-subtle">{project.year}</span>
        </div>
      </div>
      <h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
        {project.title}
      </h2>
      <p className="mt-3 leading-relaxed text-fg-muted text-pretty">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-md bg-bg-subtle px-2.5 py-1 text-xs font-medium text-fg-muted"
          >
            {tool}
          </span>
        ))}
      </div>
      {(project.liveUrl ?? project.githubUrl) && (
        <div className="mt-6">
          <a
            href={project.liveUrl ?? project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-dark"
          >
            {project.liveUrl ? 'View Live Demo' : 'View Project'}
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      )}
    </div>
  )
}

export function ProjectDetail({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const images = project.images ?? []
  const isLandscapeGallery = images.length > 0 && project.visual !== 'mobile'
  const isPortraitGallery = images.length > 0 && project.visual === 'mobile'

  return (
    <motion.article
      id={project.slug}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-white shadow-card"
    >
      {isLandscapeGallery ? (
        <>
          {/* Full-width horizontal scroll strip for landscape screenshots */}
          <div className="relative overflow-hidden border-b border-border bg-slate-50">
            <div className="flex gap-3 overflow-x-auto px-5 py-5">
              {images.map((src, i) => (
                <div
                  key={src}
                  className="relative h-[200px] w-[356px] shrink-0 overflow-hidden rounded-xl bg-slate-100 shadow-md"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screen ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent"
            />
          </div>
          <TextPanel project={project} index={index} />
        </>
      ) : (
        <div className="grid gap-0 md:grid-cols-[1.3fr_1fr]">
          {isPortraitGallery ? (
            /* Portrait gallery — horizontal scroll (mobile app screenshots) */
            <div className="relative min-h-[420px] overflow-hidden border-b border-border bg-slate-50 md:border-b-0 md:border-r">
              <div className="flex h-full min-h-[420px] items-center gap-3 overflow-x-auto px-5 py-6">
                {images.map((src, i) => (
                  <div
                    key={src}
                    className="relative h-[360px] w-[166px] shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screen ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent"
              />
            </div>
          ) : (
            /* Single image or mockup */
            <div className="relative min-h-[420px] border-b border-border bg-slate-50 md:border-b-0 md:border-r">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-6 drop-shadow-xl"
                />
              ) : (
                <ProjectMockup visual={project.visual} />
              )}
            </div>
          )}
          <TextPanel project={project} index={index} />
        </div>
      )}

      <div className="grid gap-8 border-t border-border p-8 sm:grid-cols-2 sm:p-10">
        <Detail label="Problem">{project.problem}</Detail>
        <Detail label="Solution">{project.solution}</Detail>
        <Detail label="Measurable Impact">
          <ul className="space-y-2">
            {project.impact.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-0.5 text-primary">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Detail>
        <Detail label="Tools & Methods">
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border px-3 py-1 text-xs text-fg-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </Detail>
      </div>
    </motion.article>
  )
}
