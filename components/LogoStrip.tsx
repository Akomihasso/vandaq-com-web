"use client";
import { useLanguage } from "@/lib/i18n";

export default function LogoStrip() {
  const { content } = useLanguage();
  const c = content.logoStrip;

  return (
    <section className="py-10 border-y border-border-subtle bg-white/60 backdrop-blur-sm">
      <div className="container-narrow">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-on-surface-variant/70 mb-6">
          {c.label}
        </p>
        <div className="marquee-mask overflow-hidden">
          <div className="flex gap-10 animate-marquee w-max">
            {[...c.items, ...c.items].map((label, i) => (
              <div
                key={`${label}-${i}`}
                className="shrink-0 text-on-surface-variant/80 text-sm font-semibold whitespace-nowrap flex items-center gap-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
