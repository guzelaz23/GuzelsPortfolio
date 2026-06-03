import type { ReactNode } from 'react'

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-7 bg-primary" />
      <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {children}
      </span>
    </div>
  )
}
