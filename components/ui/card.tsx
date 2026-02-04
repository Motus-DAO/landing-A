"use client";

import * as React from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={twMerge(
      "rounded-motus border border-motus-border bg-white shadow-motusSoft",
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
      "font-heading text-lg font-semibold tracking-tight text-motus-text",
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
      "text-sm leading-relaxed text-motus-muted",
      className
    )}
    {...props}
  />
);

export const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={twMerge("text-sm text-motus-text", className)} {...props} />
);

