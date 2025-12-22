import React from 'react';

interface DialogModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    onConfirm?: () => void;
    title?: string;
    subtitle?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
}

export const DialogModal = ({
    isOpen = false,
    onClose,
    onConfirm,
    title = 'Confirm Action',
    subtitle = 'Critical system operation',
    message = 'Are you sure you want to proceed with this data migration? This action cannot be undone and will overwrite existing configurations.',
    confirmText = 'Yes, Proceed',
    cancelText = 'Cancel',
}: DialogModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300"
            onClick={onClose}
        >
            <div
                className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-2xl max-w-md w-full border border-border-light dark:border-border-dark transform transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6 border-b border-border-light dark:border-border-dark flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-brand font-bold text-xl text-text-main-light dark:text-text-main-dark">
                            {title}
                        </h3>
                        <p className="text-sm text-text-muted-light">{subtitle}</p>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close dialog"
                        className="text-text-muted-light hover:text-text-main-light transition-colors p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-lg"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="p-6">
                    <p className="text-base text-text-muted-light leading-relaxed">
                        {message}
                    </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-black/20 rounded-b-xl flex gap-3 justify-end border-t border-border-light dark:border-border-dark">
                    {/* Cancel Button */}
                    <button
                        onClick={onClose}
                        className="group relative px-5 py-2.5 bg-transparent font-bold rounded-xl rounded-tl-none overflow-hidden transition-all duration-300 border-2 border-border-light dark:border-border-dark hover:border-brand-primary hover:-translate-y-0.5"
                    >
                        <span className="text-text-muted-light group-hover:text-brand-primary transition-colors duration-300">
                            {cancelText}
                        </span>
                    </button>

                    {/* Confirm Button */}
                    <button
                        onClick={onConfirm}
                        className="group relative px-6 py-2.5 bg-brand-primary text-white font-bold rounded-xl rounded-tl-none border-2 border-transparent shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-[#d94e28] to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-gradient-x"></div>
                        <span className="relative flex items-center gap-2">
                            {confirmText}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DialogModal;
