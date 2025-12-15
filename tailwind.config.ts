import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#a9203e',      // Ruby Maroon
                    secondary: '#ff8f00',
                    primarydark: '#c41e3a',
                    secondarydark: '#ffae42',
                    tertiary: '#d94e28',
                    slate: '#475569',
                },
                background: {
                    light: '#f8f8ff',        // Ghost White
                    dark: '#100c08',         // Premium Black
                },
                surface: {
                    light: '#ffffff',
                    dark: '#1c1917',
                },
                text: {
                    main: {
                        light: '#100c08',
                        dark: '#f5f5f5',
                    },
                    muted: {
                        light: '#666563',    // Arctic Graphite
                        dark: '#a8a29e',
                    }
                },
                border: {
                    light: '#e5e5e5',
                    dark: '#44403c',
                },
                success: '#3cd070',         // Emerald Teal
                warning: '#ffc107',         // Material UI Amber
                danger: '#c41e3a',
                info: '#4166f5',            // Aurora Blue

                // Extended Maroon palette
                maroon: {
                    950: '#320a14',
                    900: '#430d1a',
                    700: '#651426',
                    600: '#76172c',
                    500: '#a9203e',
                    400: '#c41e3a',
                    300: '#d85a6a',
                    100: '#f3b0aa',
                    50: '#f6e6e3',
                },

                // Extended Orange palette
                orange: {
                    900: '#b36500',
                    700: '#e68200',
                    600: '#ff8f00',
                    400: '#ffc266',
                    100: '#fff2e5',
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
                'primary': '0 8px 16px -4px rgba(169, 32, 62, 0.2)',
                'secondary': '0 8px 16px -4px rgba(255, 143, 0, 0.2)',
                'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
                'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
                'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
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
