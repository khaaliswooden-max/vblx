'use client'

import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          // Base styles. Radius is capped at 4px by the theme.
          'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-sm',
          'disabled:opacity-50 disabled:cursor-not-allowed',

          // Variant styles. Measured against the light ground:
          //   offwhite on navy   12.04:1   navy on offwhite  12.04:1
          //   navy on teal-tint  11.75:1
          // The previous primary was offwhite on teal, which measures 2.69:1
          // and fails AA outright.
          variant === 'primary' && [
            'bg-vbx-navy text-vbx-offwhite border border-vbx-navy',
            'hover:bg-vbx-navy-light hover:border-vbx-navy-light',
          ],
          variant === 'secondary' && [
            'bg-vbx-teal-tint text-vbx-navy border border-vbx-rule',
            'hover:border-vbx-navy',
          ],
          variant === 'ghost' && [
            'text-vbx-navy-light',
            'hover:text-vbx-navy hover:bg-vbx-teal-tint',
          ],
          variant === 'outline' && [
            'border border-vbx-navy text-vbx-navy bg-transparent',
            'hover:bg-vbx-navy hover:text-vbx-offwhite',
          ],
          
          // Size styles
          size === 'sm' && 'text-sm px-3 py-1.5 gap-1.5',
          size === 'md' && 'text-sm px-4 py-2 gap-2',
          size === 'lg' && 'text-base px-6 py-3 gap-2',
          size === 'xl' && 'text-lg px-8 py-4 gap-3',
          
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Loading...
          </>
        ) : (
          children
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }

