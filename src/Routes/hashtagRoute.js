import { Router } from "express";
import {  getPostByHashtagController } from "../Controllers/hashtagController.js";
import {  getPostByHashtagMiddleware } from "../Middlewares/hashtagValidationMiddleware.js";

const router = Router();

router.get("/hashtag/:hashtag", getPostByHashtagMiddleware, getPostByHashtagController);

export default router;