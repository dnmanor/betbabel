const puppeteer = require("puppeteer");

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getBookingCode = async (bookiefrom, bookieto, bookingCode) => {
  const width = 1024;
  const height = 1600;

  const selectors = ["#mtSearch", "#searchIconBetslip"];

  console.log("puppeteer started");

  const browser = await puppeteer.launch({
    args: [
      "--disable-dev-shm-usage",
      "--disable-gpu",
      "--single-process",
      "--no-zygote", // helps avoid zombies
      "--no-sandbox",
      "--disable-extensions",
      "--disable-background-networking",
      "--disable-background-timer-throttling",
      "--disable-backgrounding-occluded-windows",
      "--disable-breakpad",
      "--disable-client-side-phishing-detection",
      "--disable-component-update",
      "--disable-default-apps",
      "--disable-domain-reliability",
      "--disable-features=AudioServiceOutOfProcess",
      "--disable-hang-monitor",
      "--disable-ipc-flooding-protection",
      "--disable-notifications",
      "--disable-offer-store-unmasked-wallet-cards",
      "--disable-popup-blocking",
      "--disable-print-preview",
      "--disable-prompt-on-repost",
      "--disable-renderer-backgrounding",
      "--disable-setuid-sandbox",
      "--disable-speech-api",
      "--disable-sync",
      "--disk-cache-size=33554432",
      "--hide-scrollbars",
      "--ignore-gpu-blacklist",
      "--metrics-recording-only",
      "--mute-audio",
      "--no-default-browser-check",
      "--no-first-run",
      "--no-pings",
      "--no-zygote",
      "--password-store=basic",
      "--use-mock-keychain",
      "--autoplay-policy=user-gesture-required",
      "--single-process",
      "--window-size=1920x1080",
    ],
    headless: false,
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

  await timeout(30000);

  await page.waitForSelector(selectors[0]);

  await page.type(selectors[0], "1807F2C9");

  console.log("code typed");

  await page.waitForSelector(selectors[1]);

  await page.keyboard.press("Enter"); // Enter Key

  console.log("search icon clicked");

  await page.click("#betslipBtn");

  await page.waitForXPath;

  const closeButton = await page.$x("/html/body/div/div/div/div[1]/button");

  await timeout(30000);

  await closeButton[0].click();

  await page.screenshot({ path: "pic.png" });

  console.log("done");

  await browser.close();
};

getBookingCode();

// Point to existing Chrome install because NPM won't install Chromium
// const browser = await puppeteer.launch({
//   executablePath:
//     "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
// });
