'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ALL_INDUSTRIES, FEATURED_INDUSTRIES, INDUSTRIES } from '@/lib/industriesData'
import { getCaseStudiesByIndustry } from '@/lib/caseStudiesData'

export default function IndustriesPage() {
  const featuredIndustries = FEATURED_INDUSTRIES.map(id => INDUSTRIES[id])
  const otherIndustries = ALL_INDUSTRIES.filter(
    ind => !FEATURED_INDUSTRIES.includes(ind.id as keyof typeof INDUSTRIES)
  )

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
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-6">
              Industries We Serve
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Enterprise Solutions for
              <span className="text-accent-primary"> Every Sector</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
              From federal agencies to healthcare systems, our platforms are purpose-built 
              to meet the unique operational, compliance, and performance requirements of 
              your industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Industries Grid */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Featured Industries
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Deep expertise in the sectors where precision, compliance, and operational 
              excellence are non-negotiable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredIndustries.map((industry, index) => {
              const Icon = industry.icon
              const caseStudies = getCaseStudiesByIndustry(industry.id)
              
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/industries/${industry.id}`}>
                    <div 
                      className="group bg-background-tertiary rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 h-full"
                      style={{ 
                        ['--industry-color' as string]: industry.color 
                      }}
                    >
                      <div className="flex items-start gap-6">
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${industry.color}20` }}
                        >
                          <Icon 
                            className="w-8 h-8" 
                            style={{ color: industry.color }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                            {industry.name}
                          </h3>
                          <p className="text-text-secondary text-sm mb-4">
                            {industry.tagline}
                          </p>
                          <p className="text-text-tertiary text-sm mb-6 line-clamp-2">
                            {industry.description}
                          </p>
                          
                          {/* Key Metrics */}
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {industry.metrics.slice(0, 2).map((metric, i) => (
                              <div key={i} className="text-center p-3 bg-background-primary/50 rounded-lg">
                                <div 
                                  className="text-xl font-display font-bold"
                                  style={{ color: industry.color }}
                                >
                                  {metric.value}
                                </div>
                                <div className="text-xs text-text-tertiary">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Compliance Badges */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {industry.compliance.slice(0, 3).map((cert) => (
                              <span
                                key={cert.name}
                                className="px-2 py-1 text-xs font-mono rounded bg-background-primary/50 text-text-tertiary"
                              >
                                {cert.name}
                              </span>
                            ))}
                            {industry.compliance.length > 3 && (
                              <span className="px-2 py-1 text-xs font-mono rounded bg-background-primary/50 text-text-tertiary">
                                +{industry.compliance.length - 3} more
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-sm text-text-tertiary">
                              {caseStudies.length} case {caseStudies.length === 1 ? 'study' : 'studies'}
                            </span>
                            <span className="text-accent-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                              Learn more <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Additional Industries
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Our platforms adapt to the unique requirements of diverse sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherIndustries.map((industry, index) => {
              const Icon = industry.icon
              
              return (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/industries/${industry.id}`}>
                    <div className="group bg-background-secondary rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 h-full">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${industry.color}20` }}
                      >
                        <Icon 
                          className="w-6 h-6" 
                          style={{ color: industry.color }}
                        />
                      </div>
                      <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-text-tertiary text-sm mb-4">
                        {industry.tagline}
                      </p>
                      <div className="flex items-center text-accent-primary text-sm font-medium">
                        Explore <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Visionblox */}
      <section className="section-padding bg-background-secondary">
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
                We don&apos;t just understand technology—we understand your industry&apos;s unique 
                challenges, compliance requirements, and operational dynamics.
              </p>
              
              <div className="space-y-4">
                {[
                  'Deep domain expertise in regulated industries',
                  'Pre-built compliance frameworks save months of implementation',
                  'Proven track record with Fortune 500 and federal agencies',
                  'Dedicated industry vertical teams for ongoing support',
                  'Continuous platform updates for evolving regulations',
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
                { value: '7', label: 'Industries Served' },
                { value: '99.9%', label: 'Platform Uptime' },
                { value: '15+', label: 'Compliance Frameworks' },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-background-tertiary rounded-xl p-6 text-center border border-white/5"
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
      <section className="section-padding">
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
              specific challenges and drive measurable results.
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
