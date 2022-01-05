import { cutProductTexts } from "./../../util/cutProductTexts";
import * as cheerio from "cheerio";
import { html } from "cheerio/lib/api/manipulation";

export interface IVenumTexts {
  discount: string;
  title: string;
  oldprice: string;
  specialPrice: string;
}

export const extractProductTexts = (
  cheerioElement: cheerio.Cheerio<cheerio.Element>
) => {
  const $ = cheerio.load;
  const allTexts: IVenumTexts[] = [];
  cheerioElement.find("li").each((i, element) => {
    const [discount, title, oldprice, specialPrice] = $(element)
      .text()
      .replace(/(\r\n|\n|\r)/gm, "")
      .split(/[\%\€\$,]+/g);

    const texts: IVenumTexts = {
      discount: discount.trim() + "%",
      title: title.trim(),
      oldprice: oldprice,
      specialPrice: specialPrice + "€",
    };

    allTexts.push(cutProductTexts(texts));
  });

  return allTexts;
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
