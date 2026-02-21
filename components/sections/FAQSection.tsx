"use client";

import { SectionShell } from "./SectionShell";
import { faqCopy } from "@/lib/copy";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <SectionShell id="faq" separatorTop>
      <div className="space-y-6">
        <div className="max-w-2xl">
          <div className="accent-line" />
          <div className="flex items-center gap-2.5">
            <h2 className="text-2xl font-semibold tracking-tight text-motus-text md:text-3xl">
              Preguntas <span className="text-gradient">frecuentes</span>
            </h2>
            <HelpCircle className="h-6 w-6 text-motus-primary" />
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full rounded-motus border border-motus-border bg-white shadow-card"
        >
          {faqCopy.items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="px-4">
              <AccordionTrigger>
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  );
}
