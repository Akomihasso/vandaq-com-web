"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://vandaq-x.com";

export default function Nav() {
  const { lang, setLang, content } = useLanguage();
  const c = content.nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-border-subtle shadow-[0_6px_28px_-18px_rgba(8,27,57,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-topbar-height">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="VANDAQ"
            width={36}
            height={36}
            className="rounded-xl shadow-sm group-hover:shadow-md transition-shadow"
            priority
          />
          <span className="text-primary text-xl font-extrabold tracking-tight">VANDAQ</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {c.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            className="hidden md:flex items-center gap-1 text-xs font-bold tracking-widest text-on-surface-variant hover:text-primary transition-colors border border-border-subtle rounded-lg px-2.5 py-1.5"
            aria-label={lang === "tr" ? "Switch to English" : "Türkçeye geç"}
          >
            <span className={lang === "tr" ? "text-primary" : "text-on-surface-variant/50"}>TR</span>
            <span className="text-on-surface-variant/30 mx-0.5">/</span>
            <span className={lang === "en" ? "text-primary" : "text-on-surface-variant/50"}>EN</span>
          </button>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm !px-5 !py-2.5"
          >
            {c.cta}
            <ArrowIcon />
          </a>
          <button
            className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-border-subtle bg-white/70"
            aria-label="Menü"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block w-4 h-[2px] bg-on-surface relative before:absolute before:content-[''] before:w-4 before:h-[2px] before:bg-on-surface before:-top-1.5 after:absolute after:content-[''] after:w-4 after:h-[2px] after:bg-on-surface after:top-1.5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border-subtle">
          <div className="container-narrow py-4 flex flex-col gap-2">
            {c.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-on-surface-variant hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setLang(lang === "tr" ? "en" : "tr"); setOpen(false); }}
              className="mt-2 text-left py-2 text-sm font-bold text-on-surface-variant hover:text-primary"
            >
              {lang === "tr" ? "Switch to English" : "Türkçeye geç"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
