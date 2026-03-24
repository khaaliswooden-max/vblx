/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['visionblox.com'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
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
