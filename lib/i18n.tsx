"use client";
import { createContext, useContext, useState, useEffect } from "react";
import tr from "@/content/tr";
import en from "@/content/en";
import type { SiteContent } from "@/content/tr";

export type Lang = "tr" | "en";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  content: SiteContent;
}

const LangContext = createContext<LangContextValue>({
  lang: "tr",
  setLang: () => {},
  content: tr,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("tr");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, content: lang === "tr" ? tr : en }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LangContext);
}
