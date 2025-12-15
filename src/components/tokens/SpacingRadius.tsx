import React from 'react';

export const SpacingRadius = () => {
    return (
        <section id="spacing" className="mb-24 scroll-mt-24">
            <h2 className="text-2xl font-bold font-sans text-brand-primary mb-8 pb-2 border-b border-border-light dark:border-border-dark">
                Spacing & Radius
            </h2>

            {/* Spacing Grid */}
            <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted-light mb-4">4px Spacing Grid</h3>
                <div className="flex flex-wrap items-end gap-2">
                    <div className="flex flex-col items-center">
                        <div className="w-1 h-1 bg-brand-primary rounded-sm"></div>
                        <span className="font-mono text-[10px] mt-1 text-text-muted-light">space-1</span>
                        <span className="font-mono text-[10px] opacity-50">4px</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-2 h-2 bg-brand-primary rounded-sm"></div>
                        <span className="font-mono text-[10px] mt-1 text-text-muted-light">space-2</span>
                        <span className="font-mono text-[10px] opacity-50">8px</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-3 h-3 bg-brand-primary rounded-sm"></div>
                        <span className="font-mono text-[10px] mt-1 text-text-muted-light">space-3</span>
                        <span className="font-mono text-[10px] opacity-50">12px</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-brand-primary rounded-sm"></div>
                        <span className="font-mono text-[10px] mt-1 text-text-muted-light">space-4</span>
                        <span className="font-mono text-[10px] opacity-50">16px</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-6 h-6 bg-brand-primary rounded-sm"></div>
                        <span className="font-mono text-[10px] mt-1 text-text-muted-light">space-6</span>
                        <span className="font-mono text-[10px] opacity-50">24px</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 bg-brand-primary rounded-sm"></div>
                        <span className="font-mono text-[10px] mt-1 text-text-muted-light">space-8</span>
                        <span className="font-mono text-[10px] opacity-50">32px</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-brand-primary rounded-sm"></div>
                        <span className="font-mono text-[10px] mt-1 text-text-muted-light">space-10</span>
                        <span className="font-mono text-[10px] opacity-50">40px</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-brand-primary rounded-sm"></div>
                        <span className="font-mono text-[10px] mt-1 text-text-muted-light">space-12</span>
                        <span className="font-mono text-[10px] opacity-50">48px</span>
                    </div>
                </div>
            </div>

            {/* Border Radius */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted-light mb-4">Border Radius</h3>
                <div className="flex flex-wrap items-center gap-6">
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-brand-primary/10 border border-brand-primary rounded-md flex items-center justify-center font-mono text-xs text-brand-primary">6px</div>
                        <span className="font-mono text-[10px] mt-2 text-text-muted-light">rounded-md</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-brand-primary/10 border border-brand-primary rounded-xl flex items-center justify-center font-mono text-xs text-brand-primary">12px</div>
                        <span className="font-mono text-[10px] mt-2 text-text-muted-light">rounded-xl</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-brand-primary/10 border border-brand-primary rounded-2xl flex items-center justify-center font-mono text-xs text-brand-primary">16px</div>
                        <span className="font-mono text-[10px] mt-2 text-text-muted-light">rounded-2xl</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpacingRadius;
