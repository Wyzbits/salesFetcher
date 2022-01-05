import { createBrowser } from "../../util/createBrowser";
import {
  extractProductTexts,
  extractProductURLs,
} from "./createEverlastProduct";
import * as cheerio from "cheerio";

const getEverlastProduct = async () => {
  const pageData = await createBrowser(
    "https://ukstore.everlast.com/sale-all#dcp=1&dppp=120&OrderBy=recent&Filter=CATG%5EWatches%2CTraining%20Accessories%2CFight%20Sports%20Equipment%2CHeadwear%2CMouthguards%2CSupports"
  );
  const $ = cheerio.load(pageData.html);
  const everlastProducts: any = [];
  const elements = $("#productlistcontainer").find("#navlist");
  console.log(elements.html());
  const productTexts = extractProductTexts(elements);
  /*
  for (let i = 0; i < productTexts.length; i++) {
    const venumsProductsInfo = {
      productTexts: productTexts[i],
      productLinks: productLinks[i],
    };
    venumsProducts.push(venumsProductsInfo);
  }
  */
};

export { getEverlastProduct };
