import React from 'react';

type IconType = 'rocket' | 'flask' | 'enterprise';

interface HoverExpandCardProps {
    icon: IconType;
    title?: string;
    description?: string;
}

const icons: Record<IconType, React.ReactNode> = {
    rocket: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.737 1.5c-5.397.006-9.981 2.975-13.253 6H2.25l-.75.75v4.5l.221.531 1.487 1.487.002.014 6 6 .014.002 1.499 1.499.277.217h4.5l.75-.75v-6.231c3.029-3.268 5.994-7.85 5.988-13.269zM3 9h3.965a36 36 0 0 0-3.338 4.065L3 12.441zm8.55 12-.63-.635a35.4 35.4 0 0 0 4.073-3.324V21zm-1.715-1.716L4.704 14.156C6.192 12 12.569 3.533 20.967 3.024c-.489 8.418-8.981 14.78-11.132 16.26M6 22.5v-1.5H3v-3H1.5v4.5zm10.122-11.5a2.25 2.25 0 1 0-3.744-2.499 2.25 2.25 0 0 0 3.744 2.499z" fill="currentColor" />
            <path d="M6 22.5v-1.5H3v-3H1.5v4.5z" fill="#ff8f00" />
        </svg>
    ),
    flask: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M9 3v4.5l-3.5 6.5v4.5c0 1.933 1.567 3.5 3.5 3.5h6c1.933 0 3.5-1.567 3.5-3.5V14l-3.5-6.5V3M9 3h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M6.5 16h11" stroke="#ff8f00" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    enterprise: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
            <path d="M4 3h12v18H4V3z" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M16 10h4v11h-4V10z" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M2 21h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <rect x="6" y="6" width="2" height="2" fill="currentColor" />
            <rect x="10" y="6" width="2" height="2" fill="currentColor" />
            <rect x="6" y="10" width="2" height="2" fill="currentColor" />
            <rect x="10" y="10" width="2" height="2" fill="currentColor" />
            <rect x="6" y="14" width="2" height="2" fill="#ff8f00" />
            <rect x="10" y="14" width="2" height="2" fill="#ff8f00" />
        </svg>
    ),
};

const titles: Record<IconType, string> = {
    rocket: 'Project Launch',
    flask: 'Testing Lab',
    enterprise: 'Landscape View',
};

const descriptions: Record<IconType, string> = {
    rocket: 'Initiate and manage SAP transformation projects with guided workflows.',
    flask: 'Run simulations and test scenarios in a controlled environment.',
    enterprise: 'Get a bird\'s-eye view of your complete SAP ecosystem.',
};

export const HoverExpandCardAlt = ({
    icon,
    title = titles[icon],
    description = descriptions[icon],
}: HoverExpandCardProps) => {
    // Generate random particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 3, // Increased from 3+1 to 6+3 (3-9px)
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
    }));

    return (
        <div className="group relative bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light dark:border-border-dark hover:border-brand-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden">
            {/* Animated Particles Background - masked to avoid icon */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 0 0, 20% 0, 20% 35%, 0 35%, 0 0)',
                }}
            >
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="absolute rounded-full bg-brand-primary/40 blur-[1px] animate-float"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            animationDuration: `${particle.duration}s`,
                            animationDelay: `${particle.delay}s`,
                            boxShadow: '0 0 8px rgba(169, 32, 62, 0.4)',
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {icons[icon]}
                </div>

                {/* Title */}
                <h3 className="font-brand font-bold text-lg text-text-main-light dark:text-text-main-dark mb-2 group-hover:text-brand-primary transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                    {description}
                </p>

                {/* Arrow indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <svg className="w-5 h-5 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </div>
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>
    );
};

export default HoverExpandCardAlt;
