const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()

  const navigationPromise = page.waitForNavigation()

  await page.goto('https://www.jianshu.com/p/56babda610f9')

  await page.setViewport({ width: 1920, height: 937 })

  await page.waitForSelector('.post > .article > .show-content > .show-content-free > p:nth-child(1)')
  await page.click('.post > .article > .show-content > .show-content-free > p:nth-child(1)')

  await page.waitForSelector('.article > .author > .info > .name > a')
  await page.click('.article > .author > .info > .name > a')

  await navigationPromise


//   await browser.close()

})()
