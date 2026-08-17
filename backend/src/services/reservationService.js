import Reservation from "../models/Reservation.js";
import restaurantConfig from "../config/restaurant.js";
import { isValidTimeSlot } from "../utils/timeSlots.js";
import ReservationSlot from "../models/ReservationSlot.js";

export const getAvailability = async (date, time) => {
	const isValid = isValidTimeSlot(
		time,
		restaurantConfig.openingTime,
		restaurantConfig.closingTime,
		restaurantConfig.slotDuration,
	);

	if (!isValid) {
		const error = new Error("Invalid reservation time slot");

		error.statusCode = 400;

		throw error;
	}

	const slot = await ReservationSlot.findOne({
		date,
		time,
	});

	if (!slot) {
		return {
			capacity: restaurantConfig.capacity,
			reserved: 0,
			available: restaurantConfig.capacity,
		};
	}

	return {
		capacity: slot.capacity,
		reserved: slot.reserved,
		available: slot.capacity - slot.reserved,
	};
};

export const createReservation = async ({ userId, date, time, guests }) => {
	// Check whether the time is valid

	const isValid = isValidTimeSlot(
		time,
		restaurantConfig.openingTime,
		restaurantConfig.closingTime,
		restaurantConfig.slotDuration,
	);

	if (!isValid) {
		const error = new Error("Invalid reservation time slot");

		error.statusCode = 400;

		throw error;
	}

	// Find or create the slot

	const slot = await ReservationSlot.findOneAndUpdate(
		{
			date,
			time,
		},
		{
			$setOnInsert: {
				capacity: restaurantConfig.capacity,
				reserved: 0,
			},
		},
		{
			new: true,
			upsert: true,
		},
	);

	// Atomically reserve seats

	const updatedSlot = await ReservationSlot.findOneAndUpdate(
		{
			_id: slot._id,
			$expr: {
				$lte: [
					{
						$add: ["$reserved", guests],
					},
					"$capacity",
				],
			},
		},
		{
			$inc: {
				reserved: guests,
			},
		},
		{
			new: true,
		},
	);

	if (!updatedSlot) {
		const error = new Error("Not enough seats available");

		error.statusCode = 409;

		throw error;
	}

	// Create the actual reservation

	try {
		const reservation = await Reservation.create({
			user: userId,
			date,
			time,
			guests,
			status: "confirmed",
		});

		return reservation;
	} catch (error) {
		// Roll back the reserved seats
		await ReservationSlot.findByIdAndUpdate(slot._id, {
			$inc: {
				reserved: -guests,
			},
		});

		throw error;
	}
};

export const getMyReservations = async (userId) => {
	const reservations = await Reservation.find({
		user: userId,
	}).sort({
		date: 1,
		time: 1,
	});

	return reservations;
};

export const getMyReservationById = async (reservationId, userId) => {
	const reservation = await Reservation.findOne({
		_id: reservationId,
		user: userId,
	});

	if (!reservation) {
		const error = new Error("Reservation not found");
		error.statusCode = 404;

		throw error;
	}

	return reservation;
};

export const cancelReservation = async (reservationId, userId) => {
	const reservation = await Reservation.findOne({
		_id: reservationId,
		user: userId,
	});

	if (!reservation) {
		const error = new Error("Reservation not found");

		error.statusCode = 404;

		throw error;
	}

	if (reservation.status === "cancelled") {
		const error = new Error("Reservation is already cancelled");

		error.statusCode = 400;

		throw error;
	}

	reservation.status = "cancelled";

	await reservation.save();

	await ReservationSlot.findOneAndUpdate(
		{
			date: reservation.date,
			time: reservation.time,
		},
		{
			$inc: {
				reserved: -reservation.guests,
			},
		},
	);

	return reservation;
};

export const getAllReservations = async (filters = {}) => {
	const query = {};

	if (filters.date) {
		query.date = filters.date;
	}

	if (filters.status) {
		query.status = filters.status;
	}

	const reservations = await Reservation.find(query)
		.populate("user", "name email")
		.sort({
			date: 1,
			time: 1,
		});

	return reservations;
};

export const updateReservationStatus = async (reservationId, status) => {
	const reservation = await Reservation.findById(reservationId);

	if (!reservation) {
		const error = new Error("Reservation not found");

		error.statusCode = 404;

		throw error;
	}

	const oldStatus = reservation.status;

	// Nothing to change
	if (oldStatus === status) {
		return reservation;
	}

	// CONFIRMED → CANCELLED
	if (oldStatus === "confirmed" && status === "cancelled") {
		reservation.status = "cancelled";

		await reservation.save();

		await ReservationSlot.findOneAndUpdate(
			{
				date: reservation.date,
				time: reservation.time,
			},
			{
				$inc: {
					reserved: -reservation.guests,
				},
			},
		);

		return reservation;
	}

	// CANCELLED → CONFIRMED
	if (oldStatus === "cancelled" && status === "confirmed") {
		const slot = await ReservationSlot.findOne({
			date: reservation.date,
			time: reservation.time,
		});

		if (!slot) {
			const error = new Error("Reservation slot not found");

			error.statusCode = 404;

			throw error;
		}

		const updatedSlot = await ReservationSlot.findOneAndUpdate(
			{
				_id: slot._id,
				$expr: {
					$lte: [
						{
							$add: ["$reserved", reservation.guests],
						},
						"$capacity",
					],
				},
			},
			{
				$inc: {
					reserved: reservation.guests,
				},
			},
			{
				new: true,
			},
		);

		if (!updatedSlot) {
			const error = new Error("Not enough seats available");

			error.statusCode = 409;

			throw error;
		}

		reservation.status = "confirmed";

		await reservation.save();

		return reservation;
	}

	// Other status changes
	reservation.status = status;

	await reservation.save();

	return reservation;
};