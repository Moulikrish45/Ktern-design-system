import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "../Label"

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    helperText?: string;
    error?: string;
    success?: string;
    warning?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, helperText, error, success, warning, id, ...props }, ref) => {
        const textareaId = id || React.useId();
        const helperId = React.useId();
        const stateId = React.useId();

        const hasState = error || success || warning;

        const renderLabel = () => {
            if (!label) return null;
            return (
                <Label
                    htmlFor={textareaId}
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

        return (
            <div className="grid w-full items-center gap-1.5">
                {renderLabel()}
                <textarea
                    id={textareaId}
                    className={cn(
                        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
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
Textarea.displayName = "Textarea"

export { Textarea }

