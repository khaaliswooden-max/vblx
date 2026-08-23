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
              <p className="font-mono text-xs tracking-[0.06em] mt-2">
                <span className="inline-block bg-vbx-gold/15 text-vbx-gold border border-vbx-gold/30 rounded px-2 py-0.5 leading-relaxed">
                  State of Montana Master AI Contract Holder — SPB26-0608GW-VSNBLX
                </span>
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
                'STATE OF MONTANA MAPS — BOTH TRACKS',
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
              Contact
            </h4>
            <div className="space-y-2">
              <p className="font-mono text-xs text-vbx-muted tracking-[0.04em]">
                <Link href="/contact" className="hover:text-vbx-white transition-colors">
                  Start an inquiry
                </Link>
              </p>
              <p className="font-mono text-xs text-vbx-muted tracking-[0.04em]">
                <a
                  href="mailto:info@visionblox.com"
                  className="hover:text-vbx-teal transition-colors"
                >
                  info@visionblox.com
                </a>
              </p>
              <p className="font-mono text-xs text-vbx-muted tracking-[0.04em]">
                <a
                  href="https://visionblox.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-vbx-white transition-colors"
                >
                  visionblox.org
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
