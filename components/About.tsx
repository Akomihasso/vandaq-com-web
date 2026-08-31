"use client";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { content } = useLanguage();
  const c = content.about;

  return (
    <section id="hakkinda" className="py-24 md:py-32 bg-app-bg">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="chip">{c.chip}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {c.h2.pre} <span className="text-primary">{c.h2.highlight}</span>.
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">{c.para1}</p>
            <p className="text-on-surface-variant leading-relaxed">{c.para2}</p>
            <p className="text-on-surface-variant leading-relaxed">
              {c.para3.pre}{" "}
              <strong className="text-on-surface">{c.para3.strong}</strong>{" "}
              {c.para3.post}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {c.stats.map((s) => (
                <StatTile key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-8 bg-inverse-surface text-inverse-on-surface relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute -left-16 -top-16 w-56 h-56 rounded-full bg-secondary/30 blur-3xl" />
              <div className="relative">
                <div className="text-white/60 text-xs uppercase tracking-[0.18em] mb-2">{c.tech.label}</div>
                <h3 className="text-2xl font-extrabold mb-6">{c.tech.title}</h3>
                <ul className="space-y-5">
                  {c.tech.items.map((item) => (
                    <TechItem key={item.title} title={item.title} body={item.body} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl p-5 bg-white border border-border-subtle">
      <div className="text-2xl font-black text-primary">{value}</div>
      <div className="text-caption text-on-surface-variant mt-1">{label}</div>
    </div>
  );
}

function TechItem({ title, body }: { title: string; body: string }) {
  return (
    <li className="flex gap-4">
      <span className="shrink-0 mt-1 w-8 h-8 rounded-lg bg-white/10 grid place-items-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div>
        <div className="font-bold text-white">{title}</div>
        <div className="text-sm text-outline-variant leading-relaxed mt-1">{body}</div>
      </div>
    </li>
  );
}
