export default function About() {
  return (
    <section id="hakkinda" className="py-24 md:py-32 bg-app-bg">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="chip">VANDAQ Nedir?</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Sektör yorumu değil, <span className="text-primary">firma-özel matematik</span>.
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              VANDAQ, modern işletmeler için geliştirilmiş bir <strong>Kurumsal Dijital İkiz</strong> ve
              ekonomik strateji platformudur. Bloomberg, Reuters ve Palantir sektör düzeyinde
              analiz üretir; VANDAQ, aynı sinyalin <em>sizin</em> ihracat oranınıza, döviz pozisyonunuza ve
              karbon yoğunluğunuza göre <em>gerçek etkisini</em> hesaplar.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              VANTAGE-X patentinin (Haziran 2026) üzerine inşa edilen gelişmiş buluş olarak
              6769 Sayılı SMK ve EPC kapsamında patent süreci yürütülmektedir.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4 max-w-md">
              <div>
                <div className="text-3xl font-black text-primary">%37</div>
                <div className="text-caption text-on-surface-variant mt-1">
                  Sektör düzeyi tahminlerin firma düzeyinde sapması
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary">6</div>
                <div className="text-caption text-on-surface-variant mt-1">
                  Farklı sinyal ailesi, tek mekanizmada
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-primary">5</div>
                <div className="text-caption text-on-surface-variant mt-1">
                  Kırılganlık indeksi
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-8 bg-inverse-surface text-inverse-on-surface relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute -left-16 -top-16 w-56 h-56 rounded-full bg-secondary/30 blur-3xl" />
              <div className="relative">
                <div className="text-white/60 text-xs uppercase tracking-[0.18em] mb-2">Teknolojimiz</div>
                <h3 className="text-2xl font-extrabold mb-6">Kurumsal Dijital İkiz Motoru</h3>

                <ul className="space-y-5">
                  <TechItem
                    title="Gerçek Zamanlı Yayılım"
                    body="Heterojen olay grafı üzerinde Wₙ = Wₙ₋₁ × kₙ ile zincirleme etki hesaplanır."
                  />
                  <TechItem
                    title="Firma Bazında Kalibrasyon"
                    body="Gerçekleşen vs. öngörülen etkiler karşılaştırılır; katsayılar firma özelinde öğrenir."
                  />
                  <TechItem
                    title="Simülasyon-Öncelikli Strateji"
                    body="Her öneri, uygulanmadan grafta simüle edilir; etki azaltma oranı sayısal olarak verilir."
                  />
                  <TechItem
                    title="Hibrit Entegrasyon"
                    body="TCMB, EIA, ECB, EPO, TÜRKPATENT; ERP (SAP, Logo) ve haber akışları API üzerinden bağlanır."
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechItem({ title, body }: { title: string; body: string }) {
  return (
    <li className="flex gap-4">
      <span className="shrink-0 mt-1 w-8 h-8 rounded-lg bg-white/10 grid place-items-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div>
        <div className="font-bold text-white">{title}</div>
        <div className="text-sm text-outline-variant leading-relaxed mt-1">{body}</div>
      </div>
    </li>
  );
}
