"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { sectionReveal } from "@/lib/motion";

interface SectionShellProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "soft" | "highlight";
  /** Separador sutil en borde superior (alternancia visual) */
  separatorTop?: boolean;
}

const backgroundClass: Record<NonNullable<SectionShellProps["background"]>, string> = {
  default: "bg-white",
  soft: "section-soft",
  highlight: "section-highlight"
};

export function SectionShell({
  id,
  children,
  className = "",
  background = "default",
  separatorTop = false
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`relative ${backgroundClass[background]}`}
    >
      {separatorTop && <div className="section-separator" aria-hidden />}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionReveal}
        className={`mx-auto max-w-5xl px-4 py-16 sm:px-5 sm:py-20 md:px-6 md:py-24 lg:py-28 ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
