/**
 * Web Vitals Module - Phase 6
 * 
 * Tracks Core Web Vitals and sends to Google Analytics
 * for performance monitoring.
 */

import { trackEvent } from './analytics'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface WebVitalMetric {
  name: 'CLS' | 'FCP' | 'FID' | 'INP' | 'LCP' | 'TTFB'
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  id: string
  navigationType: 'navigate' | 'reload' | 'back-forward' | 'prerender'
}

export interface PerformanceMetrics {
  lcp: number | null
  fid: number | null
  cls: number | null
  inp: number | null
  fcp: number | null
  ttfb: number | null
}

// ============================================================================
// THRESHOLDS (based on Google's recommendations)
// ============================================================================

const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },   // Largest Contentful Paint
  FID: { good: 100, poor: 300 },      // First Input Delay
  CLS: { good: 0.1, poor: 0.25 },     // Cumulative Layout Shift
  INP: { good: 200, poor: 500 },      // Interaction to Next Paint
  FCP: { good: 1800, poor: 3000 },    // First Contentful Paint
  TTFB: { good: 800, poor: 1800 },    // Time to First Byte
} as const

// ============================================================================
// RATING FUNCTIONS
// ============================================================================

/**
 * Get rating for a metric value
 */
function getRating(
  name: keyof typeof THRESHOLDS,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name]
  if (value <= threshold.good) return 'good'
  if (value <= threshold.poor) return 'needs-improvement'
  return 'poor'
}

// ============================================================================
// METRIC HANDLERS
// ============================================================================

/**
 * Handle and report a web vital metric
 */
function handleMetric(metric: WebVitalMetric): void {
  // Send to Google Analytics
  trackEvent({
    action: 'web_vitals',
    category: 'engagement',
    label: metric.name,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    nonInteraction: true,
    custom: {
      metric_name: metric.name,
      metric_value: metric.value,
      metric_rating: metric.rating,
      metric_delta: metric.delta,
      metric_id: metric.id,
      navigation_type: metric.navigationType,
    },
  })

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
    })
  }
}

// ============================================================================
// MEASUREMENT FUNCTIONS (using PerformanceObserver)
// ============================================================================

let lcpValue: number | null = null
let clsValue = 0
let fidValue: number | null = null
let inpValue: number | null = null

/**
 * Observe Largest Contentful Paint
 */
function observeLCP(): void {
  if (typeof PerformanceObserver === 'undefined') return

  try {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number }
      
      lcpValue = lastEntry.startTime
      
      handleMetric({
        name: 'LCP',
        value: lcpValue,
        rating: getRating('LCP', lcpValue),
        delta: lcpValue,
        id: `lcp-${Date.now()}`,
        navigationType: getNavigationType(),
      })
    })

    observer.observe({ type: 'largest-contentful-paint', buffered: true })
  } catch (e) {
    console.warn('[Web Vitals] LCP observation not supported')
  }
}

/**
 * Observe Cumulative Layout Shift
 */
function observeCLS(): void {
  if (typeof PerformanceObserver === 'undefined') return

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as (PerformanceEntry & { value: number; hadRecentInput: boolean })[]) {
        // Only count layout shifts without recent user input
        if (!entry.hadRecentInput) {
          clsValue += entry.value
        }
      }
    })

    observer.observe({ type: 'layout-shift', buffered: true })

    // Report final CLS on page unload
    if (typeof window !== 'undefined') {
      window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden' && clsValue > 0) {
          handleMetric({
            name: 'CLS',
            value: clsValue,
            rating: getRating('CLS', clsValue),
            delta: clsValue,
            id: `cls-${Date.now()}`,
            navigationType: getNavigationType(),
          })
        }
      })
    }
  } catch (e) {
    console.warn('[Web Vitals] CLS observation not supported')
  }
}

/**
 * Observe First Input Delay
 */
