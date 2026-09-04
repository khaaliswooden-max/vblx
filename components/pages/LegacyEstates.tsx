'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

/**
 * Legacy Estates — Relian™ Legacy Code Assessment.
 *
 * COPY IS CLAIM-GATED. The body text on this page is legally reviewed. Do not
 * rewrite, condense or "improve" it. In particular the SCOPE_OF_CLAIM block is
 * mandatory and must render in full: the migration engine it describes is in
 * active development, and this page is deliberate about that boundary.
 *
 * Never state on this page that Relian has completed a production migration or
 * has production customers; that it supports CICS, VSAM, JCL, copybooks or
 * embedded SQL; any language pair other than COBOL; semantic-preservation,
 * coverage or defect-density figures as achieved results; equivalence with IBM
 * Enterprise COBOL; or any GSA MAS SIN number.
 *
 * COLOUR. The design reference for this page was drawn on a dark field with
 * teal eyebrows, teal stat figures and gold flags. This site is a light-ground
 * system, and on light grounds the brand contract in app/globals.css permits
 * only navy (12.04:1) and navy-light (10.81:1) as text colours — teal measures
 * 2.69 and gold 1.63. The accents are therefore carried as RULES, BORDERS and
 * BADGE OUTLINES rather than as coloured text, and the teal/gold distinction
 * the reference drew between the first three commitments and the fourth is
 * preserved as a rule colour. Inside the closing navy band the palette opens
 * back up, which is where the teal tagline lives.
 */

// ─── Hero ─────────────────────────────────────────────────────────────────────

const HREF_ASSESSMENT =
  'mailto:khaalis.wooden@visionblox.com?subject=Legacy%20Code%20Assessment%20Inquiry'

const HERO_LEDE =
  'Before any agency can modernize a mainframe, it has to answer one question: what is actually in there? Vendors answer with estimates. Relian answers with measurements — a signed, deterministic inventory of your legacy code that your own team can verify without trusting us.'

const HERO_META = [
  'From $8,000',
  'Read-only',
  'Source never leaves your perimeter',
  'Orderable nationwide via Montana MAPS',
]

// ─── 01 · The problem ─────────────────────────────────────────────────────────

const PROBLEM_P1 =
  'State Medicaid claims systems, eligibility engines, tax platforms, and pension administration still run on COBOL — in some cases on cores federally certified before 1980. The Government Accountability Office has reported critical federal systems running on COBOL and Assembly Language Code with a dwindling number of people available to support them. State modernization assessments describe the same condition: decades-old mainframes and source that is difficult to interpret.'

const PROBLEM_P2_LEAD =
  'The result is a scoping failure that repeats across the country. An agency cannot describe its own estate precisely enough to price the work, and neither can the vendors bidding on it. Estimates substitute for measurements, scope grows, and schedules slip. '
const PROBLEM_P2_STRONG =
  'A verified inventory changes the economics of every decision that follows it.'

const STATS = [
  {
    figure: '4.61s',
    label:
      'To inventory a 44-program CICS/IMS/DB2 mainframe application — 329 files, no manual intervention',
  },
  {
    figure: '$8,000',
    label:
      'Starting price. Small enough to procure without committing to a modernization program',
  },
  {
    figure: '4',
    label:
      'Independent verification layers on the delivered report, each failing separately and by name',
  },
  {
    figure: '0',
    label: 'Lines of your source code sent to any generative-AI model, at any stage',
  },
]

// ─── 02 · What the assessment delivers ────────────────────────────────────────

