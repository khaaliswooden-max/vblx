'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const SCOPE = [
  { label: 'PHASE 1 PILOT', count: '89 CAHs', detail: 'Washington (39) + Montana (50)', note: 'WSHA + MHA benchmark networks', color: '#F7B801' },
  { label: 'NATIONAL PIPELINE', count: '1,377 CAHs', detail: 'Full CMS Hospital Compare dataset', note: 'All US Critical Access Hospitals', color: '#2EA891' },
]

const DOCS = [
  { file: 'gap-analysis-1.md', title: 'Gap Analysis — Opportunity Map', desc: '$1.97M/yr opportunity: operating margin (−2.3%), denial rate (8.7%), labor cost ratio (58.2%).' },
  { file: 'gap-analysis-2.md', title: 'Gap Analysis — Priority Actions', desc: 'ROI-ranked interventions: pre-bill scrubbing (+$298K/90d), staffing (+$580K/6mo), swing-bed (+$185K/12mo).' },
  { file: 'gap-analysis-3.md', title: 'Gap Analysis — Confidence Assessment', desc: '70% overall grounding score across 6 validation dimensions. Regulatory compliance: 95%.' },
  { file: 'PHASE1_EMPIRICAL_VALIDATION.md', title: 'Phase 1 Empirical Validation', desc: '30-day evidence base: WA/MT state data, WSHA/MHA benchmarks, CARC/RARC denial code mapping.' },
  { file: 'OPERATIONAL_BENCHMARKS.md', title: 'Operational Benchmarks', desc: '39 daily/weekly/monthly KPIs with staff checklists. Green/Yellow/Red/Black status tracking.' },
  { file: 'MV-CAHI.md', title: 'MV-CAHI Specification', desc: 'Minimum Viable CAH Infrastructure: clinical, financial, technical, workforce, and computational baselines.' },
  { file: 'OPTIMIZATION.md', title: 'Optimization Framework', desc: 'Lagrangian dual-objective model. KKT conditions. Sequential Quadratic Programming execution.' },
  { file: 'pareto.py', title: 'Pareto Front Generator', desc: 'Complete Pareto frontier across profit–quality trade-off space. Configurable epsilon and weight vectors.' },
  { file: 'robust.py', title: 'Robust Optimization', desc: 'Bertsimas–Sim robust formulation under input data uncertainty. Gamma-parameterized constraint tightening.' },
]

