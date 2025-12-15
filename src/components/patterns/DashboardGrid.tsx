import React from 'react';

export const DashboardGrid = () => {
    return (
        <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Dashboard Grid (Responsive)</h3>
            {/* Visualizer of Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="bg-brand-primary/5 border border-brand-primary/20 h-20 sm:h-24 rounded-xl flex items-center justify-center text-xs font-mono text-brand-primary px-2 text-center">
                    KPI Card (Col-1)
                </div>
                <div className="bg-brand-primary/5 border border-brand-primary/20 h-20 sm:h-24 rounded-xl flex items-center justify-center text-xs font-mono text-brand-primary px-2 text-center">
                    KPI Card (Col-1)
                </div>
                <div className="bg-brand-primary/5 border border-brand-primary/20 h-20 sm:h-24 rounded-xl flex items-center justify-center text-xs font-mono text-brand-primary px-2 text-center">
                    KPI Card (Col-1)
                </div>
                <div className="sm:col-span-2 bg-brand-secondary/5 border border-brand-secondary/20 h-32 sm:h-48 rounded-xl flex items-center justify-center text-xs font-mono text-brand-secondary px-2 text-center">
                    Main Chart (Col-2)
                </div>
                <div className="bg-brand-slate/5 border border-brand-slate/20 h-32 sm:h-48 rounded-xl flex items-center justify-center text-xs font-mono text-brand-slate px-2 text-center">
                    Sidebar/Feed (Col-1)
                </div>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs font-mono text-text-muted-light">
                <span>Mobile: Stacked</span>
                <span>Tablet: 2-Col</span>
                <span>Desktop: 3-Col</span>
            </div>
        </div>
    );
};

export default DashboardGrid;
