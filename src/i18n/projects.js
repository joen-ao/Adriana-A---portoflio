// Project case data. `category` maps to the filter chips (health | hospitality | b2b).
// `live: true` renders the "Live site" badge; false renders "Design proposal".
// `image` points to a generated WebP mockup in /images/projects (see scripts/generate-assets.mjs).
// Replace those mockups with real desktop + mobile screenshots in phase 3.
export const projects = [
  {
    slug: 'lisbed-giraldo',
    url: 'https://lisbedgiraldo.com/',
    live: true,
    category: 'health',
    accent: '#2D4A3E',
    domain: 'lisbedgiraldo.com',
    image: '/images/projects/lisbed-giraldo.webp',
    en: {
      name: 'Dra. Lisbed Giraldo',
      sector: 'Aesthetic dentistry · Sabaneta',
      role: 'UI/UX design · Brand application · Front-end · Local SEO',
      solved:
        'A clinic with 300+ Google reviews had no site that turned that reputation into appointments.',
      decisions: [
        '3-question quiz that guides each patient toward the right treatment.',
        'WhatsApp CTAs with a pre-filled message per section, so every lead is traceable.',
        'Before/after cases and an international-patient block, with an English version.',
        'Local SEO: title, meta, Open Graph and keywords per treatment and city.',
      ],
      alt: 'Website mockup for Dra. Lisbed Giraldo aesthetic dentistry, shown on desktop and mobile.',
    },
    es: {
      name: 'Dra. Lisbed Giraldo',
      sector: 'Odontología estética · Sabaneta',
      role: 'Diseño UI/UX · Aplicación de marca · Front-end · SEO local',
      solved:
        'Una clínica con más de 300 reseñas en Google no tenía un sitio que convirtiera esa reputación en citas.',
      decisions: [
        'Quiz de 3 preguntas que orienta al paciente hacia el tratamiento correcto.',
        'CTAs a WhatsApp con mensaje prellenado distinto por sección: sabes de dónde viene cada cita.',
        'Casos antes/después y bloque para pacientes internacionales, con versión en inglés.',
        'SEO local: title, meta, Open Graph y keywords por tratamiento y ciudad.',
      ],
      alt: 'Mockup del sitio de la Dra. Lisbed Giraldo, odontología estética, en escritorio y móvil.',
    },
  },
  {
    slug: 'diego-mejia',
    url: 'https://dr-diego-mejia-media.vercel.app/',
    live: false,
    category: 'health',
    accent: '#8A6A2B',
    domain: 'dr-diego-mejia.vercel.app',
    image: '/images/projects/diego-mejia.webp',
    en: {
      name: 'Diego Mejía Dental Group',
      sector: 'Orthodontics & Invisalign · Bogotá',
      role: 'UI/UX design · Front-end · Motion & interaction',
      solved:
        "Bringing the doctor's high-performing Instagram video content onto the web.",
      decisions: [
        'Draggable before/after comparator, fully keyboard-usable.',
        '1-minute treatment quiz.',
        'Site organised around the most-viewed videos.',
        'CTAs with UTMs to measure which button drives each contact; Black / Gold variants.',
      ],
      alt: 'Website mockup for Diego Mejía Dental Group, shown on desktop and mobile.',
    },
    es: {
      name: 'Diego Mejía Dental Group',
      sector: 'Ortodoncia e Invisalign · Bogotá',
      role: 'Diseño UI/UX · Front-end · Movimiento e interacción',
      solved:
        'Llevar a la web el contenido de video que ya funcionaba en el Instagram del doctor.',
      decisions: [
        'Comparador antes/después arrastrable y usable con teclado.',
        'Quiz de tratamiento de 1 minuto.',
        'Sitio organizado alrededor de los videos con más vistas.',
        'CTAs con UTM para medir qué botón genera cada contacto; variantes Negro / Dorado.',
      ],
      alt: 'Mockup del sitio de Diego Mejía Dental Group en escritorio y móvil.',
    },
  },
  {
    slug: 'camila-novoa',
    url: 'https://camila-novoa-proposal.vercel.app/',
    live: false,
    category: 'health',
    accent: '#4B6B4A',
    domain: 'camila-novoa.vercel.app',
    image: '/images/projects/camila-novoa.webp',
    en: {
      name: 'Odont. María Camila Novoa',
      sector: 'Smile design · Bogotá',
      role: 'UI/UX design · Brand direction · Copywriting',
      solved: 'A landing that sells naturalness, not "white teeth".',
      decisions: [
        'Emotional hook copy ("Do you avoid smiling in photos?").',
        'Comparator by case and by angle.',
        '5-step process that answers the main fear ("nothing is final until you approve it").',
        'Two palettes (ivory and green) for the client to choose from.',
      ],
      alt: 'Website mockup for Odont. María Camila Novoa smile design, shown on desktop and mobile.',
    },
    es: {
      name: 'Odont. María Camila Novoa',
      sector: 'Diseño de sonrisa · Bogotá',
      role: 'Diseño UI/UX · Dirección de marca · Copywriting',
      solved: 'Una landing que vende naturalidad, no "dientes blancos".',
      decisions: [
        'Copy de gancho emocional ("¿Evitas sonreír en las fotos?").',
        'Comparador por caso y por ángulo.',
        'Proceso en 5 pasos que responde el miedo principal ("nada es definitivo hasta que lo apruebas").',
        'Dos paletas (marfil y verde) para que la clienta eligiera.',
      ],
      alt: 'Mockup del sitio de la Odont. María Camila Novoa, diseño de sonrisa, en escritorio y móvil.',
    },
  },
  {
    slug: 'yunfeng',
    url: 'https://yunfeng.vercel.app/',
    live: false,
    category: 'health',
    accent: '#324B54',
    domain: 'yunfeng.vercel.app',
    image: '/images/projects/yunfeng.webp',
    en: {
      name: 'Yünfēng — Asian Head Spa & Skincare',
      sector: 'Spa & hair care · Cancún',
      role: 'Brand identity · UI/UX design · Concept',
      solved:
        "Identity and pre-opening site for a spa that doesn't physically exist yet.",
      decisions: [
        'Asian-inspired visual identity (the ideogram 云 — "cloud, calm").',
        '3-step booking (ritual → date → time) confirmed over WhatsApp.',
        'AI hair-diagnosis section with a scanner-style interface.',
        'UGC video gallery and gift cards.',
      ],
      alt: 'Brand and website mockup for Yünfēng Asian Head Spa, shown on desktop and mobile.',
    },
    es: {
      name: 'Yünfēng — Asian Head Spa & Skincare',
      sector: 'Spa y cuidado capilar · Cancún',
      role: 'Identidad de marca · Diseño UI/UX · Concepto',
      solved:
        'Identidad y sitio de preapertura para un spa que todavía no existe físicamente.',
      decisions: [
        'Identidad visual de inspiración asiática (el ideograma 云, "nube, calma").',
        'Reserva en 3 pasos (ritual → fecha → hora) que confirma por WhatsApp.',
        'Sección de diagnóstico capilar con IA con interfaz tipo escáner.',
        'Galería de video UGC y gift cards.',
      ],
      alt: 'Mockup de marca y sitio de Yünfēng Asian Head Spa en escritorio y móvil.',
    },
  },
  {
    slug: 'ordovician',
    url: 'https://ordovician-proposal.vercel.app/',
    live: false,
    category: 'hospitality',
    accent: '#B08D57',
    domain: 'ordovician.vercel.app',
    image: '/images/projects/ordovician.webp',
    en: {
      name: 'Ordovician Beach Resort',
      sector: 'Boutique hotel · Isla Grande, Panama',
      role: 'UI/UX design · Multi-page front-end',
      solved:
        'A hotel site that conveys quiet luxury and leads to a booking.',
      decisions: [
        'Multi-page: home, suite detail and booking.',
        'Video hero with an availability widget visible from the top.',
        'EN/ES selector for the international guest.',
        'Editorial tone: serif, wide photography, lots of breathing room.',
      ],
      alt: 'Website mockup for Ordovician Beach Resort boutique hotel, shown on desktop and mobile.',
    },
    es: {
      name: 'Ordovician Beach Resort',
      sector: 'Hotel boutique · Isla Grande, Panamá',
      role: 'Diseño UI/UX · Front-end multipágina',
      solved:
        'Un sitio de hotel que transmitiera lujo tranquilo y llevara a reservar.',
      decisions: [
        'Multipágina: home, detalle de suite y reservas.',
        'Hero en video y widget de disponibilidad visible desde el inicio.',
        'Selector EN/ES para el huésped internacional.',
        'Tono editorial: serif, fotografía amplia, mucho aire.',
      ],
      alt: 'Mockup del sitio de Ordovician Beach Resort, hotel boutique, en escritorio y móvil.',
    },
  },
  {
    slug: 'dmaia',
    url: 'https://dmaia.vercel.app/',
    live: false,
    category: 'b2b',
    accent: '#3A4A5A',
    domain: 'dmaia.vercel.app',
    image: '/images/projects/dmaia.webp',
    en: {
      name: 'Dmaia AI Solutions',
      sector: 'Data consultancy · Santo Domingo',
      role: 'UI/UX design · Front-end · Data-viz UI',
      solved:
        'A consultancy with three very different client types and a single site.',
      decisions: [
        'Three conversion paths (Government, NGO, Business), each with its own form.',
        'Animated dashboard in the hero that shows the product instead of describing it.',
        'Impact counters and cases with figures.',
        '5-stage methodology.',
      ],
      alt: 'Website mockup for Dmaia AI Solutions data consultancy, shown on desktop and mobile.',
    },
    es: {
      name: 'Dmaia AI Solutions',
      sector: 'Consultoría de datos · Santo Domingo',
      role: 'Diseño UI/UX · Front-end · UI de visualización de datos',
      solved:
        'Una consultora con tres tipos de cliente muy distintos y un solo sitio.',
      decisions: [
        'Tres rutas de conversión (Gobierno, ONG, Empresa), cada una con su formulario.',
        'Dashboard animado en el hero que muestra el producto en vez de describirlo.',
        'Contadores de impacto y casos con cifras.',
        'Metodología en 5 etapas.',
      ],
      alt: 'Mockup del sitio de Dmaia AI Solutions, consultoría de datos, en escritorio y móvil.',
    },
  },
];
