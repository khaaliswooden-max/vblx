'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import type { Capability } from '@/lib/platformData'

interface CapabilitiesSectionProps {
  capabilities: Capability[]
  platformColor: string
  platformName: string
}

export default function CapabilitiesSection({
  capabilities,
  platformColor,
  platformName,
}: CapabilitiesSectionProps) {
  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-sm font-bold mb-4">
            Core Capabilities
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            {platformName} provides a comprehensive suite of capabilities designed to
            transform your operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full group">
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${platformColor}20` }}
                    >
                      <Icon
                        className="w-7 h-7 transition-colors"
                        style={{ color: platformColor }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-heading-md font-semibold mb-3 group-hover:text-accent-primary transition-colors">
                      {capability.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                      {capability.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {capability.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-text-tertiary"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: platformColor }}
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
