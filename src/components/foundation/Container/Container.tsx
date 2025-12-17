import React from 'react'
import { cn } from '@/lib/utils'

/**
 * Polymorphic Container component props
 */
export type ContainerProps<T extends React.ElementType = 'div'> = {
    /** Element type to render as */
    as?: T
    /** Container size */
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
    /** Children */
    children?: React.ReactNode
    /** Additional CSS classes */
    className?: string
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

/**
 * Container - Max-width wrapper with responsive padding
 * 
 * Provides consistent max-width constraints and padding for content.
 * 
 * @example
 * ```tsx
 * <Container size="lg">
 *   <h1>Page Content</h1>
 * </Container>
 * 
 * <Container as="section" size="xl" className="py-12">
 *   <Grid columns="3">...</Grid>
 * </Container>
 * ```
 */
export const Container = React.forwardRef(
    <T extends React.ElementType = 'div'>(
        {
            as,
            size = 'lg',
            className,
            children,
            ...props
        }: ContainerProps<T>,
        ref: React.ForwardedRef<any>
    ) => {
        const Component = as || 'div'

        const sizeClasses = {
            sm: 'max-w-2xl',
            md: 'max-w-4xl',
            lg: 'max-w-6xl',
            xl: 'max-w-7xl',
            full: 'max-w-full'
        }

        return (
            <Component
                ref={ref}
                className={cn(
                    'mx-auto px-4 sm:px-6 lg:px-8',
                    sizeClasses[size],
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        )
    }
) as <T extends React.ElementType = 'div'>(
    props: ContainerProps<T> & { ref?: React.ForwardedRef<any> }
) => React.ReactElement

// displayName omitted due to TypeScript limitation with polymorphic components

export default Container
