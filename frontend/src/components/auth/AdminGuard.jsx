"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AdminGuard({ children }) {
	const router = useRouter();
	const { user, loading } = useAuth();

	useEffect(() => {
		if (loading) return;

		if (!user) {
			router.replace("/login");
			return;
		}

		if (user.role !== "admin") {
			router.replace("/");
		}
	}, [user, loading, router]);

	if (loading) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-light text-dark">
				<p className="text-sm text-dark/60">Checking authentication...</p>
			</div>
		);
	}

	if (!user || user.role !== "admin") {
		return null;
	}

	return children;
}
