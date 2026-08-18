import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const footerLinks = [
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Menu",
		href: "/menu",
	},
	{
		name: "Reservation",
		href: "/reserve",
	},
	{
		name: "Contact",
		href: "/contact",
	},
];

export default function Footer() {
	return (
		<footer className="overflow-x-hidden bg-light text-dark">
			{/* Top Content */}
			<div className="container overflow-hidden">
				<div
					className="
						flex
						justify-between
						gap-10
						py-8
						sm:py-10
						lg:py-12
					"
				>
					{/* Left */}
					<div className="flex flex-col">
						<Link href="/" className="mb-4">
							<Image
								src="/logo.png"
								alt="Bersesto"
								width={172}
								height={34}
								className="h-auto w-auto"
							/>
						</Link>

						<nav className="flex flex-col gap-2">
							{footerLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="
										text-xs
										transition-opacity
										hover:opacity-60
										sm:text-sm
									"
								>
									{link.name}
								</Link>
							))}
						</nav>
					</div>

					{/* Right */}
					<div
						className="
							flex
							flex-col
							items-end
							text-right
						"
					>
						{/* Opening Hours */}
						<div>
							<h3 className="font-young-serif text-2xl">Opening hours</h3>

							<p className="text-xs sm:text-sm">9:00 am - 2:00am</p>
						</div>

						{/* Location */}
						<div className="mt-5">
							<h3 className="font-young-serif text-2xl">Our Location</h3>

							<p className="text-xs sm:text-sm">
								Via delle Rose 18, 50122 Florence, Italy
							</p>
						</div>

						{/* Socials */}
						<div className="mt-5 flex items-center gap-3">
							<Link
								href="#"
								aria-label="Facebook"
								className="transition-opacity hover:opacity-60"
							>
								<FaFacebook className="h-5 w-5 fill-dark" />
							</Link>

							<Link
								href="#"
								aria-label="X"
								className="
									text-lg
									font-semibold
									transition-opacity
									hover:opacity-60
								"
							>
								X
							</Link>

							<Link
								href="#"
								aria-label="Instagram"
								className="transition-opacity hover:opacity-60"
							>
								<FaInstagram className="h-5 w-5" />
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Giant Thank You */}
			<div className="w-full overflow-hidden">
				<h2
					className="
			font-young-serif
			pt-10
			w-full
			whitespace-nowrap
			text-center
			text-primary
			text-[15vw]
			leading-[0.75]
		"
				>
					THANK YOU.
				</h2>
			</div>
		</footer>
	);
}
