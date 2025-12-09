import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// 1. Define the variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-brand font-semibold transition-all duration-200 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-primary text-white hover:bg-[#76172c] focus:ring-brand-primary/50 shadow-lg shadow-[rgba(169,32,62,0.2)] active:translate-y-0.5 dark:bg-[#c41e3a] dark:hover:bg-[#a9203e] dark:shadow-[rgba(196,30,58,0.2)]",
        secondary:
          "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:ring-gray-200 dark:bg-transparent dark:text-[#a8a29e] dark:border-[#44403c] dark:hover:bg-[#1c1917] dark:focus:ring-[#44403c]",
        ghost:
          "bg-transparent text-brand-primary hover:bg-brand-primary/5 focus:ring-brand-primary/20 dark:text-[#c41e3a] dark:hover:bg-[#c41e3a]/10",
        destructive:
          "bg-white text-danger border border-danger hover:bg-danger hover:text-white hover:border-danger focus:ring-danger/20 transition-all duration-300 dark:bg-transparent dark:text-[#de828a] dark:border-[#de828a] dark:hover:bg-[#de828a] dark:hover:text-[#100c08]",
        energy:
          "bg-gradient-to-r from-brand-primary via-[#d94e28] to-brand-secondary text-white hover:opacity-90 focus:ring-brand-secondary/50 shadow-lg shadow-[rgba(255,143,0,0.2)]",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        default: "h-10 px-4 text-base",
        lg: "h-12 px-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={props.disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && (
          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" role="status" aria-label="Loading" />
        )}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };