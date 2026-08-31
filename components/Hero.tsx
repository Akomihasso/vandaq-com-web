const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://vandaq-x.com";

export default function Hero() {
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
            Rekabet İstihbarat Teknolojisi Aktif
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold tracking-tight leading-[1.08]">
            Şirketinizi etkileyecek{" "}
            <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
              gelişmeleri önceden görün
            </span>
          </h1>

          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            VANDAQ; para piyasaları, enerji, jeopolitik, iklim ve regülasyon
            sinyallerini <strong className="text-on-surface">şirketinizin dijital ikizi</strong> üzerinde
            işler; genel yorumlar yerine <em>size özel</em> sayısal etki ve strateji üretir.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              15 Gün Ücretsiz Dene
              <ArrowIcon />
            </a>
            <a href="#nasil-calisir" className="btn-ghost">
              <PlayIcon />
              Nasıl Çalıştığını İzle
            </a>
          </div>

          <p className="text-xs text-on-surface-variant/70 pt-1">
            Kredi kartı gerekmez • KVKK/GDPR uyumlu • İstediğiniz zaman iptal
          </p>
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
                Canlı Sinyal Akışı
              </div>
              <div className="hidden sm:flex items-center gap-2 text-white/70 text-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
              </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              {/* CVI — Bileşik İndeks */}
              <div className="relative pt-3">
                <span className="absolute top-0 left-3 text-[10px] uppercase tracking-[0.14em] font-bold bg-primary/70 text-white px-2.5 py-0.5 rounded-full border border-white/20">
                  Bileşik İndeks
                </span>
                <div className="ring-2 ring-white/40 rounded-2xl">
                  <KpiTile
                    label="CVI"
                    subtitle="Kurumsal Kırılganlık"
                    value="0.62"
                    delta="−28%"
                    positive
                    title="Kurumsal Kırılganlık İndeksi (CVI)"
                    desc="EDI, TDI, CSI ve GRI'nin ağırlıklı ortalaması. Şirketinizin dış şoklara karşı genel kırılganlığını 0–1 aralığında ölçer. Düşük değer daha güçlü direnç demektir."
                  />
                </div>
              </div>
              {/* 4 alt indeks */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <KpiTile
                  label="EDI"
                  subtitle="Ekonomik Bağımlılık"
                  value="0.44"
                  delta="−0.9%"
                  positive
                  title="Ekonomik Bağımlılık İndeksi (EDI)"
                  desc="Döviz, faiz, enerji ve emtia gibi ekonomik değişkenlere bağımlılık düzeyinizi gösterir."
                />
                <KpiTile
                  label="TDI"
                  subtitle="Teknoloji Bağımlılık"
                  value="0.51"
                  delta="+3.2%"
                  title="Teknoloji Bağımlılık İndeksi (TDI)"
                  desc="Kritik yazılım, donanım ve dijital altyapılara olan bağımlılığınızı ölçer; teknoloji riskini özetler."
                />
                <KpiTile
                  label="CSI"
                  subtitle="İklim Duyarlılık"
                  value="0.29"
                  delta="+1.8%"
                  title="İklim Duyarlılık İndeksi (CSI)"
                  desc="İklim olayları ve çevresel risklerin (kuraklık, sel, afet, karbon mevzuatı) şirketinize etki yoğunluğu."
                />
                <KpiTile
                  label="GRI"
                  subtitle="Jeopolitik Risk"
                  value="0.37"
                  delta="+5.1%"
                  warn
                  title="Jeopolitik Risk İndeksi (GRI)"
                  desc="Savaş, ambargo, ticaret koridoru kesintileri ve rejim değişiklikleri gibi jeopolitik risklerin firmanıza etki yoğunluğu."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KpiTile({
  label,
  subtitle,
  value,
  delta,
  positive,
  warn,
  title,
  desc,
}: {
  label: string;
  subtitle?: string;
  value: string;
  delta: string;
  positive?: boolean;
  warn?: boolean;
  title: string;
  desc: string;
}) {
  const deltaColor = positive
    ? "text-success"
    : warn
    ? "text-warning"
    : "text-inverse-primary";
  return (
    <div
      className="group relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 px-4 py-3 cursor-help transition hover:bg-white/15 hover:border-white/30"
      tabIndex={0}
      aria-label={`${label} — ${title}: ${desc}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-[0.14em] text-white/70">{label}</span>
          {subtitle && <div className="text-[9px] text-white/50 leading-tight mt-0.5">{subtitle}</div>}
        </div>
        <span className={`text-[11px] font-semibold ${deltaColor}`}>{delta}</span>
      </div>
      <div className="text-2xl md:text-3xl font-black mt-1">{value}</div>

      {/* Tooltip */}
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
