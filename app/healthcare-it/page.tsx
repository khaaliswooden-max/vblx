'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

// ─── Past Performance Data ────────────────────────────────────────────────────

const ENGAGEMENTS = [
  {
    client: 'Leading National Integrated Healthcare System',
    project: 'Patient Portal',
    relevance: '10 / 10',
    relevanceNote: 'PRIMARY FEDERAL REFERENCE',
    relevanceColor: 'var(--vbx-gold)',
    technologies: ['Epic HealthConnect (SOAP/REST/Kafka)', 'AEM 6.5', 'Pexip Telehealth', '21st Century Cures Act Compliance', 'Federated SSO'],
    outcomes: [
      '99.8% uptime SLA maintained across 100,000+ daily users.',
      '5–10% annual growth in online appointment volume over the engagement period.',
      'Zero downtime deployments across all production releases.',
      'Direct applicability to VA OIT, HHS, and state Medicaid RFPs evaluating Epic integration and Cures Act compliance.',
    ],
  },
  {
    client: 'California DHCS',
    clientSuffix: 'State medicaid authority',
    project: 'Cost & Finance Reporting System (CFRS)',
    relevance: '10 / 10',
    relevanceNote: 'MITA-COMPLIANT // CMS-ADJACENT',
    relevanceColor: 'var(--vbx-gold)',
    technologies: ['MITA', '.NET Core 2.0', 'Angular', 'Azure DevOps', 'SQL Server', 'SSIS/SSRS', 'SOA'],
    outcomes: [
      'Eliminated manual cost sheet errors across all state and county users.',
      'Real-time cost reporting pipeline deployed.',
      '60% labor cost reduction via AI-powered document processing (96% OCR accuracy).',
      'MITA compliance is the CMS federal standard for all state Medicaid agencies — this engagement directly maps to CMS, HHS, and HRSA procurement evaluations.',
    ],
  },
]

// ─── Capability Matrix Data ───────────────────────────────────────────────────

const CAPABILITIES = [
  { capability: 'Epic EMR Integration',             depth: 'Direct delivery',                      deliveredBy: 'Principal architect' },
  { capability: 'HL7 Data Processing (ETL)',         depth: 'Direct delivery',                      deliveredBy: 'Solution architect · data engineering' },
  { capability: 'Patient Portal Architecture',       depth: '2 projects delivered',                 deliveredBy: 'Principal + solution architect' },
  { capability: 'MITA-Compliant System Design',      depth: 'Direct delivery',                      deliveredBy: 'Solution architect' },
  { capability: 'Medicaid Legacy Modernization',     depth: 'Direct delivery',                      deliveredBy: 'Solution architect' },
  { capability: 'Healthcare AI / OCR / NLP',         depth: 'Quantified outcome — 96% accuracy',   deliveredBy: 'Data engineering / AI lead' },
  { capability: 'Claims Processing at Scale',        depth: 'Direct delivery — millions/day',       deliveredBy: 'Principal architect' },
  { capability: 'Healthcare Cloud Architecture',     depth: 'Direct delivery — AWS',                deliveredBy: 'Principal + solution architect' },
  { capability: 'Cures Act / Information Blocking',  depth: 'Direct compliance delivery',           deliveredBy: 'Principal architect' },
  { capability: 'HIPAA Security & HITRUST Audits',   depth: '13 years documented',                  deliveredBy: 'CISO / security practice' },
  { capability: 'Section 508 / ADA Accessibility',   depth: 'Direct delivery',                      deliveredBy: 'Principal architect' },
  { capability: 'Telehealth / eVisit Platforms',     depth: 'Direct delivery',                      deliveredBy: 'Principal architect' },
]

// ─── Personnel Data ───────────────────────────────────────────────────────────

