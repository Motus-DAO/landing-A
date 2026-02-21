"use client";

import { motion } from "framer-motion";
import { socialProofCopy } from "@/lib/copy";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { MOTION, containerStagger, cardReveal } from "@/lib/motion";

export function SocialProofSection() {
  return (
    <section id="social" className="section-purple relative">
      <div className="section-separator" aria-hidden />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: MOTION.duration.section, ease: MOTION.easeOut }}
        className="mx-auto max-w-5xl px-4 py-16 sm:px-5 sm:py-20 md:px-6 md:py-24 lg:py-28"
      >
        <div className="space-y-8">
          <div className="max-w-2xl">
            <div className="accent-line" />
            <h2 className="text-2xl font-semibold tracking-tight text-motus-text md:text-3xl">
              Lo que dicen quienes ya han pasado por <span className="text-gradient">espacios como este</span>
            </h2>
            <p className="mt-3 text-sm text-motus-text-secondary md:text-base">
              {socialProofCopy.subtitle}
            </p>
          </div>
          <motion.div
            className="grid gap-5 md:grid-cols-3"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {socialProofCopy.items.map((item, index) => (
              <motion.div key={`${item.name}-${index}`} variants={cardReveal}>
                <Card className="flex h-full flex-col p-5 transition-all duration-200 hover:shadow-card-hover hover:border-motus-primary/15 active:scale-[0.99]">
                  <CardContent className="flex flex-1 flex-col p-0">
                    <Quote className="mb-3 h-6 w-6 text-motus-primary/40" aria-hidden />
                    <p className="flex-1 text-[0.9375rem] leading-[1.6] text-motus-text-secondary md:text-sm">
                      {item.quote}
                    </p>
                    <div className="mt-4 flex items-center gap-3 border-t border-motus-border/80 pt-4">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7B2FF2] to-[#C084FC] text-sm font-semibold text-white shadow-sm"
                        aria-hidden
                      >
                        {item.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="min-w-0 flex-1 space-y-0.5">
                        <p className="text-sm font-semibold text-motus-text">{item.name}</p>
                        <p className="text-xs text-motus-muted">{item.role}</p>
                        {"validation" in item && item.validation && (
                          <p className="text-xs text-motus-muted italic">{item.validation}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="rounded-motus border border-dashed border-motus-primary/20 bg-white/60 px-4 py-4 text-center text-xs text-motus-text-secondary backdrop-blur-sm md:text-sm">
            {socialProofCopy.logosTitle}. Próximamente: logos e instituciones colaboradoras.
          </div>
        </div>
      </motion.div>
    </section>
  );
}
