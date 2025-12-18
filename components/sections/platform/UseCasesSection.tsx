'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Building2, Heart, Factory, Shield, Briefcase, GraduationCap } from 'lucide-react'
import type { UseCase } from '@/lib/platformData'

interface UseCasesSectionProps {
  useCases: UseCase[]
  platformColor: string
}

const industryIcons: Record<string, typeof Building2> = {
  'Healthcare': Heart,
  'Education': GraduationCap,
  'Manufacturing': Factory,
  'Federal Contracting': Shield,
  'Federal Facilities': Shield,
  'IT Services': Briefcase,
  'Healthcare IT': Heart,
}

export default function UseCasesSection({ useCases, platformColor }: UseCasesSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-sm font-bold mb-4">
            Real-World Impact
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            See how organizations across industries have transformed their operations.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {useCases.map((useCase, index) => {
            const Icon = industryIcons[useCase.industry] || Building2
            return (
              <motion.button
                key={useCase.industry}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                className={`
                  flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium
                  transition-all duration-300 border
                  ${
                    activeIndex === index
                      ? 'text-white border-transparent'
                      : 'text-text-secondary border-white/10 hover:border-white/20 bg-background-secondary'
                  }
                `}
                style={{
                  backgroundColor: activeIndex === index ? platformColor : undefined,
                }}
              >
                <Icon className="w-4 h-4" />
                {useCase.industry}
              </motion.button>
            )
          })}
        </div>

        {/* Use Case Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-background-secondary rounded-2xl border border-white/5 overflow-hidden">
              {/* Header */}
              <div
                className="p-6 lg:p-8"
                style={{
                  background: `linear-gradient(135deg, ${platformColor}15, transparent)`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${platformColor}20` }}
                  >
                    {(() => {
                      const Icon = industryIcons[useCases[activeIndex].industry] || Building2
                      return <Icon className="w-5 h-5" style={{ color: platformColor }} />
                    })()}
                  </div>
                  <span
                    className="text-sm font-mono uppercase tracking-wider"
                    style={{ color: platformColor }}
                  >
                    {useCases[activeIndex].industry}
                  </span>
                </div>
                <h3 className="font-display text-heading-lg font-bold">
                  {useCases[activeIndex].title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 space-y-6">
                {/* Challenge */}
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-text-tertiary mb-2">
                    The Challenge
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {useCases[activeIndex].challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-text-tertiary mb-2">
                    The Solution
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {useCases[activeIndex].solution}
                  </p>
                </div>

                {/* Outcome */}
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-text-tertiary mb-2">
                    The Outcome
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {useCases[activeIndex].outcome}
                  </p>
                </div>

                {/* Metrics */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-3">
                    {useCases[activeIndex].metrics.map((metric) => (
                      <div
                        key={metric}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-background-tertiary"
                      >
                        <CheckCircle
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: platformColor }}
                        />
                        <span className="text-sm font-medium text-text-primary">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
