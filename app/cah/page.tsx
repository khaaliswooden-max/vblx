'use client'

import { useEffect, useRef, useState } from 'react'

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

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 1500,
  decimals = 0,
  gold = false,
}: {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
  gold?: boolean
}) {
  const [current, setCurrent] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCurrent(end * ease)
      if (progress < 1) requestAnimationFrame(step)
      else setCurrent(end)
    }
    requestAnimationFrame(step)
  }, [started, end, duration])

  const display = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString()

  return (
    <span
      ref={ref}
      className="font-mono"
      style={{
        fontSize: 'clamp(2rem, 4vw, 2.75rem)',
        lineHeight: 1,
        color: gold ? '#F7B801' : '#2EA891',
      }}
    >
      {prefix}{display}{suffix}
    </span>
  )
}

// ─── Proof Bar Stats ──────────────────────────────────────────────────────────

const PROOF_STATS = [
  { end: 1377,  prefix: '',   suffix: '',    decimals: 0, label: 'CAHs in scope',                         gold: false },
  { end: 1.97,  prefix: '$',  suffix: 'M',   decimals: 2, label: 'avg annual improvement potential / facility', gold: true },
  { end: 2.3,   prefix: '~', suffix: '%',   decimals: 1, label: 'avg operating margin (sector median: −2.3%)', gold: true },
  { end: 25,    prefix: '',   suffix: '',    decimals: 0, label: 'max licensed beds — core regulatory constraint', gold: true },
]

// ─── Gap Table Data ───────────────────────────────────────────────────────────

const GAP_ROWS = [
  { metric: 'Operating Margin',  baseline: '−2.3%', target: '+0.5%', gap: '2.8 pts' },
  { metric: 'Denial Rate',       baseline: '8.7%',  target: '5.0%',  gap: '3.7 pts' },
  { metric: 'Labor Cost Ratio',  baseline: '58.2%', target: '52.0%', gap: '6.2 pts' },
]

// ─── Expertise Card Data ──────────────────────────────────────────────────────

const EXPERTISE_CARDS = [
  {
    title: 'EMR & Interoperability',
    bullets: [
      'Kaiser Permanente: Epic HealthConnect integration via SOAP/REST/Kafka. 99.8% uptime. 100K+ daily users.',
      'VCare Urgent Care: HL7 ETL pipeline, full PHI surface, microservices.',
    ],
    signals: 'HL7 · FHIR R4 · Epic · 21st Century Cures Act',
  },
  {
    title: 'Medicaid & Government Systems',
    bullets: [
      'CA DHCS CFRS: MITA-compliant Medicaid cost reporting modernization. 60% labor reduction. Real-time statewide reporting.',
    ],
    signals: 'MITA · CMS Framework · SQL Server · Azure DevOps',
  },
  {
    title: 'Healthcare AI',
    bullets: [
      'Document intelligence: 96% accuracy, 60% labor cost reduction on CA DHCS cost reporting.',
      'AI/ML stack: Python, Spark, Kafka, Scikit-learn, Keras.',
    ],
    signals: 'OCR · NLP · Predictive Analytics · Population Health',
  },
]

// ─── Engine Rows ──────────────────────────────────────────────────────────────

const ENGINE_ROWS = [
  {
    label: 'Mathematical Optimization',
    body: 'Lagrangian constrained optimization models CAH resource allocation under hard regulatory bounds: 25-bed cap, 96-hour length-of-stay limit, 35-mile distance requirement. KKT conditions define the feasibility frontier. Output: facility-specific intervention priorities with quantified margin impact.',
  },
  {
    label: 'HCRIS Data Pipeline',
    body: 'Direct ingestion of CMS Healthcare Cost Report Information System data for Washington and Montana CAH facilities. Auto-citation engine converts raw cost report line items into auditable benchmark claims — closing the translation gap between federal data and facility-level intelligence.',
  },
  {
    label: 'ARIS-2025 Architecture',
    body: 'AI-native reference architecture for CAH infrastructure: FHIR R4 interoperability layer, edge AI on Jetson Orin hardware (67–275 TOPS), Starlink LEO + SD-WAN failover, federated learning under NIST 800-53 Moderate baseline. Designed for Minimum Viable CAH Infrastructure: 1–2 IT FTE, 25/3 Mbps rural broadband, limited EHR interoperability.',
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="font-mono text-vbx-teal mb-6 tracking-[0.15em]" style={{ fontSize: '0.75rem' }}>
      {'// '}{label}
    </p>
  )
}

