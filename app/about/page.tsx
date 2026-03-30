'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import LeadershipSection from '@/components/sections/Leadership'

// ─── Fade-in hook ─────────────────────────────────────────────────────────────

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(14px)'
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          obs.disconnect()
        }
      },
      { threshold: 0.07 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

// ─── Contrast Table ───────────────────────────────────────────────────────────

const CONTRAST_ROWS = [
  { left: '20+ service categories',          right: '5 healthcare IT domains' },
  { left: 'Generic "healthcare experience"', right: '$3.3M documented delivery' },
  { left: 'Cited HIPAA compliance',          right: 'HITRUST-audited staff on team' },
  { left: 'Commercial IT portfolio',         right: 'Federal-analog past performance' },
  { left: 'Staffing augmentation model',     right: 'Direct delivery, named personnel' },
  { left: 'Broad NAICS targeting',           right: 'Healthcare-specific set-aside pursuit' },
]

function ContrastTable() {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        className="grid grid-cols-[1fr_auto_1fr] gap-2 px-5 py-3"
        style={{ borderBottom: '1px solid rgba(46,168,145,0.2)' }}
      >
        <p className="font-mono text-vbx-muted tracking-[0.08em]" style={{ fontSize: '0.625rem' }}>
          GENERALIST IT FIRM
        </p>
        <p className="font-mono text-vbx-teal tracking-[0.08em] text-center" style={{ fontSize: '0.625rem' }}>
          {'//'}
        </p>
        <p className="font-mono text-vbx-white tracking-[0.08em]" style={{ fontSize: '0.625rem' }}>
          VISIONBLOX
        </p>
      </div>
      {/* Rows */}
      {CONTRAST_ROWS.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-[1fr_auto_1fr] gap-2 px-5 py-3"
          style={{
            background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)',
            borderBottom: i < CONTRAST_ROWS.length - 1 ? '1px solid rgba(46,168,145,0.06)' : 'none',
          }}
        >
          <p className="font-mono text-vbx-muted" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
            {row.left}
          </p>
          <p className="font-mono text-vbx-teal text-center" style={{ fontSize: '0.75rem' }}>
            {'//'}
          </p>
          <p className="font-mono text-vbx-white" style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
            {row.right}
          </p>
        </div>
      ))}
    </div>
  )
}

// ─── Credential Column ────────────────────────────────────────────────────────

function CredField({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="mb-4">
      <p className="font-mono text-vbx-muted mb-0.5 tracking-[0.1em]" style={{ fontSize: '0.6875rem' }}>
        {label}
      </p>
      <p className="font-mono text-vbx-white" style={{ fontSize: '0.875rem' }}>
        {value}
      </p>
    </div>
  )
}

// ─── Rationale Block ─────────────────────────────────────────────────────────

