# Spec — Rediseño del portafolio de Adriana Acevedo

| | |
|---|---|
| **Sitio actual** | https://adrianaacevedo.netlify.app/ |
| **Versión del spec** | 1.0 — 30 sept 2026 |
| **Herramienta sugerida** | Claude Design (mockups) → Claude Code (construcción) |
| **Estado** | Listo para diseño. Ver [Decisiones abiertas](#11-decisiones-abiertas) antes de publicar |

---

## 1. Contexto

El portafolio actual presenta a Adriana como *International Business Administrator & CMS Operations Specialist*. Ese perfil ya no corresponde a lo que hace. Hoy trabaja como diseñadora UI/UX y especialista front-end para e-commerce: construye páginas para marcas de The Estée Lauder Companies en Shopify y Drupal (Expandya) y diseña marcas y sitios para clientes propios (Mokub).

El sitio tiene que reflejar ese cambio y, sobre todo, **mostrar trabajo de diseño**, que hoy no aparece por ningún lado.

## 2. Objetivos

1. Conseguir entrevistas para roles de **UI/UX Designer**, **Front-End / Web Developer** y **E-commerce Web Specialist** (remoto, EE. UU., Europa y LatAm).
2. Conseguir clientes de diseño web y de marca para Mokub.
3. Que en los primeros 10 segundos quede claro qué hace, para quién y con qué herramientas.

**Métricas de éxito**

- Clics en "Ver proyectos" y en "Descargar CV".
- Contactos entrantes (correo, LinkedIn, WhatsApp).
- Lighthouse de 90+ en Performance, Accessibility, Best Practices y SEO.

## 3. Audiencia

| Audiencia | Qué busca | Qué tiene que encontrar |
|---|---|---|
| Reclutador / hiring manager | Revisar rápido si encaja con la vacante | Rol claro, herramientas (Figma, Shopify, Drupal, JS/TS), proyectos con imagen, CV descargable |
| Líder de diseño o de desarrollo | Criterio y calidad de ejecución | Decisiones de diseño por proyecto, proceso de trabajo, detalles de front-end |
| Cliente potencial (negocio pequeño) | Saber si le puede hacer su web o su marca | Proyectos de su sector, proceso simple, contacto por WhatsApp |

## 4. Diagnóstico del sitio actual

| # | Problema | Evidencia | Impacto |
|---|---|---|---|
| 1 | Posicionamiento desactualizado | H1: "International Business Administrator & CMS Operations Specialist". Servicios: expansión internacional, análisis financiero | El sitio no aparece ni convence para vacantes de UI/UX |
| 2 | No hay proyectos de diseño | La sección "Case Studies" es la hoja de vida (Expandya, American Airlines, Berracao) | No hay forma de evaluar su trabajo |
| 3 | Imagen de stock | Expandya se ilustra con la foto de un portátil con gráficos | Se ve genérico, resta credibilidad |
| 4 | Animaciones que ocultan contenido | Al hacer scroll quedan bloques vacíos o casi transparentes; el grid de servicios muestra una tarjeta y un bloque gris | En un portafolio de UI/UX, esto se lee como un error de UI |
| 5 | Contenido solo visible con JavaScript | Sin navegador, la página solo expone título y meta description | Mal SEO, previews vacíos en LinkedIn/WhatsApp |
| 6 | Meta tags viejos y sin imagen social | Meta description de "International Business Administrator". Sin `og:image` | Cada vez que se comparte el link, vende el perfil equivocado |
| 7 | Contraste bajo | Texto gris claro sobre crema en servicios y experiencia | Se lee mal, falla accesibilidad |
| 8 | Stats débiles | "3+ years · 2 languages · LatAm based" | No dicen nada de su trabajo |
| 9 | Certificaciones irrelevantes | Cartera, sostenibilidad, análisis financiero | Ruido para el perfil nuevo |
| 10 | Sin CV descargable | No hay enlace a PDF | Paso extra para el reclutador |
| 11 | Datos de contacto inconsistentes | Web: `acevedoadriana219@gmail.com`. CV: `acevedoadriana@gmail.com` | Un contacto se puede perder |
| 12 | Solo en inglés | No hay versión en español | Pierde a los clientes de LatAm |

## 5. Posicionamiento y mensaje

**Rol (H1)**
- EN: *UI/UX Designer & Front-End Web Specialist*
- ES: *Diseñadora UI/UX y Especialista Front-End Web*

**Línea de valor**
- EN: *I design and build e-commerce and brand websites — from Figma to production.*
- ES: *Diseño y construyo sitios de e-commerce y de marca, de Figma a producción.*

**Prueba (debajo del hero o como stats)**

| Dato | EN | ES |
|---|---|---|
| 300+ | Product pages built | Páginas de producto construidas |
| 5+ | Global beauty brands | Marcas globales de belleza |
| 6 | Web design projects | Proyectos de diseño web |
| EN / ES | Fully bilingual | Bilingüe |

**Tono:** directo y cercano. Frases cortas. Nada de "passionate", "results-driven" ni "made with precision".

## 6. Arquitectura de información

Sitio de una sola página con anclas, más una página opcional por proyecto (fase 2).

```
/                → Home (EN)
/es/             → Home (ES)
/cv/adriana-acevedo-cv-en.pdf
/cv/adriana-acevedo-cv-es.pdf
/projects/<slug> → Caso de estudio (fase 2)
```

**Navegación:** Projects · Process · Services · Experience · Contact · selector EN/ES · botón "Download CV".

**Orden de secciones**

1. Hero
2. Proyectos
3. Cómo trabajo
4. Servicios
5. Experiencia
6. Herramientas
7. Contacto
8. Footer

## 7. Contenido por sección

### 7.1 Hero
- Nombre, rol (H1), línea de valor.
- CTAs: **View projects** (primario) · **Contact me** (secundario).
- Foto profesional actual (se mantiene). Recorte que no tape el texto en móvil.
- Stats de la sección 5 en una franja debajo.

### 7.2 Proyectos (sección principal)

Filtro: **All · Health & Beauty · Hospitality · B2B**

**Tarjeta de proyecto — contenido obligatorio**

| Campo | Descripción |
|---|---|
| Imagen | Captura desktop + móvil (mockup). Guardada en el repo, en WebP. Nada de iframes ni imágenes enlazadas al sitio original |
| Etiqueta | `Live site` / `Sitio en producción` o `Design proposal` / `Propuesta de diseño` |
| Nombre y sector | Ej.: *Dra. Lisbed Giraldo — Aesthetic dentistry, Sabaneta* |
| Rol | Ej.: *UI/UX design, brand application, front-end* |
| Qué resolví | 1 frase |
| Decisiones clave | 3–4 bullets |
| CTA | **View site ↗** (se abre en pestaña nueva) |

**Fichas**

#### 1. Dra. Lisbed Giraldo
- **URL:** https://lisbedgiraldo.com/
- **Etiqueta:** Sitio en producción
- **Sector / filtro:** Odontología estética, Sabaneta · Health & Beauty
- **Qué resolví:** una clínica con 300+ reseñas en Google no tenía un sitio que convirtiera esa reputación en citas.
- **Decisiones clave:**
  - Quiz de 3 preguntas que orienta al paciente hacia el tratamiento correcto.
  - CTAs a WhatsApp con mensaje prellenado distinto por sección (sabes de dónde viene cada cita).
  - Casos antes/después y bloque para pacientes internacionales, con versión en inglés.
  - SEO local: title, meta, Open Graph y keywords por tratamiento y ciudad.

#### 2. Diego Mejía Dental Group
- **URL:** https://dr-diego-mejia-media.vercel.app/
- **Etiqueta:** Propuesta de diseño
- **Sector / filtro:** Ortodoncia e Invisalign, Bogotá · Health & Beauty
- **Qué resolví:** llevar a la web el contenido de video que ya funcionaba en el Instagram del doctor.
- **Decisiones clave:**
  - Comparador antes/después arrastrable y usable con teclado.
  - Quiz de tratamiento de 1 minuto.
  - Sitio organizado alrededor de los videos con más vistas.
  - CTAs con UTM para medir qué botón genera cada contacto; variantes de color Negro / Dorado.

#### 3. Odont. María Camila Novoa
- **URL:** https://camila-novoa-proposal.vercel.app/
- **Etiqueta:** Propuesta de diseño
- **Sector / filtro:** Diseño de sonrisa, Bogotá · Health & Beauty
- **Qué resolví:** una landing que vende naturalidad, no "dientes blancos".
- **Decisiones clave:**
  - Copy de gancho emocional ("¿Evitas sonreír en las fotos?").
  - Comparador por caso y por ángulo.
  - Proceso en 5 pasos que responde el miedo principal ("nada es definitivo hasta que lo apruebas").
  - Dos paletas (marfil y verde) para que la clienta eligiera.

#### 4. Yünfēng — Asian Head Spa & Skincare
- **URL:** https://yunfeng.vercel.app/
- **Etiqueta:** Propuesta de diseño / concepto
- **Sector / filtro:** Spa y cuidado capilar, Cancún · Health & Beauty
- **Qué resolví:** identidad y sitio de preapertura para un spa que todavía no existe físicamente.
- **Decisiones clave:**
  - Identidad visual de inspiración asiática (ideograma 云, "nube, calma").
  - Reserva en 3 pasos (ritual → fecha → hora) que confirma por WhatsApp.
  - Sección de diagnóstico capilar con IA con interfaz tipo escáner.
  - Galería de video UGC y gift cards.

#### 5. Ordovician Beach Resort
- **URL:** https://ordovician-proposal.vercel.app/
- **Etiqueta:** Propuesta de diseño
- **Sector / filtro:** Hotel boutique, Isla Grande, Panamá · Hospitality
- **Qué resolví:** un sitio de hotel que transmitiera lujo tranquilo y llevara a reservar.
- **Decisiones clave:**
  - Multipágina: home, detalle de suite y reservas.
  - Hero en video y widget de disponibilidad visible desde el inicio.
  - Selector EN/ES para el huésped internacional.
  - Tono editorial (serif, fotografía amplia, mucho aire).

#### 6. Dmaia AI Solutions
- **URL:** https://dmaia.vercel.app/
- **Etiqueta:** Propuesta de diseño
- **Sector / filtro:** Consultoría de datos, Santo Domingo · B2B
- **Qué resolví:** una consultora con tres tipos de cliente muy distintos y un solo sitio.
- **Decisiones clave:**
  - Tres rutas de conversión (Gobierno, ONG, Empresa), cada una con su formulario.
  - Dashboard animado en el hero que muestra el producto en vez de describirlo.
  - Contadores de impacto y casos con cifras.
  - Metodología en 5 etapas.

> **Expandya / Estée Lauder:** no va como tarjeta con capturas (confidencialidad del cliente). Va en *Experiencia* con texto y cifras.

### 7.3 Cómo trabajo
Cinco pasos en fila (o en columna en móvil), un icono y una frase cada uno:

1. **Discovery / Levantamiento** — negocio, público y objetivo del sitio.
2. **Wireframes** — estructura y flujo antes del color.
3. **UI & brand / UI y marca** — diseño visual con la identidad del cliente (o una nueva).
4. **Build / Desarrollo** — Figma a Shopify, Drupal o sitio a medida (HTML, CSS, JS/TS).
5. **Launch & QA / Lanzamiento y QA** — pruebas en móvil, SEO básico y publicación.

### 7.4 Servicios
Cuatro tarjetas:

| Servicio | Descripción corta (EN) |
|---|---|
| UI/UX Design | Wireframes, mockups and prototypes focused on clarity and conversion. |
| Brand Identity | Logo direction, color palette, typography and a simple brand guide. |
| Figma to Web | Pixel-faithful builds in Shopify, Drupal or custom HTML/CSS/JS. |
| Conversion Landing Pages | Mobile-first pages built to turn visits into bookings or leads. |

### 7.5 Experiencia
Timeline corto.

- **Expandya** — E-Commerce Web & CMS Specialist · jun 2025 – hoy · Cliente: The Estée Lauder Companies (Clinique, Balmain Beauty, Smashbox, MAC, Bobbi Brown).
  - 300+ PDPs y decenas de PLPs en Drupal y Shopify, para EE. UU. y Europa.
  - Figma → páginas responsive en producción; ajustes de layout con HTML/CSS.
  - Lanzamientos de temporada multi-locale, merchandising del sitio, SEO on-page y QA en UAT.
- **Mokub** — Cofundadora y diseñadora UI/UX principal · 2025 – hoy.
  - Marcas desde cero y sitios con la marca del cliente, de brief a lanzamiento.
- **Antes:** American Airlines (servicio al cliente internacional, 2024–2025) · Berracao (fundadora, 2024). Una línea cada uno.
- **Formación:** Administración de Negocios Internacionales, Universidad del Sinú. Una línea: *entiendo el negocio detrás del diseño.*

### 7.6 Herramientas
Chips o logos en escala de grises: Figma · Shopify · Drupal · HTML · CSS · JavaScript · TypeScript · Claude · Claude Design · Google Stitch · Jira.

### 7.7 Contacto
- Título: *Let's work together* / *Trabajemos juntos*.
- Correo (ver decisión abierta 1), LinkedIn, WhatsApp (opcional), botones de CV EN y ES.
- Sin formulario en esta fase (evita spam y backend).

### 7.8 Footer
Nombre, año, ubicación (Bogotá, Colombia · Remote) y enlaces repetidos. Quitar "Made with precision."

## 8. Sistema visual

Se mantiene la identidad actual, con ajustes.

| Elemento | Especificación |
|---|---|
| Títulos | Serif editorial (Playfair Display o similar) |
| Texto | Sans limpia (Inter o similar), 16–18 px en cuerpo |
| Fondo | Crema actual |
| Texto principal | Casi negro; **todo el texto debe pasar contraste AA** (4.5:1) |
| Acento | Verde oscuro actual para CTAs y enlaces |
| Imágenes de proyecto | Mockups desktop + móvil sobre fondo neutro, mismo estilo en las 6 |
| Espaciado | Escala de 8 px |
| Botones | Primario sólido verde; secundario con borde |

**Movimiento**
- El contenido es visible por defecto. La animación de entrada solo suma (fade/slide corto, ≤ 300 ms).
- Con `prefers-reduced-motion: reduce` no hay animaciones.
- Ningún bloque puede quedar vacío o transparente si el JS falla o tarda.

**Referencia de estilo:** portafolio de diseñadora, no de consultora. Más imagen de proyecto, menos párrafos.

## 9. Requisitos técnicos

**Stack**
- Sitio estático o pre-renderizado (Astro, Next.js con export estático, o HTML/CSS/JS/TS puro).
- Todo el contenido tiene que estar en el HTML servido, no solo después de ejecutar JS.
- Hosting: Netlify (el actual) o Vercel.

**Responsive**
- Mobile-first. Revisar en 375, 768, 1024 y 1440 px.
- La foto del hero no tapa el texto en móvil.
- Tarjetas de proyectos: 1 columna en móvil, 2 en tablet, 3 en desktop.

**Idiomas**
- Inglés por defecto (`/`) y español (`/es/`), con `hreflang` en ambos.
- Todo traducido; nada mezclado.

**Accesibilidad**
- Un solo H1 por página y jerarquía correcta (H2 por sección, H3 por tarjeta).
- `alt` descriptivo en todas las imágenes.
- Foco visible en enlaces y botones; navegación completa con teclado.
- Contraste AA en todo el texto.
- `lang="en"` / `lang="es"` según la página.

**SEO y redes**
- Title EN: *Adriana Acevedo — UI/UX Designer & Front-End Web Specialist*
- Title ES: *Adriana Acevedo — Diseñadora UI/UX y Especialista Front-End*
- Meta description EN: *UI/UX designer and front-end web specialist. Figma to Shopify, Drupal and custom websites for e-commerce and brands. Based in Bogotá, working remotely.*
- `og:image` de 1200×630 con nombre, rol y foto; `og:title`, `og:description`, `twitter:card`.
- JSON-LD tipo `Person` (nombre, rol, sameAs a LinkedIn).
- `sitemap.xml`, `robots.txt`, favicon.

**Performance**
- Imágenes en WebP/AVIF con `width`/`height` definidos y `loading="lazy"` fuera del primer pantallazo.
- Fuentes con `font-display: swap`, máximo 2 familias.
- Sin librerías pesadas de animación si CSS resuelve.

**Enlaces externos**
- Los sitios de proyectos abren en pestaña nueva con `rel="noopener"`.

## 10. Criterios de aceptación

- [ ] El H1 dice UI/UX Designer & Front-End Web Specialist (EN) y su versión en ES.
- [ ] La sección de proyectos aparece justo después del hero y tiene las 6 fichas con captura, etiqueta, rol, decisiones y enlace.
- [ ] Cada proyecto está marcado como *Sitio en producción* o *Propuesta de diseño*.
- [ ] No queda ninguna imagen de stock.
- [ ] Con JavaScript desactivado se lee todo el contenido.
- [ ] Haciendo scroll rápido no aparece ningún bloque vacío o transparente.
- [ ] Al compartir el link en LinkedIn y WhatsApp sale la imagen, el título y la descripción nuevos.
- [ ] El CV se descarga en EN y ES.
- [ ] El correo es el mismo en el sitio y en el CV.
- [ ] Lighthouse ≥ 90 en las cuatro categorías (móvil).
- [ ] Revisado en 375, 768 y 1440 px sin scroll horizontal.
- [ ] Navegable por teclado con foco visible.

## 11. Decisiones abiertas

1. **Correo definitivo:** `acevedoadriana@gmail.com` (CV) o `acevedoadriana219@gmail.com` (web actual). Debe quedar uno solo en ambos.
2. **Placeholders visibles en las propuestas.** Camila Novoa y Diego Mejía muestran textos "PLACEHOLDER — pendiente" (dirección, horarios, datos clínicos). Yünfēng usa fotos genéricas de equipo y teléfonos de ejemplo. Opciones:
   - a) Limpiarlos antes de enlazarlos, o
   - b) Mostrar esas tarjetas solo con capturas limpias y sin botón "Ver sitio" hasta que estén listas.
