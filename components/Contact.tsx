"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

type Status = "idle" | "sending" | "ok" | "error";

export default function Contact() {
  const { content } = useLanguage();
  const c = content.contact;
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
      if (!res.ok) throw new Error(json.error || c.messages.genericError);
      if (json.emailError) {
        setStatus("error");
        setMessage(c.messages.emailError.replace("{error}", json.emailError));
      } else {
        setStatus("ok");
        setMessage(json.userAckSent ? c.messages.okWithAck : c.messages.okNoAck);
        form.reset();
      }
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : c.messages.genericError);
    }
  }

  return (
    <section id="iletisim" className="py-24 md:py-32 bg-white">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-10">
            <div>
              <span className="chip">{c.chip}</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
                <span className="text-primary">{c.h2.primary}</span> {c.h2.rest}
              </h2>
              <p className="text-on-surface-variant text-lg mt-4">{c.desc}</p>
            </div>

            <div className="space-y-6">
              <ContactRow icon="mail" title={c.rows.email.title} value={c.rows.email.value} href={c.rows.email.href} />
              <ContactRow icon="phone" title={c.rows.phone.title} value={c.rows.phone.value} href={c.rows.phone.href} />
              <ContactRow icon="pin" title={c.rows.address.title} value={<>{c.rows.address.line1}<br />{c.rows.address.line2}</>} />
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-app-bg rounded-3xl p-8 border border-border-subtle shadow-xl space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field name="name" label={c.form.name.label} placeholder={c.form.name.placeholder} required />
              <Field name="email" type="email" label={c.form.email.label} placeholder={c.form.email.placeholder} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field name="company" label={c.form.company.label} placeholder={c.form.company.placeholder} />
              <div>
                <label className="block text-label text-on-surface-variant mb-2 uppercase tracking-wider">
                  {c.form.subject.label}
                </label>
                <select
                  name="subject"
                  defaultValue="Bilgi"
                  className="w-full bg-white border border-border-subtle rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                >
                  <option value="İş Birliği">{c.form.subject.options[0]}</option>
                  <option value="Bilgi">{c.form.subject.options[1]}</option>
                  <option value="Öneri">{c.form.subject.options[2]}</option>
                  <option value="Diğer">{c.form.subject.options[3]}</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-label text-on-surface-variant mb-2 uppercase tracking-wider">
                {c.form.message.label}
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder={c.form.message.placeholder}
                className="w-full bg-white border border-border-subtle rounded-xl px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
              />
            </div>
            <label className="flex items-start gap-3 text-xs text-on-surface-variant">
              <input type="checkbox" name="kvkk" required className="mt-0.5 w-4 h-4 rounded border-border-subtle" />
              <span>{c.form.kvkk}</span>
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full btn-primary !rounded-2xl !py-4 disabled:opacity-60"
            >
              {status === "sending" ? c.form.submitting : c.form.submit}
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
  name, label, placeholder, type = "text", required = false,
}: {
  name: string; label: string; placeholder?: string; type?: string; required?: boolean;
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
  icon, title, value, href,
}: {
  icon: "mail" | "phone" | "pin"; title: string; value: React.ReactNode; href?: string;
}) {
  const wrap = (children: React.ReactNode) =>
    href ? (
      <a href={href} className="text-on-surface hover:text-primary transition-colors">{children}</a>
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
