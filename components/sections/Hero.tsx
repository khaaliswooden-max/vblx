'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FULL_HEADLINE = 'Healthcare Data\nInfrastructure\nfor the Institutions\nThat Govern It.'

const SLIDES = [
  '/slides/slide-1.png',
  '/slides/slide-2.png',
  '/slides/slide-3.png',
  '/slides/slide-4.png',
]
const SLIDE_DURATION = 5000  // ms per slide
const FADE_DURATION  = 1000  // ms crossfade

function DataGridSVG() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden" aria-hidden="true">
      {/* Slowly rotating outer ring */}
      <svg
        className="absolute inset-0 w-full h-full animate-rotate-slow"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.25 }}
      >
        <circle cx="200" cy="200" r="190" stroke="#2EA891" strokeWidth="0.5" strokeDasharray="4 8"/>
        <circle cx="200" cy="200" r="155" stroke="#2EA891" strokeWidth="0.5" strokeDasharray="2 12"/>
        <circle cx="200" cy="200" r="118" stroke="#2EA891" strokeWidth="0.5" strokeDasharray="6 6"/>
        <circle cx="200" cy="200" r="80"  stroke="#2EA891" strokeWidth="0.5"/>
        <circle cx="200" cy="200" r="44"  stroke="#2EA891" strokeWidth="1"/>
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          return (
            <circle
              key={i}
              cx={200 + 190 * Math.cos(rad)}
              cy={200 + 190 * Math.sin(rad)}
              r={i % 3 === 0 ? 4 : 2.5}
              fill="#2EA891"
              opacity={i % 3 === 0 ? 0.9 : 0.5}
            />
          )
        })}
        {[15,75,135,195,255,315].map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          return (
            <circle key={`m${i}`} cx={200 + 155 * Math.cos(rad)} cy={200 + 155 * Math.sin(rad)} r={2} fill="#2EA891" opacity={0.6}/>
          )
        })}
        <line x1="10"  y1="200" x2="390" y2="200" stroke="#2EA891" strokeWidth="0.3" opacity="0.3"/>
        <line x1="200" y1="10"  x2="200" y2="390" stroke="#2EA891" strokeWidth="0.3" opacity="0.3"/>
        <line x1="60"  y1="60"  x2="340" y2="340" stroke="#2EA891" strokeWidth="0.3" opacity="0.15"/>
        <line x1="340" y1="60"  x2="60"  y2="340" stroke="#2EA891" strokeWidth="0.3" opacity="0.15"/>
        <circle cx="200" cy="200" r="6"  fill="#2EA891" opacity="0.9"/>
        <circle cx="200" cy="200" r="12" fill="none" stroke="#2EA891" strokeWidth="1" opacity="0.4"/>
      </svg>

      {/* Node grid */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-3 p-12" style={{ opacity: 0.35 }}>
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
            style={{ animation: `dotPulse ${1.5 + (i % 5) * 0.4}s infinite`, animationDelay: `${(i * 0.08) % 2}s` }}
          >
            <div
              className="rounded-full"
              style={{
                width:  i % 7 === 0 ? '6px' : '3px',
                height: i % 7 === 0 ? '6px' : '3px',
                background: i % 11 === 0 ? '#F7B801' : '#2EA891',
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 right-8 font-mono text-xs text-vbx-teal tracking-[0.1em]" style={{ opacity: 0.6 }}>
        SYS // 99.8% UPTIME
      </div>
    </div>
  )
}

function TypewriterHeadline() {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const indexRef = useRef(0)

  useEffect(() => {
    const chars = FULL_HEADLINE.split('')
    const interval = setInterval(() => {
      if (indexRef.current < chars.length) {
        setDisplayed(chars.slice(0, indexRef.current + 1).join(''))
        indexRef.current++
      } else {
        clearInterval(interval)
        setTimeout(() => setShowCursor(false), 2000)
      }
    }, 38)
    return () => clearInterval(interval)
  }, [])

  return (
    <h1
      className="font-display text-vbx-white"
      style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1.1', letterSpacing: '-0.01em', whiteSpace: 'pre-line' }}
    >
      {displayed}
      {showCursor && (
        <span
          className="inline-block bg-vbx-teal"
          style={{ width: '3px', height: '0.85em', marginLeft: '3px', verticalAlign: 'text-bottom', animation: 'blink 0.8s step-end infinite' }}
        />
      )}
    </h1>
  )
}

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    if (mq.matches) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % SLIDES.length)
    }, SLIDE_DURATION)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-vbx-navy flex items-center overflow-hidden pt-20">

      {/* Slideshow background */}
      {SLIDES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          className="object-cover"
          style={{
            zIndex: 0,
            opacity: reducedMotion ? (i === 0 ? 1 : 0) : (i === currentIndex ? 1 : 0),
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Dark overlay for legibility */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(35,45,90,0.65)', zIndex: 1 }}
      />

      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 pointer-events-none" style={{ zIndex: 2 }}/>
      <div
        className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(46,168,145,0.07) 0%, transparent 70%)', zIndex: 2 }}
      />

      <div className="container-wide w-full relative" style={{ zIndex: 10 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-0 items-center min-h-[80vh] py-16">

          {/* Left — Text */}
          <div className="flex flex-col gap-8 pr-0 lg:pr-16">
            <TypewriterHeadline />

            <p className="font-sans text-vbx-muted" style={{ fontSize: '1.125rem', lineHeight: '1.7', maxWidth: '540px' }}>
              Visionblox builds the systems that move patient data, process Medicaid
              claims, and integrate EMR infrastructure — engineered to the standards
              that federal and state agencies evaluate, audit, and award.
            </p>

            <p className="font-mono text-vbx-teal" style={{ fontSize: '0.8125rem', letterSpacing: '0.15em' }}>
              CAGE: 9Z4X2&nbsp;&nbsp;//&nbsp;&nbsp;UEI: H4X2Z7R9E3E3&nbsp;&nbsp;//&nbsp;&nbsp;MINORITY-OWNED&nbsp;&nbsp;//&nbsp;&nbsp;FEDERAL-READY
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/healthcare-it" className="btn-teal">
                VIEW HEALTHCARE PORTFOLIO
              </Link>
              <a
                href="mailto:khaalis.wooden@visionblox.com?subject=Healthcare%20IT%20Capability%20Briefing"
                className="btn-teal-outline"
              >
                REQUEST A BRIEFING
              </a>
            </div>
          </div>

          {/* Right — Data grid */}
          <div className="hidden lg:block relative" style={{ height: '480px' }}>
            <DataGridSVG />
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      {!reducedMotion && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2"
          style={{ zIndex: 10 }}
          aria-hidden="true"
        >
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: i === currentIndex ? '24px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: i === currentIndex ? '#2EA891' : 'rgba(46,168,145,0.35)',
                border: 'none',
                cursor: 'pointer',
                transition: 'width 300ms ease, background 300ms ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 data-line" style={{ zIndex: 10 }}/>
    </section>
  )
}
