import {
	getAvailability,
	createReservation,
	getMyReservations,
	getMyReservationById,
	cancelReservation,
	getAllReservations,
	updateReservationStatus,
} from "../services/reservationService.js";

export const checkAvailability = async (req, res, next) => {
	try {
		const { date, time } = req.query;

		const availability = await getAvailability(date, time);

		return res.status(200).json({
			success: true,
			date,
			time,
			...availability,
		});
	} catch (error) {
		next(error);
	}
};

export const createReservationController = async (req, res, next) => {
	try {
		const { date, time, guests } = req.body;

		const reservation = await createReservation({
			userId: req.user.id,
			date,
			time,
			guests,
		});

		return res.status(201).json({
			success: true,
			message: "Reservation created successfully",
			reservation,
		});
	} catch (error) {
		next(error);
	}
};

export const getMyReservationsController = async (req, res, next) => {
	try {
		const reservations = await getMyReservations(req.user.id);

		return res.status(200).json({
			success: true,
			reservations,
		});
	} catch (error) {
		next(error);
	}
};

export const getMyReservationByIdController = async (req, res, next) => {
	try {
		const reservation = await getMyReservationById(req.params.id, req.user.id);

		return res.status(200).json({
			success: true,
			reservation,
		});
	} catch (error) {
		next(error);
	}
};

export const cancelReservationController = async (req, res, next) => {
	try {
		const reservation = await cancelReservation(req.params.id, req.user.id);

		return res.status(200).json({
			success: true,
			message: "Reservation cancelled successfully",
			reservation,
		});
	} catch (error) {
		next(error);
	}
};

export const getAllReservationsController = async (req, res, next) => {
	try {
		const reservations = await getAllReservations(req.query);

		return res.status(200).json({
			success: true,
			reservations,
		});
	} catch (error) {
		next(error);
	}
};

export const updateReservationStatusController = async (req, res, next) => {
	try {
		const { status } = req.body;

		const reservation = await updateReservationStatus(req.params.id, status);

		return res.status(200).json({
			success: true,
			message: "Reservation status updated successfully",
			reservation,
		});
	} catch (error) {
		next(error);
	}
};