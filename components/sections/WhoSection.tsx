"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { whoCopy } from "@/lib/copy";
import { Check, X } from "lucide-react";

import { MOTION, containerStagger } from "@/lib/motion";

const itemReveal = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: MOTION.duration.normal, ease: MOTION.easeOut }
  }
};

export function WhoSection() {
  return (
    <SectionShell id="para-quien" background="soft" separatorTop={false}>
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <div className="accent-line" />
          <h2 className="text-2xl font-semibold tracking-tight text-motus-text md:text-3xl">
            {whoCopy.title.split(" no es ")[0]}
            <span className="text-gradient"> no es </span>
            {whoCopy.title.split(" no es ")[1]}
          </h2>
          <p className="mt-3 text-sm text-motus-text-secondary md:text-base">
            {whoCopy.intro}
          </p>
        </div>

        <motion.div
          className="grid gap-8 text-sm md:text-base"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-motus-primary">
              Es para ti si…
            </p>
            <ul className="space-y-2.5 text-motus-text">
              {whoCopy.for.map((entry) => (
                <motion.li
                  key={entry}
                  variants={itemReveal}
                  className="flex gap-2.5"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-motus-primary-light">
                    <Check className="h-3 w-3 text-motus-primary" />
                  </span>
                  <span>{entry}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-motus-muted">
              No es para ti si…
            </p>
            <ul className="space-y-2.5 text-motus-text-secondary">
              {whoCopy.notFor.map((entry) => (
                <motion.li
                  key={entry}
                  variants={itemReveal}
                  className="flex gap-2.5"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100">
                    <X className="h-3 w-3 text-motus-muted" />
                  </span>
                  <span>{entry}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}
