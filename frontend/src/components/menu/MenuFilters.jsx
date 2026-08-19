"use client";

export default function MenuFilters({
	categories,
	activeCategory,
	onCategoryChange,
}) {
	return (
		<div className="flex flex-wrap justify-center gap-2">
			<button
				type="button"
				onClick={() => onCategoryChange("All")}
				className={`rounded-full px-4 py-2 text-sm ${
					activeCategory === "All"
						? "bg-dark text-light"
						: "bg-secondary text-dark"
				}`}
			>
				All
			</button>

			{categories.map((category) => (
				<button
					key={category}
					type="button"
					onClick={() => onCategoryChange(category)}
					className={`rounded-full px-4 py-2 text-sm ${
						activeCategory === category
							? "bg-dark text-light"
							: "bg-secondary text-dark"
					}`}
				>
					{category}
				</button>
			))}
		</div>
	);
}
