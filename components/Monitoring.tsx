const categories = [
  {
    icon: "coin",
    title: "Para Piyasaları",
    desc: "Döviz kurları, faiz, tahvil getirileri ve küresel likidite akışları.",
    color: "primary",
  },
  {
    icon: "leaf",
    title: "Enerji & Emtia",
    desc: "Petrol, doğalgaz, elektrik, bakır, çelik ve tarımsal emtia volatilitesi.",
    color: "warning",
  },
  {
    icon: "globe",
    title: "Jeopolitik & Savaşlar",
    desc: "Çatışmalar, ambargolar, ticaret gerilimleri ve tedarik zinciri koridorları.",
    color: "secondary",
  },
  {
    icon: "gavel",
    title: "Vergi & Regülasyon",
    desc: "CBAM, karbon vergisi, Made in Europe, KDV ve sektörel düzenlemeler.",
    color: "success",
  },
  {
    icon: "cloud",
    title: "İklim & Doğal Olaylar",
    desc: "Kuraklık, sel, tayfun, orman yangını ve tarım/lojistik etkileri.",
    color: "info",
  },
  {
    icon: "patent",
    title: "Rakip & IP Sinyalleri",
    desc: "Patent, marka, halka arz, iflas ve yeni ürün duyuruları.",
    color: "danger",
  },
];

const bg: Record<string, string> = {
  primary: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white",
  warning: "bg-warning/10 text-warning group-hover:bg-warning group-hover:text-white",
  secondary: "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white",
  success: "bg-success/10 text-success group-hover:bg-success group-hover:text-white",
  info: "bg-info/10 text-info group-hover:bg-info group-hover:text-white",
  danger: "bg-danger/10 text-danger group-hover:bg-danger group-hover:text-white",
};

export default function Monitoring() {
  return (
    <section id="izleme" className="py-24 md:py-32 bg-white">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="chip mx-auto">Tüm Sinyalleri İzliyoruz</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Şirketiniz ile ilgili olabilecek <span className="text-primary">en önemli sinyalleri</span> izliyor ve şirketinize etkisini ölçüyoruz.
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Tek bir haber kanalı değil, birbiriyle konuşan altı ayrı dünya. Her sinyal, firmanızın
            profiline göre ayrı yönlerde ve büyüklüklerde işlenir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-3xl p-7 bg-app-bg border border-border-subtle hover:border-primary/30 hover:shadow-[0_20px_50px_-30px_rgba(44,76,215,0.35)] transition-all"
            >
              <div className={`w-12 h-12 rounded-xl grid place-items-center mb-5 transition-colors ${bg[c.color]}`}>
                <Icon name={c.icon} />
              </div>
              <h3 className="text-lg font-bold mb-2">{c.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{c.desc}</p>
              <div className="mt-6 flex items-center text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Detayları gör
                <span className="ml-1.5">→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl p-6 md:p-8 bg-gradient-to-br from-primary to-secondary text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <p className="text-white/80 text-xs uppercase tracking-[0.18em] font-semibold mb-2">
              24/7 Kesintisiz Analiz
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold leading-tight">
              Sinyal geldiği anda, etkisi hesaplanır. Kritik eşik aşılınca bildirim size ulaşır.
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <Stat label="Sinyal Kaynağı" value="120+" />
            <Stat label="Ort. Tepki" value="<3 sn" />
            <Stat label="Sunucu Uptime" value="%99.9" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-black leading-none">{value}</div>
      <div className="text-[11px] uppercase tracking-[0.14em] text-white/70 mt-1.5">{label}</div>
    </div>
  );
}

function Icon({ name }: { name: string }) {
  const p = "M";
  switch (name) {
    case "coin":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 7v10M9 9h5.5a1.5 1.5 0 0 1 0 3H9m0 0h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "leaf":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M20 4c-8 0-14 5-14 12 0 2 1 3 3 3 7 0 12-6 12-14 0-.5-.5-1-1-1zM6 19c1-4 4-8 9-10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "globe":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "gavel":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M14 4l6 6M10 8l6 6-3 3-6-6 3-3zM4 20h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "cloud":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M7 18a5 5 0 1 1 1.9-9.6A6 6 0 0 1 20 12a4 4 0 0 1-2 7H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "patent":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3l8 4v5c0 5-4 8-8 9-4-1-8-4-8-9V7l8-4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return <span>{p}</span>;
  }
}
