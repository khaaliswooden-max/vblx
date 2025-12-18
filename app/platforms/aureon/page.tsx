'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ShoppingCart, TrendingUp, FileText } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { PLATFORMS } from '@/lib/utils'
import { aureonData } from '@/lib/platformData'
import {
  CapabilitiesSection,
  ArchitectureSection,
  MetricsSection,
  UseCasesSection,
  IntegrationsSection,
  FAQSection,
} from '@/components/sections/platform'

const platform = PLATFORMS.aureon

const modules = [
  {
    name: 'Pro-Sales',
    description: 'Intelligent opportunity tracking and sales pipeline management',
    icon: TrendingUp,
    features: ['Opportunity scoring', 'Pipeline analytics', 'Win rate optimization'],
  },
  {
    name: 'Pro-Biz',
    description: 'Business development and proposal automation',
    icon: FileText,
    features: ['Proposal generation', 'Compliance checking', 'Cost estimation'],
  },
]

export default function AureonPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-aureon/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aureon/5 rounded-full blur-[100px]" />

        <div className="container-wide relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#platforms"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Platforms
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Icon */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${platform.color}20` }}
              >
                <ShoppingCart className="w-10 h-10" style={{ color: platform.color }} />
              </div>

              {/* Title */}
              <h1 className="font-display text-display-sm md:text-display-md font-bold mb-4">
                {platform.name}
              </h1>

              {/* Tagline */}
              <p
                className="text-lg font-mono uppercase tracking-wider mb-4"
                style={{ color: platform.color }}
              >
                {platform.tagline}
              </p>

              {/* Description */}
              <p className="text-xl text-text-secondary italic mb-8">
                "{platform.description}"
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {platform.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-text-secondary">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: platform.color }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  View Documentation
                </Button>
              </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-background-secondary border border-white/5 p-8 flex items-center justify-center">
                <div className="relative w-full max-w-xs">
                  {/* Animated chart bars */}
                  <div className="flex items-end justify-center gap-4 h-48">
                    {[60, 80, 45, 90, 70].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                        className="w-8 rounded-t-lg"
                        style={{
                          backgroundColor: i === 3 ? platform.color : `${platform.color}40`,
                        }}
                      />
                    ))}
                  </div>
                  {/* Chart baseline */}
                  <div className="h-px bg-white/10 mt-2" />
                </div>
              </div>
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl -z-10"
                style={{ backgroundColor: `${platform.color}10` }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <CapabilitiesSection
        capabilities={aureonData.capabilities}
        platformColor={platform.color}
        platformName={platform.name}
      />

      {/* Architecture Section */}
      <ArchitectureSection
        title={aureonData.architecture.title}
        subtitle={aureonData.architecture.subtitle}
        steps={aureonData.architecture.steps}
        platformColor={platform.color}
      />

      {/* Metrics Section */}
      <MetricsSection
        metrics={aureonData.metrics}
        platformColor={platform.color}
      />

      {/* Use Cases Section */}
      <UseCasesSection
        useCases={aureonData.useCases}
        platformColor={platform.color}
      />

      {/* Integrations Section */}
      <IntegrationsSection
        categories={aureonData.integrations.categories}
        items={aureonData.integrations.items}
        platformColor={platform.color}
        platformName={platform.name}
      />

      {/* Modules Section */}
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
              Platform Modules
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
              AUREON streamlines procurement with intelligent automation and
              data-driven decision making.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {modules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full">
                  <CardContent className="p-8">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${platform.color}20` }}
                    >
                      <module.icon className="w-7 h-7" style={{ color: platform.color }} />
                    </div>
                    <h3 className="font-display text-heading-lg font-semibold mb-3">
                      {module.name}
                    </h3>
                    <p className="text-text-secondary mb-6">
                      {module.description}
                    </p>
                    <ul className="space-y-2">
                      {module.features.map((feature) => (
                        <li key={feature} className="text-sm text-text-tertiary flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: platform.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faq={aureonData.faq}
        platformColor={platform.color}
      />

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-display text-heading-xl font-bold mb-4">
              Ready to Transform Your Procurement?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              See how AUREON can accelerate your business development and procurement operations.
            </p>
            <Button variant="primary" size="xl">
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
