"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { pricingCopy, trustCopy, CHECKOUT_URL } from "@/lib/copy";
import { Button } from "@/components/ui/button";
import { Check, Award } from "lucide-react";
import { MOTION, sectionReveal, cardReveal } from "@/lib/motion";

export function PricingSection() {
  return (
    <SectionShell id="pricing" background="highlight" separatorTop>
      <div className="space-y-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={sectionReveal}
          className="max-w-2xl"
        >
          <div className="accent-line" />
          <h2 className="text-xl font-semibold tracking-tight text-motus-text sm:text-2xl md:text-3xl">
            Inversión en tu <span className="text-gradient">formación</span>
          </h2>
          <p className="mt-2 text-sm font-medium text-motus-text md:text-base">
            {pricingCopy.valueProposition}
          </p>
          <p className="mt-1 text-sm text-motus-text-secondary md:text-base">
            {pricingCopy.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardReveal}
          transition={{ delay: 0.06 }}
          className="mx-auto max-w-lg"
        >
          <div className="relative overflow-hidden rounded-2xl border border-motus-primary/20 bg-white p-5 shadow-card ring-1 ring-motus-primary/10 transition-all duration-200 hover:shadow-primary-soft hover:ring-motus-primary/15 sm:p-8">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7B2FF2] to-[#C084FC]" aria-hidden />
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-semibold text-motus-text sm:text-lg md:text-xl">
                  {pricingCopy.programName}
                </h3>
                <p className="mt-1 text-xs text-motus-text-secondary sm:text-sm">
                  {pricingCopy.priceNote}
                </p>
              </div>
              {/* Precio principal muy destacado */}
              <div className="flex flex-wrap items-baseline gap-1.5 rounded-xl bg-motus-primary-subtle/60 py-3 px-4 sm:py-4 sm:px-5">
                <span className="text-3xl font-bold tracking-tight text-motus-primary sm:text-4xl md:text-[2.5rem]">
                  ${pricingCopy.price}
                </span>
                <span className="text-base font-medium text-motus-text-secondary sm:text-lg">
                  {pricingCopy.currency}
                </span>
                <span className="w-full text-xs text-motus-text-secondary sm:w-auto sm:text-sm">
                  — pago único
                </span>
              </div>
              <ul className="space-y-2.5 text-sm text-motus-text">
                {pricingCopy.features.map((feature, i) => (
                  <li key={feature} className="flex gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-motus-primary-light">
                      <Check className="h-3 w-3 text-motus-primary" aria-hidden />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full transition-transform duration-200 active:scale-[0.98]"
                size="lg"
                showArrow
                onClick={() => {
                  if (CHECKOUT_URL && CHECKOUT_URL !== "[[CHECKOUT_URL]]") {
                    window.location.href = CHECKOUT_URL;
                  }
                }}
              >
                {pricingCopy.primaryCta}
              </Button>
              <p className="text-center text-xs text-motus-text-secondary">
                {pricingCopy.belowButtonText}
              </p>
            </div>
          </div>

          {/* Add-on certificado: opcional y claro */}
          <div className="mt-5 flex flex-col gap-4 rounded-xl border border-dashed border-motus-primary/25 bg-motus-primary-subtle/50 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-motus-primary-light">
                <Award className="h-4 w-4 text-motus-primary" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-medium text-motus-text">
                  {pricingCopy.certificateAddOn.label}
                </p>
                <p className="text-xs text-motus-text-secondary">
                  Add-on opcional: {pricingCopy.certificateAddOn.description}
                </p>
              </div>
            </div>
            <p className="text-lg font-semibold text-motus-text whitespace-nowrap">
              +${pricingCopy.certificateAddOn.price} {pricingCopy.certificateAddOn.currency}
            </p>
          </div>

          <p className="mt-4 text-center text-xs text-motus-muted">
            {pricingCopy.policyNote}
          </p>
          <p className="mt-2 text-center text-xs text-motus-muted italic">
            {pricingCopy.urgencyNote}
          </p>

          {/* Qué pasa después de comprar */}
          <div className="mt-8 rounded-xl border border-motus-border bg-white/80 p-5">
            <h4 className="text-sm font-semibold text-motus-text">
              {trustCopy.whatHappensTitle}
            </h4>
            <p className="mt-1 text-xs text-motus-text-secondary">
              {trustCopy.whatHappensSubtitle}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-motus-text">
              {trustCopy.whatHappensAfter.map((step, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-motus-primary-light text-xs font-semibold text-motus-primary">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
