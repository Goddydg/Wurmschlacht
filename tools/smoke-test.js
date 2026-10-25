// Plays one complete all-computer game per landscape in headless Chromium and reports script errors.
// Usage: node tools/smoke-test.js [wiese,schiff,...]   (needs Playwright with Chromium)
const { chromium } = require('playwright');
const path = require('path');
const LANDS = ['wiese', 'wueste', 'winter', 'inseln', 'vulkan', 'schiff', 'suess', 'fantasie', 'fruehstueck'];
const url = 'file://' + path.join(__dirname, '..', 'index.html');
(async () => {
  const lands = process.argv[2] ? process.argv[2].split(',') : LANDS;
  const b = await chromium.launch();
  const errs = [];
  for (const land of lands) {
    const pg = await b.newPage({ viewport: { width: 390, height: 780 } });
    pg.on('pageerror', (e) => errs.push(land + ': ' + e));
    // fast-forward: every animation frame advances 100 ms (6 game ticks)
    await pg.addInitScript(() => { let t = 0; window.requestAnimationFrame = (cb) => setTimeout(() => { t += 100; cb(t); }, 0); });
    await pg.goto(url);
    await pg.click('#land [data-land="' + land + '"]');
    await pg.click('#teams [data-n="3"]');
    if (await pg.isVisible('#allymode [data-m="ffa"]')) await pg.click('#allymode [data-m="ffa"]');
    for (let i = 0; i < 3; i++) if (await pg.getAttribute('#who' + i, 'data-cpu') !== '1') await pg.click('#who' + i);
    await pg.click('#start');
    let s = 0;
    for (; s < 300 && !(await pg.isVisible('#winner')); s++) await pg.waitForTimeout(500);
    console.log(land.padEnd(12), await pg.isVisible('#winner') ? await pg.textContent('#wintext') : 'kein Ende nach ' + s / 2 + ' s');
    await pg.close();
  }
  console.log(errs.length ? 'FEHLER:\n' + errs.join('\n') : 'keine Fehler');
  await b.close();
  process.exit(errs.length ? 1 : 0);
})();
