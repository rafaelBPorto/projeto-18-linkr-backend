
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authUserRoute from "./Routes/authUserRoute.js";
import timelineRoute from "./Routes/timelineRoute.js"
import hashtagRoute from "./Routes/hashtagRoute.js";
import searchRoute from "./Routes/searchRouters.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use(authUserRoute);
app.use(timelineRoute);
app.use(hashtagRoute);
app.use(searchRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server is running in port ${port}`));