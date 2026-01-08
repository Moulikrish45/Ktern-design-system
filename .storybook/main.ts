import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path, { dirname } from "path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
    stories: [
        // "../src/**/*.mdx", // Disabled: Storybook 10.x + Windows + Vite MDX path bug
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-a11y",
        "@storybook/addon-docs",
        // Storybook 10+ has native MDX support, addon-mdx-gfm not needed
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    typescript: {
        check: false,
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop: any) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    // This is the specific fix for the Windows path issue
    viteFinal: async (config: any) => {
        return mergeConfig(config, {
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve?.alias,
                    "@": path.resolve(__dirname, "../src"),
                    // Force resolution of the shim if it's getting lost
                    "@mdx-js/react": "@storybook/addon-docs/mdx-react-shim",
                },
            },
        });
    },
};

export default config;
