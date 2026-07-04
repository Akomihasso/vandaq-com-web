const steps = [
  {
    n: "01",
    title: "Kurumsal Dijital İkizinizi Oluşturun",
    desc: "İhracat oranı, döviz pozisyonu, kritik hammaddeler, rakipler — band bazlı, hassas veri istenmez. Sistem, firma DNA'nızı çıkarır.",
  },
  {
    n: "02",
    title: "Sinyaller Sürekli Akar",
    desc: "TCMB, EIA, ECB, EPO, TÜRKPATENT ve haber akışları 7/24 toplanır ve heterojen olay grafında normalize edilir.",
  },
  {
    n: "03",
    title: "Etki Firmanıza Göre Hesaplanır",
    desc: "Wₙ = Wₙ₋₁ × kₙ formülü ile zincirleme etkiler yayılır. Her sinyal, sizin katsayılarınıza göre farklı yön ve büyüklük üretir.",
  },
  {
    n: "04",
    title: "Strateji Önerisi + Simülasyon",
    desc: "Kritik eşik aşılırsa AI aksiyon önerir; grafta simüle edilir. \"Bu strateji CVI'ı %28 düşürür\" gibi somut sonuç verilir.",
  },
];

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="py-24 md:py-32 bg-white">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="chip mx-auto">Nasıl Çalışır</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Dört katman, tek bir <span className="text-primary">bilgi akışı</span>.
          </h2>
          <p className="text-on-surface-variant text-lg">
            Kullanıcının firma profilinden başlar, sinyalleri işler ve size özel stratejiye ulaşır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s) => (
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

        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { l: "CVI", d: "Kurumsal Kırılganlık" },
            { l: "EDI", d: "Ekonomik Bağımlılık" },
            { l: "TDI", d: "Teknoloji Bağımlılık" },
            { l: "CSI", d: "İklim Duyarlılık" },
            { l: "GRI", d: "Jeopolitik Risk" },
          ].map((i) => (
            <div key={i.l} className="rounded-2xl p-5 bg-app-bg border border-border-subtle text-center">
              <div className="text-2xl font-black text-primary">{i.l}</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-on-surface-variant mt-1">
                {i.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
