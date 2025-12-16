import type { Config } from 'tailwindcss'

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
                /* ==================== SEMANTIC TOKENS ==================== */
                /* All colors reference CSS variables for runtime theming */

                // Core Semantics
                border: 'rgb(var(--border) / <alpha-value>)',
                input: 'rgb(var(--input) / <alpha-value>)',
                ring: 'rgb(var(--ring) / <alpha-value>)',
                background: 'rgb(var(--background) / <alpha-value>)',
                foreground: 'rgb(var(--foreground) / <alpha-value>)',

                // Primary & Secondary
                primary: {
                    DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
                    foreground: 'rgb(var(--primary-foreground) / <alpha-value>)',
                },
                secondary: {
                    DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
                    foreground: 'rgb(var(--secondary-foreground) / <alpha-value>)',
                },

                // Destructive
                destructive: {
                    DEFAULT: 'rgb(var(--destructive) / <alpha-value>)',
                    foreground: 'rgb(var(--destructive-foreground) / <alpha-value>)',
                },

                // Muted & Accent
                muted: {
                    DEFAULT: 'rgb(var(--muted) / <alpha-value>)',
                    foreground: 'rgb(var(--muted-foreground) / <alpha-value>)',
                },
                accent: {
                    DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
                    foreground: 'rgb(var(--accent-foreground) / <alpha-value>)',
                },

                // Popover & Card
                popover: {
                    DEFAULT: 'rgb(var(--popover) / <alpha-value>)',
                    foreground: 'rgb(var(--popover-foreground) / <alpha-value>)',
                },
                card: {
                    DEFAULT: 'rgb(var(--card) / <alpha-value>)',
                    foreground: 'rgb(var(--card-foreground) / <alpha-value>)',
                },

                // State Colors
                success: 'rgb(var(--success) / <alpha-value>)',
                warning: 'rgb(var(--warning) / <alpha-value>)',
                danger: 'rgb(var(--destructive) / <alpha-value>)',
                info: 'rgb(var(--info) / <alpha-value>)',

                /* ==================== BRAND TOKENS ==================== */
                /* Brand colors for direct usage when semantic tokens don't apply */
                brand: {
                    primary: 'rgb(var(--color-brand-primary) / <alpha-value>)',
                    secondary: 'rgb(var(--color-brand-secondary) / <alpha-value>)',
                    tertiary: 'rgb(var(--color-brand-tertiary) / <alpha-value>)',
                    primarydark: 'rgb(var(--color-brand-primary-dark) / <alpha-value>)',
                    secondarydark: 'rgb(var(--color-brand-secondary-dark) / <alpha-value>)',
                },

                /* ==================== NEUTRAL PALETTE ==================== */
                /* For advanced use cases requiring specific neutral shades */
                neutral: {
                    0: 'rgb(var(--color-neutral-0) / <alpha-value>)',
                    50: 'rgb(var(--color-neutral-50) / <alpha-value>)',
                    100: 'rgb(var(--color-neutral-100) / <alpha-value>)',
                    200: 'rgb(var(--color-neutral-200) / <alpha-value>)',
                    300: 'rgb(var(--color-neutral-300) / <alpha-value>)',
                    400: 'rgb(var(--color-neutral-400) / <alpha-value>)',
                    500: 'rgb(var(--color-neutral-500) / <alpha-value>)',
                    600: 'rgb(var(--color-neutral-600) / <alpha-value>)',
                    700: 'rgb(var(--color-neutral-700) / <alpha-value>)',
                    800: 'rgb(var(--color-neutral-800) / <alpha-value>)',
                    900: 'rgb(var(--color-neutral-900) / <alpha-value>)',
                    950: 'rgb(var(--color-neutral-950) / <alpha-value>)',
                },

                /* ==================== SURFACE TOKENS ==================== */
                /* Layered surfaces for depth */
                surface: {
                    DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
                    elevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
                    overlay: 'rgb(var(--surface-overlay) / <alpha-value>)',
                },

                /* ==================== TEXT TOKENS ==================== */
                /* Semantic text colors */
                text: {
                    primary: 'rgb(var(--text-primary) / <alpha-value>)',
                    secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
                    tertiary: 'rgb(var(--text-tertiary) / <alpha-value>)',
                    disabled: 'rgb(var(--text-disabled) / <alpha-value>)',
                    inverse: 'rgb(var(--text-inverse) / <alpha-value>)',
                },
            },
            fontFamily: {
                sans: ['Geist', 'sans-serif'],
                brand: ['Manrope', 'sans-serif'],
                serif: ['IBM Plex Serif', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
                viz: ['Sora', 'sans-serif'],
            },
            boxShadow: {
                sm: 'var(--shadow-sm)',
                md: 'var(--shadow-md)',
                lg: 'var(--shadow-lg)',
                xl: 'var(--shadow-xl)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'var(--radius-md)',
                sm: 'var(--radius-sm)',
                xl: 'var(--radius-xl)',
                full: 'var(--radius-full)',
            },
            transitionDuration: {
                fast: '150ms',
                base: '300ms',
                slow: '500ms',
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
