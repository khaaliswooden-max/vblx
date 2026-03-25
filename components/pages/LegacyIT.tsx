'use client'

import { useEffect } from 'react'
import Link from 'next/link'

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

const DESIGNATIONS = [
  'MINORITY-OWNED SMALL BUSINESS',
  'GSA MAS SPRINGBOARD',
  'HIPAA COMPLIANT',
  'HITRUST-AUDITED SECURITY STAFF',
  'SECTION 508 DELIVERED',
  'FEDRAMP-ARCHITECTURE-AWARE',
]

const STYLES = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --vbx-navy:    #232D5A;
    --vbx-teal:    #2EA891;
    --vbx-gold:    #F7B801;
    --vbx-bg:      #0d0f1a;
    --vbx-bg2:     #131625;
    --vbx-bg3:     #181c30;
    --vbx-border:  rgba(46,168,145,0.18);
    --vbx-border2: rgba(255,255,255,0.07);
    --vbx-text:    #e8eaf2;
    --vbx-muted:   #7a7f99;
    --vbx-mono:    'Courier New', Courier, monospace;
    --vbx-sans:    -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
  }

  .vbx-page {
    background: var(--vbx-bg);
    color: var(--vbx-text);
    font-family: var(--vbx-sans);
    font-size: 15px;
    line-height: 1.65;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  .vbx-nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(13,15,26,0.96);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--vbx-border2);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 2rem; height: 56px;
  }
  .vbx-nav-brand {
    font-family: var(--vbx-mono); font-size: 1rem; font-weight: 700;
    color: var(--vbx-text); letter-spacing: 0.04em;
    text-transform: lowercase; text-decoration: none;
  }
  .vbx-nav-links {
    display: flex; align-items: center; gap: 0.25rem; list-style: none;
  }
  .vbx-nav-links a {
    font-family: var(--vbx-mono); font-size: 0.72rem; color: var(--vbx-muted);
    letter-spacing: 0.06em; text-transform: uppercase;
    padding: 0.4rem 0.7rem; border-radius: 3px;
    transition: color 0.2s, background 0.2s; text-decoration: none;
  }
  .vbx-nav-links a:hover, .vbx-nav-links a.active {
    color: var(--vbx-teal); background: rgba(46,168,145,0.08);
  }
  .vbx-nav-cta {
    font-family: var(--vbx-mono); font-size: 0.7rem; letter-spacing: 0.08em;
    text-transform: uppercase; background: var(--vbx-teal); color: #000;
    padding: 0.4rem 1rem; border-radius: 2px; font-weight: 700;
    transition: opacity 0.2s; text-decoration: none;
  }
  .vbx-nav-cta:hover { opacity: 0.85; }

  .vbx-hero {
    padding: 5rem 2rem 3.5rem; max-width: 1100px;
    margin: 0 auto; border-bottom: 1px solid var(--vbx-border2);
  }
  .vbx-hero-meta {
    font-family: var(--vbx-mono); font-size: 0.68rem; color: var(--vbx-muted);
    letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.4rem;
  }
  .vbx-hero-meta .accent { color: var(--vbx-teal); }
  .vbx-hero h1 {
    font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800;
    line-height: 1.12; letter-spacing: -0.02em; margin-bottom: 1.2rem; color: #fff;
  }
  .vbx-hero h1 em { font-style: normal; color: var(--vbx-teal); }
  .vbx-hero-sub {
    font-family: var(--vbx-mono); font-size: 0.72rem; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--vbx-muted); margin-bottom: 1.8rem;
  }
  .vbx-hero-sub .gold { color: var(--vbx-gold); }
  .vbx-hero-body {
    max-width: 720px; font-size: 1.05rem; color: #adb3cc;
    line-height: 1.75; margin-bottom: 2rem;
  }
  .vbx-badge-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .vbx-badge {
    font-family: var(--vbx-mono); font-size: 0.62rem; letter-spacing: 0.1em;
    text-transform: uppercase; padding: 0.3rem 0.7rem;
    border: 1px solid var(--vbx-border); border-radius: 2px; color: var(--vbx-teal);
  }

  .vbx-quote-wrap { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
  .vbx-quote {
    border-left: 3px solid var(--vbx-teal); padding: 1.2rem 1.8rem; margin: 2.5rem 0;
    font-family: var(--vbx-mono); font-size: 0.88rem; color: #adb3cc;
    line-height: 1.7; background: rgba(46,168,145,0.04);
  }

  .vbx-section {
    max-width: 1100px; margin: 0 auto;
    padding: 3rem 2rem; border-bottom: 1px solid var(--vbx-border2);
  }
  .vbx-section-label {
    font-family: var(--vbx-mono); font-size: 0.65rem; color: var(--vbx-muted);
    letter-spacing: 0.14em; text-transform: uppercase;
    margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;
  }
  .vbx-label-num { color: var(--vbx-teal); font-size: 0.7rem; }
  .vbx-label-line { flex: 1; height: 1px; background: var(--vbx-border2); display: block; }
  .vbx-section h2 {
    font-size: 1.55rem; font-weight: 700; letter-spacing: -0.01em;
    color: #fff; margin-bottom: 0.3rem;
  }
  .vbx-section-intro {
    font-size: 0.92rem; color: var(--vbx-muted); margin-bottom: 2rem; max-width: 640px;
  }

  .vbx-card-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1px; background: var(--vbx-border2); border: 1px solid var(--vbx-border2);
  }
  .vbx-card { background: var(--vbx-bg2); padding: 1.8rem; transition: background 0.2s; }
  .vbx-card:hover { background: var(--vbx-bg3); }
  .vbx-card-idx {
    font-family: var(--vbx-mono); font-size: 0.62rem;
    color: var(--vbx-teal); letter-spacing: 0.1em; margin-bottom: 0.8rem;
  }
  .vbx-card h3 { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem; }
  .vbx-card p  { font-size: 0.87rem; color: #8a90aa; line-height: 1.65; margin-bottom: 1rem; }
  .vbx-tag-row { display: flex; flex-wrap: wrap; gap: 0.35rem; }
  .vbx-tag {
    font-family: var(--vbx-mono); font-size: 0.58rem; letter-spacing: 0.08em;
    text-transform: uppercase; padding: 0.2rem 0.5rem;
    background: rgba(46,168,145,0.08); border: 1px solid rgba(46,168,145,0.2);
    color: var(--vbx-teal); border-radius: 2px;
  }

  .vbx-staffing-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1px; background: var(--vbx-border2); border: 1px solid var(--vbx-border2);
    margin-bottom: 1.5rem;
  }
  .vbx-staff-card { background: var(--vbx-bg2); padding: 1.5rem 1.8rem; }
  .vbx-staff-role {
    font-family: var(--vbx-mono); font-size: 0.68rem; color: var(--vbx-gold);
    letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 0.4rem;
  }
  .vbx-staff-card h4 { font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 0.4rem; }
  .vbx-staff-card p  { font-size: 0.84rem; color: #8a90aa; line-height: 1.6; }

  .vbx-table-wrap { overflow-x: auto; }
  .vbx-service-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
  .vbx-service-table thead tr { background: var(--vbx-bg3); }
  .vbx-service-table th {
    font-family: var(--vbx-mono); font-size: 0.65rem; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--vbx-muted);
    padding: 0.8rem 1rem; text-align: left; border-bottom: 1px solid var(--vbx-border);
  }
  .vbx-service-table td {
    padding: 0.85rem 1rem; border-bottom: 1px solid var(--vbx-border2);
    color: #adb3cc; vertical-align: top;
  }
  .vbx-service-table tr:hover td { background: var(--vbx-bg3); }
  .vbx-service-table td:first-child { color: #fff; font-weight: 600; white-space: nowrap; }
  .vbx-avail {
    font-family: var(--vbx-mono); font-size: 0.62rem;
    padding: 0.2rem 0.55rem; border-radius: 2px; white-space: nowrap;
  }
  .vbx-avail-yes  { background: rgba(46,168,145,0.12); color: var(--vbx-teal); border: 1px solid rgba(46,168,145,0.3); }
  .vbx-avail-gold { background: rgba(247,184,1,0.1);   color: var(--vbx-gold); border: 1px solid rgba(247,184,1,0.3); }

  .vbx-engage-steps {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1px; background: var(--vbx-border2); border: 1px solid var(--vbx-border2);
  }
  .vbx-engage-step { background: var(--vbx-bg2); padding: 1.6rem; }
  .vbx-step-num {
    font-family: var(--vbx-mono); font-size: 1.6rem; font-weight: 800;
    color: rgba(46,168,145,0.2); line-height: 1; margin-bottom: 0.6rem;
  }
  .vbx-engage-step h4 { font-size: 0.9rem; font-weight: 700; color: #fff; margin-bottom: 0.4rem; }
  .vbx-engage-step p  { font-size: 0.83rem; color: #8a90aa; line-height: 1.6; }

  .vbx-compliance-strip {
    border-top: 1px solid var(--vbx-border); border-bottom: 1px solid var(--vbx-border);
    background: var(--vbx-bg3); padding: 1.2rem 2rem;
    font-family: var(--vbx-mono); font-size: 0.65rem; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--vbx-muted); text-align: center;
  }
  .vbx-compliance-strip .sep { color: var(--vbx-teal); margin: 0 0.5rem; }

  .vbx-cta { max-width: 1100px; margin: 0 auto; padding: 4rem 2rem; text-align: center; }
  .vbx-cta h2 { font-size: 1.6rem; font-weight: 800; color: #fff; margin-bottom: 0.8rem; letter-spacing: -0.01em; }
  .vbx-cta > p { font-size: 0.95rem; color: var(--vbx-muted); margin-bottom: 2rem; }
  .vbx-cta-btns { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
  .vbx-btn-primary {
    font-family: var(--vbx-mono); font-size: 0.72rem; letter-spacing: 0.1em;
    text-transform: uppercase; font-weight: 700; padding: 0.75rem 1.8rem;
    background: var(--vbx-teal); color: #000; border-radius: 2px;
    transition: opacity 0.2s; text-decoration: none;
  }
  .vbx-btn-primary:hover { opacity: 0.85; }
  .vbx-btn-secondary {
    font-family: var(--vbx-mono); font-size: 0.72rem; letter-spacing: 0.1em;
    text-transform: uppercase; font-weight: 600; padding: 0.75rem 1.8rem;
    border: 1px solid var(--vbx-border); color: var(--vbx-teal); border-radius: 2px;
    transition: background 0.2s; text-decoration: none;
  }
  .vbx-btn-secondary:hover { background: rgba(46,168,145,0.07); }

  .vbx-footer { background: var(--vbx-bg2); border-top: 1px solid var(--vbx-border2); padding: 2.5rem 2rem; }
  .vbx-footer-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 2rem;
  }
  .vbx-footer-brand   { font-family: var(--vbx-mono); font-size: 0.78rem; color: var(--vbx-text); font-weight: 700; margin-bottom: 0.5rem; }
  .vbx-footer-tagline { font-family: var(--vbx-mono); font-size: 0.65rem; color: var(--vbx-muted); margin-bottom: 0.8rem; }
  .vbx-footer-ids     { font-family: var(--vbx-mono); font-size: 0.63rem; color: var(--vbx-muted); line-height: 1.8; }
  .vbx-footer h5 {
    font-family: var(--vbx-mono); font-size: 0.62rem; letter-spacing: 0.1em;
    text-transform: uppercase; color: var(--vbx-muted); margin-bottom: 0.8rem;
  }
  .vbx-footer ul    { list-style: none; }
  .vbx-footer ul li { font-family: var(--vbx-mono); font-size: 0.65rem; color: #8a90aa; line-height: 2; }
  .vbx-footer-bottom {
    max-width: 1100px; margin: 1.5rem auto 0;
    padding-top: 1.2rem; border-top: 1px solid var(--vbx-border2);
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 0.5rem;
  }
  .vbx-footer-bottom span, .vbx-footer-bottom a {
    font-family: var(--vbx-mono); font-size: 0.6rem;
    color: var(--vbx-muted); letter-spacing: 0.08em; text-transform: uppercase;
  }
  .vbx-footer-bottom a { margin-left: 1rem; text-decoration: none; }
  .vbx-note    { font-family: var(--vbx-mono); font-size: 0.68rem; color: var(--vbx-muted); margin-top: 1rem; }
  .vbx-note-sm { font-family: var(--vbx-mono); font-size: 0.65rem; color: var(--vbx-muted); margin-top: 0.9rem; }

  @media (max-width: 768px) {
    .vbx-nav-links { display: none; }
    .vbx-footer-inner { grid-template-columns: 1fr; }
    .vbx-service-table { font-size: 0.8rem; }
    .vbx-service-table th, .vbx-service-table td { padding: 0.65rem 0.6rem; }
  }
`

export default function LegacyIT() {
  useEffect(() => {
    const STYLE_ID = 'vbx-legacy-it-styles'
    if (!document.getElementById(STYLE_ID)) {
      const el = document.createElement('style')
      el.id = STYLE_ID
      el.textContent = STYLES
      document.head.appendChild(el)
    }
  }, [])

  const HREF_BRIEF = 'mailto:khaalis.wooden@visionblox.com?subject=Legacy%20IT%20Services%20Inquiry'
  const HREF_CAPSTAT = 'mailto:khaalis.wooden@visionblox.com?subject=Capabilities%20Statement%20Request'

  return (
    <div className="vbx-page">
      <nav className="vbx-nav">
        <Link href="/" className="vbx-nav-brand">
          visionblox
        </Link>
        <ul className="vbx-nav-links">
          <li>
            <Link href="/healthcare-it">Healthcare IT</Link>
          </li>
          <li>
            <Link href="/healthcare-it">Critical Access Hospitals</Link>
          </li>
          <li>
            <Link href="/cahsp">CAHSP</Link>
          </li>
          <li>
            <Link href="/legacy-it" className="active">
              Legacy IT
            </Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/pastperformance">Past Performance</Link>
          </li>
        </ul>
        <a href={HREF_BRIEF} className="vbx-nav-cta">
          Request Briefing
        </a>
      </nav>

      <header className="vbx-hero">
        <div className="vbx-hero-meta">
          CAGE: 9Z4X2 &nbsp;//&nbsp; UEI: H4X2Z7R9E3E3 &nbsp;//&nbsp;{' '}
          <span className="accent">Legacy IT Services</span>
        </div>
        <h1>
          Traditional IT.
          <br />
          <em>Federal-Grade</em> Delivery.
        </h1>
        <div className="vbx-hero-sub">
          Fed/SLED Subcontracting &nbsp;<span className="gold">//</span>&nbsp; IT Staffing &nbsp;
          <span className="gold">//</span>&nbsp; On-Premise &nbsp;<span className="gold">//</span>&nbsp; Remote À La
          Carte
        </div>
        <p className="vbx-hero-body">
          Visionblox provides experienced IT subcontracting and flexible staffing support for prime contractors and agency
          program managers executing on federal and SLED vehicles. We also deliver traditional on-premise and remote IT
          services to clients who need proven execution — no cloud mandate, no modernization agenda, just reliable delivery
          against your requirement.
        </p>
        <div className="vbx-badge-row">
          {[
            'Minority-Owned SB',
            'GSA MAS Springboard',
            'NAICS 541511 · 541512 · 541519',
            'NIST 800-53 Aligned',
            'TAA Compliant',
            'Section 889 Certified',
          ].map((b) => (
            <span key={b} className="vbx-badge">
              {b}
            </span>
          ))}
        </div>
      </header>

      <div className="vbx-quote-wrap">
        <blockquote className="vbx-quote">
          &ldquo;Federal programs don&apos;t always need transformation. They need a subcontractor who shows up,
          integrates cleanly, and delivers on the SOW. That is what Legacy IT at Visionblox is built to do.&rdquo;
        </blockquote>
      </div>

      <section className="vbx-section">
        <div className="vbx-section-label">
          <span className="vbx-label-num">[ 01 ]</span>
          Fed/SLED Subcontracting
          <span className="vbx-label-line" />
        </div>
        <h2>Subcontractor Support for Prime Contractors</h2>
        <p className="vbx-section-intro">
          We integrate into your teaming structure as a reliable technical sub. Bring scope, bring a vehicle, bring a
          deadline — we staff and execute. Certifications transfer. Past performance is documented and portable.
        </p>
        <div className="vbx-card-grid">
          {SUB_CARDS.map((card) => (
            <div key={card.idx} className="vbx-card">
              <div className="vbx-card-idx">{card.idx}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <div className="vbx-tag-row">
                {card.tags.map((t) => (
                  <span key={t} className="vbx-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="vbx-section">
        <div className="vbx-section-label">
          <span className="vbx-label-num">[ 02 ]</span>
          Available Staff Profiles
          <span className="vbx-label-line" />
        </div>
        <h2>The Team Behind the Deliveries</h2>
        <p className="vbx-section-intro">
          Key personnel available for subcontract placement. All profiles carry documented past performance mappable to
          your PWS.
        </p>
        <div className="vbx-staffing-grid">
          {STAFF.map((s) => (
            <div key={s.name} className="vbx-staff-card">
              <div className="vbx-staff-role">{s.role}</div>
              <h4>{s.name}</h4>
              <p>{s.bio}</p>
            </div>
          ))}
        </div>
        <p className="vbx-note">
          {'//'} Additional web/mobile profiles available: Vinoth, Krishanth, Sandhiya (React, React Native, Angular,
          Node.js). Resumes furnished on request under NDA.
        </p>
      </section>

      <section className="vbx-section">
        <div className="vbx-section-label">
          <span className="vbx-label-num">[ 03 ]</span>
          On-Premise &amp; Remote Services
          <span className="vbx-label-line" />
        </div>
        <h2>Traditional IT — No Cloud Mandate</h2>
        <p className="vbx-section-intro">
          For clients who need the work done without a modernization agenda attached. Fixed-scope, fixed-deliverable à la
          carte engagements.
        </p>
        <div className="vbx-table-wrap">
          <table className="vbx-service-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Description</th>
                <th>Delivery Mode</th>
                <th>Availability</th>
              </tr>
            </thead>
            <tbody>
              {SERVICES.map((svc) => (
                <tr key={svc.name}>
                  <td>{svc.name}</td>
                  <td>{svc.desc}</td>
                  <td>{svc.mode}</td>
                  <td>
                    <span
                      className={`vbx-avail ${svc.avail === 'yes' ? 'vbx-avail-yes' : 'vbx-avail-gold'}`}
                    >
                      {svc.avail === 'yes' ? 'Available Now' : 'Partner-Augmented'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="vbx-note-sm">
          {'//'} Partner-Augmented: Delivered via vetted teaming partner with Visionblox as prime or sub depending on
          vehicle. Contact for details.
        </p>
      </section>

      <section className="vbx-section">
        <div className="vbx-section-label">
          <span className="vbx-label-num">[ 04 ]</span>
          How We Engage
          <span className="vbx-label-line" />
        </div>
        <h2>Engagement Process</h2>
        <p className="vbx-section-intro">
          We move fast. From first contact to SOW in five business days for standard scopes.
        </p>
        <div className="vbx-engage-steps">
          {STEPS.map((step) => (
            <div key={step.num} className="vbx-engage-step">
              <div className="vbx-step-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="vbx-compliance-strip">
        {COMPLIANCE_ITEMS.map((item, i) => (
          <span key={item}>
            {item}
            {i < COMPLIANCE_ITEMS.length - 1 && <span className="sep"> // </span>}
          </span>
        ))}
      </div>

      <div className="vbx-cta">
        <h2>Ready to brief a requirement?</h2>
        <p>
          We support subcontract opportunities, staffing placements, and à la carte IT engagements for Fed/SLED clients.
          Contact Khaalis Wooden to initiate.
        </p>
        <div className="vbx-cta-btns">
          <a href={HREF_BRIEF} className="vbx-btn-primary">
            Request a Briefing
          </a>
          <a href={HREF_CAPSTAT} className="vbx-btn-secondary">
            Download Capabilities Statement
          </a>
        </div>
      </div>

      <footer className="vbx-footer">
        <div className="vbx-footer-inner">
          <div>
            <div className="vbx-footer-brand">visionblox</div>
            <div className="vbx-footer-tagline">Legacy IT Services · Federal &amp; SLED</div>
            <div className="vbx-footer-ids">
              CAGE: 9Z4X2
              <br />
              UEI: H4X2Z7R9E3E3
              <br />
              NAICS: 541511 · 541512 · 541519 · 518210
            </div>
          </div>
          <div>
            <h5>Designations &amp; Compliance</h5>
            <ul>{DESIGNATIONS.map((d) => <li key={d}>{d}</li>)}</ul>
          </div>
          <div>
            <h5>Point of Contact</h5>
            <ul>
              <li>Khaalis Wooden</li>
              <li>Director, Enterprise Capture &amp; Compliance</li>
              <li>
                <a href="tel:+12569881130" style={{ color: 'var(--vbx-teal)' }}>
                  (256) 988-1130
                </a>
              </li>
              <li>
                <a href="mailto:khaalis.wooden@visionblox.com" style={{ color: 'var(--vbx-teal)' }}>
                  khaalis.wooden@visionblox.com
                </a>
              </li>
              <li style={{ marginTop: '0.4rem' }}>
                <Link href="/" style={{ color: 'var(--vbx-muted)' }}>
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="vbx-footer-bottom">
          <span>© 2026 Visionblox LLC &nbsp;//&nbsp; Legacy IT Services — BD Use</span>
          <div>
            <Link href="mailto:khaalis.wooden@visionblox.com">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
