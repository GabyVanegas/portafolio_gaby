require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { Resend } = require("resend");

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);
const PORT = process.env.PORT || 4000;

/* ---------- Middlewares base ---------- */
app.use(
  cors({
    origin: (process.env.CORS_ORIGIN || "").split(",").filter(Boolean) || "*",
  })
);
app.use(express.json({ limit: "10kb" }));

/* ---------- Anti-spam básico ---------- */
app.use(
  "/api/",
  rateLimit({
    windowMs: 60 * 1000, // 1 min
    max: 20,             // 20 req/min por IP
    standardHeaders: true,
    legacyHeaders: false,
  })
);

/* ---------- Utils ---------- */
const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s || "");
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ---------- Rutas de diagnóstico ---------- */
app.get("/", (_req, res) => {
  res.type("text").send("API de contacto: OK");
});

app.get("/healthz", (_req, res) => {
  res.json({ ok: true, service: "contact-api", time: new Date().toISOString() });
});

app.get("/api/ping", (_req, res) => {
  res.json({ message: "pong 🏓", status: "ok" });
});

/* ---------- Ruta real: contacto ---------- */
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    // Validaciones simples
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Faltan campos." });
    }
    if (!isEmail(email)) {
      return res.status(400).json({ ok: false, error: "Email inválido." });
    }
    if (String(message).length > 5000) {
      return res.status(400).json({ ok: false, error: "Mensaje demasiado largo." });
    }

    // Cuerpo del correo
    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6;">
        <h2>Nuevo mensaje desde el portafolio</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Mensaje:</strong></p>
        <pre style="white-space:pre-wrap;background:#f7f7f7;padding:12px;border-radius:8px;">${escapeHtml(
          message
        )}</pre>
      </div>
    `;

    // Envío con Resend
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [process.env.TO_EMAIL],
      subject: `Nuevo mensaje de ${name}`,
      reply_to: email, // podrás responder directo al remitente
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html,
    });

    return res.json({ ok: true });
  } catch (e) {
    console.error("[contact] error:", e);
    return res.status(500).json({ ok: false, error: "Error enviando el correo." });
  }
});

/* ---------- Arranque ---------- */
app.listen(PORT, () => {
  console.log(`API de contacto en http://localhost:${PORT}`);
});
