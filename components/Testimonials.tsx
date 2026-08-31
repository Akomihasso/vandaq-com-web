const items = [
  {
    sector: "TEKSTİL İHRACATÇISI",
    signal: "DÖVİZ KURU SİNYALİ",
    quote:
      "EUR/TRY paritesindeki ani dalgalanmalar ve pamuk fiyatlarındaki artış sinyallerini VANDAQ-X sayesinde piyasadan önce aldık. Alacaklarımızı dövize endeksleyip hammadde tedarikimizi erkene çekerek çeyrek bazlı kârlılığımızı koruduk.",
  },
  {
    sector: "ALÜMİNYUM ÜRETİCİSİ",
    signal: "CBAM / KARBON VERGİSİ SİNYALİ",
    quote:
      "CBAM ve COP31 kapsamındaki ek maliyet risklerini VANDAQ-X ile simüle ettik. Yeşil kredi imkânlarını kullanarak yaptığımız yatırım sayesinde AB pazarındaki rekabet gücümüzü kaybetmedik.",
  },
  {
    sector: "OTOMOTİV YAN SANAYİ",
    signal: "MADE IN EU SİNYALİ",
    quote:
      "AB'nin Made in EU düzenlemesi henüz taslak aşamasındayken VANDAQ-X'in regülasyon sinyalleri sayesinde durumdan haberdar olduk. Tedarik zincirimizi ve yerlilik oranımızı hızla revize ederek Avrupalı ana sanayi müşterilerimizle sözleşmelerimizi riske atmadık.",
  },
  {
    sector: "LOJİSTİK FİRMASI",
    signal: "HÜRMÜZ BOĞAZI / JEOPOLİTİK KRİZ SİNYALİ",
    quote:
      "Hürmüz Boğazı'ndaki gerilimin navlun ve yakıt maliyetlerimize zincirleme etkisini VANDAQ-X ile sayısallaştırdık. Alternatif rota ve kontratlı navlun anlaşmalarına erken geçerek müşterilerimize kesintisiz hizmet sunduk.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-app-bg overflow-hidden">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="chip mx-auto">Referanslar</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Somut kararlar, ölçülebilir sonuçlar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((t) => (
            <figure
              key={t.sector}
              className="rounded-3xl bg-white border border-border-subtle p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <Stars />
              <blockquote className="mt-4 text-on-surface leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border-subtle">
                <div className="font-bold text-on-surface">{t.sector}</div>
                <div className="text-caption text-primary/80 mt-0.5 tracking-wide">{t.signal}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-1 text-warning">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
