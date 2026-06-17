import { Hono } from "hono";

// Reference to worker types
/// <reference path="../../worker-configuration.d.ts" />

type Env = {
  /** Clé API Resend (https://resend.com) — à définir via `wrangler secret put`. */
  RESEND_API_KEY?: string;
  /** Adresse destinataire des demandes de contact. */
  CONTACT_TO_EMAIL?: string;
  /** Adresse expéditrice (domaine vérifié dans Resend). */
  CONTACT_FROM_EMAIL?: string;
};

const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post("/api/contact", async (c) => {
  let body: Record<string, unknown>;
  try {
    body = await c.req.json();
  } catch {
    return c.json({ ok: false, error: "invalid_json" }, 400);
  }

  // Anti-spam : champ piège (honeypot) qui doit rester vide.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return c.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return c.json({ ok: false, error: "missing_fields" }, 422);
  }
  if (!EMAIL_RE.test(email)) {
    return c.json({ ok: false, error: "invalid_email" }, 422);
  }
  if (name.length > 200 || message.length > 5000) {
    return c.json({ ok: false, error: "too_long" }, 422);
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = c.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    // Plumbing prêt : il reste à configurer le service d'envoi.
    return c.json({ ok: false, error: "email_not_configured" }, 503);
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `Nouvelle demande de contact — ${name}`,
      text:
        `Nom : ${name}\n` +
        `Email : ${email}\n` +
        `Téléphone : ${phone || "—"}\n\n` +
        `Message :\n${message}\n`,
    }),
  });

  if (!res.ok) {
    return c.json({ ok: false, error: "send_failed" }, 502);
  }

  return c.json({ ok: true });
});

export default app;
