import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vandaq.com"),
  title: {
    default: "VANDAQ | Kurumsal Dijital İkiz ve Stratejik Etki Platformu",
    template: "%s | VANDAQ",
  },
  description:
    "Küresel piyasa, jeopolitik, enerji, iklim ve regülasyon sinyallerini şirketinizin dijital ikizi üzerinde işleyerek somut, sayısal ve uygulanabilir stratejik kararlar üretir.",
  keywords: [
    "kurumsal dijital ikiz",
    "stratejik etki analizi",
    "risk analizi",
    "CBAM",
    "makro ekonomi",
    "yapay zeka strateji",
    "VANDAQ",
    "VANDAQ-X",
  ],
  openGraph: {
    title: "VANDAQ | Kurumsal Dijital İkiz",
    description:
      "Dışarıda ne olursa olsun, şirketinizi ne kadar etkiliyor? VANDAQ, dış sinyalleri firmaya özel etki değerlerine dönüştürür.",
    url: "https://vandaq.com",
    siteName: "VANDAQ",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VANDAQ | Kurumsal Dijital İkiz",
    description:
      "Dışarıda ne olursa olsun, şirketinizi ne kadar etkiliyor?",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={inter.variable}>
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
