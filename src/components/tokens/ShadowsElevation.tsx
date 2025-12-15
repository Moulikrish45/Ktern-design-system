import React from 'react';

export const ShadowsElevation = () => {
    return (
        <section id="shadows" className="mb-24 scroll-mt-24">
            <h2 className="text-2xl font-bold font-sans text-brand-primary mb-8 pb-2 border-b border-border-light dark:border-border-dark">
                Shadows & Elevation
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
                {/* Shadow SM */}
                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark hover:border-brand-primary/30 transition-all">
                    <div className="h-12 w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm mb-3"></div>
                    <div className="font-mono text-xs text-text-muted-light">shadow-sm</div>
                </div>
                {/* Shadow MD */}
                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark hover:border-brand-primary/30 transition-all">
                    <div className="h-12 w-full bg-white dark:bg-gray-800 rounded-lg shadow-md mb-3"></div>
                    <div className="font-mono text-xs text-text-muted-light">shadow-md</div>
                </div>
                {/* Shadow LG */}
                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark hover:border-brand-primary/30 transition-all">
                    <div className="h-12 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-3"></div>
                    <div className="font-mono text-xs text-text-muted-light">shadow-lg</div>
                </div>
                {/* Shadow XL */}
                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark hover:border-brand-primary/30 transition-all">
                    <div className="h-12 w-full bg-white dark:bg-gray-800 rounded-lg shadow-xl mb-3"></div>
                    <div className="font-mono text-xs text-text-muted-light">shadow-xl</div>
                </div>
                {/* Shadow 2XL */}
                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark hover:border-brand-primary/30 transition-all">
                    <div className="h-12 w-full bg-white dark:bg-gray-800 rounded-lg shadow-2xl mb-3"></div>
                    <div className="font-mono text-xs text-text-muted-light">shadow-2xl</div>
                </div>
                {/* Brand Shadow */}
                <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark hover:border-brand-primary/30 transition-all">
                    <div className="h-12 w-full bg-brand-primary rounded-lg shadow-primary mb-3"></div>
                    <div className="font-mono text-xs text-brand-primary">shadow-brand</div>
                </div>
            </div>

            {/* Interactive Example */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted-light mb-4">Interactive Elevation</h3>
                <div className="flex gap-6 items-center">
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                        <p className="font-mono text-sm text-text-muted-light group-hover:text-brand-primary transition-colors">Hover me</p>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light hover:shadow-xl hover:shadow-brand-primary/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                        <p className="font-mono text-sm text-text-muted-light group-hover:text-brand-primary transition-colors">Brand Shadow</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShadowsElevation;
