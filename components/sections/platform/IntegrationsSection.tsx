'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Database, Server, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import type { Integration } from '@/lib/platformData'

interface IntegrationsSectionProps {
  categories: { id: string; label: string }[]
  items: Integration[]
  platformColor: string
  platformName: string
}

const categoryIcons: Record<string, typeof Database> = {
  'data-sources': Database,
  'enterprise': Server,
  'outputs': Share2,
}

export default function IntegrationsSection({
  categories,
  items,
  platformColor,
  platformName,
}: IntegrationsSectionProps) {
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
            Integration Ecosystem
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            {platformName} connects seamlessly with your existing enterprise systems.
          </p>
        </motion.div>

        {/* Integration Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, categoryIndex) => {
            const CategoryIcon = categoryIcons[category.id] || Database
            const categoryItems = items.filter((item) => item.category === category.id)

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="bg-background-secondary rounded-2xl border border-white/5 p-6 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${platformColor}20` }}
                    >
                      <CategoryIcon className="w-5 h-5" style={{ color: platformColor }} />
                    </div>
                    <h3 className="font-display text-heading-sm font-semibold">
                      {category.label}
                    </h3>
                  </div>

                  {/* Integration Items */}
                  <div className="space-y-3">
                    {categoryItems.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + itemIndex * 0.05 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background-tertiary hover:bg-background-tertiary/80 transition-colors group"
                      >
                        {/* Integration Icon Placeholder */}
                        <div className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-text-tertiary">
                            {item.name.charAt(0)}
                          </span>
                        </div>

                        {/* Integration Info */}
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm text-text-primary truncate">
                            {item.name}
                          </div>
                          <div className="text-xs text-text-tertiary truncate">
                            {item.description}
                          </div>
                        </div>

                        {/* Hover indicator */}
                        <div
                          className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ backgroundColor: platformColor }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-text-secondary mb-4">
            Don't see your system? We support custom integrations via REST API and webhooks.
          </p>
          <Button variant="outline" size="lg">
            Request Integration
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