const DELIVERABLES = [
  {
    kicker: '01 // INVENTORY',
    title: 'Program & file manifest',
    body: 'Every COBOL program, copybook, and artifact on the tree, each with a SHA-256 digest, under a manifest hash that identifies the codebase independent of its file path.',
  },
  {
    kicker: '02 // COVERAGE',
    title: 'Portfolio construct coverage',
    body: 'The measured share of statements across the estate falling inside a supported, deterministic migration path. Measured — not projected.',
  },
  {
    kicker: '03 // SCOPE',
    title: 'Quotable-today code lines',
    body: 'Code lines carrying no blocking construct. This is the defensible basis for scoping and pricing a migration — the number a contracting officer can hold a vendor to.',
  },
  {
    kicker: '04 // COST DRIVER',
    title: 'Lines requiring grammar expansion',
    body: 'Code lines carrying at least one construct outside the supported set. The honest cost driver that most assessments leave out of the summary.',
  },
  {
    kicker: '05 // RISK',
    title: 'Per-program & portfolio tiering',
    body: 'A published, deterministic tiering rule applied to measured inputs — with the specific rule that fired named in the report, not hidden behind a score.',
  },
  {
    kicker: '06 // DIAGNOSIS',
    title: 'Blocking construct inventory',
    body: 'Which specific verbs and constructs prevent automated migration, named to the line. This is what turns a red status into an actionable work package.',
  },
]

// ─── 03 · How it is different ─────────────────────────────────────────────────
// `accent` selects the rule colour under the label, preserving the reference's
// teal/gold distinction without putting either colour into text.

const COMMITMENTS = [
  {
    title: 'Measured or absent.',
    label: 'NEVER ESTIMATED',
    accent: 'teal' as const,
    body: 'Every quality figure is produced by a process that ran during your assessment, or it is reported as not measured. No constants, no defaults, no formulas standing in for observations. An unmeasured metric returns null by construction, and the attestation layer refuses to sign unmeasured values.',
  },
  {
    title: 'Verifiable without trusting us.',
    label: 'FOUR INDEPENDENT LAYERS',
    accent: 'teal' as const,
    body: 'The report ships with a manifest of digests, an instance signature generated on your machine, and a Visionblox countersignature. The verification tool prints its own SHA-256 on every run so you can confirm you are running what we delivered, and our key fingerprint is re-derivable by you from public material alone.',
  },
  {
    title: 'Your source stays yours.',
    label: 'ZERO EGRESS',
    accent: 'teal' as const,
    body: 'The assessment runs read-only, on-premises or by CLI inside your environment. No customer source code is transmitted to any generative-AI model at any stage. The hosted platform stores Visionblox artifacts only. No new data-exposure surface, no new privacy review.',
  },
  {
    title: 'Honest refusal is a feature.',
    label: 'NO PLACEHOLDER OUTPUT',
    accent: 'gold' as const,
    body: 'Where a program falls outside the supported path, the tool issues a diagnosed refusal naming the construct and the line. It emits no approximate output and issues no attestation — including on a program that is 93% transpilable, because 93% is not 100%. A tool that fails cleanly is the only kind whose successes mean anything.',
  },
]

// ─── 04 · Proven on real mainframe code ───────────────────────────────────────

const EVIDENCE_LEDE =
  'Each run below executed with no per-codebase configuration, no hand-editing of output, and no re-runs to produce a better answer. Two of the three are real mainframe applications carrying CICS, IMS, and DB2.'

const EVIDENCE_ROWS = [
  {
    codebase: 'AWS Mainframe Modernization CardDemo',
    codebaseNote: 'CICS / IMS / DB2',
    scale: '44 programs',
    scaleNote: '329 files',
    wallTime: '4.61 s',
    risk: 'BLOCKED',
    quotable: '20,224 lines',
    grammar: '2,680 lines',
  },
  {
    codebase: 'Open Mainframe Project',
    codebaseNote: 'COBOL Programming Course',
    scale: '30 programs',
    scaleNote: '360 files',
    wallTime: '0.95 s',
    risk: 'BLOCKED',
    quotable: '2,378 lines',
    grammar: '361 lines',
  },
  {
    codebase: 'GnuCOBOL',
    codebaseNote: '',
    scale: '7 programs',
    scaleNote: '406 files',
    wallTime: '1.73 s',
    risk: 'BLOCKED',
    quotable: '5,561 lines',
    grammar: '200 lines',
  },
]

