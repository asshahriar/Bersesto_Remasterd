import { registerUser, loginUser } from "../services/authService.js";

export const register = async (req, res, next) => {
	try {
		const { name, email, password } = req.body;

		const user = await registerUser({
			name,
			email,
			password,
		});

		return res.status(201).json({
			success: true,
			message: "User registered successfully",
			user: {
				id: user._id,
				name: user.name,
				email: user.email,
				role: user.role,
			},
		});
	} catch (error) {
		return next(error);
	}
};


export const login = async(req, res, next) => {
	try {
		const {email, password} = req.body;

		const {user, token} = await loginUser({
			email,
			password
		})

		res.cookie("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			maxAge: 3* 24 * 60 * 60 * 1000,
		})

		return res.status(200).json({
			success: true,
			message: "Login Sucessful",
			user: {
				 id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
			}
		})
	} catch (error) {
		return next(error)
	}
}

export const logout = async (req, res) => {
	res.clearCookie("token", {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
	});

	return res.status(200).json({
		success: true,
		message: "Logout successful",
	});
};

export const adminTest = async (req, res) => {
	return res.status(200).json({
		success: true,
		message: "Welcome admin",
		user: {
			id: req.user._id,
			name: req.user.name,
			role: req.user.role,
		},
	});
};


export const getMe = async(req, res) => {
	return res.status(200).json({
		success: true,
		user: {
			id: req.user._id,
			name: req.user.name,
			email: req.user.email,
			role: req.user.role,
		},
	});
}