const TEAM = [
  {
    title: 'CEO / Principal Architect',
    bio: 'Technical Product Owner at a leading national integrated healthcare system across 7+ product modules for four years. Delivered 21st Century Cures Act compliance in production. Built Epic HealthConnect integrations. The primary proposal figure for any healthcare IT prime bid.',
    certs: 'AWS Solutions Architect (Associate) · AWS Cloud Practitioner · PMP · PGP AI/ML (UT McCombs)',
  },
  {
    title: 'Senior Solution Architect',
    bio: 'On-site delivery at California DHCS, the state Medicaid authority, for the MITA-compliant CFRS modernization. Built HL7 ETL pipelines and a full patient/provider portal on microservices. VBX\'s strongest credential for state Medicaid and CMS-adjacent opportunities.',
    certs: 'Certified Scrum Master (CSM) · Deep .NET / SQL Server / Azure',
  },
  {
    title: 'Chief Information Security Officer',
    bio: '13 years information security, healthcare sector dominant. Conducted third-party HITRUST framework security assessments at a global healthcare organization. A genuine discriminator against firms that cite HIPAA without HITRUST audit credentials on staff.',
    certs: 'CISA · CRISC · CISM · LA-ISO27001 · CSA STAR · PIMS (GDPR)',
  },
  {
    title: 'Director, Data Engineering & Products',
    bio: 'AI/ML lead. Delivered the document intelligence system at CA DHCS: 96% OCR accuracy, 60% labor reduction. Python, Spark, Kafka, Snowflake, Scikit-learn, Keras. Stack applicable to health data analytics, predictive modeling, and population health management RFPs.',
    certs: 'PGP AI/ML (UT Austin McCombs)',
  },
]

// ─── Opportunity Targets ──────────────────────────────────────────────────────

const OPPORTUNITIES = [
  {
    tier: 'TIER 1 // HIGHEST CONFIDENCE',
    headline: 'State Medicaid Modernization',
    body: 'MITA-compliant system architecture is a direct past performance match. Our CA DHCS delivery is a qualifying reference for any state pursuing MITA transition or MMIS modernization. Target states: CA (relationship exists), WA DOH (active pipeline), MD Medicaid.',
    tierColor: 'var(--vbx-gold)',
  },
  {
    tier: 'TIER 1 // HIGH CONFIDENCE',
    headline: 'Patient Portal / Digital Front Door',
    body: 'Leading national integrated healthcare system patient portal work maps directly to VA Veteran-Facing Digital Modernization, HHS agency web portal RFPs, and Indian Health Service patient access projects.',
    tierColor: 'var(--vbx-gold)',
  },
  {
    tier: 'TIER 2 // TECHNICAL DISCRIMINATOR',
    headline: 'Healthcare AI / Document Intelligence',
    body: '96% OCR accuracy at a state Medicaid agency is a quantified differentiator most small firms cannot match. Target: HHS document processing, CMS audit intelligence, state health department document management RFPs.',
    tierColor: 'var(--vbx-teal)',
  },
  {
    tier: 'TIER 3 // BUILD YEAR',
    headline: 'Federal Agency Healthcare IT (Build Track)',
    body: 'VA OIT, HHS, HRSA, AHRQ, CMS IT. Current strategy: win SLED health contract FY26 → use as federal-analog reference → prime federal health IT FY27–28. Not a FY26 prime pursuit — a FY26 capability-build year.',
    tierColor: 'var(--vbx-muted)',
  },
]

// ─── Scroll-animation hook ────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

