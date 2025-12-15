export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-extrabold font-sans text-text-main-light dark:text-text-main-dark mb-4 tracking-tight">
                KTern Design System <span className="animated-gradient-text">v1.5.0</span>
            </h1>
            <p className="text-base text-text-muted-light dark:text-text-muted-dark max-w-2xl text-center leading-relaxed">
                Single source of truth for the "Arctic Horizon" visual language.
                View the component library in Storybook.
            </p>
        </main>
    )
}
