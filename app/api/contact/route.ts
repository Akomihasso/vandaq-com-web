import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getServerSupabase } from "@/lib/supabase";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Body = {
  name?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
  kvkk?: string | boolean;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek" }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const company = String(body.company || "").trim();
  const subject = String(body.subject || "Demo Talebi").trim();
  const message = String(body.message || "").trim();

  if (!name || name.length > 150) return NextResponse.json({ error: "Ad Soyad geçersiz" }, { status: 400 });
  if (!email || !emailPattern.test(email) || email.length > 200)
    return NextResponse.json({ error: "E-posta geçersiz" }, { status: 400 });
  if (!message || message.length < 8 || message.length > 5000)
    return NextResponse.json({ error: "Mesaj çok kısa veya çok uzun" }, { status: 400 });
  if (!body.kvkk) return NextResponse.json({ error: "KVKK onayı gereklidir" }, { status: 400 });

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    null;
  const userAgent = req.headers.get("user-agent") || null;

  // 1) Persist to Supabase (optional — no-op if env not set)
  const supabase = getServerSupabase();
  if (supabase) {
    const { error } = await supabase.from("contact_submissions").insert({
      name,
      email,
      company: company || null,
      subject,
      message,
      ip,
      user_agent: userAgent,
    });
    if (error) {
      console.error("supabase insert error", error);
      // don't fail the request — still try email
    }
  }

  // 2) Email notification via Resend
  // onboarding@resend.dev, doğrulama gerektirmeyen ve her zaman iletim garantisi
  // olan Resend'in ortak test göndericisidir. Domain doğrulaması tamamlandığında
  // env üzerinden CONTACT_FROM_EMAIL değiştirilebilir.
  const DEFAULT_TO = [
    "abone2026hasan@gmail.com",
    "hasan.demirkiran@kordinat.com.tr",
    "emir.demirkiran@kordinat.com.tr",
  ];
  const DEFAULT_FROM = "VANDAQ <onboarding@resend.dev>";

  const resendKey = process.env.RESEND_API_KEY;
  const toEnv = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM;

  let adminSent = false;
  let userAckSent = false;
  let emailError: string | null = null;

  if (!resendKey) {
    emailError = "RESEND_API_KEY tanımlı değil";
  } else {
    const to = (toEnv || "")
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
    if (to.length === 0) to.push(...DEFAULT_TO);
    try {
      const resend = new Resend(resendKey);
      // Admin bildirimi
      const adminResp = await resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: `[vandaq.com] ${subject} — ${company || name}`,
        html: renderAdminEmail({ name, email, company, subject, message, ip, userAgent }),
      });
      if (adminResp.error) {
        emailError = adminResp.error.message || "Resend admin bildirimi reddetti";
        console.error("resend admin error", adminResp.error);
      } else {
        adminSent = true;
      }

      // Kullanıcı teşekkür maili (admin başarılıysa)
      if (adminSent) {
        const userResp = await resend.emails.send({
          from,
          to: [email],
          subject: "Talebiniz bize ulaştı — VANDAQ",
          html: renderUserAck({ name, subject }),
        });
        if (userResp.error) {
          console.error("resend user ack error", userResp.error);
        } else {
          userAckSent = true;
        }
      }
    } catch (err) {
      emailError = err instanceof Error ? err.message : "Bilinmeyen Resend hatası";
      console.error("resend exception", err);
    }
  }

  return NextResponse.json({
    ok: true,
    adminSent,
    userAckSent,
    emailError,
  });
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));

function renderAdminEmail(d: {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  ip: string | null;
  userAgent: string | null;
}) {
  return `
    <div style="font-family:Inter,system-ui,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#081b39">
      <div style="border-bottom:1px solid #E8EDF5;padding-bottom:16px;margin-bottom:20px">
        <div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#2c4cd7;font-weight:700">Yeni İletişim Talebi</div>
        <div style="font-size:20px;font-weight:800;margin-top:4px">${esc(d.subject)}</div>
      </div>
      <table style="width:100%;font-size:14px;line-height:1.55">
        <tr><td style="color:#444655;width:120px">Ad Soyad</td><td><strong>${esc(d.name)}</strong></td></tr>
        <tr><td style="color:#444655">Şirket</td><td>${esc(d.company || "—")}</td></tr>
        <tr><td style="color:#444655">E-posta</td><td><a href="mailto:${esc(d.email)}" style="color:#2c4cd7">${esc(d.email)}</a></td></tr>
      </table>
      <div style="margin-top:20px;padding:16px;background:#F8FAFF;border:1px solid #E8EDF5;border-radius:12px;white-space:pre-wrap">${esc(d.message)}</div>
      <div style="margin-top:20px;font-size:11px;color:#757686">
        IP: ${esc(d.ip || "—")} · UA: ${esc((d.userAgent || "").slice(0, 200))}
      </div>
    </div>
  `;
}

function renderUserAck(d: { name: string; subject: string }) {
  return `
    <div style="font-family:Inter,system-ui,sans-serif;max-width:560px;margin:0 auto;padding:32px 24px;color:#081b39">
      <div style="text-align:center;margin-bottom:24px">
        <div style="font-size:28px;font-weight:900;letter-spacing:-0.02em;color:#2c4cd7">VANDAQ</div>
      </div>
      <div style="background:#F8FAFF;border:1px solid #E8EDF5;border-radius:16px;padding:24px">
        <h1 style="font-size:20px;margin:0 0 12px;font-weight:800">Merhaba ${esc(d.name)},</h1>
        <p style="margin:0 0 14px;font-size:15px;line-height:1.65;color:#444655">
          <strong>"${esc(d.subject)}"</strong> konulu talebiniz bize ulaştı. Ekibimiz mesajınızı en kısa sürede inceleyip size dönüş yapacaktır.
        </p>
        <p style="margin:0 0 14px;font-size:15px;line-height:1.65;color:#444655">
          Bu arada VANDAQ-X uygulamasını incelemek isterseniz:
        </p>
        <p style="margin:0 0 4px">
          <a href="https://vandaq-x.com" style="display:inline-block;background:#2c4cd7;color:#fff;text-decoration:none;font-weight:700;padding:12px 20px;border-radius:12px;font-size:14px">VANDAQ-X'e Git →</a>
        </p>
      </div>
      <p style="margin:24px 0 0;font-size:12px;color:#757686;text-align:center;line-height:1.6">
        Bu e-posta VANDAQ iletişim formu üzerinden yaptığınız başvuruya otomatik yanıt olarak gönderildi.<br/>
        Sorularınız için: <a href="mailto:bilgi@vandaq.com" style="color:#2c4cd7">bilgi@vandaq.com</a>
      </p>
    </div>
  `;
}
