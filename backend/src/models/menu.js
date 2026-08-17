import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
			maxlength: 100,
		},

		description: {
			type: String,
			required: true,
			trim: true,
			maxlength: 500,
		},

		price: {
			type: Number,
			required: true,
			min: 0,
		},

		category: {
			type: String,
			required: true,
			trim: true,
		},

		image: {
			type: String,
			default: "",
		},

		isAvailable: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
	},
);

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
