import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'platform'
  platform?: 'austra' | 'aureon' | 'civium'
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', platform, hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles
          'rounded-xl transition-all duration-300',
          
          // Variant styles
          variant === 'default' && [
            'bg-background-secondary border border-white/5',
            hover && 'hover:border-white/10',
          ],
          variant === 'elevated' && [
            'bg-background-tertiary shadow-card',
            hover && 'hover:shadow-card-hover hover:-translate-y-1',
          ],
          variant === 'outlined' && [
            'bg-transparent border border-white/10',
            hover && 'hover:border-white/20 hover:bg-white/5',
          ],
          variant === 'platform' && [
            'bg-background-secondary border border-white/5 overflow-hidden',
            platform === 'austra' && hover && 'hover:border-austra/30 hover:shadow-[0_0_30px_rgba(49,130,206,0.15)]',
            platform === 'aureon' && hover && 'hover:border-aureon/30 hover:shadow-[0_0_30px_rgba(107,70,193,0.15)]',
            platform === 'civium' && hover && 'hover:border-civium/30 hover:shadow-[0_0_30px_rgba(56,178,172,0.15)]',
          ],
          
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 pb-0', className)}
      {...props}
    />
  )
)

CardHeader.displayName = 'CardHeader'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6', className)}
      {...props}
    />
  )
)

CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('p-6 pt-0', className)}
      {...props}
    />
  )
)

CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardContent, CardFooter }

