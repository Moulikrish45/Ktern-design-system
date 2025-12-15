import React from 'react';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
    variant?: ToastVariant;
    title?: string;
    message?: string;
    onClose?: () => void;
}

const icons: Record<ToastVariant, React.ReactNode> = {
    success: (
        <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
        </svg>
    ),
    error: (
        <svg className="w-5 h-5 text-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    ),
    warning: (
        <svg className="w-5 h-5 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
    ),
    info: (
        <svg className="w-5 h-5 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
    ),
};

const titles: Record<ToastVariant, string> = {
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
    info: 'Info',
};

const messages: Record<ToastVariant, string> = {
    success: 'Your changes have been saved successfully.',
    error: 'Unable to process request. Please try again.',
    warning: 'Storage capacity approaching limit (90%).',
    info: 'A new software update is available.',
};

const colorClasses: Record<ToastVariant, { stripe: string; bg: string; iconBg: string; iconBorder: string; glow: string; dot: string }> = {
    success: {
        stripe: 'bg-gradient-to-b from-success via-success to-success/50',
        bg: 'bg-success/5',
        iconBg: 'bg-gradient-to-br from-success/20 to-success/10',
        iconBorder: 'border-success/30',
        glow: 'bg-success/20',
        dot: 'bg-success',
    },
    error: {
        stripe: 'bg-gradient-to-b from-danger via-danger to-danger/50',
        bg: 'bg-danger/5',
        iconBg: 'bg-gradient-to-br from-danger/20 to-danger/10',
        iconBorder: 'border-danger/30',
        glow: 'bg-danger/20',
        dot: 'bg-danger',
    },
    warning: {
        stripe: 'bg-gradient-to-b from-warning via-warning to-warning/50',
        bg: 'bg-warning/5',
        iconBg: 'bg-gradient-to-br from-warning/20 to-warning/10',
        iconBorder: 'border-warning/30',
        glow: 'bg-warning/20',
        dot: 'bg-warning',
    },
    info: {
        stripe: 'bg-gradient-to-b from-info via-info to-info/50',
        bg: 'bg-info/5',
        iconBg: 'bg-gradient-to-br from-info/20 to-info/10',
        iconBorder: 'border-info/30',
        glow: 'bg-info/20',
        dot: 'bg-info',
    },
};

export const Toast = ({
    variant = 'success',
    title = titles[variant],
    message = messages[variant],
    onClose,
}: ToastProps) => {
    const colors = colorClasses[variant];

    return (
        <div className="group relative overflow-hidden rounded-xl bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm border border-border-light dark:border-border-dark shadow-lg hover:shadow-xl transition-all duration-300">
            {/* Diagonal Accent Stripe */}
            <div className={`absolute top-0 left-0 w-1 h-full ${colors.stripe}`}></div>
            <div className={`absolute top-0 left-0 w-16 h-16 ${colors.bg} rounded-br-full`}></div>

            <div className="relative flex items-start gap-4 p-4">
                {/* Elevated Icon with Glow */}
                <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 ${colors.glow} blur-md rounded-full`}></div>
                    <div className={`relative w-10 h-10 rounded-full ${colors.iconBg} border ${colors.iconBorder} flex items-center justify-center backdrop-blur-sm`}>
                        {icons[variant]}
                    </div>
                </div>

                <div className="flex-1 min-w-0 pt-1">
                    <h4 className="font-bold text-sm text-text-main-light dark:text-text-main-dark mb-1 flex items-center gap-2">
                        {title}
                        <span className={`inline-block w-1.5 h-1.5 rounded-full ${colors.dot} animate-pulse`}></span>
                    </h4>
                    <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                        {message}
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="flex-shrink-0 w-6 h-6 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-text-muted-light dark:text-text-muted-dark hover:text-text-main-light dark:hover:text-text-main-dark transition-all flex items-center justify-center"
                >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Toast;
