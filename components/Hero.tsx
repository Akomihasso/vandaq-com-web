"use client";
import { useLanguage } from "@/lib/i18n";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://vandaq-x.com";

export default function Hero() {
  const { content } = useLanguage();
  const c = content.hero;

  return (
    <section className="relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 grid-dot-bg opacity-70 pointer-events-none" aria-hidden />
      <div className="container-narrow pt-10 md:pt-14 pb-8 md:pb-12 relative">
        <div className="max-w-5xl mx-auto text-center space-y-5 animate-fade-in-up">
          <div className="chip mx-auto">
            <span className="relative inline-flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-primary animate-pulse-ring" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
            </span>
            {c.chip}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold tracking-tight leading-[1.08]">
            {c.h1.plain}{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
              {c.h1.highlight}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {c.desc.pre}{" "}
            <strong className="text-on-surface">{c.desc.strong}</strong>{" "}
            {c.desc.mid} <em>{c.desc.em}</em>{" "}
            {c.desc.post}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {c.ctaPrimary}
              <ArrowIcon />
            </a>
            <a href="#nasil-calisir" className="btn-ghost">
              <PlayIcon />
              {c.ctaGhost}
            </a>
          </div>

          <p className="text-xs text-on-surface-variant/70 pt-1">{c.disclaimer}</p>
        </div>

        {/* Video showcase card */}
        <div className="mt-8 md:mt-10 hero-video-wrap aspect-[16/9] max-w-6xl mx-auto animate-fade-in-up">
          <video
            src="/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/ornek-tasarim.png"
          />
          <div className="content h-full w-full flex flex-col justify-between p-6 md:p-10 text-white">
            <div className="flex items-center justify-between">
              <div className="chip !bg-white/10 !border-white/20 !text-white">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                {c.liveSignal}
              </div>
              <div className="hidden sm:flex items-center gap-2 text-white/70 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
              </div>
            </div>

            <div className="flex items-stretch gap-2 md:gap-3">
              {/* CVI — sol, bileşik */}
              <div className="relative flex-none w-[120px] md:w-[140px] pt-4">
                <span className="absolute top-0 left-2 text-[8px] uppercase tracking-wider font-bold bg-primary/70 text-white px-2 py-0.5 rounded-full border border-white/20 whitespace-nowrap">
                  {c.compositeIndex}
                </span>
                <div className="ring-2 ring-white/40 rounded-xl h-full">
                  <KpiTile
                    label="CVI"
                    subtitle={c.kpi.cvi.subtitle}
                    value="0.62"
                    delta="−28%"
                    positive
                    compact
                    title={c.kpi.cvi.title}
                    desc={c.kpi.cvi.desc}
                  />
                </div>
              </div>
              {/* Ayırıcı */}
              <div className="w-px self-stretch bg-white/25 rounded-full flex-none" />
              {/* 4 alt indeks — sağ */}
              <div className="grid grid-cols-2 gap-2 flex-1">
                <KpiTile label="EDI" subtitle={c.kpi.edi.subtitle} value="0.44" delta="−0.9%" positive compact title={c.kpi.edi.title} desc={c.kpi.edi.desc} />
                <KpiTile label="TDI" subtitle={c.kpi.tdi.subtitle} value="0.51" delta="+3.2%" compact title={c.kpi.tdi.title} desc={c.kpi.tdi.desc} />
                <KpiTile label="CSI" subtitle={c.kpi.csi.subtitle} value="0.29" delta="+1.8%" compact title={c.kpi.csi.title} desc={c.kpi.csi.desc} />
                <KpiTile label="GRI" subtitle={c.kpi.gri.subtitle} value="0.37" delta="+5.1%" warn compact title={c.kpi.gri.title} desc={c.kpi.gri.desc} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KpiTile({
  label, subtitle, value, delta, positive, warn, compact, title, desc,
}: {
  label: string; subtitle?: string; value: string; delta: string;
  positive?: boolean; warn?: boolean; compact?: boolean; title: string; desc: string;
}) {
  const deltaColor = positive ? "text-success" : warn ? "text-warning" : "text-inverse-primary";
  return (
    <div
      className={`group relative rounded-xl bg-white/10 backdrop-blur-md border border-white/15 cursor-help transition hover:bg-white/15 hover:border-white/30 ${compact ? "px-3 py-2" : "px-4 py-3"}`}
      tabIndex={0}
      aria-label={`${label} — ${title}: ${desc}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[9px] uppercase tracking-[0.14em] text-white/70">{label}</span>
          {subtitle && <div className="text-[8px] text-white/50 leading-tight mt-0.5">{subtitle}</div>}
        </div>
        <span className={`text-[10px] font-semibold ${deltaColor}`}>{delta}</span>
      </div>
      <div className={`font-black mt-1 ${compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"}`}>{value}</div>
      <div
        role="tooltip"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 max-w-[85vw] rounded-xl bg-inverse-surface text-white text-xs leading-relaxed px-4 py-3 shadow-2xl border border-white/10 opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 z-20"
      >
        <div className="font-bold text-white mb-1">{title}</div>
        <div className="text-white/80">{desc}</div>
        <span className="absolute left-1/2 -translate-x-1/2 top-full w-2.5 h-2.5 -mt-1 rotate-45 bg-inverse-surface border-r border-b border-white/10" />
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
