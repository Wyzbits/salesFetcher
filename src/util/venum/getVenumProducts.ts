import { extractText } from "./createVenumProduct";
import * as cheerio from "cheerio";
import { createBrowser } from "../createBrowser";

const getVenumProduct = async () => {
  const pageData = await createBrowser("https://euro.venum.com/en/outlet.html");
  const $ = cheerio.load(pageData.html);

  const element = $(".product-items").find("li");
  const products = extractText(element);
  /*
        
      
      });
      */
  console.log(products);

  return products;
};

export { getVenumProduct };
