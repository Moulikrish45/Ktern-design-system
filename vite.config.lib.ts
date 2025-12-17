import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'

export default defineConfig({
    plugins: [
        react(),
        dts({
            include: ['src/components', 'src/lib', 'src/styles', 'src/index.ts', 'src/patterns'],
            exclude: ['**/*.stories.ts', '**/*.stories.tsx', '**/*.test.ts', '**/*.test.tsx'],
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'KternDesignSystem',
            fileName: (format) => `ktern-design-system.${format}.js`,
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    tailwindcss: 'tailwindcss',
                },
            },
        },
        // This is critical for the README instructions:
        cssCodeSplit: false, // Forces all CSS into one style.css file
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
})
