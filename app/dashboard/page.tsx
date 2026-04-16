'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

// ─── Fade-in hook ─────────────────────────────────────────────────────────────

function useFadeIn(delay = 0) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(14px)'
    el.style.transition = `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`
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
  }, [delay])
  return ref
}

// ─── Static Data ──────────────────────────────────────────────────────────────

// Source: CMS Provider of Services (POS) file, FY2024
const SUMMARY_STATS = [
  { value: '1,377', label: 'CAHs in scope', gold: false },
  { value: '44–48%', label: 'operating at a loss', gold: true },
  { value: '$1.97M', label: 'avg improvement / facility', gold: true },
  { value: '−2.3%', label: 'sector median margin', gold: true },
]

const GAP_ROWS = [
  { metric: 'Operating Margin', baseline: '−2.3%', target: '+0.5%', gap: '2.8 pts' },
  { metric: 'Denial Rate', baseline: '8.7%', target: '5.0%', gap: '3.7 pts' },
  { metric: 'Labor Cost Ratio', baseline: '58.2%', target: '52.0%', gap: '6.2 pts' },
]

const SCORE_COMPONENTS = [
  { label: 'Financial Index (FI)', weight: 30, color: '#F7B801', metrics: ['Op. Margin Δ', 'Denial Rate', 'Labor/Rev Ratio'] },
  { label: 'Clinical Quality (QI)', weight: 30, color: '#2EA891', metrics: ['MBQIP %ile', 'Readmit Rate', 'HCAHPS'] },
  { label: 'Operational Efficiency (OI)', weight: 20, color: '#4A90D9', metrics: ['Occupancy', 'LOS', 'ED Throughput'] },
  { label: 'Workforce Index (WI)', weight: 10, color: '#8e44ad', metrics: ['FTE Adequacy', 'Travel RN %', 'Pipeline'] },
  { label: 'Confidence Index (CI)', weight: 10, color: '#C0392B', metrics: ['±15% CI', 'Transferability', 'Payer Sensitivity'] },
]

