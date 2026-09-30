// Shared, language-agnostic site configuration.
// Single source of truth for contact details (spec open decisions #1 and #5).
export const site = {
  name: 'Adriana Acevedo',
  // Open decision #1 — resolved: one email across site and CV.
  email: 'acevedoadriana219@gmail.com',
  // Open decision #5 — resolved: WhatsApp included.
  whatsapp: '573022182841',
  whatsappDisplay: '+57 302 218 2841',
  // NOTE: confirm the real LinkedIn handle before publishing.
  linkedin: 'https://www.linkedin.com/in/adriana-acevedo',
  cv: {
    en: '/cv/adriana-acevedo-cv-en.pdf',
    es: '/cv/adriana-acevedo-cv-es.pdf',
  },
};

export const locales = ['en', 'es'];

// Absolute URL helper for hreflang / canonical.
export function localizedPath(lang, hash = '') {
  const base = lang === 'es' ? '/es/' : '/';
  return hash ? `${base}${hash}` : base;
}

export function waLink(lang) {
  const msg =
    lang === 'es'
      ? 'Hola Adriana, vi tu portafolio y me gustaría hablar de un proyecto.'
      : "Hi Adriana, I saw your portfolio and I'd like to talk about a project.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
}
