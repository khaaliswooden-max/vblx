'use client'

import React from 'react'

// ── DATA ──────────────────────────────────────────────────────────────────────

const HERO_BADGES = [
  'Minority-Owned SB',
  'GSA MAS Springboard',
  'NAICS 541511 · 541512 · 541519',
  'NIST 800-53 Aligned',
  'TAA Compliant',
  'Section 889 Certified',
]

const SUB_CARDS = [
  {
    idx: '[ A ]',
    title: 'IT Staff Augmentation',
    body: 'Vetted engineers, architects, and analysts placed on-site or remote against your prime contract. From sprint support to long-duration task orders.',
    tags: ['T&M', 'FFP', 'IDIQ Task Orders', 'BPA Calls'],
  },
  {
    idx: '[ B ]',
    title: 'Application Development & Integration',
    body: 'Full-stack development, legacy API integration, and portal delivery as a sub under your prime. We bring documented past performance in healthcare IT, SAP, and cloud.',
    tags: ['React / Node', 'Java / .NET', 'REST / SOAP APIs', 'Section 508'],
  },
  {
    idx: '[ C ]',
    title: 'Security & Compliance Support',
    body: 'CISA/CRISC/CISM credentialed security staff for audit support, policy documentation, STIG remediation, and security assessment tasks within your engagement.',
    tags: ['NIST 800-53', 'HITRUST', 'CMMC Ready', 'RMF Support'],
  },
  {
    idx: '[ D ]',
    title: 'Data Engineering & Analytics',
    body: 'Structured data pipelines, ETL development, BI dashboards, and AI/ML integration as a technical sub. Our team has delivered at state Medicaid and commercial enterprise scale.',
    tags: ['SQL / Python', 'Spark / Kafka', 'Snowflake', 'Power BI'],
  },
  {
    idx: '[ E ]',
    title: 'SAP Functional & Technical Support',
    body: 'SAP S/4HANA resources for federal ERP programs, USDA, DoD logistics, or state financial systems. We have delivered at Meta and BASF scale — adaptable to government constraints.',
    tags: ['S/4HANA', 'SAP Basis', 'FICO / MM / SD', 'ABAP'],
  },
  {
    idx: '[ F ]',
    title: 'Program & Capture Support',
    body: 'BD and capture professionals who can sit inside your organization on a task order basis — supporting RFP responses, compliance matrices, and pipeline management.',
    tags: ['Capture Management', 'Proposal Writing', 'PWS / SOO Drafting', 'FAR Compliance'],
  },
]

const STAFF = [
  {
    role: 'Principal Architect // Cloud & Healthcare IT',
    name: 'Akil R. Chellam',
    bio: 'AWS Solutions Architect · PMP · PGP AI/ML. Technical Product Owner at Kaiser Permanente (7+ product modules). 21st Century Cures Act compliance delivery in production. Primary proposal figure for Healthcare IT primes.',
  },
  {
    role: 'Senior Solution Architect // .NET & Medicaid',
    name: 'Saravanan Swaminathan',
    bio: 'CSM · 15+ years. On-site delivery at California DHCS MITA-compliant CFRS modernization. HL7 ETL, full patient portal, microservices architecture. Strongest credential for state Medicaid and CMS-adjacent scope.',
  },
  {
    role: 'Full Stack Tech Lead // Enterprise Delivery',
    name: 'Magesh Ramalingam',
    bio: 'AWS Cloud & AI Practitioner · 20 years enterprise. Kaiser Permanente Appointment Center, Cigna claims processing (AWS Batch / Spark). Section 508/ADA delivery at scale. Available for T&M or FFP task orders.',
  },
  {
    role: 'CISO // Security & Compliance',
    name: 'Tony Paul',
    bio: 'CISA · CRISC · CISM · LA-ISO27001 · CSA STAR · PIMS (GDPR). 13 years information security. HITRUST framework assessments at global healthcare organizations. Discriminator on any RFP requiring credentialed security staff.',
  },
  {
    role: 'SAP Lead // S/4HANA & ERP',
    name: 'Peter Jayaraj',
    bio: 'SAP S/4HANA delivery across Meta Platforms and BASF multi-national. FICO, MM, SD, Basis. Available for federal ERP initiatives, DoD logistics modernization, and SAP GRC engagements.',
  },
  {
    role: 'Director, Data Engineering // AI/ML',
    name: 'Antony Jayaraj',
    bio: 'PGP AI/ML (UT Austin McCombs). Delivered 96% OCR accuracy and 60% labor reduction at California DHCS. Python · Spark · Kafka · Snowflake · Scikit-learn · Keras. Available for analytics and document intelligence scope.',
  },
]

