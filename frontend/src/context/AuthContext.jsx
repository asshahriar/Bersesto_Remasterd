"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "@/lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	async function loadUser() {
		try {
			const data = await getCurrentUser();

			setUser(data.user);
		} catch (error) {
			setUser(null);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		loadUser();
	}, []);

	async function logout() {
		try {
			await logoutUser();
		} finally {
			setUser(null);
		}
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				logout,
				refreshUser: loadUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used inside AuthProvider");
	}

	return context;
}
