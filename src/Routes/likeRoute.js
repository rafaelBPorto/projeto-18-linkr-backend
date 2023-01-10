import { Router } from "express";
import { postLikeController } from "../Controllers/likeController.js";
import { postLikeMiddleware } from "../Middlewares/likeMiddleware.js";


const router = Router();

router.post("/likes",postLikeMiddleware, postLikeController);


export default router;