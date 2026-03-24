'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  {
    label: 'Healthcare IT',
    href: '/healthcare-it',
    highlight: true,
  },
  {
    label: 'Solutions',
    href: '/services',
    children: [
      { label: 'Web Development', href: '/services/web-development', description: 'PHP, Python, .NET solutions' },
      { label: 'SAP S/4 HANA', href: '/services/s4-hana', description: 'Next-gen ERP transformation' },
      { label: 'AI & ML Solutions', href: '/services/ai-ml-solutions', description: 'Intelligent automation' },
      { label: 'View All Solutions', href: '/services', description: '20 service offerings' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Past Performance', href: '/case-studies' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

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
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {/* SVG logo mark */}
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" fill="#2EA891" fillOpacity="0.12"/>
                <rect x="6" y="6" width="8" height="8" fill="#2EA891"/>
                <rect x="18" y="6" width="8" height="8" fill="#2EA891" fillOpacity="0.5"/>
                <rect x="6" y="18" width="8" height="8" fill="#2EA891" fillOpacity="0.5"/>
                <rect x="18" y="18" width="8" height="8" fill="#2EA891"/>
              </svg>
              <span
                className="text-vbx-white font-sans font-semibold tracking-wide text-base"
                style={{ letterSpacing: '0.05em' }}
              >
                VISIONBLOX
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => 'children' in item && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm font-sans uppercase tracking-[0.08em] transition-colors',
                    item.highlight
                      ? 'text-vbx-teal border-b-2 border-vbx-teal pb-1.5'
                      : 'text-vbx-white/80 hover:text-vbx-white'
                  )}
                >
                  {item.label}
                  {'children' in item && (
                    <ChevronDown className={cn(
                      'w-3.5 h-3.5 transition-transform duration-200',
                      activeDropdown === item.label && 'rotate-180'
                    )} />
                  )}
                </Link>

                {'children' in item && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div
                          className="border border-vbx-teal/20 p-2 min-w-[260px]"
                          style={{ background: 'rgba(14,18,38,0.98)', backdropFilter: 'blur(12px)', borderRadius: '2px' }}
                        >
                          {('children' in item && item.children) && item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex flex-col gap-0.5 px-3 py-2.5 hover:bg-vbx-teal/10 transition-colors group"
                              style={{ borderRadius: '2px' }}
                            >
                              <span className="text-sm text-vbx-white font-sans group-hover:text-vbx-teal transition-colors tracking-[0.03em]">
                                {child.label}
                              </span>
                              <span className="text-xs text-vbx-muted font-mono">
                                {child.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="mailto:khaalis.wooden@visionblox.com?subject=Healthcare%20IT%20Capability%20Briefing"
              className="btn-gold text-xs"
            >
              REQUEST BRIEFING
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-vbx-white/70 hover:text-vbx-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
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
            <div className="container-wide py-6 space-y-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => !('children' in item) && setIsMobileMenuOpen(false)}
                    className={cn(
                      'block py-3 text-sm uppercase tracking-[0.08em] font-sans',
                      item.highlight ? 'text-vbx-teal' : 'text-vbx-white'
                    )}
                  >
                    {item.label}
                  </Link>
                  {'children' in item && item.children && (
                    <div className="pl-4 space-y-1 border-l border-vbx-teal/20">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-sm text-vbx-muted hover:text-vbx-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
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
