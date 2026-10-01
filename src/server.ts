import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import { loadEnvFile } from 'node:process';

try {
  loadEnvFile(join(process.cwd(), '.env'));
} catch {
  // Production hosts inject environment variables directly.
}

const browserDistFolder = join(import.meta.dirname, '../browser');

export const app = express();
const angularApp = new AngularNodeAppEngine();

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
}

const contactAttempts = new Map<string, { count: number; expiresAt: number }>();
const rateLimitWindow = 15 * 60 * 1000;
const rateLimitMax = 5;

function readField(body: unknown, key: keyof ContactFormData, maxLength = 500): string {
  if (!body || typeof body !== 'object') return '';
  const value = (body as Record<string, unknown>)[key];
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character] ?? character);
}

function formatMessage(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, '<br>');
}

function buildContactEmail(data: ContactFormData): string {
  const row = (label: string, value: string, accent = false) => `
    <tr>
      <td style="padding:18px 0;border-bottom:1px solid #203244;color:#7f94a6;font:600 11px/1.3 Arial,sans-serif;letter-spacing:1.2px;text-transform:uppercase;vertical-align:top;width:38%;">${label}</td>
      <td style="padding:18px 0;border-bottom:1px solid #203244;color:${accent ? '#34cfbe' : '#edf4f7'};font:500 15px/1.5 Arial,sans-serif;vertical-align:top;">${value || '<span style="color:#607383">No informado</span>'}</td>
    </tr>`;

  const attributionRows = [
    ['UTM source', data.utm_source], ['UTM medium', data.utm_medium],
    ['UTM campaign', data.utm_campaign], ['UTM term', data.utm_term],
    ['UTM content', data.utm_content], ['GCLID', data.gclid]
  ].filter(([, value]) => value).map(([label, value]) => row(label, escapeHtml(value), true)).join('');
  const whatsappNumber = data.phone.replace(/\D/g, '');
  const whatsappUrl = whatsappNumber.length >= 7
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola ${data.name}, soy de TrailSoft. Recibimos tu consulta y quería contactarte por WhatsApp.`)}`
    : '';

  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><title>Nueva consulta TrailSoft</title></head>
<body style="margin:0;padding:32px 12px;background:#05080d;color:#edf4f7;font-family:Arial,sans-serif;">
  <div style="max-width:680px;margin:0 auto;background:#07111b;border:1px solid #1c3448;border-radius:16px;overflow:hidden;">
    <div style="padding:34px 36px;background:linear-gradient(135deg,#0b1d2b,#07111b);border-bottom:1px solid #203244;">
      <div style="color:#f5f8fb;font-size:25px;font-weight:800;letter-spacing:.5px;">TRAIL<span style="font-weight:300;color:#d9e5ea;">SOFT</span></div>
      <div style="margin-top:14px;color:#34cfbe;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Nueva consulta desde la web</div>
      <h1 style="margin:12px 0 0;color:#f5f8fb;font-size:28px;line-height:1.2;">Hablemos de un nuevo proyecto.</h1>
    </div>
    <div style="padding:26px 36px 34px;">
      <div style="display:inline-block;margin-bottom:18px;padding:8px 12px;border:1px solid rgba(52,207,190,.35);border-radius:999px;color:#b9c9d2;font-size:12px;">● &nbsp;Disponible · Respuesta en menos de 24hs.</div>
      <table role="presentation" cellspacing="0" cellpadding="0" width="100%">
        ${row('Nombre y apellido', escapeHtml(data.name))}
        ${row('Empresa', escapeHtml(data.company))}
        ${row('Correo electrónico', escapeHtml(data.email), true)}
        ${row('Teléfono / WhatsApp', escapeHtml(data.phone), true)}
        ${row('Tipo de proyecto', escapeHtml(data.projectType))}
      </table>
      <div style="margin-top:26px;padding:20px 22px;border-left:3px solid #0d8bff;border-radius:0 10px 10px 0;background:#0b1825;">
        <div style="margin-bottom:10px;color:#7f94a6;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">Qué necesita construir</div>
        <div style="color:#edf4f7;font-size:15px;line-height:1.65;">${formatMessage(data.message)}</div>
      </div>
      ${attributionRows ? `<h2 style="margin:30px 0 0;color:#7f94a6;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;">Atribución de campaña</h2><table role="presentation" cellspacing="0" cellpadding="0" width="100%">${attributionRows}</table>` : ''}
      ${whatsappUrl ? `<div style="margin-top:28px;padding-top:24px;border-top:1px solid #203244;"><a href="${escapeHtml(whatsappUrl)}" style="display:inline-block;padding:13px 20px;border-radius:10px;color:#041014;background:#34cfbe;font:700 14px/1 Arial,sans-serif;text-decoration:none;">Abrir conversación en WhatsApp &#8599;</a><div style="margin-top:9px;color:#7f94a6;font-size:11px;">El botón abre WhatsApp con el número informado en el formulario.</div></div>` : ''}
    </div>
    <div style="padding:18px 36px;border-top:1px solid #203244;color:#647989;font-size:11px;line-height:1.5;">Este mensaje fue enviado desde el formulario de contacto de TrailSoft. Podés responder directamente a este correo para contactar a la persona.</div>
  </div>
</body></html>`;
}

function buildContactText(data: ContactFormData): string {
  const whatsappNumber = data.phone.replace(/\D/g, '');
  const whatsappUrl = whatsappNumber.length >= 7
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola ${data.name}, soy de TrailSoft. Recibimos tu consulta y quería contactarte por WhatsApp.`)}`
    : '';
  return [
    'Nueva consulta desde TrailSoft', '',
    `Nombre y apellido: ${data.name}`, `Empresa: ${data.company}`,
    `Correo electrónico: ${data.email}`, `Teléfono / WhatsApp: ${data.phone}`,
    `Tipo de proyecto: ${data.projectType}`, '', `Qué necesita construir:\n${data.message}`,
    '', 'Atribución:', `utm_source: ${data.utm_source || '-'}`, `utm_medium: ${data.utm_medium || '-'}`,
    `utm_campaign: ${data.utm_campaign || '-'}`, `utm_term: ${data.utm_term || '-'}`,
    `utm_content: ${data.utm_content || '-'}`, `gclid: ${data.gclid || '-'}`,
    ...(whatsappUrl ? ['', `WhatsApp: ${whatsappUrl}`] : [])
  ].join('\n');
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const current = contactAttempts.get(ip);
  if (!current || current.expiresAt <= now) {
    contactAttempts.set(ip, { count: 1, expiresAt: now + rateLimitWindow });
    return false;
  }
  current.count += 1;
  return current.count > rateLimitMax;
}

app.use(express.json({ limit: '20kb' }));

app.post('/api/contact', async (req, res) => {
  if (isRateLimited(req.ip || 'unknown')) {
    res.status(429).json({ error: 'TOO_MANY_REQUESTS' });
    return;
  }

  const body = req.body as Record<string, unknown>;
  if (typeof body['website'] === 'string' && body['website'].trim()) {
    res.status(204).end();
    return;
  }

  const data: ContactFormData = {
    name: readField(body, 'name', 120), company: readField(body, 'company', 160),
    email: readField(body, 'email', 254), phone: readField(body, 'phone', 40),
    projectType: readField(body, 'projectType', 100), message: readField(body, 'message', 4000),
    utm_source: readField(body, 'utm_source', 120), utm_medium: readField(body, 'utm_medium', 120),
    utm_campaign: readField(body, 'utm_campaign', 160), utm_term: readField(body, 'utm_term', 160),
    utm_content: readField(body, 'utm_content', 160), gclid: readField(body, 'gclid', 200)
  };

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  if (!data.name || !data.company || !emailIsValid || !data.phone || !data.projectType || data.message.length < 20) {
    res.status(400).json({ error: 'INVALID_FORM' });
    return;
  }

  const apiKey = process.env['RESEND_API_KEY']?.trim();
  const recipient = process.env['CONTACT_TO_EMAIL']?.trim();
  const sender = process.env['CONTACT_FROM_EMAIL']?.trim();
  if (!apiKey || !recipient || !sender) {
    res.status(503).json({ error: 'MAIL_NOT_CONFIGURED' });
    return;
  }

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: sender, to: [recipient], reply_to: [data.email],
        subject: `Nueva consulta TrailSoft · ${data.projectType}`,
        html: buildContactEmail(data), text: buildContactText(data)
      })
    });

    if (!resendResponse.ok) {
      console.error('Resend rejected contact email:', resendResponse.status, (await resendResponse.text()).slice(0, 500));
      res.status(502).json({ error: 'MAIL_PROVIDER_ERROR' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact email request failed:', error instanceof Error ? error.message : 'unknown error');
    res.status(502).json({ error: 'MAIL_PROVIDER_ERROR' });
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
