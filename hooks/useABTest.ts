'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  getVariant,
  trackExperimentConversion,
  isInVariant,
  getVariantContent,
  ExperimentResult,
} from '@/lib/ab-testing'

/**
 * useABTest Hook
 * 
 * Get the current variant for an experiment
 * and track conversions.
 */
export function useABTest(experimentId: string) {
  const [result, setResult] = useState<ExperimentResult | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get variant on client side only
    const variant = getVariant(experimentId)
    setResult(variant)
    setIsLoading(false)
  }, [experimentId])

  const trackConversion = useCallback(
    (conversionType: string, value?: number) => {
      trackExperimentConversion(experimentId, conversionType, value)
    },
    [experimentId]
  )

  return {
    variant: result,
    variantId: result?.variantId || null,
    variantName: result?.variantName || null,
    isLoading,
    trackConversion,
  }
}

/**
 * useVariantCheck Hook
 * 
 * Check if the user is in a specific variant
 */
export function useVariantCheck(experimentId: string, variantId: string) {
  const [isVariant, setIsVariant] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const result = isInVariant(experimentId, variantId)
    setIsVariant(result)
    setIsLoading(false)
  }, [experimentId, variantId])

  return { isVariant, isLoading }
}

/**
 * useVariantContent Hook
 * 
 * Get variant-specific content
 */
export function useVariantContent<T>(
  experimentId: string,
  contentMap: Record<string, T>,
  defaultContent: T
) {
  const [content, setContent] = useState<T>(defaultContent)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const result = getVariantContent(experimentId, contentMap, defaultContent)
    setContent(result)
    setIsLoading(false)
  }, [experimentId, contentMap, defaultContent])

  return { content, isLoading }
}

export default useABTest
