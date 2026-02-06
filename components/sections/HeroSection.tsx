"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CHECKOUT_URL, heroCopy } from "@/lib/copy";

const listVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.4, ease: "easeOut" }
  })
};

export function HeroSection() {
  return (
    <section className="motus-bg">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 pb-28 pt-20 md:flex-row md:items-center md:gap-16 md:px-6 md:pt-24 md:pb-32">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="space-y-6 text-white"
          >
            <Badge className="glass-strong border-white/30">
              {heroCopy.eyebrow}
            </Badge>

            <div className="space-y-4">
              <h1 className="font-heading text-3xl font-semibold tracking-tight text-white md:text-5xl md:leading-tight">
                <span className="text-holo">{heroCopy.title}</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                {heroCopy.subtitle}
              </p>
            </div>

            <ul className="grid gap-2 text-sm text-white md:text-base">
              {heroCopy.bullets.map((item, index) => (
                <motion.li
                  key={item}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={listVariants}
                  className="flex items-start gap-2"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/80" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Button
                onClick={() => {
                  if (CHECKOUT_URL && CHECKOUT_URL !== "[[CHECKOUT_URL]]") {
                    window.location.href = CHECKOUT_URL;
                  }
                }}
              >
                {heroCopy.primaryCta}
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  const el = document.getElementById("temario");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                {heroCopy.secondaryCta}
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="flex-1"
        >
          <div className="relative mx-auto h-64 w-full max-w-md rounded-motus-lg glass-strong border border-white/30 shadow-glow-primary md:h-72 overflow-hidden">
            <div className="absolute inset-0 rounded-motus-lg bg-gradient-to-br from-motus-primary/20 via-motus-accent/15 via-motus-cyan/10 to-motus-blue/20" />
            <div className="absolute inset-0 shimmer" />
            <div className="relative flex h-full flex-col justify-between p-5 z-10">
              <div className="space-y-2">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                  Mapa del programa
                </p>
                <p className="font-heading text-lg font-semibold text-white">
                  De desregulación a agencia compartida
                </p>
              </div>
              <div className="space-y-2 text-xs text-white/80">
                <div className="grid gap-1.5">
                  <div className="flex items-center justify-between rounded-full glass-subtle border border-white/20 px-3 py-1.5 text-[11px] text-white backdrop-blur-sm">
                    <span>Evaluación inicial</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-motus-primary glow-primary" />
                  </div>
                  <div className="flex items-center justify-between rounded-full glass-subtle border border-white/15 px-3 py-1.5 text-[11px] text-white backdrop-blur-sm">
                    <span>Regulación y seguridad</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-motus-cyan glow-cyan" />
                  </div>
                  <div className="flex items-center justify-between rounded-full glass-subtle border border-white/10 px-3 py-1.5 text-[11px] text-white backdrop-blur-sm">
                    <span>Diseño de ciclos y grupos</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-motus-accent glow-accent" />
                  </div>
                </div>
                <p className="pt-2 text-[11px] text-white/70">
                  Vista esquemática del recorrido que trabajaremos juntas en la formación.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

