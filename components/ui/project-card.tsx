'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'
import Image from 'next/image'

function resolveLink(project: Project): {
  href: string
  isExternal: boolean
  label: string
} {
  if (project.liveUrl) {
    return { href: project.liveUrl, isExternal: true, label: 'View Live Demo' }
  }
  if (project.githubUrl) {
    return { href: project.githubUrl, isExternal: true, label: 'View Project' }
  }
  return { href: `/projects#${project.slug}`, isExternal: false, label: 'View Case Study' }
}

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project
  index?: number
}) {
  const { href, isExternal, label } = resolveLink(project)
  const externalProps = isExternal
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.3), ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-card-hover"
    >
      {/* Stretched overlay — makes the entire card clickable */}
      <a
        href={href}
        {...externalProps}
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 z-0"
      />

      {/* image */}
      <div className="relative h-44 overflow-hidden border-b border-border">
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {project.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-bg-blue px-3 py-1 text-xs font-semibold text-primary shadow-sm">
            Featured
          </span>
        )}
      </div>

      {/* body */}
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold text-primary">
          {project.category}
        </span>
        <h3 className="mt-2 font-display text-xl font-bold leading-snug text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted text-pretty">
          {project.summary}
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

        {/* Visible link — sits above the overlay via z-10 */}
        <a
          href={href}
          {...externalProps}
          className="relative z-10 mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5"
        >
          {label}
          {isExternal ? (
            <ExternalLink className="h-4 w-4" />
          ) : (
            <ArrowRight className="h-4 w-4" />
          )}
        </a>
      </div>
    </motion.div>
  )
}
