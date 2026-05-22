'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const ROADMAP = [
  {
    deplLabel: 'P0',
    deplTitle: 'Baseline Scoring',
    deplDesc: 'HCRIS cost report ingestion, Type A / Type B facility classification, operating margin and quality baseline for every enrolled CAH.',
    deplTimeline: 'NOW — Active',
    execLabel: 'Phase 1',
    execFile: 'PHASE1_EMPIRICAL_VALIDATION.md',
    execDesc: '30-day empirical benchmark evidence base. WA (39 CAHs) + MT (50 CAHs) pilot data, WSHA/MHA benchmarks, CARC/RARC denial code mapping.',
    deplColor: '#F7B801',
    geoNote: 'Pilot scope: Washington + Montana',
  },
  {
    deplLabel: 'P1',
    deplTitle: 'Type A Benchmark Cycle',
    deplDesc: 'Known-template interventions deployed across pilot CAHs: pre-bill scrubbing, staffing model optimization, swing-bed census management.',
    deplTimeline: 'Q3 2026',
    execLabel: 'Phase 2',
    execFile: 'phase2_optimization_execution.py',
    execDesc: 'Lagrangian dual-objective optimization executes across enrolled facilities. Pareto frontier generated for profit–quality trade-off space.',
    deplColor: '#2EA891',
    geoNote: 'Expanding to additional WA/MT CAHs',
  },
  {
    deplLabel: 'P2',
    deplTitle: 'Type B Benchmark Cycle',
    deplDesc: 'Novel architecture evaluation: facilities with unique payer mix, remote geography, or atypical service lines assessed under robust optimization.',
    deplTimeline: 'Q1 2027',
    execLabel: 'Phase 3',
    execFile: 'phase3_pilot_execution.py',
    execDesc: 'Pilot implementation and prospective ROI validation. Actual vs. projected outcomes measured. National rollout architecture evaluated.',
    deplColor: '#8892A4',
    geoNote: 'National pipeline evaluation begins',
  },
]

const ASSETS = [
  { file: 'gap-analysis-1.md', label: 'Opportunity Map', short: '$1.97M/yr total opportunity across margin, denial rate, and labor cost.' },
  { file: 'gap-analysis-2.md', label: 'Priority Actions', short: 'ROI-ranked interventions with 90-day, 6-month, and 12-month timelines.' },
  { file: 'gap-analysis-3.md', label: 'Confidence Assessment', short: '70% overall grounding score. Regulatory compliance tier: 95%.' },
  { file: 'PHASE1_EMPIRICAL_VALIDATION.md', label: 'Empirical Validation', short: 'WA + MT state data, WSHA/MHA benchmarks, CARC/RARC denial mapping.' },
  { file: 'OPERATIONAL_BENCHMARKS.md', label: 'Operational Benchmarks', short: '39 KPIs (daily/weekly/monthly) with staff checklists and status tracking.' },
  { file: 'MV-CAHI.md', label: 'MV-CAHI Spec', short: 'Minimum Viable CAH Infrastructure across 5 baseline domains.' },
]

const PARTNERS = [
  {
    name: 'VISIONBLOX LLC',
    role: 'Platform Architect & Systems Integrator',
    scope: [
      'Dual-objective optimization engine (Lagrangian, KKT, SQP)',
      'FHIR data pipeline and HCRIS cost report ingestion',
      'Dashboard infrastructure (cah-zeta.vercel.app)',
      'Regulatory constraint modeling (42 CFR § 485.610–647)',
      'Pareto front and robust optimization modules',
    ],
    ids: 'CAGE: 9Z4X2 · UEI: H4X2Z7R9E3E3 · MINORITY-OWNED',
  },
  {
    name: 'ZUUP INNOVATION LAB',
    role: 'Research Partner & Clinical Domain Expert',
    scope: [
      'Rural healthcare operations domain expertise',
      'WSHA and MHA benchmark network access',
      'Clinical workflow validation for WA + MT pilot sites',
      'Swing-bed and payer-mix clinical review',
      'CAH administrator engagement and change management',
    ],
    ids: 'Research Partnership · WA + MT Pilot Network',
  },
]

