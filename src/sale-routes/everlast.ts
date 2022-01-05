import express, { Request, Response } from "express";
import { getEverlastProduct } from "../create-products/everlast/getEverlastProduct";
import { getVenumProduct } from "../create-products/venum/getVenumProducts";

const everlastRouter = express.Router();

everlastRouter.get("/everlast", async (req: Request, res: Response) => {
  const product = await getEverlastProduct();
  res.status(200).send(product);
});

export { everlastRouter };
