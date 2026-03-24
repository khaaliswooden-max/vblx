'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

// ─── Domain Data ──────────────────────────────────────────────────────────────

const DOMAINS = [
  {
    number: '01',
    category: 'MEDICAID & STATE HEALTH',
    headline: 'Medicaid Systems Modernization',
    body: 'State Medicaid agencies operate under CMS federal architectural standards (MITA) for all IT investments. Visionblox has delivered MITA-compliant systems at the California DHCS — the state Medicaid authority — qualifying us as a vetted reference for any state pursuing MMIS modernization or Medicaid management system replacement.',
    cards: [
      {
        tag: 'MMIS / MEDICAID MODERNIZATION',
        name: 'MITA-Compliant System Architecture',
        descriptor: 'Legacy system replacement and MMIS modernization aligned to the CMS Medicaid Information Technology Architecture standard. Full SDLC: requirements through UAT, data dictionaries, user manuals, training.',
        tech: ['MITA', '.NET Core', 'Angular', 'Azure DevOps', 'SQL Server', 'SSIS/SSRS'],
        href: '/services/web-development',
      },
      {
        tag: 'DOCUMENT INTELLIGENCE',
        name: 'Healthcare Document Processing & AI/OCR',
        descriptor: 'Automated document extraction and processing for Medicaid cost reporting, claims documentation, and audit workflows. 96% OCR accuracy delivered at CA DHCS.',
        tech: ['Python', 'Spark', 'Kafka', 'Scikit-learn', 'Snowflake', 'NLP'],
        href: '/services/ai-ml-solutions',
      },
    ],
    ppRef: '// DELIVERED: CA DHCS CFRS · $2.1M · 2022 · FEDERAL RELEVANCE: 10/10',
  },
  {
    number: '02',
    category: 'PATIENT DATA & PORTAL INFRASTRUCTURE',
    headline: 'Patient Portal & EMR Integration',
    body: 'Patient-facing and provider-facing portal infrastructure — built on Epic HealthConnect, HL7 data pipelines, and FHIR-adjacent architectures. Delivered at Kaiser Permanente (100K+ daily users, 99.8% uptime) and VCare Urgent Care (full PHI data surface). Directly applicable to VA Veteran-Facing Digital Modernization, HHS agency portals, and Indian Health Service patient access RFPs.',
    cards: [
      {
        tag: 'EMR INTEGRATION',
        name: 'Epic & HL7 Integration Architecture',
        descriptor: 'Direct integration with Epic HealthConnect via SOAP, REST, and Kafka. HL7 ETL pipelines for data extraction, transformation, and loading across clinical data systems.',
        tech: ['Epic', 'HL7', 'FHIR', 'SOAP/REST', 'Kafka', 'Apigee'],
        href: '/services/web-development',
      },
      {
        tag: 'PATIENT PORTAL',
        name: 'Patient & Provider Portal Development',
        descriptor: 'Full-stack patient portal architecture — appointment scheduling, health records, lab reports, insurance, billing, and provider availability management. PHI-compliant data surfaces.',
        tech: ['Angular', 'Node.js', 'AWS S3', 'Microservices', 'AEM 6.5'],
        href: '/services/web-development',
      },
      {
        tag: 'TELEHEALTH',
        name: 'Telehealth & eVisit Platforms',
        descriptor: 'eVisit and Video Visit infrastructure integrated into clinical portals. Delivered at Kaiser Permanente. Section 508 / ADA accessible. Applicable to VA telehealth modernization and IHS remote care RFPs.',
        tech: ['Pexip', 'Node.js', 'Cloud Foundry', 'Section 508'],
        href: '/services/web-development',
      },
    ],
    ppRef: '// DELIVERED: KAISER PERMANENTE VCARE · $1.2M · 2023 · FEDERAL RELEVANCE: 10/10',
  },
  {
    number: '03',
    category: 'HEALTHCARE AI & DOCUMENT INTELLIGENCE',
    headline: 'Healthcare AI & Document Intelligence',
    body: 'AI and ML pipelines purpose-built for healthcare data workflows — not general-purpose AI adapted for healthcare. Quantified outcomes: 96% OCR accuracy and 60% labor cost reduction at a state Medicaid agency. Stack applicable to HHS document processing, CMS audit intelligence, VA health data analytics, and population health management RFPs.',
    cards: [
      {
        tag: 'DOCUMENT INTELLIGENCE',
        name: 'Medical Document OCR & NLP',
        descriptor: 'Automated extraction and processing of clinical documents, cost reports, and audit packages. Trained and validated against healthcare data at state Medicaid scale.',
        tech: ['Python', 'OCR', 'NLP', 'Keras', 'Scikit-learn', 'Pandas'],
        href: '/services/ai-ml-solutions',
      },
      {
        tag: 'HEALTHCARE ML',
        name: 'Health Data Analytics & Predictive Modeling',
        descriptor: 'ML pipeline development for health data analytics, claims pattern analysis, and operational modeling. AWS and Snowflake data infrastructure. Applicable to population health and predictive outcomes RFPs.',
        tech: ['Spark', 'Kafka', 'Snowflake', 'TensorFlow', 'AWS EMR'],
        href: '/services/ai-ml-solutions',
      },
    ],
    ppRef: '// DELIVERED: CA DHCS AI/OCR PIPELINE · 96% ACCURACY · 60% LABOR REDUCTION',
  },
  {
    number: '04',
    category: 'FEDERAL COMPLIANCE & SECURITY',
    headline: 'Healthcare Compliance & Security Architecture',
    body: 'HIPAA, HITRUST, FedRAMP-aware deployment, Section 508, and FISMA alignment — delivered by security staff with 13 years of healthcare sector experience, including third-party HITRUST framework audits at a global healthcare organization. This is not a compliance checklist function. It is a technical discriminator against firms that cite HIPAA without credentialed audit personnel on staff.',
    cards: [
      {
        tag: 'HIPAA / HITRUST',
        name: 'Healthcare Security & HITRUST Compliance',
        descriptor: 'Security architecture, third-party assessment preparation, and HITRUST framework alignment for healthcare IT programs. PHI data handling at enterprise scale.',
        tech: ['HIPAA', 'HITRUST', 'ISO 27001', 'CISA', 'CRISC', 'CISM'],
        href: '/services/cybersecurity-compliance-framework',
      },
      {
        tag: 'FEDRAMP / FISMA',
        name: 'FedRAMP-Aware Cloud Architecture',
        descriptor: 'Healthcare solution architectures specifying AWS GovCloud or Azure Government deployment with ATO boundary documentation. Required for federal agency healthcare IT RFPs.',
        tech: ['AWS GovCloud', 'Azure Government', 'FedRAMP', 'FISMA', 'NIST RMF'],
        href: '/services/cloud-security-risk-governance',
      },
      {
        tag: 'SECTION 508 / ADA',
        name: 'Accessible Healthcare Interface Design',
        descriptor: 'Section 508 and ADA-compliant UI delivery for healthcare portals. Delivered at Kaiser Permanente Appointment Center. Mandatory for VA, HHS, and federal agency-facing healthcare applications.',
        tech: ['WCAG 2.1 AA', 'Section 508', 'Angular', 'ADA'],
        href: '/services/cybersecurity',
      },
    ],
    ppRef: '// SECURITY LEAD: TONY PAUL · CISA · CRISC · CISM · LA-ISO27001 · 13 YRS HEALTHCARE',
  },
  {
    number: '05',
    category: 'CLAIMS & PAYER SYSTEMS',
    headline: 'Claims Processing Infrastructure',
    body: 'Cloud-native claims processing pipelines at payer scale — millions of medical claims per day, delivered at Cigna using AWS Batch, Lambda, Fargate, and Apache Spark. Architecture directly analogous to CMS/Medicare claims processing and VA payment system modernization. The technical template exists. It has been run in production.',
    cards: [
      {
        tag: 'CLAIMS PROCESSING',
        name: 'Cloud-Native Claims Pipeline Architecture',
        descriptor: 'Serverless and cloud-native claims adjudication infrastructure on AWS. Batch processing, Lambda event triggers, Fargate containers, and Apache Spark for large-scale calculation and cross-functional claims workflows.',
        tech: ['AWS Batch', 'Lambda', 'Fargate', 'EMR', 'Spark', 'Spring Boot'],
        href: '/services/cloud-technology',
      },
    ],
    ppRef: '// DELIVERED: CIGNA CLAIMS PROCESSING · TCV PENDING DOCUMENTATION · FEDERAL RELEVANCE: 8/10',
  },
]

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({ card }: { card: typeof DOMAINS[0]['cards'][0] }) {
  return (
    <div
      className="flex flex-col h-full p-6"
      style={{
        background: 'rgba(255,255,255,0.04)',
        borderLeft: '2px solid #2EA891',
        borderRadius: '2px',
      }}
    >
      <p className="font-mono text-vbx-teal mb-3 tracking-[0.1em]" style={{ fontSize: '0.6875rem' }}>
        {card.tag}
      </p>
      <h3 className="font-sans text-vbx-white font-medium mb-3" style={{ fontSize: '1.125rem' }}>
        {card.name}
      </h3>
      <p className="font-sans text-vbx-muted mb-4 flex-1" style={{ fontSize: '0.875rem', lineHeight: '1.65' }}>
        {card.descriptor}
      </p>
      <p className="font-mono text-vbx-muted mb-4" style={{ fontSize: '0.6875rem', letterSpacing: '0.04em' }}>
        {card.tech.join(' · ')}
      </p>
      <Link
        href={card.href}
        className="font-sans text-vbx-teal hover:text-vbx-white transition-colors"
        style={{ fontSize: '0.875rem' }}
      >
        → Learn more
      </Link>
    </div>
  )
}

