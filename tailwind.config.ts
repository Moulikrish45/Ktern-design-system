import type { Config } from 'tailwindcss'
import { tokens } from './src/styles/tokens'

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Semantic colors using CSS variables
                border: 'rgb(var(--border) / <alpha-value>)',
                input: 'rgb(var(--input) / <alpha-value>)',
                ring: 'rgb(var(--ring) / <alpha-value>)',
                background: 'rgb(var(--background) / <alpha-value>)',
                foreground: 'rgb(var(--foreground) / <alpha-value>)',

                primary: {
                    DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
                    foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
                },
                secondary: {
                    DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
                    foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)',
                },
                destructive: {
                    DEFAULT: 'rgb(var(--destructive) / <alpha-value>)',
                    foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)',
                },
                muted: {
                    DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
                    foreground: 'rgb(var(--muted-foreground) / <alpha-value>)',
                },
                accent: {
                    DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
                    foreground: 'rgb(var(--accent-foreground) / <alpha-value>)',
                },
                popover: {
                    DEFAULT: 'rgb(var(--popover) / <alpha-value>)',
                    foreground: 'rgb(var(--popover-foreground) / <alpha-value>)',
                },
                card: {
                    DEFAULT: 'rgb(var(--card) / <alpha-value>)',
                    foreground: 'rgb(var(--card-foreground) / <alpha-value>)',
                },

                // Direct token colors (for components that use explicit colors)
                brand: tokens.colors.brand,
                maroon: tokens.colors.maroon,
                orange: tokens.colors.orange,
                neutral: tokens.colors.neutral,

                // Semantic helpers using CSS variables
                success: 'rgb(var(--success) / <alpha-value>)',
                warning: 'rgb(var(--warning) / <alpha-value>)',
                danger: 'rgb(var(--destructive) / <alpha-value>)',
                info: 'rgb(var(--info) / <alpha-value>)',

                // Legacy colors for backward compatibility
                'background-light': tokens.colors.background.light,
                'background-dark': tokens.colors.background.dark,
                'surface-light': tokens.colors.surface.light,
                'surface-dark': tokens.colors.surface.dark,
                'text-main-light': tokens.colors.text.main.light,
                'text-main-dark': tokens.colors.text.main.dark,
                'text-muted-light': tokens.colors.text.muted.light,
                'text-muted-dark': tokens.colors.text.muted.dark,
                'border-light': tokens.colors.border.light,
                'border-dark': tokens.colors.border.dark,
            },
            fontFamily: {
                sans: [...tokens.fonts.sans],
                brand: [...tokens.fonts.brand],
                serif: [...tokens.fonts.serif],
                mono: [...tokens.fonts.mono],
                viz: [...tokens.fonts.viz],
            },
            boxShadow: {
                primary: tokens.shadows.primary,
                secondary: tokens.shadows.secondary,
                sm: tokens.shadows.sm,
                md: tokens.shadows.md,
                lg: tokens.shadows.lg,
                xl: tokens.shadows.xl,
                '2xl': tokens.shadows['2xl'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            animation: {
                'fade-in-up': 'fade-in-up 300ms ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient-x': 'gradient-x 3s ease infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    },
                },
                'float': {
                    '0%, 100%': {
                        transform: 'translateY(0px) translateX(0px)',
                        opacity: '0.5'
                    },
                    '50%': {
                        transform: 'translateY(-20px) translateX(10px)',
                        opacity: '0.8'
                    },
                },
            },
        }
    },
    plugins: [],
}
export default config
