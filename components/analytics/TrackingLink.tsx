'use client'

import Link, { LinkProps } from 'next/link'
import { forwardRef, MouseEvent, ReactNode } from 'react'
import { trackNavClick, trackExternalLink, trackCTAClick } from '@/lib/analytics'

interface TrackingLinkProps extends Omit<LinkProps, 'href'> {
  href: string
  children: ReactNode
  className?: string
  trackingType?: 'nav' | 'cta' | 'external'
  navType?: 'main' | 'dropdown' | 'footer' | 'mobile'
  ctaName?: string
  ctaLocation?: string
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

/**
 * TrackingLink Component
 * 
 * A wrapper around Next.js Link that automatically tracks clicks
 * based on the link type.
 */
const TrackingLink = forwardRef<HTMLAnchorElement, TrackingLinkProps>(
  (
    {
      href,
      children,
      className,
      trackingType = 'nav',
      navType = 'main',
      ctaName,
      ctaLocation,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      // Get link text for tracking
      const linkText = typeof children === 'string' 
        ? children 
        : (e.currentTarget.textContent || 'Unknown')

      // Track based on type
      switch (trackingType) {
        case 'nav':
          trackNavClick(linkText, navType)
          break
        case 'cta':
          trackCTAClick(ctaName || linkText, ctaLocation || 'unknown', href)
          break
        case 'external':
          trackExternalLink(href, linkText)
          break
      }

      // Call original onClick if provided
      onClick?.(e)
    }

    // Check if external link
    const isExternal = href.startsWith('http') || href.startsWith('//')

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          className={className}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      )
    }

    return (
      <Link
        ref={ref}
        href={href}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Link>
    )
  }
)

TrackingLink.displayName = 'TrackingLink'

export default TrackingLink
