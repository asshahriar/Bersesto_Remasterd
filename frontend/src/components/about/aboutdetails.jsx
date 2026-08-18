import Image from "next/image";

const philosophy = ["Quality", "Freshness", "Hospitality"];

export default function AboutDetails() {
	return (
		<section
			className="
				overflow-hidden
				bg-primary
				bg-[url('/images/section-pattern.png')]
				bg-cover
				bg-center
				bg-repeat
			"
		>
			<div className="container">
				{/* ================= OUR STORY ================= */}
				<div
					className="
						grid
						grid-cols-1
						items-center
						gap-12
						py-16
						sm:py-20
						lg:grid-cols-2
						lg:gap-20
						lg:py-24
					"
				>
					{/* Story Content */}
					<div>
						<h2
							className="
								font-young-serif
								text-5xl
								leading-none
								text-dark
								sm:text-6xl
							"
						>
							Our Story
						</h2>

						<div className="mt-7 max-w-xl space-y-6">
							<p className="text-base leading-tight text-dark">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since 1966, when decades at least and James Moly, the
								librarian at St Bride Printing Library in London, took a 1914
								Cicero translation and scrambled it to make dummy text for
								Letraset's Body Type sheets. It has survived not only many
								decades, but also the leap into electronic typesetting,
								remaining essentially unchanged.
							</p>

							<p className="text-base leading-tight text-dark">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since 1966.
							</p>
						</div>

						{/* Stats */}
						<div
							className="
								mt-10
								inline-flex
								items-center
								overflow-hidden
								rounded-lg
								bg-light
							"
						>
							<div className="flex items-center gap-3 px-4 py-4 sm:px-5">
								<span className="text-xl text-dark">▣</span>

								<span className="text-sm text-dark">Founded in 2000</span>
							</div>

							<div className="h-10 w-px bg-dark" />

							<div className="flex items-center gap-3 px-4 py-4 sm:px-5">
								<span className="text-xl text-dark">♛</span>

								<span className="text-sm text-dark">15+ World-Class Chefs</span>
							</div>
						</div>
					</div>

					{/* Story Image */}
					<div className="flex justify-center lg:justify-end">
						<div
							className="
								relative
								aspect-[3/4]
								w-full
								max-w-md
								overflow-hidden
								rounded-xl
							"
						>
							<Image
								src="/chef.png"
								alt="Chef preparing food"
								fill
								className="object-cover"
								sizes="
									(max-width: 1024px) 100vw,
									50vw
								"
							/>
						</div>
					</div>
				</div>

				{/* ================= OUR PHILOSOPHY ================= */}
				<div
					className="
						flex
						flex-col
						items-center
						pb-16
						text-center
						sm:pb-20
						lg:pb-24
					"
				>
					<h2
						className="
							font-young-serif
							text-5xl
							leading-none
							text-dark
							sm:text-6xl
						"
					>
						Our Philosophy
					</h2>

					{/* Philosophy Values */}
					<div
						className="
							mt-7
							flex
							flex-wrap
							justify-center
							gap-x-8
							gap-y-4
							sm:gap-x-12
							lg:gap-x-16
						"
					>
						{philosophy.map((item) => (
							<h3
								key={item}
								className="
									font-young-serif
									text-2xl
									leading-none
									text-dark
									underline
									decoration-wavy
									underline-offset-4
									sm:text-3xl
								"
							>
								{item}
							</h3>
						))}
					</div>

					<p
						className="
							mt-7
							max-w-2xl
							text-base
							leading-tight
							text-dark
						"
					>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry&atop;s standard dummy text
						ever since 1966, when designers at our restaurant.
					</p>
				</div>
			</div>
		</section>
	);
}
