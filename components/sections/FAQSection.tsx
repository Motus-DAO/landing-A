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
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-motus-textLight md:text-3xl">
            <span className="text-holo">{faqCopy.title}</span>
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full rounded-motus glass-strong border border-white/20"
        >
          {faqCopy.items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="px-4 border-white/10">
              <AccordionTrigger>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-motus-textLight/70">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  );
}