const PROBLEM_CLASSES = [
  { cls: 'CLASS 1', title: 'Financial Structure Prediction', type: 'Type A', status: 'Active', source: 'CMS HCRIS / MBQIP', color: '#232D5A' },
  { cls: 'CLASS 2', title: 'Clinical Quality Optimization', type: 'Type A', status: 'Active', source: 'MBQIP / Hospital Compare', color: '#2EA891' },
  { cls: 'CLASS 3', title: 'Operational Architecture', type: 'Type B', status: 'In Progress', source: 'Prospective pilot', color: '#2EA891' },
  { cls: 'CLASS 4', title: 'Workforce & Staffing Architecture', type: 'Type B', status: 'Scoped', source: 'HRSA AHRF / Flex Monitoring', color: '#8e44ad' },
  { cls: 'CLASS 5', title: 'Solution Confidence Estimation', type: 'Type B', status: 'Scoped', source: 'Monte Carlo / HCRIS variance', color: '#C0392B' },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ label }: { label: string }) {
  return (
    <p className="font-mono text-vbx-teal mb-6 tracking-[0.15em]" style={{ fontSize: '0.75rem' }}>
      {'// '}{label}
    </p>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const heroRef = useFadeIn(0)
  const kpiRef = useFadeIn(100)
  const scoreRef = useFadeIn(200)
  const classRef = useFadeIn(300)
  const citationRef = useFadeIn(400)

  return (
    <div className="bg-vbx-navy min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div ref={heroRef} className="container-wide relative">
          <SectionLabel label="CAH PERFORMANCE DASHBOARD" />
          <h1
            className="font-display text-vbx-white mb-7"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: '1.15', maxWidth: '840px' }}
          >
            Performance benchmarks across{' '}
            <span style={{ color: '#2EA891' }}>1,377 Critical Access Hospitals</span>.
          </h1>
          <p className="font-sans text-vbx-muted mb-8 max-w-[640px]" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
            Live KPI benchmarks, CAHSP-Score composition, and problem-class status — grounded
            in CMS HCRIS cost reports and MBQIP quality data.
          </p>

          {/* Summary strip */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-0"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(46,168,145,0.15)',
              borderRadius: '2px',
            }}
          >
            {SUMMARY_STATS.map((stat, i, arr) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center gap-3 px-6 py-8"
                style={{ borderRight: i < arr.length - 1 ? '1px solid rgba(46,168,145,0.15)' : 'none' }}
              >
                <span
                  className="font-mono"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: stat.gold ? '#F7B801' : '#2EA891', lineHeight: 1 }}
                >
                  {stat.value}
                </span>
                <span className="font-sans text-vbx-muted leading-snug max-w-[140px]" style={{ fontSize: '0.8125rem' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 data-line" />
      </section>

      {/* ── PERFORMANCE GAP TABLE ─────────────────────────────────────────── */}
      <section className="section-padding">
        <div ref={kpiRef} className="container-wide">
          <SectionLabel label="PERFORMANCE GAP — CURRENT VS. TARGET" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              border: '1px solid rgba(46,168,145,0.2)',
              borderRadius: '2px',
              overflow: 'hidden',
              maxWidth: '780px',
            }}
          >
            {['Metric', 'Baseline', 'Target', 'Gap'].map((h) => (
              <div
                key={h}
                className="font-mono text-vbx-teal px-5 py-3"
                style={{ fontSize: '0.6875rem', letterSpacing: '0.1em', background: 'rgba(46,168,145,0.08)', borderBottom: '1px solid rgba(46,168,145,0.2)' }}
              >
                {h.toUpperCase()}
              </div>
            ))}
            {GAP_ROWS.map((row, i) => (
              <div key={row.metric} style={{ display: 'contents' }}>
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
          <p className="font-sans text-vbx-muted mt-4" style={{ fontSize: '0.6875rem' }}>
            Source: CMS HCRIS cost reports, Flex Monitoring Team, Chartis 2025 Rural Health State of the State
          </p>
        </div>
      </section>

      {/* ── CAHSP-SCORE COMPOSITION ───────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(46,168,145,0.1)' }}
      >
        <div ref={scoreRef} className="container-wide">
          <SectionLabel label="CAHSP-SCORE COMPOSITION" />
          <p className="font-sans text-vbx-muted mb-10 max-w-[640px]" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
            The CAHSP-Score (0–100) is a composite index modeled on CASP&apos;s GDT_TS — a single number that
            captures financial, clinical, operational, workforce, and confidence dimensions simultaneously.
            Breakthrough threshold: <span style={{ color: '#F7B801' }}>&ge; 85</span>.
          </p>
          <div className="flex flex-col gap-4" style={{ maxWidth: '720px' }}>
            {SCORE_COMPONENTS.map((c) => (
              <div key={c.label}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-vbx-white" style={{ fontSize: '0.8125rem' }}>{c.label}</span>
                  <span className="font-mono" style={{ fontSize: '0.8125rem', color: c.color }}>{c.weight}%</span>
                </div>
                <div style={{ height: 6, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: `${c.weight * 2}%`, height: '100%', background: c.color, borderRadius: 3 }} />
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {c.metrics.map((m) => (
                    <span
                      key={m}
                      className="font-mono"
                      style={{ fontSize: '0.625rem', background: 'rgba(255,255,255,0.06)', padding: '2px 8px', borderRadius: 2, color: '#8892A4' }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM CLASS STATUS ──────────────────────────────────────────── */}
      <section className="section-padding">
        <div ref={classRef} className="container-wide">
          <SectionLabel label="CAHSP PROBLEM CLASS STATUS" />
          <div className="overflow-x-auto">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '100px 2fr 80px 100px 1fr',
                border: '1px solid rgba(46,168,145,0.2)',
                borderRadius: '2px',
                overflow: 'hidden',
                minWidth: '700px',
              }}
            >
              {['Class', 'Title', 'Type', 'Status', 'Ground Truth'].map((h) => (
                <div
                  key={h}
                  className="font-mono text-vbx-teal px-4 py-3"
                  style={{ fontSize: '0.625rem', letterSpacing: '0.12em', background: 'rgba(46,168,145,0.08)', borderBottom: '1px solid rgba(46,168,145,0.2)' }}
                >
                  {h.toUpperCase()}
                </div>
              ))}
              {PROBLEM_CLASSES.map((pc, i) => (
                <div key={pc.cls} style={{ display: 'contents' }}>
                  <div
                    className="font-mono px-4 py-4"
                    style={{
                      fontSize: '0.6875rem',
                      background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                      borderBottom: i < PROBLEM_CLASSES.length - 1 ? '1px solid rgba(46,168,145,0.1)' : 'none',
                    }}
                  >
                    <span style={{ background: pc.color, color: 'white', padding: '2px 6px', borderRadius: 2, fontSize: '0.625rem', letterSpacing: '0.1em' }}>{pc.cls}</span>
                  </div>
                  <div
                    className="font-sans px-4 py-4"
                    style={{
                      fontSize: '0.8125rem',
                      color: '#F5F5F0',
                      background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                      borderBottom: i < PROBLEM_CLASSES.length - 1 ? '1px solid rgba(46,168,145,0.1)' : 'none',
                    }}
                  >
                    {pc.title}
                  </div>
                  <div
                    className="font-mono px-4 py-4"
                    style={{
                      fontSize: '0.6875rem',
                      color: pc.type === 'Type A' ? '#2EA891' : '#F7B801',
                      background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                      borderBottom: i < PROBLEM_CLASSES.length - 1 ? '1px solid rgba(46,168,145,0.1)' : 'none',
                    }}
                  >
                    {pc.type}
                  </div>
                  <div
                    className="font-mono px-4 py-4"
                    style={{
                      fontSize: '0.6875rem',
                      color: pc.status === 'Active' ? '#2EA891' : pc.status === 'In Progress' ? '#F7B801' : '#8892A4',
                      background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                      borderBottom: i < PROBLEM_CLASSES.length - 1 ? '1px solid rgba(46,168,145,0.1)' : 'none',
                    }}
                  >
                    {pc.status}
                  </div>
                  <div
                    className="font-sans px-4 py-4"
                    style={{
                      fontSize: '0.75rem',
                      color: '#8892A4',
                      background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent',
                      borderBottom: i < PROBLEM_CLASSES.length - 1 ? '1px solid rgba(46,168,145,0.1)' : 'none',
                    }}
                  >
                    {pc.source}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="font-sans text-vbx-muted mt-4" style={{ fontSize: '0.6875rem' }}>
            Type A = template-available intervention · Type B = novel / free-modeling equivalent
          </p>
        </div>
      </section>

      {/* ── AUTO-CITATION ENGINE CALLOUT ──────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(46,168,145,0.1)' }}
      >
        <div ref={citationRef} className="container-wide">
          <SectionLabel label="DATA INTEGRITY" />
          <div
            className="p-6"
            style={{
              background: 'rgba(46,168,145,0.06)',
              border: '1px solid rgba(46,168,145,0.2)',
              borderRadius: '2px',
              maxWidth: '720px',
            }}
          >
            <p className="font-mono text-vbx-teal mb-3" style={{ fontSize: '0.6875rem', letterSpacing: '0.1em' }}>
              HCRIS DATA PIPELINE · AUTO-CITATION ENGINE
            </p>
            <p className="font-sans text-vbx-muted mb-6" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
              Every benchmark claim on this dashboard is derived from CMS Healthcare Cost Report
              Information System (HCRIS) line items. The auto-citation engine converts raw cost report
              worksheet entries into auditable benchmark claims — closing the translation gap between
              federal data and facility-level intelligence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/cah"
                className="font-mono"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.08em',
                  color: 'rgba(46,168,145,0.9)',
                  border: '1px solid rgba(46,168,145,0.4)',
                  padding: '4px 10px',
                  borderRadius: '2px',
                  textDecoration: 'none',
                }}
              >
                CAH TRANSFORMATION ENGINE &rarr;
              </Link>
              <Link
                href="/cahsp"
                className="font-mono"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.08em',
                  color: 'rgba(46,168,145,0.9)',
                  border: '1px solid rgba(46,168,145,0.4)',
                  padding: '4px 10px',
                  borderRadius: '2px',
                  textDecoration: 'none',
                }}
              >
                CAHSP BENCHMARK SPEC &rarr;
              </Link>
            </div>
          </div>
          <div className="data-line mt-12" />
        </div>
      </section>

      {/* ── ENGAGE CTA ────────────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{ borderTop: '1px solid rgba(46,168,145,0.12)' }}
      >
        <div className="container-wide">
          <div className="max-w-[560px]">
            <SectionLabel label="ENGAGE" />
            <p className="font-sans text-vbx-muted mb-8" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
              Ready to close the gap at your facility? Request a briefing with the Visionblox CAH team.
            </p>
            <a
              href="mailto:khaalis.wooden@visionblox.com?subject=CAH%20Performance%20Dashboard%20Briefing"
              className="btn-gold"
            >
              REQUEST A BRIEFING
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
