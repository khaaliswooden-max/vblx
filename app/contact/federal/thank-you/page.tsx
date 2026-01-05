'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function FederalThankYouPage() {
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
          Inquiry Received
        </h1>
        <p className="text-text-secondary text-lg mb-4">
          Thank you for your interest in Visionblox solutions for government.
        </p>
        <p className="text-text-tertiary mb-8">
          A member of our Federal & SLED team will contact you within 24 hours
          to discuss your requirements. For urgent matters, please call our
          BD Command Center directly.
        </p>
        <div className="bg-background-secondary rounded-xl p-4 mb-8 inline-block">
          <p className="text-sm text-text-secondary mb-1">CAGE Code</p>
          <p className="font-mono text-accent-primary font-semibold">9Z4X2</p>
        </div>
        <div>
          <Link href="/">
            <Button variant="primary" size="lg">
              Return to Homepage
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

