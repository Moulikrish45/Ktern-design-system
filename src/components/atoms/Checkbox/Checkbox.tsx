import React from 'react';
import { cn } from "@/lib/utils";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    error?: string;
    success?: string;
    warning?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className, label, helperText, error, success, warning, id, ...props }, ref) => {
        const generatedId = React.useId();
        const checkboxId = id || generatedId;
        const helperId = React.useId();

        const hasState = error || success || warning;

        return (
            <div className="grid gap-1.5">
                <div className="flex items-center gap-3">
                    <div className="relative flex items-center">
                        <input
                            type="checkbox"
                            id={checkboxId}
                            className={cn(
                                "peer h-5 w-5 cursor-pointer appearance-none rounded border border-input bg-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                                error && "border-danger checked:bg-danger checked:border-danger",
                                success && "border-success checked:bg-success checked:border-success",
                                warning && "border-warning checked:bg-warning checked:border-warning",
                                !hasState && "border-input checked:bg-brand-primary checked:border-brand-primary",
                                className
                            )}
                            ref={ref}
                            aria-describedby={helperText || hasState ? helperId : undefined}
                            {...props}
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
                    {label && (
                        <label
                            htmlFor={checkboxId}
                            className={cn(
                                "text-sm font-medium cursor-pointer select-none leading-none",
                                error && "text-danger",
                                success && "text-success-foreground",
                                warning && "text-warning-foreground",
                                !hasState && "text-text-main-light"
                            )}
                        >
                            {label}
                        </label>
                    )}
                </div>
                {(helperText || hasState) && (
                    <p
                        id={helperId}
                        className={cn(
                            "text-xs ml-8",
                            error && "text-danger",
                            success && "text-success-foreground",
                            warning && "text-warning-foreground",
                            !hasState && "text-text-muted-light"
                        )}
                    >
                        {error || success || warning || helperText}
                    </p>
                )}
            </div>
        );
    }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
