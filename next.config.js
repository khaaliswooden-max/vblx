/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['visionblox.com'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

module.exports = nextConfig
