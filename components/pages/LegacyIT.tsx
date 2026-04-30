'use client'

import { useEffect, useRef } from 'react'

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
  { name: 'Legacy System Assessment', desc: 'Structured audit of on-premise infrastructure, application inventory, dependency mapping, and risk documentation aligned to NIST frameworks.', mode: 'Remote / On-Site', avail: 'yes' as const },
  { name: 'Database Administration', desc: 'SQL Server, Oracle, PostgreSQL DBA support — patching, performance tuning, backup/recovery, schema migration. No cloud requirement.', mode: 'Remote', avail: 'yes' as const },
  { name: 'Application Maintenance & Bug Fix', desc: 'Ongoing support for legacy .NET, Java, or PHP applications. Ticket-driven or retainer. No re-architecture required.', mode: 'Remote', avail: 'yes' as const },
  { name: 'Network Infrastructure Support', desc: 'On-site or remote support for LAN/WAN configurations, firewall rule review, switch/router management, and network documentation.', mode: 'On-Site / Remote', avail: 'yes' as const },
  { name: 'End-User IT Support (Tier 1–3)', desc: 'Helpdesk and desktop support for agency or enterprise clients. Asset management, imaging, patch management, user provisioning.', mode: 'Remote / On-Site', avail: 'yes' as const },
  { name: 'IT Documentation & SOPs', desc: 'Runbooks, system architecture diagrams, disaster recovery plans, and policy documentation. Delivered as Section 508-compliant artifacts on request.', mode: 'Remote', avail: 'yes' as const },
  { name: 'Security Hardening & STIG Rem.', desc: 'DISA STIG implementation for Windows, Linux, and network devices. Vulnerability scan remediation (Nessus/Tenable). POAM documentation support.', mode: 'Remote / On-Site', avail: 'yes' as const },
  { name: 'SharePoint / M365 Administration', desc: 'On-premise SharePoint management, M365 tenant administration, permission auditing, workflow support — no migration required.', mode: 'Remote', avail: 'gold' as const },
  { name: 'Print & Peripheral Infrastructure', desc: 'Managed print environment support, peripheral inventory, driver management, and device lifecycle documentation for SLED agency environments.', mode: 'On-Site', avail: 'gold' as const },
  { name: 'IT Asset Management (ITAM)', desc: 'Inventory audit, lifecycle tracking, software licensing compliance review, and disposal documentation aligned to agency disposal policy.', mode: 'Remote / On-Site', avail: 'yes' as const },
]

