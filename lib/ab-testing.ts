/**
 * A/B Testing Module - Phase 6
 * 
 * Simple, cookie-based A/B testing infrastructure for
 * running experiments and tracking variants.
 */

import { trackEvent, setUserProperties } from './analytics'

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface Experiment {
  id: string
  name: string
  variants: Variant[]
  weights?: number[] // Optional custom weights (must sum to 1)
  targetPage?: string // Optional page targeting
  startDate?: Date
  endDate?: Date
  isActive: boolean
}

export interface Variant {
  id: string
  name: string
  description?: string
}

export interface ExperimentResult {
  experimentId: string
  variantId: string
  variantName: string
}

// ============================================================================
// EXPERIMENT REGISTRY
// ============================================================================

/**
 * Define all active experiments here
 */
export const EXPERIMENTS: Record<string, Experiment> = {
  // Example: Hero CTA Button Test
  'hero-cta-variant': {
    id: 'hero-cta-variant',
    name: 'Hero CTA Button Test',
    variants: [
      { id: 'control', name: 'Request Demo' },
      { id: 'variant-a', name: 'Schedule a Call' },
      { id: 'variant-b', name: 'Start Your Trial' },
    ],
    isActive: true,
  },

  // Example: Product Card Layout Test
  'product-card-layout': {
    id: 'product-card-layout',
    name: 'Product Card Layout Test',
    variants: [
      { id: 'control', name: 'Grid Layout' },
      { id: 'variant-a', name: 'Carousel Layout' },
    ],
    isActive: false, // Disabled for now
  },

  // Example: Navigation Style Test
  'nav-style': {
    id: 'nav-style',
    name: 'Navigation Style Test',
    variants: [
      { id: 'control', name: 'Standard Nav' },
      { id: 'variant-a', name: 'Sticky Compact Nav' },
    ],
    isActive: false,
  },
}

// ============================================================================
// COOKIE UTILITIES
// ============================================================================

const COOKIE_PREFIX = 'vblx_exp_'
const COOKIE_DURATION_DAYS = 30

/**
 * Set a cookie
 */
function setCookie(name: string, value: string, days: number): void {
  if (typeof document === 'undefined') return
  
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
}

/**
 * Get a cookie value
 */
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? match[2] : null
}

/**
 * Delete a cookie
 */
function deleteCookie(name: string): void {
  if (typeof document === 'undefined') return
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
}

// ============================================================================
// VARIANT ASSIGNMENT
// ============================================================================

/**
 * Assign a user to a variant using weighted random selection
 */
function assignVariant(experiment: Experiment): Variant {
  const { variants, weights } = experiment

  // Use custom weights or equal distribution
  const assignmentWeights = weights || variants.map(() => 1 / variants.length)

  const random = Math.random()
  let cumulative = 0

  for (let i = 0; i < variants.length; i++) {
    cumulative += assignmentWeights[i]
    if (random < cumulative) {
      return variants[i]
    }
  }

  // Fallback to last variant
  return variants[variants.length - 1]
}

/**
 * Check if experiment is currently active
 */
function isExperimentActive(experiment: Experiment): boolean {
  if (!experiment.isActive) return false

  const now = new Date()

  if (experiment.startDate && now < experiment.startDate) return false
  if (experiment.endDate && now > experiment.endDate) return false

  return true
}

// ============================================================================
// PUBLIC API
// ============================================================================

/**
 * Get the variant for an experiment
 * Assigns and persists if not already assigned
 */
export function getVariant(experimentId: string): ExperimentResult | null {
  const experiment = EXPERIMENTS[experimentId]

  if (!experiment || !isExperimentActive(experiment)) {
    return null
  }

  const cookieName = `${COOKIE_PREFIX}${experimentId}`
  let variantId = getCookie(cookieName)

  // Assign new variant if not already assigned
  if (!variantId) {
    const assignedVariant = assignVariant(experiment)
    variantId = assignedVariant.id
    setCookie(cookieName, variantId, COOKIE_DURATION_DAYS)

    // Track experiment assignment
    trackExperimentAssignment(experimentId, variantId)
  }

  const variant = experiment.variants.find((v) => v.id === variantId)

  if (!variant) {
    // Invalid variant, reassign
    const newVariant = assignVariant(experiment)
    setCookie(cookieName, newVariant.id, COOKIE_DURATION_DAYS)
    trackExperimentAssignment(experimentId, newVariant.id)

    return {
      experimentId,
      variantId: newVariant.id,
      variantName: newVariant.name,
    }
  }

  return {
    experimentId,
    variantId: variant.id,
    variantName: variant.name,
  }
}

