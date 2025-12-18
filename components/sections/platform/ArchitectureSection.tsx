'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { ArchitectureStep } from '@/lib/platformData'

interface ArchitectureSectionProps {
  title: string
  subtitle: string
  steps: ArchitectureStep[]
  platformColor: string
}

export default function ArchitectureSection({
  title,
  subtitle,
  steps,
  platformColor,
}: ArchitectureSectionProps) {
  return (
    <section className="section-padding bg-background-secondary overflow-hidden">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-sm font-bold mb-4">
            {title}
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Architecture Flow - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full origin-left"
                style={{
                  background: `linear-gradient(90deg, transparent, ${platformColor}40, ${platformColor}40, transparent)`,
                }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8 relative">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="relative"
                  >
                    {/* Step Card */}
                    <div className="bg-background-primary rounded-2xl border border-white/10 p-6 text-center relative z-10 hover:border-white/20 transition-colors">
                      {/* Step Number */}
                      <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ backgroundColor: platformColor }}
                      >
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: `${platformColor}15` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: platformColor }} />
                      </div>

                      {/* Label */}
                      <h3 className="font-display text-heading-md font-semibold mb-2">
                        {step.label}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-text-tertiary leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow to next step */}
                    {index < steps.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                        className="absolute top-1/2 -right-4 transform -translate-y-1/2 translate-x-1/2 z-20"
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: platformColor }}
                        >
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Architecture Flow - Mobile */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full origin-top"
                style={{ backgroundColor: `${platformColor}40` }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex gap-6 relative"
                  >
                    {/* Step Indicator */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${platformColor}15` }}
                      >
                        <Icon className="w-8 h-8" style={{ color: platformColor }} />
                      </div>
                      <div
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ backgroundColor: platformColor }}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-2">
                      <h3 className="font-display text-heading-md font-semibold mb-1">
                        {step.label}
                      </h3>
                      <p className="text-sm text-text-tertiary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
