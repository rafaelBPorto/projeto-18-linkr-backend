import { Router } from "express";
import {  getPostByHashtagController, getTopTrendsController } from "../Controllers/hashtagController.js";
import {  getPostByHashtagMiddleware } from "../Middlewares/hashtagValidationMiddleware.js";

const router = Router();

router.get("/hashtag/:hashtag", getPostByHashtagMiddleware, getPostByHashtagController);

router.get("/trends", getTopTrendsController);

export default router;