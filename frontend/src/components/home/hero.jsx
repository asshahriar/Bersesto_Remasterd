import Button from "../ui/button";

export default function Hero() {
	return (
		<section className="relative min-h-[calc(100svh-80px)] overflow-hidden">
			{/* Background Video */}
			<video
				className="absolute inset-0 h-full w-full object-cover"
				autoPlay
				muted
				loop
				playsInline
				preload="auto"
			>
				<source src="/videos/hero-video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Black Overlay */}
			<div className="absolute inset-0 bg-black/45" />

			{/* Content */}
			<div className="relative z-10 flex min-h-[calc(100svh-80px)] items-center justify-center px-5 py-16 sm:px-8">
				<div className="w-full max-w-4xl text-center text-white">
					{/* Badge */}
					<div className="mb-5 inline-flex rounded-full border border-white/30 bg-black/20 px-3 py-1.5 backdrop-blur-sm">
						<span className="text-[10px] font-medium sm:text-xs">
							Best Restaurant
						</span>
					</div>

					{/* Heading */}
					<h1 className="text-5xl font-regular leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl">
						We Serve The Taste You Love.
					</h1>

					{/* Description */}
					<p className="mx-auto mt-6 max-w-2xl text-xs leading-5 text-white/90 sm:text-sm sm:leading-6">
						Fresh ingredients, thoughtful cooking, and memorable moments. Fresh
						ingredients, thoughtful cooking, and memorable moments.
					</p>

					{/* Buttons */}
					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Button href="/reserve" variant="primary">
							Reserve Table
						</Button>

						<Button href="/menu" variant="secondary">
							Explore Menu
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
