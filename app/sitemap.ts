import type { MetadataRoute } from 'next'
import { ENGAGEMENTS } from '@/lib/pastPerformanceData'

const BASE = 'https://visionblox.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Top-level public routes and their relative priority.
  const staticRoutes: { path: string; priority: number }[] = [
    { path: '', priority: 1.0 },
    { path: '/legacy-estates', priority: 0.9 },
    { path: '/pastperformance', priority: 0.9 },
    { path: '/healthcare-it', priority: 0.8 },
    { path: '/it-services', priority: 0.8 },
    { path: '/solutions', priority: 0.8 },
    { path: '/industries', priority: 0.7 },
    { path: '/products', priority: 0.7 },
    { path: '/about', priority: 0.7 },
    { path: '/tools', priority: 0.6 },
    { path: '/contact', priority: 0.6 },
    { path: '/contact/federal', priority: 0.6 },
    { path: '/contact/commercial', priority: 0.6 },
    { path: '/quick-facts', priority: 0.6 },
    { path: '/privacy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: r.priority,
  }))

  // Past-performance detail pages, derived from the engagement registry.
  // The Montana MAPS master contract is the flagship entry and gets top priority.
  const engagementEntries: MetadataRoute.Sitemap = ENGAGEMENTS.map((eng) => ({
    url: `${BASE}/pastperformance/${eng.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: eng.slug === 'montana-maps-master-contract' ? 0.9 : 0.6,
  }))

  return [...staticEntries, ...engagementEntries]
}
