"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LogoutButton() {
	const router = useRouter();
	const { logout } = useAuth();

	async function handleLogout() {
		await logout();
		router.push("/");
	}

	return (
		<button
			type="button"
			onClick={handleLogout}
			className="text-sm underline underline-offset-4"
		>
			Logout
		</button>
	);
}
