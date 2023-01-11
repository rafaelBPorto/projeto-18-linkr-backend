import { Router } from "express";
import { deleteLikeController, postLikeController } from "../Controllers/likeController.js";
import { postLikeMiddleware } from "../Middlewares/likeMiddleware.js";


const router = Router();

router.post("/likes",postLikeMiddleware, postLikeController);
router.delete("/likes", postLikeMiddleware, deleteLikeController);


export default router;