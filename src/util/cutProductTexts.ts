import { IVenumTexts } from "../create-products/venum/createVenumProduct";

export const cutProductTexts = (productTexts: IVenumTexts) => {
  if (productTexts.discount) {
    productTexts.discount = productTexts.discount.trim() + "€";
  }
  if (productTexts.oldprice) {
    productTexts.oldprice = productTexts.oldprice.trim() + "€";
  }
  if (productTexts.title) {
    productTexts.title = productTexts.title.trim();
  }
  if (productTexts.specialPrice) {
    productTexts.specialPrice = productTexts.specialPrice.split(" ")[0] + "€";
  }

  return productTexts;
};
