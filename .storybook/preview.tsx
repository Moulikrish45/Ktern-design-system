import React from "react";
import type { Preview } from "@storybook/react-vite";

// CRITICAL: Import globals.css here so Storybook iframe inherits fonts and Tailwind
import "../src/app/globals.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            // LIGHT MODE ONLY: Disable background switcher toolbar
            // This prevents developers from seeing/using dark mode options
            disable: true,
            default: 'light',
            values: [
                { name: 'Light', value: '#f8f8ff' },
                // Dark mode removed - light mode only per stakeholder requirements
                // { name: 'Dark', value: '#100c08' }
            ],
        },
        layout: 'padded',
        options: {
            storySort: {
                order: ['Design System', 'Foundation', 'Atoms', 'Components', 'Patterns'],
            },
        },
    },

    decorators: [
        (Story, context) => {
            // LIGHT MODE ONLY ENFORCEMENT
            // Always remove 'dark' class and ensure 'light' is applied
            React.useEffect(() => {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
            }, []);

            return (
                <div className="font-sans antialiased bg-background text-foreground p-6">
                    <Story />
                </div>
            );

            /* PRESERVED FOR FUTURE RE-ENABLEMENT
            // Simple dark mode detection from background value
            const isDark = context.globals.backgrounds?.value === '#100c08';

            // Apply dark class to html element
            React.useEffect(() => {
                if (isDark) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            }, [isDark]);

            return (
                <div className={isDark ? 'dark' : ''}>
                    <div className="font-sans antialiased bg-background text-foreground p-6">
                        <Story />
                    </div>
                </div>
            );
            */
        },
    ],
};

export default preview;
