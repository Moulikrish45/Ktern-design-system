import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary: Exact matches HTML "Primary Innovation" classes
        primary:
          "group relative bg-brand-primary text-white font-bold rounded-2xl rounded-tl-none border-2 border-transparent shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 hover:-translate-y-1 duration-300 overflow-hidden",

        // Secondary: Exact matches HTML "Secondary Innovation" classes
        secondary:
          "group relative bg-transparent font-bold rounded-2xl rounded-tl-none overflow-hidden duration-300 border-2 border-brand-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-primary/20",

        // Hero: Exact matches HTML "Tern Hero Button" classes
        hero:
          "group relative inline-flex items-center justify-center px-8 py-3.5 rounded-tl-[2rem] rounded-br-[2rem] bg-white font-bold text-lg text-brand-tertiary border-2 border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:rounded-tl-[2rem] before:rounded-br-[2rem] before:bg-gradient-to-br before:from-brand-primarydark before:via-brand-tertiary before:to-brand-secondary focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-0",

        // Standard variants with proper styling
        outline: "rounded-xl border-2 border-brand-primary bg-transparent text-brand-primary font-semibold hover:bg-brand-primary hover:text-white hover:shadow-lg hover:shadow-brand-primary/30 transition-all duration-300 dark:border-brand-primarydark dark:text-brand-primarydark dark:hover:bg-brand-primarydark dark:hover:text-white dark:hover:shadow-brand-primarydark/30",

        ghost: "rounded-lg text-brand-primary font-semibold hover:bg-brand-primary/10 hover:text-brand-primarydark dark:text-brand-primarydark dark:hover:bg-brand-primarydark/10 dark:hover:text-brand-primary transition-all duration-200",

        destructive: "rounded-xl bg-danger text-white font-semibold shadow-md shadow-danger/20 hover:bg-danger/90 hover:shadow-lg hover:shadow-danger/30 hover:-translate-y-0.5 transition-all duration-300",

        link: "text-brand-primary font-medium underline-offset-4 hover:underline hover:text-brand-primarydark dark:text-brand-primarydark dark:hover:text-brand-primary transition-colors",
      },
      size: {
        default: "px-8 py-3", // Updated to match HTML padding
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)


/**
 * Button component props extending native HTML button attributes.
 * 
 * The Button component is the foundational interactive element in the KTern Design System.
 * It supports multiple variants, sizes, and can be rendered as a different element using the asChild prop.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  /**
   * Renders the button as a child element instead of a button.
   * Useful for rendering as a Link while maintaining button styling.
   * @default false
   */
  asChild?: boolean
}

/**
 * Button - The foundational interactive component
 * 
 * A versatile button component that supports multiple visual variants, sizes,
 * and accessibility features. Built using CVA (Class Variance Authority) for
 * type-safe variant management.
 * 
 * @example
 * ```tsx
 * // Primary button
 * <Button variant="primary">Save Changes</Button>
 * 
 * // Hero button with gradient
 * <Button variant="hero">Start Free Trial</Button>
 * 
 * // As a Link
 * <Button asChild>
 *   <Link href="/dashboard">Dashboard</Link>
 * </Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {

    // 1. HERO BUTTON RENDER
    if (variant === "hero") {
      return (
        <button
          className={cn("group relative inline-block focus:outline-none rounded-tl-[2rem] rounded-br-[2rem]", className)}
          ref={ref}
          {...props}
        >
          {/* Gradient Border Background */}
          <div className="absolute inset-0 rounded-tl-[2rem] rounded-br-[2rem] bg-gradient-to-br from-brand-primarydark via-brand-tertiary to-brand-secondary transition-transform duration-300 ease-out group-hover:scale-105"></div>

          {/* Inner Content with White Background */}
          <div className="relative m-[2px] flex items-center justify-center gap-2 bg-white dark:bg-[#1a1a1a] px-8 py-3.5 rounded-tl-[calc(2rem-2px)] rounded-br-[calc(2rem-2px)] transition-all duration-300 ease-out group-hover:bg-[#f5f5f5] dark:group-hover:bg-[#2a2a2a]">
            {/* Gradient Text with Animation */}
            <span className="text-lg font-bold bg-gradient-to-r from-brand-primary via-brand-tertiary to-brand-secondary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
              {children}
            </span>
          </div>
        </button>
      )
    }

    // 2. PRIMARY BUTTON RENDER
    if (variant === "primary") {
      return (
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-tertiary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-gradient-x"></div>

          {/* Content */}
          <span className="relative flex items-center gap-2">
            {children}
          </span>
        </button>
      )
    }

    // 3. SECONDARY BUTTON RENDER
    if (variant === "secondary") {
      return (
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {/* Fill Effect (Slide Up) */}
          <div className="absolute inset-0 bg-brand-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>

          {/* Content (Text Color Change) */}
          <span className="relative z-10 text-brand-primary group-hover:text-white transition-colors duration-300 flex items-center gap-2">
            {children}
          </span>
        </button>
      )
    }

    // 4. STANDARD RENDER (Ghost, Outline, Destructive, Link)
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }