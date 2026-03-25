import Link from 'next/link'
import VisionbloxLogo from '@/components/ui/VisionbloxLogo'

export default function Footer() {
  return (
    <footer style={{ background: '#1B2347' }} className="border-t border-vbx-teal/20">
      <div className="container-wide section-padding">

        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Column 1 — Identity */}
          <div>
            <div className="mb-4">
              <VisionbloxLogo variant="full" width={120} textColor="#F5F5F0" />
            </div>
            <p className="text-vbx-muted text-sm font-sans mb-6 leading-relaxed">
              AI-Powered Healthcare IT · Federal &amp; SLED
            </p>
            <div className="space-y-1.5">
              <p className="font-mono text-xs text-vbx-muted tracking-[0.06em]">
                CAGE: <span className="text-vbx-teal">9Z4X2</span>
              </p>
              <p className="font-mono text-xs text-vbx-muted tracking-[0.06em]">
                UEI: <span className="text-vbx-teal">H4X2Z7R9E3E3</span>
              </p>
              <p className="font-mono text-xs text-vbx-muted tracking-[0.06em]">
                NAICS: <span className="text-vbx-white/70">541511 · 541512 · 541519 · 518210</span>
              </p>
            </div>
          </div>

          {/* Column 2 — Designations */}
          <div>
            <h4 className="font-mono text-xs text-vbx-muted uppercase tracking-[0.12em] mb-6">
              Designations &amp; Compliance
            </h4>
            <div className="space-y-2">
              {[
                'MINORITY-OWNED SMALL BUSINESS',
                'GSA MAS HOLDER',
                'HIPAA COMPLIANT',
                'HITRUST-AUDITED SECURITY STAFF',
                'SECTION 508 DELIVERED',
                'FEDRAMP-ARCHITECTURE-AWARE',
              ].map((item) => (
                <p key={item} className="font-mono text-xs text-vbx-teal tracking-[0.06em]">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="font-mono text-xs text-vbx-muted uppercase tracking-[0.12em] mb-6">
              Point of Contact
            </h4>
            <p className="text-vbx-white font-sans font-medium mb-1">Khaalis Wooden</p>
            <p className="text-vbx-muted font-sans text-sm mb-5 leading-snug">
              Director of Enterprise Capture &amp; Compliance
            </p>
            <div className="space-y-2">
              <p className="font-mono text-xs text-vbx-muted tracking-[0.04em]">
                <a href="tel:+12569881130" className="hover:text-vbx-white transition-colors">
                  (256) 988-1130
                </a>
              </p>
              <p className="font-mono text-xs text-vbx-muted tracking-[0.04em]">
                <a
                  href="mailto:khaalis.wooden@visionblox.com"
                  className="hover:text-vbx-teal transition-colors"
                >
                  khaalis.wooden@visionblox.com
                </a>
              </p>
              <p className="font-mono text-xs text-vbx-muted tracking-[0.04em]">
                <a
                  href="https://www.visionblox.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-vbx-white transition-colors"
                >
                  www.visionblox.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 data-line pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-mono text-xs text-vbx-muted tracking-[0.08em] uppercase">
            © 2026 VISIONBLOX LLC&nbsp;&nbsp;//&nbsp;&nbsp;INTERNAL CAPABILITIES DATA — BD USE
          </p>
          <div className="flex items-center gap-6 font-mono text-xs text-vbx-muted tracking-[0.06em]">
            <Link href="/privacy" className="hover:text-vbx-white transition-colors uppercase">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-vbx-white transition-colors uppercase">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
