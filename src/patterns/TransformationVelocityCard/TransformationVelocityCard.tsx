import React from 'react';

interface BarData {
    value: number;
    label: string;
}

interface TransformationVelocityCardProps {
    title?: string;
    percentage?: string;
    badge?: string;
    bars?: BarData[];
}

export const TransformationVelocityCard = ({
    title = 'Transformation Velocity',
    percentage = '84.5%',
    badge = '+12%',
    bars = [
        { value: 40, label: '40%' },
        { value: 65, label: '65%' },
        { value: 50, label: '50%' },
        { value: 85, label: '85%' },
        { value: 95, label: '95%' },
    ],
}: TransformationVelocityCardProps) => {
    return (
        <div className="relative p-6 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <div className="text-sm text-text-muted-light dark:text-text-muted-dark">
                        {title}
                    </div>
                    <div className="text-2xl font-bold font-mono text-text-main-light dark:text-text-main-dark">
                        {percentage}
                    </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold border border-success/20">
                    {badge}
                </span>
            </div>

            {/* Gradient Bar Chart with Hover Tooltips */}
            <div className="h-24 flex items-end gap-2">
                {bars.map((bar, index) => (
                    <div
                        key={index}
                        className={`w-full rounded-t-sm transition-all relative group cursor-pointer ${index === bars.length - 1
                                ? 'bg-gradient-to-t from-[#4166f5]/40 to-[#3cd070]/40 dark:from-[#f6e6e3]/40 dark:to-[#3cd070]/40 hover:from-[#4166f5]/60 hover:to-[#3cd070]/60 shadow-sm'
                                : 'bg-gradient-to-t from-[#4166f5]/30 to-[#3cd070]/30 dark:from-[#f6e6e3]/30 dark:to-[#3cd070]/30 hover:from-[#4166f5]/50 hover:to-[#3cd070]/50'
                            }`}
                        style={{ height: `${bar.value}%` }}
                    >
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black dark:bg-white text-white dark:text-black text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {bar.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransformationVelocityCard;
