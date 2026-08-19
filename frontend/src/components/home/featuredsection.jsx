import Image from "next/image";
import Link from "next/link";

const featuredItems = [
	{
		name: "Bone Marrow Bread",
		image: "/food.png",
		description:
			"Fresh ingredients, thoughtful cooking, and memorable moments.",
		rating: "4.9 ratings",
	},

	{
		name: "Beef Sizzle Salad",
		image: "/food.png",
		description:
			"Fresh ingredients, thoughtful cooking, and memorable moments.",
		rating: "4.9 ratings",
	},

	{
		name: "Tomato Butter Pasta",
		image: "/food.png",
		description:
			"Fresh ingredients, thoughtful cooking, and memorable moments.",
		rating: "4.9 ratings",
	},

	{
		name: "Savory Gyro Delight",
		image: "/food.png",
		description:
			"Fresh ingredients, thoughtful cooking, and memorable moments.",
		rating: "4.9 ratings",
	},
];

export default function FeaturedSection() {
	return (
		<section
			className="relative overflow-hidden bg-primary bg-[url('/featuredbg.png')] bg-cover bg-center bg-no-repeat">
			<div className="relative z-10 mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
				{/* Header */}
				<div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
					<h2
						className="font-young-serif max-w-2xl text-4xl leading-[0.95] 	text-dark sm:text-5xl lg:text-6xl">
						Our All-time Best Cuisines
					</h2>

					<Link
						href="/menu"
						className="
							shrink-0
							rounded-md
							bg-light
							px-4
							py-2
							text-sm
							text-dark
							transition-opacity
							hover:opacity-80
							sm:px-5
							sm:py-2.5
						"
					>
						Explore Menu
					</Link>
				</div>

				{/* Cards */}
				<div
					className="
						grid
						grid-cols-1
						gap-5
						sm:grid-cols-2
						lg:grid-cols-4
						lg:gap-6
					"
				>
					{featuredItems.map((item) => (
						<article
							key={item.name}
							className="
								rounded-xl
								bg-light
								p-3
								sm:p-2
							"
						>
							{/* Large Image */}
							<div
								className="
									relative
									aspect-[1.45]
									w-full
									overflow-hidden
									rounded-lg
								"
							>
								<Image
									src={item.image}
									alt={item.name}
									fill
									className="object-cover"
									sizes="
										(max-width: 640px) 100vw,
										(max-width: 1024px) 50vw,
										25vw
									"
								/>
							</div>

							{/* Content */}
							<div className="flex min-h-[150px] flex-col px-1 pt-4">
								<h3
									className="
										font-young-serif
										text-xl
										leading-tight
										text-dark
										sm:text-2xl
									"
								>
									{item.name}
								</h3>

								<p
									className="
										mt-2
										text-base
										leading-snug
										text-dark/80
									"
								>
									{item.description}
								</p>

								{/* Rating */}
								<div className="mt-auto flex items-center gap-2 pt-12">
									<span className="text-lg leading-none text-primary">★</span>

									<span className="text-base text-dark">{item.rating}</span>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
