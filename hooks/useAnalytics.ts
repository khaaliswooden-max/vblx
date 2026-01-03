'use client'

import { useCallback } from 'react'
import {
  trackEvent,
  trackConversion,
  trackCTAClick,
  trackProductClick,
  trackFormInteraction,
  trackSectionView,
  trackDownload,
  trackError,
  EventCategory,
  ConversionEvent,
} from '@/lib/analytics'

/**
 * useAnalytics Hook
 * 
 * Provides memoized analytics tracking functions
 * for use in React components.
 */
export function useAnalytics() {
  const trackEventCallback = useCallback(
    (
      action: string,
      category: EventCategory,
      label?: string,
      value?: number
    ) => {
      trackEvent({ action, category, label, value })
    },
    []
  )

  const trackConversionCallback = useCallback(
    (conversion: ConversionEvent) => {
      trackConversion(conversion)
    },
    []
  )

  const trackCTAClickCallback = useCallback(
    (ctaName: string, location: string, destination?: string) => {
      trackCTAClick(ctaName, location, destination)
    },
    []
  )

  const trackProductClickCallback = useCallback(
    (product: string, location: string) => {
      trackProductClick(product, location)
    },
    []
  )

  const trackFormInteractionCallback = useCallback(
    (
      formName: string,
      action: 'start' | 'field_focus' | 'field_complete' | 'submit' | 'error',
      fieldName?: string
    ) => {
      trackFormInteraction(formName, action, fieldName)
    },
    []
  )

  const trackSectionViewCallback = useCallback(
    (sectionName: string, percentage?: number) => {
      trackSectionView(sectionName, percentage)
    },
    []
  )

  const trackDownloadCallback = useCallback(
    (fileName: string, fileType: string) => {
      trackDownload(fileName, fileType)
    },
    []
  )

  const trackErrorCallback = useCallback(
    (errorType: string, errorMessage: string, errorLocation?: string) => {
      trackError(errorType, errorMessage, errorLocation)
    },
    []
  )

  return {
    trackEvent: trackEventCallback,
    trackConversion: trackConversionCallback,
    trackCTAClick: trackCTAClickCallback,
    trackProductClick: trackProductClickCallback,
    trackFormInteraction: trackFormInteractionCallback,
    trackSectionView: trackSectionViewCallback,
    trackDownload: trackDownloadCallback,
    trackError: trackErrorCallback,
  }
}

export default useAnalytics
