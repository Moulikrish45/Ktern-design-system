import React from 'react';

export const ColorTokens = () => {
    return (
        <section id="colors" className="mb-24 scroll-mt-24">
            <h2 className="text-2xl font-bold font-sans text-brand-primary mb-8 pb-2 border-b border-border-light">
                Color Tokens
            </h2>

            {/* Primary Brand */}
            <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted-light mb-4">Brand Palette</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Primary */}
                    <div className="group relative bg-surface-light p-4 rounded-xl border border-border-light flex items-center gap-4 cursor-pointer hover:border-brand-primary transition-all">
                        <div className="w-16 h-16 rounded-lg bg-[#a9203e] shadow-inner"></div>
                        <div>
                            <div className="font-bold text-lg">Ruby Maroon</div>
                            <div className="font-mono text-xs text-neutral-600">var(--brand-primary)</div>
                            <div className="font-mono text-xs text-neutral-600">#a9203e</div>
                        </div>
                        <div className="clipboard-tooltip">Click to copy</div>
                    </div>
                    {/* Secondary */}
                    <div className="group relative bg-surface-light p-4 rounded-xl border border-border-light flex items-center gap-4 cursor-pointer hover:border-brand-secondary transition-all">
                        <div className="w-16 h-16 rounded-lg bg-[#ff8f00] shadow-inner"></div>
                        <div>
                            <div className="font-bold text-lg">Arctic Amber</div>
                            <div className="font-mono text-xs text-neutral-600">var(--brand-secondary)</div>
                            <div className="font-mono text-xs text-neutral-600">#ff8f00</div>
                        </div>
                        <div className="clipboard-tooltip">Click to copy</div>
                    </div>

                </div>
            </div>

            {/* Brand Gradient */}
            <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted-light mb-4">Brand Gradient</h3>
                <div className="bg-surface-light p-4 rounded-xl border border-border-light">
                    <div className="h-20 rounded-lg mb-3 bg-gradient-to-r from-[#a9203e] via-[#d94e28] to-[#ff8f00] animate-gradient-x bg-[length:200%_100%] shadow-lg shadow-brand-primary/20"></div>
                    <div className="font-bold text-sm">Primary Gradient</div>
                    <code className="text-[10px] block bg-gray-100 p-2 rounded mt-2 font-mono overflow-x-auto">
                        linear-gradient(90deg, #a9203e 0%, #d94e28 50%, #ff8f00 100%)
                    </code>
                </div>
            </div>

            {/* Semantic */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted-light mb-4">Semantic Roles</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-3 bg-surface-light rounded-lg border border-border-light flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-success"></div>
                        <div>
                            <div className="text-xs font-bold">Success</div>
                            <div className="text-[10px] font-mono text-neutral-600">#3cd070</div>
                        </div>
                    </div>
                    <div className="p-3 bg-surface-light dark:bg-surface-dark rounded-lg border border-border-light flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-warning"></div>
                        <div>
                            <div className="text-xs font-bold">Warning</div>
                            <div className="text-[10px] font-mono text-neutral-600">#fada5e</div>
                        </div>
                    </div>
                    <div className="p-3 bg-surface-light dark:bg-surface-dark rounded-lg border border-border-light flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-danger"></div>
                        <div>
                            <div className="text-xs font-bold">Danger</div>
                            <div className="text-[10px] font-mono text-neutral-600">#c41e3a</div>
                        </div>
                    </div>
                    <div className="p-3 bg-surface-light dark:bg-surface-dark rounded-lg border border-border-light flex items-center gap-3">
                        <div className="w-6 h-6 rounded bg-info"></div>
                        <div>
                            <div className="text-xs font-bold">Info</div>
                            <div className="text-[10px] font-mono text-neutral-600">#4166f5</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ColorTokens;
