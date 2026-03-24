'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

// ─── Nav structure ────────────────────────────────────────────────────────────

const TOP_LINKS = [
  { label: 'Healthcare IT',    href: '/healthcare-it' },
  { label: 'About',            href: '/about' },
  { label: 'Past Performance', href: '/pastperformance' },
]

// ─── Main Navigation ──────────────────────────────────────────────────────────

export default function Navigation() {
  const [isScrolled, setIsScrolled]         = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
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
          <Link href="/" className="flex items-center">
            <Image
              src="/visionblox-logo.png"
              alt="Visionblox"
              width={140}
              height={40}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {TOP_LINKS.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 text-sm font-sans uppercase tracking-[0.08em] transition-colors',
                    isActive
                      ? 'text-vbx-teal border-b-2 border-vbx-teal pb-1.5'
                      : 'text-vbx-white hover:text-vbx-teal'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
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
              {TOP_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'block py-3 text-sm uppercase tracking-[0.08em] font-sans',
                      isActive ? 'text-vbx-teal' : 'text-vbx-white'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}

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
