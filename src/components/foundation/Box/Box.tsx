import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

/**
 * Polymorphic Box component props
 * Supports the `as` prop for rendering as different HTML elements
 */
export type BoxProps<T extends React.ElementType = 'div'> = {
    /** Element type to render as (div, section, article, etc.) */
    as?: T
    /** Child elements */
    children?: React.ReactNode
    /** Additional CSS classes */
    className?: string
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

/**
 * Box - Polymorphic container component
 * 
 * Provides access to design tokens and supports rendering as any HTML element.
 * 
 * @example
 * ```tsx
 * <Box>Default div</Box>
 * <Box as="section" className="p-4">Section with padding</Box>
 * <Box as="article" className="bg-card">Article with card background</Box>
 * ```
 */
export const Box = React.forwardRef(
    <T extends React.ElementType = 'div'>(
        { as, className, children, ...props }: BoxProps<T>,
        ref: React.ForwardedRef<any>
    ) => {
        const Component = as || 'div'

        return (
            <Component
                ref={ref}
                className={cn(className)}
                {...props}
            >
                {children}
            </Component>
        )
    }
) as <T extends React.ElementType = 'div'>(
    props: BoxProps<T> & { ref?: React.ForwardedRef<any> }
) => React.ReactElement

// displayName omitted due to TypeScript limitation with polymorphic components

export default Box