// ─── Scroll reveal ────────────────────────────────────────────────────────────

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(12px)'
    el.style.transition = `opacity 0.45s ease ${delay}ms, transform 0.45s ease ${delay}ms`
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'none'; obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return <div ref={ref}>{children}</div>
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CAHSPPage() {
  return (
    <div className="bg-vbx-navy min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div className="container-wide relative">
          <p className="font-mono text-vbx-teal mb-6 tracking-[0.15em]" style={{ fontSize: '0.75rem' }}>
            {'// CAHSP // CAH SUCCESSFUL PRACTICES PLATFORM'}
          </p>
          <p className="font-mono mb-3 tracking-[0.1em]" style={{ fontSize: '0.7rem', color: 'rgba(46,168,145,0.6)' }}>
            VISIONBLOX LLC&nbsp;&nbsp;&times;&nbsp;&nbsp;ZUUP INNOVATION LAB
          </p>
          <h1
            className="font-display text-vbx-white mb-7"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1', maxWidth: '820px' }}
          >
            CAHSP Deployment Roadmap
          </h1>
          <p className="font-sans text-vbx-muted mb-4 max-w-[640px]" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
            Three deployment stages — P0, P1, P2 — translating the CAH optimization engine
            into operational practice across pilot and national CAH networks.
          </p>
          <p className="font-sans text-vbx-muted mb-8 max-w-[640px]" style={{ fontSize: '0.875rem', lineHeight: '1.7', color: 'rgba(136,146,164,0.75)' }}>
            Pilot scope: Washington (39 CAHs) + Montana (50 CAHs).
            National pipeline: 1,377 CAHs from CMS Hospital Compare.
          </p>
          <Link href="/cah" className="btn-teal-outline">VIEW ENGINE DOCUMENTATION &rarr;</Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 data-line" />
      </section>

      {/* ── ROADMAP ──────────────────────────────────────────────────────────── */}
      <section id="roadmap" className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">{'// 01'}&nbsp;&nbsp;DEPLOYMENT ROADMAP</p>
          <h2 className="font-display text-vbx-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>P0 → P1 → P2</h2>
          <p className="font-sans text-vbx-muted mb-3 max-w-[640px]" style={{ fontSize: '0.9375rem', lineHeight: '1.7' }}>
            Each deployment stage maps directly to an execution phase in the repo. The labels are
            different because they describe different things: deployment stages track operational
            rollout; execution phases track analytical milestones.
          </p>
          <p className="font-mono text-xs mb-10" style={{ color: 'rgba(46,168,145,0.55)' }}>
            P0 ↔ Phase&nbsp;1 &nbsp;&nbsp;·&nbsp;&nbsp; P1 ↔ Phase&nbsp;2 &nbsp;&nbsp;·&nbsp;&nbsp; P2 ↔ Phase&nbsp;3
          </p>
          <div className="data-line mb-10" />
          <div className="space-y-10">
            {ROADMAP.map((stage, i) => (
              <Reveal key={stage.deplLabel} delay={i * 100}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                  {/* Deployment side */}
                  <div className="p-6" style={{ border: `2px solid ${stage.deplColor}50`, background: 'rgba(255,255,255,0.02)', borderRadius: '2px' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-2xl font-bold" style={{ color: stage.deplColor }}>{stage.deplLabel}</span>
                      <span className="font-mono text-xs tracking-[0.1em]" style={{ color: stage.deplColor }}>{stage.deplTimeline}</span>
                    </div>
                    <h3 className="font-display text-vbx-white text-xl mb-3">{stage.deplTitle}</h3>
                    <p className="font-sans text-vbx-muted text-sm leading-relaxed mb-3">{stage.deplDesc}</p>
                    <p className="font-mono text-xs" style={{ color: 'rgba(136,146,164,0.65)' }}>{stage.geoNote}</p>
                  </div>

                  {/* Execution side */}
                  <div className="p-6" style={{ border: '1px solid rgba(46,168,145,0.2)', background: 'rgba(255,255,255,0.01)', borderRadius: '2px' }}>
                    <p className="font-mono text-xs tracking-[0.1em] mb-2" style={{ color: 'rgba(46,168,145,0.6)' }}>REPO EXECUTION PHASE</p>
                    <p className="font-mono text-vbx-white text-sm mb-1">{stage.execLabel}</p>
                    <p className="font-mono text-xs mb-4" style={{ color: 'rgba(46,168,145,0.55)' }}>{stage.execFile}</p>
                    <p className="font-sans text-vbx-muted text-sm leading-relaxed">{stage.execDesc}</p>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ─────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.025)' }}>
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">{'// 02'}&nbsp;&nbsp;PARTNERS</p>
          <h2 className="font-display text-vbx-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Joint Delivery</h2>
          <p className="font-sans text-vbx-muted mb-10 max-w-[640px]" style={{ fontSize: '0.9375rem', lineHeight: '1.7' }}>
            CAHSP is a joint platform between Visionblox LLC and Zuup Innovation Lab.
            Each partner owns a distinct scope of delivery.
          </p>
          <div className="data-line mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PARTNERS.map((partner, i) => (
              <Reveal key={partner.name} delay={i * 120}>
                <div className="pl-5 py-4" style={{ borderLeft: '3px solid #2EA891' }}>
                  <h3 className="font-display text-vbx-white text-xl mb-1">{partner.name}</h3>
                  <p className="font-mono text-vbx-muted text-xs tracking-[0.06em] mb-4 uppercase">{partner.role}</p>
                  <ul className="space-y-2 mb-4">
                    {partner.scope.map((item) => (
                      <li key={item} className="font-sans text-vbx-muted text-sm leading-relaxed flex gap-2">
                        <span className="text-vbx-teal flex-shrink-0 font-mono">&rarr;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-mono text-xs" style={{ color: 'rgba(46,168,145,0.65)' }}>{partner.ids}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── REPO ASSETS ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">{'// 03'}&nbsp;&nbsp;ANALYTICAL DOCUMENTATION</p>
          <h2 className="font-display text-vbx-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            Evidence Base
          </h2>
          <p className="font-sans text-vbx-muted mb-10 max-w-[640px]" style={{ fontSize: '0.9375rem', lineHeight: '1.7' }}>
            Every deployment stage is anchored to an analytical document in the
            &nbsp;<span className="font-mono text-vbx-teal">khaaliswooden-max/cah</span>&nbsp;repo.
            These are not slide decks — they are production-quality methodology documents.
          </p>
          <div className="data-line mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ASSETS.map((a, i) => (
              <Reveal key={a.file} delay={i * 60}>
                <div
                  className="p-5"
                  style={{ border: '1px solid rgba(46,168,145,0.18)', background: 'rgba(255,255,255,0.02)', borderRadius: '2px' }}
                >
                  <p className="font-mono text-xs tracking-[0.06em] mb-2" style={{ color: 'rgba(46,168,145,0.65)' }}>{a.file}</p>
                  <p className="font-sans text-vbx-white text-sm font-medium mb-2">{a.label}</p>
                  <p className="font-sans text-vbx-muted" style={{ fontSize: '0.8125rem', lineHeight: '1.6' }}>{a.short}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <div className="data-line mb-12" />
          <div className="max-w-[660px] mx-auto text-center">
            <h2 className="font-display text-vbx-white mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: '1.3' }}>
              Piloting CAHSP at your facility or network?
            </h2>
            <p className="font-sans text-vbx-muted mb-10" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
              Visionblox and Zuup Innovation Lab are actively enrolling pilot CAHs in Washington
              and Montana for the P0 baseline scoring cycle. State hospital associations and
              rural health networks are invited to contact us directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:khaalis.wooden@visionblox.com?subject=CAHSP%20Pilot%20Enrollment" className="btn-gold">
                ENROLL IN PILOT
              </a>
              <Link href="/cah" className="btn-teal-outline">VIEW ENGINE DOCS</Link>
            </div>
          </div>
          <div className="data-line mt-12" />
        </div>
      </section>

    </div>
  )
}
