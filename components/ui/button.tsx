"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-motus text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-motus-primary/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-motus-primary text-white shadow-primary-soft hover:bg-motus-primary-hover hover:shadow-lg",
        secondary:
          "border border-motus-border bg-white text-motus-primary hover:bg-motus-primary-subtle hover:border-motus-primary/30",
        ghost:
          "text-motus-text-secondary hover:text-motus-primary hover:bg-motus-primary-subtle",
        hero:
          "bg-white text-motus-primary shadow-lg hover:shadow-xl hover:bg-white/90",
        heroSecondary:
          "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
      },
      size: {
        default: "h-11 min-h-[44px] px-5",
        sm: "h-9 min-h-[40px] px-4 text-xs",
        lg: "h-12 min-h-[48px] px-5 sm:px-6 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  showArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, showArrow = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
        {showArrow && (
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
