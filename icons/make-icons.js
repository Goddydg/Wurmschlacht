// Draws the home screen icons with the game's own worm drawing code.
// Usage: node icons/make-icons.js   (needs Playwright with Chromium)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const fig = src.slice(src.indexOf('function drawFigure('), src.indexOf('// a round portrait'));
const skins = src.match(/const SKINS = \[[^\]]*\];/)[0];
const OUT = __dirname;
(async () => {
  const b = await chromium.launch();
  const pg = await b.newPage();
  const sizes = { 'icon-512.png': 512, 'icon-192.png': 192, 'apple-touch-icon.png': 180, 'favicon-32.png': 32 };
  for (const [name, size] of Object.entries(sizes)) {
    const data = await pg.evaluate(({ fig, skins, size }) => {
      const clamp = (v, a, b2) => Math.max(a, Math.min(b2, v));
      const TAU = Math.PI * 2;
      const draw = new Function('clamp', 'TAU', skins + fig + '; return drawFigure;')(clamp, TAU);
      const c = document.createElement('canvas'); c.width = c.height = size;
      const g = c.getContext('2d'), k = size / 512;
      g.scale(k, k);
      // sky
      const sky = g.createLinearGradient(0, 0, 0, 512);
      sky.addColorStop(0, '#7fbfd0'); sky.addColorStop(0.65, '#d6e7d2'); sky.addColorStop(1, '#efe6c6');
      g.fillStyle = sky; g.fillRect(0, 0, 512, 512);
      // sun
      g.fillStyle = 'rgba(255,236,170,.9)'; g.beginPath(); g.arc(400, 120, 46, 0, TAU); g.fill();
      // hill with grass edge
      g.fillStyle = '#7a5537'; g.beginPath(); g.moveTo(0, 512); g.lineTo(0, 420);
      g.quadraticCurveTo(256, 360, 512, 425); g.lineTo(512, 512); g.closePath(); g.fill();
      g.strokeStyle = '#7da04a'; g.lineWidth = 16; g.beginPath(); g.moveTo(-10, 422); g.quadraticCurveTo(256, 362, 522, 427); g.stroke();
      g.fillStyle = 'rgba(40,26,16,.25)'; [[80, 460, 9], [190, 430, 6], [330, 470, 10], [440, 450, 7]].forEach((d) => { g.beginPath(); g.arc(d[0], d[1], d[2], 0, TAU); g.fill(); });
      // worm with bazooka, kept inside the central safe zone so round and squircle masks don't cut it
      g.save(); g.translate(282, 300); g.scale(11, 11);
      g.save(); g.rotate(-0.42);
      g.fillStyle = '#3b4a2f'; g.fillRect(-2, -7.2, 14, 4.6);
      g.fillStyle = '#2a3422'; g.fillRect(10.5, -7.8, 3, 5.8); g.fillRect(-3.2, -7.6, 2.4, 5.4);
      g.fillStyle = '#d9483b'; g.fillRect(3.5, -7.2, 2.2, 4.6);
      g.restore();
      draw(g, { skin: 0, hat: 'band', hc: '#e94f64', eye: '#3b2516', freckles: true }, '#e4572e', 1, 'focus', { lx: 0.6, ly: -0.2, wig: 0.6 });
      g.restore();
      return c.toDataURL('image/png');
    }, { fig, skins, size });
    fs.writeFileSync(OUT + '/' + name, Buffer.from(data.split(',')[1], 'base64'));
  }
  await b.close();
})();
