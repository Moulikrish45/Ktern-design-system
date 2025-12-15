import React from 'react';

interface BarData {
    height: number;
    label: string;
}

interface BarChartProps {
    title?: string;
    bars?: BarData[];
    labels?: string[];
}

export const BarChart = ({
    title = 'Module Split',
    bars = [
        { height: 40, label: '40%' },
        { height: 80, label: '80%' },
        { height: 60, label: '60%' },
    ],
    labels = ['Core', 'Ext', 'API'],
}: BarChartProps) => {
    return (
        <div className="p-6 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark hover:border-brand-primary/30 transition-colors">
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted-light mb-4">
                {title}
            </h3>
            <div className="h-32 flex items-end justify-between gap-2 pb-1 border-b border-border-light dark:border-border-dark">
                {bars.map((bar, index) => (
                    <div
                        key={index}
                        className="w-full rounded-t hover:opacity-90 transition-opacity relative group"
                        style={{
                            height: `${bar.height}%`,
                            background: 'linear-gradient(135deg, #4166f5 0%, #3cd070 100%)',
                        }}
                    >
                        <div className={`absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity ${index === 1 ? 'text-brand-secondary' : 'text-brand-primary'}`}>
                            {bar.label}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-text-muted-light font-mono uppercase">
                {labels.map((label, index) => (
                    <span key={index}>{label}</span>
                ))}
            </div>
        </div>
    );
};

export default BarChart;
