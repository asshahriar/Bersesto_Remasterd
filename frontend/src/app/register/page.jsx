"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { registerUser, loginUser } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
	const router = useRouter();
	const { refreshUser } = useAuth();

	const [form, setForm] = useState({
		name: "",
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
			await registerUser(form);

			// Registration doesn't create the login cookie,
			// so login immediately after successful registration.
			await loginUser({
				email: form.email,
				password: form.password,
			});

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
				<p className="text-sm text-dark/60">Barsesto</p>

				<h1 className="mt-2 font-young-serif text-4xl">Create an account</h1>

				<p className="mt-2 text-base text-dark/60">
					Create an account to manage your reservations.
				</p>

				<form onSubmit={handleSubmit} className="mt-8 space-y-5">
					<div>
						<label htmlFor="name" className="mb-2 block text-sm">
							Name
						</label>

						<input
							id="name"
							name="name"
							type="text"
							value={form.name}
							onChange={handleChange}
							required
							className="w-full rounded-md border border-dark/15 bg-light px-4 py-3 outline-none focus:border-dark"
						/>
					</div>

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
						{loading ? "Creating account..." : "Create account"}
					</button>
				</form>

				<p className="mt-6 text-sm text-dark/60">
					Already have an account?{" "}
					<Link href="/login" className="text-dark underline">
						Login
					</Link>
				</p>
			</div>
		</main>
	);
}
