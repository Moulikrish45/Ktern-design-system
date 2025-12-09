import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../lib/utils';
import { ComponentProps } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-brand font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      intent: {
        primary: [
          'bg-brand-primary text-white shadow-lg shadow-brand-primary/20',
          'hover:bg-maroon-600 active:translate-y-0.5',
          'focus:ring-brand-primary/50',
          'dark:bg-maroon-400 dark:hover:bg-maroon-500', // Dark mode primary
        ],
        secondary: [
          'bg-white text-gray-700 border border-gray-200',
          'hover:bg-gray-50 hover:border-gray-300',
          'focus:ring-gray-200',
          'dark:bg-transparent dark:text-gray-300 dark:border-gray-600 dark:hover:bg-zinc-800', // Dark mode secondary
        ],
      },
      size: {
        small: 'h-8 px-3 text-sm',
        medium: 'h-10 px-4 text-base',
        large: 'h-12 px-5 text-lg',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
);

export interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'className'>,
  VariantProps<typeof buttonVariants> {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** Button contents */
  label: string;
  className?: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  className,
  intent,
  style,
  ...props
}: ButtonProps) => {
  // Map legacy 'primary' prop to 'intent' variant if intent is not explicitly provided
  const derivedIntent = intent || (primary ? 'primary' : 'secondary');

  return (
    <button
      type="button"
      className={cn(buttonVariants({ intent: derivedIntent, size }), className)}
      style={{ backgroundColor, ...style }}
      {...props}
    >
      {label}
    </button>
  );
};
