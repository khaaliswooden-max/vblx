'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, CheckCircle, Shield, Quote } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { INDUSTRIES, type IndustryKey } from '@/lib/industriesData'
import { getCaseStudiesByIndustry, SERVICE_CATEGORIES } from '@/lib/caseStudiesData'
import { PRODUCTS } from '@/lib/utils'

export default function IndustryDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  const industry = INDUSTRIES[slug as IndustryKey]

  if (!industry) {
    return (
      <main className="min-h-screen bg-background-primary pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Industry Not Found</h1>
          <p className="text-text-secondary mb-8">The industry you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/industries">
            <Button variant="primary">Back to Industries</Button>
          </Link>
        </div>
      </main>
    )
  }

  const Icon = industry.icon
  const caseStudies = getCaseStudiesByIndustry(industry.id)

  return (
    <main className="min-h-screen bg-background-primary pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ 
            background: `radial-gradient(ellipse at top right, ${industry.color}40 0%, transparent 60%)` 
          }}
        />
        
        <div className="container-wide relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link 
              href="/industries" 
              className="inline-flex items-center gap-2 text-text-tertiary hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Industries
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${industry.color}20` }}
              >
                <Icon 
                  className="w-10 h-10" 
                  style={{ color: industry.color }}
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {industry.name}
              </h1>
              <p 
                className="text-xl font-medium mb-6"
                style={{ color: industry.color }}
              >
                {industry.tagline}
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {industry.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Schedule a Demo
                  </Button>
                </Link>
                <Link href="#solutions">
                  <Button variant="outline" size="lg">
                    View Solutions
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {industry.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-background-secondary rounded-xl p-6 text-center border border-white/5"
                >
                  <div 
                    className="text-3xl font-display font-bold mb-2"
                    style={{ color: industry.color }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Industry Challenges
            </h2>
            <p className="text-text-secondary text-lg">
              We understand the unique operational and compliance challenges facing {industry.name.toLowerCase()} organizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-tertiary rounded-xl p-6 border border-white/5"
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 font-display font-bold"
                  style={{ backgroundColor: `${industry.color}20`, color: industry.color }}
                >
                  {index + 1}
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">
                  {challenge.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Solutions
            </h2>
            <p className="text-text-secondary text-lg">
              Purpose-built platform modules designed to address your specific industry needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.solutions.map((solution, index) => {
              const product = PRODUCTS[solution.product as keyof typeof PRODUCTS]
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background-secondary rounded-xl p-6 border border-white/5"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: product ? `${product.color}20` : '#3B82F620' }}
                    >
                      <span 
                        className="font-display font-bold"
                        style={{ color: product?.color || '#3B82F6' }}
                      >
                        {product?.name?.[0] || (solution.service?.[0] || 'S')}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {solution.product && (
                          <>
                            <span 
                              className="text-xs font-mono px-2 py-0.5 rounded"
                              style={{ backgroundColor: product ? `${product.color}20` : '#3B82F620', color: product?.color || '#3B82F6' }}
                            >
                              {solution.product}
                            </span>
                            {solution.service && (
                              <>
                                <span className="text-text-tertiary text-sm">•</span>
                                <span className="text-text-tertiary text-sm">{solution.service}</span>
                              </>
                            )}
                          </>
                        )}
                        {!solution.product && solution.service && (
                          <span className="text-text-tertiary text-sm font-medium">{solution.service}</span>
                        )}
                      </div>
                      <p className="text-text-secondary text-sm">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Product Links — only when products exist */}
          {industry.relatedProducts.some((k) => k in PRODUCTS) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-6 bg-background-secondary rounded-xl border border-white/5"
            >
              <h3 className="text-lg font-display font-semibold mb-4">
                Explore Our Products
              </h3>
              <div className="flex flex-wrap gap-4">
                {industry.relatedProducts.map((productKey) => {
                  const product = PRODUCTS[productKey as keyof typeof PRODUCTS]
                  if (!product) return null
                  return (
                    <Link key={productKey} href={product.href}>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        style={{ 
                          borderColor: `${product.color}40`,
                          ['--tw-ring-color' as string]: product.color 
                        }}
                        className="border"
                      >
                        <span style={{ color: product.color }}>{product.name}</span>
                        <ArrowRight className="w-4 h-4 ml-2 text-text-tertiary" />
                      </Button>
                    </Link>
                  )
                })}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Compliance Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-accent-primary" />
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Compliance & Certifications
              </h2>
            </div>
            <p className="text-text-secondary text-lg">
              Built-in support for the regulatory frameworks that matter in your industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industry.compliance.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background-tertiary rounded-xl p-4 text-center border border-white/5 group hover:border-accent-primary/30 transition-colors"
              >
                <div className="font-mono font-bold text-lg text-accent-primary mb-1">
                  {cert.name}
                </div>
                <div className="text-text-tertiary text-xs">
                  {cert.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Common Use Cases
            </h2>
            <p className="text-text-secondary text-lg">
              How leading {industry.name.toLowerCase()} organizations leverage our platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industry.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 bg-background-secondary rounded-xl border border-white/5"
              >
                <CheckCircle 
                  className="w-5 h-5 flex-shrink-0 mt-0.5"
                  style={{ color: industry.color }}
                />
                <span className="text-text-primary">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div 
              className="relative bg-background-tertiary rounded-2xl p-8 md:p-12 border border-white/5"
              style={{ borderLeftColor: industry.color, borderLeftWidth: '4px' }}
            >
              <Quote 
                className="w-12 h-12 mb-6"
                style={{ color: `${industry.color}40` }}
              />
              <blockquote className="text-xl md:text-2xl font-display text-text-primary mb-6 leading-relaxed">
                &ldquo;{industry.testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${industry.color}20` }}
                >
                  <span 
                    className="font-display font-bold"
                    style={{ color: industry.color }}
                  >
                    {industry.testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-text-primary">
                    {industry.testimonial.author}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {industry.testimonial.title}
                  </div>
                  <div className="text-text-tertiary text-sm">
                    {industry.testimonial.organization}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-12"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Related Case Studies
                </h2>
                <p className="text-text-secondary text-lg">
                  See how we&apos;ve helped organizations in your industry achieve results.
                </p>
              </div>
              <Link href="/case-studies" className="hidden md:block">
                <Button variant="outline">
                  View All Case Studies
                </Button>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.slice(0, 2).map((study, index) => {
                const studyCategory = SERVICE_CATEGORIES[study.serviceCategory]
                return (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/case-studies/${study.id}`}>
                      <div className="group bg-background-secondary rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all h-full">
                        <div className="flex items-center gap-2 mb-4">
                          <span 
                            className="px-2 py-1 text-xs font-mono rounded"
                            style={{ 
                              backgroundColor: `${studyCategory.color}20`, 
                              color: studyCategory.color 
                            }}
                          >
                            {studyCategory.name}
                          </span>
                          <span className="text-text-tertiary text-xs">{study.industry}</span>
                        </div>
                        <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                          {study.summary}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.metrics.slice(0, 2).map((metric, i) => (
                            <span key={i} className="px-2 py-1 text-xs rounded bg-background-primary text-text-tertiary">
                              {metric.value} {metric.label}
                            </span>
                          ))}
                        </div>
                        <span className="text-accent-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read case study <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-8 text-center md:hidden">
              <Link href="/case-studies">
                <Button variant="outline">
                  View All Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Transform Your {industry.name} Operations?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Let&apos;s discuss how Visionblox can address your specific challenges and 
              drive measurable results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/contact/federal">
                <Button variant="outline" size="lg">
                  Federal/SLED Inquiry
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
