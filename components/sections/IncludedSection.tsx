"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { includedCopy, ctaCopy, CHECKOUT_URL } from "@/lib/copy";
import { containerStagger, cardReveal } from "@/lib/motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlayCircle, Video, FileDown, Users, Globe, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  PlayCircle,
  Video,
  FileDown,
  Users,
  Globe,
  RefreshCw
};

export function IncludedSection() {
  return (
    <SectionShell id="incluye" separatorTop>
      <div className="space-y-8">
        <div className="max-w-2xl">
          <div className="accent-line" />
          <h2 className="text-2xl font-semibold tracking-tight text-motus-text md:text-3xl">
            Todo lo que <span className="text-gradient">incluye el programa</span>
          </h2>
          <p className="mt-3 text-sm text-motus-text-secondary md:text-base">
            {includedCopy.subtitle}
          </p>
        </div>
        <motion.div
          className="grid gap-5 md:grid-cols-3"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {includedCopy.items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div key={item.title} variants={cardReveal}>
                <Card className="flex h-full flex-col p-5 transition-all duration-200 hover:shadow-card-hover hover:border-motus-primary/15 active:scale-[0.99]">
                  <CardHeader>
                    <div className="icon-container mb-3">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <Badge className="mb-2 w-fit">{item.badge}</Badge>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA después de beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 rounded-2xl border border-motus-primary/15 bg-motus-primary-subtle/40 px-4 py-8 text-center sm:flex-row sm:justify-center sm:gap-5"
        >
          <p className="text-sm font-medium text-motus-text sm:text-base">
            ¿Lista para aplicar estos marcos en tu consulta?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              showArrow
              className="transition-transform duration-200 active:scale-[0.98]"
              onClick={() => {
                if (CHECKOUT_URL && CHECKOUT_URL !== "[[CHECKOUT_URL]]") {
                  window.location.href = CHECKOUT_URL;
                }
              }}
            >
              {ctaCopy.primary}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="transition-transform duration-200 active:scale-[0.98]"
              onClick={() => {
                const el = document.getElementById("temario");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {ctaCopy.secondary}
            </Button>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
