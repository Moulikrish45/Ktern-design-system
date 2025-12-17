import React from 'react';

interface SelectProps {
    label?: string;
    options?: string[];
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
}

export const Select = ({
    label = 'Migration Strategy',
    options = ['Greenfield Implementation', 'Brownfield Conversion', 'Selective Data Transition'],
    value,
    onChange,
    disabled = false,
}: SelectProps) => {
    return (
        <div>
            <label className="block text-sm font-bold mb-2 text-text-main-light dark:text-text-main-dark">
                {label}
            </label>
            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    disabled={disabled}
                    className="w-full px-4 py-3 appearance-none bg-white dark:bg-black/20 border border-border-light dark:border-border-dark rounded-xl focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all text-text-main-light dark:text-text-main-dark cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {options.map((option, index) => (
                        <option key={index}>{option}</option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-brand-primary">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Select;
