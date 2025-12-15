import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'KTern Design System v1.5.0 - Arctic Horizon',
    description: 'Official Development Handoff for KTern.AI Design System',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth light">
            <body className="bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark antialiased transition-colors duration-200 overflow-x-hidden">
                {children}
            </body>
        </html>
    )
}
