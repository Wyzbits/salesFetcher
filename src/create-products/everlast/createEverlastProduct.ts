import { cutProductTexts } from "./../../util/cutProductTexts";
import * as cheerio from "cheerio";

export const extractProductTexts = (
  cheerioElement: cheerio.Cheerio<cheerio.Element>
) => {
  const $ = cheerio.load;
  const allTexts: [] = [];
  console.log(cheerioElement.html());
  cheerioElement.find("li").each((i, element) => {
    //const [discount, title, oldprice, specialPrice] =
    console.log($(element).html());
    console.log(
      $(element)
        .text()
        .replace(/(\r\n|\n|\r)/gm, "")
        .split(/[\%\€\$,]+/g)
    );

    /*
    const texts = {
      discount: discount.trim() + "%",
      title: title.trim(),
      oldprice: oldprice,
      specialPrice: specialPrice + "€",
    };

  });

  return allTexts;
  */
  });
};

export const extractProductURLs = (
  cheerioElement: cheerio.Cheerio<cheerio.Element>
) => {
  const links = cheerioElement.find("a.product-item-photo").toString();
  const $ = cheerio.load(links);
  const URLs: any = [];
  $(links).each((i, element) => {
    const productLink = $(element).attr("href");
    const imgLink = $(element).find(".product-image-photo").attr("src");
    const ProductURLs = {
      productLink: productLink,
      imgLink: imgLink,
    };
    URLs.push(ProductURLs);
  });

  return URLs;
};
