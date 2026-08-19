"use client";

import { useEffect, useMemo, useState } from "react";
import MenuCard from "@/components/menu/MenuCard";
import MenuFilters from "@/components/menu/MenuFilters";
import { getMenus } from "@/lib/api";

export default function MenuPage() {
	const [menus, setMenus] = useState([]);
	const [activeCategory, setActiveCategory] = useState("All");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		async function fetchMenus() {
			try {
				const data = await getMenus();

				setMenus(data);
			} catch (error) {
				console.error(error);
				setError("Unable to load the menu.");
			} finally {
				setLoading(false);
			}
		}

		fetchMenus();
	}, []);

	const categories = useMemo(() => {
		return [...new Set(menus.map((menu) => menu.category).filter(Boolean))];
	}, [menus]);

	const filteredMenus = useMemo(() => {
		if (activeCategory === "All") {
			return menus;
		}

		return menus.filter((menu) => menu.category === activeCategory);
	}, [menus, activeCategory]);

	return (
		<main className="section bg-light">
			<div className="container">
				<div className="mx-auto max-w-2xl text-center">
					<h1 className="font-young-serif text-5xl leading-[0.9] text-dark sm:text-6xl lg:text-7xl">
						Curated Cuisines
						<br />
						by World-Class Chefs
					</h1>

					<p className="mx-auto mt-5 max-w-lg text-base leading-tight text-dark/80">
						Discover our carefully curated selection of dishes, prepared with
						fresh ingredients by our world-class chefs.
					</p>
				</div>

				<div className="mt-8">
					<MenuFilters
						categories={categories}
						activeCategory={activeCategory}
						onCategoryChange={setActiveCategory}
					/>
				</div>

				{loading && <p className="py-20 text-center">Loading our menu...</p>}

				{!loading && error && <p className="py-20 text-center">{error}</p>}

				{!loading && !error && filteredMenus.length === 0 && (
					<p className="py-20 text-center">No menu items found.</p>
				)}

				{!loading && !error && filteredMenus.length > 0 && (
					<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
						{filteredMenus.map((menu) => (
							<MenuCard key={menu._id} menu={menu} />
						))}
					</div>
				)}
			</div>
		</main>
	);
}
