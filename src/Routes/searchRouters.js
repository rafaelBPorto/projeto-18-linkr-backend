import { Router } from "express";
import { search } from "../Controllers/search.controllers.js";

const router = Router();

router.get("/timeline/search", search)


export default router;