const SERVICES = [
  {
    name: 'Legacy System Assessment',
    desc: 'Structured audit of on-premise infrastructure, application inventory, dependency mapping, and risk documentation aligned to NIST frameworks.',
    mode: 'Remote / On-Site',
    avail: 'yes',
  },
  {
    name: 'Database Administration',
    desc: 'SQL Server, Oracle, PostgreSQL DBA support — patching, performance tuning, backup/recovery, schema migration. No cloud requirement.',
    mode: 'Remote',
    avail: 'yes',
  },
  {
    name: 'Application Maintenance & Bug Resolution',
    desc: 'Ongoing support for legacy .NET, Java, or PHP applications. Ticket-driven or retainer. No re-architecture required.',
    mode: 'Remote',
    avail: 'yes',
  },
  {
    name: 'Network Infrastructure Support',
    desc: 'On-site or remote support for LAN/WAN configurations, firewall rule review, switch/router management, and network documentation.',
    mode: 'On-Site / Remote',
    avail: 'yes',
  },
  {
    name: 'End-User IT Support (Tier 1–3)',
    desc: 'Helpdesk and desktop support for agency or enterprise clients. Asset management, imaging, patch management, user provisioning.',
    mode: 'Remote / On-Site',
    avail: 'yes',
  },
  {
    name: 'IT Documentation & SOPs',
    desc: 'Runbooks, system architecture diagrams, disaster recovery plans, and policy documentation. Delivered as Section 508-compliant artifacts on request.',
    mode: 'Remote',
    avail: 'yes',
  },
  {
    name: 'Security Hardening & STIG Remediation',
    desc: 'DISA STIG implementation for Windows, Linux, and network devices. Vulnerability scan remediation (Nessus/Tenable). POAM documentation support.',
    mode: 'Remote / On-Site',
    avail: 'yes',
  },
  {
    name: 'SharePoint / M365 Administration',
    desc: 'On-premise SharePoint management, M365 tenant administration, permission auditing, workflow support — no migration required.',
    mode: 'Remote',
    avail: 'partner',
  },
  {
    name: 'Print & Peripheral Infrastructure',
    desc: 'Managed print environment support, peripheral inventory, driver management, and device lifecycle documentation for SLED agency environments.',
    mode: 'On-Site',
    avail: 'partner',
  },
  {
    name: 'IT Asset Management (ITAM)',
    desc: 'Inventory audit, lifecycle tracking, software licensing compliance review, and disposal documentation aligned to agency disposal policy.',
    mode: 'Remote / On-Site',
    avail: 'yes',
  },
]

const ENGAGE_STEPS = [
  {
    num: '01',
    title: 'Requirement Intake',
    body: 'Submit your requirement, RFP excerpt, or SOW. We review scope, NAICS alignment, and set-aside eligibility within 24 hours.',
  },
  {
    num: '02',
    title: 'Capability Confirmation',
    body: 'We confirm personnel availability and past performance alignment. Teaming agreement or NDA executed same week if needed.',
  },
  {
    num: '03',
    title: 'SOW & Pricing',
    body: 'Fixed-price or T&M proposal with staffing plan, compliance posture, and deliverable schedule. No padded overhead.',
  },
  {
    num: '04',
    title: 'Execution',
    body: 'Kick off within 10 business days. Weekly status reports, documented deliverables, named point of contact throughout.',
  },
]

const COMPLIANCE_ITEMS = [
  'HIPAA',
  'NIST 800-53',
  'FISMA-ALIGNED',
  'SECTION 508 DELIVERED',
  'TAA COMPLIANT',
  'SECTION 889 CERTIFIED',
  'MINORITY-OWNED SB',
  'FEDRAMP-ARCHITECTURE-AWARE',
  'GSA MAS SPRINGBOARD',
]

// ── STYLES ────────────────────────────────────────────────────────────────────

const teal = '#2EA891'
const gold = '#F7B801'
const bg2 = '#131625'
const bg3 = '#181c30'
const borderTeal = 'rgba(46,168,145,0.18)'
const borderWhite = 'rgba(255,255,255,0.07)'
const textMuted = '#7a7f99'
const textBody = '#adb3cc'
const textCard = '#8a90aa'
const mono = "'Courier New', Courier, monospace"

