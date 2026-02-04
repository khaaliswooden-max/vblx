'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calculator } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/Card'
import TrackingLink from '@/components/analytics/TrackingLink'
import { TOOLS } from '@/lib/utils'

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-background-primary pt-20">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 to-transparent pointer-events-none" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{ backgroundColor: 'rgba(81, 199, 168, 0.15)' }}
            >
              <Calculator className="w-8 h-8 text-accent-primary" />
            </div>
            <h1 className="font-display text-display-sm md:text-display-md font-bold mb-4">
              Assessment Tools
            </h1>
            <p className="text-body-lg text-text-secondary">
              Free calculators and assessments to evaluate ROI, compliance, and readiness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TOOLS.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full flex flex-col">
                  <CardHeader>
                    <h2 className="font-display text-xl font-semibold text-text-primary">
                      {tool.title}
                    </h2>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {tool.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <TrackingLink
                      href={tool.url}
                      trackingType="external"
                      className="inline-flex items-center gap-2 text-accent-primary font-medium text-sm hover:text-accent-hover transition-colors"
                    >
                      Open assessment
                      <ArrowRight className="w-4 h-4" />
                    </TrackingLink>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