const EVIDENCE_CLOSE_STRONG = 'A BLOCKED result is the product working correctly.'
const EVIDENCE_CLOSE_REST =
  ' These are real mainframe estates. The engine reported them as blocked for full automated migration and named the constructs responsible, rather than returning a favorable coverage figure. An assessment that returns a good number on a difficult estate is worse than no assessment, because a program office will budget against it.'

// ─── 05 · Engagement ──────────────────────────────────────────────────────────

const PHASES = [
  {
    phase: 'PHASE 1',
    title: 'Legacy Code Assessment',
    body: 'Read-only inventory and construct analysis. Signed, verifiable report delivered in days. No changes to your systems, no production access required.',
    price: 'From $8,000',
    priceIsFigure: true,
  },
  {
    phase: 'PHASE 2',
    title: 'Modernization roadmap',
    body: 'A scoped migration plan derived from Phase 1 measurements — sequencing, workstreams, risk register, and a cost basis you can defend in a budget hearing.',
    price: 'Fixed price, scoped from Phase 1',
    priceIsFigure: false,
  },
  {
    phase: 'PHASE 3',
    title: 'Modernization delivery',
    body: 'Systems integration execution against the roadmap, delivered by the team behind Epic/HL7 patient portal infrastructure and the California DHCS MITA reporting system.',
    price: 'T&M · Cost-plus · FFP',
    priceIsFigure: false,
  },
]

const ENGAGEMENT_CLOSE =
  'Phase 1 is deliberately structured as a small, self-contained purchase. It is designed to be procurable without committing your agency to a modernization program — and the artifact it produces belongs to you. Take it to any vendor.'

// ─── 06 · Scope of claim — MANDATORY, RENDERS IN FULL ─────────────────────────

const SCOPE_LEDE =
  'Stated here because an evaluator should not have to discover it in a clarification round.'

const SCOPE_HEADING = 'Relian migration engine — development status'

/** Each bullet is an ordered run of segments; `strong` marks emphasised text. */
const SCOPE_OF_CLAIM: { text: string; strong?: boolean }[][] = [
  [
    { text: 'Relian’s automated migration engine is in active development. It has ' },
    { text: 'no completed production migrations and no production customers.', strong: true },
  ],
  [
    { text: 'Its supported deterministic migration path covers a ' },
    { text: 'COBOL-85 subset.', strong: true },
    {
      text: ' No claim is made regarding automated translation of CICS, VSAM, JCL, copybooks, or embedded SQL.',
    },
  ],
  [{ text: 'No claim is made for any language pair other than COBOL.' }],
  [
    {
      text: 'Semantic preservation, branch coverage, and defect-density figures in the Relian benchmark are ',
    },
    {
      text: 'committed targets defined in advance of solution work — not achieved results',
      strong: true,
    },
    { text: ', and are not represented as such.' },
  ],
  [
    { text: 'The layout engine is verified against GnuCOBOL 3.1.2.0. ' },
    {
      text: 'No equivalence with IBM Enterprise COBOL is claimed or implied.',
      strong: true,
    },
  ],
  [
    { text: 'The ' },
    { text: 'assessment capability', strong: true },
    {
      text: ' described on this page is measured, executed, and independently verifiable today. That distinction is maintained deliberately throughout.',
    },
  ],
]

// ─── Closing band ─────────────────────────────────────────────────────────────

const CTA_HEADING =
  'If you own a COBOL estate, the first question is not who migrates it.'
const CTA_BODY =
  'It is what is actually in there. We answer that in days, for $8,000, with a report your team can verify without trusting us — and that you keep regardless of who does the work.'

// ─── Scroll-reveal helper (mirrors components/pages/LegacyIT.tsx) ─────────────

