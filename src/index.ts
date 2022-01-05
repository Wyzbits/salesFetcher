import express, { Application, Request, Response } from "express";
import { everlastRouter } from "./sale-routes/everlast";
import { venumRouter } from "./sale-routes/venum";
const app: Application = express();
const port: number = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/products", venumRouter);
app.use("/products", everlastRouter);
app.listen(port, () => {
  console.log(`App is listining on ${port}`);
});
