import Image from "next/image";

const chefs = [
	{
		name: "Chef 1",
		image: "/chef.png",
	},

	{
		name: "Chef 2",
		image: "/chef.png",
	},

	{
		name: "Chef 3",
		image: "/chef.png",
	},

	{
		name: "Chef 4",
		image: "/chef.png",
	},
];

export default function HeadChefs() {
	return (
		<section className="section bg-light">
			<div className="container">
				{/* Heading */}
				<div className="flex justify-center">
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
						Our Head Chefs
					</h2>
				</div>

				{/* Chefs */}
				<div
					className="
						mt-12
						grid
						grid-cols-1
						gap-4
						sm:grid-cols-2
						lg:mt-14
						lg:grid-cols-4
						lg:gap-5
					"
				>
					{chefs.map((chef) => (
						<div
							key={chef.image}
							className="
								relative
								aspect-[4/5]
								overflow-hidden
								rounded-lg
							"
						>
							<Image
								src={chef.image}
								alt={chef.name}
								fill
								className="
									object-cover
									transition-transform
									duration-500
									hover:scale-[1.02]
								"
								sizes="
									(max-width: 640px) 100vw,
									(max-width: 1024px) 50vw,
									25vw
								"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