/**
 * Track when a user is assigned to an experiment
 */
function trackExperimentAssignment(experimentId: string, variantId: string): void {
  trackEvent({
    action: 'experiment_assignment',
    category: 'engagement',
    label: experimentId,
    custom: {
      experiment_id: experimentId,
      variant_id: variantId,
    },
    nonInteraction: true,
  })

  // Set as user property for segmentation
  setUserProperties({
    [`exp_${experimentId}`]: variantId,
  } as Record<string, string>)
}

/**
 * Track a conversion for an experiment
 */
export function trackExperimentConversion(
  experimentId: string,
  conversionType: string,
  value?: number
): void {
  const result = getVariant(experimentId)

  if (!result) return

  trackEvent({
    action: 'experiment_conversion',
    category: 'conversion',
    label: `${experimentId}_${conversionType}`,
    value,
    custom: {
      experiment_id: experimentId,
      variant_id: result.variantId,
      conversion_type: conversionType,
    },
  })
}

/**
 * Force a specific variant (for testing/preview)
 */
export function forceVariant(experimentId: string, variantId: string): void {
  const cookieName = `${COOKIE_PREFIX}${experimentId}`
  setCookie(cookieName, variantId, COOKIE_DURATION_DAYS)
}

/**
 * Clear experiment assignment (for testing)
 */
export function clearExperiment(experimentId: string): void {
  const cookieName = `${COOKIE_PREFIX}${experimentId}`
  deleteCookie(cookieName)
}

/**
 * Get all current experiment assignments
 */
export function getAllExperimentAssignments(): Record<string, ExperimentResult> {
  const assignments: Record<string, ExperimentResult> = {}

  Object.keys(EXPERIMENTS).forEach((experimentId) => {
    const result = getVariant(experimentId)
    if (result) {
      assignments[experimentId] = result
    }
  })

  return assignments
}

// ============================================================================
// REACT HOOKS
// ============================================================================

/**
 * Check if we're in a variant (for conditional rendering)
 */
export function isInVariant(experimentId: string, variantId: string): boolean {
  const result = getVariant(experimentId)
  return result?.variantId === variantId
}

/**
 * Get variant-specific content
 */
export function getVariantContent<T>(
  experimentId: string,
  contentMap: Record<string, T>,
  defaultContent: T
): T {
  const result = getVariant(experimentId)

  if (!result || !contentMap[result.variantId]) {
    return defaultContent
  }

  return contentMap[result.variantId]
}

// ============================================================================
// DEBUG UTILITIES
// ============================================================================

/**
 * Get experiment debug info (for development)
 */
export function getExperimentDebugInfo(): Record<string, unknown> {
  if (process.env.NODE_ENV !== 'development') {
    return {}
  }

  return {
    experiments: EXPERIMENTS,
    assignments: getAllExperimentAssignments(),
    cookies: Object.keys(EXPERIMENTS).reduce((acc, id) => {
      acc[id] = getCookie(`${COOKIE_PREFIX}${id}`)
      return acc
    }, {} as Record<string, string | null>),
  }
}

/**
 * Log experiment info to console
 */
export function logExperiments(): void {
  if (process.env.NODE_ENV !== 'development') return

  console.group('[A/B Testing] Active Experiments')
  
  Object.entries(EXPERIMENTS).forEach(([id, exp]) => {
    const assignment = getVariant(id)
    console.log(`${exp.name}:`, {
      isActive: exp.isActive,
      variant: assignment?.variantName || 'Not assigned',
    })
  })
  
  console.groupEnd()
}
