"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "../ui/button";

export default function Navbar() {
	const NavLinks = [
		{
			name: "Home",
			href: "/",
		},
		{
			name: "About",
			href: "/about",
		},
		{
			name: "Menu",
			href: "/menu",
		},
		{
			name: "Contact",
			href: "/contact",
		},
	];

	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<header className="container mx-auto px-5 sm:px-6">
			<nav>
				{/* ================= DESKTOP NAVBAR ================= */}
				<div className="hidden items-center justify-between md:flex">
					{/* Logo */}
					<Link href="/">
						<Image
							src="/logo.png"
							alt="Bersesto brand logo"
							width={172}
							height={34}
							priority
						/>
					</Link>

					{/* Links */}
					<div className="flex items-center gap-6">
						{NavLinks.map((navlink) => (
							<Link
								key={navlink.name}
								href={navlink.href}
								className="text-sm text-dark transition-opacity hover:opacity-60"
							>
								{navlink.name}
							</Link>
						))}
					</div>

					{/* Actions */}
					<div className="flex items-center gap-6">
						<Link
							href="/login"
							className="text-sm text-dark underline underline-offset-4"
						>
							Login
						</Link>

						<Button href="/reserve">Reserve Table</Button>
					</div>
				</div>

				{/* ================= MOBILE NAVBAR ================= */}
				{!isOpen && (
					<div className="flex items-center justify-between md:hidden">
						{/* Logo */}
						<Link href="/">
							<Image
								src="/logo.png"
								alt="Bersesto brand logo"
								width={172}
								height={34}
								priority
							/>
						</Link>

						{/* Open Menu */}
						<button
							type="button"
							aria-label="Open menu"
							aria-expanded="false"
							onClick={() => setIsOpen(true)}
							className="flex text-dark h-10 w-10 items-center justify-center"
						>
							<Menu className="h-6 w-6" />
						</button>
					</div>
				)}

				{/* ================= FULL SCREEN MOBILE MENU ================= */}
				{isOpen && (
					<div
						className="
							fixed
							inset-0
							z-[9999]
							h-dvh
							w-screen
							overflow-y-auto
							bg-[#fdf8ed]
							md:hidden
						"
					>
						<div className="flex min-h-dvh flex-col px-5 py-6 sm:px-6">
							{/* Menu Header */}
							<div className="flex items-center justify-between border-b border-black/10 pb-5">
								<Link href="/" onClick={closeMenu}>
									<Image
										src="/logo.png"
										alt="Bersesto brand logo"
										width={172}
										height={34}
										priority
									/>
								</Link>

								{/* Close */}
								<button
									type="button"
									aria-label="Close menu"
									onClick={closeMenu}
									className="flex text-dark h-10 w-10 items-center justify-center"
								>
									<X className="h-6 w-6" />
								</button>
							</div>

							{/* Navigation */}
							<div className="flex flex-1 flex-col">
								{NavLinks.map((navlink) => (
									<Link
										key={navlink.name}
										href={navlink.href}
										onClick={closeMenu}
										className="border-b border-black/10 py-5 text-dark"
									>
										{navlink.name}
									</Link>
								))}

								{/* Login */}
								<Link
									href="/login"
									onClick={closeMenu}
									className="py-5 text-dark"
								>
									Login
								</Link>

								{/* Reserve */}
								<Link
									href="/reserve"
									onClick={closeMenu}
									className="mt-2 rounded-md bg-primary px-5 py-3.5 text-center text-sm font-medium transition-colors hover:bg-primary-dark"
								>
									Reserve Table
								</Link>
							</div>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
