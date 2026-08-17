import { z } from "zod";

export const availabilitySchema = z.object({
	date: z
		.string()
		.regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),

	time: z
		.string()
		.regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Time must be in HH:MM format"),
});

export const createReservationSchema = z.object({
	date: z
		.string()
		.regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),

	time: z
		.string()
		.regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Time must be in HH:MM format"),

	guests: z
		.number({
			error: "Guests must be a number",
		})
		.int("Guests must be a whole number")
		.min(1, "At least 1 guest is required"),
});

export const updateReservationStatusSchema = z.object({
	status: z.enum(["confirmed", "cancelled", "completed"], {
		error: "Invalid reservation status",
	}),
});
