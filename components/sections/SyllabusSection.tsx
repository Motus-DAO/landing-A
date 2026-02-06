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
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-motus-textLight md:text-3xl">
            <span className="text-holo">{syllabusCopy.title}</span>
          </h2>
          <p className="mt-3 text-sm text-motus-textLight/70 md:text-base">
            Un temario diseñado para ir de los fundamentos a la aplicación real, sin perder profundidad clínica.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full rounded-motus glass-strong border border-white/20">
          {syllabusCopy.items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="px-4 border-white/10">
              <AccordionTrigger>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-motus-textLight/70">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  );
}

