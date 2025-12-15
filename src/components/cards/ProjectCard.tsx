import React from 'react';

type CardType = 'rocket' | 'flask' | 'enterprise';

interface ProjectCardProps {
    type?: CardType;
    title?: string;
    description?: string;
    actionText?: string;
    onClick?: () => void;
}

const icons: Record<CardType, React.ReactNode> = {
    rocket: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.737 1.5c-5.397.006-9.981 2.975-13.253 6H2.25l-.75.75v4.5l.221.531 1.487 1.487.002.014 6 6 .014.002 1.499 1.499.277.217h4.5l.75-.75v-6.231c3.029-3.268 5.994-7.85 5.988-13.269zM3 9h3.965a36 36 0 0 0-3.338 4.065L3 12.441zm8.55 12-.63-.635a35.4 35.4 0 0 0 4.073-3.324V21zm-1.715-1.716L4.704 14.156C6.192 12 12.569 3.533 20.967 3.024c-.489 8.418-8.981 14.78-11.132 16.26M6 22.5v-1.5H3v-3H1.5v4.5zm10.122-11.5a2.25 2.25 0 1 0-3.744-2.499 2.25 2.25 0 0 0 3.744 2.499z" fill="currentColor" />
            <path d="M6 22.5v-1.5H3v-3H1.5v4.5z" className="text-brand-secondary" fill="currentColor" />
        </svg>
    ),
    flask: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3v4.5l-3.5 6.5v4.5c0 1.933 1.567 3.5 3.5 3.5h6c1.933 0 3.5-1.567 3.5-3.5V14l-3.5-6.5V3M9 3h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M6.5 16h11" className="text-brand-secondary" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    enterprise: (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 3h12v18H4V3z" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M16 10h4v11h-4V10z" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M2 21h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <rect x="6" y="6" width="2" height="2" fill="currentColor" />
            <rect x="10" y="6" width="2" height="2" fill="currentColor" />
            <rect x="6" y="10" width="2" height="2" fill="currentColor" />
            <rect x="10" y="10" width="2" height="2" fill="currentColor" />
            <rect x="6" y="14" width="2" height="2" className="text-brand-secondary" fill="currentColor" />
            <rect x="10" y="14" width="2" height="2" className="text-brand-secondary" fill="currentColor" />
        </svg>
    ),
};

const defaults: Record<CardType, { title: string; description: string; actionText: string }> = {
    rocket: {
        title: 'Project Launch',
        description: 'Deploy your SAP S/4HANA migration with confidence and speed.',
        actionText: 'Start Project',
    },
    flask: {
        title: 'Testing Lab',
        description: 'Sandbox environment for validating custom code and extensions.',
        actionText: 'Open Lab',
    },
    enterprise: {
        title: 'Landscape View',
        description: 'Complete overview of your SAP architecture and systems.',
        actionText: 'View Systems',
    },
};

export const ProjectCard = ({
    type = 'rocket',
    title = defaults[type].title,
    description = defaults[type].description,
    actionText = defaults[type].actionText,
    onClick,
}: ProjectCardProps) => {
    return (
        <div
            className="group relative p-6 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-brand-primary/30 cursor-pointer overflow-hidden"
            onClick={onClick}
        >
            {/* Top-right corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-secondary/5 rounded-bl-[4rem] transition-transform group-hover:scale-150 group-hover:bg-brand-secondary/10"></div>

            <div className="relative z-10">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-text-muted-light/10 dark:bg-text-muted-dark/10 text-text-main-light dark:text-text-main-dark flex items-center justify-center mb-4 transition-colors">
                    {icons[type]}
                </div>

                {/* Title */}
                <h4 className="font-bold text-lg mb-2">{title}</h4>

                {/* Description */}
                <p className="text-sm text-text-muted-light mb-4">{description}</p>

                {/* Action Link */}
                <span className="text-sm font-bold text-brand-primary flex items-center gap-2">
                    {actionText}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </span>
            </div>
        </div>
    );
};

export default ProjectCard;
