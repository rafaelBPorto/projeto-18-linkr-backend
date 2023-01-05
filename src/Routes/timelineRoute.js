import { Router } from "express";
import { publishPostController, timelineController } from "../Controllers/timelineController.js";
import { authorizationToken } from "../Middlewares/authorizationMiddleware.js";
import { publishPostValidation } from "../Middlewares/publishPostValidationMiddleware.js";


const router = Router();

router.get("/timeline", authorizationToken, timelineController);

router.post("/publish-post", authorizationToken, publishPostValidation, publishPostController)

export default router;