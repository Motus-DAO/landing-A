"use client";

import { motion } from "framer-motion";
import { finalCtaCopy, CHECKOUT_URL } from "@/lib/copy";
import { MOTION, sectionReveal } from "@/lib/motion";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section id="final-cta" className="cta-gradient-bg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={sectionReveal}
        className="mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-24 text-center"
      >
        <div className="mx-auto max-w-2xl space-y-5">
          <div className="mx-auto accent-line" style={{ margin: "0 auto 16px auto" }} />
          <h2 className="text-2xl font-semibold tracking-tight text-motus-text md:text-3xl">
            {finalCtaCopy.title}
          </h2>
          <p className="text-sm text-motus-text-secondary md:text-base">
            {finalCtaCopy.subtitle}
          </p>
          <div className="pt-2">
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
              {finalCtaCopy.primaryCta}
            </Button>
          </div>
          <p className="text-xs text-motus-muted">
            {finalCtaCopy.trustLine}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