// ── SUB-COMPONENTS ─────────────────────────────────────────────────────────────

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: mono,
      fontSize: '0.65rem',
      color: teal,
      letterSpacing: '0.14em',
      textTransform: 'uppercase' as const,
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    }}>
      <span style={{ color: teal, fontSize: '0.7rem' }}>{number}</span>
      <span style={{ color: textMuted, letterSpacing: '0.14em' }}>{children}</span>
      <span style={{ flex: 1, height: '1px', background: borderWhite, display: 'block' }} />
    </div>
  )
}

function SubCard({ idx, title, body, tags }: { idx: string; title: string; body: string; tags: string[] }) {
  return (
    <div style={{ background: bg2, padding: '1.8rem', transition: 'background 0.2s' }}>
      <div style={{ fontFamily: mono, fontSize: '0.62rem', color: teal, letterSpacing: '0.1em', marginBottom: '0.8rem' }}>{idx}</div>
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ fontSize: '0.87rem', color: textCard, lineHeight: 1.65, marginBottom: '1rem' }}>{body}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '0.35rem' }}>
        {tags.map((t) => (
          <span key={t} style={{
            fontFamily: mono,
            fontSize: '0.58rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            padding: '0.2rem 0.5rem',
            background: 'rgba(46,168,145,0.08)',
            border: `1px solid rgba(46,168,145,0.2)`,
            color: teal,
            borderRadius: '2px',
          }}>{t}</span>
        ))}
      </div>
    </div>
  )
}

function StaffCard({ role, name, bio }: { role: string; name: string; bio: string }) {
  return (
    <div style={{ background: bg2, padding: '1.5rem 1.8rem' }}>
      <div style={{ fontFamily: mono, fontSize: '0.68rem', color: gold, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '0.4rem' }}>{role}</div>
      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>{name}</h4>
      <p style={{ fontSize: '0.84rem', color: textCard, lineHeight: 1.6 }}>{bio}</p>
    </div>
  )
}

function ServiceRow({ name, desc, mode, avail }: { name: string; desc: string; mode: string; avail: string }) {
  const availStyle = avail === 'yes'
    ? { background: 'rgba(46,168,145,0.12)', color: teal, border: `1px solid rgba(46,168,145,0.3)` }
    : { background: 'rgba(247,184,1,0.1)', color: gold, border: `1px solid rgba(247,184,1,0.3)` }

  return (
    <tr>
      <td style={{ padding: '0.85rem 1rem', borderBottom: `1px solid ${borderWhite}`, color: '#fff', fontWeight: 600, whiteSpace: 'nowrap' as const, verticalAlign: 'top' }}>{name}</td>
      <td style={{ padding: '0.85rem 1rem', borderBottom: `1px solid ${borderWhite}`, color: textBody, verticalAlign: 'top' }}>{desc}</td>
      <td style={{ padding: '0.85rem 1rem', borderBottom: `1px solid ${borderWhite}`, color: textBody, verticalAlign: 'top' }}>{mode}</td>
      <td style={{ padding: '0.85rem 1rem', borderBottom: `1px solid ${borderWhite}`, color: textBody, verticalAlign: 'top' }}>
        <span style={{
          fontFamily: mono,
          fontSize: '0.62rem',
          padding: '0.2rem 0.55rem',
          borderRadius: '2px',
          whiteSpace: 'nowrap' as const,
          ...availStyle,
        }}>
          {avail === 'yes' ? 'Available Now' : 'Partner-Augmented'}
        </span>
      </td>
    </tr>
  )
}

function EngageStep({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div style={{ background: bg2, padding: '1.6rem' }}>
      <div style={{ fontFamily: mono, fontSize: '1.6rem', fontWeight: 800, color: 'rgba(46,168,145,0.2)', lineHeight: 1, marginBottom: '0.6rem' }}>{num}</div>
      <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>{title}</h4>
      <p style={{ fontSize: '0.83rem', color: textCard, lineHeight: 1.6 }}>{body}</p>
    </div>
  )
}

// ── PAGE COMPONENT ─────────────────────────────────────────────────────────────

