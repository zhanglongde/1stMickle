const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Ann array of viewport sizes for different devices.
  const viewports = [1600, 1000, 800, 600, 500];

  await page.goto('https://tutorialzine.com');

  for(let i=0; i < viewports.length; i++) {
    let vw = viewports[i];

    // The height doesn't matter since we are screenshotting the full page.
    await page.setViewport({
      width: vw,
      height: 1000
    });

    await page.screenshot({
      path: `screen-${vw}.png`,
      fullPage: true
    });
  }

  browser.close();
})();