"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-motus text-sm font-medium transition-transform transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-motus-primary/40 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 active:translate-y-px",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-motus-primary to-motus-accent text-white shadow-motusSoft hover:brightness-105",
        secondary:
          "border border-motus-border bg-motus-bgSoft text-motus-text hover:bg-white",
        ghost:
          "text-motus-muted hover:bg-motus-bgSoft hover:text-motus-text border border-transparent"
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

