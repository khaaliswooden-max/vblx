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
          // Base styles
          'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-primary',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          
          // Variant styles
          variant === 'primary' && [
            'bg-accent-primary text-background-primary',
            'hover:bg-accent-hover hover:shadow-glow-md',
            'active:scale-[0.98]',
          ],
          variant === 'secondary' && [
            'bg-background-tertiary text-text-primary border border-white/10',
            'hover:bg-background-elevated hover:border-white/20',
            'active:scale-[0.98]',
          ],
          variant === 'ghost' && [
            'text-text-secondary',
            'hover:text-text-primary hover:bg-white/5',
          ],
          variant === 'outline' && [
            'border border-accent-primary text-accent-primary bg-transparent',
            'hover:bg-accent-primary/10 hover:shadow-glow-sm',
            'active:scale-[0.98]',
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

