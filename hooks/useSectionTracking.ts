'use client'

import { useEffect, useRef } from 'react'
import { trackSectionView } from '@/lib/analytics'

interface UseSectionTrackingOptions {
  threshold?: number
  triggerOnce?: boolean
}

/**
 * useSectionTracking Hook
 * 
 * Automatically tracks when a section enters the viewport.
 * Uses IntersectionObserver for efficient detection.
 */
export function useSectionTracking(
  sectionName: string,
  options: UseSectionTrackingOptions = {}
) {
  const { threshold = 0.5, triggerOnce = true } = options
  const ref = useRef<HTMLElement | null>(null)
  const hasTriggered = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (triggerOnce && hasTriggered.current) return

            const visiblePercentage = Math.round(entry.intersectionRatio * 100)
            trackSectionView(sectionName, visiblePercentage)
            hasTriggered.current = true

            if (triggerOnce) {
              observer.unobserve(element)
            }
          }
        })
      },
      {
        threshold: [0.25, 0.5, 0.75, 1.0],
        rootMargin: '0px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [sectionName, threshold, triggerOnce])

  return ref
}

export default useSectionTracking
