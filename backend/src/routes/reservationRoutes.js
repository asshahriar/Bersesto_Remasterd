import express from "express";

import {
	checkAvailability,
	createReservationController,
	getMyReservationsController,
	getMyReservationByIdController,
	cancelReservationController,
	getAllReservationsController,
	updateReservationStatusController,
} from "../controllers/reservationController.js";

import authMiddleware from "../middleware/authMiddleware.js";
import requireRole from "../middleware/roleMiddleware.js";
import validate from "../middleware/validationMiddleware.js";

import {
	availabilitySchema,
	createReservationSchema,
	updateReservationStatusSchema,
} from "../validations/reservationValidation.js";

const router = express.Router();

// Check available seats
router.get(
	"/availability",
	validate(availabilitySchema, "query"),
	checkAvailability,
);

// Get all reservations belonging to logged-in user
router.get("/my", authMiddleware, getMyReservationsController);
router.get(
	"/",
	authMiddleware,
	requireRole("admin"),
	getAllReservationsController,
);

// Create reservation
router.post(
	"/",
	authMiddleware,
	validate(createReservationSchema),
	createReservationController,
);

// Get one reservation belonging to logged-in user
router.patch("/:id/cancel", authMiddleware, cancelReservationController);
router.patch(
	"/:id/status",
	authMiddleware,
	requireRole("admin"),
	validate(updateReservationStatusSchema),
	updateReservationStatusController,
);
router.get("/:id", authMiddleware, getMyReservationByIdController);

export default router;
