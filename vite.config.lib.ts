import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { glob } from 'glob'

// Get all component entry points
const components = glob.sync('src/components/**/*.tsx', {
    ignore: ['**/*.stories.tsx', '**/*.test.tsx']
})

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: {
                // Main entry point
                index: path.resolve(__dirname, 'src/index.ts'),
                // Individual component entries for tree shaking
                ...Object.fromEntries(
                    components.map(file => [
                        // Convert path to entry name: src/components/atoms/Button/Button.tsx -> atoms-Button
                        file
                            .replace('src/components/', '')
                            .replace('.tsx', '')
                            .replace(/\//g, '-'),
                        file
                    ])
                )
            },
            formats: ['es', 'cjs'],
            fileName: (format, entryName) => {
                const ext = format === 'es' ? 'mjs' : 'js'
                return `${entryName}.${ext}`
            }
        },
        rollupOptions: {
            // Externalize dependencies that shouldn't be bundled
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                'next',
                'tailwindcss',
                '@radix-ui/react-dialog',
                '@radix-ui/react-slot',
                '@radix-ui/react-select',
                '@radix-ui/react-tabs',
                'class-variance-authority',
                'clsx',
                'tailwind-merge',
                'lucide-react',
                'recharts'
            ],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'jsxRuntime'
                },
                // Preserve module structure for better tree shaking
                preserveModules: true,
                preserveModulesRoot: 'src',
                exports: 'named'
            }
        },
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: true,
        // Optimize build
        minify: 'esbuild',
        target: 'es2020'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
