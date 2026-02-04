"use client";

import { SectionShell } from "./SectionShell";
import { pricingCopy, CHECKOUT_URL } from "@/lib/copy";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  return (
    <SectionShell id="pricing" background="soft">
      <div className="space-y-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-motus-text md:text-3xl">
            {pricingCopy.title}
          </h2>
          <p className="mt-3 text-sm text-motus-muted md:text-base">
            {pricingCopy.subtitle}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {pricingCopy.tiers.map((tier) => (
            <Card
              key={tier.id}
              className={`flex flex-col p-6 ${
                tier.highlight
                  ? "border-motus-primary shadow-motusSoft bg-white"
                  : "bg-motus-bg"
              }`}
            >
              <CardHeader className="mb-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <CardTitle>{tier.name}</CardTitle>
                    <p className="mt-1 text-sm text-motus-muted">
                      {tier.priceNote}
                    </p>
                  </div>
                  {tier.highlight && tier.badge && (
                    <Badge className="bg-motus-primary/5 text-motus-primary">
                      {tier.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-4">
                <ul className="space-y-1.5 text-sm text-motus-text">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-motus-primary/70" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3">
                  <Button
                    className="w-full"
                    onClick={() => {
                      if (CHECKOUT_URL && CHECKOUT_URL !== "[[CHECKOUT_URL]]") {
                        window.location.href = CHECKOUT_URL;
                      }
                    }}
                  >
                    Empezar ahora
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

