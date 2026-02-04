import { SectionShell } from "./SectionShell";
import { whoCopy } from "@/lib/copy";

export function WhoSection() {
  return (
    <SectionShell id="para-quien" background="soft">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-motus-text md:text-3xl">
            {whoCopy.title}
          </h2>
          <p className="mt-3 text-sm text-motus-muted md:text-base">
            Queremos que sepas rápidamente si este espacio está alineado con tu
            práctica y tu momento profesional.
          </p>
        </div>

        <div className="grid gap-6 text-sm md:text-base">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-motus-muted">
              Es para ti si…
            </p>
            <ul className="space-y-1.5 text-motus-text">
              {whoCopy.for.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-motus-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-motus-muted">
              No es para ti si…
            </p>
            <ul className="space-y-1.5 text-motus-muted">
              {whoCopy.notFor.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-motus-border" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

