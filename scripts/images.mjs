// Génère les variantes WebP responsives : node scripts/images.mjs
import sharp from 'sharp';
import { mkdirSync, writeFileSync } from 'node:fs';

const SRC = {
  'hero-1': 'public/images/hero-1.jpg',
  'hero-2': 'public/images/hero-2.jpeg',
  'hero-3': 'public/images/hero-3.jpg',
  ...Object.fromEntries([1, 2, 3, 4, 5, 6, 7, 8].map((n) => [`projets-${n}`, `public/images/projets/${n}.jpg`])),
};
const WIDTHS = [480, 960, 1600];
const OUT = 'public/images/opt';
mkdirSync(OUT, { recursive: true });
const manifest = {};

for (const [key, file] of Object.entries(SRC)) {
  const img = sharp(file).rotate();
  const { width, height } = await img.metadata();
  const widths = WIDTHS.filter((w) => w < width);
  if (!widths.includes(width) && width <= WIDTHS.at(-1)) widths.push(width);
  else if (width > WIDTHS.at(-1)) widths.push(WIDTHS.at(-1));
  manifest[key] = { w: width, h: height, widths: [...new Set(widths)].sort((a, b) => a - b) };
  for (const w of manifest[key].widths) await sharp(file).rotate().resize({ width: w }).webp({ quality: 80 }).toFile(`${OUT}/${key}-${w}.webp`);
  // Vignette floutée pour les fonds décoratifs (quelques centaines d'octets).
  await sharp(file).rotate().resize({ width: 48 }).webp({ quality: 50 }).toFile(`${OUT}/${key}-xs.webp`);
}
// Image de partage 1200×630 (photo entière, bandes bleu institutionnel).
await sharp('public/images/projets/6.jpg').resize({ width: 945, height: 630, fit: 'contain', background: '#002b5c' })
  .extend({ left: 128, right: 127, background: '#002b5c' }).jpeg({ quality: 85 }).toFile('public/images/og.jpg');
writeFileSync('src/data/imgmanifest.json', JSON.stringify(manifest, null, 2));
console.log('OK', Object.keys(manifest).length);
