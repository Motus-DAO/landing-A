"use client";

import { motion } from "framer-motion";
import { SectionShell } from "./SectionShell";
import { whoLeadsCopy } from "@/lib/copy";
import { sectionReveal } from "@/lib/motion";
import { UserCircle } from "lucide-react";

export function WhoLeadsSection() {
  return (
    <SectionShell id="quien-lidera" background="default" separatorTop>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionReveal}
        className="mx-auto max-w-2xl"
      >
        <div className="accent-line" />
        <h2 className="text-2xl font-semibold tracking-tight text-motus-text md:text-3xl">
          {whoLeadsCopy.title}
        </h2>
        <p className="mt-3 text-sm text-motus-text-secondary md:text-base">
          {whoLeadsCopy.subtitle}
        </p>
        <div className="mt-6 flex flex-col gap-4 rounded-xl border border-motus-border bg-white p-5 shadow-card sm:flex-row sm:items-start sm:gap-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-motus-primary-subtle">
            <UserCircle className="h-7 w-7 text-motus-primary" aria-hidden />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-semibold text-motus-text">{whoLeadsCopy.name}</p>
            <p className="text-xs font-medium text-motus-primary sm:text-sm">
              {whoLeadsCopy.role}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-motus-text-secondary">
              {whoLeadsCopy.bio}
            </p>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}
