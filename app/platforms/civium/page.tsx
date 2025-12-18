'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Shield, UserCheck, Headphones, FileCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { PLATFORMS } from '@/lib/utils'
import { civiumData } from '@/lib/platformData'
import {
  CapabilitiesSection,
  ArchitectureSection,
  MetricsSection,
  UseCasesSection,
  IntegrationsSection,
  FAQSection,
} from '@/components/sections/platform'

const platform = PLATFORMS.civium

const modules = [
  {
    name: 'Pro-Visit',
    description: 'Comprehensive visitor management and access control',
    icon: UserCheck,
    features: ['Pre-registration', 'Badge printing', 'Visitor analytics'],
  },
  {
    name: 'Pro-Ticket',
    description: 'Service management and incident tracking',
    icon: Headphones,
    features: ['Ticket routing', 'SLA management', 'Resolution tracking'],
  },
  {
    name: 'Pro-Assure',
    description: 'Warranty and asset assurance management',
    icon: FileCheck,
    features: ['Warranty tracking', 'Claim management', 'Asset lifecycle'],
  },
]

export default function CiviumPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-civium/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-civium/5 rounded-full blur-[100px]" />

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
                <Shield className="w-10 h-10" style={{ color: platform.color }} />
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
                &ldquo;{platform.description}&rdquo;
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
                <div className="relative">
                  {/* Shield animation */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-32 h-32 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${platform.color}20` }}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="w-20 h-20 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${platform.color}30` }}
                    >
                      <Shield className="w-10 h-10" style={{ color: platform.color }} />
                    </motion.div>
                  </motion.div>
                  {/* Orbiting elements */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: platform.color,
                        top: '50%',
                        left: '50%',
                      }}
                      animate={{
                        x: [
                          Math.cos((i * 2 * Math.PI) / 3) * 80,
                          Math.cos((i * 2 * Math.PI) / 3 + Math.PI) * 80,
                          Math.cos((i * 2 * Math.PI) / 3) * 80,
                        ],
                        y: [
                          Math.sin((i * 2 * Math.PI) / 3) * 80,
                          Math.sin((i * 2 * Math.PI) / 3 + Math.PI) * 80,
                          Math.sin((i * 2 * Math.PI) / 3) * 80,
                        ],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  ))}
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
        capabilities={civiumData.capabilities}
        platformColor={platform.color}
        platformName={platform.name}
      />

      {/* Architecture Section */}
      <ArchitectureSection
        title={civiumData.architecture.title}
        subtitle={civiumData.architecture.subtitle}
        steps={civiumData.architecture.steps}
        platformColor={platform.color}
      />

      {/* Metrics Section */}
      <MetricsSection
        metrics={civiumData.metrics}
        platformColor={platform.color}
      />

      {/* Use Cases Section */}
      <UseCasesSection
        useCases={civiumData.useCases}
        platformColor={platform.color}
      />

      {/* Integrations Section */}
      <IntegrationsSection
        categories={civiumData.integrations.categories}
        items={civiumData.integrations.items}
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
              CIVIUM ensures compliance and security through intelligent automation
              and comprehensive management tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card variant="elevated" className="h-full">
                  <CardContent className="p-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${platform.color}20` }}
                    >
                      <module.icon className="w-6 h-6" style={{ color: platform.color }} />
                    </div>
                    <h3 className="font-display text-heading-md font-semibold mb-2">
                      {module.name}
                    </h3>
                    <p className="text-text-secondary text-sm mb-4">
                      {module.description}
                    </p>
                    <ul className="space-y-1">
                      {module.features.map((feature) => (
                        <li key={feature} className="text-xs text-text-tertiary flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-text-tertiary" />
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
        faq={civiumData.faq}
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
              Ready to Strengthen Your Compliance?
            </h2>
            <p className="text-text-secondary mb-8 max-w-xl mx-auto">
              See how CIVIUM can streamline your compliance and security operations.
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
