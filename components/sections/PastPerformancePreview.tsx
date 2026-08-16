'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const ENGAGEMENTS = [
  {
    client: 'STATE OF MONTANA',
    project: 'Master AI Contract (MAPS)',
    tags: 'Statewide AI Vehicle · Both Tracks · Cooperative Purchasing',
    score: '9/10',
    prime: true,
  },
  {
    client: 'LEADING NATIONAL INTEGRATED HEALTHCARE SYSTEM',
    project: 'Patient Portal',
    tags: 'Epic · HL7 · Cures Act · SSO · 99.8% SLA',
    score: '10/10',
    prime: false,
  },
  {
    client: 'CALIFORNIA DHCS',
    project: 'Cost & Finance Reporting System',
    tags: 'MITA · .NET · Azure · SQL Server · AI/OCR',
    score: '10/10',
    prime: false,
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
            {'// Past Performance & Contract Awards'}
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
                borderLeft: eng.prime ? '3px solid #F7B801' : '3px solid rgba(46,168,145,0.5)',
                background: eng.prime ? 'rgba(247,184,1,0.06)' : 'transparent',
                opacity: 0,
                transform: 'translateX(-16px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0">
                {/* Client + project */}
                <div className="flex-1 min-w-0">
                  {eng.prime && (
                    <span
                      className="font-mono text-[0.625rem] tracking-[0.12em] border px-1.5 py-0.5 mr-2 align-middle"
                      style={{
                        color: '#F7B801',
                        borderColor: '#F7B801',
                        borderRadius: '2px',
                      }}
                    >
                      PRIME
                    </span>
                  )}
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
                      color: eng.prime || eng.score === '10/10' ? '#F7B801' : '#2EA891',
                      borderColor: eng.prime || eng.score === '10/10' ? '#F7B801' : '#2EA891',
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
            href="/pastperformance"
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
