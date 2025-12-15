import React from 'react';

export const TypographyScale = () => {
    return (
        <section id="typography" className="mb-24 scroll-mt-24">
            <h2 className="text-2xl font-bold font-sans text-brand-primary mb-8 pb-2 border-b border-border-light dark:border-border-dark">
                Typography Scale
            </h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="border-b border-border-light dark:border-border-dark text-text-muted-light">
                        <tr>
                            <th className="pb-3 font-mono">Token</th>
                            <th className="pb-3 font-mono">Spec (REM/PX)</th>
                            <th className="pb-3 font-mono">Font Family</th>
                            <th className="pb-3 font-mono">Example</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-light dark:divide-border-dark">
                        <tr className="group">
                            <td className="py-4 font-mono text-brand-primary">text-6xl</td>
                            <td className="py-4 text-xs">4rem / 64px</td>
                            <td className="py-4 font-brand">Manrope 800</td>
                            <td className="py-4">
                                <span className="text-6xl font-brand font-extrabold text-text-main-light dark:text-text-main-dark">Arctic</span>
                            </td>
                        </tr>
                        <tr className="group">
                            <td className="py-4 font-mono text-brand-primary">text-4xl</td>
                            <td className="py-4 text-xs">2.5rem / 40px</td>
                            <td className="py-4 font-brand">Manrope 700</td>
                            <td className="py-4">
                                <span className="text-4xl font-brand font-bold text-text-main-light dark:text-text-main-dark">Dashboard</span>
                            </td>
                        </tr>
                        <tr className="group">
                            <td className="py-4 font-mono text-brand-primary">text-xl</td>
                            <td className="py-4 text-xs">1.25rem / 20px</td>
                            <td className="py-4 font-brand">Manrope 600</td>
                            <td className="py-4">
                                <span className="text-xl font-brand font-semibold text-text-main-light dark:text-text-main-dark">Card Title</span>
                            </td>
                        </tr>
                        <tr className="group">
                            <td className="py-4 font-mono text-brand-primary">text-base</td>
                            <td className="py-4 text-xs">1rem / 16px</td>
                            <td className="py-4 font-sans">Geist 400</td>
                            <td className="py-4">
                                <span className="text-base text-text-main-light dark:text-text-main-dark">Standard body text for UI readability.</span>
                            </td>
                        </tr>
                        <tr className="group">
                            <td className="py-4 font-mono text-brand-primary">text-code</td>
                            <td className="py-4 text-xs">0.875rem / 14px</td>
                            <td className="py-4 font-mono">JetBrains Mono</td>
                            <td className="py-4">
                                <span className="text-sm font-mono text-text-muted-light">const x = 42;</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default TypographyScale;
