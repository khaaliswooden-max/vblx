'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS, PLATFORMS } from '@/lib/utils'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background-primary/80 backdrop-blur-lg border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-accent-primary flex items-center justify-center">
              <span className="font-display font-bold text-background-primary text-sm">V</span>
            </div>
            <span className="font-display font-semibold text-lg tracking-tight group-hover:text-accent-primary transition-colors">
              Visionblox
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5'
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      activeDropdown === link.label && 'rotate-180'
                    )} />
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-background-secondary border border-white/10 rounded-xl p-2 min-w-[280px] shadow-xl">
                          {link.children.map((child) => {
                            const platformKey = child.label.toLowerCase() as keyof typeof PLATFORMS
                            const platform = PLATFORMS[platformKey]
                            return (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                              >
                                <div
                                  className="w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                                  style={{ backgroundColor: `${platform?.color}20` }}
                                >
                                  <span
                                    className="font-display font-bold text-sm"
                                    style={{ color: platform?.color }}
                                  >
                                    {child.label[0]}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-medium text-text-primary group-hover:text-accent-primary transition-colors">
                                    {child.label}
                                  </div>
                                  <div className="text-sm text-text-tertiary">
                                    {child.description}
                                  </div>
                                </div>
                              </Link>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="primary" size="md">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
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
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background-primary border-t border-white/5 overflow-hidden"
          >
            <div className="container-wide py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => !link.children && setIsMobileMenuOpen(false)}
                    className="block py-2 text-lg font-medium text-text-primary"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 mt-2 space-y-2 border-l border-white/10">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-text-secondary hover:text-text-primary transition-colors"
                        >
                          {child.label}
                          <span className="text-text-tertiary text-sm ml-2">
                            — {child.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Button variant="primary" size="lg" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

