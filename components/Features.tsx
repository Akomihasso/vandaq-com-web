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
            Dört ana modül; her biri diğerini besler ve şirketinizin dijital ikizi üzerinde birlikte çalışır.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Yayılım Haritası – büyük */}
          <div className="col-span-12 lg:col-span-8 glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden relative">
            <div>
              <FeatureIconCircle color="primary">
                <PathIcon />
              </FeatureIconCircle>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-6 mb-3">Yayılım Haritası</h3>
              <p className="text-on-surface-variant max-w-lg leading-relaxed">
                Bir sinyal geldiğinde etkinin firmanızın hangi bileşenlerine, hangi büyüklükte, hangi zincir üzerinden ulaştığını görün.
                Her düğüm ve kenar izlenebilirdir.
              </p>
            </div>
            <FlowGraphic />
          </div>

          {/* Maruziyet Detayı */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-8 border border-border-subtle">
            <FeatureIconCircle color="secondary">
              <InsightIcon />
            </FeatureIconCircle>
            <h3 className="text-xl font-bold mt-6 mb-3">Maruziyet Detayı</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Gelir, maliyet, tedarik, talep, rekabet ve regülasyon etkileri ayrıştırılmış — birbirini götürmez, her kanal görünür.
            </p>
            <ExposureBars />
          </div>

          {/* Strateji Odası */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-3xl p-8 border border-border-subtle">
            <FeatureIconCircle color="warning">
              <BrainIcon />
            </FeatureIconCircle>
            <h3 className="text-xl font-bold mt-6 mb-3">Strateji Odası</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Yapay zekâ destekli aksiyon önerileri, uygulamadan önce grafta simüle edilir. Etki azaltma oranı sayısal olarak doğrulanır.
            </p>
            <StrategyTags />
          </div>

          {/* IP İzleme – dark */}
          <div className="col-span-12 lg:col-span-8 rounded-3xl p-8 md:p-10 bg-inverse-surface text-inverse-on-surface flex items-center justify-between overflow-hidden">
            <div className="max-w-md">
              <FeatureIconCircle color="light">
                <ShieldIcon />
              </FeatureIconCircle>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-6 mb-3">IP & Rakip İzleme</h3>
              <p className="text-outline-variant leading-relaxed">
                Patent, marka, tasarım ve halka arz sinyallerini rakip firma listenizle kesiştirir. Teknolojide geri kalma riskini
                somut sayılara döker.
              </p>
            </div>
            <div className="hidden lg:block relative w-72 h-56 shrink-0">
              <RadarGraphic />
            </div>
          </div>
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
        { x: 20, y: 140, label: "Sinyal" },
        { x: 220, y: 80, label: "Maliyet" },
        { x: 380, y: 55, label: "Gelir" },
        { x: 620, y: 60, label: "CVI" },
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
    { label: "Gelir", pos: 62, neg: 0 },
    { label: "Maliyet", pos: 0, neg: 41 },
    { label: "Tedarik", pos: 12, neg: 22 },
    { label: "Rekabet", pos: 0, neg: 18 },
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
    { l: "Hedge oranını %35'e yükselt", eff: "−12%" },
    { l: "Karbon yoğun tedarikçiyi değiştir", eff: "−18%" },
    { l: "AB pazarında fiyat rejyustmanı", eff: "−9%" },
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
  return (
    <svg viewBox="0 0 240 200" className="w-full h-full" aria-hidden>
      {[40, 70, 100].map((r) => (
        <circle key={r} cx="120" cy="100" r={r} fill="none" stroke="#ffffff" strokeOpacity="0.15" />
      ))}
      <line x1="120" y1="0" x2="120" y2="200" stroke="#ffffff" strokeOpacity="0.15" />
      <line x1="0" y1="100" x2="240" y2="100" stroke="#ffffff" strokeOpacity="0.15" />
      {[
        { cx: 150, cy: 60, r: 5, c: "#22C55E" },
        { cx: 90, cy: 130, r: 4, c: "#F97316" },
        { cx: 170, cy: 130, r: 6, c: "#E24B4A" },
        { cx: 60, cy: 70, r: 3, c: "#b9c3ff" },
      ].map((d, i) => (
        <g key={i}>
          <circle cx={d.cx} cy={d.cy} r={d.r + 6} fill={d.c} fillOpacity="0.18" />
          <circle cx={d.cx} cy={d.cy} r={d.r} fill={d.c} />
        </g>
      ))}
    </svg>
  );
}
