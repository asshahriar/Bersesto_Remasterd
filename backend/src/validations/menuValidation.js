import { z } from "zod";

export const createMenuSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, "Name must be at least 2 characters")
		.max(100, "Name cannot exceed 100 characters"),

	description: z
		.string()
		.trim()
		.min(5, "Description must be at least 5 characters")
		.max(500, "Description cannot exceed 500 characters"),

	category: z.string().trim().min(2, "Category is required"),

	image: z.string().url("Image must be a valid URL"),

	rating: z
		.number()
		.min(0, "Rating cannot be less than 0")
		.max(5, "Rating cannot exceed 5"),
});

export const updateMenuSchema = createMenuSchema.partial();
