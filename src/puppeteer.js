const puppeteer = require("puppeteer");

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getBookingCode = async (bookiefrom, bookieto, bookingCode) => {
  const width = 1024;
  const height = 1600;

  const selectors = ["#mtSearch", "#searchIconBetslip"];

  console.log("puppeteer started");
  // const broswer = await puppeteer.launch({ args: ['--no-sandbox']})

  const browser = await puppeteer.launch({
    // Point to existing Chrome install because NPM won't install Chromium
    executablePath:
      "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  });

  const page = await browser.newPage();

  page.setDefaultNavigationTimeout(90000);

  await page.setViewport({ width: width, height: height });

  await page.setUserAgent("UA-TEST");

  await page.goto(`https://www.betway.com.gh`, {
    waitUntil: "domcontentloaded",
    timeout: 0,
  });

  console.log("page loaded");

  await timeout(30000)

  // await page.waitForSelector('button[title="Quit Tour"]')


  // console.log("dialog closed")

  await page.waitForSelector(selectors[0]);

  await page.type(selectors[0], "1807F2C9");

  console.log("code typed");

  await page.waitForSelector(selectors[1]);

  //   await page.click(selectors[1]);

  await page.keyboard.press("Enter"); // Enter Key

  console.log("search icon clicked");

  // const outcomes = await page.evaluate(() => {
  //   let results = [];
  //   let items = document.querySelectorAll("span label");
  //   items.forEach((item) => {
  //     results.push({
  //       text: item.innerText,
  //     });
  //   });
  //   return results;
  // });
  // console.log(outcomes);
  //   await page.waitForNavigation();

  await page.click("#betslipBtn");

  await page.waitForSelector("#root");

    await timeout(10000);

  //   await page.waitForSelector("div.hlp-dialog-header")

  //   await page.click('#root > div > div > div.hlp-dialog-header > button')

  // page.on('dialog', async dialog => {
  //   console.log(dialog.message());
  //   await dialog.dismiss();
  // });

  await page.click('#root')

  await page.screenshot({ path: "pic.png" });

  console.log("done");

  await browser.close();
  // console.log('See screenshot: ' + screenshot)
};

getBookingCode();

// exports.getBookingCode = getBookingCode

// const initialPage = "https://www.betway.com.gh";

// const selectors = 'div[id$="-bVMpYP"] article a'

// (async () => {
//   let selector;
//   let handles;
//   let handle;

//   const width = 1024;
//   const height = 1600;

//   const browser = await puppeteer.launch({
//     // Point to existing Chrome install because NPM won't install Chromium
//     executablePath:
//       "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
//   });

//   const page = await browser.newPage();

//   page.setDefaultNavigationTimeout(90000);

//   await page.setViewport({ width: width, height: height });

//   await page.setUserAgent("UA-TEST");

//   // Load first page

//   let stat = await page.goto(initialPage, { waitUntil: "domcontentloaded" });

//   // Click on selector 1 - works ok

//   selector = selectors[0];
//   await page.waitForSelector(selector);
//   handles = await page.$$(selector);
//   handle = handles[12];
//   console.log("Clicking on: ", await page.evaluate((el) => el.href, handle));
//   await handle.click(); // OK

//   await page.waitForNavigation();

//   // Click that selector 2 - fails

//   selector = selectors[1];
//   await page.waitForSelector(selector);
//   handles = await page.$$(selector);
//   handle = handles[12];
//   console.log("Clicking on: ", await page.evaluate((el) => el.href, handle));
//   await handle.click();

//   await page.waitForNavigation();

//   await browser.close();
// })();


