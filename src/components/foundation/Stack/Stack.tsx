import React from 'react'
import { cn } from '@/lib/utils'

/**
 * Polymorphic Stack component props
 */
export type StackProps<T extends React.ElementType = 'div'> = {
    /** Element type to render as */
    as?: T
    /** Stack direction */
    direction?: 'horizontal' | 'vertical'
    /** Gap size (Tailwind spacing scale) */
    gap?: '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16'
    /** Align items */
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
    /** Justify content */
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
    /** Wrap items */
    wrap?: boolean
    /** Children */
    children?: React.ReactNode
    /** Additional CSS classes */
    className?: string
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

/**
 * Stack - Flexbox layout component
 * 
 * Standardized flex container with gap, direction, alignment, and justification props.
 * 
 * @example
 * ```tsx
 * <Stack direction="vertical" gap="4">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 * 
 * <Stack direction="horizontal" gap="2" justify="between" align="center">
 *   <Button>Left</Button>
 *   <Button>Right</Button>
 * </Stack>
 * ```
 */
export const Stack = React.forwardRef(
    <T extends React.ElementType = 'div'>(
        {
            as,
            direction = 'vertical',
            gap = '4',
            align,
            justify,
            wrap = false,
            className,
            children,
            ...props
        }: StackProps<T>,
        ref: React.ForwardedRef<any>
    ) => {
        const Component = as || 'div'

        const directionClass = direction === 'horizontal' ? 'flex-row' : 'flex-col'
        const gapClass = `gap-${gap}`
        const alignClass = align && `items-${align}`
        const justifyClass = justify && `justify-${justify}`
        const wrapClass = wrap && 'flex-wrap'

        return (
            <Component
                ref={ref}
                className={cn(
                    'flex',
                    directionClass,
                    gapClass,
                    alignClass,
                    justifyClass,
                    wrapClass,
                    className
                )}
                {...props}
            >
                {children}
            </Component>
        )
    }
) as <T extends React.ElementType = 'div'>(
    props: StackProps<T> & { ref?: React.ForwardedRef<any> }
) => React.ReactElement

// displayName omitted due to TypeScript limitation with polymorphic components

export default Stack
