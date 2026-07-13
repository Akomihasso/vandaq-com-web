import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  subtitle,
  updatedAt,
  children,
}: {
  title: string;
  subtitle?: string;
  updatedAt: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="pt-topbar-height bg-app-bg">
        <section className="container-narrow py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10 pb-8 border-b border-border-subtle">
              <span className="chip">Yasal</span>
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
              {subtitle && (
                <p className="mt-3 text-on-surface-variant text-lg leading-relaxed">{subtitle}</p>
              )}
              <p className="mt-4 text-sm text-on-surface-variant/70">
                Son güncelleme: {updatedAt}
              </p>
            </div>
            <article className="legal-prose">{children}</article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
