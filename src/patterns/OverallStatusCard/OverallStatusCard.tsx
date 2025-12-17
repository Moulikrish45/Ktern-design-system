import React from 'react';

interface OverallStatusCardProps {
    label?: string;
    percentage?: string;
    subtitle?: string;
    icon?: React.ReactNode;
    stats?: Array<{ label: string; value: string; color?: string }>;
}

export const OverallStatusCard = ({
    label = 'Overall Status',
    percentage = '72%',
    subtitle = '4 Phases Active',
    icon,
    stats = [
        { label: 'Completed', value: '2/4', color: 'text-success' },
        { label: 'In Progress', value: '3', color: 'text-brand-secondary' },
    ],
}: OverallStatusCardProps) => {
    const defaultIcon = (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
    );

    return (
        <div className="relative p-6 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <div className="text-sm text-text-muted-light dark:text-text-muted-dark mb-1">
                        {label}
                    </div>
                    <div className="text-2xl font-bold font-mono text-brand-primary mb-1">
                        {percentage}
                    </div>
                    <div className="text-xs text-text-muted-light">
                        {subtitle}
                    </div>
                </div>
                <div className="w-12 h-12 rounded-lg bg-text-muted-light/10 dark:bg-text-muted-dark/10 text-text-main-light dark:text-text-main-dark flex items-center justify-center">
                    {icon || defaultIcon}
                </div>
            </div>
            <div className="pt-4 border-t border-border-light dark:border-border-dark">
                <div className="grid grid-cols-2 gap-3 text-xs">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <div className="text-text-muted-light mb-1">{stat.label}</div>
                            <div className={`font-mono font-semibold ${stat.color || 'text-text-main-light dark:text-text-main-dark'}`}>
                                {stat.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OverallStatusCard;
