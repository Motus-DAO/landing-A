"use client";

import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Badge = ({ className, ...props }: BadgeProps) => (
  <span
    className={twMerge(
      "inline-flex items-center rounded-full glass-subtle border border-white/20 px-2.5 py-0.5 text-xs font-medium text-motus-textLight backdrop-blur-md",
      className
    )}
    {...props}
  />
);

