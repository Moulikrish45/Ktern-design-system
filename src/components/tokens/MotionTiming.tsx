import React from 'react';

export const MotionTiming = () => {
    return (
        <section id="motion" className="mb-24 scroll-mt-24">
            <h2 className="text-2xl font-bold font-sans text-brand-primary mb-8 pb-2 border-b border-border-light dark:border-border-dark">
                Motion & Timing
            </h2>

            {/* Duration Tokens */}
            <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted-light mb-4">Duration Tokens</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light text-center">
                        <div className="text-2xl font-mono font-bold text-brand-primary">100ms</div>
                        <div className="text-xs text-text-muted-light mt-1">instant</div>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light text-center">
                        <div className="text-2xl font-mono font-bold text-brand-primary">200ms</div>
                        <div className="text-xs text-text-muted-light mt-1">fast</div>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light text-center">
                        <div className="text-2xl font-mono font-bold text-brand-primary">300ms</div>
                        <div className="text-xs text-text-muted-light mt-1">normal</div>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light text-center">
                        <div className="text-2xl font-mono font-bold text-brand-primary">400ms</div>
                        <div className="text-xs text-text-muted-light mt-1">slow</div>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light text-center">
                        <div className="text-2xl font-mono font-bold text-brand-primary">600ms</div>
                        <div className="text-xs text-text-muted-light mt-1">slower</div>
                    </div>
                </div>
            </div>

            {/* Easing Functions */}
            <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted-light mb-4">Easing Functions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light">
                        <code className="text-xs font-mono block mb-2 text-brand-primary">ease-in-out</code>
                        <code className="text-[10px] font-mono text-text-muted-light">cubic-bezier(0.4, 0, 0.2, 1)</code>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light">
                        <code className="text-xs font-mono block mb-2 text-brand-primary">ease-out</code>
                        <code className="text-[10px] font-mono text-text-muted-light">cubic-bezier(0, 0, 0.2, 1)</code>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-border-light">
                        <code className="text-xs font-mono block mb-2 text-brand-primary">ease-in</code>
                        <code className="text-[10px] font-mono text-text-muted-light">cubic-bezier(0.4, 0, 1, 1)</code>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-brand-secondary/50">
                        <code className="text-xs font-mono block mb-2 text-brand-secondary">ease-tern</code>
                        <code className="text-[10px] font-mono text-text-muted-light">cubic-bezier(0.2, 0, 0.38, 0.9)</code>
                    </div>
                </div>
            </div>

            {/* Interactive Examples */}
            <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted-light mb-4">Interactive Examples</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Fade + Scale */}
                    <div className="group bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light hover:border-brand-primary flex flex-col items-center justify-center cursor-pointer transition-all duration-300">
                        <div className="w-12 h-12 rounded-full bg-brand-primary group-hover:scale-110 group-hover:opacity-80 transition-all duration-300 mb-4"></div>
                        <div className="text-xs font-mono text-text-muted-light">Fade + Scale</div>
                    </div>
                    {/* Slide Up */}
                    <div className="group bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light hover:border-brand-primary flex flex-col items-center justify-center cursor-pointer transition-all duration-300 overflow-hidden">
                        <div className="w-12 h-12 rounded-lg bg-brand-secondary group-hover:-translate-y-2 transition-transform duration-300 mb-4"></div>
                        <div className="text-xs font-mono text-text-muted-light">Slide Up</div>
                    </div>
                    {/* Rotate */}
                    <div className="group bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light hover:border-brand-primary flex flex-col items-center justify-center cursor-pointer transition-all duration-300">
                        <div className="w-12 h-12 rounded-lg bg-info group-hover:rotate-45 transition-transform duration-300 mb-4"></div>
                        <div className="text-xs font-mono text-text-muted-light">Rotate</div>
                    </div>
                    {/* Border Grow */}
                    <div className="group bg-surface-light dark:bg-surface-dark p-6 rounded-2xl border border-border-light hover:border-brand-primary flex flex-col items-center justify-center cursor-pointer transition-all duration-300">
                        <div className="w-12 h-12 rounded-full border-2 border-danger group-hover:border-4 transition-all duration-300 mb-4"></div>
                        <div className="text-xs font-mono text-text-muted-light">Border Grow</div>
                    </div>
                </div>
            </div>

            {/* Do's and Don'ts */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted-light mb-4">Animation Principles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-success/5 border border-success/30 p-6 rounded-xl">
                        <h4 className="text-success font-bold mb-3 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Do
                        </h4>
                        <ul className="text-sm text-text-muted-light space-y-2">
                            <li>• Use 200–300ms for standard interactions</li>
                            <li>• Apply <code className="text-brand-secondary">ease-tern</code> for signature brand feel</li>
                            <li>• Animate opacity + transform together</li>
                            <li>• Respect <code className="text-brand-primary">prefers-reduced-motion</code></li>
                        </ul>
                    </div>
                    <div className="bg-danger/5 border border-danger/30 p-6 rounded-xl">
                        <h4 className="text-danger font-bold mb-3 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                            Don&apos;t
                        </h4>
                        <ul className="text-sm text-text-muted-light space-y-2">
                            <li>• No "bouncy" or spring animations</li>
                            <li>• Avoid off-screen fly-ins or dramatic entrances</li>
                            <li>• Never animate width/height (use transform)</li>
                            <li>• Don&apos;t exceed 600ms duration</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MotionTiming;
