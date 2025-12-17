import React from 'react'
import { cn } from '@/lib/utils'

/**
 * Polymorphic Grid component props
 */
export type GridProps<T extends React.ElementType = 'div'> = {
    /** Element type to render as */
    as?: T
    /** Number of columns */
    columns?: '1' | '2' | '3' | '4' | '5' | '6' | '12'
    /** Gap size (Tailwind spacing scale) */
    gap?: '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'
    /** Children */
    children?: React.ReactNode
    /** Additional CSS classes */
    className?: string
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

/**
 * Grid - CSS Grid layout component
 * 
 * Standardized grid container with columns and gap props.
 * 
 * @example
 * ```tsx
 * <Grid columns="3" gap="6">
 *   <Card>1</Card>
 *   <Card>2</Card>
 *   <Card>3</Card>
 * </Grid>
 * 
 * <Grid columns="12" gap="4" className="md:grid-cols-6 lg:grid-cols-4">
 *   <div className="col-span-12 md:col-span-6 lg:col-span-4">Responsive</div>
 * </Grid>
 * ```
 */
export const Grid = React.forwardRef(
    <T extends React.ElementType = 'div'>(
        {
            as,
            columns = '1',
            gap = '4',
            className,
            children,
            ...props
        }: GridProps<T>,
        ref: React.ForwardedRef<any>
    ) => {
        const Component = as || 'div'

        const columnsClass = `grid-cols-${columns}`
        const gapClass = `gap-${gap}`

        return (
            <Component
                ref={ref}
                className={cn(
                    'grid',
                    columnsClass,
                    gapClass,
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        )
    }
) as <T extends React.ElementType = 'div'>(
    props: GridProps<T> & { ref?: React.ForwardedRef<any> }
) => React.ReactElement

// displayName omitted due to TypeScript limitation with polymorphic components

export default Grid
