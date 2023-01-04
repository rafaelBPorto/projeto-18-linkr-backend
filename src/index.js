
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authUserRoute from "./Routes/authUserRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use(authUserRoute);

const port = 4000;
app.listen(port, () => console.log(`Server runing in port ${port}`));