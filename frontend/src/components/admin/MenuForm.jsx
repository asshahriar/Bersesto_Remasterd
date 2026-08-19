"use client";

import { useState } from "react";

export default function MenuForm() {
	const [form, setForm] = useState({
		name: "",
		description: "",
		category: "",
		rating: "",
	});

	function handleChange(event) {
		const { name, value } = event.target;

		setForm((previous) => ({
			...previous,
			[name]: value,
		}));
	}

	function handleSubmit(event) {
		event.preventDefault();

		console.log(form);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-8">
			<div className="space-y-2">
				<label htmlFor="name" className="text-sm">
					Name
				</label>

				<input
					id="name"
					name="name"
					value={form.name}
					onChange={handleChange}
					placeholder="Classic Beef Burger"
					className="w-full rounded-md border border-dark/15 bg-light px-4 py-3 outline-none focus:border-dark"
					required
				/>
			</div>

			<div className="space-y-2">
				<label htmlFor="description" className="text-sm">
					Description
				</label>

				<textarea
					id="description"
					name="description"
					value={form.description}
					onChange={handleChange}
					placeholder="Describe the dish..."
					rows={5}
					className="w-full resize-none rounded-md border border-dark/15 bg-light px-4 py-3 outline-none focus:border-dark"
					required
				/>
			</div>

			<div className="grid gap-6 sm:grid-cols-2">
				<div className="space-y-2">
					<label htmlFor="category" className="text-sm">
						Category
					</label>

					<input
						id="category"
						name="category"
						value={form.category}
						onChange={handleChange}
						placeholder="Italian"
						className="w-full rounded-md border border-dark/15 bg-light px-4 py-3 outline-none focus:border-dark"
						required
					/>
				</div>

				<div className="space-y-2">
					<label htmlFor="rating" className="text-sm">
						Rating
					</label>

					<input
						id="rating"
						name="rating"
						type="number"
						min="0"
						max="5"
						step="0.1"
						value={form.rating}
						onChange={handleChange}
						placeholder="4.8"
						className="w-full rounded-md border border-dark/15 bg-light px-4 py-3 outline-none focus:border-dark"
						required
					/>
				</div>
			</div>

			<div className="space-y-2">
				<p className="text-sm">Menu Image</p>

				<div className="rounded-md border border-dashed border-dark/20 p-8 text-center">
					<p className="text-sm text-dark/60">
						Cloudinary image upload will go here.
					</p>
				</div>
			</div>

			<button
				type="submit"
				className="rounded-md bg-dark px-6 py-3 text-sm text-light"
			>
				Create Menu Item
			</button>
		</form>
	);
}
