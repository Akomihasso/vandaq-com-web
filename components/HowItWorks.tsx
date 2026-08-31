"use client";
import { useLanguage } from "@/lib/i18n";

export default function HowItWorks() {
  const { content } = useLanguage();
  const c = content.howItWorks;

  return (
    <section id="nasil-calisir" className="py-24 md:py-32 bg-white">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="chip mx-auto">{c.chip}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {c.h2.pre} <span className="text-primary">{c.h2.highlight}</span>.
          </h2>
          <p className="text-on-surface-variant text-lg">{c.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {c.steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-3xl border border-border-subtle p-8 bg-gradient-to-br from-white to-app-bg hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <div className="absolute -top-4 -left-2 text-7xl md:text-8xl font-black text-primary/10 leading-none select-none">
                {s.n}
              </div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3">
          {/* CVI — Bileşik İndeks */}
          <div className="relative pt-3">
            <span className="absolute top-0 left-3 text-[10px] uppercase tracking-[0.14em] font-bold bg-primary text-white px-2.5 py-0.5 rounded-full">
              {c.compositeIndexBadge}
            </span>
            <div className="rounded-2xl p-5 bg-primary/5 border-2 border-primary/30 text-center">
              <div className="text-2xl font-black text-primary">{c.compositeIndexLabel}</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-on-surface-variant mt-1">
                {c.compositeIndexDesc}
              </div>
            </div>
          </div>
          {/* 4 alt indeks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.subIndices.map((i) => (
              <div key={i.l} className="rounded-2xl p-5 bg-app-bg border border-border-subtle text-center">
                <div className="text-xl font-black text-primary">{i.l}</div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-on-surface-variant mt-1">{i.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
