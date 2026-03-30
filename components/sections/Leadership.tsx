'use client'

import { useEffect, useRef } from 'react'

// ─── Profile Data ─────────────────────────────────────────────────────────────

interface Profile {
  name: string
  title: string
  body: string
  certs: string
  linkedin?: string
}

// Ordered per brief: healthcare-credentialed first, technical staff second
const PROFILES: Profile[] = [
  {
    name: 'Khaalis Wooden',
    title: 'DIRECTOR, ENTERPRISE CAPTURE & COMPLIANCE',
    body: '15+ years spanning U.S. Army logistics, Amazon operations, and federal contracting. Leading Visionblox\'s Healthcare IT federal capture strategy — pipeline development, opportunity qualification, RFP response, and teaming execution. Service-Connected Disabled Veteran. Active pursuit portfolio includes VA, HHS, state Medicaid, and SLED health agency opportunities.',
    certs: 'PMP · CISA (pursuing) · CISM (pursuing) · CRISC (pursuing) · MBA — SNHU 2026',
    linkedin: 'https://linkedin.com/in/khaalis-wooden-380336305',
  },
  {
    name: 'Akil R. Chellam',
    title: 'CEO / PRINCIPAL ARCHITECT — HEALTHCARE IT',
    body: 'The deepest single-person healthcare IT portfolio on the team. Served as Technical Product Owner at Kaiser Permanente across 7+ product modules over multiple years — Appointment Center, Pharmacy Center, Online Payment, eVisits, Video Visits, Claim Status. Delivered 21st Century Cures Act compliance in production. Built Epic HealthConnect integrations via SOAP, REST, and Kafka. Primary proposal figure for any healthcare IT prime bid where Epic integration or Cures Act compliance is evaluated.',
    certs: 'AWS Solutions Architect (Associate) · AWS Cloud Practitioner · PMP · PGP AI/ML — UT McCombs',
  },
  {
    name: 'Saravanan Swaminathan',
    title: 'SENIOR SOLUTION ARCHITECT — MEDICAID & EMR',
    body: 'On-site delivery at California DHCS for the MITA-compliant CFRS modernization — the state Medicaid authority\'s Cost and Finance Reporting System. Built HL7 ETL pipelines and a full patient/provider portal on microservices for VCare Urgent Care. Deep .NET, SQL Server, and Azure stack. Visionblox\'s strongest individual credential for state Medicaid and CMS-adjacent procurement evaluations.',
    certs: 'Certified Scrum Master (CSM) · 15+ years enterprise delivery',
    linkedin: 'https://linkedin.com/in/saravanan-swaminathan',
  },
  {
    name: 'Tony Paul',
    title: 'CHIEF INFORMATION SECURITY OFFICER',
    body: '13 years in information security, healthcare sector dominant. Most recent pre-Visionblox role: conducting third-party security assessments for a global healthcare organization against the HITRUST Common Security Framework at Wipro. End-to-end vendor risk management across acquired entities globally. The differentiator on any federal healthcare RFP that evaluates security posture — HITRUST audit personnel on staff versus firms that cite HIPAA attestation only.',
    certs: 'CISA · CRISC · CISM · LA-ISO27001 · CSA STAR · PIMS (GDPR) · 13 years healthcare security',
    linkedin: 'https://linkedin.com/in/selvakumar-paulraj-a253b941',
  },
  {
    name: 'Antony Jayaraj',
    title: 'DIRECTOR, DATA ENGINEERING & PRODUCTS',
    body: 'AI/ML lead. Delivered the document intelligence system underpinning the CA DHCS outcome: 96% OCR accuracy, 60% labor cost reduction on Medicaid document processing workflows. Stack: Python, Spark, Kafka, Pandas, Scikit-learn, Keras, Snowflake. Applicable to HHS document processing, CMS audit intelligence, VA health data analytics, and population health management RFPs.',
    certs: 'PGP AI/ML — UT Austin McCombs · Multi-national data architecture',
    linkedin: 'https://linkedin.com/in/antony-jayaraj',
  },
  {
    name: 'Peter Jayaraj',
    title: 'DIRECTOR, SAP PRODUCTS',
    body: 'SAP S/4HANA and BTP Integration specialist. Multi-national deployment experience including enterprise cloud migration and B2B integrations. Available for healthcare ERP and financial system integration requirements where SAP infrastructure intersects with health agency operations.',
    certs: 'SAP S/4HANA · SAP BTP · Enterprise Architecture',
    linkedin: 'https://linkedin.com/in/peter-jayaraj',
  },
]