function RationaleBlock({
  num, label, headline, body,
}: { num: string; label: string; headline: string; body: string }) {
  const ref = useFadeIn()
  return (
    <div
      ref={ref}
      style={{
        borderLeft: '3px solid #2EA891',
        padding: '28px 24px',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '2px',
      }}
    >
      <p className="font-mono text-vbx-teal mb-3 tracking-[0.1em]" style={{ fontSize: '0.6875rem' }}>
        {num} {label}
      </p>
      <h3 className="font-display text-vbx-white mb-3" style={{ fontSize: '1.25rem', lineHeight: '1.3' }}>
        {headline}
      </h3>
      <p className="font-sans text-vbx-muted" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
        {body}
      </p>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const heroRef    = useRef<HTMLDivElement>(null)
  const missionRef = useFadeIn()
  const whatRef    = useFadeIn()
  const credRef    = useFadeIn()
  const footprintRef = useFadeIn()

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(16px)'
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
    requestAnimationFrame(() => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    })
  }, [])

  return (
    <div className="bg-vbx-navy min-h-screen">

      {/* ── SECTION 1: HERO ───────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div className="container-wide relative" ref={heroRef}>
          <p className="font-mono text-vbx-teal mb-6 tracking-[0.15em]" style={{ fontSize: '0.75rem' }}>
            {'// ABOUT VISIONBLOX // HEALTHCARE IT // FEDERAL & SLED'}
          </p>
          <h1
            className="font-display text-vbx-white mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1', maxWidth: '820px' }}
          >
            The Healthcare IT Infrastructure Firm for Federal &amp; SLED.
          </h1>
          <p className="font-sans text-vbx-muted mb-8 max-w-[640px]" style={{ fontSize: '1.0625rem', lineHeight: '1.8' }}>
            Visionblox LLC is a minority-owned federal contractor specializing exclusively in
            healthcare IT infrastructure — patient portal systems, Medicaid modernization, EMR
            integration, healthcare AI, and compliance architecture for federal agencies and state
            health authorities. Our team has delivered $3.3M in documented healthcare IT
            engagements at Kaiser Permanente, California DHCS, and VCare Urgent Care.
          </p>
          <p className="font-mono text-vbx-teal" style={{ fontSize: '0.8125rem', letterSpacing: '0.12em' }}>
            CAGE: 9Z4X2&nbsp;&nbsp;//&nbsp;&nbsp;UEI: H4X2Z7R9E3E3&nbsp;&nbsp;//&nbsp;&nbsp;MINORITY-OWNED&nbsp;&nbsp;//&nbsp;&nbsp;GSA MAS
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 data-line" />
      </section>

      {/* ── SECTION 2: MISSION STATEMENT ──────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-[720px] mx-auto text-center" ref={missionRef}>
            <blockquote
              className="font-display text-vbx-white mb-10"
              style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.125rem)', lineHeight: '1.4' }}
            >
              &ldquo;Healthcare data infrastructure is not a technology problem. It is a
              governance problem. We build the systems that make governance possible.&rdquo;
            </blockquote>
            <div className="space-y-5 text-left">
              {[
                'Every engagement Visionblox accepts begins with one question: what does the institution need to see in order to govern its data? From that answer, we build the integration layer, the compliance architecture, and the data pipelines that make it visible and auditable.',
                'We have done this for a state Medicaid authority operating under CMS federal standards. We have done this for one of the largest integrated healthcare networks in the country. We have done this for a Fortune 500 health insurer processing millions of claims per day.',
                'We are prepared to do it for the federal agencies and state authorities evaluating us for their next contract.',
              ].map((p, i) => (
                <p key={i} className="font-sans text-vbx-muted text-center" style={{ fontSize: '1.0625rem', lineHeight: '1.8' }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="data-line mt-16" />
      </section>

      {/* ── SECTION 3: WHAT WE ARE ────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-wide" ref={whatRef}>
          <p className="font-mono text-vbx-teal mb-4 tracking-[0.12em]" style={{ fontSize: '0.8125rem' }}>
            {'// 01 WHAT WE ARE'}
          </p>
          <h2 className="font-display text-vbx-white mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            A Healthcare IT Firm. Not a Generalist Shop.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left column */}
            <div className="space-y-5">
              {[
                'Visionblox made a deliberate strategic decision to focus our federal and SLED pursuit exclusively on healthcare IT. Not because it is the only domain where our team has delivered — it is not — but because it is the domain where our delivery record is deepest, our staff credentials are most concentrated, and the federal procurement landscape rewards specificity over breadth.',
                'A firm that claims expertise across 20 service categories cannot credibly claim healthcare IT specialization to a source selection board. We can. Our past performance, our technical staff, our compliance posture, and our capture strategy are all organized around a single vertical.',
                'That is the firm that wins healthcare IT contracts.',
              ].map((p, i) => (
                <p key={i} className="font-sans text-vbx-muted" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                  {p}
                </p>
              ))}
            </div>

            {/* Right column — contrast table */}
            <ContrastTable />
          </div>
        </div>
        <div className="data-line mt-16" />
      </section>

      {/* ── SECTION 4: COMPANY CREDENTIALS ───────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: 'rgba(255,255,255,0.02)' }}
      >
        <div className="container-wide" ref={credRef}>
          <p className="font-mono text-vbx-teal mb-4 tracking-[0.12em]" style={{ fontSize: '0.8125rem' }}>
            {'// 02 COMPANY CREDENTIALS'}
          </p>
          <h2 className="font-display text-vbx-white mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            Federal Identity &amp; Compliance Posture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Column 1 — Federal Identity */}
            <div
              style={{
                borderLeft: '2px solid rgba(46,168,145,0.3)',
                paddingLeft: '1.5rem',
              }}
            >
              <p className="font-mono text-vbx-teal mb-5 tracking-[0.1em]" style={{ fontSize: '0.6875rem' }}>
                FEDERAL IDENTITY
              </p>
              <CredField label="ENTITY NAME"       value="Visionblox LLC" />
              <CredField label="CAGE CODE"          value="9Z4X2" />
              <CredField label="UEI"                value="H4X2Z7R9E3E3" />
              <CredField label="NAICS CODES"        value={
                <span>541511&nbsp;&nbsp;·&nbsp;&nbsp;541512&nbsp;&nbsp;·&nbsp;&nbsp;541519&nbsp;&nbsp;·&nbsp;&nbsp;518210</span>
              } />
              <CredField label="CONTRACT VEHICLES"  value={
                <span>GSA MAS Springboard&nbsp;&nbsp;·&nbsp;&nbsp;Set-Aside Eligible</span>
              } />
            </div>

            {/* Column 2 — Business Designations */}
            <div
              style={{
                borderLeft: '2px solid rgba(46,168,145,0.3)',
                paddingLeft: '1.5rem',
              }}
            >
              <p className="font-mono text-vbx-teal mb-5 tracking-[0.1em]" style={{ fontSize: '0.6875rem' }}>
                BUSINESS DESIGNATIONS
              </p>
              <CredField label="MINORITY-OWNED SMALL BUSINESS" value="Certified MBE" />
              <CredField label="SDVOSB ELIGIBLE"              value="Service-Connected Disabled Veteran Leadership" />
              <CredField label="WOSB TEAMING AVAILABLE"       value="Via AG Grace (active teaming partner)" />
              <CredField label="HEADQUARTERS"                  value="San Jose, CA  ·  Est. 2020" />
            </div>

            {/* Column 3 — Compliance & Security */}
            <div
              style={{
                borderLeft: '2px solid rgba(46,168,145,0.3)',
                paddingLeft: '1.5rem',
              }}
            >
              <p className="font-mono text-vbx-teal mb-5 tracking-[0.1em]" style={{ fontSize: '0.6875rem' }}>
                COMPLIANCE &amp; SECURITY POSTURE
              </p>
              {[
                { label: 'HIPAA',           value: 'Direct delivery — 4 healthcare clients' },
                { label: 'HITRUST CSF',     value: 'Third-party audit staff on team' },
                { label: 'MITA',            value: 'CA DHCS delivery — CMS standard' },
                { label: 'SECTION 508/ADA', value: 'Direct delivery — KP Appointment Center' },
                { label: 'FEDRAMP-AWARE',   value: 'AWS GovCloud / Azure Gov architecture' },
                { label: 'FISMA ALIGNMENT', value: 'NIST RMF security architecture' },
                { label: 'SOC 2 TYPE II',   value: '' },
                { label: 'ISO 27001',       value: '' },
              ].map((item) => (
                <div key={item.label} className="mb-3">
                  <p className="font-mono text-vbx-muted tracking-[0.08em]" style={{ fontSize: '0.625rem' }}>
                    {item.label}
                  </p>
                  {item.value && (
                    <p className="font-mono text-vbx-white" style={{ fontSize: '0.8125rem' }}>
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
        <div className="data-line mt-16" />
      </section>

      {/* ── SECTION 5: LEADERSHIP ─────────────────────────────────────────── */}
      <LeadershipSection />

      {/* ── SECTION 6: DELIVERY FOOTPRINT ────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: 'rgba(255,255,255,0.02)' }}
      >
        <div className="container-wide" ref={footprintRef}>
          <p className="font-mono text-vbx-teal mb-4 tracking-[0.12em]" style={{ fontSize: '0.8125rem' }}>
            {'// 04 DELIVERY FOOTPRINT'}
          </p>
          <h2 className="font-display text-vbx-white mb-6" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
            Where We Deliver
          </h2>
          <p className="font-sans text-vbx-muted mb-10 max-w-[680px]" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            Visionblox operates across four locations with on-site and remote delivery capacity
            for federal and SLED healthcare IT engagements. On-site delivery has been executed
            at California DHCS (Sacramento) and Kaiser Permanente (Northern California). Remote
            delivery operates across all active engagements.
          </p>

          <div className="space-y-0 max-w-[640px]">
            {[
              { city: 'SAN JOSE, CA',     role: 'HEADQUARTERS',             note: 'PRIMARY FEDERAL BD' },
              { city: 'PHILADELPHIA, PA', role: 'EAST COAST DELIVERY',      note: 'FEDERAL REGION III' },
              { city: 'HUNTSVILLE, AL',   role: 'FEDERAL DELIVERY HUB',     note: 'FEDERAL REGION IV' },
              { city: 'CHENNAI, INDIA',   role: 'ENGINEERING & DATA OPS',   note: '' },
            ].map((loc, i) => (
              <div
                key={loc.city}
                className="grid grid-cols-[160px_1fr] gap-4 py-3"
                style={{ borderBottom: i < 3 ? '1px solid rgba(46,168,145,0.08)' : 'none' }}
              >
                <p className="font-mono text-vbx-white" style={{ fontSize: '0.8125rem', letterSpacing: '0.04em' }}>
                  {loc.city}
                </p>
                <p className="font-mono text-vbx-muted" style={{ fontSize: '0.8125rem', letterSpacing: '0.04em' }}>
                  {'// '}{loc.role}
                  {loc.note && <span className="text-vbx-teal">&nbsp;&nbsp;{'// '}&nbsp;&nbsp;{loc.note}</span>}
                </p>
              </div>
            ))}
          </div>

          <p className="font-mono text-vbx-muted mt-8" style={{ fontSize: '0.75rem', letterSpacing: '0.08em' }}>
            {'// ON-SITE DELIVERY AVAILABLE FOR FEDERAL & SLED HEALTHCARE ENGAGEMENTS'}
          </p>
        </div>
        <div className="data-line mt-16" />
      </section>

      {/* ── SECTION 7: PROCUREMENT RATIONALE ─────────────────────────────── */}
      <section className="section-padding">
        <div className="container-wide">
          <p className="font-mono text-vbx-teal mb-4 tracking-[0.12em]" style={{ fontSize: '0.8125rem' }}>
            {'// 05 PROCUREMENT RATIONALE'}
          </p>
          <h2 className="font-display text-vbx-white mb-10" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            The Case for Visionblox
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RationaleBlock
              num="01"
              label="PAST PERFORMANCE"
              headline="Healthcare IT at Federal-Analog Scale"
              body="$3.3M in documented healthcare delivery across Kaiser Permanente (commercial federal analog — 100K+ daily users, Epic integration, Cures Act compliance) and California DHCS (MITA-compliant, CMS standard, $2.1M direct award). These are not adjacent-industry references. They are healthcare IT references."
            />
            <RationaleBlock
              num="02"
              label="SET-ASIDE ACCESS"
              headline="Minority-Owned + SDVOSB Leadership + WOSB Teaming"
              body="Minority-Owned Small Business with Service-Connected Disabled Veteran leadership and an active WOSB teaming relationship via AG Grace. Three set-aside pathways for healthcare RFPs that include small business evaluation factors."
            />
            <RationaleBlock
              num="03"
              label="TECHNICAL STAFF"
              headline="Named Personnel with Verifiable Healthcare Credentials"
              body="Every technical capability claim on this site is anchored to a named individual with documented delivery history. Epic integration: Akil Chellam — Kaiser Permanente, 4 years. MITA compliance: Saravanan Swaminathan — CA DHCS, on-site. HITRUST security: Tony Paul — global healthcare audit, Wipro."
            />
            <RationaleBlock
              num="04"
              label="STRATEGIC FOCUS"
              headline="One Vertical. Full Depth."
              body="Visionblox does not pursue healthcare IT alongside 19 other service categories. It is the primary federal and SLED capture vertical. That focus produces deeper technical preparation, more relevant teaming relationships, and stronger past performance alignment than a generalist firm pursuing healthcare as one of many tracks."
            />
          </div>
        </div>
        <div className="data-line mt-16" />
      </section>

      {/* ── SECTION 8: CTA ────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <div className="max-w-[700px] mx-auto text-center">
            <h2
              className="font-display text-vbx-white mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: '1.3' }}
            >
              If you are evaluating Visionblox for a healthcare IT requirement, we are prepared to respond.
            </h2>
            <p className="font-sans text-vbx-muted mb-10" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
              We provide capability briefings, CPARS-format past performance documentation, and
              technical staff résumés for active federal and SLED procurement evaluations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:khaalis.wooden@visionblox.com?subject=Healthcare%20IT%20Capability%20Briefing"
                className="btn-gold"
              >
                REQUEST A CAPABILITY BRIEFING
              </a>
              <Link href="/pastperformance" className="btn-teal-outline">
                VIEW PAST PERFORMANCE REGISTER
              </Link>
            </div>
            <p className="font-mono text-vbx-muted" style={{ fontSize: '0.8125rem', letterSpacing: '0.08em' }}>
              KHAALIS WOODEN&nbsp;&nbsp;//&nbsp;&nbsp;(256) 988-1130&nbsp;&nbsp;//&nbsp;&nbsp;KHAALIS.WOODEN@VISIONBLOX.COM
            </p>
          </div>
          <div className="data-line mt-16" />
        </div>
      </section>

    </div>
  )
}
