'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, CheckCircle, Clock, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SERVICES, type ServiceKey } from '@/lib/servicesData'
import { PLATFORMS } from '@/lib/utils'

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  const service = SERVICES[slug as ServiceKey]

  if (!service) {
    return (
      <main className="min-h-screen bg-background-primary pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Service Not Found</h1>
          <p className="text-text-secondary mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/services">
            <Button variant="primary">Back to Services</Button>
          </Link>
        </div>
      </main>
    )
  }

  const Icon = service.icon

  return (
    <main className="min-h-screen bg-background-primary pt-20">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ 
            background: `radial-gradient(ellipse at top right, ${service.color}40 0%, transparent 60%)` 
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
              href="/services" 
              className="inline-flex items-center gap-2 text-text-tertiary hover:text-text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <Icon 
                    className="w-8 h-8" 
                    style={{ color: service.color }}
                  />
                </div>
                <span 
                  className="px-3 py-1 text-sm font-mono rounded capitalize"
                  style={{ backgroundColor: `${service.color}20`, color: service.color }}
                >
                  {service.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {service.name}
              </h1>
              <p 
                className="text-xl font-medium mb-6"
                style={{ color: service.color }}
              >
                {service.tagline}
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Request a Proposal
                  </Button>
                </Link>
                <Link href="#methodology">
                  <Button variant="outline" size="lg">
                    View Methodology
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Quick Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-background-secondary rounded-2xl p-6 border border-white/5 sticky top-24">
                <h3 className="font-display font-semibold mb-4">
                  Quick Info
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-text-tertiary text-sm mb-1">Ideal For</div>
                    <div className="flex flex-wrap gap-2">
                      {service.idealFor.slice(0, 3).map((role, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded bg-background-tertiary text-text-secondary">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-text-tertiary text-sm mb-1">Engagement Models</div>
                    <div className="flex flex-wrap gap-2">
                      {service.engagementModels.map((model, i) => (
                        <span key={i} className="px-2 py-1 text-xs rounded bg-background-tertiary text-text-secondary">
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-text-tertiary text-sm mb-1">Related Platforms</div>
                    <div className="flex flex-wrap gap-2">
                      {service.relatedPlatforms.map((platformKey) => {
                        const platform = PLATFORMS[platformKey]
                        return (
                          <Link key={platformKey} href={platform.href}>
                            <span 
                              className="px-2 py-1 text-xs rounded cursor-pointer hover:opacity-80 transition-opacity"
                              style={{ backgroundColor: `${platform.color}20`, color: platform.color }}
                            >
                              {platform.name}
                            </span>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4">
                  <Link href="/contact" className="block">
                    <Button variant="primary" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What You Get
            </h2>
            <p className="text-text-secondary text-lg">
              Tangible deliverables that drive measurable value for your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((deliverable, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-tertiary rounded-xl p-6 border border-white/5"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <CheckCircle 
                      className="w-5 h-5"
                      style={{ color: service.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold mb-2">
                      {deliverable.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {deliverable.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Methodology
            </h2>
            <p className="text-text-secondary text-lg">
              A proven approach refined through hundreds of successful engagements.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
            
            <div className="space-y-8">
              {service.methodology.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Phase Number */}
                  <div 
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center font-display font-bold z-10"
                    style={{ backgroundColor: service.color }}
                  >
                    {index + 1}
                  </div>

                  {/* Content - Left or Right based on index */}
                  <div className={`${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'}`}>
                    <div className={`bg-background-secondary rounded-xl p-6 border border-white/5 ${
                      index % 2 === 0 ? 'md:ml-auto' : ''
                    } max-w-lg`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div 
                          className="md:hidden w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm"
                          style={{ backgroundColor: service.color }}
                        >
                          {index + 1}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-text-tertiary" />
                          <span className="text-text-tertiary text-sm">{phase.duration}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-display font-semibold mb-3">
                        {phase.name}
                      </h3>
                      <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                            <CheckCircle className={`w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5 ${
                              index % 2 === 0 ? 'md:order-last' : ''
                            }`} />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Empty column for alternating layout */}
                  <div className={`hidden md:block ${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Key Benefits
            </h2>
            <p className="text-text-secondary text-lg">
              The value you&apos;ll realize from engaging with our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-tertiary rounded-xl p-6 border border-white/5 text-center"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <div 
                    className="text-2xl font-display font-bold"
                    style={{ color: service.color }}
                  >
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Who This Service Is For
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                This engagement is designed for organizations and teams facing specific challenges 
                that require expert guidance and execution.
              </p>
              
              <div className="space-y-4">
                {service.idealFor.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Users 
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: service.color }}
                    />
                    <span className="text-text-primary">{role}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background-secondary rounded-2xl p-8 border border-white/5"
            >
              <h3 className="text-xl font-display font-semibold mb-6">
                Engagement Options
              </h3>
              <div className="space-y-4">
                {service.engagementModels.map((model, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 bg-background-tertiary rounded-lg"
                  >
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <CheckCircle 
                        className="w-4 h-4"
                        style={{ color: service.color }}
                      />
                    </div>
                    <span className="text-text-primary">{model}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Related Services
              </h2>
              <p className="text-text-secondary text-lg">
                Complementary services that often pair well with {service.shortName}.
              </p>
            </div>
            <Link href="/services" className="hidden md:block">
              <Button variant="outline">
                View All Services
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.values(SERVICES)
              .filter(s => s.id !== service.id && s.category === service.category)
              .slice(0, 3)
              .map((relatedService, index) => {
                const RelatedIcon = relatedService.icon
                return (
                  <motion.div
                    key={relatedService.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/services/${relatedService.id}`}>
                      <div className="group bg-background-tertiary rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all h-full">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                          style={{ backgroundColor: `${relatedService.color}20` }}
                        >
                          <RelatedIcon 
                            className="w-6 h-6" 
                            style={{ color: relatedService.color }}
                          />
                        </div>
                        <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                          {relatedService.shortName}
                        </h3>
                        <p className="text-text-tertiary text-sm mb-4">
                          {relatedService.tagline}
                        </p>
                        <span className="text-accent-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Learn more <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/services">
              <Button variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-2xl p-8 md:p-12 text-center border border-white/10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              Let&apos;s discuss how our {service.name} can help you achieve your goals 
              and drive measurable outcomes.
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
