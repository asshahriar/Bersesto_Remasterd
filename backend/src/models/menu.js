import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},

		description: {
			type: String,
			required: true,
			trim: true,
		},

		category: {
			type: String,
			required: true,
			trim: true,
		},

		image: {
			type: String,
			publicId: String,
			required: true,
		},

		rating: {
			type: Number,
			required: true,
			min: 0,
			max: 5,
		},
	},
	{
		timestamps: true,
	},
);

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