const PHASES = [
  {
    execLabel: 'Phase 1',
    execFile: 'PHASE1_EMPIRICAL_VALIDATION.md',
    execDesc: '30-day empirical benchmark evidence base for WA + MT CAHs.',
    deplLabel: 'P0',
    deplDesc: 'Now — HCRIS baseline scoring and Type A/B facility classification.',
    deplColor: '#F7B801',
  },
  {
    execLabel: 'Phase 2',
    execFile: 'phase2_optimization_execution.py',
    execDesc: 'Lagrangian dual-objective optimization → Pareto frontier.',
    deplLabel: 'P1',
    deplDesc: 'Q3 2026 — Type A benchmark cycle (known-template interventions).',
    deplColor: '#2EA891',
  },
  {
    execLabel: 'Phase 3',
    execFile: 'phase3_pilot_execution.py',
    execDesc: 'Pilot implementation and prospective ROI validation.',
    deplLabel: 'P2',
    deplDesc: 'Q1 2027 — Type B benchmark cycle (novel architecture evaluation).',
    deplColor: '#8892A4',
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

export default function CAHPage() {
  return (
    <div className="bg-vbx-navy min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div className="container-wide relative">
          <p className="font-mono text-vbx-teal mb-6 tracking-[0.15em]" style={{ fontSize: '0.75rem' }}>
            {'// CAH // CRITICAL ACCESS HOSPITAL TRANSFORMATION ENGINE'}
          </p>
          <p className="font-mono mb-3 tracking-[0.1em]" style={{ fontSize: '0.7rem', color: 'rgba(46,168,145,0.6)' }}>
            VISIONBLOX LLC&nbsp;&nbsp;&times;&nbsp;&nbsp;ZUUP INNOVATION LAB
          </p>
          <h1
            className="font-display text-vbx-white mb-7"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1', maxWidth: '820px' }}
          >
            CAH Transformation Engine
          </h1>
          <p className="font-sans text-vbx-muted mb-8 max-w-[640px]" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
            Dual-objective optimization for Critical Access Hospitals — simultaneously
            targeting a 5% operating margin improvement and MBQIP quality benchmarks
            within federal regulatory constraints (42 CFR §&thinsp;485.610–647).
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://cah-zeta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-teal-outline"
            >
              OPEN LIVE DASHBOARD &rarr;
            </a>
            <Link href="/cahsp" className="btn-gold">VIEW CAHSP ROADMAP</Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 data-line" />
      </section>

      {/* ── GEOGRAPHIC SCOPE ──────────────────────────────────────────────── */}
      <section id="scope" className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">{'// 01'}&nbsp;&nbsp;GEOGRAPHIC SCOPE</p>
          <h2 className="font-display text-vbx-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            Pilot vs. Pipeline
          </h2>
          <p className="font-sans text-vbx-muted mb-10 max-w-[640px]" style={{ fontSize: '0.9375rem', lineHeight: '1.7' }}>
            The Phase 1 empirical validation is scoped to Washington and Montana,
            leveraging WSHA and MHA benchmark networks for state-specific ground truth.
            The underlying pipeline architecture processes the full national CAH dataset.
          </p>
          <div className="data-line mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SCOPE.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="p-6" style={{ border: `1px solid ${s.color}40`, background: 'rgba(255,255,255,0.02)', borderRadius: '2px' }}>
                  <p className="font-mono text-xs tracking-[0.12em] mb-3" style={{ color: s.color }}>{s.label}</p>
                  <p className="font-display text-vbx-white mb-2" style={{ fontSize: '2rem' }}>{s.count}</p>
                  <p className="font-sans text-vbx-muted text-sm mb-1">{s.detail}</p>
                  <p className="font-mono text-xs" style={{ color: 'rgba(46,168,145,0.6)' }}>{s.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHASE CROSS-REFERENCE ─────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">{'// 02'}&nbsp;&nbsp;PHASE REFERENCE</p>
          <h2 className="font-display text-vbx-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            Execution Phases &harr; Deployment Cycle
          </h2>
          <p className="font-sans text-vbx-muted mb-10 max-w-[640px]" style={{ fontSize: '0.9375rem', lineHeight: '1.7' }}>
            Two independent naming systems coexist. <strong className="text-vbx-white">Execution phases</strong> (Phase&nbsp;1/2/3)
            are repo file milestones. <strong className="text-vbx-white">Deployment cycle labels</strong> (P0/P1/P2)
            are CAHSP roadmap stages. They map 1-to-1 but are not interchangeable.
          </p>
          <div className="data-line mb-8" />
          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: '580px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #2EA891', background: 'rgba(46,168,145,0.06)' }}>
                  <th className="text-left py-3 px-4 font-mono text-xs text-vbx-teal tracking-[0.1em] uppercase">Execution (Repo)</th>
                  <th className="text-left py-3 px-4 font-mono text-xs text-vbx-teal tracking-[0.1em] uppercase">File</th>
                  <th className="text-left py-3 px-4 font-mono text-xs text-vbx-teal tracking-[0.1em] uppercase">Deployment (CAHSP)</th>
                  <th className="text-left py-3 px-4 font-mono text-xs text-vbx-teal tracking-[0.1em] uppercase">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {PHASES.map((p, i) => (
                  <tr key={p.execLabel} style={{ background: i % 2 === 1 ? 'rgba(255,255,255,0.03)' : 'transparent', borderBottom: '1px solid rgba(46,168,145,0.08)' }}>
                    <td className="py-3 px-4">
                      <span className="font-mono text-sm text-vbx-white">{p.execLabel}</span>
                      <p className="font-sans text-xs text-vbx-muted mt-0.5">{p.execDesc}</p>
                    </td>
                    <td className="py-3 px-4 font-mono text-xs" style={{ color: 'rgba(46,168,145,0.75)' }}>{p.execFile}</td>
                    <td className="py-3 px-4">
                      <span className="font-mono text-sm font-bold" style={{ color: p.deplColor }}>{p.deplLabel}</span>
                    </td>
                    <td className="py-3 px-4 font-sans text-xs text-vbx-muted">{p.deplDesc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTATION INDEX ───────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">{'// 03'}&nbsp;&nbsp;DOCUMENTATION INDEX</p>
          <h2 className="font-display text-vbx-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            Repository Assets
          </h2>
          <p className="font-sans text-vbx-muted mb-10 max-w-[640px]" style={{ fontSize: '0.9375rem', lineHeight: '1.7' }}>
            The CAH repo ships production-quality analytical documentation alongside
            the optimization code. All files below are in the&nbsp;
            <span className="font-mono text-vbx-teal">khaaliswooden-max/cah</span> repository.
          </p>
          <div className="data-line mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DOCS.map((doc, i) => (
              <Reveal key={doc.file} delay={i * 60}>
                <div
                  className="p-5 h-full"
                  style={{ border: '1px solid rgba(46,168,145,0.18)', background: 'rgba(255,255,255,0.02)', borderRadius: '2px' }}
                >
                  <p className="font-mono text-xs tracking-[0.06em] mb-2" style={{ color: 'rgba(46,168,145,0.7)' }}>
                    {doc.file}
                  </p>
                  <p className="font-sans text-vbx-white text-sm font-medium mb-2">{doc.title}</p>
                  <p className="font-sans text-vbx-muted" style={{ fontSize: '0.8125rem', lineHeight: '1.6' }}>{doc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER ATTRIBUTION ───────────────────────────────────────────── */}
      <section
        className="py-14"
        style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(46,168,145,0.1)', borderBottom: '1px solid rgba(46,168,145,0.1)' }}
      >
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-8">{'// 04'}&nbsp;&nbsp;PARTNERSHIP</p>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex-1">
              <h3 className="font-display text-vbx-white text-xl mb-3">VISIONBLOX LLC</h3>
              <p className="font-sans text-vbx-muted text-sm leading-relaxed">
                System architecture, optimization engine, FHIR data pipeline, dashboard infrastructure,
                regulatory constraint modeling, and deployment. CAGE: 9Z4X2 &middot; UEI: H4X2Z7R9E3E3.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="font-display text-vbx-white text-xl mb-3">ZUUP INNOVATION LAB</h3>
              <p className="font-sans text-vbx-muted text-sm leading-relaxed">
                Research partnership providing domain expertise in rural healthcare operations,
                benchmark network access, and clinical workflow validation for WA and MT pilot sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <div className="data-line mb-12" />
          <div className="max-w-[660px] mx-auto text-center">
            <h2 className="font-display text-vbx-white mb-6" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: '1.3' }}>
              Deploying this at a Critical Access Hospital?
            </h2>
            <p className="font-sans text-vbx-muted mb-10" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
              Visionblox and Zuup Innovation Lab provide briefings for CAH administrators,
              rural health networks, and state hospital associations evaluating the CAHSP platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:khaalis.wooden@visionblox.com?subject=CAH%20Transformation%20Engine%20Briefing" className="btn-gold">
                REQUEST A BRIEFING
              </a>
              <Link href="/cahsp" className="btn-teal-outline">VIEW CAHSP ROADMAP</Link>
            </div>
          </div>
          <div className="data-line mt-12" />
        </div>
      </section>

    </div>
  )
}
