"use client";

import { SectionShell } from "./SectionShell";
import { syllabusCopy } from "@/lib/copy";
import { BookOpen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export function SyllabusSection() {
  return (
    <SectionShell id="temario" background="soft" separatorTop>
      <div className="space-y-6">
        <div className="max-w-2xl">
          <div className="accent-line" />
          <div className="flex items-center gap-2.5">
            <h2 className="text-2xl font-semibold tracking-tight text-motus-text md:text-3xl">
              <span className="text-gradient">Temario</span> detallado
            </h2>
            <BookOpen className="h-6 w-6 text-motus-primary" />
          </div>
          <p className="mt-3 text-sm text-motus-text-secondary md:text-base">
            Un temario diseñado para ir de los fundamentos a la aplicación real, sin perder profundidad clínica.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full rounded-motus border border-motus-border bg-white shadow-card">
          {syllabusCopy.items.map((item, index) => (
            <AccordionItem key={item.id} value={item.id} className="px-4">
              <AccordionTrigger>
                <span className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-motus-primary-light text-xs font-semibold text-motus-primary">
                    {index + 1}
                  </span>
                  <span>{item.title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  );
}
