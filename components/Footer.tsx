import Image from "next/image";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://vandaq-x.com";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="VANDAQ" width={36} height={36} className="rounded-xl" />
              <span className="text-xl font-extrabold">VANDAQ</span>
            </div>
            <p className="text-outline-variant max-w-md text-sm leading-relaxed">
              Kurumsal Dijital İkiz ve Stratejik Etki Analiz Platformu.
              Dışarıdaki her sinyalin, sizin şirketinize ne kadar dokunduğunu somut olarak hesaplıyoruz.
            </p>
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-inverse-primary transition-colors"
            >
              VANDAQ-X uygulamasına git
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <FooterCol
            title="Platform"
            links={[
              { l: "Global İzleme", h: "#izleme" },
              { l: "Teknolojik Üstünlük", h: "#ozellikler" },
              { l: "Nasıl Çalışır", h: "#nasil-calisir" },
              { l: "Fiyatlandırma", h: "#fiyatlandirma" },
            ]}
          />
          <FooterCol
            title="Kurumsal"
            links={[
              { l: "Hakkımızda", h: "#hakkinda" },
              { l: "İletişim", h: "#iletisim" },
              { l: "Gizlilik Politikası", h: "/gizlilik" },
              { l: "KVKK", h: "/kvkk" },
              { l: "Kullanım Koşulları", h: "/kosullar" },
            ]}
          />
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-outline-variant">
          <p>© {year} VANDAQ Digital Twin. Tüm hakları saklıdır.</p>
          <p>
            VANDAQ, dünyada ilk ve tek olan patentli VANDAQ-X projesinin yürütücüsüdür.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { l: string; h: string }[] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-white/70 font-semibold mb-4">{title}</div>
      <ul className="space-y-2.5 text-sm">
        {links.map((li) => (
          <li key={li.l}>
            <a href={li.h} className="text-outline-variant hover:text-white transition-colors">
              {li.l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