function RevealRow({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Respect a reduced-motion preference: render in place, no transition.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(12px)'
    el.style.transition = `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return <div ref={ref}>{children}</div>
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LegacyEstates() {
  return (
    <div className="bg-vbx-offwhite min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-vbx-offwhite overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div className="container-wide relative">
          <p className="eyebrow">Relian&trade; Legacy Code Assessment</p>

          <h1
            className="font-display font-bold text-vbx-navy max-w-[17ch]"
            style={{ fontSize: 'clamp(2.125rem, 5.2vw, 3.625rem)', lineHeight: '1.08' }}
          >
            Know exactly what is in your COBOL estate.
          </h1>

          <p
            className="font-sans text-vbx-navy-light max-w-[66ch] mt-6"
            style={{ fontSize: '1.1875rem', lineHeight: '1.7' }}
          >
            {HERO_LEDE}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href={HREF_ASSESSMENT} className="btn-primary">
              Request an assessment
            </a>
            <a href="#what-it-measures" className="btn-secondary">
              See what it measures
            </a>
          </div>

          <div className="rule mt-9 pt-5">
            <ul className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-vbx-navy tracking-[0.06em]">
              {HERO_META.map((item, i) => (
                <li key={item} className="flex items-center gap-3">
                  {item}
                  {i < HERO_META.length - 1 && (
                    <span className="text-vbx-navy-light" aria-hidden="true">
                      &middot;
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 data-line" />
      </section>

      {/* ── 01 · THE PROBLEM ──────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-offwhite">
        <div className="container-wide">
          <p className="eyebrow">01 &mdash; The problem</p>
          <h2
            className="font-display text-vbx-navy max-w-[24ch]"
            style={{ fontSize: 'clamp(1.5625rem, 3.3vw, 2.25rem)', lineHeight: '1.16' }}
          >
            The code runs the program. Nobody left can read it.
          </h2>

          <p
            className="font-sans text-vbx-navy-light max-w-[70ch] mt-5"
            style={{ fontSize: '1.03rem', lineHeight: '1.75' }}
          >
            {PROBLEM_P1}
          </p>
          <p
            className="font-sans text-vbx-navy-light max-w-[70ch] mt-4"
            style={{ fontSize: '1.03rem', lineHeight: '1.75' }}
          >
            {PROBLEM_P2_LEAD}
            <strong className="text-vbx-navy font-semibold">{PROBLEM_P2_STRONG}</strong>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-vbx-rule border border-vbx-rule mt-11">
            {STATS.map((stat, i) => (
              <RevealRow key={stat.figure} delay={i * 80}>
                <div className="bg-vbx-offwhite p-7 h-full">
                  <p
                    className="font-display font-extrabold text-vbx-navy leading-none pb-2 inline-block"
                    style={{ fontSize: '2.125rem', borderBottom: '2px solid var(--vbx-teal)' }}
                  >
                    {stat.figure}
                  </p>
                  <p className="font-sans text-vbx-navy-light text-sm leading-relaxed mt-3">
                    {stat.label}
                  </p>
                </div>
              </RevealRow>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 · WHAT THE ASSESSMENT DELIVERS ─────────────────────────────── */}
      <section
        id="what-it-measures"
        className="section-padding scroll-mt-24"
        style={{ background: 'var(--vbx-teal-tint)' }}
      >
        <div className="container-wide">
          <p className="eyebrow">02 &mdash; What the assessment delivers</p>
          <h2
            className="font-display text-vbx-navy max-w-[24ch] mb-8"
            style={{ fontSize: 'clamp(1.5625rem, 3.3vw, 2.25rem)', lineHeight: '1.16' }}
          >
            Six measurements a program office can budget against.
          </h2>
          <div className="data-line mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-vbx-rule border border-vbx-rule">
            {DELIVERABLES.map((card, i) => (
              <RevealRow key={card.kicker} delay={i * 70}>
                <div
                  className="p-7 h-full"
                  style={{ background: 'var(--vbx-offwhite)' }}
                >
                  <p className="font-mono text-xs text-vbx-navy tracking-[0.1em] mb-3">
                    {card.kicker}
                  </p>
                  <h3 className="font-display text-vbx-navy text-lg mb-2">{card.title}</h3>
                  <p className="font-sans text-vbx-navy-light text-sm leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </RevealRow>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 · HOW IT IS DIFFERENT ──────────────────────────────────────── */}
      <section className="section-padding bg-vbx-offwhite">
        <div className="container-wide">
          <p className="eyebrow">03 &mdash; How it is different</p>
          <h2
            className="font-display text-vbx-navy max-w-[24ch] mb-8"
            style={{ fontSize: 'clamp(1.5625rem, 3.3vw, 2.25rem)', lineHeight: '1.16' }}
          >
            Four commitments, enforced in the engine &mdash; not in the marketing.
          </h2>

          <div className="border-t border-vbx-rule">
            {COMMITMENTS.map((row, i) => (
              <RevealRow key={row.label} delay={i * 70}>
                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,300px)_1fr] gap-3 md:gap-7 py-7 border-b border-vbx-rule items-start">
                  <div>
                    <h3 className="font-display text-vbx-navy text-lg">{row.title}</h3>
                    <span
                      className="inline-block font-mono text-xs text-vbx-navy uppercase tracking-[0.12em] mt-2 pb-1"
                      style={{
                        borderBottom: `2px solid ${
                          row.accent === 'gold' ? 'var(--vbx-gold)' : 'var(--vbx-teal)'
                        }`,
                      }}
                    >
                      {row.label}
                    </span>
                  </div>
                  <p
                    className="font-sans text-vbx-navy-light"
                    style={{ fontSize: '0.97rem', lineHeight: '1.75' }}
                  >
                    {row.body}
                  </p>
                </div>
              </RevealRow>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 · PROVEN ON REAL MAINFRAME CODE ────────────────────────────── */}
      <section className="section-padding" style={{ background: 'var(--vbx-teal-tint)' }}>
        <div className="container-wide">
          <p className="eyebrow">04 &mdash; Proven on real mainframe code</p>
          <h2
            className="font-display text-vbx-navy max-w-[24ch] mb-5"
            style={{ fontSize: 'clamp(1.5625rem, 3.3vw, 2.25rem)', lineHeight: '1.16' }}
          >
            Run against public mainframe codebases. Results published as found.
          </h2>
          <p
            className="font-sans text-vbx-navy-light max-w-[70ch] mb-8"
            style={{ fontSize: '1.03rem', lineHeight: '1.75' }}
          >
            {EVIDENCE_LEDE}
          </p>

          {/* tabIndex makes the scroll container reachable by keyboard: at narrow
              widths the table scrolls horizontally, and a scrollable region that
              cannot be focused is unreachable without a pointer (axe
              scrollable-region-focusable). */}
          <div
            className="overflow-x-auto border border-vbx-rule"
            style={{ borderRadius: '4px' }}
            tabIndex={0}
            role="region"
            aria-label="Assessment results by codebase"
          >
            <table
              className="w-full"
              style={{ borderCollapse: 'collapse', minWidth: '720px' }}
            >
              <caption className="sr-only">
                Relian assessment runs against three public mainframe codebases, with
                scale, wall time, portfolio risk, quotable code lines and lines
                requiring grammar work for each.
              </caption>
              <thead>
                <tr
                  style={{
                    background: 'var(--vbx-offwhite)',
                    borderBottom: '2px solid var(--vbx-teal)',
                  }}
                >
                  {['Codebase', 'Scale', 'Wall time', 'Portfolio risk', 'Quotable today', 'Needs grammar work'].map(
                    (h) => (
                      <th
                        key={h}
                        scope="col"
                        className="text-left py-3 px-4 font-mono text-xs text-vbx-navy tracking-[0.1em] uppercase"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {EVIDENCE_ROWS.map((row, i) => (
                  <tr
                    key={row.codebase}
                    style={{
                      background: i % 2 === 1 ? 'var(--vbx-offwhite)' : 'transparent',
                      borderBottom: '1px solid var(--vbx-rule)',
                    }}
                  >
                    <th
                      scope="row"
                      className="text-left py-3 px-4 font-sans text-sm text-vbx-navy font-semibold align-top"
                    >
                      {row.codebase}
                      {row.codebaseNote && (
                        <span className="block font-normal font-mono text-xs text-vbx-navy-light mt-1">
                          {row.codebaseNote}
                        </span>
                      )}
                    </th>
                    <td className="py-3 px-4 font-sans text-sm text-vbx-navy-light align-top whitespace-nowrap">
                      {row.scale}
                      <span className="block text-xs mt-1">{row.scaleNote}</span>
                    </td>
                    <td className="py-3 px-4 font-mono text-sm text-vbx-navy-light align-top whitespace-nowrap">
                      {row.wallTime}
                    </td>
                    <td className="py-3 px-4 align-top">
                      <span
                        className="font-mono text-[0.65rem] tracking-[0.08em] uppercase whitespace-nowrap px-2 py-1 rounded-sm text-vbx-navy bg-transparent"
                        style={{ border: '1px solid var(--vbx-gold)' }}
                      >
                        {row.risk}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-sans text-sm text-vbx-navy-light align-top whitespace-nowrap">
                      {row.quotable}
                    </td>
                    <td className="py-3 px-4 font-sans text-sm text-vbx-navy-light align-top whitespace-nowrap">
                      {row.grammar}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p
            className="font-sans text-vbx-navy-light max-w-[70ch] mt-7"
            style={{ fontSize: '1.03rem', lineHeight: '1.75' }}
          >
            <strong className="text-vbx-navy font-semibold">{EVIDENCE_CLOSE_STRONG}</strong>
            {EVIDENCE_CLOSE_REST}
          </p>
        </div>
      </section>

      {/* ── 05 · ENGAGEMENT ───────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-offwhite">
        <div className="container-wide">
          <p className="eyebrow">05 &mdash; Engagement</p>
          <h2
            className="font-display text-vbx-navy max-w-[24ch] mb-8"
            style={{ fontSize: 'clamp(1.5625rem, 3.3vw, 2.25rem)', lineHeight: '1.16' }}
          >
            Start with the map. The map scopes everything after it.
          </h2>
          <div className="data-line mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-vbx-rule border border-vbx-rule">
            {PHASES.map((phase, i) => (
              <RevealRow key={phase.phase} delay={i * 80}>
                <div className="bg-vbx-offwhite p-7 h-full flex flex-col">
                  <p className="font-mono text-xs text-vbx-navy tracking-[0.12em] mb-3">
                    {phase.phase}
                  </p>
                  <h3 className="font-display text-vbx-navy text-lg mb-2">{phase.title}</h3>
                  <p className="font-sans text-vbx-navy-light text-sm leading-relaxed flex-1">
                    {phase.body}
                  </p>
                  <p
                    className={
                      phase.priceIsFigure
                        ? 'font-display font-extrabold text-vbx-navy mt-5 pb-1 inline-block self-start'
                        : 'font-sans font-semibold text-vbx-navy-light text-[0.9375rem] mt-5'
                    }
                    style={
                      phase.priceIsFigure
                        ? { fontSize: '1.375rem', borderBottom: '2px solid var(--vbx-gold)' }
                        : undefined
                    }
                  >
                    {phase.price}
                  </p>
                </div>
              </RevealRow>
            ))}
          </div>

          <p
            className="font-sans text-vbx-navy-light max-w-[70ch] mt-8"
            style={{ fontSize: '1.03rem', lineHeight: '1.75' }}
          >
            {ENGAGEMENT_CLOSE}
          </p>
        </div>
      </section>

      {/* ── 06 · SCOPE OF CLAIM — MANDATORY, RENDERS IN FULL ───────────────── */}
      <section className="section-padding" style={{ background: 'var(--vbx-teal-tint)' }}>
        <div className="container-wide">
          <p className="eyebrow">06 &mdash; Scope of claim</p>
          <h2
            className="font-display text-vbx-navy max-w-[24ch] mb-5"
            style={{ fontSize: 'clamp(1.5625rem, 3.3vw, 2.25rem)', lineHeight: '1.16' }}
          >
            What we do not claim.
          </h2>
          <p
            className="font-sans text-vbx-navy-light max-w-[70ch]"
            style={{ fontSize: '1.03rem', lineHeight: '1.75' }}
          >
            {SCOPE_LEDE}
          </p>

          <div
            className="p-7 md:p-8 mt-10"
            style={{
              background: 'var(--vbx-offwhite)',
              border: '1px solid var(--vbx-rule)',
              borderLeft: '4px solid var(--vbx-gold)',
              borderRadius: '4px',
            }}
          >
            <h3 className="font-display text-vbx-navy text-lg mb-4">{SCOPE_HEADING}</h3>
            <ul className="list-disc pl-5 space-y-2.5 marker:text-vbx-navy">
              {SCOPE_OF_CLAIM.map((bullet, i) => (
                <li
                  key={i}
                  className="font-sans text-vbx-navy-light"
                  style={{ fontSize: '0.97rem', lineHeight: '1.7' }}
                >
                  {bullet.map((seg, j) =>
                    seg.strong ? (
                      <strong key={j} className="text-vbx-navy font-semibold">
                        {seg.text}
                      </strong>
                    ) : (
                      <span key={j}>{seg.text}</span>
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CLOSING BAND — the one navy surface on this page ───────────────── */}
      <section className="band" style={{ borderTop: '3px solid var(--vbx-gold)' }}>
        <div className="container-wide section-padding">
          <div className="max-w-[62ch] mx-auto text-center">
            <p
              className="font-mono text-xs uppercase mb-6"
              style={{ color: 'var(--vbx-teal-light)', letterSpacing: '0.22em' }}
            >
              Build what doesn&rsquo;t exist yet
            </p>

            <h2
              className="font-display font-bold max-w-[26ch] mx-auto"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: '1.25' }}
            >
              {CTA_HEADING}
            </h2>

            <p
              className="mt-5 mx-auto"
              style={{ fontSize: '1.03rem', lineHeight: '1.7', color: 'var(--vbx-offwhite)' }}
            >
              {CTA_BODY}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-9">
              <a href={HREF_ASSESSMENT} className="btn-primary">
                Request an assessment
              </a>
              <Link href="/pastperformance" className="btn-secondary">
                View past performance
              </Link>
            </div>

            <div className="rule mt-10 pt-6">
              <p className="text-sm" style={{ color: 'var(--vbx-offwhite)' }}>
                Khaalis Wooden, MBA
                <span
                  className="block text-xs mt-0.5"
                  style={{ color: 'var(--vbx-teal-light)' }}
                >
                  Director of Enterprise Capture &amp; Compliance
                </span>
              </p>
              <p className="font-mono text-xs mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1">
                <a
                  href="mailto:khaalis.wooden@visionblox.com"
                  className="link"
                  style={{ color: 'var(--vbx-offwhite)' }}
                >
                  khaalis.wooden@visionblox.com
                </a>
                <span aria-hidden="true" style={{ color: 'var(--vbx-teal-light)' }}>
                  &middot;
                </span>
                <a href="tel:+12569881130" className="link" style={{ color: 'var(--vbx-offwhite)' }}>
                  (256) 988-1130
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
