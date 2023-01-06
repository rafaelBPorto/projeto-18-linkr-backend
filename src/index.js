
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authUserRoute from "./Routes/authUserRoute.js";
import timelineRoute from "./Routes/timelineRoute.js"
import hashtagRoute from "./Routes/hashtagRoute.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use(authUserRoute);
app.use(timelineRoute);
app.use(hashtagRoute);

const port = 4000;
app.listen(port, () => console.log(`Server runing in port ${port}`));