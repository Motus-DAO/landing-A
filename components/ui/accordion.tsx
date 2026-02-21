"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = ({
  className,
  ...props
}: AccordionPrimitive.AccordionItemProps) => (
  <AccordionPrimitive.Item
    className={twMerge(
      "border-b border-motus-border last:border-b-0",
      className
    )}
    {...props}
  />
);

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionPrimitive.AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={twMerge(
        "flex flex-1 items-center justify-between py-3.5 text-left text-sm font-medium text-motus-text transition-colors duration-200 hover:text-motus-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-motus-primary/40 focus-visible:ring-offset-2 rounded",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown className="ml-2 h-4 w-4 shrink-0 text-motus-muted transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] data-[state=open]:rotate-180" aria-hidden />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionPrimitive.AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={twMerge(
      "overflow-hidden text-sm text-motus-text-secondary data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
      className
    )}
    {...props}
  >
    <div className="pb-4 pt-1">{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;
