'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function CommercialThankYouPage() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-lg mx-auto px-6"
      >
        <div className="w-20 h-20 rounded-full bg-accent-primary/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-accent-primary" />
        </div>
        <h1 className="font-display text-display-sm font-bold mb-4">
          Thank You!
        </h1>
        <p className="text-text-secondary text-lg mb-8">
          We&apos;ve received your inquiry and will be in touch within 1-2 business days.
          A member of our team will reach out to discuss how Visionblox can help
          transform your operations.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            Return to Homepage
            <ArrowRight className="w-5 h-5" />
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}

