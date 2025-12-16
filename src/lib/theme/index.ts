/**
 * Theme Management Utilities
 * Provides functions for runtime theme switching and custom theming
 */

export type Theme = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'

/**
 * Get the current theme from localStorage or system preference
 */
export function getTheme(): Theme {
    if (typeof window === 'undefined') return 'system'

    const stored = localStorage.getItem('theme') as Theme | null
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
        return stored
    }

    return 'system'
}

/**
 * Get the resolved theme (either 'light' or 'dark')
 */
export function getResolvedTheme(theme: Theme = getTheme()): ResolvedTheme {
    if (theme === 'system') {
        if (typeof window === 'undefined') return 'light'
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return theme
}

/**
 * Set the theme and persist to localStorage
 */
export function setTheme(theme: Theme): void {
    if (typeof window === 'undefined') return

    const root = document.documentElement
    const resolved = getResolvedTheme(theme)

    // Remove existing theme classes
    root.classList.remove('light', 'dark')

    // Add new theme class
    root.classList.add(resolved)

    // Persist to localStorage
    localStorage.setItem('theme', theme)

    // Dispatch custom event for listeners
    window.dispatchEvent(new CustomEvent('themechange', {
        detail: { theme, resolved }
    }))
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): void {
    const current = getTheme()
    const resolved = getResolvedTheme(current)
    const next: Theme = resolved === 'dark' ? 'light' : 'dark'
    setTheme(next)
}

/**
 * Initialize theme on page load
 * Call this in your root layout or _app file
 */
export function initializeTheme(): void {
    if (typeof window === 'undefined') return

    const theme = getTheme()
    const resolved = getResolvedTheme(theme)

    document.documentElement.classList.add(resolved)

    // Listen for system theme changes if theme is 'system'
    if (theme === 'system') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        mediaQuery.addEventListener('change', (e) => {
            const root = document.documentElement
            root.classList.remove('light', 'dark')
            root.classList.add(e.matches ? 'dark' : 'light')
        })
    }
}

/**
 * Custom theme configuration for white-labeling
 */
export interface CustomTheme {
    colorBrandPrimary?: string
    colorBrandSecondary?: string
    colorBrandTertiary?: string
    colorSuccess?: string
    colorWarning?: string
    colorDanger?: string
    colorInfo?: string
}

/**
 * Apply custom theme colors (for white-labeling / rebranding)
 * @param customTheme Object with custom color values in RGB format
 * 
 * @example
 * applyCustomTheme({
 *   colorBrandPrimary: '76 29 149', // Purple #4c1d95
 *   colorBrandSecondary: '234 88 12', // Orange #ea580c
 * })
 */
export function applyCustomTheme(customTheme: CustomTheme): void {
    if (typeof window === 'undefined') return

    const root = document.documentElement

    Object.entries(customTheme).forEach(([key, value]) => {
        if (value) {
            // Convert camelCase to kebab-case: colorBrandPrimary -> color-brand-primary
            const cssVar = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase()
            root.style.setProperty(cssVar, value)
        }
    })

    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('customthemeapplied', {
        detail: customTheme
    }))
}

/**
 * Reset to default theme colors
 */
export function resetCustomTheme(): void {
    if (typeof window === 'undefined') return

    const root = document.documentElement
    const customVars = [
        '--color-brand-primary',
        '--color-brand-secondary',
        '--color-brand-tertiary',
        '--color-success',
        '--color-warning',
        '--color-danger',
        '--color-info',
    ]

    customVars.forEach(varName => {
        root.style.removeProperty(varName)
    })
}
