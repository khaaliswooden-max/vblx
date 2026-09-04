import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contract Awards | Visionblox',
  description:
    'Competitively awarded contracts and master contract vehicles held by Visionblox LLC, including the State of Montana Master AI Products and Services (MAPS) vehicle, Howard County Public School System, and SolGenie Technologies / Horizon Global.',
}

interface Award {
  number: string
  logo: { src: string; alt: string }
  awardingBody: string
  title: string
  vehicle?: string
  status: string
  awarded: string
  location: string
  color: string
  badge: string
  scope: string
  highlights: string[]
  detailHref?: string
  detailLabel?: string
}

const AWARDS: Award[] = [
  {
    number: '01',
    logo: { src: '/awards/montana-doa-seal.png', alt: 'Montana Department of Administration seal' },
    awardingBody: 'State of Montana',
    title: 'Master AI Products & Services Contract (MAPS) — No. SPB26-0608GW-VSNBLX',
    vehicle: 'SPB-RFP-2026-0608GW',
    status: 'MASTER CONTRACT VEHICLE',
    awarded: 'Fully executed August 14, 2026',
    location: 'Statewide — Montana (cooperative purchasing nationwide)',
    color: 'var(--vbx-gold)',
    badge: 'STATE / SLED',
    scope:
      'Fully executed statewide master contract vehicle (No. SPB26-0608GW-VSNBLX) for AI software solutions deployable across Montana state government operations, agencies, and workforce functions. Awarded to Visionblox LLC on both solicitation tracks. Through cooperative purchasing, public procurement units nationwide may purchase at contract terms.',
    highlights: [
      'Selected on BOTH solicitation tracks (Track 1 and Track 2) under competitive RFP SPB-RFP-2026-0608GW',
      'Initial term through June 30, 2028; renewable up to 10 years total',
      'Montana agencies order via the eMACS Tier Two Statement of Work (SOW) process',
      'Cooperative purchasing available to public procurement units nationwide — state, local, federal, and tribal',
      'Products on contract (Track 2): Relian™, VisionDoc AI, and VisionAnalytics (pilot)',
    ],
    detailHref: '/pastperformance/montana-maps-master-contract',
    detailLabel: 'View Full Contract Profile',
  },
  {
    number: '02',
    logo: { src: '/awards/hcpss-logo.png', alt: 'Howard County Public School System logo' },
    awardingBody: 'Howard County Public School System (HCPSS)',
    title: 'Enterprise Applications & Data Platform',
    status: 'ACTIVE DELIVERY',
    awarded: '2026 — Present',
    location: 'Maryland',
    color: 'var(--vbx-teal)',
    badge: 'DATA / AI',
    scope:
      "Unified governance of four interdependent enterprise platforms — Synergy SIS, Canvas LMS, a Snowflake enterprise data warehouse, and a cross-cutting data quality layer — operated as a single source of truth for one of Maryland's largest school systems.",
    highlights: [
      'SIS-to-LMS rostering integration (OneRoster / SIF) auto-provisioning Canvas from authoritative Synergy records',
      'Enterprise data warehouse on Snowflake consolidating student, staff, course, attendance, assessment, and finance data',
      'MSDE state-compliance reporting from curated, FERPA-aligned extracts',
      'Role-based access aligned to Active Directory with row/column-level controls on sensitive student data',
    ],
    detailHref: '/pastperformance/hcpss-enterprise-data-platform',
    detailLabel: 'Read Full Engagement Detail',
  },
  {
    number: '03',
    logo: { src: '/awards/solgenie-logo.png', alt: 'SolGenie Technologies logo' },
    awardingBody: 'SolGenie Technologies / Horizon Global',
    title: 'SAP BTP Integration Solutioning — B2B / EDI Transaction Transformation',
    status: 'ACTIVE DELIVERY',
    awarded: '2026 — Present',
    location: 'Remote (US)',
    color: 'var(--vbx-teal)',
    badge: 'SAP / ENTERPRISE',
    scope:
      'Enterprise SAP Business Technology Platform integration program transforming B2B / EDI transaction flows — order receipt and validation, acknowledgement, shipping and logistics, invoicing, and payment — across a complex multi-system landscape.',
    highlights: [
      'Up to 50% reduction in manual IT maintenance and runtime cost using SAP integration flows',
      'Real-time synchronization handling 100,000+ daily transactions',
      'Legacy SAP PO 7.5 landscape migrated to SAP BTP Cloud Integration',
      'Multi-protocol EDI delivery: AS2, EDIFACT, and ANSI X12',
    ],
    detailHref: '/pastperformance/solgenie-sap-btp-integration',
    detailLabel: 'Read Full Engagement Detail',
  },
]

