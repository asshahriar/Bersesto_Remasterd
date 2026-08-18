import Button from "@/components/ui/button";

export default function ReserveCTA() {
	return (
		<section
			className="
			 
			section
				relative
				flex
				min-h-[420px]
				items-center
				justify-center
				overflow-hidden
				bg-dark
				sm:min-h-[460px]
				lg:min-h-[500px]
			"
		>
			{/* Background Image */}
			<div className="absolute inset-0">
				<img
					src="/reservecta.png"
					alt=""
					className="h-full w-full object-cover"
				/>
			</div>

			{/* Dark Overlay */}
			<div className="absolute inset-0 bg-dark/55" />

			{/* Content */}
			<div
				className="
					relative
					z-10
					mx-auto
					flex
					max-w-4xl
					flex-col
					items-center
					px-5
					text-center
					text-light
				"
			>
				<h2
					className="
						font-young-serif
						text-4xl
						leading-[0.9]
						sm:text-5xl
						md:text-6xl
						lg:text-[68px]
					"
				>
					Reserve A Table For You & Your Loved Ones
				</h2>

				<p
					className="
						mt-5
						max-w-lg
						text-base
						leading-tight
						text-light/90
						sm:mt-6
					"
				>
					Fresh ingredients, thoughtful cooking, and memorable moments.
					Fresh ingredients, thoughtful cooking, and memorable moments.
				</p>

				<div className="mt-7">
					<Button href="/reserve" variant="primary">
						Reserve Your Table
					</Button>
				</div>
			</div>
		</section>
	);
}
