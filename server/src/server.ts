import express from "express";
import cors from "cors";
import { routes } from "./routes";
import bodyParser from "body-parser";

const app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json({ limit: "900kb" }));

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 4444, () => {
  console.log("HTTP server running!");
});