function ExpertiseCard({ card }: { card: typeof EXPERTISE_CARDS[0] }) {
  return (
    <div
      className="flex flex-col h-full p-6"
      style={{
        background: 'rgba(255,255,255,0.04)',
        borderLeft: '2px solid #2EA891',
        borderRadius: '2px',
      }}
    >
      <h3 className="font-sans text-vbx-white font-medium mb-4" style={{ fontSize: '1.0625rem' }}>
        {card.title}
      </h3>
      <ul className="flex flex-col gap-2 mb-4 flex-1">
        {card.bullets.map((b, i) => (
          <li key={i} className="font-sans text-vbx-muted" style={{ fontSize: '0.875rem', lineHeight: '1.65' }}>
            · {b}
          </li>
        ))}
      </ul>
      <p className="font-mono text-vbx-teal" style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}>
        {card.signals}
      </p>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CAHPage() {
  const problemRef  = useFadeIn()
  const expertiseRef = useFadeIn()
  const engineRef   = useFadeIn()
  const ctaRef      = useFadeIn()

  return (
    <div className="bg-vbx-navy min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div className="container-wide relative">
          <SectionLabel label="CRITICAL ACCESS HOSPITALS" />
          <h1
            className="font-display text-vbx-white mb-7"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', lineHeight: '1.15', maxWidth: '860px' }}
          >
            1,377 facilities.&nbsp; 44–48% operating at a loss.&nbsp;
            <span style={{ color: '#F7B801' }}>$1.97M</span> average improvement potential per facility.
          </h1>
          <p className="font-sans text-vbx-muted mb-12 max-w-[660px]" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
            Visionblox is building the computational and operational infrastructure to close that gap —
            grounded in CMS cost reports, peer-reviewed research, and AI-native architecture.
          </p>

          {/* Proof bar */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-0"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(46,168,145,0.15)',
              borderRadius: '2px',
            }}
          >
            {PROOF_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center gap-3 px-6 py-8"
                style={{
                  borderRight: i < PROOF_STATS.length - 1 ? '1px solid rgba(46,168,145,0.15)' : 'none',
                }}
              >
                <AnimatedCounter
                  end={stat.end}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  gold={stat.gold}
                />
                <span className="font-sans text-vbx-muted leading-snug max-w-[140px]" style={{ fontSize: '0.8125rem' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 data-line" />
      </section>

      {/* ── THE GAP ───────────────────────────────────────────────────────── */}
      <section className="section-padding">
        <div ref={problemRef} className="container-wide">
          <SectionLabel label="THE GAP" />

          {/* Data table */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              border: '1px solid rgba(46,168,145,0.2)',
              borderRadius: '2px',
              overflow: 'hidden',
              maxWidth: '720px',
            }}
          >
            {/* Header row */}
            {['Metric', 'Baseline', 'Target', 'Gap'].map((h) => (
              <div
                key={h}
                className="font-mono text-vbx-teal px-5 py-3"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.1em',
                  background: 'rgba(46,168,145,0.08)',
                  borderBottom: '1px solid rgba(46,168,145,0.2)',
                }}
              >
                {h.toUpperCase()}
              </div>
            ))}
            {/* Data rows */}
            {GAP_ROWS.map((row, i) => (
              <div
                key={row.metric}
                style={{
                  display: 'contents',
                }}
              >
                {[row.metric, row.baseline, row.target, row.gap].map((cell, j) => (
                  <div
                    key={j}
                    className="font-mono px-5 py-4"
                    style={{
                      fontSize: '0.875rem',
                      color: j === 0 ? '#F5F5F0' : j === 3 ? '#F7B801' : '#8892A4',
                      background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                      borderBottom: i < GAP_ROWS.length - 1 ? '1px solid rgba(46,168,145,0.1)' : 'none',
                    }}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="font-sans text-vbx-muted mt-4" style={{ fontSize: '0.6875rem', letterSpacing: '0.02em' }}>
            Source: CMS HCRIS cost reports, Flex Monitoring Team, Chartis 2025 Rural Health State of the State
          </p>
        </div>
      </section>

      {/* ── DOMAIN TRACK RECORD ───────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(46,168,145,0.1)' }}
      >
        <div ref={expertiseRef} className="container-wide">
          <SectionLabel label="DOMAIN TRACK RECORD" />
          <p className="font-sans text-vbx-muted mb-10 max-w-[680px]" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
            Before the models, the math, and the architecture — Visionblox has direct Healthcare IT delivery
            experience that maps to CAH operational challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {EXPERTISE_CARDS.map((card) => (
              <ExpertiseCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CAH TRANSFORMATION ENGINE ─────────────────────────────────────── */}
      <section className="section-padding">
        <div ref={engineRef} className="container-wide">
          <SectionLabel label="CAH TRANSFORMATION ENGINE" />
          <p className="font-sans text-vbx-muted mb-10 max-w-[680px]" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
            The CAH Transformation Engine is Visionblox&apos;s computational research framework for quantifying
            and closing the performance gap at Critical Access Hospitals.
          </p>

          <div className="flex flex-col gap-0" style={{ maxWidth: '900px' }}>
            {ENGINE_ROWS.map((row, i) => (
              <div
                key={row.label}
                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10 py-7"
                style={{
                  borderTop: '1px solid rgba(46,168,145,0.15)',
                  borderBottom: i === ENGINE_ROWS.length - 1 ? '1px solid rgba(46,168,145,0.15)' : 'none',
                }}
              >
                <p className="font-mono text-vbx-teal" style={{ fontSize: '0.8125rem', letterSpacing: '0.06em', paddingTop: '2px' }}>
                  {row.label}
                </p>
                <p className="font-sans text-vbx-muted" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
                  {row.body}
                </p>
              </div>
            ))}
          </div>

          {/* Publication callout */}
          <div
            className="mt-10 p-6"
            style={{
              background: 'rgba(46,168,145,0.06)',
              border: '1px solid rgba(46,168,145,0.2)',
              borderRadius: '2px',
              maxWidth: '720px',
            }}
          >
            <p className="font-mono text-vbx-teal mb-2" style={{ fontSize: '0.6875rem', letterSpacing: '0.1em' }}>
              PUBLISHED RESEARCH
            </p>
            <p className="font-sans text-vbx-white mb-1" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
              &ldquo;Reimagining Critical Access Hospitals: A First-Principles Approach to Rural Healthcare Sustainability&rdquo;
            </p>
            <p className="font-mono text-vbx-muted" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>
              A.K. Wooden&nbsp; · &nbsp;Visionblox LLC&nbsp; · &nbsp;SSRN Health Policy and Innovation Series, 2025
            </p>
          </div>
        </div>
      </section>

      {/* ── ENGAGE CTA ────────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(46,168,145,0.12)' }}
      >
        <div ref={ctaRef} className="container-wide">
          <div className="data-line mb-12" />
          <div className="max-w-[640px]">
            <SectionLabel label="ENGAGE" />
            <p className="font-sans text-vbx-muted mb-8" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
              Federal health IT. State Medicaid modernization. CAH infrastructure transformation.
            </p>
            <div className="flex flex-col gap-2 mb-8">
              <a
                href="mailto:khaalis.wooden@visionblox.com"
                className="font-mono text-vbx-teal hover:text-vbx-white transition-colors"
                style={{ fontSize: '0.9375rem' }}
              >
                khaalis.wooden@visionblox.com
              </a>
              <p className="font-mono text-vbx-muted" style={{ fontSize: '0.8125rem', letterSpacing: '0.06em' }}>
                CAGE: 9Z4X2&nbsp;&nbsp;|&nbsp;&nbsp;UEI: H4X2Z7R9E3E3
              </p>
              <p className="font-mono text-vbx-muted" style={{ fontSize: '0.8125rem', letterSpacing: '0.06em' }}>
                NAICS: 541511 · 541512 · 541519 · 518210
              </p>
            </div>
            <a
              href="mailto:khaalis.wooden@visionblox.com?subject=CAH%20Infrastructure%20Transformation"
              className="btn-gold"
            >
              REQUEST A BRIEFING
            </a>
          </div>
          <div className="data-line mt-12" />
        </div>
      </section>

    </div>
  )
}
