'use client'

import { motion } from 'framer-motion'
import { COMPANY } from '@/lib/utils'

export default function MissionStatement() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-primary via-background-secondary to-background-primary" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Quote Mark */}
          <div className="text-8xl font-display text-accent-primary/20 mb-4">&ldquo;</div>

          {/* Mission */}
          <blockquote className="font-display text-heading-xl md:text-display-sm font-medium text-text-primary leading-tight mb-8">
            {COMPANY.mission}
          </blockquote>

          {/* Divider */}
          <div className="w-20 h-1 bg-accent-primary mx-auto mb-8" />

          {/* Description */}
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto mb-8">
            From AI-driven federal solutions to healthcare IT modernization and enterprise 
            cloud migration—we deliver platforms that transform how organizations operate.
          </p>

          {/* Company Info */}
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-sm text-text-tertiary">
            <span>{COMPANY.name}</span>
            <span className="w-1 h-1 rounded-full bg-text-tertiary" />
            <span>{COMPANY.headquarters}</span>
            <span className="w-1 h-1 rounded-full bg-text-tertiary" />
            <span>{COMPANY.status}</span>
          </div>
        </motion.div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {COMPANY.locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="text-center p-4 rounded-lg bg-background-secondary/50 border border-white/5"
            >
              <div className="text-2xl mb-2">
                {location.country === 'USA' && '🇺🇸'}
                {location.country === 'Oman' && '🇴🇲'}
                {location.country === 'UAE' && '🇦🇪'}
                {location.country === 'India' && '🇮🇳'}
              </div>
              <div className="text-sm text-text-primary font-medium">{location.city}</div>
              <div className="text-xs text-text-tertiary">{location.type}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

