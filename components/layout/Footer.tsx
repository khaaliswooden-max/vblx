import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { COMPANY } from '@/lib/utils'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background-secondary border-t border-white/5">
      <div className="container-wide section-padding">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/visionblox-logo.png"
                alt="Visionblox"
                width={200}
                height={44}
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {COMPANY.tagline}. {COMPANY.mission}.
            </p>
            <div className="flex gap-4">
              <a
                href={COMPANY.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background-tertiary rounded-lg text-text-secondary hover:text-accent-primary hover:bg-background-elevated transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="p-2 bg-background-tertiary rounded-lg text-text-secondary hover:text-accent-primary hover:bg-background-elevated transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Suite */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-text-tertiary mb-6">
              Product Suite
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-text-secondary hover:text-text-primary transition-colors text-sm"
                >
                  View Product Suite
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-text-tertiary mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-text-tertiary mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="text-text-primary">{COMPANY.headquarters}</div>
                  <div className="text-text-tertiary">Headquarters</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {COMPANY.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${COMPANY.contact.phone.replace(/[^\d+]/g, '')}`}
                  className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {COMPANY.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-tertiary">
            <span>© {currentYear} {COMPANY.name}</span>
            <span className="hidden md:inline">•</span>
            <span>CAGE: {COMPANY.cageCode}</span>
            <span className="hidden md:inline">•</span>
            <span>UEI: {COMPANY.uei}</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-text-tertiary">
            <Link href="/privacy" className="hover:text-text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Certification Badge */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background-tertiary rounded-full text-xs text-text-tertiary">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            {COMPANY.status}
          </div>
        </div>
      </div>
    </footer>
  )
}

