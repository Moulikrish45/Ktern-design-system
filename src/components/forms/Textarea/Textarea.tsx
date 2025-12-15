import React from 'react';

interface TextareaProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    rows?: number;
    disabled?: boolean;
}

export const Textarea = ({
    label = 'Description',
    placeholder = 'Briefly describe the scope of this project...',
    value,
    onChange,
    rows = 3,
    disabled = false,
}: TextareaProps) => {
    return (
        <div>
            <label className="block text-sm font-bold mb-2 text-text-main-light dark:text-text-main-dark">
                {label}
            </label>
            <textarea
                rows={rows}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
                disabled={disabled}
                className="w-full px-4 py-3 bg-white dark:bg-black/20 border border-border-light dark:border-border-dark rounded-xl focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all resize-none text-text-main-light dark:text-text-main-dark placeholder:text-text-muted-light/50 disabled:opacity-50 disabled:cursor-not-allowed"
            ></textarea>
        </div>
    );
};

export default Textarea;
