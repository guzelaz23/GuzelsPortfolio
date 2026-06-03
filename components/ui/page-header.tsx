import { FadeIn } from '@/components/motion/reveal'

export function PageHeader({
  label: _label,
  title,
  description,
}: {
  label: string
  title: string
  description?: string
}) {
  return (
    <FadeIn>
      <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink text-balance sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-muted text-pretty">
          {description}
        </p>
      )}
    </FadeIn>
  )
}
