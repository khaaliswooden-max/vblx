'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Portfolio statistics.
 *
 * The final value is the INITIAL DOM state (Step 4.2). Previously each counter
 * rendered from 0 and only reached its real value once the animation ran, so
 * any client that does not execute it — search crawlers, social scrapers,
 * screen readers reading before the observer fires, anyone with JS disabled —
 * saw "$0.0M / 0K+ / 0% / 0%". The animation now counts *toward* a number that
 * is already correct in the markup, and under prefers-reduced-motion it never
 * starts at all.
 *
 * Figures are stated exactly as documented and are not rounded or restated.
 */

const STATS = [
  { value: 3.3, prefix: '$', suffix: 'M',  display: '$3.3M', label: 'Documented healthcare portfolio' },
  { value: 100, prefix: '',  suffix: 'K+', display: '100K+', label: 'Daily users at peak capacity' },
  { value: 96,  prefix: '',  suffix: '%',  display: '96%',   label: 'AI document processing accuracy' },
  { value: 60,  prefix: '',  suffix: '%',  display: '60%',   label: 'Labor cost reduction via automation' },
]

function format(value: number, end: number, prefix: string, suffix: string) {
  const n = end < 10 ? value.toFixed(1) : Math.round(value).toString()
  return `${prefix}${n}${suffix}`
}

function AnimatedCounter({
  end,
  prefix,
  suffix,
  display,
  duration = 1500,
}: {
  end: number
  prefix: string
  suffix: string
  display: string
  duration?: number
}) {
  // Seeded with the FINAL value, so server-rendered markup is already correct.
  const [text, setText] = useState(display)
  const ref = useRef<HTMLSpanElement>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || hasRun.current) return

    // Respect reduced motion: leave the final value in place, animate nothing.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return
        hasRun.current = true
        observer.disconnect()

        const startTime = performance.now()
        const step = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          if (progress < 1) {
            setText(format(end * eased, end, prefix, suffix))
            requestAnimationFrame(step)
          } else {
            setText(display) // always land exactly on the documented figure
          }
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, prefix, suffix, display, duration])

  return (
    <span
      ref={ref}
      className="font-display font-bold text-vbx-navy tabular-nums"
      style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', lineHeight: 1.05 }}
    >
      {text}
    </span>
  )
}

export default function StatsStrip() {
  return (
    <section className="bg-vbx-teal-tint border-y border-vbx-rule section-padding">
      <div className="container-wide">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-3 px-4"
              style={{
                borderRight:
                  i < STATS.length - 1 ? '1px solid var(--vbx-rule)' : undefined,
              }}
            >
              {/* Gold rule carries the accent; the figure itself stays navy,
                  because gold-on-tint measures 1.59:1. */}
              <dd className="order-1 flex flex-col items-center gap-2">
                <AnimatedCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  display={stat.display}
                />
                <span aria-hidden="true" className="block w-8 h-[3px] bg-vbx-gold" />
              </dd>
              <dt className="order-2 text-vbx-navy-light text-sm leading-snug max-w-[170px]">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
