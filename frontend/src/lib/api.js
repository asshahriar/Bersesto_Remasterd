const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getMenus() {
	const response = await fetch(`${API_URL}/menu`);

	if (!response.ok) {
		throw new Error("Failed to fetch menu items");
	}

	const data = await response.json();

	return data.menuItems;
}
