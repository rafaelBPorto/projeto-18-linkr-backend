import { Router } from "express";
import { signUpController } from "../Controllers/authUserController.js";
import { signUpMiddleware } from "../Middlewares/authUserMiddleware.js";

const router = Router();

router.post("/sign-up", signUpMiddleware, signUpController)

export default router;