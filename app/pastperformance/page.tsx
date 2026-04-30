'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ENGAGEMENTS,
  CATEGORY_META,
  ENGAGEMENT_CATEGORIES,
  getFederalRelevanceColor,
  type Engagement,
  type EngagementCategory,
} from '@/lib/pastPerformanceData'

type Filter = 'all' | EngagementCategory

// ─── Engagement Row ───────────────────────────────────────────────────────────

function EngagementRow({ eng }: { eng: Engagement }) {
  const ref = useRef<HTMLDivElement>(null)
  const meta = CATEGORY_META[eng.category]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(12px)'
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease'
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          obs.disconnect()
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const relevanceColor = getFederalRelevanceColor(eng.federalRelevance)

  return (
    <div ref={ref}>
      <div className="data-line" />
      <div
        style={{ borderLeft: `3px solid ${meta.color}`, background: 'transparent' }}
        className="px-5 md:px-8 pt-8 pb-7"
      >
        {/* Header row */}
        <div className="flex flex-wrap items-start gap-x-6 gap-y-2 mb-2">
          <p className="font-mono text-vbx-muted tracking-[0.08em]" style={{ fontSize: '0.75rem' }}>
            {'// '}{eng.number}
          </p>
          <h2 className="font-display text-vbx-white" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)' }}>
            {eng.client}
          </h2>
          <span
            className="font-mono tracking-[0.1em] px-2 py-1"
            style={{
              fontSize: '0.625rem',
              color: meta.color,
              border: `1px solid ${meta.color}55`,
              background: `${meta.color}10`,
              borderRadius: '2px',
            }}
          >
            {meta.shortLabel}
          </span>
        </div>

        <p className="font-sans text-vbx-muted mb-5" style={{ fontSize: '1rem' }}>
          {eng.project}
        </p>

        {/* Meta row: contract value · period · location */}
        <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4 font-mono text-vbx-muted" style={{ fontSize: '0.6875rem', letterSpacing: '0.05em' }}>
          <span>TCV:&nbsp;<span className="text-vbx-white">{eng.contractValue}</span></span>
          <span>PERIOD:&nbsp;<span className="text-vbx-white">{eng.period}</span></span>
          <span>LOCATION:&nbsp;<span className="text-vbx-white">{eng.location}</span></span>
        </div>

        <p className="font-mono mb-4" style={{ fontSize: '0.75rem', letterSpacing: '0.06em' }}>
          FEDERAL RELEVANCE SCORE:&nbsp;
          <span style={{ color: relevanceColor, fontSize: '0.9rem' }}>
            {eng.federalRelevance}/10
          </span>
        </p>

        <p className="font-mono text-vbx-muted mb-5" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>
          PRIMARY PERSONNEL:&nbsp;&nbsp;{eng.personnel.join(' · ')}
        </p>

        {/* Tech stack */}
        <div className="mb-5">
          <p className="font-mono text-vbx-muted mb-2 tracking-[0.08em]" style={{ fontSize: '0.625rem' }}>
            TECHNOLOGY STACK
          </p>
          <p className="font-mono" style={{ fontSize: '0.6875rem', letterSpacing: '0.04em', color: meta.color }}>
            {eng.stack.join(' · ')}
          </p>
        </div>

        {/* Outcomes */}
        <div className="mb-5">
          <p className="font-mono text-vbx-muted mb-3 tracking-[0.08em]" style={{ fontSize: '0.625rem' }}>
            OUTCOMES
          </p>
          <ul className="space-y-1.5">
            {eng.outcomes.map((o) => (
              <li key={o} className="font-sans text-vbx-muted flex gap-2" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                <span className="flex-shrink-0 mt-0.5" style={{ color: meta.color }}>—</span>
                {o}
              </li>
            ))}
          </ul>
        </div>

        {/* Federal Applicability */}
        <div className="mb-5">
          <p className="font-mono text-vbx-muted mb-2 tracking-[0.08em]" style={{ fontSize: '0.625rem' }}>
            FEDERAL APPLICABILITY
          </p>
          <p
            className="font-sans text-vbx-muted italic pl-3"
            style={{
              fontSize: '0.9375rem',
              lineHeight: '1.7',
              borderLeft: `2px solid ${meta.color}`,
            }}
          >
            {eng.federalApplicability}
          </p>
        </div>

        {/* Link */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={`/pastperformance/${eng.slug}`}
            className="font-mono text-vbx-teal hover:text-vbx-white transition-colors self-end"
            style={{ fontSize: '0.8125rem', letterSpacing: '0.06em' }}
          >
            → Read Full Engagement Detail
          </Link>
        </div>
      </div>
    </div>
  )
}

