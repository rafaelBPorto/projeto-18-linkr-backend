import { Router } from "express";
import { signInController, signUpController } from "../Controllers/authUserController.js";
import { signInMiddleware, signUpMiddleware } from "../Middlewares/authUserMiddleware.js";

const router = Router();

router.post("/sign-up", signUpMiddleware, signUpController);
router.post("/", signInMiddleware, signInController);

export default router;