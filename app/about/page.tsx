'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  MapPin, 
  Award, 
  Users, 
  Globe, 
  Target, 
  Shield,
  Mail,
  Phone,
  CheckCircle,
  Building,
  TrendingUp,
  BarChart3,
  Ticket,
  FolderKanban
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { COMPANY } from '@/lib/utils'
import LeadershipSection from '@/components/sections/Leadership'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission Focus',
      description: 'We build software for institutions. Every line of code serves a purpose.',
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Security isn\'t a feature—it\'s the foundation. We engineer for compliance from day one.',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'Your success is our success. We\'re partners, not just vendors.',
    },
    {
      icon: Award,
      title: 'Technical Excellence',
      description: 'We don\'t cut corners. Quality and precision define everything we deliver.',
    },
  ]

  const certifications = [
    { name: 'Minority-Owned', description: 'Certified MBE' },
    { name: 'GSA MAS Springboard', description: 'Federal Contract Vehicle' },
    { name: 'SOC 2 Type II', description: 'Security & Availability' },
    { name: 'ISO 27001', description: 'Information Security' },
  ]

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
              About Visionblox
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Building the Operating Systems for
              <span className="text-accent-primary"> Enterprise Operations</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              Visionblox LLC is a minority-owned technology consultancy specializing in 
              AI-driven federal solutions, healthcare IT modernization, and enterprise 
              cloud migration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-text-primary mb-6 font-display">
                &ldquo;We build software for institutions.&rdquo;
              </p>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                From federal agencies to healthcare systems, from Fortune 500 enterprises 
                to emerging growth companies—we provide the operational intelligence 
                platforms that enable organizations to operate at their best.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Our comprehensive product suite and professional services represent 
                a unified approach to enterprise operations, from CRM and business intelligence 
                to workforce management and compliance. Not disconnected tools, but a 
                cohesive operating system for the modern enterprise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { name: 'Pro-Sales', tagline: 'CRM Excellence', color: '#10B981', href: '/products/pro-sales', icon: TrendingUp },
                { name: 'Pro-Biz', tagline: 'Business Intelligence', color: '#8B5CF6', href: '/products/pro-biz', icon: BarChart3 },
                { name: 'Pro-People', tagline: 'Workforce Management', color: '#EC4899', href: '/products/pro-people', icon: Users },
                { name: 'Pro-Ticket', tagline: 'Service Management', color: '#EF4444', href: '/products/pro-ticket', icon: Ticket },
              ].map((product, index) => {
                const Icon = product.icon
                return (
                  <Link key={product.name} href={product.href}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group bg-background-tertiary rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all"
                    >
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${product.color}20` }}
                      >
                        <Icon 
                          className="w-6 h-6"
                          style={{ color: product.color }}
                        />
                      </div>
                      <h3 
                        className="font-display font-semibold mb-1 group-hover:text-accent-primary transition-colors"
                        style={{ color: product.color }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-text-tertiary text-sm">
                        {product.tagline}
                      </p>
                    </motion.div>
                  </Link>
                )
              })}
              <div className="col-span-2 bg-background-tertiary rounded-xl p-6 border border-white/5">
                <p className="text-text-secondary text-sm text-center">
                  10+ products. 20+ services. One unified vision. Enterprise operations, reimagined.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Values
            </h2>
            <p className="text-text-secondary text-lg">
              The principles that guide everything we build and every relationship we form.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background-secondary rounded-xl p-6 border border-white/5 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Company Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Company Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{COMPANY.name}</h3>
                    <p className="text-text-secondary">{COMPANY.status}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Headquarters</h3>
                    <p className="text-text-secondary">{COMPANY.headquarters}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 p-4 bg-background-tertiary rounded-xl">
                  <div>
                    <div className="text-text-tertiary text-sm mb-1">CAGE Code</div>
                    <div className="font-mono font-bold text-accent-primary">{COMPANY.cageCode}</div>
                  </div>
                  <div>
                    <div className="text-text-tertiary text-sm mb-1">UEI</div>
                    <div className="font-mono font-bold text-accent-primary">{COMPANY.uei}</div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="mt-8">
                <h3 className="font-display font-semibold mb-4">Certifications & Status</h3>
                <div className="grid grid-cols-2 gap-3">
                  {certifications.map((cert) => (
                    <div 
                      key={cert.name}
                      className="flex items-start gap-2 p-3 bg-background-tertiary rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-text-primary text-sm">{cert.name}</div>
                        <div className="text-text-tertiary text-xs">{cert.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Global Presence */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Global Presence
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {COMPANY.locations.map((location, index) => (
                  <motion.div
                    key={location.city}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 p-4 bg-background-tertiary rounded-xl border border-white/5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-accent-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-text-primary">{location.city}</div>
                      <div className="text-text-tertiary text-sm">{location.country}</div>
                    </div>
                    {location.type === 'HQ' && (
                      <span className="px-2 py-1 text-xs rounded bg-accent-primary/10 text-accent-primary">
                        Headquarters
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-background-tertiary rounded-xl border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Global Team</div>
                    <div className="text-text-tertiary text-sm">Serving clients worldwide</div>
                  </div>
                </div>
                <p className="text-text-secondary text-sm">
                  With offices across the Americas, Middle East, and Asia, we provide 
                  local expertise with global capabilities to serve clients in any time zone.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <LeadershipSection />

      {/* Contact CTA */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-2xl p-8 md:p-12 border border-white/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Let&apos;s Build Something Together
                </h2>
                <p className="text-text-secondary text-lg">
                  Whether you&apos;re looking to transform operations, win more contracts, 
                  or achieve compliance excellence—we&apos;re ready to help.
                </p>
              </div>
              <div className="flex flex-col gap-4 lg:items-end">
                <div className="flex flex-col sm:flex-row gap-4">
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
                <div className="flex items-center gap-4 text-text-secondary text-sm">
                  <a 
                    href={`mailto:${COMPANY.contact.email}`}
                    className="flex items-center gap-2 hover:text-accent-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {COMPANY.contact.email}
                  </a>
                  <a 
                    href={`tel:${COMPANY.contact.phone.replace(/[^\d+]/g, '')}`}
                    className="flex items-center gap-2 hover:text-accent-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {COMPANY.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
