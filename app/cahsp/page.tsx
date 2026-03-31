'use client'

import { useEffect, type ReactNode } from 'react'

const C = {
  navy: '#232D5A',
  teal: '#2EA891',
  gold: '#F7B801',
  charcoal: '#2E2E2E',
  bg: '#F4F3EF',
  lightTeal: '#e8f7f5',
  lightNavy: '#edf0f8',
  border: '#d0d4e0',
  red: '#C0392B',
}
const MONO = "'IBM Plex Mono', monospace"
const SERIF = "'Playfair Display', serif"
const SANS = "'IBM Plex Sans', sans-serif"

const sectionLabel: React.CSSProperties = {
  fontFamily: MONO,
  fontSize: 10,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: C.teal,
  marginBottom: 10,
  display: 'block',
}
const h2Style: React.CSSProperties = {
  fontFamily: SERIF,
  fontSize: 34,
  fontWeight: 700,
  color: C.navy,
  marginBottom: 24,
  lineHeight: 1.2,
}
const h3Style: React.CSSProperties = {
  fontFamily: SANS,
  fontSize: 17,
  fontWeight: 600,
  color: C.navy,
  margin: '28px 0 12px',
}
const pStyle: React.CSSProperties = { marginBottom: 14, color: '#3a3a3a', lineHeight: 1.7 }
const sectionStyle: React.CSSProperties = {
  padding: '64px 0 32px',
  borderBottom: `1px solid ${C.border}`,
}

