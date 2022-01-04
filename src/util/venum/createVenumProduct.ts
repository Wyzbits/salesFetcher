import * as cheerio from "cheerio";

export const extractText = (
  cheerioElement: cheerio.Cheerio<cheerio.Element>
) => {
  const $ = cheerio.load;
  const allTexts: any = [];
  cheerioElement.each((i, element) => {
    const [discount, title, oldprice, specialPrice] = $(element)
      .text()
      .replace(/(\r\n|\n|\r)/gm, "")
      .split(/[\%\€\$,]+/g);

    const text = {
      discount: discount.trim() + "%",
      title: title.trim(),
      oldprice: oldprice,
      specialPrice: specialPrice + "€",
    };
    allTexts.push(text);
  });
  return allTexts;
};
