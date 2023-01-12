import { Router } from "express";
import { getAllUsersController } from "../Controllers/search.controllers.js";


const router = Router();

router.get("/search", getAllUsersController)


export default router;

