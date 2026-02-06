"use client";

import { CHECKOUT_URL } from "@/lib/copy";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 glass-strong border-b border-white/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg holo-gradient shadow-glow-primary" />
          <div className="flex flex-col">
            <span className="font-heading text-sm font-semibold tracking-tight text-motus-textLight">
              MotusDAO
            </span>
            <span className="text-[11px] text-motus-textLight/70">
              Academia clínica
            </span>
          </div>
        </div>
        <nav className="hidden items-center gap-5 text-xs font-medium text-motus-textLight/80 md:flex">
          <button
            className="rounded py-1.5 px-2 transition-colors hover:text-motus-textLight hover:text-holo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-motus-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-motus-bg"
            onClick={() => {
              const el = document.getElementById("temario");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Ver temario
          </button>
          <button
            className="rounded py-1.5 px-2 transition-colors hover:text-motus-textLight hover:text-holo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-motus-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-motus-bg"
            onClick={() => {
              const el = document.getElementById("pricing");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Precios
          </button>
          <button
            className="rounded py-1.5 px-2 transition-colors hover:text-motus-textLight hover:text-holo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-motus-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-motus-bg"
            onClick={() => {
              const el = document.getElementById("faq");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            FAQ
          </button>
        </nav>
        <Button
          size="sm"
          onClick={() => {
            if (CHECKOUT_URL && CHECKOUT_URL !== "[[CHECKOUT_URL]]") {
              window.location.href = CHECKOUT_URL;
            }
          }}
        >
          Empezar ahora
        </Button>
      </div>
    </header>
  );
}

