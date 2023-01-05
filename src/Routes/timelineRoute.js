import { Router } from "express";
import { timelineController } from "../Controllers/timelineController.js";
import { authorizationToken } from "../Middlewares/authorizationMiddleware.js";


const router = Router();

router.get("/timeline", authorizationToken, timelineController);

export default router;