// ─── Domain Section ───────────────────────────────────────────────────────────

function DomainSection({ domain }: { domain: typeof DOMAINS[0] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(16px)'
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
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
  }, [])

  const cols = domain.cards.length === 1 ? 'grid-cols-1 max-w-lg' :
               domain.cards.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
               'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  return (
    <div ref={ref}>
      <div className="data-line mb-10" />
      <p className="font-mono text-vbx-teal mb-3 tracking-[0.12em]" style={{ fontSize: '0.8125rem' }}>
        {'// '}{domain.number}&nbsp;&nbsp;{domain.category}
      </p>
      <h2 className="font-display text-vbx-white mb-5" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
        {domain.headline}
      </h2>
      <p className="font-sans text-vbx-muted mb-8 max-w-[720px]" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
        {domain.body}
      </p>

      <div className={`grid ${cols} gap-5 mb-6`}>
        {domain.cards.map((card) => (
          <ServiceCard key={card.name} card={card} />
        ))}
      </div>

      <p className="font-mono text-vbx-gold" style={{ fontSize: '0.75rem', letterSpacing: '0.06em' }}>
        {domain.ppRef}
      </p>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SolutionsPage() {
  return (
    <div className="bg-vbx-navy min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div className="container-wide relative">
          <p className="font-mono text-vbx-teal mb-6 tracking-[0.15em]" style={{ fontSize: '0.75rem' }}>
            {'// SOLUTIONS // FEDERAL & SLED HEALTHCARE IT'}
          </p>
          <h1
            className="font-display text-vbx-white mb-7"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1.1', maxWidth: '820px' }}
          >
            Healthcare IT Solutions Built for
            the Agencies That Govern It.
          </h1>
          <p className="font-sans text-vbx-muted mb-8 max-w-[620px]" style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}>
            Five solution domains. Each one anchored to delivered past performance.
            No claimed capabilities without proof. Designed for CMS, HHS, VA, and
            state health agency procurement requirements.
          </p>
          <p className="font-mono text-vbx-teal" style={{ fontSize: '0.8125rem', letterSpacing: '0.15em' }}>
            CAGE: 9Z4X2&nbsp;&nbsp;//&nbsp;&nbsp;UEI: H4X2Z7R9E3E3&nbsp;&nbsp;//&nbsp;&nbsp;MINORITY-OWNED&nbsp;&nbsp;//&nbsp;&nbsp;MITA-COMPLIANT
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 data-line" />
      </section>

      {/* ── SOLUTION DOMAINS ──────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container-wide space-y-20">
          {DOMAINS.map((domain) => (
            <DomainSection key={domain.number} domain={domain} />
          ))}
        </div>
      </section>

      {/* ── PROCUREMENT IDENTIFIERS STRIP ────────────────────────────────── */}
      <section
        className="py-12"
        style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(46,168,145,0.15)' }}
      >
        <div className="data-line mb-0" style={{ marginBottom: 0 }} />
        <div className="container-wide pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">

            <div>
              <p className="font-mono text-vbx-muted mb-3 tracking-[0.1em]" style={{ fontSize: '0.6875rem' }}>
                NAICS CODES
              </p>
              <p className="font-mono text-vbx-white" style={{ fontSize: '0.8125rem', letterSpacing: '0.04em' }}>
                541511&nbsp;&nbsp;·&nbsp;&nbsp;541512&nbsp;&nbsp;·&nbsp;&nbsp;541519&nbsp;&nbsp;·&nbsp;&nbsp;518210
              </p>
            </div>

            <div>
              <p className="font-mono text-vbx-muted mb-3 tracking-[0.1em]" style={{ fontSize: '0.6875rem' }}>
                CONTRACT VEHICLES
              </p>
              <p className="font-mono text-vbx-white" style={{ fontSize: '0.8125rem', letterSpacing: '0.04em' }}>
                GSA MAS&nbsp;&nbsp;·&nbsp;&nbsp;SET-ASIDE ELIGIBLE
              </p>
              <p className="font-mono text-vbx-teal mt-1" style={{ fontSize: '0.75rem' }}>
                MINORITY-OWNED SMALL BUSINESS
              </p>
            </div>

            <div>
              <p className="font-mono text-vbx-muted mb-1.5 tracking-[0.06em]" style={{ fontSize: '0.6875rem' }}>
                CAGE: <span className="text-vbx-teal">9Z4X2</span>
              </p>
              <p className="font-mono text-vbx-muted tracking-[0.06em]" style={{ fontSize: '0.6875rem' }}>
                UEI: <span className="text-vbx-teal">H4X2Z7R9E3E3</span>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── PAGE CTA ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <div className="data-line mb-12" />
          <div className="max-w-[660px] mx-auto text-center">
            <h2
              className="font-display text-vbx-white mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: '1.3' }}
            >
              Evaluating healthcare IT capacity for a federal or SLED requirement?
            </h2>
            <p className="font-sans text-vbx-muted mb-10" style={{ fontSize: '1rem', lineHeight: '1.75' }}>
              Visionblox provides technical capability briefings for contracting officers,
              program managers, and teaming partners. We can address specific technical
              requirements, past performance questions, and teaming structure directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:khaalis.wooden@visionblox.com?subject=Healthcare%20IT%20Capability%20Briefing"
                className="btn-gold"
              >
                REQUEST A FEDERAL BRIEFING
              </a>
              <Link href="/case-studies" className="btn-teal-outline">
                VIEW PAST PERFORMANCE
              </Link>
            </div>
          </div>
          <div className="data-line mt-12" />
        </div>
      </section>

    </div>
  )
}
