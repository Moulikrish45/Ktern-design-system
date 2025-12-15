import React from 'react';

export const DonutChart = () => {
    return (
        <div className="p-6 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark hover:border-brand-primary/30 transition-colors">
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted-light mb-4">
                Storage Usage
            </h3>
            <div className="relative w-32 h-32 mx-auto">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                    <path
                        className="text-gray-200 dark:text-gray-700"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                    />
                    <defs>
                        <linearGradient id="donutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#4166f5', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#3cd070', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path
                        strokeDasharray="75, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="url(#donutGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-xl font-bold font-mono text-text-main-light dark:text-text-main-dark">
                        75%
                    </span>
                    <span className="text-[10px] text-text-muted-light uppercase">Used</span>
                </div>
            </div>
        </div>
    );
};

export default DonutChart;
