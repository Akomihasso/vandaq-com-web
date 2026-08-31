"use client";
import { useLanguage } from "@/lib/i18n";

export default function Features() {
  const { content } = useLanguage();
  const c = content.features;

  return (
    <section id="ozellikler" className="py-24 md:py-32 bg-app-bg">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="chip mx-auto">{c.chip}</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {c.h2.pre} <span className="text-primary">{c.h2.highlight}</span>.
          </h2>
          <p className="text-on-surface-variant text-lg">
            {c.desc.pre}{" "}
            <strong className="text-on-surface">{c.desc.strong}</strong>
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Yayılım Haritası – büyük */}
          <div className="col-span-12 lg:col-span-8 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden relative">
            <div>
              <FeatureIconCircle color="primary"><PathIcon /></FeatureIconCircle>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-6 mb-3">{c.modules.flow.title}</h3>
              <p className="text-on-surface-variant max-w-lg leading-relaxed">{c.modules.flow.desc}</p>
            </div>
            <FlowGraphic nodes={c.flowNodes} />
          </div>

          {/* Firmaya Etki ve Derecesi */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-8 border border-border-subtle">
            <FeatureIconCircle color="secondary"><InsightIcon /></FeatureIconCircle>
            <h3 className="text-xl font-bold mt-6 mb-3">{c.modules.exposure.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{c.modules.exposure.desc}</p>
            <ExposureBars rowLabels={c.exposureRows} />
          </div>

          {/* Senaryolar & Strateji */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-8 border border-border-subtle">
            <FeatureIconCircle color="warning"><BrainIcon /></FeatureIconCircle>
            <h3 className="text-xl font-bold mt-6 mb-3">{c.modules.strategy.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{c.modules.strategy.desc}</p>
            <StrategyTags tags={c.strategyTags} />
          </div>

          {/* Rakip İzleme ve IP – dark */}
          <div className="col-span-12 lg:col-span-8 rounded-3xl p-8 md:p-10 bg-inverse-surface text-inverse-on-surface flex items-center justify-between overflow-hidden">
            <div className="max-w-md">
              <FeatureIconCircle color="light"><ShieldIcon /></FeatureIconCircle>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-6 mb-3">{c.modules.ip.title}</h3>
              <p className="text-outline-variant leading-relaxed">{c.modules.ip.desc}</p>
            </div>
            <div className="hidden lg:block relative w-72 h-56 shrink-0">
              <RadarGraphic labels={c.radarLabels} />
            </div>
          </div>
        </div>

        {/* What-if soru bloğu */}
        <div className="mt-14 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-10">
          <div className="mb-6">
            <span className="chip">{c.whatif.chip}</span>
            <h3 className="text-xl md:text-2xl font-extrabold mt-4 tracking-tight">
              {c.whatif.h3.pre} <span className="text-primary">{c.whatif.h3.highlight}</span>
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {c.whatif.questions.map((q) => (
              <li key={q} className="flex items-start gap-3 bg-white/70 rounded-2xl px-4 py-3 border border-border-subtle text-sm text-on-surface leading-relaxed">
                <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/10 text-primary grid place-items-center text-xs font-bold">?</span>
                {q}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeatureIconCircle({ color, children }: { color: "primary" | "secondary" | "warning" | "light"; children: React.ReactNode }) {
  const cls = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    warning: "bg-warning/10 text-warning",
    light: "bg-white/10 text-white",
  }[color];
  return <div className={`w-12 h-12 rounded-xl grid place-items-center ${cls}`}>{children}</div>;
}

function PathIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 20l6-6 4 4 6-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="20" r="1.6" fill="currentColor" />
      <circle cx="10" cy="14" r="1.6" fill="currentColor" />
      <circle cx="14" cy="18" r="1.6" fill="currentColor" />
      <circle cx="20" cy="8" r="1.6" fill="currentColor" />
    </svg>
  );
}
function InsightIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function BrainIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M9 4a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5 3 3 0 0 0 2 5v1a3 3 0 0 0 6 0V4a3 3 0 0 0-3 0zM15 4a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5 3 3 0 0 1-2 5v1a3 3 0 0 1-6 0" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3l8 4v5c0 5-4 8-8 9-4-1-8-4-8-9V7l8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function FlowGraphic({ nodes }: { nodes: string[] }) {
  const positions = [
    { x: 20, y: 140 },
    { x: 220, y: 80 },
    { x: 380, y: 55 },
    { x: 620, y: 60 },
  ];
  return (
    <svg className="mt-8 w-full" viewBox="0 0 640 180" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="fg" x1="0" x2="1">
          <stop offset="0" stopColor="#2c4cd7" stopOpacity="0.9" />
          <stop offset="1" stopColor="#6b38d4" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path d="M20,140 C120,120 160,90 220,80 S320,40 380,55 S520,110 620,60" stroke="url(#fg)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {nodes.map((label, i) => (
        <g key={label}>
          <circle cx={positions[i].x} cy={positions[i].y} r="7" fill="#fff" stroke="#2c4cd7" strokeWidth="2" />
          <text x={positions[i].x + 12} y={positions[i].y - 8} fontSize="11" fill="#444655" fontWeight="600">{label}</text>
        </g>
      ))}
    </svg>
  );
}

function ExposureBars({ rowLabels }: { rowLabels: string[] }) {
  const values = [
    { pos: 0, neg: 41 },
    { pos: 62, neg: 0 },
    { pos: 18, neg: 12 },
    { pos: 0, neg: 14 },
    { pos: 0, neg: 18 },
    { pos: 0, neg: 29 },
  ];
  return (
    <div className="mt-6 space-y-2.5">
      {rowLabels.map((label, i) => (
        <div key={label} className="flex items-center gap-3 text-xs">
          <span className="w-14 text-on-surface-variant">{label}</span>
          <div className="flex-1 flex items-center h-4 rounded-full bg-surface-container-low overflow-hidden">
            <div className="h-full bg-danger/70" style={{ width: `${values[i].neg}%`, marginLeft: `${50 - values[i].neg}%` }} />
            <div className="h-full bg-success/80" style={{ width: `${values[i].pos}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function StrategyTags({ tags }: { tags: Array<{ l: string; eff: string }> }) {
  return (
    <ul className="mt-6 space-y-2.5">
      {tags.map((t) => (
        <li key={t.l} className="flex items-center justify-between text-xs bg-app-bg rounded-xl px-3 py-2.5 border border-border-subtle">
          <span className="truncate">{t.l}</span>
          <span className="text-success font-semibold shrink-0 ml-2">{t.eff}</span>
        </li>
      ))}
    </ul>
  );
}

function RadarGraphic({ labels }: { labels: string[] }) {
  const signals = [
    { cx: 150, cy: 60, r: 5, c: "#22C55E" },
    { cx: 90, cy: 130, r: 4, c: "#F97316" },
    { cx: 170, cy: 130, r: 6, c: "#E24B4A" },
    { cx: 60, cy: 70, r: 3, c: "#b9c3ff" },
  ];
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full" aria-hidden>
      {[40, 70, 100].map((r) => (
        <circle key={r} cx="120" cy="100" r={r} fill="none" stroke="#ffffff" strokeOpacity="0.15" />
      ))}
      <line x1="120" y1="0" x2="120" y2="200" stroke="#ffffff" strokeOpacity="0.15" />
      <line x1="0" y1="100" x2="240" y2="100" stroke="#ffffff" strokeOpacity="0.15" />
      {signals.map((d, i) => (
        <g key={i}>
          <circle cx={d.cx} cy={d.cy} r={d.r + 6} fill={d.c} fillOpacity="0.18" />
          <circle cx={d.cx} cy={d.cy} r={d.r} fill={d.c} />
          <text x={d.cx + d.r + 8} y={d.cy + 4} fontSize="8" fill="#ffffff" fillOpacity="0.75">
            {labels[i]}
          </text>
        </g>
      ))}
    </svg>
  );
}
