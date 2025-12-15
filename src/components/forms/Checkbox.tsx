import React from 'react';

interface CheckboxProps {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    id?: string;
}

export const Checkbox = ({
    label = 'I confirm that the data provided is accurate.',
    checked = false,
    onChange,
    disabled = false,
    id = 'checkbox',
}: CheckboxProps) => {
    return (
        <div className="flex items-center gap-3">
            <div className="relative flex items-center">
                <input
                    type="checkbox"
                    id={id}
                    checked={checked}
                    onChange={(e) => onChange?.(e.target.checked)}
                    disabled={disabled}
                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-border-light dark:border-border-dark checked:border-brand-primary checked:bg-brand-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <svg
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
            </div>
            <label htmlFor={id} className="text-sm cursor-pointer select-none text-text-muted-light">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
