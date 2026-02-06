"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
};

interface SectionShellProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "default" | "soft";
}

export function SectionShell({
  id,
  children,
  className = "",
  background = "default"
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`${
        background === "soft"
          ? "glass-subtle"
          : "bg-transparent"
      }`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        variants={sectionVariants}
        className={`mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-24 ${className}`}
      >
        {children}
      </motion.div>
    </section>
  );
}