const STEPS = [
  { num: '01', title: 'Requirement Intake', body: 'Submit your requirement, RFP excerpt, or SOW. We review scope, NAICS alignment, and set-aside eligibility within 24 hours.' },
  { num: '02', title: 'Capability Confirmation', body: 'We confirm personnel availability and past performance alignment. Teaming agreement or NDA executed same week if needed.' },
  { num: '03', title: 'SOW & Pricing', body: 'Fixed-price or T&M proposal with staffing plan, compliance posture, and deliverable schedule. No padded overhead.' },
  { num: '04', title: 'Execution', body: 'Kick off within 10 business days. Weekly status reports, documented deliverables, named point of contact throughout.' },
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

const HERO_BADGES = [
  'Minority-Owned SB',
  'GSA MAS Springboard',
  'NAICS 541511 · 541512 · 541519',
  'NIST 800-53 Aligned',
  'TAA Compliant',
  'Section 889 Certified',
]

const HREF_BRIEF = 'mailto:khaalis.wooden@visionblox.com?subject=Legacy%20IT%20Services%20Inquiry'
const HREF_CAPSTAT = '/VBX_CapStatement_IT.pdf'

// ─── Scroll-reveal helper (mirrors components/pages/HealthcareIT.tsx) ─────────

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

export default function LegacyIT() {
  return (
    <div className="bg-vbx-navy min-h-screen">

      {/* ── PAGE HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-vbx-navy overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.15em] mb-6">
            CAGE: 9Z4X2&nbsp;&nbsp;//&nbsp;&nbsp;UEI: H4X2Z7R9E3E3&nbsp;&nbsp;//&nbsp;&nbsp;Legacy IT Services
          </p>
          <h1
            className="font-display text-vbx-white mb-8"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1' }}
          >
            Traditional IT.
            <br />
            <em className="not-italic text-vbx-teal">Federal-Grade</em> Delivery.
          </h1>

          <p
            className="font-mono text-vbx-teal mb-8 leading-relaxed"
            style={{ fontSize: '0.8125rem', letterSpacing: '0.06em' }}
          >
            FED/SLED SUBCONTRACTING&nbsp;&nbsp;//&nbsp;&nbsp;IT STAFFING&nbsp;&nbsp;//&nbsp;&nbsp;ON-PREMISE&nbsp;&nbsp;//&nbsp;&nbsp;REMOTE À LA CARTE
          </p>

          <p
            className="font-sans text-vbx-muted max-w-[680px] mb-10"
            style={{ fontSize: '1.0625rem', lineHeight: '1.75' }}
          >
            Visionblox provides experienced IT subcontracting and flexible staffing support for prime contractors and
            agency program managers executing on federal and SLED vehicles. We also deliver traditional on-premise and
            remote IT services to clients who need proven execution — no cloud mandate, no modernization agenda, just
            reliable delivery against your requirement.
          </p>

          <div className="flex flex-wrap gap-2">
            {HERO_BADGES.map((b) => (
              <span
                key={b}
                className="font-mono text-xs text-vbx-teal tracking-[0.1em] uppercase px-3 py-1 rounded-sm border border-vbx-teal/25"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 data-line" />
      </section>

      {/* ── BLOCKQUOTE ────────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <blockquote
            className="border-l-[3px] border-vbx-teal pl-6 py-4 font-mono text-sm text-vbx-muted leading-relaxed bg-vbx-teal/5"
          >
            &ldquo;Federal programs don&apos;t always need transformation. They need a subcontractor who shows up,
            integrates cleanly, and delivers on the SOW. That is what Legacy IT at Visionblox is built to do.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── CAPABILITY STATEMENT DOWNLOAD ─────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <div className="data-line mb-12" />
          <RevealRow>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="font-mono text-vbx-teal text-sm tracking-[0.14em] mb-3">
                  {'// CAPABILITY STATEMENT · PDF'}
                </p>
                <h3 className="font-display text-vbx-white text-xl mb-3">
                  Visionblox IT Capability Statement
                </h3>
                <p className="font-sans text-vbx-muted text-sm leading-relaxed max-w-[620px]">
                  Single-page brief covering NAICS codes, certifications, core competencies, key personnel, and past
                  performance. Suitable for prime teaming packages, agency capability libraries, and RFI responses.
                </p>
              </div>
              <a href={HREF_CAPSTAT} download className="btn-gold whitespace-nowrap">
                DOWNLOAD PDF ↓
              </a>
            </div>
          </RevealRow>
        </div>
      </section>

      {/* ── 01 // FED/SLED SUBCONTRACTING ─────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">
            {'// 01'}&nbsp;&nbsp;FED/SLED SUBCONTRACTING
          </p>
          <h2 className="font-display text-vbx-white mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Subcontractor Support for Prime Contractors
          </h2>
          <p className="font-sans text-vbx-muted max-w-[680px] mb-8" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
            We integrate into your teaming structure as a reliable technical sub. Bring scope, bring a vehicle, bring a
            deadline — we staff and execute. Certifications transfer. Past performance is documented and portable.
          </p>
          <div className="data-line mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-vbx-teal/15 border border-vbx-teal/15">
            {SUB_CARDS.map((card, i) => (
              <RevealRow key={card.idx} delay={i * 80}>
                <div className="bg-vbx-navy p-7 h-full hover:bg-white/[0.03] transition-colors">
                  <div className="font-mono text-xs text-vbx-teal tracking-[0.1em] mb-3">{card.idx}</div>
                  <h3 className="font-display text-vbx-white text-lg mb-2">{card.title}</h3>
                  <p className="font-sans text-vbx-muted text-sm leading-relaxed mb-4">{card.body}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {card.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[0.65rem] tracking-[0.08em] uppercase text-vbx-teal px-2 py-0.5 rounded-sm border border-vbx-teal/20 bg-vbx-teal/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealRow>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 // AVAILABLE STAFF PROFILES ────────────────────────────────── */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">
            {'// 02'}&nbsp;&nbsp;AVAILABLE STAFF PROFILES
          </p>
          <h2 className="font-display text-vbx-white mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            The Team Behind the Deliveries
          </h2>
          <p className="font-sans text-vbx-muted max-w-[680px] mb-8" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
            Key personnel available for subcontract placement. All profiles carry documented past performance mappable
            to your PWS.
          </p>
          <div className="data-line mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STAFF.map((member, i) => (
              <RevealRow key={member.name} delay={i * 100}>
                <div className="pl-5 py-4 border-l-[3px] border-vbx-teal/60">
                  <p className="font-mono text-vbx-gold text-xs tracking-[0.1em] uppercase mb-2">{member.role}</p>
                  <h3 className="font-display text-vbx-white text-xl mb-3">{member.name}</h3>
                  <p className="font-sans text-vbx-muted text-sm leading-relaxed">{member.bio}</p>
                </div>
              </RevealRow>
            ))}
          </div>
          <p className="font-mono text-xs text-vbx-muted mt-8">
            {'//'} Additional web/mobile profiles available: Vinoth, Krishanth, Sandhiya (React, React Native, Angular,
            Node.js). Resumes furnished on request under NDA.
          </p>
        </div>
      </section>

      {/* ── 03 // ON-PREMISE & REMOTE SERVICES ────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">
            {'// 03'}&nbsp;&nbsp;ON-PREMISE &amp; REMOTE SERVICES
          </p>
          <h2 className="font-display text-vbx-white mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Traditional IT — No Cloud Mandate
          </h2>
          <p className="font-sans text-vbx-muted max-w-[680px] mb-8" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
            For clients who need the work done without a modernization agenda attached. Fixed-scope, fixed-deliverable
            à la carte engagements.
          </p>
          <div className="data-line mb-8" />

          <div className="overflow-x-auto">
            <table className="w-full" style={{ borderCollapse: 'collapse', minWidth: '720px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #2EA891', background: 'rgba(46,168,145,0.06)' }}>
                  <th className="text-left py-3 px-4 font-mono text-xs text-vbx-teal tracking-[0.1em] uppercase">Service</th>
                  <th className="text-left py-3 px-4 font-mono text-xs text-vbx-teal tracking-[0.1em] uppercase">Description</th>
                  <th className="text-left py-3 px-4 font-mono text-xs text-vbx-teal tracking-[0.1em] uppercase">Delivery Mode</th>
                  <th className="text-left py-3 px-4 font-mono text-xs text-vbx-teal tracking-[0.1em] uppercase">Availability</th>
                </tr>
              </thead>
              <tbody>
                {SERVICES.map((svc, i) => (
                  <tr
                    key={svc.name}
                    style={{
                      background: i % 2 === 1 ? 'rgba(255,255,255,0.03)' : 'transparent',
                      borderBottom: '1px solid rgba(46,168,145,0.08)',
                    }}
                  >
                    <td className="py-3 px-4 font-sans text-sm text-vbx-white whitespace-nowrap">{svc.name}</td>
                    <td className="py-3 px-4 font-sans text-sm text-vbx-muted">{svc.desc}</td>
                    <td className="py-3 px-4 font-mono text-xs text-vbx-white/70">{svc.mode}</td>
                    <td className="py-3 px-4">
                      <span
                        className={
                          svc.avail === 'yes'
                            ? 'font-mono text-[0.65rem] tracking-[0.08em] uppercase whitespace-nowrap px-2 py-1 rounded-sm bg-vbx-teal/10 text-vbx-teal border border-vbx-teal/30'
                            : 'font-mono text-[0.65rem] tracking-[0.08em] uppercase whitespace-nowrap px-2 py-1 rounded-sm bg-vbx-gold/10 text-vbx-gold border border-vbx-gold/30'
                        }
                      >
                        {svc.avail === 'yes' ? 'Available Now' : 'Partner-Augmented'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-mono text-xs text-vbx-muted mt-4">
            {'//'} Partner-Augmented: Delivered via vetted teaming partner with Visionblox as prime or sub depending on
            vehicle. Contact for details.
          </p>
        </div>
      </section>

      {/* ── 04 // HOW WE ENGAGE ───────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">
            {'// 04'}&nbsp;&nbsp;HOW WE ENGAGE
          </p>
          <h2 className="font-display text-vbx-white mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Engagement Process
          </h2>
          <p className="font-sans text-vbx-muted max-w-[680px] mb-8" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
            We move fast. From first contact to SOW in five business days for standard scopes.
          </p>
          <div className="data-line mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-vbx-teal/15 border border-vbx-teal/15">
            {STEPS.map((step, i) => (
              <RevealRow key={step.num} delay={i * 80}>
                <div className="bg-vbx-navy p-6 h-full">
                  <div className="font-mono font-extrabold text-3xl text-vbx-teal/20 leading-none mb-3">{step.num}</div>
                  <h4 className="font-display text-vbx-white text-base mb-2">{step.title}</h4>
                  <p className="font-sans text-vbx-muted text-sm leading-relaxed">{step.body}</p>
                </div>
              </RevealRow>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 // COMPLIANCE POSTURE ──────────────────────────────────────── */}
      <section
        className="py-14"
        style={{
          background: 'rgba(255,255,255,0.03)',
          borderTop: '1px solid rgba(46,168,145,0.1)',
          borderBottom: '1px solid rgba(46,168,145,0.1)',
        }}
      >
        <div className="container-wide">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-6">
            {'// 05'}&nbsp;&nbsp;COMPLIANCE POSTURE
          </p>
          <p
            className="font-mono text-vbx-muted leading-[2.2]"
            style={{ fontSize: '0.8rem', letterSpacing: '0.08em' }}
          >
            {COMPLIANCE_ITEMS.map((item, i) => (
              <span key={item}>
                {item}
                {i < COMPLIANCE_ITEMS.length - 1 && (
                  <span className="text-vbx-teal mx-2">{'//'}</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* ── PAGE CTA ──────────────────────────────────────────────────────── */}
      <section className="section-padding bg-vbx-navy">
        <div className="container-wide">
          <div className="data-line mb-12" />

          <div className="max-w-[680px] mx-auto text-center">
            <h2
              className="font-display text-vbx-white mb-6"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', lineHeight: '1.3' }}
            >
              Ready to brief a requirement?
            </h2>
            <p className="font-sans text-vbx-muted mb-10" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
              We support subcontract opportunities, staffing placements, and à la carte IT engagements for Fed/SLED
              clients. Contact Khaalis Wooden to initiate.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href={HREF_BRIEF} className="btn-gold">
                REQUEST A BRIEFING
              </a>
              <a href={HREF_CAPSTAT} download className="btn-teal-outline">
                DOWNLOAD CAPABILITIES STATEMENT
              </a>
            </div>
          </div>

          <div className="data-line mt-12" />
        </div>
      </section>

    </div>
  )
}
