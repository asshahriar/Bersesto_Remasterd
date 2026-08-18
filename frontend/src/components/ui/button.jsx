"use client";
import React, { useCallback } from "react";
import Link from "next/link";
export default function Button({
	children,
	href = "#",
	variant = "primary",
	onClick,
	...props
}) {
	const variantClass = variant === "secondary" ? "bg-transparent border-2 border-primary" : "bg-primary";

	return (
		<Link
			href={href}
			{...props}
			className={`group text-light ${variantClass} relative inline-flex h-12 items-center rounded-lg px-4 w-fit`}
		>
			<span className="relative inline-flex overflow-hidden">
				<span className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[120%] group-hover:skew-y-9">
					{children}
				</span>
				<span className="absolute translate-y-[120%] skew-y-9 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
					{children}
				</span>
			</span>
		</Link>
	);
}
