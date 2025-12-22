import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "../Label"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    helperText?: string;
    error?: string;
    success?: string;
    warning?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, helperText, error, success, warning, id, ...props }, ref) => {
        const inputId = id || React.useId();
        const helperId = React.useId();
        const stateId = React.useId();

        const isFile = type === "file";
        const hasState = error || success || warning;

        const inputElement = (
            <input
                type={type}
                id={inputId}
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
                    isFile && "h-auto p-0 border-dashed border-2 border-brand-primary/30 hover:border-brand-primary/60 bg-neutral-50 cursor-pointer file:hidden",
                    error && "border-danger focus-visible:ring-danger shadow-sm shadow-danger/10",
                    success && "border-success focus-visible:ring-success shadow-sm shadow-success/10",
                    warning && "border-warning focus-visible:ring-warning shadow-sm shadow-warning/10",
                    className
                )}
                ref={ref}
                aria-describedby={cn(
                    helperText ? helperId : undefined,
                    hasState ? stateId : undefined
                )}
                {...props}
            />
        );

        const renderLabel = () => {
            if (!label) return null;
            return (
                <Label
                    htmlFor={inputId}
                    className={cn(
                        error && "text-danger",
                        success && "text-success-foreground",
                        warning && "text-warning-foreground"
                    )}
                >
                    {label}
                </Label>
            );
        };

        const renderStateMessage = () => {
            if (!hasState) return null;
            return (
                <p
                    id={stateId}
                    className={cn(
                        "text-sm font-medium flex items-center gap-1.5",
                        error && "text-danger",
                        success && "text-success-foreground",
                        warning && "text-warning-foreground"
                    )}
                >
                    {success && <span className="text-success text-base">✓</span>}
                    {warning && <span className="text-warning text-base">⚠</span>}
                    {error || success || warning}
                </p>
            );
        };

        if (isFile) {
            return (
                <div className="grid w-full items-center gap-1.5">
                    {renderLabel()}
                    <div className="relative group min-h-[120px] rounded-md border-2 border-dashed border-brand-primary/30 hover:border-brand-primary transition-all bg-neutral-50 flex flex-col items-center justify-center p-6 cursor-pointer">
                        <input
                            type="file"
                            id={inputId}
                            className={cn(
                                "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10",
                                className
                            )}
                            ref={ref}
                            aria-describedby={cn(
                                helperText ? helperId : undefined,
                                hasState ? stateId : undefined
                            )}
                            {...props}
                        />
                        <div className="flex flex-col items-center justify-center pointer-events-none">
                            <div className="w-12 h-12 rounded-full bg-neutral-200/50 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="stroke-current stroke-2 text-text-muted-light" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="17 8 12 3 7 8" className="text-brand-secondary" stroke="currentColor" />
                                    <line x1="12" y1="3" x2="12" y2="15" className="text-brand-secondary" stroke="currentColor" />
                                </svg>
                            </div>
                            <p className="text-sm font-bold text-text-main-light">
                                <span className="text-brand-primary">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-text-muted-light mt-1">
                                SVG, PNG, JPG or GIF (max. 800x400px)
                            </p>
                        </div>
                    </div>
                    {renderStateMessage()}
                    {!hasState && helperText && (
                        <p id={helperId} className="text-sm text-muted-foreground">
                            {helperText}
                        </p>
                    )}
                </div>
            );
        }

        return (
            <div className="grid w-full items-center gap-1.5">
                {renderLabel()}
                {inputElement}
                {renderStateMessage()}
                {!hasState && helperText && (
                    <p id={helperId} className="text-sm text-muted-foreground">
                        {helperText}
                    </p>
                )}
            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }



