import express from "express";

import {
	createMenu,
	getMenus,
	getMenu,
	updateMenu,
} from "../controllers/menuController.js";

import validate from "../middleware/validationMiddleware.js";

import {
	createMenuSchema,
	updateMenuSchema,
} from "../validations/menuValidation.js";


import authMiddleware from "../middleware/authMiddleware.js";
import requireRole from "../middleware/roleMiddleware.js";

const router = express.Router();

// Public
router.get("/", getMenus);

router.get("/:id", getMenu);

// Admin only
router.post(
	"/",
	authMiddleware,
	requireRole("admin"),
	validate(createMenuSchema),
	createMenu,
);

router.patch(
	"/:id",
	authMiddleware,
	requireRole("admin"),
	validate(updateMenuSchema),
	updateMenu,
);

export default router;
