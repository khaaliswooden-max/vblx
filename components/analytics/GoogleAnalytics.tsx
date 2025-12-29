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

// Google Ads Tag ID for conversion tracking
const GOOGLE_ADS_ID = 'AW-17787621183'

/**
 * Google Ads Script Component
 * Loads the Google Ads tag for conversion tracking
 * Uses beforeInteractive to ensure the tag loads in <head> for Google verification
 */
function GoogleAdsScript() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="beforeInteractive"
      />
      <Script
        id="google-ads-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `,
        }}
      />
    </>
  )
}

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
      <GoogleAdsScript />
      <GoogleAnalyticsScript />
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  )
}