export default function LegacyITPage() {
  const briefingHref = 'mailto:khaalis.wooden@visionblox.com?subject=Legacy%20IT%20Services%20Inquiry'
  const capabilityHref = 'mailto:khaalis.wooden@visionblox.com?subject=Capabilities%20Statement%20Request'

  return (
    <div style={{ background: '#0d0f1a', color: '#e8eaf2', minHeight: '100vh' }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <header style={{ padding: '5rem 2rem 3.5rem', maxWidth: '1100px', margin: '0 auto', borderBottom: `1px solid ${borderWhite}` }}>
        <div style={{ fontFamily: mono, fontSize: '0.68rem', color: textMuted, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.4rem' }}>
          CAGE: 9Z4X2 &nbsp;//&nbsp; UEI: H4X2Z7R9E3E3 &nbsp;//&nbsp;{' '}
          <span style={{ color: teal }}>Legacy IT Services</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.12, letterSpacing: '-0.02em', marginBottom: '1.2rem', color: '#fff' }}>
          Traditional IT.<br />
          <span style={{ color: teal }}>Federal-Grade</span> Delivery.
        </h1>
        <div style={{ fontFamily: mono, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: textMuted, marginBottom: '1.8rem' }}>
          Fed/SLED Subcontracting{' '}
          <span style={{ color: gold }}>//</span>{' '}
          IT Staffing{' '}
          <span style={{ color: gold }}>//</span>{' '}
          On-Premise{' '}
          <span style={{ color: gold }}>//</span>{' '}
          Remote À La Carte
        </div>
        <p style={{ maxWidth: '720px', fontSize: '1.05rem', color: textBody, lineHeight: 1.75, marginBottom: '2rem' }}>
          Visionblox provides experienced IT subcontracting and flexible staffing support for
          prime contractors and agency program managers executing on federal and SLED vehicles.
          We also deliver traditional on-premise and remote IT services to clients who need
          proven execution — no cloud mandate, no modernization agenda, just reliable delivery
          against your requirement.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {HERO_BADGES.map((b) => (
            <span key={b} style={{
              fontFamily: mono,
              fontSize: '0.62rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '0.3rem 0.7rem',
              border: `1px solid ${borderTeal}`,
              borderRadius: '2px',
              color: teal,
            }}>{b}</span>
          ))}
        </div>
      </header>

      {/* ── QUOTE ─────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
        <blockquote style={{
          borderLeft: `3px solid ${teal}`,
          padding: '1.2rem 1.8rem',
          margin: '2.5rem 0',
          fontFamily: mono,
          fontSize: '0.88rem',
          color: textBody,
          lineHeight: 1.7,
          background: 'rgba(46,168,145,0.04)',
        }}>
          "Federal programs don't always need transformation. They need a subcontractor who
          shows up, integrates cleanly, and delivers on the SOW. That is what Legacy IT at
          Visionblox is built to do."
        </blockquote>
      </div>

      {/* ── 01 FED/SLED SUBCONTRACTING ────────────────────────────────────── */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', borderBottom: `1px solid ${borderWhite}` }}>
        <SectionLabel number="[ 01 ]">Fed/SLED Subcontracting</SectionLabel>
        <h2 style={{ fontSize: '1.55rem', fontWeight: 700, letterSpacing: '-0.01em', color: '#fff', marginBottom: '0.3rem' }}>
          Subcontractor Support for Prime Contractors
        </h2>
        <p style={{ fontSize: '0.92rem', color: textMuted, marginBottom: '2rem', maxWidth: '640px' }}>
          We integrate into your teaming structure as a reliable technical sub. Bring scope,
          bring a vehicle, bring a deadline — we staff and execute. Certifications transfer.
          Past performance is documented and portable.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          background: borderWhite,
          border: `1px solid ${borderWhite}`,
        }}>
          {SUB_CARDS.map((c) => (
            <SubCard key={c.idx} {...c} />
          ))}
        </div>
      </section>

      {/* ── 02 STAFF PROFILES ─────────────────────────────────────────────── */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', borderBottom: `1px solid ${borderWhite}` }}>
        <SectionLabel number="[ 02 ]">Available Staff Profiles</SectionLabel>
        <h2 style={{ fontSize: '1.55rem', fontWeight: 700, letterSpacing: '-0.01em', color: '#fff', marginBottom: '0.3rem' }}>
          The Team Behind the Deliveries
        </h2>
        <p style={{ fontSize: '0.92rem', color: textMuted, marginBottom: '2rem', maxWidth: '640px' }}>
          Key personnel available for subcontract placement. All profiles carry documented
          past performance mappable to your PWS.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1px',
          background: borderWhite,
          border: `1px solid ${borderWhite}`,
          marginBottom: '1.5rem',
        }}>
          {STAFF.map((s) => (
            <StaffCard key={s.name} {...s} />
          ))}
        </div>
        <p style={{ fontFamily: mono, fontSize: '0.68rem', color: textMuted, marginTop: '1rem' }}>
          {'// Additional web/mobile profiles available: Vinoth, Krishanth, Sandhiya (React, React Native, Angular, Node.js). Resumes furnished on request under NDA.'}
        </p>
      </section>

      {/* ── 03 ON-PREMISE / REMOTE À LA CARTE ────────────────────────────── */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', borderBottom: `1px solid ${borderWhite}` }}>
        <SectionLabel number="[ 03 ]">On-Premise &amp; Remote Services</SectionLabel>
        <h2 style={{ fontSize: '1.55rem', fontWeight: 700, letterSpacing: '-0.01em', color: '#fff', marginBottom: '0.3rem' }}>
          Traditional IT — No Cloud Mandate
        </h2>
        <p style={{ fontSize: '0.92rem', color: textMuted, marginBottom: '2rem', maxWidth: '640px' }}>
          For clients who need the work done without a modernization agenda attached.
          Fixed-scope, fixed-deliverable à la carte engagements.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
            <thead>
              <tr>
                {['Service', 'Description', 'Delivery Mode', 'Availability'].map((h) => (
                  <th key={h} style={{
                    fontFamily: mono,
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: textMuted,
                    padding: '0.8rem 1rem',
                    textAlign: 'left',
                    borderBottom: `1px solid ${borderTeal}`,
                    background: bg3,
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SERVICES.map((svc) => (
                <ServiceRow key={svc.name} {...svc} />
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontFamily: mono, fontSize: '0.65rem', color: textMuted, marginTop: '0.9rem' }}>
          {'// Partner-Augmented: Delivered via vetted teaming partner with Visionblox as prime or sub depending on vehicle. Contact for details.'}
        </p>
      </section>

      {/* ── 04 ENGAGEMENT PROCESS ─────────────────────────────────────────── */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem', borderBottom: `1px solid ${borderWhite}` }}>
        <SectionLabel number="[ 04 ]">How We Engage</SectionLabel>
        <h2 style={{ fontSize: '1.55rem', fontWeight: 700, letterSpacing: '-0.01em', color: '#fff', marginBottom: '0.3rem' }}>
          Engagement Process
        </h2>
        <p style={{ fontSize: '0.92rem', color: textMuted, marginBottom: '2rem', maxWidth: '640px' }}>
          We move fast. From first contact to SOW in five business days for standard scopes.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1px',
          background: borderWhite,
          border: `1px solid ${borderWhite}`,
        }}>
          {ENGAGE_STEPS.map((step) => (
            <EngageStep key={step.num} {...step} />
          ))}
        </div>
      </section>

      {/* ── COMPLIANCE STRIP ──────────────────────────────────────────────── */}
      <div style={{
        background: bg3,
        borderTop: `1px solid ${borderTeal}`,
        borderBottom: `1px solid ${borderTeal}`,
        padding: '1.2rem 2rem',
        fontFamily: mono,
        fontSize: '0.65rem',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: textMuted,
        textAlign: 'center',
      }}>
        {COMPLIANCE_ITEMS.map((item, i) => (
          <React.Fragment key={item}>
            {item}
            {i < COMPLIANCE_ITEMS.length - 1 && (
              <span style={{ color: teal, margin: '0 0.5rem' }}>//</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '0.8rem', letterSpacing: '-0.01em' }}>
          Ready to brief a requirement?
        </h2>
        <p style={{ fontSize: '0.95rem', color: textMuted, marginBottom: '2rem', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
          We support subcontract opportunities, staffing placements, and à la carte IT
          engagements for Fed/SLED clients. Contact Khaalis Wooden to initiate.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <a href={briefingHref} style={{
            fontFamily: mono,
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 700,
            padding: '0.75rem 1.8rem',
            background: teal,
            color: '#000',
            borderRadius: '2px',
            textDecoration: 'none',
          }}>
            Request a Briefing
          </a>
          <a href={capabilityHref} style={{
            fontFamily: mono,
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 600,
            padding: '0.75rem 1.8rem',
            border: `1px solid ${borderTeal}`,
            color: teal,
            borderRadius: '2px',
            textDecoration: 'none',
          }}>
            Download Capabilities Statement
          </a>
        </div>
      </div>

    </div>
  )
}
