import type { MetadataRoute } from 'next'
import { site, nav } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return nav.map((item) => ({
    url: `${site.url}${item.href === '/' ? '' : item.href}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: item.href === '/' ? 1 : 0.8,
  }))
}
