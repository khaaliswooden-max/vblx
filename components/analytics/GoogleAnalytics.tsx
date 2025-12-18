'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'
import {
  initializeGA4,
  trackPageView,
  startTimeTracking,
  stopTimeTracking,
  trackScrollDepth,
  resetScrollTracking,
  ANALYTICS_CONFIG,
} from '@/lib/analytics'
import { initWebVitals } from '@/lib/web-vitals'
import { logExperiments } from '@/lib/ab-testing'

/**
 * Google Analytics 4 Script Component
 * Loads the GA4 script and initializes tracking
 */
function GoogleAnalyticsScript() {
  const measurementId = ANALYTICS_CONFIG.measurementId

  if (!measurementId) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        onLoad={() => {
          initializeGA4()
          initWebVitals()
          trackScrollDepth()
          startTimeTracking()

          // Log experiments in development
          if (process.env.NODE_ENV === 'development') {
            logExperiments()
          }
        }}
      />
    </>
  )
}

/**
 * Page View Tracker Component
 * Tracks page views on route changes (for SPA navigation)
 */
function PageViewTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      // Reset scroll tracking for new page
      resetScrollTracking()

      // Track page view
      const url = searchParams?.toString()
        ? `${pathname}?${searchParams.toString()}`
        : pathname

      trackPageView({
        path: url,
        title: document.title,
        referrer: document.referrer,
      })

      // Restart time tracking for new page
      stopTimeTracking()
      startTimeTracking()
    }
  }, [pathname, searchParams])

  // Track time on page before unload
  useEffect(() => {
    const handleUnload = () => {
      stopTimeTracking()
    }

    window.addEventListener('beforeunload', handleUnload)
    return () => {
      window.removeEventListener('beforeunload', handleUnload)
    }
  }, [])

  return null
}

/**
 * Main Google Analytics Component
 * Combines script loading and page view tracking
 */
export default function GoogleAnalytics() {
  return (
    <>
      <GoogleAnalyticsScript />
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  )
}
