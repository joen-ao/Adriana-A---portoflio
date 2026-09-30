/**
 * Generates static, self-contained assets into /public:
 *   - og-image.png (1200x630) with name, role and the real photo
 *   - apple-touch-icon.png (180x180)
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
  await fs.mkdir(cvDir, { recursive: true });

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
