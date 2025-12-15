import React from 'react';

interface BreadcrumbItem {
    label: string;
    href?: string;
    isHome?: boolean;
}

interface BreadcrumbsProps {
    items?: BreadcrumbItem[];
}

export const Breadcrumbs = ({
    items = [
        { label: 'Home', href: '#', isHome: true },
        { label: 'Projects', href: '#' },
        { label: 'SAP S/4HANA', href: '#' },
        { label: 'Dashboard' },
    ],
}: BreadcrumbsProps) => {
    return (
        <div className="flex items-center gap-2 text-sm bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark inline-flex">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {index > 0 && (
                        <svg className="w-4 h-4 text-text-muted-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    )}
                    {item.href ? (
                        item.isHome ? (
                            <a href={item.href} className="text-text-muted-light hover:text-brand-primary transition-colors flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                </svg>
                            </a>
                        ) : (
                            <a href={item.href} className="text-text-muted-light hover:text-brand-primary transition-colors">
                                {item.label}
                            </a>
                        )
                    ) : (
                        <span className="font-bold text-brand-primary">
                            {item.label}
                        </span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumbs;
