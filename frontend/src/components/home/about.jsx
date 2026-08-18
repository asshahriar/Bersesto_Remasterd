import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";

export default function AboutSection() {
	return (
		<section className="bg-background px-5 py-14 sm:px-6 md:py-20 lg:px-8">
			<div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-1.5 sm:grid-cols-3">
				{/* ================= LEFT CARD ================= */}
				<div className="group relative aspect-[0.68] overflow-hidden">
					<Image
						src="/restaurantimg.png"
						alt="Bersesto restaurant"
						fill
						className="object-cover transition-transform duration-700 group-hover:scale-105"
						sizes="(max-width: 640px) 100vw, 33vw"
					/>

					{/* Dark overlay */}
					<div className="absolute inset-0 bg-black/30" />

					{/* Content */}
					<div className="absolute inset-0 text-white">
						{/* Top heading */}
						<h2 className="font-young-serif absolute right-4 top-4 max-w-[85%] text-right text-4xl leading-[0.85] sm:text-3xl md:text-4xl lg:text-5xl">
							Started in
							<br />
							2000.
						</h2>

						{/* Description */}
						<p className="absolute left-4 right-4 top-[23%] text-right">
							Fresh ingredients, thoughtful cooking, and memorable moments.
							Fresh ingredients, thoughtful cooking, and memorable moments.
						</p>

						{/* Bottom heading */}
						<h2 className="font-young-serif absolute bottom-4 left-4 max-w-[85%] text-4xl leading-[0.82] sm:text-3xl md:text-4xl lg:text-5xl">
							Still rocking
							<br />
							like before.
						</h2>
					</div>
				</div>

				{/* ================= CENTER CARD ================= */}
				<div className="relative aspect-[0.68] overflow-hidden bg-primary">
					<div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
						{/* Badge */}
						<span className="mb-4 rounded-full bg-white/90 px-3 py-1 text-foreground">
							How we started
						</span>

						{/* Heading */}
						<h2 className="font-young-serif max-w-[90%] text-4xl leading-[0.82] sm:text-3xl md:text-4xl lg:text-5xl">
							Know more
							<br />
							about us.
						</h2>

						{/* Description */}
						<p className="mt-5 max-w-[85%] leading-[1.25]">
							Visit our about page to learn more about our restaurant.
						</p>

						{/* Button */}
						<Button href="/about">Visit - About Us</Button>
					</div>
				</div>

				{/* ================= RIGHT CARD ================= */}
				<div className="group relative aspect-[0.68] overflow-hidden">
					<Image
						src="/chefimg.png"
						alt="Chef preparing food at Bersesto"
						fill
						className="object-cover transition-transform duration-700 group-hover:scale-105"
						sizes="(max-width: 640px) 100vw, 33vw"
					/>

					{/* Dark overlay */}
					<div className="absolute inset-0 bg-black/35" />

					{/* Content */}
					<div className="absolute inset-0 text-white">
						{/* Top heading */}
						<h2 className="font-young-serif absolute right-4 top-4 max-w-[90%] text-right text-4xl leading-[0.85] sm:text-3xl md:text-4xl lg:text-5xl">
							Made with
							<br />
							Master Chefs
						</h2>

						{/* Bottom heading */}
						<h2 className="font-young-serif absolute bottom-4 left-4 max-w-[90%] text-4xl leading-[0.82] sm:text-3xl md:text-4xl lg:text-5xl">
							Got multiple
							<br />
							Awards.
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
}
