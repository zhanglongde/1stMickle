const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  // Open page.
  await page.goto('https://tutorialzine.com');

  // Show search form.
  await page.click('.search-trigger');

  // Focus input field.
  await page.focus('#search-form-top input');

  // Type in query.
  await page.type('JavaScript', {delay: 200});

  // Submit the form.
  const searchForm = await page.$('#search-form-top');
  await searchForm.evaluate(searchForm => searchForm.submit());

  // Keep the browser open.
  // browser.close();
})()