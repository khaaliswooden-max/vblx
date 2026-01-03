'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Filter } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CASE_STUDIES, FEATURED_CASE_STUDIES, SERVICE_CATEGORIES } from '@/lib/caseStudiesData'
import { INDUSTRIES } from '@/lib/industriesData'

type ServiceCategoryFilter = 'all' | 'operations' | 'procurement' | 'compliance'
type IndustryFilter = 'all' | string

export default function CaseStudiesPage() {
  const [categoryFilter, setCategoryFilter] = useState<ServiceCategoryFilter>('all')
  const [industryFilter, setIndustryFilter] = useState<IndustryFilter>('all')

  const filteredCaseStudies = CASE_STUDIES.filter(cs => {
    const matchesCategory = categoryFilter === 'all' || cs.serviceCategory === categoryFilter
    const matchesIndustry = industryFilter === 'all' || cs.industryId === industryFilter
    return matchesCategory && matchesIndustry
  })

  const industries = [...new Set(CASE_STUDIES.map(cs => cs.industryId))]

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
              Client Success Stories
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Real Results for
              <span className="text-accent-primary"> Real Organizations</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
              Discover how leading enterprises across industries have transformed 
              their operations, improved compliance, and achieved measurable outcomes 
              with Visionblox platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Featured Case Studies
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Our most impactful client success stories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FEATURED_CASE_STUDIES.map((study, index) => {
              const categoryInfo = SERVICE_CATEGORIES[study.serviceCategory]
              
              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/case-studies/${study.id}`}>
                    <div className="group bg-background-tertiary rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <span 
                          className="px-3 py-1 text-sm font-mono rounded"
                          style={{ backgroundColor: `${categoryInfo.color}20`, color: categoryInfo.color }}
                        >
                          {categoryInfo.name}
                        </span>
                        <span className="text-text-tertiary text-sm">{study.industry}</span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-display font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-accent-primary font-medium mb-4">
                        {study.subtitle}
                      </p>
                      <p className="text-text-secondary text-sm mb-6 line-clamp-3">
                        {study.summary}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                        {study.metrics.map((metric, i) => (
                          <div key={i} className="text-center p-3 bg-background-primary/50 rounded-lg">
                            <div 
                              className="text-lg font-display font-bold"
                              style={{ color: categoryInfo.color }}
                            >
                              {metric.value}
                            </div>
                            <div className="text-xs text-text-tertiary">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <span className="text-accent-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read full case study <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Case Studies with Filters */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
                All Case Studies
              </h2>
              <p className="text-text-secondary">
                {filteredCaseStudies.length} {filteredCaseStudies.length === 1 ? 'result' : 'results'}
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-text-tertiary" />
                <span className="text-text-tertiary text-sm">Filter:</span>
              </div>
              
              {/* Service Category Filter */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCategoryFilter('all')}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                    categoryFilter === 'all' 
                      ? 'bg-accent-primary text-background-primary' 
                      : 'bg-background-secondary text-text-secondary hover:text-text-primary'
                  }`}
                >
                  All Categories
                </button>
                {(['operations', 'procurement', 'compliance'] as const).map((category) => (
                  <button
                    key={category}
                    onClick={() => setCategoryFilter(category)}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      categoryFilter === category 
                        ? 'text-background-primary' 
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                    style={{ 
                      backgroundColor: categoryFilter === category 
                        ? SERVICE_CATEGORIES[category].color 
                        : 'var(--color-bg-secondary)' 
                    }}
                  >
                    {SERVICE_CATEGORIES[category].name}
                  </button>
                ))}
              </div>

              {/* Industry Filter */}
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="px-3 py-1.5 text-sm rounded-lg bg-background-secondary text-text-secondary border border-white/10 focus:border-accent-primary focus:outline-none"
              >
                <option value="all">All Industries</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>
                    {INDUSTRIES[ind as keyof typeof INDUSTRIES]?.name || ind}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Case Studies Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${categoryFilter}-${industryFilter}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCaseStudies.map((study, index) => {
                const categoryInfo = SERVICE_CATEGORIES[study.serviceCategory]
                
                return (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link href={`/case-studies/${study.id}`}>
                      <div className="group bg-background-secondary rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span 
                            className="px-2 py-1 text-xs font-mono rounded"
                            style={{ backgroundColor: `${categoryInfo.color}20`, color: categoryInfo.color }}
                          >
                            {categoryInfo.name}
                          </span>
                          <span className="text-text-tertiary text-xs">{study.industry}</span>
                        </div>
                        
                        <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-text-secondary text-sm mb-4 line-clamp-2 flex-1">
                          {study.summary}
                        </p>

                        {/* Key Metrics */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.metrics.slice(0, 2).map((metric, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-1 text-xs rounded"
                              style={{ backgroundColor: `${categoryInfo.color}10`, color: categoryInfo.color }}
                            >
                              {metric.value} {metric.label}
                            </span>
                          ))}
                        </div>

                        <span className="text-accent-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                          Read more <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-text-secondary text-lg mb-4">
                No case studies match your current filters.
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setCategoryFilter('all')
                  setIndustryFilter('all')
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Aggregate Client Impact
            </h2>
            <p className="text-text-secondary text-lg">
              Combined results across all client engagements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '$50M+', label: 'Client Savings Generated' },
              { value: '45%', label: 'Average Efficiency Gain' },
              { value: '100%', label: 'Compliance Achievement' },
              { value: '95%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-tertiary rounded-xl p-6 text-center border border-white/5"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-accent-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
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
              Ready to Write Your Success Story?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              Join the growing list of organizations achieving transformative results 
              with Visionblox platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
