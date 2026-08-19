"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { loginUser } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
	const router = useRouter();
	const { refreshUser } = useAuth();

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	function handleChange(event) {
		const { name, value } = event.target;

		setForm((previous) => ({
			...previous,
			[name]: value,
		}));
	}

	async function handleSubmit(event) {
		event.preventDefault();

		setError("");
		setLoading(true);

		try {
			await loginUser(form);

			await refreshUser();

			router.push("/");
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<main className="flex min-h-screen items-center justify-center px-5">
			<div className="w-full max-w-md">
				<h1 className="font-young-serif text-4xl">Welcome back</h1>

				<p className="mt-2 text-dark/60">Log in to your account.</p>

				<form onSubmit={handleSubmit} className="mt-8 space-y-5">
					<div>
						<label htmlFor="email" className="mb-2 block text-sm">
							Email
						</label>

						<input
							id="email"
							name="email"
							type="email"
							value={form.email}
							onChange={handleChange}
							required
							className="w-full rounded-md border border-dark/15 bg-light px-4 py-3 outline-none focus:border-dark"
						/>
					</div>

					<div>
						<label htmlFor="password" className="mb-2 block text-sm">
							Password
						</label>

						<input
							id="password"
							name="password"
							type="password"
							value={form.password}
							onChange={handleChange}
							required
							className="w-full rounded-md border border-dark/15 bg-light px-4 py-3 outline-none focus:border-dark"
						/>
					</div>

					{error && <p className="text-sm text-red-600">{error}</p>}

					<button
						type="submit"
						disabled={loading}
						className="w-full rounded-md bg-dark px-5 py-3 text-light disabled:opacity-50"
					>
						{loading ? "Logging in..." : "Login"}
					</button>
				</form>

				<p className="mt-6 text-sm text-dark/60">
					Don&apos;t have an account?{" "}
					<Link href="/register" className="text-dark underline">
						Register
					</Link>
				</p>
			</div>
		</main>
	);
}
