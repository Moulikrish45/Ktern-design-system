/**
 * Design Tokens - Single Source of Truth
 * All design values are defined here and consumed throughout the system
 */

export const tokens = {
    colors: {
        // Brand Colors
        brand: {
            primary: '#a9203e',        // Ruby Maroon
            secondary: '#ff8f00',      // Vibrant Orange
            primarydark: '#c41e3a',    // Darker Maroon
            secondarydark: '#ffae42',  // Darker Orange
            tertiary: '#d94e28',       // Red-Orange
            slate: '#475569',          // Slate Gray
        },

        // Extended Maroon Palette
        maroon: {
            50: '#f6e6e3',
            100: '#f3b0aa',
            300: '#d85a6a',
            400: '#c41e3a',
            500: '#a9203e',
            600: '#76172c',
            700: '#651426',
            900: '#430d1a',
            950: '#320a14',
        },

        // Extended Orange Palette
        orange: {
            100: '#fff2e5',
            400: '#ffc266',
            600: '#ff8f00',
            700: '#e68200',
            900: '#b36500',
        },

        // Neutral Colors (Standard Gray Scale)
        neutral: {
            0: '#ffffff',
            50: '#f8f9fa',
            100: '#f1f3f5',
            200: '#e9ecef',
            300: '#dee2e6',
            400: '#ced4da',
            500: '#adb5bd',
            600: '#6c757d',
            700: '#495057',
            800: '#343a40',
            900: '#212529',
            950: '#100c08',
        },

        // Semantic Colors
        semantic: {
            success: '#3cd070',        // Emerald Teal
            warning: '#ffc107',        // Material UI Amber
            danger: '#c41e3a',         // Maroon Red
            info: '#4166f5',           // Aurora Blue
        },

        // Background Colors
        background: {
            light: '#f8f8ff',          // Ghost White
            dark: '#100c08',           // Premium Black
        },

        // Surface Colors (Card backgrounds)
        surface: {
            light: '#ffffff',          // Pure White
            dark: '#1c1917',           // Dark Gray
        },

        // Text Colors
        text: {
            main: {
                light: '#100c08',        // Almost Black
                dark: '#f5f5f5',         // Almost White
            },
            muted: {
                light: '#666563',        // Arctic Graphite
                dark: '#a8a29e',         // Light Gray
            },
        },

        // Border Colors
        border: {
            light: '#e5e5e5',          // Light Gray
            dark: '#44403c',           // Dark Gray
        },
    },

    // Spacing (for reference, can be extended)
    spacing: {
        xs: '0.25rem',    // 4px
        sm: '0.5rem',     // 8px
        md: '1rem',       // 16px
        lg: '1.5rem',     // 24px
        xl: '2rem',       // 32px
        '2xl': '3rem',    // 48px
        '3xl': '4rem',    // 64px
    },

    // Border Radius
    radius: {
        none: '0',
        sm: '0.125rem',   // 2px
        md: '0.375rem',   // 6px
        lg: '0.5rem',     // 8px
        xl: '0.75rem',    // 12px
        '2xl': '1rem',    // 16px
        '3xl': '1.5rem',  // 24px
        full: '9999px',
    },

    // Shadows
    shadows: {
        primary: '0 8px 16px -4px rgba(169, 32, 62, 0.2)',
        secondary: '0 8px 16px -4px rgba(255, 143, 0, 0.2)',
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    },

    // Font Families
    fonts: {
        sans: ['Geist', 'sans-serif'],
        brand: ['Manrope', 'sans-serif'],
        serif: ['IBM Plex Serif', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        viz: ['Sora', 'sans-serif'],
    },

    // Animations
    animations: {
        durations: {
            fast: '150ms',
            normal: '300ms',
            slow: '500ms',
        },
        easings: {
            default: 'cubic-bezier(0.4, 0, 0.2, 1)',
            in: 'cubic-bezier(0.4, 0, 1, 1)',
            out: 'cubic-bezier(0, 0, 0.2, 1)',
            inOut: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
    },
} as const;

// Helper function to convert hex to RGB for CSS variables
export function hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
        : '0 0 0';
}

// Export RGB values for CSS variables
export const rgbTokens = {
    brand: {
        primary: hexToRgb(tokens.colors.brand.primary),
        secondary: hexToRgb(tokens.colors.brand.secondary),
        primarydark: hexToRgb(tokens.colors.brand.primarydark),
        secondarydark: hexToRgb(tokens.colors.brand.secondarydark),
        tertiary: hexToRgb(tokens.colors.brand.tertiary),
    },
    semantic: {
        success: hexToRgb(tokens.colors.semantic.success),
        warning: hexToRgb(tokens.colors.semantic.warning),
        danger: hexToRgb(tokens.colors.semantic.danger),
        info: hexToRgb(tokens.colors.semantic.info),
    },
};
