/**
 * Analytics Module - Phase 6
 * 
 * Comprehensive analytics utilities for Google Analytics 4,
 * custom event tracking, and conversion tracking.
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

export type EventCategory =
  | 'engagement'
  | 'navigation'
  | 'conversion'
  | 'platform'
  | 'form'
  | 'cta'
  | 'scroll'
  | 'video'
  | 'download'
  | 'error'

export interface AnalyticsEvent {
  action: string
  category: EventCategory
  label?: string
  value?: number
  nonInteraction?: boolean
  custom?: Record<string, string | number | boolean>
}

export interface PageViewEvent {
  path: string
  title?: string
  referrer?: string
}

export interface ConversionEvent {
  type: 'demo_request' | 'contact_form' | 'newsletter' | 'download' | 'platform_inquiry'
  platform?: string
  value?: number
  currency?: string
}

export interface UserProperties {
  userType?: 'commercial' | 'federal' | 'unknown'
  industry?: string
  companySize?: string
  interestedPlatform?: string
}

// ============================================================================
// CONFIGURATION
// ============================================================================

export const ANALYTICS_CONFIG = {
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
  debugMode: process.env.NODE_ENV === 'development',
  enabled: typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
} as const

// ============================================================================
// CORE ANALYTICS FUNCTIONS
// ============================================================================

/**
 * Initialize Google Analytics 4
 */
export function initializeGA4(): void {
  if (typeof window === 'undefined' || !ANALYTICS_CONFIG.measurementId) {
    return
  }

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  
  // Define gtag function
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args)
  }

  // Initialize GA4
  window.gtag('js', new Date())
  window.gtag('config', ANALYTICS_CONFIG.measurementId, {
    page_path: window.location.pathname,
    debug_mode: ANALYTICS_CONFIG.debugMode,
    send_page_view: false, // We'll send manually for SPA
  })

  if (ANALYTICS_CONFIG.debugMode) {
    console.log('[Analytics] GA4 initialized with ID:', ANALYTICS_CONFIG.measurementId)
  }
}

/**
 * Track page view
 */
export function trackPageView(event: PageViewEvent): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return
  }

  window.gtag('event', 'page_view', {
    page_path: event.path,
    page_title: event.title || document.title,
    page_referrer: event.referrer || document.referrer,
  })

  if (ANALYTICS_CONFIG.debugMode) {
    console.log('[Analytics] Page view:', event.path)
  }
}

/**
 * Track custom event
 */
export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === 'undefined' || !window.gtag) {
    if (ANALYTICS_CONFIG.debugMode) {
      console.log('[Analytics Debug] Event (gtag not ready):', event)
    }
    return
  }

  const eventParams: Record<string, unknown> = {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
    non_interaction: event.nonInteraction,
    ...event.custom,
  }

  // Remove undefined values
  Object.keys(eventParams).forEach((key) => {
    if (eventParams[key] === undefined) {
      delete eventParams[key]
    }
  })

  window.gtag('event', event.action, eventParams)

  if (ANALYTICS_CONFIG.debugMode) {
    console.log('[Analytics] Event:', event.action, eventParams)
  }
}

/**
 * Track conversion event
 */
export function trackConversion(conversion: ConversionEvent): void {
  // Track as standard GA4 event
  trackEvent({
    action: `conversion_${conversion.type}`,
    category: 'conversion',
    label: conversion.platform,
    value: conversion.value,
    custom: {
      conversion_type: conversion.type,
      currency: conversion.currency || 'USD',
    },
  })

  // Also send as GA4 conversion
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: ANALYTICS_CONFIG.measurementId,
      event_name: conversion.type,
      value: conversion.value,
      currency: conversion.currency || 'USD',
    })
  }

  if (ANALYTICS_CONFIG.debugMode) {
    console.log('[Analytics] Conversion:', conversion)
  }
}

/**
 * Set user properties
 */
export function setUserProperties(properties: UserProperties): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return
  }

  window.gtag('set', 'user_properties', properties)

  if (ANALYTICS_CONFIG.debugMode) {
    console.log('[Analytics] User properties set:', properties)
  }
}

// ============================================================================
// ENGAGEMENT TRACKING
// ============================================================================

/**
 * Track CTA click
 */
export function trackCTAClick(
  ctaName: string,
  location: string,
  destination?: string
): void {
  trackEvent({
    action: 'cta_click',
    category: 'cta',
    label: ctaName,
    custom: {
      cta_location: location,
      cta_destination: destination || '',
    },
  })
}

/**
 * Track platform card click
 */
export function trackPlatformClick(platform: string, location: string): void {
  trackEvent({
    action: 'platform_click',
    category: 'platform',
    label: platform,
    custom: {
      click_location: location,
    },
  })
}

/**
 * Track section view (for scroll tracking)
 */
export function trackSectionView(sectionName: string, percentage?: number): void {
  trackEvent({
    action: 'section_view',
    category: 'scroll',
    label: sectionName,
    value: percentage,
    nonInteraction: true,
  })
}

/**
 * Track navigation click
 */
