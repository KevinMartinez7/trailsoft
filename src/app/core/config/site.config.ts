/**
 * The browser only needs the public endpoint. Resend credentials stay in the
 * Node server environment and are never bundled into the Angular application.
 */
export const SITE_CONFIG = {
  canonicalUrl: '',
  contactEndpoint: '/api/contact',
  contactEmail: 'trailsoftoficial@gmail.com',
  whatsappNumber: '5491137877561',
  whatsappMessage: 'Hola, quiero conversar sobre un proyecto de software con TrailSoft.',
  linkedInUrl: ''
} as const;
