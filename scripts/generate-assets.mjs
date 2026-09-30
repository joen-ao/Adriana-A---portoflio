/**
 * Generates static, self-contained assets into /public:
 *   - og-image.png (1200x630) with name, role and the real photo
 *   - apple-touch-icon.png (180x180)
 *   - 6 project mockup images as WebP (1200x750) — placeholders to be replaced
 *     with real desktop + mobile screenshots in phase 3
 *   - CV placeholder PDFs (EN/ES) so the download links never 404
 *
 * Run automatically before `astro build` (see package.json) or via `npm run assets`.
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const pub = path.join(root, 'public');
const projImgDir = path.join(pub, 'images', 'projects');
const cvDir = path.join(pub, 'cv');

const COLORS = {
  cream: '#F5F0E8',
  offwhite: '#FAFAF7',
  forest: '#2D4A3E',
  forestDeep: '#1C3D2E',
  ink: '#1A1A1A',
  stone: '#6E655B',
  border: '#E1DACE',
};

const projects = [
  { slug: 'lisbed-giraldo', name: 'Dra. Lisbed Giraldo', sector: 'Aesthetic dentistry · Sabaneta', domain: 'lisbedgiraldo.com', accent: '#2D4A3E', tag: 'Live site' },
  { slug: 'diego-mejia', name: 'Diego Mejía Dental Group', sector: 'Orthodontics & Invisalign · Bogotá', domain: 'dr-diego-mejia.vercel.app', accent: '#8A6A2B', tag: 'Design proposal' },
  { slug: 'camila-novoa', name: 'María Camila Novoa', sector: 'Smile design · Bogotá', domain: 'camila-novoa.vercel.app', accent: '#4B6B4A', tag: 'Design proposal' },
  { slug: 'yunfeng', name: 'Yünfēng Head Spa', sector: 'Asian head spa · Cancún', domain: 'yunfeng.vercel.app', accent: '#324B54', tag: 'Design proposal' },
  { slug: 'ordovician', name: 'Ordovician Beach Resort', sector: 'Boutique hotel · Isla Grande', domain: 'ordovician.vercel.app', accent: '#B08D57', tag: 'Design proposal' },
  { slug: 'dmaia', name: 'Dmaia AI Solutions', sector: 'Data consultancy · Santo Domingo', domain: 'dmaia.vercel.app', accent: '#3A4A5A', tag: 'Design proposal' },
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ----------------------------- project mockups ---------------------------- */
function projectSvg(p) {
  const W = 1200, H = 750;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${COLORS.offwhite}"/>
      <stop offset="1" stop-color="${COLORS.cream}"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="30" flood-color="${p.accent}" flood-opacity="0.22"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="0" width="10" height="${H}" fill="${p.accent}"/>

  <!-- desktop window -->
  <g filter="url(#shadow)">
    <rect x="120" y="110" width="770" height="500" rx="16" fill="#ffffff" stroke="${COLORS.border}"/>
    <rect x="120" y="110" width="770" height="46" rx="16" fill="${COLORS.cream}"/>
    <rect x="120" y="140" width="770" height="16" fill="${COLORS.cream}"/>
    <circle cx="146" cy="133" r="6" fill="#E0655B"/>
    <circle cx="168" cy="133" r="6" fill="#E5B23B"/>
    <circle cx="190" cy="133" r="6" fill="#5FB37A"/>
    <rect x="250" y="122" width="560" height="22" rx="11" fill="#ffffff" stroke="${COLORS.border}"/>
    <text x="270" y="138" font-family="Helvetica, Arial, sans-serif" font-size="13" fill="${COLORS.stone}">${esc(p.domain)}</text>
    <!-- content -->
    <rect x="120" y="156" width="770" height="120" fill="${p.accent}" opacity="0.10"/>
    <text x="156" y="230" font-family="Georgia, 'Times New Roman', serif" font-size="40" fill="${COLORS.ink}">${esc(p.name)}</text>
    <text x="158" y="262" font-family="Helvetica, Arial, sans-serif" font-size="16" fill="${COLORS.stone}">${esc(p.sector)}</text>
    <rect x="156" y="320" width="150" height="42" rx="21" fill="${p.accent}"/>
    <text x="231" y="346" font-family="Helvetica, Arial, sans-serif" font-size="15" fill="${COLORS.cream}" text-anchor="middle">View</text>
    <rect x="156" y="400" width="330" height="14" rx="7" fill="${COLORS.border}"/>
    <rect x="156" y="430" width="420" height="14" rx="7" fill="${COLORS.border}"/>
    <rect x="156" y="460" width="270" height="14" rx="7" fill="${COLORS.border}"/>
    <rect x="600" y="320" width="250" height="230" rx="12" fill="${p.accent}" opacity="0.14"/>
  </g>

  <!-- phone -->
  <g filter="url(#shadow)">
    <rect x="852" y="330" width="200" height="360" rx="30" fill="#ffffff" stroke="${COLORS.border}"/>
    <rect x="922" y="346" width="60" height="10" rx="5" fill="${COLORS.border}"/>
    <rect x="872" y="378" width="160" height="96" rx="10" fill="${p.accent}" opacity="0.16"/>
    <text x="888" y="436" font-family="Georgia, serif" font-size="18" fill="${COLORS.ink}">${esc(p.name.split(' ')[0])}</text>
    <rect x="872" y="496" width="120" height="10" rx="5" fill="${COLORS.border}"/>
    <rect x="872" y="518" width="150" height="10" rx="5" fill="${COLORS.border}"/>
    <rect x="872" y="556" width="160" height="40" rx="20" fill="${p.accent}"/>
  </g>

  <text x="130" y="700" font-family="Helvetica, Arial, sans-serif" font-size="15" letter-spacing="2" fill="${COLORS.stone}">${esc(p.tag.toUpperCase())}</text>
</svg>`;
}

/* ------------------------------- og image -------------------------------- */
async function roundedPhoto(src, w, h, r) {
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="${r}" ry="${r}" fill="#fff"/></svg>`
  );
  return sharp(src)
    .resize(w, h, { fit: 'cover', position: 'top' })
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();
}

