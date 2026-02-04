"use client";

import { SectionShell } from "./SectionShell";
import { finalCtaCopy, CHECKOUT_URL } from "@/lib/copy";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <SectionShell id="final-cta" background="soft" className="text-center">
      <div className="mx-auto max-w-2xl space-y-5">
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-motus-text md:text-3xl">
          {finalCtaCopy.title}
        </h2>
        <p className="text-sm text-motus-muted md:text-base">
          {finalCtaCopy.subtitle}
        </p>
        <div className="pt-2">
          <Button
            size="lg"
            onClick={() => {
              if (CHECKOUT_URL && CHECKOUT_URL !== "[[CHECKOUT_URL]]") {
                window.location.href = CHECKOUT_URL;
              }
            }}
          >
            {finalCtaCopy.primaryCta}
          </Button>
        </div>
        <p className="text-xs text-motus-muted">
          No hay promesas de resultados rápidos: sí un espacio serio para
          revisar cómo acompañas y cómo quieres seguir haciéndolo.
        </p>
      </div>
    </SectionShell>
  );
}

