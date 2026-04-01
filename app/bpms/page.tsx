'use client'

import { useEffect, useRef } from 'react'
import type { Metadata } from 'next'

// ─── Fade-in hook ─────────────────────────────────────────────────────────────

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(14px)'
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'none'
          obs.disconnect()
        }
      },
      { threshold: 0.07 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

// ─── Font helpers ─────────────────────────────────────────────────────────────

const MONO: React.CSSProperties = { fontFamily: "'IBM Plex Mono', monospace" }
const SANS: React.CSSProperties = { fontFamily: "'IBM Plex Sans', sans-serif" }

// ─── Track data ───────────────────────────────────────────────────────────────

const TRACKS = [
  {
    day: 'Monday',
    name: 'Gov Healthcare IT',
    dayBg: '#1A3A5C',
    audience: 'Federal program managers, VA OIT, HHS/CMS, federal prime contractors',
    desc: 'VA EHR deployments, FHIR mandates, Medicaid modernization, prior auth API buildouts, legacy system debt at federal health agencies.',
  },
  {
    day: 'Tuesday',
    name: 'Healthcare IT',
    dayBg: '#1D4E3A',
    audience: 'Health system CIOs, Epic/Cerner program directors, revenue cycle VPs, payer IT operations',
    desc: 'Epic/Cerner/Oracle Health, HL7/FHIR integration, HIPAA Security Rule overhaul, revenue cycle, HITRUST, healthcare AI/ML.',
  },
  {
    day: 'Wednesday',
    name: 'Critical Access Hospitals',
    dayBg: '#4A2E00',
    audience: 'CAH CFOs/CEOs, state Office of Rural Health directors, HRSA program officers, Flex Program coordinators',
    desc: 'CAH financial sustainability, CMS HCRIS data, MBQIP benchmarks, workforce stabilization, rural broadband, OBBBA policy risk.',
  },
  {
    day: 'Thursday',
    name: 'SAP',
    dayBg: '#2D1B4E',
    audience: 'SAP program managers, ERP modernization leads, SLED CIOs, federal SAP estates, SAP system integrators',
    desc: 'S/4HANA migration, legacy ECC 6.0 end-of-maintenance (2027), custom ABAP remediation, integration architecture, master data governance.',
  },
  {
    day: 'Friday',
    name: 'CMMC / ISO / NIST',
    dayBg: '#1C1C2E',
    audience: 'DoD prime contractor security teams, DIB small businesses, CISO/ISO teams, Huntsville/Redstone Arsenal ecosystem',
    desc: 'CMMC 2.0, NIST SP 800-171, FedRAMP, Zero Trust Architecture, DFARS clauses, SSPs, C3PAOs, DoD supply chain cybersecurity.',
  },
]

const STRUCTURE = [
  { num: '①', title: 'Boring', desc: 'What the problem actually is and why the market consistently underprices it.' },
  { num: '②', title: 'Pain', desc: 'What the verifiable data shows about the downstream damage — GAO, CMS, OIG, peer-reviewed sources.' },
  { num: '③', title: 'Mission Critical', desc: 'Why non-performance has a federal obligation or contract-level consequence attached to it.' },
  { num: '④', title: 'Solutions', desc: 'A numbered implementation sequence with named deliverables. Not a framework. A path.' },
]

const STANDARDS = [
  {
    title: 'Sourced, not synthesized',
    body: 'Every stat and data claim traces to a verifiable public source — GAO reports, CMS HCRIS data, OIG audits, peer-reviewed literature, DoD rule filings. The citations block is not a formality.',
  },
  {
    title: 'The unglamorous problems first',
    body: "The BPMS does not cover what's already on the keynote agenda. It covers the load-bearing problems — the ones that break programs, stall migrations, and close hospitals.",
  },
  {
    title: 'No vendor narrative',
    body: 'Visionblox publishes this series. That is disclosed, not concealed. Past performance references appear in the Solutions section only — never as the premise of the analysis.',
  },
  {
    title: 'Implementation-first',
    body: 'Every Solutions section is a numbered sequence with named deliverables. Not a framework. Not a recommendation. A path you can act on.',
  },
]

const WHO = [
  {
    label: 'Federal program managers and contracting officers',
    body: '— VA OIT, HHS, CMS, HRSA, IHS, OSDBU directors, and the prime contractors who support federal health programs.',
  },
  {
    label: 'Health system and payer IT leadership',
    body: '— CIOs, CTOs, VP Revenue Cycle, Epic/Cerner program directors — accountable for systems that are load-bearing for clinical operations.',
  },
  {
    label: 'Critical Access Hospital administrators and rural health policy staff',
    body: '— CAH CFOs, CEOs, state Office of Rural Health directors, HRSA program officers — the operators closest to the margin cliff.',
  },
  {
    label: 'SAP program managers and ERP modernization leads',
    body: '— federal, SLED, and commercial SAP estates facing the 2027 maintenance cliff, and the system integrators supporting them.',
  },
  {
    label: 'DoD contractors and defense supply chain security teams',
    body: '— DIB primes, Tier 2–4 subcontractors, CISO/ISO teams in the Huntsville/Redstone Arsenal ecosystem and beyond.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BPMSPage() {
  const heroRef      = useFadeIn()
  const whatRef      = useFadeIn()
  const tracksRef    = useFadeIn()
  const standardsRef = useFadeIn()
  const whoRef       = useFadeIn()
  const ctaRef       = useFadeIn()

  return (
    <div style={SANS}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{ background: '#232D5A', padding: '7rem 2rem 5rem', borderBottom: '3px solid #2EA891' }}>
        <div ref={heroRef} style={{ maxWidth: 860, margin: '0 auto' }}>

          <div style={{ ...MONO, fontSize: 11, fontWeight: 500, color: '#2EA891', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ display: 'inline-block', width: 28, height: 2, background: '#2EA891' }} />
            A Visionblox LLC Publication
          </div>

          <h1 style={{ ...MONO, fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', fontWeight: 600, lineHeight: 1.1, color: '#FFFFFF', marginBottom: '0.3rem' }}>
            <span style={{ color: '#F7B801' }}>Boring.</span> Painful.<br />Mission Critical.<br />Solutions.
          </h1>

          <p style={{ fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)', fontWeight: 300, color: '#8898B8', marginTop: '1.6rem', maxWidth: 640, lineHeight: 1.65 }}>
            A daily intelligence brief on the unglamorous, load-bearing problems in Federal Healthcare IT, health systems, Critical Access Hospitals, SAP modernization, and defense cybersecurity. Published every weekday.
          </p>

          <div style={{ marginTop: '2.8rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {['5 TRACKS', 'MONDAY — FRIDAY', 'SOURCED · NOT SYNTHESIZED'].map((pill) => (
              <span key={pill} style={{ ...MONO, fontSize: 11, fontWeight: 500, color: '#F7B801', border: '1px solid rgba(247,184,1,0.3)', padding: '5px 12px', letterSpacing: '0.06em' }}>
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IT IS ────────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem', background: '#F5F4F0' }}>
        <div ref={whatRef} style={{ maxWidth: 860, margin: '0 auto' }}>

          <div style={{ ...MONO, fontSize: 10, fontWeight: 600, color: '#2EA891', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem', paddingBottom: '0.75rem', borderBottom: '1px solid #E0DDD8' }}>
            What This Is
          </div>

          <p style={{ fontSize: '1.3rem', fontWeight: 300, lineHeight: 1.7, color: '#1C1C1C', maxWidth: 720 }}>
            The BPMS covers the problems that own the budget and the bid requirements but never make the keynote —{' '}
            <strong style={{ fontWeight: 500, color: '#232D5A' }}>the annual cost report nobody reads until the facility is six weeks from closure, the ABAP remediation scope that was never honestly defined before the SOW was signed, the CUI boundary that was drawn wrong and hasn&apos;t been touched since.</strong>
          </p>

          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#5A5A5A', maxWidth: 700, marginTop: '1.5rem' }}>
            Every issue is grounded in verifiable federal data, regulatory source documents, and operational delivery experience. No trend pieces. No vendor narratives dressed up as analysis. No conference keynote recaps. Every claim traces to a public, citable source.
          </p>

          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#5A5A5A', maxWidth: 700, marginTop: '1.5rem' }}>
            Visionblox publishes this series. That is disclosed, not hidden. The problem definitions and data are independent of whether Visionblox can solve it. The Solutions section is where past performance speaks — not before.
          </p>

          {/* Structure grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 1, background: '#E0DDD8', border: '1px solid #E0DDD8', marginTop: '2.5rem' }}>
            {STRUCTURE.map(({ num, title, desc }) => (
              <div key={title} style={{ background: '#FFFFFF', padding: '1.5rem 1.25rem' }}>
                <div style={{ ...MONO, fontSize: '1.8rem', fontWeight: 600, color: '#F7B801', lineHeight: 1, marginBottom: '0.5rem' }}>{num}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#232D5A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>{title}</div>
                <div style={{ fontSize: '0.85rem', color: '#5A5A5A', lineHeight: 1.55 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE FIVE TRACKS ───────────────────────────────────────────────── */}
      <section style={{ background: '#232D5A', padding: '5rem 2rem' }}>
        <div ref={tracksRef} style={{ maxWidth: 860, margin: '0 auto' }}>

          <div style={{ ...MONO, fontSize: 10, fontWeight: 600, color: '#2EA891', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            The Five Tracks
          </div>

          <p style={{ fontSize: '1.2rem', fontWeight: 300, color: '#B0C4D8', lineHeight: 1.65, maxWidth: 680, marginBottom: '3rem' }}>
            One issue per weekday. Each track has a defined audience, a distinct editorial voice, and a consistent analytical framework.
          </p>

          <div>
            {TRACKS.map(({ day, name, dayBg, audience, desc }) => (
              <div key={day} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', marginBottom: 1 }}>
                <div style={{ background: dayBg, padding: '1.25rem 1rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ ...MONO, fontSize: '0.75rem', fontWeight: 600, color: '#FFFFFF', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{day}</div>
                  <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', marginTop: 3, lineHeight: 1.3 }}>{name}</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '1px solid rgba(255,255,255,0.06)', padding: '1.25rem 1.4rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 500, color: '#F7B801', marginBottom: '0.35rem' }}>{audience}</div>
                  <div style={{ fontSize: '0.85rem', color: '#8898B8', lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL STANDARDS ───────────────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem', background: '#FFFFFF' }}>
        <div ref={standardsRef} style={{ maxWidth: 860, margin: '0 auto' }}>

          <div style={{ ...MONO, fontSize: 10, fontWeight: 600, color: '#2EA891', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem', paddingBottom: '0.75rem', borderBottom: '1px solid #E0DDD8' }}>
            Editorial Standards
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2.5rem' }}>
            {STANDARDS.map(({ title, body }) => (
              <div key={title}>
                <div style={{ width: 28, height: 3, background: '#2EA891', marginBottom: '1rem' }} />
                <div style={{ fontSize: '0.85rem', fontWeight: 500, color: '#232D5A', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{title}</div>
                <div style={{ fontSize: '0.9rem', color: '#5A5A5A', lineHeight: 1.65 }}>{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ──────────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem', background: '#F5F4F0' }}>
        <div ref={whoRef} style={{ maxWidth: 860, margin: '0 auto' }}>

          <div style={{ ...MONO, fontSize: 10, fontWeight: 600, color: '#2EA891', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem', paddingBottom: '0.75rem', borderBottom: '1px solid #E0DDD8' }}>
            Who It&apos;s For
          </div>

          <div style={{ borderTop: '1px solid #E0DDD8' }}>
            {WHO.map(({ label, body }) => (
              <div key={label} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.25rem 0', borderBottom: '1px solid #E0DDD8' }}>
                <div style={{ width: 8, height: 8, background: '#F7B801', marginTop: 7, flexShrink: 0 }} />
                <div style={{ fontSize: '0.95rem', color: '#1C1C1C', lineHeight: 1.65 }}>
                  <strong style={{ color: '#232D5A', fontWeight: 500 }}>{label}</strong>{' '}{body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: '#232D5A', padding: '5rem 2rem', borderTop: '3px solid #F7B801' }}>
        <div ref={ctaRef} style={{ maxWidth: 860, margin: '0 auto' }}>

          <h2 style={{ ...MONO, fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', fontWeight: 600, color: '#FFFFFF', marginBottom: '1rem', lineHeight: 1.2 }}>
            If any of these tracks<br />are live problems — let&apos;s talk.
          </h2>

          <p style={{ fontSize: '1rem', fontWeight: 300, color: '#8898B8', maxWidth: 560, lineHeight: 1.65, marginBottom: '2.5rem' }}>
            Visionblox delivers Healthcare IT, Critical Access Hospital transformation, and full-stack IT services to Federal and SLED clients. Minority-Owned SB · GSA MAS SIN 54151HEAL
          </p>

          <div style={{ ...MONO, fontSize: '0.85rem', color: '#F7B801', lineHeight: 2 }}>
            Khaalis Wooden — Director, Enterprise Capture &amp; Compliance<br />
            <a href="mailto:khaalis.wooden@visionblox.com" style={{ color: '#F7B801', textDecoration: 'none' }}>
              khaalis.wooden@visionblox.com
            </a>
            <span style={{ display: 'inline-block', width: 1, height: 14, background: 'rgba(247,184,1,0.3)', verticalAlign: 'middle', margin: '0 10px' }} />
            (256) 988-1130
            <span style={{ display: 'inline-block', width: 1, height: 14, background: 'rgba(247,184,1,0.3)', verticalAlign: 'middle', margin: '0 10px' }} />
            <a href="https://visionblox.org" style={{ color: '#F7B801', textDecoration: 'none' }}>
              visionblox.org
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