// ─── Category Filter Bar ──────────────────────────────────────────────────────

function CategoryFilter({
  active,
  onChange,
  counts,
}: {
  active: Filter
  onChange: (f: Filter) => void
  counts: Record<Filter, number>
}) {
  const tabs: { id: Filter; label: string; color?: string }[] = [
    { id: 'all', label: 'ALL ENGAGEMENTS' },
    ...ENGAGEMENT_CATEGORIES
      .filter((id) => counts[id] > 0)
      .map((id) => ({
        id,
        label: CATEGORY_META[id].shortLabel,
        color: CATEGORY_META[id].color,
      })),
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = active === tab.id
        const accent = tab.color ?? '#2EA891'
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className="font-mono transition-colors"
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.1em',
              padding: '0.5rem 0.875rem',
              borderRadius: '2px',
              border: `1px solid ${isActive ? accent : 'rgba(255,255,255,0.12)'}`,
              background: isActive ? `${accent}18` : 'transparent',
              color: isActive ? accent : 'rgba(255,255,255,0.65)',
            }}
          >
            {tab.label}
            <span className="ml-2 opacity-60">({counts[tab.id]})</span>
          </button>
        )
      })}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PastPerformancePage() {
  const [filter, setFilter] = useState<Filter>('all')

  const counts = useMemo(() => {
    const c: Record<Filter, number> = { all: ENGAGEMENTS.length } as Record<Filter, number>
    for (const cat of ENGAGEMENT_CATEGORIES) {
      c[cat] = ENGAGEMENTS.filter((e) => e.category === cat).length
    }
    return c
  }, [])

  const filtered = useMemo(() => {
    if (filter === 'all') return ENGAGEMENTS
    return ENGAGEMENTS.filter((e) => e.category === filter)
  }, [filter])

  // Aggregate stats reflect the full IT services portfolio, not just healthcare.
  const stats = useMemo(() => {
    const totalNumeric = ENGAGEMENTS.reduce((sum, e) => {
      const n = Number(e.contractValue.replace(/[^0-9.]/g, ''))
      return Number.isFinite(n) ? sum + n : sum
    }, 0)
    const millions = Math.round(totalNumeric / 100000) / 10 // one decimal in $M
    return {
      tcv: millions > 0 ? `$${millions}M+` : '$15M+',
      count: ENGAGEMENTS.length,
      categories: new Set(ENGAGEMENTS.map((e) => e.category)).size,
    }
  }, [])

  const activeMeta = filter === 'all' ? null : CATEGORY_META[filter]

  return (
    <div className="bg-vbx-navy min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div className="container-wide relative">
          <p className="font-mono text-vbx-teal mb-6 tracking-[0.15em]" style={{ fontSize: '0.75rem' }}>
            {'// PAST PERFORMANCE // IT SERVICES PORTFOLIO // FEDERAL & SLED'}
          </p>
          <h1
            className="font-display text-vbx-white mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1', maxWidth: '820px' }}
          >
            IT Services Past Performance Registry.
          </h1>
          <p className="font-sans text-vbx-muted mb-8 max-w-[680px]" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
            Documented IT services engagements across healthcare modernization, enterprise SAP, government &
            SLED workflow systems, financial services, data &amp; AI/ML, cloud migration, security &amp;
            compliance audit, and aviation. Every entry is formatted for direct citation in federal proposal
            past performance volumes — delivery scope, technical stack, quantified outcomes, and federal
            relevance scoring included.
          </p>
          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href="/CapStatement_Visionblox_HC_v2.pdf"
              download
              className="btn-teal-outline inline-flex items-center gap-2"
              style={{ fontSize: '0.8125rem', letterSpacing: '0.08em' }}
            >
              ↓ DOWNLOAD CAPABILITY STATEMENT
            </a>
            <a
              href="mailto:khaalis.wooden@visionblox.com?subject=IT%20Services%20Portfolio%20Request"
              className="btn-gold inline-flex items-center gap-2"
              style={{ fontSize: '0.8125rem', letterSpacing: '0.08em' }}
            >
              REQUEST FULL PORTFOLIO BRIEF
            </a>
          </div>
          <p className="font-mono text-vbx-teal" style={{ fontSize: '0.8125rem', letterSpacing: '0.12em' }}>
            CAGE: 9Z4X2&nbsp;&nbsp;//&nbsp;&nbsp;UEI: H4X2Z7R9E3E3&nbsp;&nbsp;//&nbsp;&nbsp;MINORITY-OWNED&nbsp;&nbsp;//&nbsp;&nbsp;HIPAA / HITRUST / ISO 27001
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 data-line" />
      </section>

      {/* ── AGGREGATE STATS ───────────────────────────────────────────────── */}
      <section className="py-10" style={{ borderBottom: '1px solid rgba(46,168,145,0.15)' }}>
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-vbx-teal/20">
            {[
              { value: stats.tcv,                  label: 'IT Services Portfolio Value' },
              { value: String(stats.count),        label: 'Documented Engagements' },
              { value: String(stats.categories),   label: 'Service Categories' },
              { value: '99.8%',                    label: 'Peak Uptime SLA Delivered' },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-6 py-4 first:pl-0 last:pr-0">
                <p className="font-mono text-vbx-teal mb-1" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  {stat.value}
                </p>
                <p className="font-sans text-vbx-muted" style={{ fontSize: '0.8125rem' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ───────────────────────────────────────────────── */}
      <section className="pt-12 pb-2">
        <div className="container-wide">
          <p className="font-mono text-vbx-teal mb-4 tracking-[0.12em]" style={{ fontSize: '0.75rem' }}>
            {'// FILTER BY SERVICE CATEGORY'}
          </p>
          <CategoryFilter active={filter} onChange={setFilter} counts={counts} />
          {activeMeta && (
            <p
              className="font-sans text-vbx-muted mt-5 max-w-[720px] pl-3"
              style={{
                fontSize: '0.9375rem',
                lineHeight: '1.7',
                borderLeft: `2px solid ${activeMeta.color}`,
              }}
            >
              <span className="font-mono tracking-[0.08em]" style={{ color: activeMeta.color, fontSize: '0.75rem' }}>
                {activeMeta.label.toUpperCase()}
              </span>
              <br />
              {activeMeta.description}
            </p>
          )}
        </div>
      </section>

      {/* ── ENGAGEMENT REGISTRY ───────────────────────────────────────────── */}
      <section className="section-padding pt-10">
        <div className="container-wide">
          {filtered.length === 0 ? (
            <p className="font-mono text-vbx-muted py-12 text-center" style={{ fontSize: '0.875rem' }}>
              No engagements documented in this category yet.
            </p>
          ) : (
            filtered.map((eng) => <EngagementRow key={eng.number} eng={eng} />)
          )}
          <div className="data-line mt-0" />
        </div>
      </section>

      {/* ── FEDERAL RELEVANCE SCORING LEGEND ─────────────────────────────── */}
      <section
        className="py-14"
        style={{ background: 'rgba(255,255,255,0.025)', borderTop: '1px solid rgba(46,168,145,0.12)' }}
      >
        <div className="container-wide">
          <p className="font-mono text-vbx-teal mb-5 tracking-[0.12em]" style={{ fontSize: '0.8125rem' }}>
            {'// SCORING METHODOLOGY'}
          </p>
          <p className="font-sans text-vbx-muted mb-8 max-w-[680px]" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
            Federal Relevance Scores are assigned based on direct applicability to federal and SLED IT
            services procurement criteria: technical domain match, compliance framework alignment, scale of
            delivery, and recency of engagement. Scores are internal BD assessments and are not represented
            as agency ratings.
          </p>

          <div
            className="max-w-[720px]"
            style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '2px', overflow: 'hidden' }}
          >
            <div
              className="grid grid-cols-[80px_1fr_1.4fr] gap-4 px-5 py-3"
              style={{ borderBottom: '1px solid rgba(46,168,145,0.2)' }}
            >
              {['SCORE', 'DESIGNATION', 'MEANING'].map((h) => (
                <p key={h} className="font-mono text-vbx-muted tracking-[0.1em]" style={{ fontSize: '0.625rem' }}>
                  {h}
                </p>
              ))}
            </div>
            {[
              {
                score: '10/10',
                designation: 'PRIMARY REFERENCE',
                meaning: 'Direct match to federal evaluation criteria. Cite in all relevant proposals.',
                color: '#2EA891',
                highlight: true,
              },
              {
                score: '9/10',
                designation: 'STRONG REFERENCE',
                meaning: 'Near-direct match. Cite with brief framing for federal applicability.',
                color: '#F7B801',
                highlight: false,
              },
              {
                score: '8/10',
                designation: 'SUPPORTING REFERENCE',
                meaning: 'Demonstrated domain overlap. Use to reinforce primary references.',
                color: '#F97316',
                highlight: false,
              },
              {
                score: '7/10',
                designation: 'CONTEXTUAL REFERENCE',
                meaning: 'Adjacent technical depth. Cite to demonstrate breadth of IT services delivery.',
                color: '#94A3B8',
                highlight: false,
              },
            ].map((row) => (
              <div
                key={row.score}
                className="grid grid-cols-[80px_1fr_1.4fr] gap-4 px-5 py-4"
                style={{
                  borderLeft: row.highlight ? `3px solid ${row.color}` : '3px solid transparent',
                  borderBottom: '1px solid rgba(46,168,145,0.08)',
                }}
              >
                <p className="font-mono font-medium" style={{ fontSize: '0.875rem', color: row.color }}>
                  {row.score}
                </p>
                <p className="font-mono text-vbx-white" style={{ fontSize: '0.75rem', letterSpacing: '0.04em' }}>
                  {row.designation}
                </p>
                <p className="font-sans text-vbx-muted" style={{ fontSize: '0.8125rem', lineHeight: '1.6' }}>
                  {row.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXTENDED PORTFOLIO DISCLOSURE ────────────────────────────────── */}
      <section className="py-10" style={{ borderTop: '1px solid rgba(46,168,145,0.08)' }}>
        <div className="container-wide">
          <p className="font-mono text-vbx-muted mb-3 tracking-[0.1em]" style={{ fontSize: '0.75rem' }}>
            {'// EXTENDED PORTFOLIO'}
          </p>
          <p className="font-mono text-vbx-muted mb-3" style={{ fontSize: '0.8125rem', lineHeight: '1.7' }}>
            Visionblox maintains additional documented engagements across retail / supply chain, education,
            insurance, and global manufacturing not listed above. Detailed past-performance write-ups,
            CPARS-format documentation, and direct reference contacts are available for relevant
            procurement evaluations on request.
          </p>
          <a
            href="mailto:khaalis.wooden@visionblox.com?subject=Full%20Portfolio%20Request"
            className="font-mono text-vbx-teal hover:text-vbx-white transition-colors"
            style={{ fontSize: '0.8125rem', letterSpacing: '0.06em' }}
          >
            → REQUEST EXTENDED PORTFOLIO // khaalis.wooden@visionblox.com
          </a>
        </div>
      </section>

      {/* ── PAGE CTA BLOCK ────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <div className="data-line mb-12" />
          <div className="max-w-[720px] mx-auto text-center">
            <h2
              className="font-display text-vbx-white mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: '1.3' }}
            >
              Past performance questions for a specific IT services requirement?
            </h2>
            <p className="font-sans text-vbx-muted mb-10" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
              Visionblox can provide detailed past performance questionnaire (PPQ) responses, CPARS-format
              documentation, and direct reference contacts for all citable engagements across our IT services
              portfolio. Contact our capture team to discuss your specific evaluation criteria.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:khaalis.wooden@visionblox.com?subject=Past%20Performance%20Documentation%20Request"
                className="btn-gold"
              >
                REQUEST PPQ DOCUMENTATION
              </a>
              <Link href="/solutions" className="btn-teal-outline">
                VIEW IT SERVICES SOLUTIONS
              </Link>
            </div>
          </div>
          <div className="data-line mt-12" />
        </div>
      </section>

    </div>
  )
}
