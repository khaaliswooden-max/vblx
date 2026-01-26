'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, FileText } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ALL_INDUSTRIES } from '@/lib/industriesData'
import { getCaseStudiesByIndustry } from '@/lib/caseStudiesData'

export default function IndustriesPage() {
  const primaryIndustries = ALL_INDUSTRIES.filter(ind => ind.tier === 'PRIMARY')
  const secondaryIndustries = ALL_INDUSTRIES.filter(ind => ind.tier === 'SECONDARY')

  return (
    <main className="min-h-screen bg-background-primary pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 to-transparent pointer-events-none" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Industries · Backed by Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Proven Results
              <span className="text-accent-primary"> by Industry</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
              Every industry we serve is backed by real client work. Explore our case studies
              to see how we&apos;ve helped healthcare systems, financial services, government
              agencies, and more achieve measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Primary Industries */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-accent-primary/20 text-accent-primary text-xs font-mono font-bold">
                PRIMARY
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Industries with Deep Past Performance
              </h2>
            </div>
            <p className="text-text-secondary text-lg max-w-2xl">
              These industries represent our strongest track record with multiple clients, 
              quantified outcomes, and extensive case studies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryIndustries.map((industry, index) => {
              const Icon = industry.icon
              const caseStudies = getCaseStudiesByIndustry(industry.id)

              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.05, 0.3) }}
                >
                  <div className="group bg-background-tertiary rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 h-full flex flex-col">
                    <Link href={`/industries/${industry.id}`} className="block">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${industry.color}20` }}
                      >
                        <Icon
                          className="w-7 h-7"
                          style={{ color: industry.color }}
                        />
                      </div>
                      <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                        {industry.tagline}
                      </p>
                    </Link>
                    <div className="mt-auto flex items-center justify-between gap-4">
                      <Link
                        href="/case-studies"
                        className="text-sm text-text-tertiary hover:text-accent-primary transition-colors"
                      >
                        {caseStudies.length} case{' '}
                        {caseStudies.length === 1 ? 'study' : 'studies'}
                      </Link>
                      <Link
                        href={`/industries/${industry.id}`}
                        className="text-accent-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Secondary Industries */}
      {secondaryIndustries.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-text-tertiary/20 text-text-tertiary text-xs font-mono font-bold">
                  SECONDARY
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold">
                  Additional Industries
                </h2>
              </div>
              <p className="text-text-secondary text-lg max-w-2xl">
                Industries where we have proven delivery and case studies.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryIndustries.map((industry, index) => {
                const Icon = industry.icon
                const caseStudies = getCaseStudiesByIndustry(industry.id)

                return (
                  <motion.div
                    key={industry.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(index * 0.05, 0.3) }}
                  >
                    <div className="group bg-background-secondary rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 h-full flex flex-col">
                      <Link href={`/industries/${industry.id}`} className="block">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                          style={{ backgroundColor: `${industry.color}20` }}
                        >
                          <Icon
                            className="w-7 h-7"
                            style={{ color: industry.color }}
                          />
                        </div>
                        <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                          {industry.name}
                        </h3>
                        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                          {industry.tagline}
                        </p>
                      </Link>
                      <div className="mt-auto flex items-center justify-between gap-4">
                        <Link
                          href="/case-studies"
                          className="text-sm text-text-tertiary hover:text-accent-primary transition-colors"
                        >
                          {caseStudies.length} case{' '}
                          {caseStudies.length === 1 ? 'study' : 'studies'}
                        </Link>
                        <Link
                          href={`/industries/${industry.id}`}
                          className="text-accent-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                        >
                          Learn more <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* View All Case Studies CTA */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/case-studies">
              <Button variant="outline" size="lg">
                View All Case Studies
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Visionblox */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Why Industry Leaders Choose Visionblox
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                We don&apos;t just understand technology—we understand your industry&apos;s
                unique challenges, compliance requirements, and operational dynamics. Every
                industry we serve is backed by published case studies.
              </p>

              <div className="space-y-4">
                {[
                  'Every industry backed by real client case studies',
                  'Deep domain expertise in regulated sectors',
                  'Pre-built compliance frameworks save months of implementation',
                  'Proven track record with Fortune 500 and public sector',
                  'Dedicated industry vertical teams for ongoing support',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-primary">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { value: '50+', label: 'Enterprise Clients' },
                { value: '9', label: 'Industries with Case Studies' },
                { value: '99.9%', label: 'Platform Uptime' },
                { value: '15+', label: 'Compliance Frameworks' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-background-secondary rounded-xl p-6 text-center border border-white/5"
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-accent-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-2xl p-8 md:p-12 text-center border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how Visionblox platforms can address your industry&apos;s
              specific challenges and drive measurable results—backed by case studies from
              organizations like yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
