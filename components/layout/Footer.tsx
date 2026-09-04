import Link from 'next/link'
import VisionbloxLogo from '@/components/ui/VisionbloxLogo'

const DESIGNATIONS = [
  'Minority-owned small business',
  'State of Montana MAPS — both tracks',
  'HIPAA compliant',
  'HITRUST-audited security staff',
  'Section 508 delivered',
  'FedRAMP-architecture-aware',
]

export default function Footer() {
  return (
    <footer className="bg-vbx-teal-tint border-t border-vbx-rule">
      <div className="container-wide section-padding">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Identity */}
          <div>
            <div className="mb-5">
              <VisionbloxLogo variant="lockup" width={132} alt="Visionblox" />
            </div>
            <p className="text-vbx-navy-light text-sm mb-6 leading-relaxed">
              AI-powered healthcare IT for federal and state government.
            </p>

            {/* Identity codes as a definition list, not a slash-joined string */}
            <dl className="id-list">
              <dt>CAGE</dt>
              <dd>9Z4X2</dd>
              <dt>UEI</dt>
              <dd>H4X2Z7R9E3E3</dd>
              <dt>NAICS</dt>
              <dd>541511, 541512, 541519, 518210</dd>
            </dl>

            <p className="mt-5 text-sm text-vbx-navy border-l-2 border-vbx-gold pl-3 leading-relaxed">
              State of Montana Master AI Contract holder
              <span className="block font-mono text-xs text-vbx-navy-light mt-0.5">
                SPB26-0608GW-VSNBLX
              </span>
            </p>
          </div>

          {/* Designations */}
          <div>
            <h2 className="text-sm font-semibold text-vbx-navy mb-5">
              Designations and compliance
            </h2>
            <ul className="space-y-2">
              {DESIGNATIONS.map((item) => (
                <li key={item} className="text-sm text-vbx-navy-light">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold text-vbx-navy mb-5">Contact</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-vbx-navy-light hover:text-vbx-navy transition-colors">
                  Start an inquiry
                </Link>
              </li>
              <li>
                <a
                  href="mailto:services@visionblox.com"
                  className="text-vbx-navy-light hover:text-vbx-navy transition-colors"
                >
                  services@visionblox.com
                </a>
              </li>
              <li>
                <a
                  href="https://visionblox.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-vbx-navy-light hover:text-vbx-navy transition-colors"
                >
                  visionblox.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 rule flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-vbx-navy-light">
            © 2026 Visionblox LLC
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-vbx-navy-light hover:text-vbx-navy transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-vbx-navy-light hover:text-vbx-navy transition-colors">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
