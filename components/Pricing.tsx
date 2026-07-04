const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://vandaq-x.com";

const plans = [
  {
    name: "Bireysel",
    price: "750",
    period: "TL/ay",
    features: [
      "1 firma dijital ikizi",
      "Temel 5 kırılganlık indeksi",
      "TCMB döviz + emtia akışı",
      "Günlük özet raporu",
      "E-posta bildirim",
    ],
    cta: "Hemen Başla",
    highlight: false,
  },
  {
    name: "Kurumsal · Tek Kişi",
    price: "1.550",
    period: "TL/ay",
    features: [
      "Tüm Bireysel özellikler",
      "Maruziyet detayı (Gelir/Maliyet)",
      "Yayılım haritası",
      "Strateji odası",
      "PDF raporlar",
    ],
    cta: "Hemen Başla",
    highlight: false,
  },
  {
    name: "Kurumsal · 3 Kullanıcı",
    price: "2.250",
    period: "TL/ay",
    badge: "Popüler",
    features: [
      "3 eş zamanlı oturum",
      "IP izleme radarı",
      "Senaryo odası (what-if)",
      "AI strateji önerileri",
      "Özel müşteri temsilcisi",
    ],
    cta: "15 Gün Ücretsiz Dene",
    highlight: true,
  },
  {
    name: "Grup Şirketi",
    price: "7.500",
    period: "TL/ay",
    features: [
      "Sınırsız kullanıcı",
      "Çok firma yönetimi",
      "ERP/API entegrasyonu",
      "Konsolide grup raporu",
      "SSO / SLA",
    ],
    cta: "İletişime Geç",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="fiyatlandirma" className="py-24 md:py-32 bg-white">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
          <span className="chip mx-auto">Fiyatlandırma</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Şirketinizin ölçeğine göre <span className="text-primary">esnek planlar</span>
          </h2>
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-1.5 rounded-full text-sm font-semibold">
            <CheckIcon /> 15 gün ücretsiz deneme · Kart gerektirmez
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all ${
                p.highlight
                  ? "bg-gradient-to-br from-primary to-secondary text-white shadow-2xl shadow-primary/20 lg:-translate-y-3 lg:scale-[1.03] z-10"
                  : "bg-white border border-border-subtle hover:shadow-xl hover:-translate-y-1"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-[11px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-primary/20 shadow-sm">
                  {p.badge}
                </span>
              )}
              <div>
                <div className={`text-[11px] uppercase tracking-[0.15em] font-semibold ${p.highlight ? "text-white/80" : "text-on-surface-variant"}`}>
                  {p.name}
                </div>
                <div className="flex items-baseline gap-1 mt-4 mb-6">
                  <span className="text-4xl md:text-5xl font-black">{p.price}</span>
                  <span className={`text-sm font-semibold ${p.highlight ? "text-white/80" : "text-on-surface-variant"}`}>
                    {p.period}
                  </span>
                </div>
                <ul className={`space-y-3 text-sm ${p.highlight ? "text-white/90" : "text-on-surface"}`}>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckMark highlight={p.highlight} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={p.name === "Grup Şirketi" ? "#iletisim" : APP_URL}
                target={p.name === "Grup Şirketi" ? undefined : "_blank"}
                rel={p.name === "Grup Şirketi" ? undefined : "noopener noreferrer"}
                className={`mt-10 text-center py-3.5 rounded-2xl font-semibold transition-all ${
                  p.highlight
                    ? "bg-white text-primary hover:shadow-xl"
                    : "border border-primary/25 text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-on-surface-variant mt-8">
          Tüm fiyatlara KDV dahil değildir. Yıllık ödemede %15 indirim.
        </p>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckMark({ highlight }: { highlight?: boolean }) {
  return (
    <span
      className={`shrink-0 w-4 h-4 rounded-full grid place-items-center mt-0.5 ${
        highlight ? "bg-white/25 text-white" : "bg-primary/10 text-primary"
      }`}
    >
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
        <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
