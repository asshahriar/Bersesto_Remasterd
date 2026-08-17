import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import reservationRoutes from "./routes/reservationRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import menuRoutes from "./routes/menuRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

/*
 * -------------------------
 * Global middleware
 * -------------------------
 */

app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	}),
);

app.use(express.json());

app.use(cookieParser());

/*
 * -------------------------
 * Health check
 * -------------------------
 */

app.get("/api/health", (req, res) => {
	return res.status(200).json({
		success: true,
		message: "Restaurant API is running",
	});
});

/*
 * -------------------------
 * Routes
 * -------------------------
 */

app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/reservations", reservationRoutes);

/*
 * -------------------------
 * Error handler
 * -------------------------
 *
 * IMPORTANT:
 * This MUST be after all routes.
 */

app.use(errorMiddleware);

export default app;