function AwardCard({ award }: { award: Award }) {
  return (
    <div>
      <div className="data-line" />
      <div
        style={{ borderLeft: `3px solid var(--vbx-teal)` }}
        className="px-5 md:px-8 pt-8 pb-7"
      >
        {/* Header row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-2">
          <div
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '4px',
              border: '1px solid var(--vbx-teal-tint)',
              background: 'var(--vbx-rule)',
              padding: '8px',
            }}
          >
            <Image
              src={award.logo.src}
              alt={award.logo.alt}
              width={48}
              height={48}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </div>
          <p className="font-mono text-vbx-navy-light tracking-[0.08em]" style={{ fontSize: '0.75rem' }}>
            {award.number}
          </p>
          <h2 className="font-display text-vbx-navy" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)' }}>
            {award.awardingBody}
          </h2>
          <span
            className="font-mono tracking-[0.1em] px-2 py-1"
            style={{
              fontSize: '0.625rem',
              color: 'var(--vbx-navy)',
              border: '1px solid var(--vbx-teal-tint)',
              background: 'var(--vbx-teal-tint)',
              borderRadius: '2px',
            }}
          >
            {award.badge}
          </span>
        </div>

        <p className="font-sans text-vbx-navy-light mb-5" style={{ fontSize: '1rem' }}>
          {award.title}
        </p>

        {/* Meta row */}
        <div
          className="flex flex-wrap gap-x-6 gap-y-1 mb-5 font-mono text-vbx-navy-light"
          style={{ fontSize: '0.6875rem', letterSpacing: '0.05em' }}
        >
          <span>STATUS:&nbsp;<span style={{ color: 'var(--vbx-navy)' }}>{award.status}</span></span>
          {award.vehicle && (
            <span>SOLICITATION:&nbsp;<span className="text-vbx-navy">{award.vehicle}</span></span>
          )}
          <span>AWARDED:&nbsp;<span className="text-vbx-navy">{award.awarded}</span></span>
          <span>LOCATION:&nbsp;<span className="text-vbx-navy">{award.location}</span></span>
        </div>

        {/* Scope */}
        <p
          className="font-sans text-vbx-navy-light mb-5 max-w-[760px]"
          style={{ fontSize: '0.9375rem', lineHeight: '1.7' }}
        >
          {award.scope}
        </p>

        {/* Highlights */}
        <div className="mb-5">
          <p className="font-mono text-vbx-navy-light mb-3 tracking-[0.08em]" style={{ fontSize: '0.625rem' }}>
            AWARD HIGHLIGHTS
          </p>
          <ul className="space-y-1.5">
            {award.highlights.map((h) => (
              <li
                key={h}
                className="font-sans text-vbx-navy-light flex gap-2"
                style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}
              >
                <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--vbx-navy)' }}>—</span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {award.detailHref && (
          <Link
            href={award.detailHref}
            className="font-mono text-vbx-navy hover:text-vbx-navy transition-colors"
            style={{ fontSize: '0.8125rem', letterSpacing: '0.06em' }}
          >{award.detailLabel}
          </Link>
        )}
      </div>
    </div>
  )
}

