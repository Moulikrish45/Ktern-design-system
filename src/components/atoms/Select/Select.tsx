import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Label } from "../Label"

export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface SelectProps {
    label?: string;
    helperText?: string;
    error?: string;
    success?: string;
    warning?: string;
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    name?: string;
    id?: string;
    className?: string;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
    ({
        className,
        label,
        helperText,
        error,
        success,
        warning,
        id,
        options,
        onChange,
        placeholder = "Select an option...",
        value,
        defaultValue,
        disabled,
        name,
        ...props
    }, ref) => {
        const generatedId = React.useId();
        const selectId = id || generatedId;
        const helperId = React.useId();
        const stateId = React.useId();

        const hasState = error || success || warning;

        const renderLabel = () => {
            if (!label) return null;
            return (
                <Label
                    htmlFor={selectId}
                    className={cn(
                        "mb-1.5",
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
                        "text-sm font-medium flex items-center gap-1.5 mt-1.5",
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
            <div className="grid w-full items-center">
                {renderLabel()}
                <SelectPrimitive.Root
                    value={value}
                    defaultValue={defaultValue}
                    onValueChange={onChange}
                    disabled={disabled}
                    name={name}
                >
                    <SelectPrimitive.Trigger
                        id={selectId}
                        ref={ref}
                        className={cn(
                            "group flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
                            error && "border-danger focus:ring-danger shadow-sm shadow-danger/10",
                            success && "border-success focus:ring-success shadow-sm shadow-success/10",
                            warning && "border-warning focus:ring-warning shadow-sm shadow-warning/10",
                            className
                        )}
                        aria-describedby={cn(
                            helperText ? helperId : undefined,
                            hasState ? stateId : undefined
                        )}
                        {...props}
                    >
                        <SelectPrimitive.Value placeholder={placeholder} />
                        <SelectPrimitive.Icon asChild>
                            <ChevronDown className={cn(
                                "h-4 w-4 opacity-50 transition-all duration-200 group-data-[state=open]:rotate-180",
                                !hasState && "text-brand-primary opacity-100",
                                error && "text-danger opacity-100",
                                success && "text-success opacity-100",
                                warning && "text-warning opacity-100"
                            )} />
                        </SelectPrimitive.Icon>
                    </SelectPrimitive.Trigger>

                    <SelectPrimitive.Portal>
                        <SelectPrimitive.Content
                            className={cn(
                                "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                                "bg-white border-slate-200"
                            )}
                            position="popper"
                            sideOffset={4}
                        >
                            <SelectPrimitive.ScrollUpButton className="flex cursor-default items-center justify-center py-1">
                                <ChevronUp className="h-4 w-4" />
                            </SelectPrimitive.ScrollUpButton>

                            <SelectPrimitive.Viewport className="p-1 h-[var(--radix-select-trigger-width)] min-w-[var(--radix-select-trigger-width)]">
                                {options.map((option) => (
                                    <SelectPrimitive.Item
                                        key={option.value}
                                        value={option.value}
                                        disabled={option.disabled}
                                        className={cn(
                                            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                                            "hover:bg-brand-primary/5 focus:bg-brand-primary/10 transition-colors"
                                        )}
                                    >
                                        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                                            <SelectPrimitive.ItemIndicator>
                                                <Check className="h-4 w-4 text-brand-primary" />
                                            </SelectPrimitive.ItemIndicator>
                                        </span>
                                        <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                                    </SelectPrimitive.Item>
                                ))}
                            </SelectPrimitive.Viewport>

                            <SelectPrimitive.ScrollDownButton className="flex cursor-default items-center justify-center py-1">
                                <ChevronDown className="h-4 w-4" />
                            </SelectPrimitive.ScrollDownButton>
                        </SelectPrimitive.Content>
                    </SelectPrimitive.Portal>
                </SelectPrimitive.Root>
                {!hasState && helperText && (
                    <p id={helperId} className="text-sm text-muted-foreground mt-1.5">
                        {helperText}
                    </p>
                )}
            </div>
        )
    }
)
Select.displayName = "Select"

export { Select }
