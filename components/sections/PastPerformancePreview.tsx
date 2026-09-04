import Link from 'next/link'

/**
 * Selected engagements.
 *
 * Two changes beyond the recolour:
 *  - Rows previously rendered at opacity:0 and were revealed only by an
 *    IntersectionObserver, so the content was absent for crawlers, no-JS
 *    clients and anyone with reduced motion. They are now plain server-rendered
 *    markup with no reveal animation.
 *  - The middle-dot meta strings ("Epic · HL7 · Cures Act · SSO · 99.8% SLA")
 *    are real list elements rather than a single joined string.
 */
const ENGAGEMENTS = [
  {
    client: 'State of Montana',
    project: 'Master AI Contract (MAPS)',
    tags: ['Statewide AI vehicle', 'Both tracks', 'Cooperative purchasing'],
    relevance: '9/10',
    prime: true,
  },
  {
    client: 'Leading national integrated healthcare system',
    project: 'Patient portal',
    tags: ['Epic', 'HL7', 'Cures Act', 'SSO', '99.8% SLA'],
    relevance: '10/10',
    prime: false,
  },
  {
    client: 'California DHCS',
    project: 'Cost & Finance Reporting System',
    tags: ['MITA', '.NET', 'Azure', 'SQL Server', 'AI/OCR'],
    relevance: '10/10',
    prime: false,
  },
]

export default function PastPerformancePreview() {
  return (
    <section className="bg-vbx-offwhite section-padding" aria-labelledby="engagements-heading">
      <div className="container-wide">

        <p className="eyebrow">Past performance and contract awards</p>
        <h2
          id="engagements-heading"
          className="font-display text-vbx-navy font-bold"
          style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}
        >
          Selected engagements
        </h2>

        <ul className="mt-10 border-t border-vbx-rule">
          {ENGAGEMENTS.map((eng) => (
            <li
              key={eng.client}
              className="border-b border-vbx-rule py-5 pl-4"
              style={{
                borderLeft: `3px solid ${eng.prime ? 'var(--vbx-gold)' : 'var(--vbx-teal)'}`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                <div className="flex-1 min-w-0">
                  {eng.prime && (
                    <span className="inline-block text-xs font-semibold text-vbx-navy border border-vbx-gold px-1.5 py-0.5 mr-2 align-middle">
                      Prime
                    </span>
                  )}
                  <span className="text-vbx-navy font-semibold text-sm">
                    {eng.client}
                  </span>
                  <span className="text-vbx-navy-light text-sm ml-2">
                    {eng.project}
                  </span>
                </div>

                <ul className="flex-1 min-w-0 flex flex-wrap gap-x-4 gap-y-1">
                  {eng.tags.map((t) => (
                    <li key={t} className="text-vbx-navy-light text-xs">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="flex-shrink-0 text-xs text-vbx-navy-light">
                  Federal relevance{' '}
                  <span className="font-semibold text-vbx-navy">{eng.relevance}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link href="/pastperformance" className="link">
            View full portfolio
            <span className="link-arrow" aria-hidden="true">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  )
}
