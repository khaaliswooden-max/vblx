'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Cpu, ShoppingCart, Shield } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PLATFORMS, type PlatformKey } from '@/lib/utils'

const platformIcons = {
  austra: Cpu,
  aureon: ShoppingCart,
  civium: Shield,
}

export default function PlatformShowcase() {
  return (
    <section id="platforms" className="section-padding bg-background-secondary">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-sm md:text-display-md font-bold mb-4">
            Three Unified Platforms
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Interconnected systems that power the full spectrum of enterprise operations—
            from workforce intelligence to procurement to compliance.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {(Object.keys(PLATFORMS) as PlatformKey[]).map((key, index) => {
            const platform = PLATFORMS[key]
            const Icon = platformIcons[key]

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={platform.href}>
                  <Card variant="platform" platform={key} className="h-full group">
                    {/* Gradient Header */}
                    <div
                      className="h-2"
                      style={{
                        background: `linear-gradient(90deg, ${platform.color}, ${platform.color}80)`,
                      }}
                    />

                    <CardContent className="p-8">
                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${platform.color}20` }}
                      >
                        <Icon
                          className="w-7 h-7"
                          style={{ color: platform.color }}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-heading-lg font-bold mb-2 group-hover:text-accent-primary transition-colors">
                        {platform.name}
                      </h3>

                      {/* Tagline */}
                      <p
                        className="text-sm font-mono uppercase tracking-wider mb-4"
                        style={{ color: platform.color }}
                      >
                        {platform.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-text-secondary mb-6 italic">
                        &ldquo;{platform.description}&rdquo;
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {platform.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-text-secondary"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: platform.color }}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Modules */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {platform.modules.map((module) => (
                          <span
                            key={module}
                            className="px-2 py-1 text-xs font-mono rounded bg-background-tertiary text-text-tertiary"
                          >
                            {module}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      <div className="flex items-center gap-2 text-sm font-medium group-hover:text-accent-primary transition-colors">
                        Explore {platform.name}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
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
          className="text-center mt-16"
        >
          <p className="text-text-secondary mb-6">
            Ready to transform your enterprise operations?
          </p>
          <Button variant="primary" size="lg">
            Schedule a Demo
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

