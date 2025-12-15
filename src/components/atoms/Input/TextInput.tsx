import React from 'react';

export type InputState = 'default' | 'focused' | 'error' | 'success' | 'disabled';

interface TextInputProps {
    label?: string;
    placeholder?: string;
    state?: InputState;
    helperText?: string;
    withIcon?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput = ({
    label = 'Project Name',
    placeholder = 'Enter value',
    state = 'default',
    helperText,
    withIcon = false,
    value,
    onChange,
}: TextInputProps) => {
    const getInputClasses = () => {
        const base = 'w-full px-4 py-3 text-sm font-sans rounded-xl border-2 transition-all duration-200 outline-none bg-surface-light dark:bg-surface-dark';

        switch (state) {
            case 'focused':
                return `${base} border-brand-primary ring-2 ring-brand-primary/20`;
            case 'error':
                return `${base} border-danger focus:border-danger focus:ring-2 focus:ring-danger/20`;
            case 'success':
                return `${base} border-success focus:border-success focus:ring-2 focus:ring-success/20`;
            case 'disabled':
                return `${base} border-border-light bg-gray-100 dark:bg-gray-800 text-text-muted-light cursor-not-allowed`;
            default:
                return `${base} border-border-light dark:border-border-dark focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 hover:border-gray-300`;
        }
    };

    const getHelperColor = () => {
        switch (state) {
            case 'error':
                return 'text-danger';
            case 'success':
                return 'text-success';
            default:
                return 'text-text-muted-light';
        }
    };

    return (
        <div className="w-full max-w-sm">
            {label && (
                <label className="block text-xs font-bold uppercase tracking-wide text-text-muted-light mb-2">
                    {label}
                </label>
            )}
            <div className="relative">
                {withIcon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted-light">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path strokeLinecap="round" strokeWidth="2" d="M21 21l-4.35-4.35"></path>
                        </svg>
                    </div>
                )}
                <input
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={state === 'disabled'}
                    className={`${getInputClasses()} ${withIcon ? 'pl-10' : ''}`}
                />
                {state === 'error' && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-danger">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                )}
                {state === 'success' && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-success">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                )}
            </div>
            {helperText && (
                <p className={`mt-2 text-xs flex items-center gap-1 ${getHelperColor()}`}>
                    {helperText}
                </p>
            )}
        </div>
    );
};

export default TextInput;
