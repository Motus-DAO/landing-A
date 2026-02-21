"use client";

import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Badge = ({ className, ...props }: BadgeProps) => (
  <span
    className={twMerge(
      "inline-flex items-center rounded-full bg-motus-primary-light px-2.5 py-0.5 text-xs font-medium text-motus-primary border border-motus-primary/20",
      className
    )}
    {...props}
  />
);
