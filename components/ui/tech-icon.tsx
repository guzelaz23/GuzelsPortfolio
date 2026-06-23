/* Lightweight inline brand marks for the Tech Stack row.
   Hand-built SVGs keep the bundle tiny and avoid brittle icon-package names. */

import type { ReactElement } from 'react'

type IconProps = { className?: string }

export function TechIcon({ brand, className = 'h-7 w-7' }: { brand: string; className?: string }) {
  const Cmp = icons[brand] ?? icons.sql
  return <Cmp className={className} />
}

const icons: Record<string, (p: IconProps) => ReactElement> = {
  python: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#3776AB"
        d="M11.9 0C6 0 6.3 2.6 6.3 2.6V5.3h5.7v.8H4.1S.3 5.7.3 11.7s3.3 5.8 3.3 5.8h2V14.6s-.1-3.3 3.2-3.3h5.7s3.1.1 3.1-3V3.1S21.4 0 11.9 0zM8.8 1.8a1 1 0 1 1 0 2.1 1 1 0 0 1 0-2.1z"
      />
      <path
        fill="#FFD43B"
        d="M12.1 24c5.9 0 5.6-2.6 5.6-2.6v-2.7h-5.7v-.8h7.9s3.8.4 3.8-5.6-3.3-5.8-3.3-5.8h-2v2.9s.1 3.3-3.2 3.3H9.3s-3.1-.1-3.1 3v5.3S5.6 24 12.1 24zm3.1-1.8a1 1 0 1 1 0-2.1 1 1 0 0 1 0 2.1z"
      />
    </svg>
  ),
  sql: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <ellipse cx="12" cy="5" rx="8" ry="3" fill="#0EA5E9" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" stroke="#0284C7" strokeWidth="1.6" fill="#38BDF8" fillOpacity=".25" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" stroke="#0284C7" strokeWidth="1.6" fill="#38BDF8" fillOpacity=".25" />
    </svg>
  ),
  powerbi: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="11" width="4" height="9" rx="1" fill="#F2C811" />
      <rect x="10" y="6" width="4" height="14" rx="1" fill="#E8A800" />
      <rect x="17" y="3" width="4" height="17" rx="1" fill="#D9920A" />
    </svg>
  ),
  excel: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" fill="#107C41" />
      <path d="M8 8l8 8M16 8l-8 8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),

  javascript: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11" fill="#111">
        JS
      </text>
    </svg>
  ),
  react: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  nextjs: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#0F172A" />
      <path d="M8 7v10M16 7v6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 7l8 11" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  typescript: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <text x="52%" y="58%" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="#fff">
        TS
      </text>
    </svg>
  ),
  django: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#092E20" />
      <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="#fff">
        Dj
      </text>
    </svg>
  ),
  laravel: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#FF2D20" />
      <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="#fff">
        Lv
      </text>
    </svg>
  ),
  php: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#777BB4" />
      <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="9" fill="#fff">
        php
      </text>
    </svg>
  ),
  postgresql: ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#336791" />
      <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="#fff">
        Pg
      </text>
    </svg>
  ),
}
