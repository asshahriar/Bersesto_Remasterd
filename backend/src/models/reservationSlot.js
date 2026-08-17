import mongoose from "mongoose";

const reservationSlotSchema = new mongoose.Schema(
	{
		date: {
			type: String,
			required: true,
		},

		time: {
			type: String,
			required: true,
		},

		capacity: {
			type: Number,
			required: true,
		},

		reserved: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	},
);

reservationSlotSchema.index(
	{
		date: 1,
		time: 1,
	},
	{
		unique: true,
	},
);

const ReservationSlot = mongoose.model(
	"ReservationSlot",
	reservationSlotSchema,
);

export default ReservationSlot;
