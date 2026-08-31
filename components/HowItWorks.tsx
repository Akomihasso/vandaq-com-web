const steps = [
  {
    n: "01",
    title: "Firmanızın Temel Yapısı ve Risk Alanlarını Belirleyin",
    desc: "Firmanız için önemli olabilecek dünyadaki gelişmeleri değerlendirebilmek için sır olmayan bilgiler, izlenmesi ve değerlendirilmesi elzem olan veriler ve sinyaller belirlenir.",
  },
  {
    n: "02",
    title: "Veri Sinyalleri Sürekli Akar",
    desc: "Merkez bankaları ve kurlar, enerji ajansı verileri, borsalar, emtia fiyatları, ekonomik haber kanalları, regülasyon ve düzenlemeler, patent ve marka ofisleri, siyasi olay ve kararlar olmak üzere 100'den fazla veri sinyali 7/24 toplanır ve heterojen olay olarak sayısallaştırılır.",
  },
  {
    n: "03",
    title: "Her Veri Sinyalinin Firmaya Göre Etkisi Hesaplanır",
    desc: "VANDAQ-X sisteminin can alıcı yanlarından biri olan ve sistem mantığı patent başvurusu ile korunan formüller ile zincirleme etkiler hesaplanır. Her sinyalin firmaya göre farklı pozitif veya negatif etkisi ile etki derecesi sayısallaştırılır ve riskler belirlenir.",
  },
  {
    n: "04",
    title: "Senaryolar ve Strateji Önerisi",
    desc: "Firma için toplanan veriler ile muhtemel senaryolar üretilebilir; kritik eşik aşılırsa yapay zeka destekli öneriler ve simülasyonlar yapılır. \"Bu strateji maliyet etkisini %28 düşürür\" gibi somut sonuçlar üretilebilir.",
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

        <div className="mt-14 flex flex-col gap-3">
          {/* CVI — Bileşik İndeks */}
          <div className="relative pt-3">
            <span className="absolute top-0 left-3 text-[10px] uppercase tracking-[0.14em] font-bold bg-primary text-white px-2.5 py-0.5 rounded-full">
              Bileşik İndeks
            </span>
            <div className="rounded-2xl p-5 bg-primary/5 border-2 border-primary/30 text-center">
              <div className="text-2xl font-black text-primary">CVI İndeksi</div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-on-surface-variant mt-1">
                Kurumsal Kırılganlık — EDI + TDI + CSI + GRI ağırlıklı ortalaması
              </div>
            </div>
          </div>
          {/* 4 alt indeks */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { l: "EDI İndeksi", d: "Ekonomik Bağımlılık" },
              { l: "TDI İndeksi", d: "Teknoloji Bağımlılık" },
              { l: "CSI İndeksi", d: "İklim Duyarlılık" },
              { l: "GRI İndeksi", d: "Jeopolitik Risk" },
            ].map((i) => (
              <div key={i.l} className="rounded-2xl p-5 bg-app-bg border border-border-subtle text-center">
                <div className="text-xl font-black text-primary">{i.l}</div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-on-surface-variant mt-1">
                  {i.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
