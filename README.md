# Landing de TrailSoft

Landing B2B desarrollada con Angular 20, componentes standalone, SSR/prerender, hidratación y formularios reactivos tipados.

## Desarrollo

```bash
npm install
npm start
```

Abrir `http://localhost:4200/`.

## Verificación

```bash
npm test -- --watch=false --browsers=ChromeHeadless
npm run build
```

El build queda en `dist/trailsoft-landing/`. Para probar el servidor SSR generado:

```bash
npm run serve:ssr:trailsoft-landing
```

## Configuración antes de publicar

Editar `src/app/core/config/site.config.ts` y completar el dominio canónico, endpoint de contacto, correo, número de WhatsApp y LinkedIn. Las variables de despliegue documentadas son `CONTACT_ENDPOINT`, `CONTACT_RECIPIENT`, `WHATSAPP_NUMBER` y `LINKEDIN_URL`; se mapean a las propiedades equivalentes de `SITE_CONFIG`. Reemplazar `DOMAIN_PENDING` en `public/sitemap.xml` y añadir el sitemap a `public/robots.txt`.

El logo y el isotipo utilizados fueron extraídos directamente del manual oficial. Ver `public/brand/README.md`. Sigue siendo recomendable reemplazarlos por los SVG originales si están disponibles y añadir las fuentes autohospedadas con sus licencias.

## Conectar el formulario

`ContactService` envía un `POST` JSON al endpoint configurado. El backend debe validar el payload, aplicar rate limiting y protección antispam, y responder con un código 2xx. Sin endpoint, la interfaz muestra un aviso real; nunca simula un envío exitoso.

## Envío de consultas con Resend

El formulario usa el endpoint server-side `/api/contact`. La clave de Resend nunca se envía al navegador ni se incluye en el bundle Angular.

1. Copiar `.env.example` como `.env` en el servidor.
2. Completar `RESEND_API_KEY`. El formulario envía por defecto a `trailsoftoficial@gmail.com`.
3. Opcionalmente, definir `CONTACT_TO_EMAIL` o `CONTACT_FROM_EMAIL` para sobrescribir el destinatario o el remitente.
4. Para producción, usar como `CONTACT_FROM_EMAIL` un remitente verificado en Resend.
4. Ejecutar el servidor SSR con `npm run serve:ssr:trailsoft-landing`.

El endpoint valida los campos obligatorios, limita el tamaño del payload, aplica rate limiting, filtra el honeypot y genera una versión HTML y otra de texto del correo. Los UTM y el GCLID se incluyen en una sección de atribución.

## Despliegue

- Estático/prerender: publicar `dist/trailsoft-landing/browser`.
- SSR: ejecutar `node dist/trailsoft-landing/server/server.mjs` detrás de un proxy HTTPS.

No se incluyeron credenciales ni datos comerciales inventados.
