"use client";

import * as React from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={twMerge(
      "rounded-motus glass-strong border border-white/20 shadow-lg shadow-black/20 hover:border-white/30 transition-all duration-300",
      className
    )}
    {...props}
  />
);

export const CardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={twMerge("mb-3", className)} {...props} />
);

export const CardTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={twMerge(
      "font-heading text-lg font-semibold tracking-tight text-motus-textLight",
      className
    )}
    {...props}
  />
);

export const CardDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={twMerge(
      "text-sm leading-relaxed text-motus-textLight/70",
      className
    )}
    {...props}
  />
);

export const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={twMerge("text-sm text-motus-textLight/90", className)} {...props} />
);

