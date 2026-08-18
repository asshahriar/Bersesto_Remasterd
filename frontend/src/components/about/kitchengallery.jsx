import Image from "next/image";

const kitchenImages = [
	{
		src: "/chef.png",
		alt: "Chef preparing food",
	},
	{
		src: "/chef.png",
		alt: "Chef preparing food",
	},
	{
		src: "/chef.png",
		alt: "Restaurant chef",
	},
	{
		src: "/chef.png",
		alt: "Chef working in the kitchen",
	},
	{
		src: "/chef.png",
		alt: "Chef cooking",
	},
	{
		src: "/chef.png",
		alt: "Chef preparing food",
	},
];

export default function KitchenGallery() {
	return (
		<section className="section bg-light">
			<div className="container">
				{/* Heading */}
				<h2
					className="
						font-young-serif
						text-center
						text-5xl
						leading-none
						text-dark
						sm:text-6xl
						lg:text-7xl
					"
				>
					Our Amazing Kitchen
				</h2>

				{/* Gallery */}
				<div
					className="
						mt-12
						grid
						grid-cols-1
						gap-4
						sm:grid-cols-2
						lg:grid-cols-4
						lg:gap-5
					"
				>
					{[0, 1, 2, 3].map((index) => (
						<div
							key={kitchenImages[index].src}
							className="
								relative
								aspect-[4/3]
								overflow-hidden
								rounded-xl
							"
						>
							<Image
								src={kitchenImages[index].src}
								alt={kitchenImages[index].alt}
								fill
								className="object-cover"
								sizes="
									(max-width: 640px) 100vw,
									(max-width: 1024px) 50vw,
									25vw
								"
							/>
						</div>
					))}

					{/* Bottom left — spans 2 columns */}
					<div
						className="
							relative
							aspect-[2/1]
							overflow-hidden
							rounded-xl
							sm:col-span-2
						"
					>
						<Image
							src={kitchenImages[4].src}
							alt={kitchenImages[4].alt}
							fill
							className="object-cover"
							sizes="
								(max-width: 640px) 100vw,
								100vw
							"
						/>
					</div>

					{/* Bottom right — spans 2 columns */}
					<div
						className="
							relative
							aspect-[2/1]
							overflow-hidden
							rounded-xl
							sm:col-span-2
						"
					>
						<Image
							src={kitchenImages[5].src}
							alt={kitchenImages[5].alt}
							fill
							className="object-cover"
							sizes="
								(max-width: 640px) 100vw,
								100vw
							"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
