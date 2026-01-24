'use client'

import { motion } from 'framer-motion'
import { Package } from 'lucide-react'
import LGSProductCard from '@/components/sections/LGSProductCard'

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-wide">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{ backgroundColor: 'rgba(0, 212, 170, 0.15)' }}
            >
              <Package className="w-8 h-8 text-accent-primary" />
            </div>
            <h1 className="font-display text-display-sm md:text-display-md font-bold mb-4">
              Product Suite
            </h1>
            <p className="text-body-lg text-text-secondary">
              Enterprise software solutions for operational intelligence, procurement, and compliance.
            </p>
          </motion.div>

          {/* LGS Product Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <LGSProductCard />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
