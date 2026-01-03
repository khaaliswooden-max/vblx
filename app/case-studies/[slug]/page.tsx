'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Quote, Calendar, Users, Clock } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { getCaseStudyById, CASE_STUDIES, SERVICE_CATEGORIES } from '@/lib/caseStudiesData'
import { INDUSTRIES } from '@/lib/industriesData'

export default function CaseStudyDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  const caseStudy = getCaseStudyById(slug)

  if (!caseStudy) {
    return (
      <main className="min-h-screen bg-background-primary pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Case Study Not Found</h1>
          <p className="text-text-secondary mb-8">The case study you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/case-studies">
            <Button variant="primary">Back to Case Studies</Button>
          </Link>
        </div>
      </main>
    )
  }

  const serviceCategory = SERVICE_CATEGORIES[caseStudy.serviceCategory]
  const industry = INDUSTRIES[caseStudy.industryId as keyof typeof INDUSTRIES]
  const relatedCaseStudies = CASE_STUDIES
    .filter(cs => cs.id !== caseStudy.id && (cs.serviceCategory === caseStudy.serviceCategory || cs.industryId === caseStudy.industryId))
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-background-primary pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ 
            background: `radial-gradient(ellipse at top right, ${serviceCategory.color}40 0%, transparent 60%)` 
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
              href="/case-studies" 
              className="inline-flex items-center gap-2 text-text-tertiary hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span 
                  className="px-3 py-1 text-sm font-mono rounded"
                  style={{ backgroundColor: `${serviceCategory.color}20`, color: serviceCategory.color }}
                >
                  {serviceCategory.name}
                </span>
                {industry && (
                  <Link href={`/industries/${caseStudy.industryId}`}>
                    <span className="px-3 py-1 text-sm rounded bg-background-secondary text-text-secondary hover:text-text-primary transition-colors">
                      {industry.name}
                    </span>
                  </Link>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
                {caseStudy.title}
              </h1>
              <p 
                className="text-xl md:text-2xl font-medium mb-6"
                style={{ color: serviceCategory.color }}
              >
                {caseStudy.subtitle}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 mb-8 text-text-secondary text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Published {new Date(caseStudy.publishedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{caseStudy.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{caseStudy.teamSize}</span>
                </div>
              </div>

              {/* Products Used */}
              <div className="flex flex-wrap gap-2">
                {caseStudy.products.map((product) => (
                  <span 
                    key={product}
                    className="px-3 py-1 text-sm rounded bg-background-secondary text-text-secondary"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8 border-y border-white/5">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudy.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div 
                  className="text-3xl md:text-4xl font-display font-bold mb-1"
                  style={{ color: serviceCategory.color }}
                >
                  {metric.value}
                </div>
                <div className="text-text-secondary text-sm">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-text-secondary leading-relaxed">
                  {caseStudy.summary}
                </p>
              </motion.div>

              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-bold mb-4">The Challenge</h2>
                <div className="prose prose-invert max-w-none">
                  {caseStudy.challenge.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-text-secondary mb-4 whitespace-pre-wrap">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-bold mb-4">The Solution</h2>
                <div className="prose prose-invert max-w-none">
                  {caseStudy.solution.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-text-secondary mb-4 whitespace-pre-wrap">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Implementation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-bold mb-4">Implementation</h2>
                <div className="prose prose-invert max-w-none">
                  {caseStudy.implementation.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-text-secondary mb-4 whitespace-pre-wrap">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-display font-bold mb-4">Results</h2>
                <div className="prose prose-invert max-w-none">
                  {caseStudy.results.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-text-secondary mb-4 whitespace-pre-wrap">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-background-secondary rounded-2xl p-8 border-l-4"
                style={{ borderLeftColor: serviceCategory.color }}
              >
                <Quote 
                  className="w-10 h-10 mb-4"
                  style={{ color: `${serviceCategory.color}40` }}
                />
                <blockquote className="text-xl font-display text-text-primary mb-6 leading-relaxed">
                  &ldquo;{caseStudy.quote.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${serviceCategory.color}20` }}
                  >
                    <span 
                      className="font-display font-bold"
                      style={{ color: serviceCategory.color }}
                    >
                      {caseStudy.quote.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">
                      {caseStudy.quote.author}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {caseStudy.quote.title}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Facts */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-background-secondary rounded-xl p-6 border border-white/5"
                >
                  <h3 className="font-display font-semibold mb-4">Quick Facts</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-text-tertiary text-sm mb-1">Client</div>
                      <div className="text-text-primary">{caseStudy.client}</div>
                    </div>
                    <div>
                      <div className="text-text-tertiary text-sm mb-1">Industry</div>
                      <div className="text-text-primary">{caseStudy.industry}</div>
                    </div>
                    <div>
                      <div className="text-text-tertiary text-sm mb-1">Service Category</div>
                      <span 
                        className="inline-block px-2 py-1 text-sm rounded"
                        style={{ backgroundColor: `${serviceCategory.color}20`, color: serviceCategory.color }}
                      >
                        {serviceCategory.name}
                      </span>
                    </div>
                    <div>
                      <div className="text-text-tertiary text-sm mb-1">Duration</div>
                      <div className="text-text-primary">{caseStudy.duration}</div>
                    </div>
                    <div>
                      <div className="text-text-tertiary text-sm mb-1">Team Size</div>
                      <div className="text-text-primary">{caseStudy.teamSize}</div>
                    </div>
                  </div>
                </motion.div>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-background-secondary rounded-xl p-6 border border-white/5"
                >
                  <h3 className="font-display font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-background-tertiary text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-xl p-6 border border-white/10"
                >
                  <h3 className="font-display font-semibold mb-2">
                    Achieve Similar Results
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Let&apos;s discuss how Visionblox can transform your operations.
                  </p>
                  <Link href="/contact" className="block">
                    <Button variant="primary" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="section-padding bg-background-secondary">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-between mb-12"
            >
              <div>
                <h2 className="text-3xl font-display font-bold mb-2">
                  Related Case Studies
                </h2>
                <p className="text-text-secondary">
                  More success stories you might find relevant.
                </p>
              </div>
              <Link href="/case-studies" className="hidden md:block">
                <Button variant="outline">
                  View All
                </Button>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCaseStudies.map((study, index) => {
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
                      <div className="group bg-background-tertiary rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all h-full">
                        <div className="flex items-center gap-2 mb-3">
                          <span 
                            className="px-2 py-1 text-xs font-mono rounded"
                            style={{ backgroundColor: `${studyCategory.color}20`, color: studyCategory.color }}
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
                        <span className="text-accent-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read more <ArrowRight className="w-4 h-4" />
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

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-text-secondary text-lg mb-8">
              Let&apos;s discuss how we can help you achieve similar results 
              in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/commercial">
                <Button variant="primary" size="lg">
                  Commercial Inquiry
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