export default function AwardsPage() {
  return (
    <div className="bg-vbx-offwhite min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div className="container-wide relative">
          <p className="font-mono text-vbx-navy mb-6 tracking-[0.15em]" style={{ fontSize: '0.75rem' }}>
            State & commercial
          </p>
          <h1
            className="font-display text-vbx-navy mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1', maxWidth: '820px' }}
          >
            Contract Awards.
          </h1>
          <p
            className="font-sans text-vbx-navy-light mb-8 max-w-[680px]"
            style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}
          >
            Competitively awarded contracts and master contract vehicles held by Visionblox LLC —
            spanning statewide AI procurement, K-12 enterprise data platforms, and enterprise SAP
            integration. Each award below was won in open competition and is documented for direct
            citation in past performance and capability evaluations.
          </p>
          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href="/CapStatement_Visionblox_HC_v2.pdf"
              download
              className="btn-secondary inline-flex items-center gap-2"
              style={{ fontSize: '0.8125rem', letterSpacing: '0.08em' }}
            >
              ↓ DOWNLOAD CAPABILITY STATEMENT
            </a>
            <a
              href="mailto:services@visionblox.com?subject=Contract%20Awards%20Inquiry"
              className="btn-primary inline-flex items-center gap-2"
              style={{ fontSize: '0.8125rem', letterSpacing: '0.08em' }}
            >
              REQUEST AWARD DOCUMENTATION
            </a>
          </div>
          <p className="font-mono text-vbx-navy" style={{ fontSize: '0.8125rem', letterSpacing: '0.12em' }}>
            CAGE: 9Z4X2&nbsp;&nbsp;·&nbsp;&nbsp;UEI: H4X2Z7R9E3E3&nbsp;&nbsp;·&nbsp;&nbsp;MINORITY-OWNED&nbsp;&nbsp;·&nbsp;&nbsp;HIPAA / HITRUST / ISO 27001
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 data-line" />
      </section>

      {/* ── AGGREGATE STATS ───────────────────────────────────────────────── */}
      <section className="py-10" style={{ borderBottom: '1px solid var(--vbx-rule)' }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-vbx-teal/20">
            {[
              {
                value: String(AWARDS.length),
                label: 'Competitive Awards',
              },
              {
                value: String(AWARDS.filter((a) => a.status === 'MASTER CONTRACT VEHICLE').length),
                label: 'Statewide Master Contract Vehicle',
              },
              {
                value: String(AWARDS.filter((a) => a.status === 'ACTIVE DELIVERY').length),
                label: 'Active Delivery Engagements',
              },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-6 py-4 sm:first:pl-0 sm:last:pr-0">
                <p className="font-mono text-vbx-navy mb-1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  {stat.value}
                </p>
                <p className="font-sans text-vbx-navy-light" style={{ fontSize: '0.8125rem' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARD REGISTRY ────────────────────────────────────────────────── */}
      <section className="section-padding pt-10">
        <div className="container-wide">
          {AWARDS.map((award) => (
            <AwardCard key={award.number} award={award} />
          ))}
          <div className="data-line mt-0" />
        </div>
      </section>

      {/* ── PAGE CTA BLOCK ────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-offwhite">
        <div className="container-wide">
          <div className="data-line mb-12" />
          <div className="max-w-[720px] mx-auto text-center">
            <h2
              className="font-display text-vbx-navy mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: '1.3' }}
            >
              Need award documentation for a procurement evaluation?
            </h2>
            <p className="font-sans text-vbx-navy-light mb-10" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
              Visionblox can provide award notices, contract vehicle details, past performance
              questionnaire (PPQ) responses, and direct reference contacts for every award listed
              above. Contact our capture team to discuss your specific evaluation criteria.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:services@visionblox.com?subject=Award%20Documentation%20Request"
                className="btn-primary"
              >
                REQUEST DOCUMENTATION
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
