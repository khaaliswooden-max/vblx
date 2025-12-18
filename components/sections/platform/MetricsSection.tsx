'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Metric } from '@/lib/platformData'

interface MetricsSectionProps {
  metrics: Metric[]
  platformColor: string
}

function AnimatedCounter({
  value,
  suffix,
  prefix,
  duration = 2,
  shouldAnimate,
}: {
  value: number
  suffix: string
  prefix?: string
  duration?: number
  shouldAnimate: boolean
}) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!shouldAnimate) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setDisplayValue(Math.floor(easeOutQuart * value * 10) / 10)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [value, duration, shouldAnimate])

  // Format the display value
  const formattedValue = Number.isInteger(value)
    ? Math.floor(displayValue)
    : displayValue.toFixed(1)

  return (
    <span>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  )
}

export default function MetricsSection({ metrics, platformColor }: MetricsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(ellipse at center, ${platformColor}, transparent 70%)`,
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-display-sm font-bold mb-4">
            Measurable Impact
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto">
            Real results from organizations that have transformed their operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className="font-display text-display-md lg:text-display-lg font-bold mb-2"
                style={{ color: platformColor }}
              >
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  prefix={metric.prefix}
                  shouldAnimate={isInView}
                />
              </div>
              <div className="font-medium text-text-primary mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-text-tertiary">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
