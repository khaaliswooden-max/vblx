'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

// ─── Past Performance Data ────────────────────────────────────────────────────

const ENGAGEMENTS = [
  {
    client: 'Kaiser Permanente',
    project: 'VCare Patient Portal',
    value: '$1,200,000',
    period: '2023',
    relevance: '10 / 10',
    relevanceNote: 'PRIMARY FEDERAL REFERENCE',
    relevanceColor: '#F7B801',
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
    clientSuffix: '// State Medicaid Authority',
    project: 'Cost & Finance Reporting System (CFRS)',
    value: '$2,100,000',
    period: '2022',
    relevance: '10 / 10',
    relevanceNote: 'MITA-COMPLIANT // CMS-ADJACENT',
    relevanceColor: '#F7B801',
    technologies: ['MITA', '.NET Core 2.0', 'Angular', 'Azure DevOps', 'SQL Server', 'SSIS/SSRS', 'SOA'],
    outcomes: [
      'Eliminated manual cost sheet errors across all state and county users.',
      'Real-time cost reporting pipeline deployed.',
      '60% labor cost reduction via AI-powered document processing (96% OCR accuracy).',
      'MITA compliance is the CMS federal standard for all state Medicaid agencies — this engagement directly maps to CMS, HHS, and HRSA procurement evaluations.',
    ],
  },
  {
    client: 'VCare Urgent Care',
    project: 'Patient & Provider Portal',
    value: 'TCV PENDING DOCUMENTATION',
    period: '',
    relevance: '9 / 10',
    relevanceNote: 'HL7/FHIR DISCRIMINATOR',
    relevanceColor: '#2EA891',
    technologies: ['HL7 ETL', 'Microservices', 'Angular', 'SQL Server', 'AWS S3 (Pre-signed URLs)', 'Full PHI Data Surface'],
    outcomes: [
      'End-to-end patient and provider portal — demographics, scheduling, health records, insurance, lab reports, billing.',
      'HL7 data extraction, transformation, and loading from underlying EMR.',
      'HL7/FHIR fluency is a mandatory technical discriminator on federal healthcare IT RFPs.',
    ],
  },
  {
    client: 'Cigna',
    project: 'Manufacturer Rebate Sharing // Claims Processing',
    value: 'TCV PENDING DOCUMENTATION',
    period: '',
    relevance: '8 / 10',
    relevanceNote: 'CLAIMS SCALE // CMS-ANALOGOUS',
    relevanceColor: '#2EA891',
    technologies: ['AWS Batch', 'Lambda', 'Fargate', 'EMR', 'Apache Spark', 'Spring Boot'],
    outcomes: [
      'Millions of medical claims processed daily via cloud-native serverless pipeline.',
      'Architecture directly analogous to CMS/Medicare claims processing and VA payment system modernization.',
    ],
  },
]

// ─── Capability Matrix Data ───────────────────────────────────────────────────

const CAPABILITIES = [
  { capability: 'Epic EMR Integration',             depth: 'Direct delivery',                      personnel: 'Akil Chellam' },
  { capability: 'HL7 Data Processing (ETL)',         depth: 'Direct delivery',                      personnel: 'Saravanan Swaminathan' },
  { capability: 'Patient Portal Architecture',       depth: '3 projects delivered',                 personnel: 'Akil · Saravanan · Magesh' },
  { capability: 'MITA-Compliant System Design',      depth: 'Direct delivery',                      personnel: 'Saravanan Swaminathan' },
  { capability: 'Medicaid Legacy Modernization',     depth: 'Direct delivery',                      personnel: 'Saravanan Swaminathan' },
  { capability: 'Healthcare AI / OCR / NLP',         depth: 'Quantified outcome — 96% accuracy',   personnel: 'Antony Jayaraj' },
  { capability: 'Claims Processing at Scale',        depth: 'Direct delivery — millions/day',       personnel: 'Magesh Ramalingam' },
  { capability: 'Healthcare Cloud Architecture',     depth: 'Direct delivery — AWS',                personnel: 'Magesh · Saravanan' },
  { capability: 'Cures Act / Information Blocking',  depth: 'Direct compliance delivery',           personnel: 'Akil Chellam' },
  { capability: 'HIPAA Security & HITRUST Audits',   depth: '13 years documented',                  personnel: 'Tony Paul' },
  { capability: 'Section 508 / ADA Accessibility',   depth: 'Direct delivery',                      personnel: 'Magesh Ramalingam' },
  { capability: 'Telehealth / eVisit Platforms',     depth: 'Direct delivery',                      personnel: 'Magesh Ramalingam' },
]

