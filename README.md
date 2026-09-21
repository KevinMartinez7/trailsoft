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

## Despliegue

- Estático/prerender: publicar `dist/trailsoft-landing/browser`.
- SSR: ejecutar `node dist/trailsoft-landing/server/server.mjs` detrás de un proxy HTTPS.

No se incluyeron credenciales ni datos comerciales inventados.
