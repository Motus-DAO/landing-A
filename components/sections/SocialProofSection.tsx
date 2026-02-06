import { SectionShell } from "./SectionShell";
import { socialProofCopy } from "@/lib/copy";
import { Card, CardContent } from "@/components/ui/card";

export function SocialProofSection() {
  return (
    <SectionShell id="social" background="soft">
      <div className="space-y-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-motus-textLight md:text-3xl">
            <span className="text-holo">{socialProofCopy.title}</span>
          </h2>
          <p className="mt-3 text-sm text-motus-textLight/70 md:text-base">
            {socialProofCopy.subtitle}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {socialProofCopy.items.map((item, index) => (
            <Card key={`${item.name}-${index}`} className="flex flex-col p-5">
              <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed text-motus-textLight/90">
                  {item.quote}
                </p>
                <div className="space-y-0.5 text-xs">
                  <p className="font-medium text-motus-textLight">{item.name}</p>
                  <p className="text-motus-textLight/70">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="rounded-motus glass-subtle border border-dashed border-white/20 px-4 py-4 text-center text-xs text-motus-textLight/60 md:text-sm">
          {socialProofCopy.logosTitle}. Próximamente: logos e instituciones colaboradoras.
        </div>
      </div>
    </SectionShell>
  );
}

