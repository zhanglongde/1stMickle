const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless:false
  });
  const page = await browser.newPage();

  await page.setViewport({
    width: 1600,
    height: 1000
  });

  await page.goto('https://tutorialzine.com');
  await page.screenshot({
    path: 'landing-page.png',
    fullPage: true
  });

  browser.close();
})();