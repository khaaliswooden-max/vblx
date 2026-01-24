'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Package, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
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
            <p className="text-body-lg text-text-secondary mb-8">
              Our software solutions are coming soon. We&apos;re building tools to power your operations—check back for updates.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
