import Link from 'next/link'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'outline'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white shadow-[0_8px_20px_-8px_rgba(78,154,217,0.55)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-10px_rgba(78,154,217,0.65)]',
  outline:
    'border border-border-strong bg-white text-fg hover:border-primary/40 hover:text-primary hover:-translate-y-0.5 hover:shadow-card',
}

type Props = {
  children: ReactNode
  href: string
  variant?: Variant
  external?: boolean
  className?: string
}

export function Button({
  children,
  href,
  variant = 'primary',
  external = false,
  className = '',
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
