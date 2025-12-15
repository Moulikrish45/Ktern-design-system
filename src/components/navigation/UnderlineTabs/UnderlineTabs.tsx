import React, { useState } from 'react';

interface Tab {
    id: string;
    label: string;
}

interface UnderlineTabsProps {
    tabs?: Tab[];
    activeTab?: string;
    onTabChange?: (tabId: string) => void;
}

export const UnderlineTabs = ({
    tabs = [
        { id: 'overview', label: 'Overview' },
        { id: 'analytics', label: 'Analytics' },
        { id: 'configuration', label: 'Configuration' },
    ],
    activeTab: initialActiveTab = 'overview',
    onTabChange,
}: UnderlineTabsProps) => {
    const [activeTab, setActiveTab] = useState(initialActiveTab);

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
        onTabChange?.(tabId);
    };

    return (
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6">
            <div className="flex gap-6 border-b border-border-light dark:border-border-dark mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`pb-3 text-sm transition-all -mb-px px-1 border-b-2 ${activeTab === tab.id
                                ? 'font-bold text-brand-primary border-brand-primary'
                                : 'font-medium text-text-muted-light hover:text-text-main-light border-transparent hover:border-text-muted-light/30'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="text-sm text-text-muted-light p-4 bg-background-light dark:bg-black/20 rounded-lg">
                <p>Detailed {activeTab} content displayed here.</p>
            </div>
        </div>
    );
};

export default UnderlineTabs;
