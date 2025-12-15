import React from 'react';

interface SecondaryButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

export const SecondaryButton = ({
    children = 'Cancel',
    onClick,
    disabled = false
}: SecondaryButtonProps) => {
    return (
        <button
            className="group relative px-6 py-2.5 bg-transparent font-bold rounded-xl rounded-tl-none overflow-hidden transition-all duration-300 border-2 border-brand-primary hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-primary/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            onClick={onClick}
            disabled={disabled}
        >
            <div className="absolute inset-0 bg-brand-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10 text-brand-primary group-hover:text-white transition-colors duration-300">
                {children}
            </span>
        </button>
    );
};

export default SecondaryButton;
