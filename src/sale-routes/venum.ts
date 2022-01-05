import express, { Request, Response } from "express";
import { getVenumProduct } from "../create-products/venum/getVenumProducts";

const venumRouter = express.Router();

venumRouter.get("/venum", async (req: Request, res: Response) => {
  const product = await getVenumProduct();
  res.status(200).send(product);
});

export { venumRouter };