// ─── Personnel Data ───────────────────────────────────────────────────────────

const TEAM = [
  {
    name: 'Akil R. Chellam',
    title: 'CEO / Principal Architect',
    bio: 'Technical Product Owner at Kaiser Permanente across 7+ product modules for four years. Delivered 21st Century Cures Act compliance in production. Built Epic HealthConnect integrations. The primary proposal figure for any healthcare IT prime bid.',
    certs: 'AWS Solutions Architect (Associate) · AWS Cloud Practitioner · PMP · PGP AI/ML (UT McCombs)',
  },
  {
    name: 'Saravanan Swaminathan',
    title: 'Senior Solution Architect',
    bio: 'On-site delivery at California DHCS, the state Medicaid authority, for the MITA-compliant CFRS modernization. Built HL7 ETL pipelines and a full patient/provider portal on microservices. VBX\'s strongest credential for state Medicaid and CMS-adjacent opportunities.',
    certs: 'Certified Scrum Master (CSM) · Deep .NET / SQL Server / Azure',
  },
  {
    name: 'Magesh Ramalingam',
    title: 'Full Stack Tech Lead',
    bio: '20 years of enterprise delivery. KP Appointment Center (Node.js / Cloud Foundry / Apigee) and Cigna claims processing (AWS Batch / Lambda / Spark). Section 508/ADA delivery experience at scale.',
    certs: 'AWS Cloud Practitioner · AWS AI Practitioner',
  },
  {
    name: 'Tony Paul',
    title: 'Chief Information Security Officer',
    bio: '13 years information security, healthcare sector dominant. Conducted third-party HITRUST framework security assessments at a global healthcare organization (Wipro). A genuine discriminator against firms that cite HIPAA without HITRUST audit personnel on staff.',
    certs: 'CISA · CRISC · CISM · LA-ISO27001 · CSA STAR · PIMS (GDPR)',
  },
  {
    name: 'Antony Jayaraj',
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
    body: 'MITA-compliant system architecture is a direct past performance match. Saravanan\'s CA DHCS delivery is a qualifying reference for any state pursuing MITA transition or MMIS modernization. Target states: CA (relationship exists), WA DOH (active pipeline), MD Medicaid.',
    tierColor: '#F7B801',
  },
  {
    tier: 'TIER 1 // HIGH CONFIDENCE',
    headline: 'Patient Portal / Digital Front Door',
    body: 'Kaiser and VCare Urgent Care work maps directly to VA Veteran-Facing Digital Modernization, HHS agency web portal RFPs, and Indian Health Service patient access projects.',
    tierColor: '#F7B801',
  },
  {
    tier: 'TIER 2 // TECHNICAL DISCRIMINATOR',
    headline: 'Healthcare AI / Document Intelligence',
    body: '96% OCR accuracy at a state Medicaid agency is a quantified differentiator most small firms cannot match. Target: HHS document processing, CMS audit intelligence, state health department document management RFPs.',
    tierColor: '#2EA891',
  },
  {
    tier: 'TIER 3 // BUILD YEAR',
    headline: 'Federal Agency Healthcare IT (Build Track)',
    body: 'VA OIT, HHS, HRSA, AHRQ, CMS IT. Current strategy: win SLED health contract FY26 → use as federal-analog reference → prime federal health IT FY27–28. Not a FY26 prime pursuit — a FY26 capability-build year.',
    tierColor: '#8892A4',
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
    <div className="bg-vbx-navy min-h-screen">

      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-vbx-navy overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none"/>
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.15em] mb-6">
            CAGE: 9Z4X2&nbsp;&nbsp;//&nbsp;&nbsp;UEI: H4X2Z7R9E3E3
          </p>
          <h1
            className="font-display text-vbx-white mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}
          >
            Healthcare Intelligence
            <br />Infrastructure
          </h1>

          {/* Keyword bar */}
          <p className="font-mono text-vbx-teal mb-8 leading-relaxed" style={{ fontSize: '0.8125rem', letterSpacing: '0.06em' }}>
            MITA&nbsp;&nbsp;//&nbsp;&nbsp;EPIC EMR&nbsp;&nbsp;//&nbsp;&nbsp;HL7/FHIR&nbsp;&nbsp;//&nbsp;&nbsp;HIPAA&nbsp;&nbsp;//&nbsp;&nbsp;SECTION 508&nbsp;&nbsp;//&nbsp;&nbsp;CURES ACT
          </p>

          <p className="font-sans text-vbx-muted max-w-[680px]" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
            Visionblox has delivered healthcare IT infrastructure for commercial
            healthcare organizations at federal-analog scale. Our technical staff
            hold direct delivery experience in every major federal healthcare IT
            domain — not claimed capability, demonstrated delivery. $3.3M in
            documented healthcare portfolio value across Kaiser Permanente and
            California DHCS.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 data-line"/>
      </section>

      {/* ── PAST PERFORMANCE ──────────────────────────────────────────────── */}
      <section id="past-performance" className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">{'// 01'}&nbsp;&nbsp;PAST PERFORMANCE</p>
          <h2 className="font-display text-vbx-white mb-10" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Documented Engagements
          </h2>
          <div className="data-line mb-10"/>

          <div className="space-y-10">
            {ENGAGEMENTS.map((eng, i) => (
              <RevealRow key={eng.client} delay={i * 120}>
                <div
                  className="pl-5 py-2"
                  style={{ borderLeft: '3px solid #2EA891' }}
                >
                  <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4">
                    <span className="font-mono text-vbx-teal text-sm tracking-[0.08em]">CLIENT</span>
                    <span className="font-sans text-vbx-white text-sm">
                      {eng.client}
                      {eng.clientSuffix && (
                        <span className="text-vbx-muted ml-2 font-mono text-xs">{eng.clientSuffix}</span>
                      )}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4">
                    <span className="font-mono text-vbx-teal text-sm tracking-[0.08em]">PROJECT</span>
                    <span className="font-sans text-vbx-white text-sm">{eng.project}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 mb-4">
                    <span className="font-mono text-vbx-teal text-sm tracking-[0.08em]">VALUE</span>
                    <span className="font-mono text-vbx-white text-sm">
                      {eng.value}
                      {eng.period && <span className="text-vbx-muted ml-2">{'// '}{eng.period}</span>}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 mb-6">
                    <span className="font-mono text-vbx-teal text-sm tracking-[0.08em]">RELEVANCE</span>
                    <span className="font-mono text-sm" style={{ color: eng.relevanceColor }}>
                      {eng.relevance}&nbsp;&nbsp;//&nbsp;&nbsp;{eng.relevanceNote}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {eng.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-vbx-muted px-2 py-0.5"
                        style={{ border: '1px solid rgba(46,168,145,0.25)', borderRadius: '2px' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Outcomes */}
                  <ul className="space-y-2">
                    {eng.outcomes.map((outcome, j) => (
                      <li key={j} className="font-sans text-vbx-muted text-sm leading-relaxed flex gap-2">
                        <span className="text-vbx-teal flex-shrink-0 font-mono">→</span>
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
      <section id="capabilities" className="section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">{'// 02'}&nbsp;&nbsp;CAPABILITY MATRIX</p>
          <h2 className="font-display text-vbx-white mb-10" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Demonstrated Stack
          </h2>
          <div className="data-line mb-8"/>

          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: '540px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #2EA891', background: 'rgba(46,168,145,0.06)' }}>
                  <th className="text-left py-3 px-4 font-mono text-xs text-vbx-teal tracking-[0.1em] uppercase">Capability</th>
                  <th className="text-left py-3 px-4 font-mono text-xs text-vbx-teal tracking-[0.1em] uppercase">Delivery Depth</th>
                  <th className="text-left py-3 px-4 font-mono text-xs text-vbx-teal tracking-[0.1em] uppercase">Personnel</th>
                </tr>
              </thead>
              <tbody>
                {CAPABILITIES.map((row, i) => (
                  <tr
                    key={row.capability}
                    style={{
                      background: i % 2 === 1 ? 'rgba(255,255,255,0.03)' : 'transparent',
                      borderBottom: '1px solid rgba(46,168,145,0.08)',
                    }}
                  >
                    <td className="py-3 px-4 font-sans text-sm text-vbx-teal">{row.capability}</td>
                    <td className="py-3 px-4 font-sans text-sm text-vbx-muted">{row.depth}</td>
                    <td className="py-3 px-4 font-mono text-xs text-vbx-white/70">{row.personnel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── PERSONNEL ─────────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">{'// 03'}&nbsp;&nbsp;TECHNICAL STAFF</p>
          <h2 className="font-display text-vbx-white mb-10" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            The Team Behind the Deliveries
          </h2>
          <div className="data-line mb-10"/>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM.map((member, i) => (
              <RevealRow key={member.name} delay={i * 100}>
                <div
                  className="pl-5 py-4"
                  style={{ borderLeft: '3px solid rgba(46,168,145,0.6)' }}
                >
                  <h3 className="font-display text-vbx-white text-xl mb-1">{member.name}</h3>
                  <p className="font-mono text-vbx-muted text-xs tracking-[0.06em] mb-4 uppercase">{member.title}</p>
                  <p className="font-sans text-vbx-muted text-sm leading-relaxed mb-4">{member.bio}</p>
                  <p className="font-mono text-xs" style={{ color: 'rgba(46,168,145,0.7)' }}>
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
        style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(46,168,145,0.1)', borderBottom: '1px solid rgba(46,168,145,0.1)' }}
      >
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-8">{'// 04'}&nbsp;&nbsp;COMPLIANCE POSTURE</p>
          <p
            className="font-mono text-vbx-teal leading-[2.2]"
            style={{ fontSize: '0.8rem', letterSpacing: '0.08em' }}
          >
            HIPAA&nbsp;&nbsp;//&nbsp;&nbsp;HITRUST-AUDITED&nbsp;&nbsp;//&nbsp;&nbsp;MITA&nbsp;&nbsp;//&nbsp;&nbsp;SECTION 508&nbsp;&nbsp;//&nbsp;&nbsp;21ST CENTURY CURES ACT
            &nbsp;&nbsp;//&nbsp;&nbsp;FEDRAMP-ARCHITECTURE-AWARE&nbsp;&nbsp;//&nbsp;&nbsp;FISMA-ALIGNED&nbsp;&nbsp;//&nbsp;&nbsp;AWS GOVCLOUD-DEPLOYABLE
          </p>
        </div>
      </section>

      {/* ── OPPORTUNITY TARGETS ───────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">{'// 05'}&nbsp;&nbsp;OPPORTUNITY TARGETS</p>
          <h2 className="font-display text-vbx-white mb-10" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Where We Win
          </h2>
          <div className="data-line mb-10"/>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPPORTUNITIES.map((opp) => (
              <div
                key={opp.headline}
                className="p-6"
                style={{ border: '1px solid rgba(46,168,145,0.2)', background: 'rgba(255,255,255,0.02)', borderRadius: '2px' }}
              >
                <p className="font-mono text-xs tracking-[0.1em] mb-4" style={{ color: opp.tierColor }}>
                  {opp.tier}
                </p>
                <h3 className="font-display text-vbx-white text-xl mb-4">{opp.headline}</h3>
                <p className="font-sans text-vbx-muted text-sm leading-relaxed">{opp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAGE CTA ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <div className="data-line mb-12"/>

          <div className="max-w-[680px] mx-auto text-center">
            <h2
              className="font-display text-vbx-white mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: '1.3' }}
            >
              We build the systems federal healthcare programs depend on.
              If your requirement demands it, we are ready to brief.
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href="mailto:khaalis.wooden@visionblox.com?subject=Healthcare%20IT%20Capability%20Briefing"
                className="btn-gold"
              >
                REQUEST A CAPABILITY BRIEFING
              </a>
              <a
                href="mailto:khaalis.wooden@visionblox.com?subject=Capabilities%20Statement%20Request"
                className="btn-teal-outline"
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
