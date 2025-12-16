'use client'

import React from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'
import { Button } from '@/components/atoms/Button'
import { cn } from '@/lib/utils'
import { setTheme, getTheme, getResolvedTheme, type Theme } from '@/lib/theme'

export interface ThemeSwitcherProps {
    /** Display mode - icon only or with labels */
    mode?: 'icon' | 'labeled'
    /** Size variant */
    size?: 'sm' | 'md' | 'lg'
    /** Additional className */
    className?: string
}

/**
 * ThemeSwitcher - Toggle between light, dark, and system themes
 * 
 * @example
 * ```tsx
 * <ThemeSwitcher mode="icon" />
 * <ThemeSwitcher mode="labeled" size="lg" />
 * ```
 */
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
    mode = 'icon',
    size = 'md',
    className,
}) => {
    const [currentTheme, setCurrentTheme] = React.useState<Theme>('system')
    const [resolvedTheme, setResolvedTheme] = React.useState<'light' | 'dark'>('light')

    React.useEffect(() => {
        // Initialize theme on mount
        const theme = getTheme()
        const resolved = getResolvedTheme(theme)
        setCurrentTheme(theme)
        setResolvedTheme(resolved)

        // Listen for theme changes
        const handleThemeChange = ((e: CustomEvent) => {
            setCurrentTheme(e.detail.theme)
            setResolvedTheme(e.detail.resolved)
        }) as EventListener

        window.addEventListener('themechange', handleThemeChange)
        return () => window.removeEventListener('themechange', handleThemeChange)
    }, [])

    const handleThemeChange = (newTheme: Theme) => {
        setTheme(newTheme)
    }

    const themes: Array<{ value: Theme; icon: React.ElementType; label: string }> = [
        { value: 'light', icon: Sun, label: 'Light' },
        { value: 'dark', icon: Moon, label: 'Dark' },
        { value: 'system', icon: Monitor, label: 'System' },
    ]

    const sizeClasses = {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
    }

    if (mode === 'icon') {
        // Cycle through themes on click
        const nextTheme: Record<Theme, Theme> = {
            light: 'dark',
            dark: 'system',
            system: 'light',
        }

        const currentIcon = themes.find(t => t.value === currentTheme)?.icon || Sun
        const Icon = currentIcon

        return (
            <Button
                variant="ghost"
                size="icon"
                onClick={() => handleThemeChange(nextTheme[currentTheme])}
                className={cn(sizeClasses[size], className)}
                aria-label="Toggle theme"
            >
                <Icon className="h-5 w-5" />
            </Button>
        )
    }

    // Labeled mode - show all options
    return (
        <div className={cn('flex gap-1 p-1 rounded-lg bg-muted', className)}>
            {themes.map(({ value, icon: Icon, label }) => (
                <button
                    key={value}
                    onClick={() => handleThemeChange(value)}
                    className={cn(
                        'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all',
                        'hover:bg-background/60',
                        currentTheme === value
                            ? 'bg-background text-foreground shadow-sm'
                            : 'text-muted-foreground'
                    )}
                    aria-label={`Switch to ${label} theme`}
                    aria-pressed={currentTheme === value}
                >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                </button>
            ))}
        </div>
    )
}

export default ThemeSwitcher
