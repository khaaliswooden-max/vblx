/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.visionblox.org', 'visionblox.org'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

module.exports = nextConfig
