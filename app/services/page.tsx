'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SERVICES, SERVICE_CATEGORIES, FEATURED_SERVICES, type ServiceKey } from '@/lib/servicesData'

export default function ServicesPage() {
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
              Professional Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Expert Services for
              <span className="text-accent-primary"> Enterprise Success</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
              From strategy to implementation to ongoing operations, our expert teams 
              ensure you realize the full value of your technology investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Discuss Your Needs
                </Button>
              </Link>
              <Link href="#categories">
                <Button variant="outline" size="lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Featured Services
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl">
              Our most requested services to accelerate your digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_SERVICES.map((serviceKey, index) => {
              const service = SERVICES[serviceKey]
              const Icon = service.icon
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/services/${service.id}`}>
                    <div className="group bg-background-tertiary rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 h-full">
                      <div className="flex items-start gap-6">
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${service.color}20` }}
                        >
                          <Icon 
                            className="w-8 h-8" 
                            style={{ color: service.color }}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span 
                              className="px-2 py-0.5 text-xs font-mono rounded capitalize"
                              style={{ backgroundColor: `${service.color}20`, color: service.color }}
                            >
                              {service.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-text-tertiary text-sm mb-4 line-clamp-2">
                            {service.description}
                          </p>
                          
                          {/* Key Deliverables */}
                          <div className="space-y-2 mb-4">
                            {service.deliverables.slice(0, 3).map((deliverable, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                                <span className="text-text-secondary">{deliverable.title}</span>
                              </div>
                            ))}
                          </div>

                          <span className="text-accent-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn more <ArrowRight className="w-4 h-4" />
                          </span>
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

      {/* Service Categories */}
      <section id="categories" className="section-padding">
        <div className="container-wide">
          {SERVICE_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                  {category.name}
                </h2>
                <p className="text-text-secondary">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.services.map((serviceKey, index) => {
                  const service = SERVICES[serviceKey as ServiceKey]
                  if (!service) return null
                  
                  const Icon = service.icon
                  
                  return (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    >
                      <Link href={`/services/${service.id}`}>
                        <div className="group bg-background-secondary rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 h-full">
                          <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                            style={{ backgroundColor: `${service.color}20` }}
                          >
                            <Icon 
                              className="w-6 h-6" 
                              style={{ color: service.color }}
                            />
                          </div>
                          <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-accent-primary transition-colors">
                            {service.shortName}
                          </h3>
                          <p className="text-text-tertiary text-sm mb-4 line-clamp-2">
                            {service.tagline}
                          </p>
                          <div className="flex items-center text-accent-primary text-sm font-medium">
                            Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Why Choose Visionblox Services
              </h2>
              <p className="text-text-secondary text-lg mb-8">
                Our consultants bring deep platform expertise and industry knowledge 
                to every engagement, ensuring successful outcomes and lasting value.
              </p>
              
              <div className="space-y-4">
                {[
                  'Certified platform experts with hands-on experience',
                  'Proven methodologies refined across 100+ implementations',
                  'Industry-specific best practices and compliance knowledge',
                  'Flexible engagement models to match your needs',
                  'Ongoing support and continuous improvement focus',
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
                { value: '100+', label: 'Implementations' },
                { value: '95%', label: 'Client Satisfaction' },
                { value: '50+', label: 'Consultants' },
                { value: '24/7', label: 'Support Available' },
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

      {/* Engagement Models */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Flexible Engagement Models
            </h2>
            <p className="text-text-secondary text-lg">
              We offer multiple engagement options to match your project needs and organizational preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Fixed-Price Projects',
                description: 'Defined scope, clear deliverables, and predictable costs. Ideal for well-defined implementations and assessments.',
                features: ['Clear scope definition', 'Predictable budget', 'Milestone-based payments', 'Risk transferred to us'],
              },
              {
                title: 'Time & Materials',
                description: 'Flexible engagement for evolving requirements. Pay for actual effort with regular reporting and transparency.',
                features: ['Maximum flexibility', 'Scope can evolve', 'Transparent billing', 'Regular progress updates'],
              },
              {
                title: 'Managed Services',
                description: 'Ongoing operational support with predictable monthly fees. Focus on your business while we manage your platforms.',
                features: ['Predictable monthly cost', '24/7 coverage available', 'SLA-backed support', 'Continuous optimization'],
              },
            ].map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background-secondary rounded-xl p-6 border border-white/5"
              >
                <h3 className="text-lg font-display font-semibold mb-3">
                  {model.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {model.description}
                </p>
                <ul className="space-y-2">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent-primary flex-shrink-0 mt-0.5" />
                      <span className="text-text-tertiary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
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
              Let&apos;s Discuss Your Project
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
              Our team is ready to understand your challenges and propose the right 
              combination of services to achieve your goals.
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
