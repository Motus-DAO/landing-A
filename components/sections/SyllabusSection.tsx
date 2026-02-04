"use client";

import { SectionShell } from "./SectionShell";
import { syllabusCopy } from "@/lib/copy";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export function SyllabusSection() {
  return (
    <SectionShell id="temario" background="soft">
      <div className="space-y-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-motus-text md:text-3xl">
            {syllabusCopy.title}
          </h2>
          <p className="mt-3 text-sm text-motus-muted md:text-base">
            Un temario diseñado para ir de los fundamentos a la aplicación real, sin perder profundidad clínica.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full rounded-motus border border-motus-border bg-motus-bg">
          {syllabusCopy.items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="px-4">
              <AccordionTrigger className="text-sm font-medium text-motus-text">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-motus-muted">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  );
}

