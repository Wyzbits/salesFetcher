import { extractProductTexts, extractProductURLs } from "./createVenumProduct";
import * as cheerio from "cheerio";
import { createBrowser } from "../../util/createBrowser";

const getVenumProduct = async () => {
  const pageData = await createBrowser("https://euro.venum.com/en/outlet.html");
  const $ = cheerio.load(pageData.html);
  const venumsProducts: any = [];
  const elements = $(".column").find(".products-grid");

  const productTexts = extractProductTexts(elements);
  const productLinks = extractProductURLs(elements);

  for (let i = 0; i < productTexts.length; i++) {
    const venumsProductsInfo = {
      productTexts: productTexts[i],
      productLinks: productLinks[i],
    };
    venumsProducts.push(venumsProductsInfo);
  }
  console.log(venumsProducts.length);
  return JSON.stringify(venumsProducts);
};

export { getVenumProduct };
