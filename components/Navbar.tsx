"use client";

import { CHECKOUT_URL, ctaCopy } from "@/lib/copy";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";

const navLinks = [
  { label: "Temario", id: "temario" },
  { label: "Precios", id: "pricing" },
  { label: "FAQ", id: "faq" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-motus-border/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 min-[360px]:px-5 sm:px-6">
        <a
          href="/"
          className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-motus-primary/40 focus-visible:ring-offset-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7B2FF2] to-[#C084FC] shadow-glow-sm">
            <Brain className="h-4 w-4 text-white" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-motus-text">
              MotusDAO
            </span>
            <span className="text-[11px] text-motus-text-secondary">
              Academia clínica
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-0.5 text-sm font-medium text-motus-text-secondary md:flex">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              type="button"
              className="rounded-lg px-3 py-2 transition-colors hover:text-motus-primary hover:bg-motus-primary-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-motus-primary/40 focus-visible:ring-offset-2"
              onClick={() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {label}
            </button>
          ))}
        </nav>

        <Button
          size="sm"
          showArrow
          className="shrink-0"
          onClick={() => {
            if (CHECKOUT_URL && CHECKOUT_URL !== "[[CHECKOUT_URL]]") {
              window.location.href = CHECKOUT_URL;
            }
          }}
        >
          {ctaCopy.primary}
        </Button>
      </div>
    </header>
  );
}
