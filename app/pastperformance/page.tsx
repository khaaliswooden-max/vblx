'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ENGAGEMENTS, getFederalRelevanceColor, type Engagement } from '@/lib/pastPerformanceData'

// ─── Engagement Row ───────────────────────────────────────────────────────────

function EngagementRow({ eng }: { eng: Engagement }) {
  const ref = useRef<HTMLDivElement>(null)

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
        style={{
          borderLeft: '3px solid #2EA891',
          background: 'transparent',
        }}
        className="px-5 md:px-8 pt-8 pb-7"
      >
        {/* Header row */}
        <div className="flex flex-wrap items-start gap-x-6 gap-y-1 mb-2">
          <p className="font-mono text-vbx-muted tracking-[0.08em]" style={{ fontSize: '0.75rem' }}>
            {'// '}{eng.number}
          </p>
          <h2 className="font-display text-vbx-white" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)' }}>
            {eng.client}
          </h2>
        </div>

        <p className="font-sans text-vbx-muted mb-5" style={{ fontSize: '1rem' }}>
          {eng.project}
        </p>

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
          <p className="font-mono text-vbx-teal" style={{ fontSize: '0.6875rem', letterSpacing: '0.04em' }}>
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
                <span className="text-vbx-teal flex-shrink-0 mt-0.5">—</span>
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
              borderLeft: '2px solid #2EA891',
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PastPerformancePage() {
  return (
    <div className="bg-vbx-navy min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div className="container-wide relative">
          <p className="font-mono text-vbx-teal mb-6 tracking-[0.15em]" style={{ fontSize: '0.75rem' }}>
            {'// PAST PERFORMANCE // FEDERAL & SLED HEALTHCARE IT'}
          </p>
          <h1
            className="font-display text-vbx-white mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1', maxWidth: '760px' }}
          >
            Healthcare IT Past Performance Registry.
          </h1>
          <p className="font-sans text-vbx-muted mb-8 max-w-[640px]" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
            Five documented healthcare IT engagements totaling $3.3M in verified portfolio value.
            Each entry is formatted for direct reference in federal proposal past performance sections.
            Delivery depth, technical stack, quantified outcomes, and federal relevance scoring are
            provided for every engagement.
          </p>
          <p className="font-mono text-vbx-teal" style={{ fontSize: '0.8125rem', letterSpacing: '0.12em' }}>
            CAGE: 9Z4X2&nbsp;&nbsp;//&nbsp;&nbsp;UEI: H4X2Z7R9E3E3&nbsp;&nbsp;//&nbsp;&nbsp;MINORITY-OWNED&nbsp;&nbsp;//&nbsp;&nbsp;HIPAA COMPLIANT
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 data-line" />
      </section>

      {/* ── AGGREGATE STATS ───────────────────────────────────────────────── */}
      <section className="py-10" style={{ borderBottom: '1px solid rgba(46,168,145,0.15)' }}>
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-vbx-teal/20">
            {[
              { value: '$3.3M',  label: 'Healthcare Portfolio Value' },
              { value: '5',      label: 'Documented Engagements' },
              { value: '99.8%',  label: 'Peak Uptime SLA' },
              { value: '96%',    label: 'AI Document Accuracy' },
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

      {/* ── ENGAGEMENT REGISTRY ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-wide">
          {ENGAGEMENTS.map((eng) => (
            <EngagementRow key={eng.number} eng={eng} />
          ))}
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
          <p className="font-sans text-vbx-muted mb-8 max-w-[640px]" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
            Federal Relevance Scores are assigned based on direct applicability to federal and SLED
            healthcare IT procurement criteria: technical domain match, compliance framework alignment,
            scale of delivery, and recency of engagement. Scores are internal BD assessments and are
            not represented as agency ratings.
          </p>

          {/* Scoring table */}
          <div
            className="max-w-[680px]"
            style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div
              className="grid grid-cols-[80px_1fr_1fr] gap-4 px-5 py-3"
              style={{ borderBottom: '1px solid rgba(46,168,145,0.2)' }}
            >
              {['SCORE', 'DESIGNATION', 'MEANING'].map((h) => (
                <p key={h} className="font-mono text-vbx-muted tracking-[0.1em]" style={{ fontSize: '0.625rem' }}>
                  {h}
                </p>
              ))}
            </div>
            {/* Rows */}
            {[
              {
                score: '10/10',
                designation: 'PRIMARY REFERENCE',
                meaning: 'Direct match to federal evaluation criteria. Cite in all relevant proposals.',
                highlight: true,
              },
              {
                score: '9/10',
                designation: 'STRONG REFERENCE',
                meaning: 'Near-direct match. Cite with brief framing for federal applicability.',
                highlight: false,
              },
              {
                score: '8/10',
                designation: 'SUPPORTING REFERENCE',
                meaning: 'Demonstrated domain overlap. Use to reinforce primary references.',
                highlight: false,
              },
            ].map((row) => (
              <div
                key={row.score}
                className="grid grid-cols-[80px_1fr_1fr] gap-4 px-5 py-4"
                style={{
                  borderLeft: row.highlight ? '3px solid #2EA891' : '3px solid transparent',
                  borderBottom: '1px solid rgba(46,168,145,0.08)',
                }}
              >
                <p className="font-mono text-vbx-gold font-medium" style={{ fontSize: '0.875rem' }}>
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

      {/* ── NON-HEALTHCARE ENGAGEMENTS DISCLOSURE ────────────────────────── */}
      <section
        className="py-10"
        style={{ borderTop: '1px solid rgba(46,168,145,0.08)' }}
      >
        <div className="container-wide">
          <p className="font-mono text-vbx-muted mb-3 tracking-[0.1em]" style={{ fontSize: '0.75rem' }}>
            {'// ADDITIONAL ENGAGEMENTS'}
          </p>
          <p className="font-mono text-vbx-muted mb-3" style={{ fontSize: '0.8125rem', lineHeight: '1.7' }}>
            Visionblox maintains an extended portfolio of engagements across SAP, aviation,
            financial services, and government sectors. Available upon request for relevant
            procurement evaluations.
          </p>
          <a
            href="mailto:khaalis.wooden@visionblox.com?subject=Full%20Portfolio%20Request"
            className="font-mono text-vbx-teal hover:text-vbx-white transition-colors"
            style={{ fontSize: '0.8125rem', letterSpacing: '0.06em' }}
          >
            → REQUEST FULL PORTFOLIO // khaalis.wooden@visionblox.com
          </a>
        </div>
      </section>

      {/* ── PAGE CTA BLOCK ────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <div className="data-line mb-12" />
          <div className="max-w-[680px] mx-auto text-center">
            <h2
              className="font-display text-vbx-white mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: '1.3' }}
            >
              Past performance questions for a specific requirement?
            </h2>
            <p className="font-sans text-vbx-muted mb-10" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
              Visionblox can provide detailed past performance questionnaire (PPQ) responses,
              CPARS-format documentation, and direct reference contacts for all citable
              engagements. Contact our capture team to discuss your specific evaluation criteria.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:khaalis.wooden@visionblox.com?subject=Past%20Performance%20Documentation%20Request"
                className="btn-gold"
              >
                REQUEST PPQ DOCUMENTATION
              </a>
              <Link href="/solutions" className="btn-teal-outline">
                VIEW HEALTHCARE IT SOLUTIONS
              </Link>
            </div>
          </div>
          <div className="data-line mt-12" />
        </div>
      </section>

    </div>
  )
}
