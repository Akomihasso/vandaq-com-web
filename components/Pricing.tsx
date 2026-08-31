const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://vandaq-x.com";

const plans = [
  {
    name: "Başlangıç",
    price: "95",
    period: "Euro/ay",
    badge: undefined,
    features: [
      "Kurumsal kırılganlık indeksi (CVI)",
      "+4 Temel kırılganlık indeksi",
      "Maliyet Etkisi izlenmesi",
      "Gelir Etkisi izlenmesi",
      "Talep Etkisi izlenmesi",
      "TCMB döviz + emtia sinyal akışları",
      "3 Kritik olay grubu sinyalinin anında bildirimi",
      "Haftalık Rapor",
      "E-Posta bildirimi",
    ],
    cta: "Hemen Başla",
    highlight: false,
  },
  {
    name: "Profesyonel",
    price: "175",
    period: "Euro/ay",
    badge: undefined,
    features: [
      "Kurumsal kırılganlık indeksi (CVI)",
      "+4 Temel kırılganlık indeksi",
      "Maliyet Etkisi izlenmesi",
      "Gelir Etkisi izlenmesi",
      "Jeopolitik Etkisi izlenmesi",
      "Tedarik Etkisi izlenmesi",
      "Rekabet ve IP etkisi izlenmesi",
      "Regülasyon etkisi izlenmesi",
      "TCMB döviz + emtia sinyal akışları",
      "Tüm diğer sinyal akışlarının izlenmesi",
      "9 Kritik olay grubunun sinyalinin anında bildirimi",
      "Senaryo ve Strateji üretimi",
      "Haftalık Rapor",
      "PDF Raporu",
      "E-Posta bildirimi",
    ],
    cta: "15 Gün Ücretsiz Dene",
    highlight: true,
  },
  {
    name: "Profesyonel + Ek Kullanıcı",
    price: "175",
    priceSub: "+ 35 Euro/kullanıcı",
    period: "Euro/ay",
    badge: undefined,
    features: [
      "Kurumsal kırılganlık indeksi (CVI)",
      "+4 Temel kırılganlık indeksi",
      "Maliyet Etkisi izlenmesi",
      "Gelir Etkisi izlenmesi",
      "Jeopolitik Etkisi izlenmesi",
      "Tedarik Etkisi izlenmesi",
      "Rekabet ve IP etkisi izlenmesi",
      "Regülasyon etkisi izlenmesi",
      "TCMB döviz + emtia sinyal akışları",
      "Tüm diğer sinyal akışlarının izlenmesi",
      "9 Kritik olay grubunun sinyalinin anında bildirimi",
      "Senaryo ve Strateji üretimi",
      "Haftalık Rapor",
      "PDF Raporu",
      "E-Posta bildirimi",
    ],
    cta: "İletişime Geç",
    highlight: false,
  },
  {
    name: "Grup Şirketleri",
    price: "175",
    priceSub: "+ 35 €/kullanıcı × 0,35 ek şirket",
    period: "Euro/ay",
    badge: undefined,
    features: [
      "Kurumsal kırılganlık indeksi (CVI)",
      "+4 Temel kırılganlık indeksi",
      "Maliyet Etkisi izlenmesi",
      "Gelir Etkisi izlenmesi",
      "Jeopolitik Etkisi izlenmesi",
      "Tedarik Etkisi izlenmesi",
      "Rekabet ve IP etkisi izlenmesi",
      "Regülasyon etkisi izlenmesi",
      "TCMB döviz + emtia sinyal akışları",
      "Tüm diğer sinyal akışlarının izlenmesi",
      "9 Kritik olay grubunun sinyalinin anında bildirimi",
      "Senaryo ve Strateji üretimi",
      "Haftalık Rapor",
      "PDF Raporu",
      "E-Posta bildirimi",
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
              <div>
                <div className={`text-[11px] uppercase tracking-[0.15em] font-semibold ${p.highlight ? "text-white/80" : "text-on-surface-variant"}`}>
                  {p.name}
                </div>
                <div className="mt-4 mb-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-black">{p.price}</span>
                    <span className={`text-sm font-semibold ${p.highlight ? "text-white/80" : "text-on-surface-variant"}`}>
                      {p.period}
                    </span>
                  </div>
                  {"priceSub" in p && p.priceSub && (
                    <div className={`text-[11px] mt-1 leading-tight ${p.highlight ? "text-white/70" : "text-on-surface-variant"}`}>
                      {p.priceSub}
                    </div>
                  )}
                </div>
                <div className="mb-6" />
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
                href={p.cta === "İletişime Geç" ? "#iletisim" : APP_URL}
                target={p.cta === "İletişime Geç" ? undefined : "_blank"}
                rel={p.cta === "İletişime Geç" ? undefined : "noopener noreferrer"}
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
