'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building2, Flag, Shield, Phone, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { COMPANY } from '@/lib/utils'

const contactPaths = [
  {
    title: 'Commercial',
    subtitle: 'Enterprise & Private Sector',
    description: 'Connect with our team to explore how Visionblox platforms can transform your operations, procurement, and compliance processes.',
    icon: Building2,
    href: '/contact/commercial',
    color: '#00D4AA',
    features: [
      'Enterprise solutions',
      'Platform demonstrations',
      'Implementation support',
      'Partnership opportunities',
    ],
  },
  {
    title: 'Federal & SLED',
    subtitle: 'Government & Public Sector',
    description: 'Our Federal & SLED team specializes in mission-critical deployments with government-grade security and compliance.',
    icon: Flag,
    href: '/contact/federal',
    color: '#38B2AC',
    features: [
      'GSA MAS Springboard',
      'FedRAMP-ready solutions',
      'BD Command Center support',
      'Teaming opportunities',
    ],
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[100px]" />

        <div className="container-wide relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-display-sm md:text-display-md font-bold mb-6">
              Let&apos;s Build the Future Together
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
              Whether you&apos;re an enterprise looking to modernize operations or a government
              agency with mission-critical requirements, we&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Paths */}
      <section className="pb-20 -mt-8">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {contactPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={path.href} className="block group">
                  <div className="bg-background-secondary rounded-2xl border border-white/5 p-8 h-full hover:border-white/10 transition-all duration-300 hover:translate-y-[-4px]">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${path.color}20` }}
                    >
                      <path.icon className="w-7 h-7" style={{ color: path.color }} />
                    </div>

                    <div className="mb-4">
                      <h2 className="font-display text-heading-lg font-semibold mb-1 group-hover:text-accent-primary transition-colors">
                        {path.title}
                      </h2>
                      <p className="text-sm font-mono uppercase tracking-wider" style={{ color: path.color }}>
                        {path.subtitle}
                      </p>
                    </div>

                    <p className="text-text-secondary mb-6">
                      {path.description}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {path.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-text-tertiary">
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: path.color }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-accent-primary font-medium group-hover:gap-3 transition-all">
                      Start Inquiry
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-background-secondary">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-heading-xl font-bold mb-4">
                Direct Contact
              </h2>
              <p className="text-text-secondary">
                Prefer to reach out directly? Here&apos;s how to get in touch.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Person */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-background-primary rounded-xl border border-white/5 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-tertiary">Email</span>
                </div>
                <p className="font-medium mb-1">{COMPANY.contact.name}</p>
                <p className="text-sm text-text-tertiary mb-3">{COMPANY.contact.title}</p>
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="text-accent-primary hover:underline text-sm"
                >
                  {COMPANY.contact.email}
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-background-primary rounded-xl border border-white/5 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-tertiary">Phone</span>
                </div>
                <p className="font-medium mb-1">BD Command Center</p>
                <p className="text-sm text-text-tertiary mb-3">Available 8AM - 6PM ET</p>
                <a
                  href={`tel:${COMPANY.contact.phone.replace(/[^\d+]/g, '')}`}
                  className="text-accent-primary hover:underline text-sm"
                >
                  {COMPANY.contact.phone}
                </a>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-background-primary rounded-xl border border-white/5 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-primary/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-accent-primary" />
                  </div>
                  <span className="text-sm font-medium text-text-tertiary">Credentials</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-text-tertiary">CAGE Code</p>
                    <p className="font-mono font-medium text-accent-primary">{COMPANY.cageCode}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-tertiary">UEI</p>
                    <p className="font-mono font-medium text-accent-primary">{COMPANY.uei}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Locations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <div className="flex items-center gap-3 justify-center mb-6">
                <MapPin className="w-5 h-5 text-accent-primary" />
                <h3 className="font-display text-heading-md font-semibold">Global Presence</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {COMPANY.locations.map((location) => (
                  <div
                    key={location.city}
                    className="bg-background-primary rounded-lg border border-white/5 px-4 py-2 text-sm"
                  >
                    <span className="text-text-primary">{location.city}</span>
                    {location.type === 'HQ' && (
                      <span className="ml-2 text-xs text-accent-primary font-medium">(HQ)</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
