const puppeteer = require("puppeteer");

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getBookingCode = async (bookiefrom, bookieto, bookingCode) => {
  const width = 1024;
  const height = 1600;

  const selectors = ["#booking-code-booking-code", "#view-wrapper > div.view-wrapper-content > div > div.side-bar.content.side-bar-right.open.transition > div > div.booking-code > div.booking-code-form > div:nth-child(2) > button"];

  
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

  await page.goto(`https://www.betpawa.com.gh`, {
    waitUntil: "domcontentloaded",
    timeout: 0,
  });

  console.log("page loaded");

  await timeout(30000);

  await page.waitForSelector(selectors[0]);

  await page.type(selectors[0], "7091946");

  console.log("code typed");

  await page.waitForSelector(selectors[1]);

await page.click(selectors[1]);

//   await page.keyboard.press("Enter"); // Enter Key

  console.log("load icon clicked");


//   await page.waitForSelector("#root");

  await timeout(10000);

//   await page.click("#root");

  await page.screenshot({ path: "betpawa.png" });

  console.log("done");

  await browser.close();
  // console.log('See screenshot: ' + screenshot)
};

getBookingCode();
