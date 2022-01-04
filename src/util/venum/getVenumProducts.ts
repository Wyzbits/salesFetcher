import { extractProductTexts, extractProductURLs } from "./createVenumProduct";
import * as cheerio from "cheerio";
import { createBrowser } from "../createBrowser";

const getVenumProduct = async () => {
  const pageData = await createBrowser("https://euro.venum.com/en/outlet.html");
  const $ = cheerio.load(pageData.html);

  const elements = $(".product-items").find("li");
  console.log(elements);
  const products = extractProductURLs(elements);

  console.log(products);

  return products;
};

export { getVenumProduct };
