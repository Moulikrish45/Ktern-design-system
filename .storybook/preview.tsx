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
            options: {
                light: { name: 'light', value: '#f8f8ff' },
                dark: { name: 'dark', value: '#100c08' }
            }
        },
        layout: 'padded',
        options: {
            storySort: {
                order: ['Foundation', 'Token', 'Components', 'Patterns'],
            },
        },
    },

    decorators: [
        (Story) => (
            <div className="font-sans antialiased">
                <Story />
            </div>
        ),
    ],

    initialGlobals: {
        backgrounds: {
            value: 'light'
        }
    }
};

export default preview;
