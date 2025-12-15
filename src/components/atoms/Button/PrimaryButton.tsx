import React from 'react';

interface PrimaryButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

export const PrimaryButton = ({
    children = 'Submit',
    onClick,
    disabled = false
}: PrimaryButtonProps) => {
    return (
        <button
            className="group relative px-6 py-2.5 bg-brand-primary text-white font-bold rounded-xl rounded-tl-none border-2 border-transparent shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            onClick={onClick}
            disabled={disabled}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-[#d94e28] to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-gradient-x"></div>
            <span className="relative flex items-center gap-2">
                {children}
            </span>
        </button>
    );
};

export default PrimaryButton;