function Callout({
  variant = 'navy',
  label,
  children,
}: {
  variant?: 'navy' | 'gold' | 'teal' | 'red'
  label?: ReactNode
  children: ReactNode
}) {
  const variants = {
    navy: { border: C.navy, bg: C.lightNavy, labelColor: C.navy },
    gold: { border: C.gold, bg: '#fffbec', labelColor: '#b88000' },
    teal: { border: C.teal, bg: C.lightTeal, labelColor: C.teal },
    red: { border: C.red, bg: '#fdf2f2', labelColor: C.red },
  }
  const v = variants[variant] || variants.navy
  return (
    <div
      style={{
        background: v.bg,
        borderLeft: `4px solid ${v.border}`,
        padding: '20px 24px',
        margin: '24px 0',
        borderRadius: '0 4px 4px 0',
      }}
    >
      {label && (
        <div
          style={{
            fontFamily: MONO,
            fontSize: 10,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: 8,
            color: v.labelColor,
          }}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  )
}

function DataTable({ headers, rows }: { headers: ReactNode[]; rows: ReactNode[][] }) {
  return (
    <div style={{ overflowX: 'auto', margin: '24px 0' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13.5 }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  background: C.navy,
                  color: 'white',
                  padding: '11px 14px',
                  textAlign: 'left',
                  fontFamily: MONO,
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    padding: '11px 14px',
                    borderBottom: `1px solid ${C.border}`,
                    verticalAlign: 'top',
                    background: ri % 2 === 1 ? '#f9f9f7' : 'white',
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Badge({ variant = 'primary', children }: { variant?: 'primary' | 'secondary' | 'gold' | 'neutral'; children: ReactNode }) {
  const styles = {
    primary: { bg: C.navy, color: 'white' },
    secondary: { bg: C.teal, color: 'white' },
    gold: { bg: C.gold, color: C.charcoal },
    neutral: { bg: C.lightNavy, color: C.navy },
  }
  const s = styles[variant] || styles.primary
  return (
    <span
      style={{
        display: 'inline-block',
        fontFamily: MONO,
        fontSize: 10,
        padding: '2px 8px',
        borderRadius: 2,
        fontWeight: 600,
        letterSpacing: '0.05em',
        background: s.bg,
        color: s.color,
      }}
    >
      {children}
    </span>
  )
}

function MathBlock({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: C.charcoal,
        color: '#e8e8e8',
        fontFamily: MONO,
        fontSize: 12.5,
        lineHeight: 1.9,
        padding: '24px 28px',
        borderRadius: 6,
        margin: '20px 0',
        overflowX: 'auto',
        borderLeft: `4px solid ${C.teal}`,
        whiteSpace: 'pre',
      }}
    >
      {children}
    </div>
  )
}

function ScoreBarRow({ label, pct, fill = C.teal, pctLabel }: { label: string; pct: number; fill?: string; pctLabel: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
      <span
        style={{
          fontFamily: MONO,
          fontSize: 10,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'rgba(255,255,255,0.7)',
          width: 90,
          flexShrink: 0,
        }}
      >
        {label}
      </span>
      <div style={{ flex: 1, height: 6, background: 'rgba(255,255,255,0.1)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', borderRadius: 3, background: fill }} />
      </div>
      <span style={{ fontFamily: MONO, fontSize: 11, color: C.gold, width: 50, textAlign: 'right' }}>{pctLabel}</span>
    </div>
  )
}

function PhaseItem({
  code,
  label,
  title,
  desc,
  state = 'future',
}: {
  code: string
  label: string
  title: string
  desc: string
  state?: 'future' | 'active' | 'now'
}) {
  const dotBg = state === 'active' ? C.teal : state === 'now' ? C.gold : C.border
  const dotColor = state === 'now' ? C.charcoal : state === 'active' ? 'white' : C.charcoal
  return (
    <div style={{ display: 'flex', gap: 20, marginBottom: 28, position: 'relative' }}>
      <div
        style={{
          flexShrink: 0,
          width: 50,
          height: 50,
          borderRadius: '50%',
          background: dotBg,
          color: dotColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: MONO,
          fontWeight: 600,
          fontSize: 13,
          zIndex: 1,
          border: `3px solid ${C.bg}`,
        }}
      >
        {code}
      </div>
      <div style={{ flex: 1, paddingTop: 8 }}>
        <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.teal, marginBottom: 4 }}>{label}</div>
        <div style={{ fontWeight: 600, fontSize: 16, color: C.navy, marginBottom: 6 }}>{title}</div>
        <div style={{ fontSize: 13.5, color: '#4a4a4a', lineHeight: 1.65 }}>{desc}</div>
      </div>
    </div>
  )
}

function ProblemCard({
  catLabel,
  catBg = C.navy,
  title,
  analog,
  targets,
  source,
}: {
  catLabel: string
  catBg?: string
  title: string
  analog: string
  targets: string[]
  source: string
}) {
  return (
    <div style={{ background: 'white', border: `1px solid ${C.border}`, borderRadius: 6, overflow: 'hidden' }}>
      <div style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span
          style={{
            fontFamily: MONO,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'white',
            background: catBg,
            padding: '3px 8px',
            borderRadius: 2,
          }}
        >
          {catLabel}
        </span>
        <span style={{ fontWeight: 600, fontSize: 14, color: C.navy }}>{title}</span>
      </div>
      <div style={{ padding: '14px 18px', borderTop: `1px solid ${C.border}`, background: '#fafafa' }}>
        <p style={{ fontSize: 13, marginBottom: 10, color: '#3a3a3a' }}>
          <strong>CASP Analog:</strong> {analog}
        </p>
        {targets.map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 6 }}>
            <span
              style={{
                flexShrink: 0,
                width: 18,
                height: 18,
                background: C.teal,
                color: 'white',
                fontSize: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
                fontWeight: 600,
                marginTop: 1,
              }}
            >
              T
            </span>
            <span style={{ fontSize: 12.5, lineHeight: 1.55, color: '#3a3a3a' }}>{t}</span>
          </div>
        ))}
        <p style={{ marginTop: 12, fontSize: 12.5, color: '#555', marginBottom: 0 }}>
          <strong>Ground Truth Source:</strong> {source}
        </p>
      </div>
    </div>
  )
}

function ScoreCard({
  accentColor,
  icon,
  title,
  weight,
  desc,
  metrics,
}: {
  accentColor: string
  icon: ReactNode
  title: string
  weight: string
  desc: string
  metrics: string[]
}) {
  return (
    <div
      style={{
        background: 'white',
        border: `1px solid ${C.border}`,
        borderRadius: 6,
        padding: 22,
        position: 'relative',
        overflow: 'hidden',
        borderTop: `3px solid ${accentColor}`,
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
      <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.navy, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 36, fontFamily: SERIF, fontWeight: 900, color: C.navy, lineHeight: 1, marginBottom: 8 }}>{weight}</div>
      <div style={{ fontSize: 12.5, color: '#5a5a5a', lineHeight: 1.5 }}>{desc}</div>
      <div style={{ marginTop: 12, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {metrics.map((m, i) => (
          <span key={i} style={{ fontFamily: MONO, fontSize: 10, background: C.lightNavy, padding: '3px 8px', borderRadius: 2, color: C.navy }}>
            {m}
          </span>
        ))}
      </div>
    </div>
  )
}

function StatTile({
  bg,
  color,
  value,
  label,
  borderColor,
}: {
  bg: string
  color?: string
  value: ReactNode
  label: string
  borderColor?: string
}) {
  return (
    <div
      style={{
        background: bg,
        color: color || 'white',
        padding: 24,
        borderRadius: 6,
        textAlign: 'center',
        border: borderColor ? `1px solid ${C.border}` : 'none',
      }}
    >
      <div style={{ fontSize: 42, fontFamily: SERIF, fontWeight: 900, color: color || 'white' }}>{value}</div>
      <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8 }}>{label}</div>
    </div>
  )
}

