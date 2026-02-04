import { SectionShell } from "./SectionShell";
import { includedCopy } from "@/lib/copy";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function IncludedSection() {
  return (
    <SectionShell id="incluye">
      <div className="space-y-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-motus-text md:text-3xl">
            {includedCopy.title}
          </h2>
          <p className="mt-3 text-sm text-motus-muted md:text-base">
            Todo lo que necesitas para integrar los modelos en tu práctica, sin perderte en teoría infinita.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {includedCopy.items.map((item) => (
            <Card key={item.title} className="flex flex-col p-5">
              <CardHeader>
                <Badge className="mb-2">{item.badge}</Badge>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="mt-auto">
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

