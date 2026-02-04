import { SectionShell } from "./SectionShell";
import { socialProofCopy } from "@/lib/copy";
import { Card, CardContent } from "@/components/ui/card";

export function SocialProofSection() {
  return (
    <SectionShell id="social" background="soft">
      <div className="space-y-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-motus-text md:text-3xl">
            {socialProofCopy.title}
          </h2>
          <p className="mt-3 text-sm text-motus-muted md:text-base">
            {socialProofCopy.subtitle}
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {socialProofCopy.items.map((item, index) => (
            <Card key={`${item.name}-${index}`} className="flex flex-col p-5">
              <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed text-motus-text">
                  {item.quote}
                </p>
                <div className="space-y-0.5 text-xs">
                  <p className="font-medium text-motus-text">{item.name}</p>
                  <p className="text-motus-muted">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="rounded-motus border border-dashed border-motus-border bg-motus-bg px-4 py-3 text-xs text-motus-muted md:text-sm">
          {socialProofCopy.logosTitle}: espacio para logos o nombres de
          instituciones con las que MotusDAO haya colaborado.
        </div>
      </div>
    </SectionShell>
  );
}

