import React from 'react';

// Icon component for reusability
const IconCard = ({ name, children }: { name: string; children: React.ReactNode }) => (
    <div className="group relative bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-border-light dark:border-border-dark hover:border-brand-secondary/50 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
        <div className="flex justify-center mb-4 text-text-main-light dark:text-gray-200">
            {children}
        </div>
        <div className="text-center">
            <div className="font-mono text-xs text-text-muted-light mb-1">{name}</div>
        </div>
        <div className="clipboard-tooltip">Click to copy</div>
    </div>
);

export const Iconography = () => {
    return (
        <section id="iconography" className="mb-24 scroll-mt-24">
            <div className="flex items-end justify-between mb-8 pb-2 border-b border-border-light dark:border-border-dark">
                <div>
                    <div className="inline-flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded bg-brand-secondary/10 text-brand-secondary text-xs font-bold uppercase tracking-wider">
                            Asset Library
                        </span>
                    </div>
                    <h2 className="text-2xl font-bold font-sans text-brand-primary">
                        Iconography <span className="text-brand-secondary">.</span>
                    </h2>
                </div>
            </div>

            <p className="text-text-muted-light dark:text-text-muted-dark max-w-2xl mb-12">
                Official iconography for KTern.AI.
                <br /><strong>Rule:</strong> Neutral geometry for structure, <span className="text-brand-secondary font-bold">#ff8f00</span> for the active element ("The Amber Spark").
            </p>

            <div className="space-y-16">
                {/* SECTION: ACTION / AI */}
                <div>
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-text-main-light dark:text-text-main-dark">
                        <span className="w-2 h-2 bg-brand-secondary rounded-full"></span>
                        Action & Intelligence
                        <span className="text-xs font-normal text-text-muted-light ml-auto">Spark indicates: Energy source</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Sparkles (AI) */}
                        <IconCard name="ai-sparkles">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" className="text-brand-secondary" stroke="currentColor" />
                                <path d="M20 3v4" />
                                <path d="M22 5h-4" />
                                <path d="M4 17v2" />
                                <path d="M5 18H3" />
                            </svg>
                        </IconCard>

                        {/* Network */}
                        <IconCard name="network">
                            <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.35 14.39l-3.29-1.89V8.73a.67.67 0 0 0-.34-.58l-3.63-2.08a.67.67 0 0 0-.67 0l-3.63 2.08a.67.67 0 0 0-.34.58v3.77l-3.29 1.89a.67.67 0 0 0-.33.58v4.16a.67.67 0 0 0 .33.57l3.63 2.08a.67.67 0 0 0 .67 0l3.3-1.89 3.3 1.89a.67.67 0 0 0 .33.09.67.67 0 0 0 .33-.09l3.63-2.08a.67.67 0 0 0 .33-.57V14.97a.67.67 0 0 0-.34-.58zM14.76 7.41l2.97 1.7v3.27l-2.97 1.71-2.96-1.73V9.11zm-3.63 13.05l-2.96-1.69v-3.26l3.12-1.79 2.93 1.71v3.26zm10.2-1.7l-2.96 1.7-2.97-1.71v-3.39l2.97-1.71 2.96 1.71z" fill="currentColor" />
                                <path d="M4.67 18.29a.67.67 0 0 1-.67-.67v-5.03a.67.67 0 0 1 .33-.57l3.3-1.89V7.03a.67.67 0 0 1 .33-.58l3.48-2a.67.67 0 0 1 .91.24.67.67 0 0 1-.25.91l-3.13 1.79v3.77a.67.67 0 0 1-.34.58L5.33 13.65v3.97a.67.67 0 0 1-.66.67z" fill="#ff8f00" />
                                <path d="M2 16.7a.67.67 0 0 1-.67-.67v-4.71a.67.67 0 0 1 .33-.57l3.34-1.9V5.45a.67.67 0 0 1 .33-.58l3.5-2a.67.67 0 0 1 .67 1.16L6.33 5.83v3.77a.67.67 0 0 1-.34.58L2.67 12.74v3.96A.67.67 0 0 1 2 16.7z" fill="#ff8f00" />
                            </svg>
                        </IconCard>

                        {/* Rocket */}
                        <IconCard name="rocket">
                            <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.737 1.5c-5.397.006-9.981 2.975-13.253 6H2.25l-.75.75v4.5l.221.531 1.487 1.487.002.014 6 6 .014.002 1.499 1.499.277.217h4.5l.75-.75v-6.231c3.029-3.268 5.994-7.85 5.988-13.269zM3 9h3.965a36 36 0 0 0-3.338 4.065L3 12.441zm8.55 12-.63-.635a35.4 35.4 0 0 0 4.073-3.324V21zm-1.715-1.716L4.704 14.156C6.192 12 12.569 3.533 20.967 3.024c-.489 8.418-8.981 14.78-11.132 16.26M6 22.5v-1.5H3v-3H1.5v4.5zm10.122-11.5a2.25 2.25 0 1 0-3.744-2.499 2.25 2.25 0 0 0 3.744 2.499z" fill="currentColor" />
                                <path d="M6 22.5v-1.5H3v-3H1.5v4.5z" fill="#ff8f00" />
                            </svg>
                        </IconCard>

                        {/* Check Circle */}
                        <IconCard name="check-circle">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <path d="M22 4L12 14.01l-3-3" className="text-brand-secondary" stroke="currentColor" />
                            </svg>
                        </IconCard>
                    </div>
                </div>

                {/* SECTION: UTILITY */}
                <div>
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-text-main-light dark:text-text-main-dark">
                        <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                        Utility & System
                        <span className="text-xs font-normal text-text-muted-light ml-auto">Spark indicates: Interactive part</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Search */}
                        <IconCard name="search">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" className="text-brand-secondary" stroke="currentColor" />
                            </svg>
                        </IconCard>

                        {/* Settings */}
                        <IconCard name="settings">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                                <circle cx="12" cy="12" r="3" className="text-brand-secondary" stroke="currentColor" />
                            </svg>
                        </IconCard>

                        {/* Filter */}
                        <IconCard name="filter">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                                <path d="M10 19L14 21" className="text-brand-secondary" stroke="currentColor" />
                            </svg>
                        </IconCard>

                        {/* Edit */}
                        <IconCard name="edit">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                <path d="M12 15l-4 1 1-4" className="text-brand-secondary" stroke="currentColor" />
                            </svg>
                        </IconCard>
                    </div>
                </div>

                {/* SECTION: BRAND / GOVERNANCE */}
                <div>
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-text-main-light dark:text-text-main-dark">
                        <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                        Governance & Brand
                        <span className="text-xs font-normal text-text-muted-light ml-auto">Spark indicates: Core component</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Shield */}
                        <IconCard name="shield">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="M9 12l2 2 4-4" className="text-brand-secondary" stroke="currentColor" />
                            </svg>
                        </IconCard>

                        {/* Flask */}
                        <IconCard name="flask">
                            <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 3v4.5l-3.5 6.5v4.5c0 1.933 1.567 3.5 3.5 3.5h6c1.933 0 3.5-1.567 3.5-3.5V14l-3.5-6.5V3M9 3h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                <path d="M6.5 16h11" stroke="#ff8f00" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </IconCard>

                        {/* Enterprise */}
                        <IconCard name="enterprise">
                            <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 3h12v18H4V3z" stroke="currentColor" strokeWidth="2" fill="none" />
                                <path d="M16 10h4v11h-4V10z" stroke="currentColor" strokeWidth="2" fill="none" />
                                <path d="M2 21h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <rect x="6" y="6" width="2" height="2" fill="currentColor" />
                                <rect x="10" y="6" width="2" height="2" fill="currentColor" />
                                <rect x="6" y="10" width="2" height="2" fill="currentColor" />
                                <rect x="10" y="10" width="2" height="2" fill="currentColor" />
                                <rect x="6" y="14" width="2" height="2" fill="#ff8f00" />
                                <rect x="10" y="14" width="2" height="2" fill="#ff8f00" />
                            </svg>
                        </IconCard>

                        {/* Report */}
                        <IconCard name="report">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" className="text-brand-secondary" stroke="currentColor" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <line x1="10" y1="9" x2="8" y2="9" />
                            </svg>
                        </IconCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Iconography;
