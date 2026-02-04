"use client";

import { CHECKOUT_URL } from "@/lib/copy";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-motus-border/70 bg-motus-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-motus-primary/80 to-motus-accent/80" />
          <div className="flex flex-col">
            <span className="font-heading text-sm font-semibold tracking-tight text-motus-text">
              MotusDAO
            </span>
            <span className="text-[11px] text-motus-muted">
              Academia clínica
            </span>
          </div>
        </div>
        <nav className="hidden items-center gap-5 text-xs font-medium text-motus-muted md:flex">
          <button
            className="transition-colors hover:text-motus-text"
            onClick={() => {
              const el = document.getElementById("temario");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Ver temario
          </button>
          <button
            className="transition-colors hover:text-motus-text"
            onClick={() => {
              const el = document.getElementById("pricing");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Precios
          </button>
          <button
            className="transition-colors hover:text-motus-text"
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

