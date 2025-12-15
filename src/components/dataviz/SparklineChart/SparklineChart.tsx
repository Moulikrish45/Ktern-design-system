import React from 'react';

export const SparklineChart = () => {
    return (
        <div className="p-6 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark hover:border-brand-primary/30 transition-colors">
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted-light mb-4">
                Velocity
            </h3>
            <div className="h-24 flex items-end pb-1 border-b border-dashed border-border-light dark:border-border-dark">
                <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#4166f5', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#3cd070', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0 35 L10 32 L20 36 L30 25 L40 28 L50 15 L60 20 L70 10 L80 15 L90 5 L100 8"
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <circle cx="90" cy="5" r="3" fill="url(#lineGradient)" />
                </svg>
            </div>
            <div className="mt-4 flex items-center gap-2">
                <span className="text-2xl font-bold font-mono text-text-main-light dark:text-text-main-dark">
                    +24%
                </span>
                <span className="text-xs text-success bg-success/10 px-1.5 py-0.5 rounded font-medium">
                    Trending Up
                </span>
            </div>
        </div>
    );
};

export default SparklineChart;
