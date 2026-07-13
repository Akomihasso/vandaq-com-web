"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Beklenmeyen hata");
      if (json.emailError) {
        setStatus("error");
        setMessage(
          `Talebiniz kaydedildi ancak e-posta bildirimi gönderilemedi (${json.emailError}). Ekibimiz kayıt üzerinden size dönüş yapacaktır.`,
        );
      } else {
        setStatus("ok");
        setMessage(
          json.userAckSent
            ? "Talebiniz iletildi. E-posta adresinize teşekkür mesajı gönderdik."
            : "Talebiniz iletildi. En kısa sürede dönüş yapacağız.",
        );
        form.reset();
      }
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Bir hata oluştu");
    }
  }

  return (
    <section id="iletisim" className="py-24 md:py-32 bg-white">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-10">
            <div>
              <span className="chip">İletişim</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
                Firmanıza özel bir <span className="text-primary">demo</span> ayarlayalım
              </h2>
              <p className="text-on-surface-variant text-lg mt-4">
                Bize firmanızın operasyonel yapısını kısaca anlatın; 24 saat içinde firmaya özel
                dijital ikiz demosuyla dönüş yapalım.
              </p>
            </div>

            <div className="space-y-6">
              <ContactRow icon="mail" title="E-posta" value="bilgi@vandaq.com" href="mailto:bilgi@vandaq.com" />
              <ContactRow icon="phone" title="Telefon / WhatsApp" value="+90 537 952 62 22" href="tel:+905379526222" />
              <ContactRow icon="pin" title="Adres" value={<>Nispetiye Cad. No:6 Levent İş Merkezi<br/>Etiler, İstanbul</>} />
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-app-bg rounded-3xl p-8 border border-border-subtle shadow-xl space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field name="name" label="Ad Soyad" placeholder="Adınız Soyadınız" required />
              <Field name="email" type="email" label="E-posta" placeholder="ornek@sirket.com" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field name="company" label="Şirket" placeholder="Şirket adınız" />
              <div>
                <label className="block text-label text-on-surface-variant mb-2 uppercase tracking-wider">Konu</label>
                <select
                  name="subject"
                  defaultValue="Bilgi"
                  className="w-full bg-white border border-border-subtle rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                >
                  <option>İş Birliği</option>
                  <option>Bilgi</option>
                  <option>Öneri</option>
                  <option>Diğer</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-label text-on-surface-variant mb-2 uppercase tracking-wider">Mesajınız</label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Size nasıl yardımcı olabiliriz?"
                className="w-full bg-white border border-border-subtle rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
              />
            </div>
            <label className="flex items-start gap-3 text-xs text-on-surface-variant">
              <input type="checkbox" name="kvkk" required className="mt-0.5 w-4 h-4 rounded border-border-subtle" />
              <span>
                KVKK Aydınlatma Metni'ni okudum, iletişim bilgilerimin bu talep kapsamında işlenmesini kabul ediyorum.
              </span>
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full btn-primary !rounded-2xl !py-4 disabled:opacity-60"
            >
              {status === "sending" ? "Gönderiliyor..." : "Talebi Gönder"}
            </button>
            {status === "ok" && (
              <div className="rounded-xl bg-success/10 text-success text-sm px-4 py-3">{message}</div>
            )}
            {status === "error" && (
              <div className="rounded-xl bg-danger/10 text-danger text-sm px-4 py-3">{message}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-label text-on-surface-variant mb-2 uppercase tracking-wider">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-white border border-border-subtle rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
      />
    </div>
  );
}

function ContactRow({
  icon,
  title,
  value,
  href,
}: {
  icon: "mail" | "phone" | "pin";
  title: string;
  value: React.ReactNode;
  href?: string;
}) {
  const wrap = (children: React.ReactNode) =>
    href ? (
      <a href={href} className="text-on-surface hover:text-primary transition-colors">
        {children}
      </a>
    ) : (
      <span className="text-on-surface">{children}</span>
    );

  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary grid place-items-center shrink-0">
        {icon === "mail" && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 7l9 6 9-6M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        )}
        {icon === "phone" && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        )}
        {icon === "pin" && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        )}
      </div>
      <div>
        <div className="text-caption uppercase tracking-wider text-on-surface-variant">{title}</div>
        <div className="text-base mt-0.5 leading-snug">{wrap(value)}</div>
      </div>
    </div>
  );
}
