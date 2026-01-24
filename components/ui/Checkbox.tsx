'use client'

import { forwardRef, type InputHTMLAttributes } from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string
  description?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, description, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${label?.toLowerCase().replace(/\s+/g, '-')}`
    
    return (
      <div className="w-full">
        <label
          htmlFor={checkboxId}
          className={cn(
            'flex items-start gap-3 cursor-pointer group',
            props.disabled && 'cursor-not-allowed opacity-50'
          )}
        >
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              ref={ref}
              id={checkboxId}
              type="checkbox"
              className="peer sr-only"
              {...props}
            />
            <div
              className={cn(
                'w-5 h-5 rounded border border-[#344669]/20 bg-background-secondary',
                'transition-all duration-200',
                'peer-checked:bg-accent-primary peer-checked:border-accent-primary',
                'peer-focus-visible:ring-2 peer-focus-visible:ring-accent-primary/50',
                'group-hover:border-[#344669]/30',
                error && 'border-red-500'
              )}
            />
            <Check
              className={cn(
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                'w-3.5 h-3.5 text-background-primary',
                'opacity-0 scale-50 transition-all duration-200',
                'peer-checked:opacity-100 peer-checked:scale-100'
              )}
            />
          </div>
          <div className="flex flex-col">
            {label && (
              <span className="text-sm text-text-primary">
                {label}
                {props.required && <span className="text-red-500 ml-1">*</span>}
              </span>
            )}
            {description && (
              <span className="text-sm text-text-tertiary mt-0.5">{description}</span>
            )}
          </div>
        </label>
        {error && (
          <p className="mt-1.5 text-sm text-red-500 pl-8">{error}</p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }
