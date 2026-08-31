export default function About() {
  return (
    <section id="hakkinda" className="py-24 md:py-32 bg-app-bg">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="chip">VANDAQ Nedir?</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Sektör yorumu değil, <span className="text-primary">firmaya özel etki ölçümü</span>.
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              VANDAQ, global rekabet ortamında yurt içinde ve yurt dışında gelişen olayların firmanın rekabetine
              etki derecesini ölçmek için 100&apos;den fazla veri kaynağını takip eden, firmaya pozitif ve
              negatif, doğrudan veya dolaylı etkisini hesaplayan bir firma dijital ikiz projesidir.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Tüm dünyada yapılan genel ekonomik, sektörel veya belli bir bölgeye özgü tahminlerden öte
              firmaya özel etki derecesi ölçülmektedir. Firma, bu sayede piyasadan çok önce bazı etki
              sinyallerini alıp rekabet stratejisini geliştirmekte, risklerden korunmakta, fırsatlardan
              faydalanabilmektedir.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              VANDAQ, bilindiği kadarıyla dünyada ilk olan bu teknolojinin ilk piyasa uygulaması olan ve
              sistemi ile yöntemi{" "}
              <strong className="text-on-surface">patent hakları ile korunan VANDAQ-X</strong>{" "}
              projesinin yürütücüsüdür.
            </p>

            {/* Sayısal özet */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <StatTile value="100+" label="Veri kaynağı" />
              <StatTile value="6" label="Ana sinyal grubu" />
              <StatTile value="6" label="Firmaya etki grubu" />
              <StatTile value="4 + CVI" label="İndeks (bileşik + alt)" />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl p-8 bg-inverse-surface text-inverse-on-surface relative overflow-hidden">
              <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute -left-16 -top-16 w-56 h-56 rounded-full bg-secondary/30 blur-3xl" />
              <div className="relative">
                <div className="text-white/60 text-xs uppercase tracking-[0.18em] mb-2">Teknolojimiz</div>
                <h3 className="text-2xl font-extrabold mb-6">Dijital İkiz Firma ile Rekabet İstihbaratı</h3>

                <ul className="space-y-5">
                  <TechItem
                    title="Gerçek Zamanlı Yayılım"
                    body="100'den fazla veri sinyali ile heterojen olaylarda zincirleme etki hesabı."
                  />
                  <TechItem
                    title="Firma Bazında Etki ve Derecelendirme"
                    body="Veri sinyallerinin firmadan firmaya değişen etkisinin hesaplanması ve firmaya özgü gerçeğe yakın etki şiddetinin tahmini."
                  />
                  <TechItem
                    title="Senaryo ve Strateji Üretimi"
                    body="Gerçek veriler ile gerçeğe yakın senaryolar ve yapay zeka destekli strateji ve karar destek sistemi."
                  />
                  <TechItem
                    title="Hibrit Entegrasyon"
                    body="Sadece para piyasaları, emtialar ve borsalar değil; jeopolitik gelişmeler, regülasyonlar, iklim ve tabiat olaylarının API bağlantıları ile anlık veri elde edilmesi ve hibrit olarak hesaba katılması."
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

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl p-5 bg-white border border-border-subtle">
      <div className="text-2xl font-black text-primary">{value}</div>
      <div className="text-caption text-on-surface-variant mt-1">{label}</div>
    </div>
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
