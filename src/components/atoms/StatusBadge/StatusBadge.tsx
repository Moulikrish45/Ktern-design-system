import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const statusBadgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
        warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
        error: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
        info: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
        neutral: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
        primary: "bg-primary/10 text-primary dark:bg-primary/20",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  }
);

const dotVariants = cva(
  "h-1.5 w-1.5 rounded-full",
  {
    variants: {
      variant: {
        success: "bg-green-600 dark:bg-green-400",
        warning: "bg-yellow-600 dark:bg-yellow-400",
        error: "bg-red-600 dark:bg-red-400",
        info: "bg-blue-600 dark:bg-blue-400",
        neutral: "bg-gray-600 dark:bg-gray-400",
        primary: "bg-primary",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
  VariantProps<typeof statusBadgeVariants> {
  /** Badge label text */
  children: React.ReactNode;
  /** Show status indicator dot */
  showDot?: boolean;
}

/**
 * StatusBadge - Semantic status indicator badge
 * 
 * Displays status information with optional dot indicator.
 * Supports dark mode and multiple status variants.
 * 
 * @example
 * ```tsx
 * <StatusBadge variant="success" showDot>Active</StatusBadge>
 * <StatusBadge variant="error">Failed</StatusBadge>
 * <StatusBadge variant="warning" size="lg">Pending</StatusBadge>
 * ```
 */
export const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ className, variant, size, showDot = false, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(statusBadgeVariants({ variant, size, className }))}
        {...props}
      >
        {showDot && (
          <span className={cn(dotVariants({ variant }))} aria-hidden="true" />
        )}
        {children}
      </span>
    );
  }
);

StatusBadge.displayName = "StatusBadge";

export default StatusBadge;
