export default function Features() {
  return (
    <section id="ozellikler" className="py-24 md:py-32 bg-app-bg">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="chip mx-auto">Ne Yapıyoruz</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Sadece veri değil, <span className="text-primary">uygulanabilir strateji</span>.
          </h2>
          <p className="text-on-surface-variant text-lg">
            Dört ana modül, 6 temel veri kaynağından 100'ün üzerinde sinyal alınır ve şirketinize etkisi hesaplanır.
            <br className="hidden md:block" />
            Genel piyasa yorumları değil, şirkete özel veriler üretilir. Şirket karar vericileri bu özel veriler ile{" "}
            <strong className="text-on-surface">risk veya fırsat sinyallerini görür, rekabet stratejilerine yön verirler.</strong>
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Yayılım Haritası – büyük */}
          <div className="col-span-12 lg:col-span-8 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden relative">
            <div>
              <FeatureIconCircle color="primary">
                <PathIcon />
              </FeatureIconCircle>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-6 mb-3">Veri Sinyalleri ve Yayılım Haritası</h3>
              <p className="text-on-surface-variant max-w-lg leading-relaxed">
                Yurt içinde veya yurt dışında firmanıza etki edebilecek herhangi bir sinyal geldiğinde, firmanızla ilgili hangi
                bileşenlere, hangi büyüklükte, hangi zincir üzerinden ulaştığı görülebilir. Her bir düğüm (etki odağı) ve
                kenar (etki derecesi) izlenebilir.
              </p>
            </div>
            <FlowGraphic />
          </div>

          {/* Maruziyet Detayı */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-8 border border-border-subtle">
            <FeatureIconCircle color="secondary">
              <InsightIcon />
            </FeatureIconCircle>
            <h3 className="text-xl font-bold mt-6 mb-3">Firmaya Etki ve Derecesi</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Maliyet, Gelir, Talep ve Pazar, Teknoloji, Rekabet ve Regülasyon etkileri; pozitif ve negatif olarak her bir etki derecesi ölçüsünde görülür.
            </p>
            <ExposureBars />
          </div>

          {/* Strateji Odası */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-8 border border-border-subtle">
            <FeatureIconCircle color="warning">
              <BrainIcon />
            </FeatureIconCircle>
            <h3 className="text-xl font-bold mt-6 mb-3">Senaryolar & Strateji</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              O ana kadar gelişmeler ışığında muhtemel senaryolar tahmin edilebilir. Yapay zekâ destekli aksiyon önerileri uygulamadan önce grafta simüle edilir; etki azaltma oranı sayısal olarak doğrulanır.
            </p>
            <StrategyTags />
          </div>

          {/* IP İzleme – dark */}
          <div className="col-span-12 lg:col-span-8 rounded-3xl p-8 md:p-10 bg-inverse-surface text-inverse-on-surface flex items-center justify-between overflow-hidden">
            <div className="max-w-md">
              <FeatureIconCircle color="light">
                <ShieldIcon />
              </FeatureIconCircle>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-6 mb-3">Rakip İzleme ve IP</h3>
              <p className="text-outline-variant leading-relaxed">
                Rakipleriniz veya sektörünüzdeki gelişmeler, yeni ürün ve teknoloji lansmanları, halka açılmalar,
                patent, marka ve tasarım başvuruları izlenir. Muhtemel tehdit ve fırsatlar sayısallaştırılarak sunulur.
              </p>
            </div>
            <div className="hidden lg:block relative w-72 h-56 shrink-0">
              <RadarGraphic />
            </div>
          </div>
        </div>

        {/* What-if soru bloğu */}
        <div className="mt-14 rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-10">
          <div className="mb-6">
            <span className="chip">Kendinize Sorun</span>
            <h3 className="text-xl md:text-2xl font-extrabold mt-4 tracking-tight">
              VANDAQ-X bu soruların hepsini <span className="text-primary">sayısal olarak yanıtlar</span>
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Dolar %10 yükselirse kârlılığım nasıl etkilenir? Üretim maliyetim ve ihracat artışım ne olur?",
              "Enerji fiyatları artarsa hangi ürün grubum daha fazla etkilenir?",
              "Yeni bir AB düzenlemesi ihracatımı ve maliyetimi nasıl değiştirir?",
              "Made in EU ile Çinli tedarikçim değişir mi? Tedarikçimi değiştirirsem riskim ne kadar azalır?",
              "Hürmüz Boğazı krizi tedarik zincirim etkiler mi?",
              "Rakibimin yeni patent başvurusu hangi ürün grubumu etkileyebilir?",
            ].map((q) => (
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

function FeatureIconCircle({
  color,
  children,
}: {
  color: "primary" | "secondary" | "warning" | "light";
  children: React.ReactNode;
}) {
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

function FlowGraphic() {
  return (
    <svg
      className="mt-8 w-full"
      viewBox="0 0 640 180"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="fg" x1="0" x2="1">
          <stop offset="0" stopColor="#2c4cd7" stopOpacity="0.9" />
          <stop offset="1" stopColor="#6b38d4" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <path
        d="M20,140 C120,120 160,90 220,80 S320,40 380,55 S520,110 620,60"
        stroke="url(#fg)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {[
        { x: 20, y: 140, label: "İran-US Krizi" },
        { x: 220, y: 80, label: "Hürmüz Boğazı" },
        { x: 380, y: 55, label: "Tedarik Zinciri" },
        { x: 620, y: 60, label: "Maliyet" },
      ].map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r="7" fill="#fff" stroke="#2c4cd7" strokeWidth="2" />
          <text x={n.x + 12} y={n.y - 8} fontSize="11" fill="#444655" fontWeight="600">
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function ExposureBars() {
  const rows = [
    { label: "Maliyet", pos: 0, neg: 41 },
    { label: "Gelir", pos: 62, neg: 0 },
    { label: "Talep/Pazar", pos: 18, neg: 12 },
    { label: "Teknoloji", pos: 0, neg: 14 },
    { label: "Rekabet", pos: 0, neg: 18 },
    { label: "Regülasyon", pos: 0, neg: 29 },
  ];
  return (
    <div className="mt-6 space-y-2.5">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center gap-3 text-xs">
          <span className="w-14 text-on-surface-variant">{r.label}</span>
          <div className="flex-1 flex items-center h-4 rounded-full bg-surface-container-low overflow-hidden">
            <div
              className="h-full bg-danger/70"
              style={{ width: `${r.neg}%`, marginLeft: `${50 - r.neg}%` }}
            />
            <div className="h-full bg-success/80" style={{ width: `${r.pos}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function StrategyTags() {
  const tags = [
    { l: "Döviz artışı hızlanıyor → alacaklarını dövize endeksle", eff: "−14%" },
    { l: "CBAM etkisi artıyor → yeşil kredi ile yatırım yap", eff: "−18%" },
    { l: "Made in Europe geliyor → AB müşteri görüşmelerini artır", eff: "−9%" },
  ];
  return (
    <ul className="mt-6 space-y-2.5">
      {tags.map((t) => (
        <li
          key={t.l}
          className="flex items-center justify-between text-xs bg-app-bg rounded-xl px-3 py-2.5 border border-border-subtle"
        >
          <span className="truncate">{t.l}</span>
          <span className="text-success font-semibold shrink-0 ml-2">{t.eff}</span>
        </li>
      ))}
    </ul>
  );
}

function RadarGraphic() {
  const signals = [
    { cx: 150, cy: 60, r: 5, c: "#22C55E", label: "Rakip patent" },
    { cx: 90, cy: 130, r: 4, c: "#F97316", label: "Halka açılıyor" },
    { cx: 170, cy: 130, r: 6, c: "#E24B4A", label: "Yeni rakip giriyor" },
    { cx: 60, cy: 70, r: 3, c: "#b9c3ff", label: "Marka tescili" },
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
            {d.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
