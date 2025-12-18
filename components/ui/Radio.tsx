'use client'

import { forwardRef, type InputHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface RadioOption {
  value: string
  label: string
  description?: string
  disabled?: boolean
}

export interface RadioGroupProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string
  options: RadioOption[]
  orientation?: 'horizontal' | 'vertical'
}

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  ({ className, label, error, options, orientation = 'vertical', name, value, onChange, ...props }, ref) => {
    return (
      <div className={cn('w-full', className)}>
        {label && (
          <label className="block text-sm font-medium text-text-secondary mb-3">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div
          className={cn(
            'flex gap-4',
            orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap'
          )}
        >
          {options.map((option) => (
            <label
              key={option.value}
              className={cn(
                'flex items-start gap-3 cursor-pointer group',
                option.disabled && 'cursor-not-allowed opacity-50'
              )}
            >
              <div className="relative flex-shrink-0 mt-0.5">
                <input
                  ref={ref}
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                  disabled={option.disabled}
                  className="peer sr-only"
                  {...props}
                />
                <div
                  className={cn(
                    'w-5 h-5 rounded-full border border-white/20 bg-background-secondary',
                    'transition-all duration-200',
                    'peer-checked:border-accent-primary',
                    'peer-focus-visible:ring-2 peer-focus-visible:ring-accent-primary/50',
                    'group-hover:border-white/30',
                    error && 'border-red-500'
                  )}
                />
                <div
                  className={cn(
                    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
                    'w-2.5 h-2.5 rounded-full bg-accent-primary',
                    'opacity-0 scale-0 transition-all duration-200',
                    'peer-checked:opacity-100 peer-checked:scale-100'
                  )}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-text-primary">{option.label}</span>
                {option.description && (
                  <span className="text-sm text-text-tertiary mt-0.5">{option.description}</span>
                )}
              </div>
            </label>
          ))}
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-red-500">{error}</p>
        )}
      </div>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'

export { RadioGroup }
