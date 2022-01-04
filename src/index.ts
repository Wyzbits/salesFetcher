import express, { Application, Request, Response } from "express";
import { venumRouter } from "./salesRoutes/venum";
const app: Application = express();
const port: number = 8080;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/products", venumRouter);

app.listen(port, () => {
  console.log(`App is listining on ${port}`);
});