export function trackNavClick(
  linkName: string,
  linkType: 'main' | 'dropdown' | 'footer' | 'mobile'
): void {
  trackEvent({
    action: 'nav_click',
    category: 'navigation',
    label: linkName,
    custom: {
      nav_type: linkType,
    },
  })
}

/**
 * Track form interaction
 */
export function trackFormInteraction(
  formName: string,
  action: 'start' | 'field_focus' | 'field_complete' | 'submit' | 'error',
  fieldName?: string
): void {
  trackEvent({
    action: `form_${action}`,
    category: 'form',
    label: formName,
    custom: {
      field_name: fieldName || '',
    },
  })
}

/**
 * Track external link click
 */
export function trackExternalLink(url: string, linkText: string): void {
  trackEvent({
    action: 'external_link_click',
    category: 'engagement',
    label: linkText,
    custom: {
      link_url: url,
    },
  })
}

/**
 * Track download
 */
export function trackDownload(fileName: string, fileType: string): void {
  trackEvent({
    action: 'file_download',
    category: 'download',
    label: fileName,
    custom: {
      file_type: fileType,
    },
  })
}

/**
 * Track error
 */
export function trackError(
  errorType: string,
  errorMessage: string,
  errorLocation?: string
): void {
  trackEvent({
    action: 'error',
    category: 'error',
    label: errorType,
    custom: {
      error_message: errorMessage,
      error_location: errorLocation || '',
    },
    nonInteraction: true,
  })
}

// ============================================================================
// TIME ON PAGE & ENGAGEMENT
// ============================================================================

let pageLoadTime: number | null = null
let engagementInterval: NodeJS.Timeout | null = null

/**
 * Start tracking time on page
 */
export function startTimeTracking(): void {
  pageLoadTime = Date.now()

  // Track engagement at intervals (30s, 60s, 120s, 180s)
  const engagementMilestones = [30, 60, 120, 180]
  let milestoneIndex = 0

  engagementInterval = setInterval(() => {
    if (milestoneIndex >= engagementMilestones.length) {
      if (engagementInterval) clearInterval(engagementInterval)
      return
    }

    const currentMilestone = engagementMilestones[milestoneIndex]
    const timeSpent = Math.floor((Date.now() - (pageLoadTime || Date.now())) / 1000)

    if (timeSpent >= currentMilestone) {
      trackEvent({
        action: `engaged_${currentMilestone}s`,
        category: 'engagement',
        value: currentMilestone,
        nonInteraction: true,
      })
      milestoneIndex++
    }
  }, 1000)
}

/**
 * Stop tracking and send final time
 */
export function stopTimeTracking(): void {
  if (engagementInterval) {
    clearInterval(engagementInterval)
  }

  if (pageLoadTime) {
    const timeSpent = Math.floor((Date.now() - pageLoadTime) / 1000)
    trackEvent({
      action: 'time_on_page',
      category: 'engagement',
      value: timeSpent,
      nonInteraction: true,
    })
  }
}

// ============================================================================
// SCROLL DEPTH TRACKING
// ============================================================================

let scrollDepthTracked: Set<number> = new Set()

/**
 * Track scroll depth
 */
export function trackScrollDepth(): void {
  if (typeof window === 'undefined') return

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100)

    // Track at 25%, 50%, 75%, 100%
    const milestones = [25, 50, 75, 100]

    milestones.forEach((milestone) => {
      if (scrollPercent >= milestone && !scrollDepthTracked.has(milestone)) {
        scrollDepthTracked.add(milestone)
        trackEvent({
          action: `scroll_depth_${milestone}`,
          category: 'scroll',
          value: milestone,
          nonInteraction: true,
        })
      }
    })
  }

  // Throttle scroll events
  let ticking = false
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll()
        ticking = false
      })
      ticking = true
    }
  })
}

/**
 * Reset scroll tracking (for SPA navigation)
 */
export function resetScrollTracking(): void {
  scrollDepthTracked = new Set()
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get GA4 client ID (for cross-domain tracking)
 */
export async function getClientId(): Promise<string | null> {
  if (typeof window === 'undefined' || !window.gtag) {
    return null
  }

  return new Promise((resolve) => {
    window.gtag('get', ANALYTICS_CONFIG.measurementId, 'client_id', (clientId: string) => {
      resolve(clientId)
    })

    // Timeout fallback
    setTimeout(() => resolve(null), 2000)
  })
}

/**
 * Opt-out of tracking
 */
export function optOut(): void {
  if (typeof window !== 'undefined') {
    // Set GA opt-out using the standard GA opt-out mechanism
    const optOutKey = `ga-disable-${ANALYTICS_CONFIG.measurementId}`
    ;(window as unknown as Record<string, boolean>)[optOutKey] = true
    
    // Remove cookies
    document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    document.cookie = '_gid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'

    if (ANALYTICS_CONFIG.debugMode) {
      console.log('[Analytics] User opted out of tracking')
    }
  }
}

/**
 * Check if user has opted out
 */
export function hasOptedOut(): boolean {
  if (typeof window === 'undefined') return false
  const optOutKey = `ga-disable-${ANALYTICS_CONFIG.measurementId}`
  return (window as unknown as Record<string, boolean>)[optOutKey] === true
}