function ogSvg() {
  const W = 1200, H = 630;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${COLORS.cream}"/>
  <rect x="0" y="0" width="14" height="${H}" fill="${COLORS.forest}"/>
  <text x="80" y="150" font-family="Helvetica, Arial, sans-serif" font-size="20" letter-spacing="4" fill="${COLORS.forest}">PORTFOLIO</text>
  <text x="78" y="235" font-family="Georgia, 'Times New Roman', serif" font-size="70" fill="${COLORS.ink}">Adriana Acevedo</text>
  <text x="80" y="310" font-family="Georgia, serif" font-size="36" fill="${COLORS.forest}">UI/UX Designer &amp;</text>
  <text x="80" y="358" font-family="Georgia, serif" font-size="36" fill="${COLORS.forest}">Front-End Web Specialist</text>
  <rect x="80" y="398" width="70" height="4" fill="${COLORS.forest}"/>
  <text x="80" y="452" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="${COLORS.stone}">From Figma to production —</text>
  <text x="80" y="486" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="${COLORS.stone}">e-commerce &amp; brand websites.</text>
  <text x="80" y="560" font-family="Helvetica, Arial, sans-serif" font-size="20" fill="${COLORS.stone}">Bogotá, Colombia · Remote · EN / ES</text>
  <rect x="760" y="65" width="380" height="500" rx="24" fill="${COLORS.border}"/>
</svg>`;
}

/* ------------------------------- CV PDFs --------------------------------- */
function buildPdf(lines) {
  const pdfEsc = (s) => s.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  let y = 780;
  const parts = [];
  for (const [i, ln] of lines.entries()) {
    const size = i === 0 ? 24 : i === 1 ? 15 : 12;
    parts.push(`BT /F1 ${size} Tf 60 ${y} Td (${pdfEsc(ln)}) Tj ET`);
    y -= i === 0 ? 40 : 24;
  }
  const content = parts.join('\n');
  const objs = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
  ];
  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objs.forEach((o, i) => {
    offsets.push(Buffer.byteLength(pdf));
    pdf += `${i + 1} 0 obj\n${o}\nendobj\n`;
  });
  const xrefPos = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach((off) => {
    pdf += `${String(off).padStart(10, '0')} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;
  return Buffer.from(pdf, 'latin1');
}

/* --------------------------------- run ----------------------------------- */
async function run() {
  await fs.mkdir(projImgDir, { recursive: true });
  await fs.mkdir(cvDir, { recursive: true });

  // project mockups → WebP
  for (const p of projects) {
    const out = path.join(projImgDir, `${p.slug}.webp`);
    await sharp(Buffer.from(projectSvg(p))).webp({ quality: 82 }).toFile(out);
    console.log('  image', path.relative(root, out));
  }

  // og-image with real photo
  const heroPath = path.join(root, 'src', 'assets', 'hero.jpg');
  const base = sharp(Buffer.from(ogSvg()));
  let photo = null;
  try {
    photo = await roundedPhoto(heroPath, 380, 500, 24);
  } catch {
    console.warn('  (hero photo not found, og-image uses placeholder block)');
  }
  const composed = photo ? base.composite([{ input: photo, left: 760, top: 65 }]) : base;
  await composed.png().toFile(path.join(pub, 'og-image.png'));
  console.log('  image public/og-image.png');

  // apple touch icon from favicon monogram
  const icon = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180"><rect width="180" height="180" rx="40" fill="${COLORS.forest}"/><text x="90" y="126" font-family="Georgia, serif" font-size="104" fill="${COLORS.cream}" text-anchor="middle">A</text></svg>`
  );
  await sharp(icon).png().toFile(path.join(pub, 'apple-touch-icon.png'));
  console.log('  image public/apple-touch-icon.png');

  // CV placeholders
  await fs.writeFile(
    path.join(cvDir, 'adriana-acevedo-cv-en.pdf'),
    buildPdf([
      'Adriana Acevedo',
      'UI/UX Designer & Front-End Web Specialist',
      'This is a placeholder CV. Replace with the final PDF before publishing.',
      'Email: acevedoadriana219@gmail.com  ·  Bogota, Colombia  ·  Remote',
    ])
  );
  await fs.writeFile(
    path.join(cvDir, 'adriana-acevedo-cv-es.pdf'),
    buildPdf([
      'Adriana Acevedo',
      'Disenadora UI/UX y Especialista Front-End Web',
      'Este es un CV de marcador de posicion. Reemplazar por el PDF final antes de publicar.',
      'Correo: acevedoadriana219@gmail.com  ·  Bogota, Colombia  ·  Remoto',
    ])
  );
  console.log('  pdf   public/cv/adriana-acevedo-cv-en.pdf, adriana-acevedo-cv-es.pdf');

  console.log('Assets generated.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
