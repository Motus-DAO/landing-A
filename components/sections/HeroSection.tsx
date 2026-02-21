"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CHECKOUT_URL, heroCopy } from "@/lib/copy";
import { MOTION, listItemReveal } from "@/lib/motion";
import {
  Check,
  Monitor,
  GraduationCap,
  Briefcase,
  ClipboardCheck,
  Shield,
  Compass,
  Lock,
  Zap,
  Users
} from "lucide-react";

const journeySteps = [
  { num: "01", label: "Evaluación inicial", desc: "Mapear tu punto de partida", icon: ClipboardCheck },
  { num: "02", label: "Regulación y seguridad", desc: "Protocolos y marcos claros", icon: Shield },
  { num: "03", label: "Diseño de ciclos y grupos", desc: "De sesión a proceso", icon: Compass }
];

const microProofIcons = [
  { key: "secure", Icon: Lock },
  { key: "access", Icon: Zap },
  { key: "community", Icon: Users }
];

export function HeroSection() {
  return (
    <section className="hero-bg relative">
      <div className="hero-mesh" aria-hidden />
      <div className="hero-noise" aria-hidden />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-4 pb-24 pt-16 sm:px-5 sm:pt-20 md:flex-row md:items-center md:gap-16 md:px-6 md:pb-32 md:pt-24 lg:gap-20">
        <div className="flex-1 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: MOTION.duration.section, ease: MOTION.easeOut }}
            className="space-y-5 sm:space-y-6"
          >
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/95 backdrop-blur-sm">
              {heroCopy.eyebrow}
            </span>

            <div className="space-y-3 sm:space-y-4">
              <h1
                className="max-w-[18ch] text-[1.65rem] font-bold leading-[1.22] tracking-tight text-white drop-shadow-sm min-[360px]:text-[1.85rem] min-[430px]:text-[2rem] sm:text-3xl sm:leading-[1.18] md:text-4xl md:leading-[1.15] lg:text-[2.6rem] lg:leading-[1.12]"
                style={{ textWrap: "balance" }}
              >
                {heroCopy.title}
              </h1>
              <p className="max-w-xl text-[0.9375rem] leading-[1.55] text-white/92 sm:text-base md:text-lg md:leading-relaxed">
                {heroCopy.subtitle}
              </p>
            </div>

            {/* Trust bar: above fold, alta visibilidad */}
            {heroCopy.microProof && heroCopy.microProof.length > 0 && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-white/20 bg-white/10 px-3.5 py-2.5 text-xs text-white/90 backdrop-blur-sm sm:gap-x-5 sm:text-sm">
                {heroCopy.microProof.map((text, i) => {
                  const { Icon } = microProofIcons[i] ?? microProofIcons[0];
                  return (
                    <span key={text} className="inline-flex items-center gap-2 font-medium">
                      <Icon className="h-4 w-4 shrink-0 text-white" aria-hidden />
                      {text}
                    </span>
                  );
                })}
              </div>
            )}

            <ul className="grid gap-2.5 text-sm text-white/95 sm:text-[0.9375rem] md:text-base md:leading-relaxed">
              {heroCopy.bullets.map((item, index) => (
                <motion.li
                  key={item}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={listItemReveal}
                  className="flex items-start gap-2.5"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/25">
                    <Check className="h-3 w-3 text-white" aria-hidden />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-0 text-xs text-white/85 md:text-sm">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                <Monitor className="h-3.5 w-3.5" />
                Formación online y en diferido
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                <GraduationCap className="h-3.5 w-3.5" />
                Módulos clínicos + supervisión
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
                <Briefcase className="h-3.5 w-3.5" />
                Pensado para consulta
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1 sm:pt-2">
              <Button
                variant="hero"
                size="lg"
                showArrow
                className="btn-hero-cta transition-all duration-200"
                onClick={() => {
                  if (CHECKOUT_URL && CHECKOUT_URL !== "[[CHECKOUT_URL]]") {
                    window.location.href = CHECKOUT_URL;
                  }
                }}
              >
                {heroCopy.primaryCta}
              </Button>
              <Button
                variant="heroSecondary"
                className="transition-transform duration-200 active:scale-[0.98]"
                onClick={() => {
                  const el = document.getElementById("temario");
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {heroCopy.secondaryCta}
              </Button>
            </div>

            <p className="pt-0 text-xs text-white/70 sm:pt-1">
              {heroCopy.urgencyLine}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: MOTION.duration.section, ease: MOTION.easeOut, delay: 0.1 }}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="card-hero-glass relative w-full max-w-md rounded-2xl overflow-hidden border border-white/40">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" aria-hidden />
            <div className="relative p-6 space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-motus-primary">
                Mapa del programa
              </p>
              <p className="text-lg font-semibold text-motus-text">
                De desregulación a agencia compartida
              </p>
            </div>
            <div className="relative px-6 pb-6">
              <div className="relative space-y-0">
                {journeySteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.num} className="relative flex gap-4 pb-6 last:pb-0">
                      {i < journeySteps.length - 1 && (
                        <div className="absolute left-5 top-10 bottom-0 w-px bg-motus-primary/20" />
                      )}
                      <div className="icon-container">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="pt-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-semibold text-motus-primary">{step.num}</span>
                          <span className="text-sm font-medium text-motus-text">{step.label}</span>
                        </div>
                        <p className="mt-0.5 text-xs text-motus-muted">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