function observeFID(): void {
  if (typeof PerformanceObserver === 'undefined') return

  try {
    const observer = new PerformanceObserver((list) => {
      const firstEntry = list.getEntries()[0] as PerformanceEntry & { processingStart: number; startTime: number }
      fidValue = firstEntry.processingStart - firstEntry.startTime
      
      handleMetric({
        name: 'FID',
        value: fidValue,
        rating: getRating('FID', fidValue),
        delta: fidValue,
        id: `fid-${Date.now()}`,
        navigationType: getNavigationType(),
      })
    })

    observer.observe({ type: 'first-input', buffered: true })
  } catch (e) {
    console.warn('[Web Vitals] FID observation not supported')
  }
}

/**
 * Observe Interaction to Next Paint
 */
function observeINP(): void {
  if (typeof PerformanceObserver === 'undefined') return

  try {
    let maxINP = 0

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as (PerformanceEntry & { duration: number })[]) {
        if (entry.duration > maxINP) {
          maxINP = entry.duration
          inpValue = maxINP
        }
      }
    })

    observer.observe({ type: 'event', buffered: true })

    // Report INP on page unload
    if (typeof window !== 'undefined') {
      window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden' && inpValue !== null) {
          handleMetric({
            name: 'INP',
            value: inpValue,
            rating: getRating('INP', inpValue),
            delta: inpValue,
            id: `inp-${Date.now()}`,
            navigationType: getNavigationType(),
          })
        }
      })
    }
  } catch (e) {
    console.warn('[Web Vitals] INP observation not supported')
  }
}

/**
 * Observe First Contentful Paint
 */
function observeFCP(): void {
  if (typeof PerformanceObserver === 'undefined') return

  try {
    const observer = new PerformanceObserver((list) => {
      const fcpEntry = list.getEntries().find((entry) => entry.name === 'first-contentful-paint')
      
      if (fcpEntry) {
        const fcpValue = fcpEntry.startTime
        
        handleMetric({
          name: 'FCP',
          value: fcpValue,
          rating: getRating('FCP', fcpValue),
          delta: fcpValue,
          id: `fcp-${Date.now()}`,
          navigationType: getNavigationType(),
        })
      }
    })

    observer.observe({ type: 'paint', buffered: true })
  } catch (e) {
    console.warn('[Web Vitals] FCP observation not supported')
  }
}

/**
 * Measure Time to First Byte
 */
function measureTTFB(): void {
  if (typeof window === 'undefined') return

  try {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming

    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      
      handleMetric({
        name: 'TTFB',
        value: ttfb,
        rating: getRating('TTFB', ttfb),
        delta: ttfb,
        id: `ttfb-${Date.now()}`,
        navigationType: getNavigationType(),
      })
    }
  } catch (e) {
    console.warn('[Web Vitals] TTFB measurement not supported')
  }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get navigation type
 */
function getNavigationType(): WebVitalMetric['navigationType'] {
  if (typeof window === 'undefined') return 'navigate'
  
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
  
  if (navigation) {
    return navigation.type as WebVitalMetric['navigationType']
  }
  
  return 'navigate'
}

// ============================================================================
// PUBLIC API
// ============================================================================

/**
 * Initialize all web vitals tracking
 */
export function initWebVitals(): void {
  if (typeof window === 'undefined') return

  // Wait for page load
  if (document.readyState === 'complete') {
    startObserving()
  } else {
    window.addEventListener('load', startObserving)
  }
}

/**
 * Start all observers
 */
function startObserving(): void {
  observeLCP()
  observeCLS()
  observeFID()
  observeINP()
  observeFCP()
  measureTTFB()
}

/**
 * Get current metrics (for debugging/display)
 */
export function getCurrentMetrics(): PerformanceMetrics {
  return {
    lcp: lcpValue,
    fid: fidValue,
    cls: clsValue,
    inp: inpValue,
    fcp: null, // FCP is one-time
    ttfb: null, // TTFB is one-time
  }
}

/**
 * Check if performance is in "good" range
 */
export function isPerformanceGood(): boolean {
  const metrics = getCurrentMetrics()
  
  const checks = [
    metrics.lcp !== null && getRating('LCP', metrics.lcp) === 'good',
    metrics.cls !== null && getRating('CLS', metrics.cls) === 'good',
    metrics.fid !== null && getRating('FID', metrics.fid) === 'good',
  ]
  
  return checks.filter(Boolean).length >= 2
}