export default function CAHSPPage() {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href =
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap'
    document.head.appendChild(link)

    const style = document.createElement('style')
    style.textContent = `
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { font-family: 'IBM Plex Sans', sans-serif; background: #F4F3EF; color: #2E2E2E; }
      ::-webkit-scrollbar { height: 4px; }
      ::-webkit-scrollbar-thumb { background: #2EA891; border-radius: 2px; }
      .cahsp-toc-link { transition: border-color 0.2s, color 0.2s; }
      .cahsp-toc-link:hover { color: #232D5A !important; border-bottom-color: #2EA891 !important; }
    `
    document.head.appendChild(style)

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link)
      if (document.head.contains(style)) document.head.removeChild(style)
    }
  }, [])

  const tocItems = [
    { href: '#part1', num: 'I', label: 'AlphaFold CASP Deep Dive' },
    { href: '#part2', num: 'II', label: 'Structural Analogy' },
    { href: '#part3', num: 'III', label: 'Problem Taxonomy' },
    { href: '#part4', num: 'IV', label: 'Scoring System' },
    { href: '#part5', num: 'V', label: 'Target Difficulty' },
    { href: '#part6', num: 'VI', label: 'Math Framework' },
    { href: '#part7', num: 'VII', label: 'Execution Roadmap' },
    { href: '#part8', num: 'VIII', label: 'Mandate' },
  ]

  return (
    <div style={{ fontFamily: SANS, background: C.bg, color: C.charcoal, lineHeight: 1.7, fontSize: 15 }}>
      <header style={{ background: C.navy, color: 'white', padding: '60px 64px 50px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 400, height: 400, border: '1px solid rgba(46,168,145,0.2)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -120, left: '30%', width: 600, height: 300, border: '1px solid rgba(247,184,1,0.1)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: '0.15em', color: C.teal, textTransform: 'uppercase', marginBottom: 18 }}>Visionblox LLC · <a href="https://zuup.org" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Zuup Innovation Lab</a> · CAH Transformation Engine</div>
          <h1 style={{ fontFamily: SERIF, fontSize: 52, fontWeight: 900, lineHeight: 1.1, marginBottom: 12 }}>
            <span style={{ color: C.gold }}>CAHSP</span>
            <br />
            Critical Assessment of Hospital
            <br />
            Sustainability &amp; Performance
          </h1>
          <p style={{ fontSize: 18, fontWeight: 300, color: 'rgba(255,255,255,0.75)', maxWidth: 680, marginBottom: 36, lineHeight: 1.6 }}>
            The CAH-equivalent of CASP — a structured, empirical benchmark for evaluating computational solutions to the dual mandate of ≥5% annual operating margin growth and highest achievable patient care quality across all 1,355+ Critical Access Hospitals.
          </p>
        </div>
      </header>

      <nav style={{ background: 'white', borderBottom: `2px solid ${C.teal}`, padding: '0 64px', display: 'flex', overflowX: 'auto', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 12px rgba(35,45,90,0.08)' }}>
        {tocItems.map(({ href, num, label }) => (
          <a
            key={href}
            href={href}
            className="cahsp-toc-link"
            style={{
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '16px 20px',
              textDecoration: 'none',
              color: C.charcoal,
              whiteSpace: 'nowrap',
              borderBottom: '3px solid transparent',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ fontSize: 9, background: C.lightNavy, padding: '2px 5px', borderRadius: 2, color: C.navy }}>{num}</span>
            {label}
          </a>
        ))}
      </nav>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px 80px' }}>
        <section style={sectionStyle} id="part1">
          <span style={sectionLabel}>Part I — Source Analogy</span>
          <h2 style={h2Style}>AlphaFold &amp; CASP: What We Learned</h2>
          <p style={pStyle}>Before constructing the CAH equivalent, we must understand the exact architecture CASP used to turn a 50-year-old unsolved problem into a structured, measurable competition — and how AlphaFold exploited that structure to achieve a discontinuous leap in performance.</p>
          <Callout variant="teal" label="CASP Core Mechanism">
            <p style={{ ...pStyle, marginBottom: 0 }}>Target selection, blind prediction, independent scoring, difficulty stratification, and published results are the benchmark primitives CAHSP replicates.</p>
          </Callout>
        </section>

        <section style={sectionStyle} id="part2">
          <span style={sectionLabel}>Part II — Structural Mapping</span>
          <h2 style={h2Style}>The CAH ↔ CASP Analogy</h2>
          <DataTable
            headers={['Dimension', 'CASP (Protein Folding)', 'CAHSP (CAH Sustainability)']}
            rows={[
              [<Badge key="p1" variant="neutral">The Problem</Badge>, 'Predict 3D protein structure from amino acid sequence', 'Predict and achieve CAH viability + quality from operational inputs'],
              [<Badge key="p2" variant="neutral">Ground Truth</Badge>, 'Experimental structure', 'CMS HCRIS + MBQIP + claims'],
              [<Badge key="p3" variant="neutral">Primary Metric</Badge>, 'GDT_TS', <span key="pm"><strong>CAHSP-Score</strong> composite index (0-100)</span>],
            ]}
          />
        </section>

        <section style={sectionStyle} id="part3">
          <span style={sectionLabel}>Part III — Problem Taxonomy</span>
          <h2 style={h2Style}>The 5 Problem Classes CAHSP Must Solve</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))', gap: 20, margin: '28px 0' }}>
            <ProblemCard catLabel="CLASS 1" title="Financial Structure Prediction" analog="Template-Based Modeling (TBM)." targets={['Operating margin optimization', 'Denial-rate reduction', 'Labor-cost ratio optimization']} source="CMS HCRIS / MBQIP" />
            <ProblemCard catLabel="CLASS 2" title="Clinical Quality Optimization" analog="TBM with high accuracy targets." targets={['Readmission reduction', 'Transfer optimization', 'HCAHPS improvement']} source="MBQIP / CMS Hospital Compare" />
            <ProblemCard catLabel="CLASS 3" catBg={C.teal} title="Operational Architecture (Novel)" analog="Free Modeling (FM)." targets={['AI-native triage', 'Federated RCM intelligence', 'Dynamic swing-bed optimization']} source="Prospective pilot measurement" />
            <ProblemCard catLabel="CLASS 4" catBg="#8e44ad" title="Workforce & Staffing Architecture" analog="Protein complex / oligomer prediction. Multiple interacting agents with interdependent constraints — the hardest structural class." targets={['Travel nurse dependency reduction while maintaining 24/7 coverage under 80–120 FTE cap', 'Tele-specialist coverage optimization: specialty access without permanent hire', 'Burn-out index minimization via predictive scheduling under rural geographic constraints', 'Pipeline modeling: HRSA NHSC and rural health scholar pipeline to 5-year staffing adequacy']} source="HRSA Area Health Resources Files, Flex Monitoring Team workforce data" />
            <ProblemCard catLabel="CLASS 5" catBg={C.red} title="Solution Confidence Estimation (CAHSP-C)" analog="Estimation of Model Accuracy (EMA). AlphaFold 2's pLDDT score — knowing where it was uncertain — was as important as the prediction itself." targets={['Per-intervention confidence index: probability that predicted financial impact is within ±15% of actual', 'Transferability index: probability that intervention effect from peer CAH applies to target CAH', 'Payer-mix sensitivity score: outcome degradation under a 10% Medicaid shift', 'Implementation failure mode map: what breaks first, under what conditions, at what probability']} source="Monte Carlo simulation against HCRIS variance; prospective pilot tracking" />
          </div>
        </section>

        <section style={sectionStyle} id="part4">
          <span style={sectionLabel}>Part IV — The CAHSP Score</span>
          <h2 style={h2Style}>CAHSP as the CAH Equivalent of GDT_TS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20, margin: '28px 0' }}>
            <ScoreCard accentColor={C.gold} icon="💰" title="Financial Index (FI)" weight="30%" desc="Operating margin trajectory and revenue cycle performance." metrics={['Op. Margin Δ', 'Denial Rate', 'Labor/Rev Ratio']} />
            <ScoreCard accentColor={C.teal} icon="🏥" title="Clinical Quality Index (QI)" weight="30%" desc="MBQIP composite and readmission performance." metrics={['MBQIP %ile', 'Readmit Rate', 'HCAHPS']} />
            <ScoreCard accentColor={C.navy} icon="⚙️" title="Operational Efficiency (OI)" weight="20%" desc="Throughput and bed-utilization performance." metrics={['Occupancy', 'LOS', 'ED Throughput']} />
          </div>
          <div style={{ background: C.navy, color: 'white', borderRadius: 8, padding: '34px 36px', margin: '20px 0' }}>
            <ScoreBarRow label="90-100" pct={100} fill={C.gold} pctLabel="Elite" />
            <ScoreBarRow label="85-89" pct={87} fill={C.teal} pctLabel="Solved" />
            <ScoreBarRow label="70-84" pct={72} fill="#4fc3a1" pctLabel="High" />
          </div>
        </section>

        <section style={sectionStyle} id="part5">
          <span style={sectionLabel}>Part V — Target Difficulty</span>
          <h2 style={h2Style}>Type A vs. Type B Targets</h2>
          <p style={pStyle}>Type A corresponds to template-available interventions. Type B is free-modeling equivalent with no prior-art template.</p>
        </section>

        <section style={sectionStyle} id="part6">
          <span style={sectionLabel}>Part VI — Mathematical Architecture</span>
          <h2 style={h2Style}>Formal Framework</h2>
          <MathBlock>{`CAHSP(i, t) = 100 * sum_j [w_j * phi_j(Delta s_j(i,t))]
Weights: FI 0.30, QI 0.30, OI 0.20, WI 0.10, CI 0.10
Dual mandate constraint: FI and QI floors required`}</MathBlock>
        </section>

        <section style={sectionStyle} id="part7">
          <span style={sectionLabel}>Part VII — Execution Roadmap</span>
          <h2 style={h2Style}>Implementation Phases</h2>
          <div style={{ margin: '28px 0', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 24, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, ${C.teal}, ${C.navy})` }} />
            <PhaseItem code="P0" state="active" label="Now" title="Baseline scoring and target classification" desc="Build HCRIS baseline and classify Type A/B facilities." />
            <PhaseItem code="P1" state="active" label="Q3 2026" title="Type A benchmark cycle" desc="Run and score known-template interventions." />
            <PhaseItem code="P2" label="Q1 2027" title="Type B benchmark cycle" desc="Evaluate novel architectures under prospective scoring." />
          </div>
        </section>

        <section style={sectionStyle} id="part8">
          <span style={sectionLabel}>Part VIII — The Mandate</span>
          <h2 style={h2Style}>Integrity Rules and Validation Standard</h2>
          <Callout variant="teal" label="Benchmark Declaration">
            <p style={{ fontSize: 14, margin: 0, lineHeight: 1.8 }}>
              The CAH problem is solved when a computational solution achieves CAHSP ≥ 85 on Type B targets using MV-CAHI constraints and holds performance for 24 months against HCRIS-grounded validation.
            </p>
          </Callout>
        </section>

        <section style={{ padding: '64px 0 32px' }}>
          <span style={sectionLabel}>Summary</span>
          <h2 style={h2Style}>CAHSP in One Frame</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16, margin: '28px 0' }}>
            <StatTile bg={C.navy} value="5" label="Problem Classes" />
            <StatTile bg={C.teal} value="85" label="Breakthrough Score" />
            <StatTile bg="white" value="1,355+" label="Target CAHs" color={C.navy} borderColor={C.border} />
            <StatTile bg={C.gold} value="24mo" label="Validation Window" color={C.charcoal} />
          </div>
        </section>
      </div>

      <footer style={{ background: C.navy, color: 'rgba(255,255,255,0.6)', padding: '32px 64px', fontFamily: MONO, fontSize: 11, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ color: C.gold, fontSize: 13, fontWeight: 600 }}>CAHSP v1.0</div>
          <div>Critical Assessment of Hospital Sustainability &amp; Performance</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <strong style={{ color: 'white' }}>Visionblox LLC · <a href="https://zuup.org" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Zuup Innovation Lab</a></strong>
          <br />
          CAH Transformation Engine · March 2026
          <br />
          ZIL — CAH Access Hospitals — ACTIVE
        </div>
      </footer>
    </div>
  )
}
