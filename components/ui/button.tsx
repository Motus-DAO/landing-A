"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-motus text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-motus-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-motus-bg disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "holo-gradient text-white shadow-lg shadow-motus-primary/50 hover:shadow-xl hover:shadow-motus-primary/60 hover:scale-105 shimmer",
        secondary:
          "glass-strong border border-white/20 text-motus-textLight hover:border-white/40 hover:bg-white/10",
        ghost:
          "text-motus-textLight hover:glass-subtle border border-transparent hover:border-white/10"
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-base"
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
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

