"use client";
import { useLanguage } from "@/lib/i18n";

export default function Testimonials() {
  const { content } = useLanguage();
  const c = content.testimonials;

  return (
    <section className="py-24 md:py-32 bg-app-bg overflow-hidden">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="chip mx-auto">{c.chip}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{c.h2}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {c.items.map((t) => (
            <figure
              key={t.sector}
              className="rounded-3xl bg-white border border-border-subtle p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <Stars />
              <blockquote className="mt-4 text-on-surface leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border-subtle">
                <div className="font-bold text-on-surface">{t.sector}</div>
                <div className="text-caption text-primary/80 mt-0.5 tracking-wide">{t.signal}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-1 text-warning">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