3. **Permiso de los clientes.** Confirmar que los dueños de las propuestas no se oponen a que aparezcan en el portafolio.
4. **Mencionar a Estée Lauder por nombre** en la sección de experiencia. Revisar si el contrato con Expandya lo permite; si no, usar "a global prestige beauty group".
5. **WhatsApp en contacto:** incluirlo o no (útil para clientes de LatAm, menos para reclutadores de EE. UU.).
6. **Dominio propio** (ej. `adrianaacevedo.com` o `adrianaacevedo.design`) en vez de `netlify.app`.

## 12. Fuera de alcance (fase 1)

- Formulario de contacto con backend.
- Blog.
- Casos de estudio largos por proyecto (van en fase 2).
- CMS para editar el contenido.

## 13. Fases y entregables

| Fase | Entregable | Aprobación |
|---|---|---|
| 1. Diseño | Mockups en Claude Design del hero, proyectos y versión móvil | Adriana aprueba antes de construir |
| 2. Construcción | Sitio completo EN/ES con todas las secciones | Checklist de la sección 10 |
| 3. Contenido | Capturas de los 6 proyectos, CV en PDF, og:image | Revisión final |
| 4. Publicación | Deploy + dominio (si se decide) + prueba en LinkedIn/WhatsApp | — |
| 5. (Opcional) | Página de caso de estudio para Lisbed Giraldo y un proyecto más | — |