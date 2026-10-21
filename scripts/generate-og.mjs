import sharp from 'sharp';
import { readFile } from 'node:fs/promises';

const photo = await sharp('src/assets/gallery/party-painting-apron.jpg')
  .rotate()
  .resize(440, 540, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 90 })
  .toBuffer();

const logo = await sharp('src/assets/logo-wide.png').resize({ width: 240 }).png().toBuffer();

const photoData = `data:image/jpeg;base64,${photo.toString('base64')}`;
const logoData = `data:image/png;base64,${logo.toString('base64')}`;

const arch =
  'M700 585 L700 275 A210 210 0 0 1 1120 275 L1120 565 Q1120 585 1100 585 Z';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.5" fill="#13363d" opacity="0.16"/>
    </pattern>
    <clipPath id="arch"><path d="${arch}"/></clipPath>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#13363d" flood-opacity="0.25"/>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="#fbf4e8"/>
  <circle cx="1020" cy="80" r="250" fill="#0aa9df" opacity="0.10"/>
  <circle cx="650" cy="590" r="150" fill="#f47886" opacity="0.14"/>
  <circle cx="80" cy="560" r="90" fill="#d9efe1"/>
  <rect x="590" y="40" width="120" height="120" fill="url(#dots)"/>

  <ellipse cx="910" cy="590" rx="250" ry="26" fill="#13363d" opacity="0.10"/>

  <image href="${logoData}" x="64" y="48" width="250" height="100" preserveAspectRatio="xMinYMin meet"/>

  <rect x="66" y="164" width="370" height="42" rx="21" fill="#fffdf8" stroke="#13363d" stroke-opacity="0.12"/>
  <circle cx="88" cy="185" r="5" fill="#f47886"/>
  <text x="103" y="191" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" letter-spacing="2.8" fill="#087fa9">NASHVILLE'S FAMILY CRAFT STUDIO</text>

  <text x="62" y="306" font-family="Georgia, 'Times New Roman', serif" font-size="84" font-weight="700" letter-spacing="-3" fill="#13363d">Craft parties</text>
  <text x="62" y="396" font-family="Georgia, 'Times New Roman', serif" font-size="84" font-weight="700" letter-spacing="-3" fill="#13363d">worth getting</text>
  <text x="62" y="486" font-family="Georgia, 'Times New Roman', serif" font-size="84" font-weight="700" letter-spacing="-3" fill="#13363d">messy <tspan fill="#087fa9">for.</tspan></text>

  <path d="M68 501 C 128 492, 184 492, 244 500" fill="none" stroke="#f47886" stroke-width="8" stroke-linecap="round"/>

  <text x="66" y="544" font-family="Arial, Helvetica, sans-serif" font-size="23" font-weight="600" fill="#3d6068">Mobile craft parties for families in Nashville.</text>
  <text x="66" y="586" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="700" fill="#13363d" opacity="0.68">Up to 10 kids  ·  All supplies included  ·  We come to you</text>

  <g filter="url(#soft)">
    <path d="${arch}" fill="#fffdf8"/>
  </g>
  <g clip-path="url(#arch)">
    <image href="${photoData}" x="700" y="45" width="440" height="540" preserveAspectRatio="xMidYMid slice"/>
  </g>
  <path d="${arch}" fill="none" stroke="#fffdf8" stroke-width="12"/>

  <g transform="translate(1082 470) rotate(8)">
    <circle r="62" fill="#f7c65f" stroke="#13363d" stroke-width="3"/>
    <text x="0" y="-6" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="800" letter-spacing="1.2" fill="#13363d">ALL SUPPLIES</text>
    <text x="0" y="11" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="11" font-weight="800" letter-spacing="1.2" fill="#13363d">INCLUDED</text>
    <path d="M-11 24 l 5 6 l 11 -13" fill="none" stroke="#13363d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <path d="M650 186 c 3 18 10 25 28 28 c -18 3 -25 10 -28 28 c -3 -18 -10 -25 -28 -28 c 18 -3 25 -10 28 -28 Z" fill="#f47886"/>
  <path d="M612 218 c 2 10 6 14 16 16 c -10 2 -14 6 -16 16 c -2 -10 -6 -14 -16 -16 c 10 -2 14 -6 16 -16 Z" fill="#f7c65f"/>
</svg>
`;

await sharp(Buffer.from(svg))
  .png({ quality: 92 })
  .toFile('public/og-image.png');

const source = await readFile('public/og-image.png');
console.log(`Generated public/og-image.png (${Math.round(source.length / 1024)} KB)`);