// Engineering team — grouped as a single entry
const ENGINEERING_TEAM = {
  groupTitle: 'SENIOR ENGINEERS — FULL STACK',
  body: 'Full-stack development capacity across React, Node.js, Next.js, NestJS, PHP, and AWS services. Supporting healthcare portal builds, patient-facing interface development, and healthcare application modernization engagements.',
  certs: 'React · Node.js · Next.js · NestJS · PHP · AWS',
  members: [
    { name: 'Khrishanth M',      title: 'Technical Lead',             linkedin: 'https://linkedin.com/in/khrishanth-m' },
    { name: 'Sandhiya Ganesan',  title: 'Senior Associate Projects',  linkedin: 'https://linkedin.com/in/sandhiya-ganesan' },
    { name: 'Vinoth Kanna',      title: 'Senior Technical Architect', linkedin: 'https://linkedin.com/in/vinoth-kanna' },
  ],
}

// ─── Profile Card ─────────────────────────────────────────────────────────────

function ProfileCard({ profile }: { profile: Profile }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(10px)'
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease'
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

  return (
    <div
      ref={ref}
      style={{
        borderLeft: '3px solid #2EA891',
        padding: '24px 20px 20px 24px',
        background: 'rgba(255,255,255,0.02)',
        borderRadius: '2px',
      }}
    >
      <h3 className="font-display text-vbx-white mb-1" style={{ fontSize: '1.25rem', lineHeight: '1.3' }}>
        {profile.name}
      </h3>
      <p className="font-mono text-vbx-muted mb-4 tracking-[0.08em]" style={{ fontSize: '0.6875rem' }}>
        {profile.title}
      </p>
      <p className="font-sans text-vbx-muted mb-4" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
        {profile.body}
      </p>
      <p className="font-mono text-vbx-teal" style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}>
        {profile.certs}
      </p>
      {profile.linkedin && (
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-mono text-vbx-muted hover:text-vbx-teal transition-colors mt-3"
          style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}
        >
          → LinkedIn
        </a>
      )}
    </div>
  )
}

// ─── Engineering Team Group Card ──────────────────────────────────────────────

function EngineeringGroupCard() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(10px)'
    el.style.transition = 'opacity 0.45s ease, transform 0.45s ease'
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

  return (
    <div
      ref={ref}
      style={{
        borderLeft: '3px solid rgba(46,168,145,0.35)',
        padding: '24px 20px 20px 24px',
        background: 'rgba(255,255,255,0.02)',
        borderRadius: '2px',
      }}
    >
      <h3 className="font-display text-vbx-white mb-1" style={{ fontSize: '1.25rem', lineHeight: '1.3' }}>
        Visionblox Engineering Team
      </h3>
      <p className="font-mono text-vbx-muted mb-4 tracking-[0.08em]" style={{ fontSize: '0.6875rem' }}>
        {ENGINEERING_TEAM.groupTitle}
      </p>
      <p className="font-sans text-vbx-muted mb-5" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
        {ENGINEERING_TEAM.body}
      </p>

      {/* Sub-list of engineers */}
      <div className="space-y-2 mb-4">
        {ENGINEERING_TEAM.members.map((m) => (
          <div key={m.name} className="flex items-center gap-3">
            <span className="font-sans text-vbx-white" style={{ fontSize: '0.875rem' }}>
              {m.name}
            </span>
            <span className="font-mono text-vbx-muted" style={{ fontSize: '0.625rem', letterSpacing: '0.06em' }}>
              {m.title}
            </span>
            <a
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-vbx-muted hover:text-vbx-teal transition-colors"
              style={{ fontSize: '0.625rem', letterSpacing: '0.06em' }}
            >
              → LinkedIn
            </a>
          </div>
        ))}
      </div>

      <p className="font-mono text-vbx-teal" style={{ fontSize: '0.6875rem', letterSpacing: '0.06em' }}>
        {ENGINEERING_TEAM.certs}
      </p>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function LeadershipSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <p className="font-mono text-vbx-teal mb-4 tracking-[0.12em]" style={{ fontSize: '0.8125rem' }}>
          {'// 03 LEADERSHIP & KEY PERSONNEL'}
        </p>
        <h2 className="font-display text-vbx-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
          The Team Behind the Deliveries
        </h2>
        <p className="font-sans text-vbx-muted mb-10 max-w-[640px]" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
          Visionblox&apos;s healthcare IT capability is inseparable from the individuals who
          delivered it. The profiles below reflect direct delivery history — not managed
          services or staffing placement. Each person named here was on-site or technically
          accountable for the engagement cited.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROFILES.map((profile) => (
            <ProfileCard key={profile.name} profile={profile} />
          ))}
          <EngineeringGroupCard />
        </div>
      </div>
      <div className="data-line mt-16" />
    </section>
  )
}
