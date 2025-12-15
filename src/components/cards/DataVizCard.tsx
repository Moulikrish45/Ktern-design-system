import React from 'react';

interface DataVizCardProps {
    title?: string;
    percentage?: number;
    bars?: Array<{ label: string; value: number; color: string }>;
}

export const DataVizCard = ({
    title = 'Overall Status',
    percentage = 76,
    bars = [
        { label: 'Completed', value: 45, color: 'bg-success' },
        { label: 'In Progress', value: 30, color: 'bg-warning' },
        { label: 'Pending', value: 25, color: 'bg-gray-300' },
    ],
}: DataVizCardProps) => {
    return (
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light dark:border-border-dark hover:border-brand-primary/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-text-muted-light mb-1">{title}</p>
                    <p className="text-4xl font-bold text-brand-primary font-mono">{percentage}%</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-secondary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden flex mb-4">
                {bars.map((bar, index) => (
                    <div
                        key={index}
                        className={`${bar.color} transition-all duration-500`}
                        style={{ width: `${bar.value}%` }}
                    ></div>
                ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4">
                {bars.map((bar, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${bar.color}`}></div>
                        <span className="text-xs text-text-muted-light">{bar.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataVizCard;
