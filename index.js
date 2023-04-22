import express from "express";
import cors from "cors";
import connectAddsDb from "./src/dbConnections/addsDbCon.js";
import addsRoute from "./src/routes/advertisements.js";

const port = 4000;
const app = express();

app.listen(port, () => {
  console.log(`Server successfully running at ${port}`);
});
connectAddsDb();

app.use(express.json());
app.use(cors());
app.use(addsRoute);
