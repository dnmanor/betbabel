const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://www.betway.com', {waitUntil: 'load', timeout: 0} );
  
  console.log('success');

  await browser.close();
})();