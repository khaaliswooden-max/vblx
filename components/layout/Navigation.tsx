'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Nav structure ────────────────────────────────────────────────────────────

const SOLUTION_AREAS = [
  {
    category: 'MEDICAID & STATE HEALTH',
    name: 'Medicaid Systems Modernization',
    desc: 'MITA-compliant architecture for state Medicaid agencies',
    href: '/solutions#domain-01',
  },
  {
    category: 'PATIENT DATA & PORTAL INFRASTRUCTURE',
    name: 'Patient Portal & EMR Integration',
    desc: 'Epic, HL7, FHIR — patient-facing and provider-facing',
    href: '/solutions#domain-02',
  },
  {
    category: 'HEALTHCARE AI & DOCUMENT INTELLIGENCE',
    name: 'Healthcare AI & Document Intelligence',
    desc: 'OCR, NLP, and ML pipelines for health data workflows',
    href: '/solutions#domain-03',
  },
  {
    category: 'FEDERAL COMPLIANCE & SECURITY',
    name: 'Healthcare Compliance & Security Architecture',
    desc: 'HIPAA, HITRUST, FedRAMP, Section 508, FISMA',
    href: '/solutions#domain-04',
  },
  {
    category: 'CLAIMS & PAYER SYSTEMS',
    name: 'Claims Processing Infrastructure',
    desc: 'Cloud-native pipelines at payer scale',
    href: '/solutions#domain-05',
  },
]

const TOP_LINKS = [
  { label: 'Healthcare IT', href: '/healthcare-it', highlight: true },
  { label: 'About',         href: '/about' },
  { label: 'Past Performance', href: '/pastperformance' },
]

// ─── Mega-menu proof panel ────────────────────────────────────────────────────

function ProofPanel() {
  return (
    <div
      className="flex flex-col h-full p-5"
      style={{ borderTop: '2px solid #2EA891' }}
    >
      <p className="font-mono text-vbx-muted mb-4 tracking-[0.1em]" style={{ fontSize: '0.6875rem' }}>
        {'// PAST PERFORMANCE'}
      </p>
      <p className="font-mono text-vbx-teal mb-5" style={{ fontSize: '1.375rem', lineHeight: 1 }}>
        $3.3M
      </p>
      <p className="font-mono text-vbx-muted mb-5 tracking-[0.04em]" style={{ fontSize: '0.6875rem' }}>
        Documented Healthcare Portfolio
      </p>

      <div className="space-y-4 flex-1">
        {[
          {
            client: 'KAISER PERMANENTE',
            desc: 'Epic · 99.8% SLA · 100K+ daily users',
          },
          {
            client: 'CALIFORNIA DHCS',
            desc: 'MITA · $2.1M · 60% labor reduction',
          },
          {
            client: 'CIGNA',
            desc: 'AWS · Millions of claims/day',
          },
        ].map((item) => (
          <div key={item.client}>
            <p className="font-mono text-vbx-white" style={{ fontSize: '0.75rem' }}>
              {item.client}
            </p>
            <p className="font-mono text-vbx-muted" style={{ fontSize: '0.6875rem', letterSpacing: '0.03em' }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <Link
        href="/pastperformance"
        className="font-mono text-vbx-teal hover:text-vbx-white transition-colors mt-4"
        style={{ fontSize: '0.6875rem', letterSpacing: '0.08em' }}
      >
        VIEW FULL PAST PERFORMANCE →
      </Link>
    </div>
  )
}

// ─── Mega-menu panel ──────────────────────────────────────────────────────────

function SolutionsMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.15 }}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
      style={{ width: '640px' }}
    >
      <div
        style={{
          background: '#232D5A',
          border: '1px solid rgba(46,168,145,0.2)',
          borderBottom: '2px solid #2EA891',
          borderRadius: '2px',
        }}
      >
        {/* Two-column body */}
        <div className="grid grid-cols-[55%_45%]" style={{ minHeight: '320px' }}>

          {/* Column 1 — Solution areas */}
          <div className="p-4 border-r border-vbx-teal/10">
            {SOLUTION_AREAS.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                onClick={onClose}
                className="group flex flex-col gap-0.5 px-3 py-2.5 transition-all"
                style={{ borderLeft: '2px solid transparent', borderRadius: '2px' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderLeftColor = '#2EA891')}
                onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = 'transparent')}
              >
                <span
                  className="font-mono text-vbx-muted group-hover:text-vbx-teal transition-colors tracking-[0.08em]"
                  style={{ fontSize: '0.625rem' }}
                >
                  {area.category}
                </span>
                <span
                  className="font-sans text-vbx-white group-hover:text-vbx-teal transition-colors"
                  style={{ fontSize: '0.9375rem' }}
                >
                  {area.name}
                </span>
                <span className="font-sans text-vbx-muted" style={{ fontSize: '0.8125rem' }}>
                  {area.desc}
                </span>
              </Link>
            ))}
          </div>

          {/* Column 2 — Proof panel */}
          <ProofPanel />
        </div>

        {/* Footer strip */}
        <div
          className="flex items-center justify-between px-5 py-2.5"
          style={{ borderTop: '1px solid rgba(46,168,145,0.2)' }}
        >
          <p className="font-mono text-vbx-muted tracking-[0.06em]" style={{ fontSize: '0.6875rem' }}>
            {'// 5 HEALTHCARE IT SOLUTIONS FOR FED/SLED'}
          </p>
          <Link
            href="/solutions"
            onClick={onClose}
            className="font-mono text-vbx-muted hover:text-vbx-teal transition-colors tracking-[0.06em]"
            style={{ fontSize: '0.6875rem' }}
          >
            VIEW ALL SOLUTIONS →
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main Navigation ──────────────────────────────────────────────────────────

