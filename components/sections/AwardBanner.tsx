import Link from 'next/link'

// Homepage award announcement — sits directly below the hero. Announces the
// competitively awarded State of Montana Master AI Products & Services Contract
// and links to the full contract profile.
export default function AwardBanner() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#1B2347', borderTop: '1px solid rgba(247,184,1,0.4)', borderBottom: '1px solid rgba(46,168,145,0.2)' }}
      aria-label="Contract award announcement"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20 pointer-events-none" />
      <div className="container-wide relative">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 py-7">

          {/* Badge */}
          <span
            className="font-mono self-start whitespace-nowrap"
            style={{
              fontSize: '0.625rem',
              letterSpacing: '0.12em',
              color: '#F7B801',
              border: '1px solid rgba(247,184,1,0.5)',
              background: 'rgba(247,184,1,0.08)',
              borderRadius: '2px',
              padding: '0.4rem 0.6rem',
            }}
          >
            ◆ NEW AWARD · AUG 2026
          </span>

          {/* Copy */}
          <div className="flex-1 min-w-0">
            <p className="font-mono text-vbx-teal mb-2 tracking-[0.14em]" style={{ fontSize: '0.7rem' }}>
              {'// STATE OF MONTANA · MASTER AI CONTRACT'}
            </p>
            <h2
              className="font-display text-vbx-white"
              style={{ fontSize: 'clamp(1.25rem, 2.6vw, 1.9rem)', lineHeight: '1.25', maxWidth: '820px' }}
            >
              Visionblox awarded the State of Montana Master AI Products &amp; Services Contract —{' '}
              <span className="text-vbx-teal">selected on both tracks.</span>
            </h2>
            <p className="font-sans text-vbx-muted mt-3 max-w-[760px]" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              A fully executed statewide AI contract vehicle (No.&nbsp;SPB26-0608GW-VSNBLX). Available to Montana
              agencies and, through cooperative purchasing, to public entities nationwide.
            </p>
          </div>

          {/* CTA */}
          <div className="flex-shrink-0">
            <Link
              href="/pastperformance/montana-maps-master-contract"
              className="btn-gold inline-flex items-center gap-2 whitespace-nowrap"
              style={{ fontSize: '0.8125rem', letterSpacing: '0.08em' }}
            >
              READ THE CONTRACT PROFILE →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
