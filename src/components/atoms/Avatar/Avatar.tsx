import React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cn } from '@/lib/utils'

export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
    /** Image source */
    src?: string
    /** Alt text for image */
    alt?: string
    /** Fallback text (initials) */
    fallback?: string
    /** Size variant */
    size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base'
}

/**
 * Avatar - User avatar with fallback support
 * 
 * Uses Radix UI for automatic image fallback handling.
 * 
 * @example
 * ```tsx
 * <Avatar src="/avatar.jpg" alt="John Doe" fallback="JD" />
 * <Avatar fallback="AB" size="lg" />
 * ```
 */
export const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    AvatarProps
>(({ className, src, alt, fallback, size = 'md', ...props }, ref) => {
    return (
        <AvatarPrimitive.Root
            ref={ref}
            className={cn(
                'relative flex shrink-0 overflow-hidden rounded-full',
                sizeClasses[size],
                className
            )}
            {...props}
        >
            <AvatarPrimitive.Image
                src={src}
                alt={alt}
                className="aspect-square h-full w-full object-cover"
            />
            <AvatarPrimitive.Fallback
                className="flex h-full w-full items-center justify-center rounded-full bg-muted font-medium text-muted-foreground"
                delayMs={600}
            >
                {fallback}
            </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>
    )
})

Avatar.displayName = 'Avatar'

export default Avatar