export default function Navigation() {
  const [isScrolled, setIsScrolled]       = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showSolutions, setShowSolutions] = useState(false)
  const [mobileShowSolutions, setMobileShowSolutions] = useState(false)
  const solutionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  // Close mega-menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target as Node)) {
        setShowSolutions(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[rgba(14,18,38,0.95)] backdrop-blur-[12px] border-b border-vbx-teal/10'
          : 'bg-vbx-navy'
      )}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" fill="#2EA891" fillOpacity="0.12"/>
              <rect x="6" y="6" width="8" height="8" fill="#2EA891"/>
              <rect x="18" y="6" width="8" height="8" fill="#2EA891" fillOpacity="0.5"/>
              <rect x="6" y="18" width="8" height="8" fill="#2EA891" fillOpacity="0.5"/>
              <rect x="18" y="18" width="8" height="8" fill="#2EA891"/>
            </svg>
            <span className="text-vbx-white font-sans font-semibold tracking-wide text-base" style={{ letterSpacing: '0.05em' }}>
              VISIONBLOX
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">

            {/* Healthcare IT */}
            {TOP_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'px-4 py-2 text-sm font-sans uppercase tracking-[0.08em] transition-colors',
                  link.highlight
                    ? 'text-vbx-teal border-b-2 border-vbx-teal pb-1.5'
                    : 'text-vbx-white/80 hover:text-vbx-white'
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Solutions — mega-menu trigger */}
            <div
              ref={solutionsRef}
              className="relative"
              onMouseEnter={() => setShowSolutions(true)}
              onMouseLeave={() => setShowSolutions(false)}
            >
              <button
                className={cn(
                  'px-4 py-2 text-sm font-sans uppercase tracking-[0.08em] transition-colors flex items-center gap-1',
                  showSolutions ? 'text-vbx-teal' : 'text-vbx-white/80 hover:text-vbx-white'
                )}
              >
                Solutions
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={cn('transition-transform duration-200', showSolutions && 'rotate-180')}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <AnimatePresence>
                {showSolutions && (
                  <SolutionsMegaMenu onClose={() => setShowSolutions(false)} />
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="mailto:khaalis.wooden@visionblox.com?subject=Healthcare%20IT%20Capability%20Briefing"
              className="btn-gold text-xs"
            >
              REQUEST BRIEFING
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-vbx-white/70 hover:text-vbx-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-vbx-teal/20 overflow-hidden"
            style={{ background: 'rgba(14,18,38,0.98)' }}
          >
            <div className="container-wide py-6 space-y-1">

              {TOP_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block py-3 text-sm uppercase tracking-[0.08em] font-sans',
                    link.highlight ? 'text-vbx-teal' : 'text-vbx-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Solutions accordion */}
              <div>
                <button
                  className="w-full flex items-center justify-between py-3 text-sm uppercase tracking-[0.08em] font-sans text-vbx-white"
                  onClick={() => setMobileShowSolutions(!mobileShowSolutions)}
                >
                  Solutions
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={cn('transition-transform', mobileShowSolutions && 'rotate-180')}>
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <AnimatePresence>
                  {mobileShowSolutions && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden border-l border-vbx-teal/20 pl-4 space-y-1"
                    >
                      {SOLUTION_AREAS.map((area) => (
                        <Link
                          key={area.name}
                          href={area.href}
                          onClick={() => { setMobileShowSolutions(false); setIsMobileMenuOpen(false) }}
                          className="block py-2"
                        >
                          <span className="font-mono text-vbx-muted block tracking-[0.06em]" style={{ fontSize: '0.625rem' }}>
                            {area.category}
                          </span>
                          <span className="font-sans text-vbx-white text-sm">{area.name}</span>
                        </Link>
                      ))}
                      <Link
                        href="/solutions"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 font-mono text-vbx-teal text-xs tracking-[0.08em]"
                      >
                        VIEW ALL SOLUTIONS →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-4 border-t border-vbx-teal/20">
                <a
                  href="mailto:khaalis.wooden@visionblox.com?subject=Healthcare%20IT%20Capability%20Briefing"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-gold block text-center w-full"
                >
                  REQUEST BRIEFING
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
