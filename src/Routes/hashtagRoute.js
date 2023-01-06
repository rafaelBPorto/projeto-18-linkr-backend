import { Router } from "express";
import { getHashtagController } from "../Controllers/hashtagController.js";
import { getHashtagMiddleware } from "../Middlewares/hashtagValidationMiddleware.js";

const router = Router();

router.get("/hashtag/:hashtag", getHashtagMiddleware, getHashtagController);

export default router;