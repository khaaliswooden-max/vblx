import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'State of Montana Master AI Contract | Visionblox LLC',
  description:
    'Visionblox LLC holds the State of Montana Master AI Products and Services Contract (No. SPB26-0608GW-VSNBLX), awarded on both solicitation tracks. Available to Montana agencies and, through cooperative purchasing, to public procurement units nationwide.',
  openGraph: {
    title: 'State of Montana Master AI Contract | Visionblox LLC',
    description:
      'Fully executed statewide AI contract vehicle (No. SPB26-0608GW-VSNBLX). Cooperative purchasing available to public entities nationwide.',
    type: 'website',
  },
}

const CONTRACT_FACTS: { k: string; v: string; gold?: boolean }[] = [
  { k: 'Contract No.', v: 'SPB26-0608GW-VSNBLX' },
  { k: 'Solicitation', v: 'Competitive RFP SPB-RFP-2026-0608GW' },
  { k: 'Tracks Awarded', v: 'Track 1 & Track 2 (both)' },
  { k: 'Status', v: 'Fully executed · August 14, 2026', gold: true },
  { k: 'Initial Term', v: 'Through June 30, 2028' },
  { k: 'Renewable', v: 'Up to 10 years total' },
  { k: 'Scope', v: 'AI software across state operations, agencies & workforce functions' },
  { k: 'Cooperative Purchasing', v: 'Public procurement units nationwide' },
]

const PRODUCTS: { kicker: string; name: string; body: string }[] = [
  {
    kicker: 'LEGACY MIGRATION',
    name: 'Relian™',
    body:
      "Relian™ is Visionblox's AI-assisted legacy migration platform. It accelerates the modernization of aging state systems — mapping legacy data models, transforming records, and standing up modern equivalents while preserving institutional continuity. On the MAPS contract, Montana agencies can engage Relian™ to retire brittle legacy applications without the rip-and-replace risk.",
  },
  {
    kicker: 'DOCUMENT INTELLIGENCE',
    name: 'VisionDoc AI',
    body:
      'VisionDoc AI turns unstructured government documents into structured, actionable data. Purpose-built OCR, NLP, and classification pipelines extract, validate, and route information from forms, correspondence, and case files — reducing manual handling while keeping a human in the loop for adjudication.',
  },
  {
    kicker: 'ANALYTICS · PILOT',
    name: 'VisionAnalytics',
    body:
      'VisionAnalytics, offered as a pilot, provides decision-ready analytics over agency data — surfacing operational trends, workload signals, and program outcomes through governed dashboards. Offered on MAPS as a pilot engagement so agencies can validate value against their own data before scaling.',
  },
]

const ENGAGE_STEPS: { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'Define a SOW',
    body: "The agency drafts a task-specific Statement of Work in the state's eMACS system describing the AI product or service needed.",
  },
  {
    n: '02',
    title: 'Visionblox responds',
    body: "Visionblox replies to the Tier Two SOW with approach, staffing, and deliverables under the master contract's established terms.",
  },
  {
    n: '03',
    title: 'Task order authorized',
    body: 'Work proceeds as a task order under MAPS — no separate solicitation required.',
  },
]