function RevealRow({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateX(-16px)'
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

// ─── Page Component ───────────────────────────────────────────────────────────

export default function HealthcareITPage() {
  return (
    <div className="bg-vbx-offwhite min-h-screen">

      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-vbx-offwhite overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none"/>
        <div className="container-wide">
          <p className="font-mono text-vbx-navy text-sm tracking-[0.15em] mb-6">
            CAGE: 9Z4X2&nbsp;&nbsp;·&nbsp;&nbsp;UEI: H4X2Z7R9E3E3
          </p>
          <h1
            className="font-display text-vbx-navy mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}
          >
            Healthcare Intelligence
            <br />Infrastructure
          </h1>

          {/* Keyword bar */}
          <p className="font-mono text-vbx-navy mb-8 leading-relaxed" style={{ fontSize: '0.8125rem', letterSpacing: '0.06em' }}>
            MITA&nbsp;&nbsp;·&nbsp;&nbsp;EPIC EMR&nbsp;&nbsp;·&nbsp;&nbsp;HL7/FHIR&nbsp;&nbsp;·&nbsp;&nbsp;HIPAA&nbsp;&nbsp;·&nbsp;&nbsp;SECTION 508&nbsp;&nbsp;·&nbsp;&nbsp;CURES ACT
          </p>

          <p className="font-sans text-vbx-navy-light max-w-[680px]" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
            Visionblox has delivered healthcare IT infrastructure for commercial
            healthcare organizations at federal-analog scale. Our technical staff
            hold direct delivery experience in every major federal healthcare IT
            domain — not claimed capability, demonstrated delivery. $3.3M in
            documented healthcare portfolio value across a leading national integrated healthcare system and
            California DHCS.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 data-line"/>
      </section>

      {/* ── PAST PERFORMANCE ──────────────────────────────────────────────── */}
      <section id="past-performance" className="section-padding bg-vbx-offwhite">
        <div className="container-wide">
          <p className="eyebrow">Past performance</p>
          <h2 className="font-display text-vbx-navy mb-10" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Documented Engagements
          </h2>
          <div className="data-line mb-10"/>

          <div className="space-y-10">
            {ENGAGEMENTS.map((eng, i) => (
              <RevealRow key={eng.client} delay={i * 120}>
                <div
                  className="pl-5 py-2"
                  style={{ borderLeft: '3px solid var(--vbx-teal)' }}
                >
                  <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4">
                    <span className="font-mono text-vbx-navy text-sm tracking-[0.08em]">CLIENT</span>
                    <span className="font-sans text-vbx-navy text-sm">
                      {eng.client}
                      {eng.clientSuffix && (
                        <span className="text-vbx-navy-light ml-2 font-mono text-xs">{eng.clientSuffix}</span>
                      )}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4">
                    <span className="font-mono text-vbx-navy text-sm tracking-[0.08em]">PROJECT</span>
                    <span className="font-sans text-vbx-navy text-sm">{eng.project}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 mb-6">
                    <span className="font-mono text-vbx-navy text-sm tracking-[0.08em]">RELEVANCE</span>
                    <span className="font-mono text-sm text-vbx-navy font-semibold" style={{ borderBottom: `2px solid ${eng.relevanceColor}` }}>
                      {eng.relevance}&nbsp;&nbsp;·&nbsp;&nbsp;{eng.relevanceNote}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {eng.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-vbx-navy-light px-2 py-0.5"
                        style={{ border: '1px solid var(--vbx-rule)', borderRadius: '2px' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Outcomes */}
                  <ul className="space-y-2">
                    {eng.outcomes.map((outcome, j) => (
                      <li key={j} className="font-sans text-vbx-navy-light text-sm leading-relaxed flex gap-2">
                        <span className="text-vbx-navy flex-shrink-0 font-mono"></span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealRow>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITY MATRIX ─────────────────────────────────────────────── */}
      <section id="capabilities" className="section-padding" style={{ background: 'var(--vbx-teal-tint)' }}>
        <div className="container-wide">
          <p className="eyebrow">Capability matrix</p>
          <h2 className="font-display text-vbx-navy mb-10" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Demonstrated Stack
          </h2>
          <div className="data-line mb-8"/>

          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: '540px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--vbx-teal)', background: 'var(--vbx-teal-tint)' }}>
                  <th className="text-left py-3 px-4 font-mono text-xs text-vbx-navy tracking-[0.1em] uppercase">Capability</th>
                  <th className="text-left py-3 px-4 font-mono text-xs text-vbx-navy tracking-[0.1em] uppercase">Delivery Depth</th>
                  <th className="text-left py-3 px-4 font-mono text-xs text-vbx-navy tracking-[0.1em] uppercase">Delivered By</th>
                </tr>
              </thead>
              <tbody>
                {CAPABILITIES.map((row, i) => (
                  <tr
                    key={row.capability}
                    style={{
                      background: i % 2 === 1 ? 'var(--vbx-rule)' : 'transparent',
                      borderBottom: '1px solid var(--vbx-rule)',
                    }}
                  >
                    <td className="py-3 px-4 font-sans text-sm text-vbx-navy">{row.capability}</td>
                    <td className="py-3 px-4 font-sans text-sm text-vbx-navy-light">{row.depth}</td>
                    <td className="py-3 px-4 font-mono text-xs text-vbx-navy-light">{row.deliveredBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PERSONNEL ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-offwhite">
        <div className="container-wide">
          <p className="eyebrow">Technical staff</p>
          <h2 className="font-display text-vbx-navy mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            The Team Behind the Deliveries
          </h2>
          <p className="font-sans text-vbx-navy-light max-w-[680px] mb-8" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
            Staff are presented by role and credential rather than by name. Named resumes are furnished on request
            under NDA or with a proposal submission.
          </p>
          <div className="data-line mb-10"/>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM.map((member, i) => (
              <RevealRow key={member.title} delay={i * 100}>
                <div
                  className="pl-5 py-4"
                  style={{ borderLeft: '3px solid var(--vbx-rule)' }}
                >
                  <h3 className="font-display text-vbx-navy text-xl mb-1">{member.title}</h3>
                  <p className="font-sans text-vbx-navy-light text-sm leading-relaxed mb-4">{member.bio}</p>
                  <p className="font-mono text-xs" style={{ color: 'var(--vbx-rule)' }}>
                    {member.certs}
                  </p>
                </div>
              </RevealRow>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE POSTURE ────────────────────────────────────────────── */}
      <section
        className="py-14"
        style={{ background: 'var(--vbx-teal-tint)', borderTop: '1px solid var(--vbx-rule)', borderBottom: '1px solid var(--vbx-rule)' }}
      >
        <div className="container-wide">
          <p className="eyebrow">Compliance posture</p>
          <p
            className="font-mono text-vbx-navy leading-[2.2]"
            style={{ fontSize: '0.8rem', letterSpacing: '0.08em' }}
          >
            HIPAA&nbsp;&nbsp;·&nbsp;&nbsp;HITRUST-AUDITED&nbsp;&nbsp;·&nbsp;&nbsp;MITA&nbsp;&nbsp;·&nbsp;&nbsp;SECTION 508&nbsp;&nbsp;·&nbsp;&nbsp;21ST CENTURY CURES ACT
            &nbsp;&nbsp;·&nbsp;&nbsp;FEDRAMP-ARCHITECTURE-AWARE&nbsp;&nbsp;·&nbsp;&nbsp;FISMA-ALIGNED&nbsp;&nbsp;·&nbsp;&nbsp;AWS GOVCLOUD-DEPLOYABLE
          </p>
        </div>
      </section>

      {/* ── OPPORTUNITY TARGETS ───────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-offwhite">
        <div className="container-wide">
          <p className="eyebrow">Opportunity targets</p>
          <h2 className="font-display text-vbx-navy mb-10" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Where We Win
          </h2>
          <div className="data-line mb-10"/>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPPORTUNITIES.map((opp) => (
              <div
                key={opp.headline}
                className="p-6"
                style={{ border: '1px solid var(--vbx-rule)', background: 'var(--vbx-teal-tint)', borderRadius: '2px' }}
              >
                <p className="font-mono text-xs tracking-[0.1em] mb-4 text-vbx-navy" style={{ borderLeft: `3px solid ${opp.tierColor}`, paddingLeft: '0.5rem' }}>
                  {opp.tier}
                </p>
                <h3 className="font-display text-vbx-navy text-xl mb-4">{opp.headline}</h3>
                <p className="font-sans text-vbx-navy-light text-sm leading-relaxed">{opp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAGE CTA ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-offwhite">
        <div className="container-wide">
          <div className="data-line mb-12"/>

          <div className="max-w-[680px] mx-auto text-center">
            <h2
              className="font-display text-vbx-navy mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: '1.3' }}
            >
              We build the systems federal healthcare programs depend on.
              If your requirement demands it, we are ready to brief.
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href="mailto:services@visionblox.com?subject=Healthcare%20IT%20Capability%20Briefing"
                className="btn-primary"
              >
                REQUEST A CAPABILITY BRIEFING
              </a>
              <a
                href="mailto:services@visionblox.com?subject=Capabilities%20Statement%20Request"
                className="btn-secondary"
              >
                DOWNLOAD CAPABILITIES STATEMENT
              </a>
            </div>
          </div>

          <div className="data-line mt-12"/>
        </div>
      </section>

    </div>
  )
}
