import express from "express";
import {
	register,
	login,
	logout,
	getMe,
	adminTest,
} from "../controllers/authController.js";
import validate from "../middleware/validationMiddleware.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { registerSchema, loginSchema } from "../validations/authValidation.js";
import requireRole from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.get("/me", authMiddleware, getMe);
router.post("/logout", logout);
router.get("/admin-test", authMiddleware, requireRole("admin"), adminTest);

export default router;
