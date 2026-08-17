import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../utils/jwt.js";

export const registerUser = async ({ name, email, password }) => {
	const existingUser = await User.findOne({ email });

	if (existingUser) {
		const error = new Error("Email is already registered");
		error.statusCode = 409;

		throw error;
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	return user;
};

export const loginUser = async ({ email, password }) => {
	const user = await User.findOne({ email });

	if (!user) {
		const error = new Error("Invalid email or password");
		error.statusCode = 401;

		throw error;
	}

	const passwordMatches = await bcrypt.compare(password, user.password);

	if (!passwordMatches) {
		const error = new Error("Invalid email or password");
		error.statusCode = 401;

		throw error;
	}

	const token = generateToken(user._id.toString());

	return {
		user,
		token,
	};
};