export default function MontanaMapsMasterContractPage() {
  return (
    <div className="bg-vbx-offwhite min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div className="container-wide relative">
          <p className="font-mono text-vbx-navy mb-6 tracking-[0.15em]" style={{ fontSize: '0.75rem' }}>
            Master AI contract
          </p>
          <h1
            className="font-display text-vbx-navy mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1', maxWidth: '900px' }}
          >
            State of Montana Master AI Products &amp; Services Contract.
          </h1>
          <p
            className="font-mono text-vbx-navy mb-6"
            style={{ fontSize: '1.05rem', letterSpacing: '0.02em', maxWidth: '760px' }}
          >
            Awarded to Visionblox LLC — selected on both solicitation tracks.
          </p>
          <p className="font-sans text-vbx-navy-light mb-8 max-w-[720px]" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
            A competitively awarded, fully executed statewide contract vehicle for AI software solutions
            deployable across Montana state government operations, agencies, and workforce functions — and,
            through cooperative purchasing, available to public procurement units nationwide.
          </p>
          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href="mailto:services@visionblox.com?subject=Montana%20MAPS%20Contract%20Inquiry"
              className="btn-primary inline-flex items-center gap-2"
              style={{ fontSize: '0.8125rem', letterSpacing: '0.08em' }}
            >
              CONTACT THE CONTRACT MANAGER
            </a>
            <a
              href="#cooperative-purchasing"
              className="btn-secondary inline-flex items-center gap-2"
              style={{ fontSize: '0.8125rem', letterSpacing: '0.08em' }}
            >
              COOPERATIVE PURCHASING</a>
          </div>
          <p className="font-mono text-vbx-navy" style={{ fontSize: '0.8125rem', letterSpacing: '0.12em' }}>
            CAGE: 9Z4X2&nbsp;&nbsp;·&nbsp;&nbsp;UEI: H4X2Z7R9E3E3&nbsp;&nbsp;·&nbsp;&nbsp;MONTANA MAPS CONTRACT HOLDER&nbsp;&nbsp;·&nbsp;&nbsp;SPB26-0608GW-VSNBLX
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 data-line" />
      </section>

      {/* ── CONTRACT FACTS ────────────────────────────────────────────────── */}
      <section className="py-12" style={{ borderBottom: '1px solid var(--vbx-rule)' }}>
        <div className="container-wide">
          <p className="font-mono text-vbx-navy mb-6 tracking-[0.12em]" style={{ fontSize: '0.75rem' }}>
            Contract facts
          </p>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: 'var(--vbx-rule)', border: '1px solid var(--vbx-rule)', borderRadius: '2px', overflow: 'hidden' }}
          >
            {CONTRACT_FACTS.map((f) => (
              <div
                key={f.k}
                className="bg-vbx-offwhite px-5 py-5"
                style={{ borderTop: `3px solid ${f.gold ? 'var(--vbx-gold)' : 'transparent'}` }}
              >
                <p className="font-mono text-vbx-navy-light tracking-[0.1em] mb-2" style={{ fontSize: '0.6rem' }}>
                  {f.k}
                </p>
                <p className="font-sans text-vbx-navy" style={{ fontSize: '0.9375rem', lineHeight: '1.5' }}>
                  {f.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT MONTANA AGENCIES CAN BUY ─────────────────────────────────── */}
      <section className="section-padding pt-14">
        <div className="container-wide">
          <p className="font-mono text-vbx-navy mb-3 tracking-[0.12em]" style={{ fontSize: '0.75rem' }}>
            What montana agencies can buy — TRACK 2
          </p>
          <h2 className="font-display text-vbx-navy mb-3" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            Products on Contract
          </h2>
          <p className="font-sans text-vbx-navy-light mb-10 max-w-[720px]" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
            Available to Montana agencies as task orders under the MAPS vehicle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <div
                key={p.name}
                style={{ borderLeft: '3px solid var(--vbx-teal)', background: 'var(--vbx-teal-tint)', borderRadius: '2px' }}
                className="p-6"
              >
                <p className="font-mono text-vbx-navy mb-2 tracking-[0.1em]" style={{ fontSize: '0.625rem' }}>
                  {p.kicker}
                </p>
                <h3 className="font-display text-vbx-navy mb-3" style={{ fontSize: '1.35rem' }}>
                  {p.name}
                </h3>
                <p className="font-sans text-vbx-navy-light" style={{ fontSize: '0.9375rem', lineHeight: '1.7' }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO ENGAGE ─────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: 'var(--vbx-teal-tint)', borderTop: '1px solid var(--vbx-rule)', borderBottom: '1px solid var(--vbx-rule)' }}
        id="how-to-engage"
      >
        <div className="container-wide">
          <p className="font-mono text-vbx-navy mb-3 tracking-[0.12em]" style={{ fontSize: '0.75rem' }}>
            How to engage
          </p>
          <h2 className="font-display text-vbx-navy mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
            Ordering Under the MAPS Contract
          </h2>
          <p className="font-sans text-vbx-navy-light mb-8 max-w-[760px]" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
            Montana state agencies order under the MAPS contract through the state&apos;s eMACS procurement
            system using the <span className="text-vbx-navy">Tier Two Statement of Work (SOW)</span> process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px mb-8" style={{ background: 'var(--vbx-rule)', border: '1px solid var(--vbx-rule)' }}>
            {ENGAGE_STEPS.map((s) => (
              <div key={s.n} className="bg-vbx-offwhite p-6">
                <div className="font-mono font-extrabold text-3xl text-vbx-navy/20 leading-none mb-3">{s.n}</div>
                <h3 className="font-display text-vbx-navy text-base mb-2">{s.title}</h3>
                <p className="font-sans text-vbx-navy-light text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <p
            className="font-sans text-vbx-navy-light italic pl-3 mb-8 max-w-[760px]"
            style={{ fontSize: '0.875rem', lineHeight: '1.7', borderLeft: '2px solid var(--vbx-rule)' }}
          >
            MAPS is a pre-qualification vehicle: it establishes Visionblox as an approved source and sets
            contract terms. It does not itself guarantee task orders or revenue.
          </p>

          <div
            className="max-w-[760px] p-6"
            style={{ border: '1px solid var(--vbx-rule)', background: 'var(--vbx-teal-tint)', borderRadius: '4px' }}
          >
            <p className="font-mono text-vbx-navy mb-2 tracking-[0.1em]" style={{ fontSize: '0.625rem' }}>
              CONTRACT MANAGEMENT
            </p>
            <p className="font-mono text-vbx-navy-light" style={{ fontSize: '0.85rem' }}>
              <a href="mailto:services@visionblox.com" className="hover:text-vbx-navy transition-colors">
                services@visionblox.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── COOPERATIVE PURCHASING ────────────────────────────────────────── */}
      <section className="section-padding" id="cooperative-purchasing">
        <div className="container-wide">
          <p className="font-mono text-vbx-navy mb-3 tracking-[0.12em]" style={{ fontSize: '0.75rem' }}>
            Cooperative purchasing — non-montana public entities
          </p>
          <div
            className="p-8"
            style={{ borderLeft: '4px solid var(--vbx-gold)', border: '1px solid var(--vbx-rule)', background: 'var(--vbx-teal-tint)', borderRadius: '4px' }}
          >
            <h2 className="font-display text-vbx-navy mb-4" style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)' }}>
              Available nationwide at contract terms.
            </h2>
            <p className="font-sans text-vbx-navy-light mb-6 max-w-[820px]" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
              Public procurement units nationwide — state, local, and federal agencies, and tribal units — may
              purchase from this contract at its established terms through cooperative purchasing. If your entity
              is outside Montana and wants to leverage the MAPS vehicle, contact us to discuss eligibility and
              onboarding.
            </p>
            <a
              href="mailto:services@visionblox.com?subject=MAPS%20Cooperative%20Purchasing%20Inquiry"
              className="btn-primary"
            >
              DISCUSS COOPERATIVE PURCHASING
            </a>
          </div>
        </div>
      </section>

      {/* ── PAGE CTA ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-offwhite">
        <div className="container-wide">
          <div className="data-line mb-12" />
          <div className="max-w-[720px] mx-auto text-center">
            <h2 className="font-display text-vbx-navy mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: '1.3' }}>
              Evaluating the MAPS vehicle for your agency?
            </h2>
            <p className="font-sans text-vbx-navy-light mb-10" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
              Contact our contract management team to discuss a Tier Two SOW, cooperative purchasing
              eligibility, or the AI products available under the contract.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:services@visionblox.com?subject=Montana%20MAPS%20Contract%20Inquiry" className="btn-primary">
                CONTACT CONTRACT MANAGER
              </a>
              <Link href="/pastperformance" className="btn-secondary">
                VIEW PAST PERFORMANCE
              </Link>
            </div>
          </div>
          <div className="data-line mt-12" />
        </div>
      </section>

    </div>
  )
}
