const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function apiRequest(endpoint, options = {}) {
	const response = await fetch(`${API_URL}${endpoint}`, {
		...options,
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			...options.headers,
		},
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Something went wrong");
	}

	return data;
}

export async function loginUser(credentials) {
	return apiRequest("/auth/login", {
		method: "POST",
		body: JSON.stringify(credentials),
	});
}

export async function registerUser(userData) {
	return apiRequest("/auth/register", {
		method: "POST",
		body: JSON.stringify(userData),
	});
}

export async function getCurrentUser() {
	return apiRequest("/auth/me", {
		method: "GET",
	});
}

export async function logoutUser() {
	return apiRequest("/auth/logout", {
		method: "POST",
	});
}

export async function getMenus() {
	return apiRequest("/menu", {
		method: "GET",
	});
}
