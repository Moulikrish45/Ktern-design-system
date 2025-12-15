import React from 'react';

interface StatCardProps {
    label?: string;
    value?: string | number;
    trend?: {
        value: string;
        isPositive?: boolean;
    };
    icon?: React.ReactNode;
    details?: Array<{ label: string; value: string | number }>;
}

export const StatCard = ({
    label = 'Active Projects',
    value = '24',
    trend = { value: '+8 this month', isPositive: true },
    icon,
    details = [
        { label: 'In Progress', value: '18' },
        { label: 'Completed', value: '6' },
    ],
}: StatCardProps) => {
    const defaultIcon = (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.737 1.5c-5.397.006-9.981 2.975-13.253 6H2.25l-.75.75v4.5l.221.531 1.487 1.487.002.014 6 6 .014.002 1.499 1.499.277.217h4.5l.75-.75v-6.231c3.029-3.268 5.994-7.85 5.988-13.269zM3 9h3.965a36 36 0 0 0-3.338 4.065L3 12.441zm8.55 12-.63-.635a35.4 35.4 0 0 0 4.073-3.324V21zm-1.715-1.716L4.704 14.156C6.192 12 12.569 3.533 20.967 3.024c-.489 8.418-8.981 14.78-11.132 16.26M6 22.5v-1.5H3v-3H1.5v4.5zm10.122-11.5a2.25 2.25 0 1 0-3.744-2.499 2.25 2.25 0 0 0 3.744 2.499z" fill="currentColor" />
            <path d="M6 22.5v-1.5H3v-3H1.5v4.5z" fill="#ff8f00" />
        </svg>
    );

    return (
        <div className="relative p-6 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <div className="text-sm text-text-muted-light dark:text-text-muted-dark mb-1">
                        {label}
                    </div>
                    <div className="text-4xl font-bold font-mono text-brand-primary mb-1">
                        {value}
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${trend.isPositive ? 'text-success' : 'text-danger'}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                        <span>{trend.value}</span>
                    </div>
                </div>
                <div className="w-12 h-12 rounded-lg bg-text-muted-light/10 dark:bg-text-muted-dark/10 text-text-main-light dark:text-text-main-dark flex items-center justify-center">
                    {icon || defaultIcon}
                </div>
            </div>
            <div className="pt-4 border-t border-border-light dark:border-border-dark">
                {details.map((detail, index) => (
                    <div key={index} className={`flex items-center justify-between text-xs text-text-muted-light ${index > 0 ? 'mt-2' : ''}`}>
                        <span>{detail.label}</span>
                        <span className="font-mono">{detail.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatCard;
