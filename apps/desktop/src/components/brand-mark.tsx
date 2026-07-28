import { cn } from '@/lib/utils'

// Brand wordmark: the "lumina" text logo, identical in light/dark (inherits
// currentColor). Scales with its container via SVG; size via className
// (default size-14).
export function BrandMark({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('inline-flex size-14 shrink-0 items-center justify-center overflow-hidden', className)}
      {...props}
    >
      <svg aria-label="lumina" className="size-full" role="img" viewBox="0 0 120 40">
        <text
          dominantBaseline="central"
          fill="currentColor"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="30"
          fontWeight="700"
          textAnchor="middle"
          x="60"
          y="21"
        >
          lumina
        </text>
      </svg>
    </span>
  )
}
