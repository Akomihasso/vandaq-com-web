# VANDAQ Tanıtım Sitesi (www.vandaq.com)

Next.js 15 + Tailwind + Supabase + Resend ile hazırlanmış tek sayfa tanıtım sitesi. Tüm CTA'lar `vandaq-x.com` uygulamasına yönlendirir.

## Yerelde Çalıştırma

```bash
cd site
npm install
cp .env.local.example .env.local   # değerleri doldur
npm run dev
# http://localhost:3000
```

## Ortam Değişkenleri (`.env.local`)

| Değişken | Zorunlu | Açıklama |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | opsiyonel | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | opsiyonel | client anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | opsiyonel | server insert için |
| `RESEND_API_KEY` | opsiyonel | e-posta bildirimi |
| `CONTACT_TO_EMAIL` | opsiyonel | bildirimin gideceği adres |
| `CONTACT_FROM_EMAIL` | opsiyonel | doğrulanmış gönderici (ör. `no-reply@vandaq.com`) |
| `NEXT_PUBLIC_APP_URL` | öneri | app URL, varsayılan `https://vandaq-x.com` |

> Env değerleri boş olursa iletişim formu hata vermez; sadece Supabase/Resend adımları atlanır.

## Supabase Kurulumu

1. https://supabase.com/dashboard → Yeni proje.
2. SQL Editor'de `supabase/schema.sql` içeriğini çalıştır.
3. Settings → API'den URL + anon + service_role key'lerini alıp Vercel env'e ekle.
4. Auth ihtiyacı yok; RLS aktif, sadece service_role (server) yazabilir.

## Resend Kurulumu

1. https://resend.com/api-keys → yeni key üret → `RESEND_API_KEY`.
2. Domains → `vandaq.com` ekle, DNS SPF/DKIM kayıtlarını Turhost'a gir (aşağıda).
3. `CONTACT_FROM_EMAIL="VANDAQ <no-reply@vandaq.com>"`, `CONTACT_TO_EMAIL="bilgi@vandaq.com"`.

## Vercel Deploy

1. Bu klasörü (`site/`) bir GitHub repo'ya push et.
2. https://vercel.com/new → repo'yu import et.
3. Root Directory: `site`, Framework: Next.js (otomatik).
4. Environment Variables → yukarıdaki değerleri ekle.
5. Deploy → Vercel size `xxx.vercel.app` alt domain verir.
6. Project → Settings → Domains → `vandaq.com` ve `www.vandaq.com` ekle.

## Turhost DNS Ayarları (vandaq.com)

Turhost panelinde **DNS Yönetimi → Yeni Kayıt**:

### A. Nameserver ile Vercel'e devretmek (önerilir)

Turhost'ta domain'in nameserver'larını Vercel'in verdiği DNS'e çevirmek yerine, DNS'i Turhost'ta bırakıp aşağıdaki kayıtları eklemek daha esnektir:

### B. DNS Turhost'ta kalsın (önerilen kayıtlar)

| Tür | Ad | Değer | TTL |
| --- | --- | --- | --- |
| `A` | `@` | `76.76.21.21` | 3600 |
| `CNAME` | `www` | `cname.vercel-dns.com.` | 3600 |

> Vercel Domains ekranı size özel bir doğrulama TXT talep edebilir; onu da aynı panele ekleyin.

### C. Resend için SPF & DKIM

Resend paneli size 3 CNAME + 1 TXT verecek:

| Tür | Ad | Değer |
| --- | --- | --- |
| `TXT` | `@` | `v=spf1 include:_spf.resend.com ~all` |
| `CNAME` | `resend._domainkey` | (panelden kopyala) |
| `CNAME` | `resend2._domainkey` | (panelden kopyala) |
| `CNAME` | `resend3._domainkey` | (panelden kopyala) |

DMARC opsiyonel:
| `TXT` | `_dmarc` | `v=DMARC1; p=none; rua=mailto:bilgi@vandaq.com` |

## Video (Hero)

`public/hero.mp4` — 4K/75MB olarak yüklendi. Prod'da bandwidth için sıkıştırın:

```bash
# 1080p, ~5-10MB, H.264
ffmpeg -i public/hero.mp4 -vf "scale=1920:-2" -c:v libx264 -crf 26 -preset slow \
  -c:a copy -movflags +faststart public/hero-1080.mp4

# Ayrıca WebM (daha iyi sıkıştırma):
ffmpeg -i public/hero.mp4 -vf "scale=1920:-2" -c:v libvpx-vp9 -b:v 1200k \
  -c:a libopus public/hero-1080.webm
```

Sonra `components/Hero.tsx` içindeki `<video src="/hero.mp4">` kısmını çoklu `<source>`'a çevirin.

Alternatif: video'yu Cloudinary / Mux / Bunny CDN'e yükleyip URL'yi env'e taşıyın.

## Klasör Yapısı

```
site/
  app/
    layout.tsx        # metadata + Inter font
    page.tsx          # ana landing (bileşenleri toplar)
    globals.css       # tailwind + design tokens
    api/contact/route.ts  # form endpoint (Supabase + Resend)
  components/         # Nav, Hero, LogoStrip, Monitoring, Features,
                      # HowItWorks, Testimonials, Pricing, About, Contact, Footer
  lib/supabase.ts
  supabase/schema.sql
  public/
    hero.mp4          # arka plan videosu (compress önerilir)
    logo.png          # Stitch'ten
    ornek-tasarim.png # video posteri
  tailwind.config.ts  # renk paleti + animasyonlar
```

## Yol Haritası

- [ ] Video sıkıştırma + WebM fallback
- [ ] `/gizlilik`, `/kvkk`, `/kosullar` sayfaları
- [ ] `sitemap.xml` + `robots.txt`
- [ ] TR/EN çeviri (next-intl)
- [ ] Blog / basında biz (opsiyonel)
- [ ] Google Analytics 4 veya Plausible
