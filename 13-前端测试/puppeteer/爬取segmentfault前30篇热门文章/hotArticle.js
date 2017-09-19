/**
 * Created by Administrator on 2017/9/19.
 */

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto('https://segmentfault.com/news/frontend')
  var SfFeArticleList = await page.evaluate(() => {
    var list = [...document.querySelectorAll('.news__list .news__item-title a')]
    return list.map(el => {
      return {href: el.href.trim(), title: el.innerText}
    })
  })
  console.log(SfFeArticleList)
  await page.screenshot({path: './sf-juejin/sf.png', type: 'png'});
})();


