'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 3.3,  prefix: '$', suffix: 'M', label: 'Documented Healthcare Portfolio' },
  { value: 100,  prefix: '',  suffix: 'K+', label: 'Daily Users at Peak Capacity' },
  { value: 96,   prefix: '',  suffix: '%',  label: 'AI Document Processing Accuracy' },
  { value: 60,   prefix: '',  suffix: '%',  label: 'Labor Cost Reduction via Automation' },
]

function AnimatedCounter({ end, prefix, suffix, duration = 1500 }: {
  end: number; prefix: string; suffix: string; duration?: number
}) {
  const [current, setCurrent] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCurrent(end * ease)
      if (progress < 1) requestAnimationFrame(step)
      else setCurrent(end)
    }
    requestAnimationFrame(step)
  }, [started, end, duration])

  const display = end < 10 ? current.toFixed(1) : Math.round(current).toString()

  return (
    <span ref={ref} className="font-mono text-vbx-teal" style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', lineHeight: 1 }}>
      {prefix}{display}{suffix}
    </span>
  )
}

export default function StatsStrip() {
  return (
    <section
      className="section-padding"
      style={{ background: 'rgba(255,255,255,0.04)', borderTop: '1px solid rgba(46,168,145,0.12)', borderBottom: '1px solid rgba(46,168,145,0.12)' }}
    >
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-3 px-6"
              style={{
                borderRight: i < STATS.length - 1 ? '1px solid rgba(46,168,145,0.2)' : 'none',
              }}
            >
              <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix}/>
              <span className="font-sans text-vbx-muted text-sm leading-snug max-w-[140px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
