import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},

		date: {
			type: String,
			required: true,
		},

		time: {
			type: String,
			required: true,
		},

		guests: {
			type: Number,
			required: true,
			min: 1,
		},

		status: {
			type: String,
			enum: ["confirmed", "cancelled", "completed"],
			default: "confirmed",
		},
	},
	{
		timestamps: true,
	},
);

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
