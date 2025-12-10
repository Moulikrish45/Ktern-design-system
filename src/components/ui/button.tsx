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
          "relative overflow-hidden bg-brand-primary text-white shadow-lg shadow-[rgba(169,32,62,0.2)] hover:shadow-xl active:translate-y-0.5 dark:bg-brand-primary dark:hover:bg-[#c41e3a] dark:shadow-[rgba(196,30,58,0.2)] before:absolute before:inset-0 before:translate-x-[-100%] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:animate-[shimmer_1.5s_infinite]",
        secondary:
          "bg-white dark:bg-[#1c1917] text-brand-primary border border-brand-primary px-6 py-2.5 rounded-md font-medium hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors",
        ghost:
          "bg-transparent text-brand-slate dark:text-gray-400 font-medium hover:bg-transparent hover:text-brand-secondary dark:hover:text-brand-secondary transition-colors",
        destructive:
          "bg-white text-danger border border-danger hover:bg-danger hover:text-white hover:border-danger hover:animate-[shake_0.5s_ease-in-out] focus:ring-danger/20 transition-all duration-300 dark:bg-transparent dark:text-[#de828a] dark:border-[#de828a] dark:hover:bg-[#de828a] dark:hover:text-[#100c08]",
        energy:
          "bg-gradient-to-r from-brand-primary via-[#d94e28] to-brand-secondary bg-[length:200%_200%] animate-[gradient-xy_3s_ease_infinite] text-white hover:opacity-90 focus:ring-brand-secondary/50 shadow-lg shadow-[rgba(255,143,0,0.2)]",
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