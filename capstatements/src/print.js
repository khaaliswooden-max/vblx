const { chromium } = require('playwright');
const path = require('path');

const OUT = path.resolve(__dirname, '..');
const SHEETS = ['VBX_CapStatement_HC_IT_v2', 'VBX_CapStatement_GEN_IT_v2'];

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage();
  for (const stem of SHEETS) {
    const src = path.join(OUT, `${stem}.html`);
    await page.goto('file://' + src, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    // report the rendered height of the sheet so we can verify 1-page fit
    const h = await page.evaluate(() => {
      const el = document.querySelector('.page');
      return { scroll: el.scrollHeight, client: el.clientHeight, body: document.body.scrollHeight };
    });
    console.log(`${stem}: sheet scrollHeight=${h.scroll}px clientHeight=${h.client}px body=${h.body}px (box=979.2px)`);
    await page.pdf({
      path: path.join(OUT, `${stem}.pdf`),
      format: 'Letter',
      printBackground: true,
      margin: { top: '0.4in', right: '0.4in', bottom: '0.4in', left: '0.4in' },
      preferCSSPageSize: false,
    });
  }
  await browser.close();
})();
