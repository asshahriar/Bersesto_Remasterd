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

	price: z.number().positive("Price must be greater than 0"),

	category: z.string().trim().min(2, "Category is required"),

	image: z.string().url("Image must be a valid URL").optional(),

	isAvailable: z.boolean().optional(),
});

export const updateMenuSchema = createMenuSchema.partial();