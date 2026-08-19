"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "@/components/auth/LogoutButton";

const navigation = [
	{
		name: "Dashboard",
		href: "/admin",
	},
	{
		name: "Reservations",
		href: "/admin/reservations",
	},
	{
		name: "Menu",
		href: "/admin/menu",
	},
	{
		name: "Restaurant",
		href: "/admin/restaurant",
	},
];

export default function AdminSidebar() {
	const pathname = usePathname();

	return (
		<aside className="hidden w-64 shrink-0 border-r border-dark/10 bg-secondary lg:block">
			<div className="sticky top-0 flex h-screen flex-col p-6">
				<Link href="/admin" className="font-young-serif text-2xl">
					Barsesto
				</Link>

				<p className="mt-1 text-sm text-dark/60">Admin Panel</p>

				<nav className="mt-10 flex flex-col gap-1">
					{navigation.map((item) => {
						const active =
							item.href === "/admin"
								? pathname === "/admin"
								: pathname.startsWith(item.href);

						return (
							<Link
								key={item.href}
								href={item.href}
								className={`rounded-md px-4 py-3 text-sm transition ${
									active ? "bg-dark text-light" : "text-dark hover:bg-dark/5"
								}`}
							>
								{item.name}
							</Link>
						);
					})}
				</nav>
				<div className="mt-auto border-t border-dark/10 pt-6">
					<LogoutButton />
				</div>
			</div>
		</aside>
	);
}
