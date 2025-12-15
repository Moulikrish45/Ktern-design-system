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
            default: 'light',
            values: [
                { name: 'Light', value: '#f8f8ff' },
                { name: 'Dark', value: '#100c08' }
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
        },
    ],
};

export default preview;
