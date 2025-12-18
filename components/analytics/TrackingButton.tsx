'use client'

import { forwardRef, MouseEvent, ButtonHTMLAttributes, ReactNode } from 'react'
import { trackCTAClick, trackEvent, EventCategory } from '@/lib/analytics'

interface TrackingButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  trackingAction?: string
  trackingCategory?: EventCategory
  trackingLabel?: string
  ctaName?: string
  ctaLocation?: string
}

/**
 * TrackingButton Component
 * 
 * A button wrapper that automatically tracks clicks for analytics.
 */
const TrackingButton = forwardRef<HTMLButtonElement, TrackingButtonProps>(
  (
    {
      children,
      trackingAction,
      trackingCategory = 'cta',
      trackingLabel,
      ctaName,
      ctaLocation,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      // Get button text for tracking
      const buttonText = typeof children === 'string'
        ? children
        : (e.currentTarget.textContent || 'Unknown')

      if (trackingAction) {
        // Custom event tracking
        trackEvent({
          action: trackingAction,
          category: trackingCategory,
          label: trackingLabel || buttonText,
        })
      } else {
        // Default CTA tracking
        trackCTAClick(
          ctaName || buttonText,
          ctaLocation || 'unknown'
        )
      }

      // Call original onClick if provided
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    )
  }
)

TrackingButton.displayName = 'TrackingButton'

export default TrackingButton
