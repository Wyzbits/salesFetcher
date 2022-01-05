import { autoScroll } from "./autoScroll";
import puppeteer from "puppeteer";

const createBrowser = async (url: string) => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(url);
  //await autoScroll(page);
  const pageData = await page.evaluate(() => {
    return {
      html: document.documentElement.innerHTML,
    };
  });
  await browser.close();
  return pageData;
};

export { createBrowser };
