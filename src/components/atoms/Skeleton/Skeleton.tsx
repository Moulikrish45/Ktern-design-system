import React from 'react'
import { cn } from '@/lib/utils'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Additional CSS classes */
    className?: string
}

/**
 * Skeleton - Loading placeholder component
 * 
 * Uses Tailwind's animate-pulse for shimmer effect.
 * 
 * @example
 * ```tsx
 * <Skeleton className="h-4 w-[250px]" />
 * <Skeleton className="h-12 w-12 rounded-full" />
 * ```
 */
export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn('animate-pulse rounded-md bg-muted', className)}
                {...props}
            />
        )
    }
)

Skeleton.displayName = 'Skeleton'

export default Skeleton
