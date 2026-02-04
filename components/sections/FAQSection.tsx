"use client";

import { SectionShell } from "./SectionShell";
import { faqCopy } from "@/lib/copy";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <SectionShell id="faq" background="soft">
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-motus-text md:text-3xl">
            {faqCopy.title}
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full rounded-motus border border-motus-border bg-motus-bg"
        >
          {faqCopy.items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="px-4">
              <AccordionTrigger className="text-sm font-medium text-motus-text">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-motus-muted">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  );
}

