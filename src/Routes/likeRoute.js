import { Router } from "express";
import { deleteLikeController, postLikeController } from "../Controllers/likeController.js";
import { deleteLikeMiddleware, postLikeMiddleware } from "../Middlewares/likeMiddleware.js";


const router = Router();

router.post("/likes",postLikeMiddleware, postLikeController);
router.delete("/likes", deleteLikeMiddleware, deleteLikeController);


export default router;