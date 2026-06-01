/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['visionblox.com'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async rewrites() {
    return [
      // ── Capability card / "Quick Facts" leave-behind ────────────────────
      // Served from the static file at public/quick-facts.html.
      // /card is the canonical URL encoded by all printed & on-page QR codes.
      { source: '/quick-facts', destination: '/quick-facts.html' },
      { source: '/card', destination: '/quick-facts.html' },
    ]
  },
  async redirects() {
    return [
      // ── /services index → /solutions ────────────────────────────────────
      {
        source: '/services',
        destination: '/solutions',
        permanent: true,
      },
      // ── /case-studies index → /pastperformance ──────────────────────────
      {
        source: '/case-studies',
        destination: '/pastperformance',
        permanent: true,
      },
      // ── /case-studies/[slug] → /pastperformance/[slug] ──────────────────
      // Single wildcard rule covers all 22 slugs + any future ones
      {
        source: '/case-studies/:slug',
        destination: '/pastperformance/:slug',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
