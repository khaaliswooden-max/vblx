'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const ENGAGEMENTS = [
  {
    client: 'KAISER PERMANENTE',
    project: 'Patient Portal',
    tags: 'Epic · HL7 · Cures Act · SSO · 99.8% SLA',
    score: '10/10',
  },
  {
    client: 'CALIFORNIA DHCS',
    project: 'Cost & Finance Reporting System',
    tags: 'MITA · .NET · Azure · SQL Server · AI/OCR',
    score: '10/10',
  },
  {
    client: 'VCARE URGENT CARE',
    project: 'Patient & Provider Portal',
    tags: 'HL7 ETL · Microservices · AWS · PHI',
    score: '9/10',
  },
  {
    client: 'CIGNA',
    project: 'Manufacturer Rebate Sharing // Claims Processing',
    tags: 'AWS Batch · Spark · Lambda · Claims Scale',
    score: '8/10',
  },
]

export default function PastPerformancePreview() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    rowRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.opacity = '1'
              el.style.transform = 'none'
            }, i * 150)
            obs.disconnect()
          }
        },
        { threshold: 0.2 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section className="bg-vbx-navy section-padding">
      <div className="container-wide">

        <div className="mb-10">
          <p className="font-mono text-vbx-teal text-sm tracking-[0.12em] mb-3">
            {'// Federal-Analog Past Performance'}
          </p>
          <h2 className="font-display text-vbx-white" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            Selected Engagements
          </h2>
        </div>

        <div className="data-line mb-8"/>

        <div className="space-y-0">
          {ENGAGEMENTS.map((eng, i) => (
            <div
              key={eng.client}
              ref={(el) => { rowRefs.current[i] = el }}
              style={{
                borderBottom: '1px solid rgba(46,168,145,0.1)',
                padding: '1.25rem 0 1.25rem 1.5rem',
                borderLeft: '3px solid rgba(46,168,145,0.5)',
                opacity: 0,
                transform: 'translateX(-16px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0">
                {/* Client + project */}
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-vbx-teal text-sm tracking-[0.08em]">
                    {eng.client}
                  </span>
                  <span className="font-sans text-vbx-white text-sm ml-3">
                    {eng.project}
                  </span>
                </div>
                {/* Tags */}
                <div className="flex-1 min-w-0 md:px-8">
                  <span className="font-mono text-vbx-muted text-xs tracking-[0.05em]">
                    {eng.tags}
                  </span>
                </div>
                {/* Score badge */}
                <div className="flex-shrink-0">
                  <span
                    className="font-mono text-xs tracking-[0.08em] border px-2 py-1"
                    style={{
                      color: eng.score === '10/10' ? '#F7B801' : '#2EA891',
                      borderColor: eng.score === '10/10' ? '#F7B801' : '#2EA891',
                      borderRadius: '2px',
                    }}
                  >
                    [{eng.score}]
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/healthcare-it"
            className="font-sans text-vbx-teal text-sm hover:text-vbx-white transition-colors tracking-wide"
          >
            → View Full Portfolio
          </Link>
        </div>

      </div>
    </section>
  )
}

/* Inject the visible state styles via class toggling */
