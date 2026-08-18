import Image from "next/image";

const galleryImages = [
	{
		src: "/img1.png",
		alt: "Guest enjoying food at the restaurant",
	},

	{
		src: "/img2.png",
		alt: "Guest enjoying a meal outdoors",
	},

	{
		src: "/img3.png",
		alt: "Guests enjoying dinner",
	},

	{
		src: "/img4.png",
		alt: "Guests having dinner together",
	},

	{
		src: "/img5.png",
		alt: "Guest enjoying a meal",
	},

	{
		src: "/img6.png",
		alt: "Restaurant guest",
	},

	{
		src: "/img7.png",
		alt: "Guests dining together",
	},

	{
		src: "/img8.png",
		alt: "Guests enjoying the restaurant",
	},
];

export default function GallerySection() {
	return (
		<section className="section bg-light">
			<div className="container">
				{/* Heading */}
				<div className="mb-10 max-w-3xl sm:mb-12">
					<h2 className="font-young-serif text-4xl leading-[0.9] text-dark sm:text-5xl md:text-6xl">
						People & their experience having time here.
					</h2>
				</div>

				{/* Masonry Gallery */}
				<div
					className="
						columns-1
						gap-3
						sm:columns-2
						lg:columns-3
						lg:gap-4
					"
				>
					{galleryImages.map((image, index) => (
						<div
							key={image.src}
							className="
								mb-3
								break-inside-avoid
								overflow-hidden
								lg:mb-4
							"
						>
							<div className="relative w-full">
								<Image
									src={image.src}
									alt={image.alt}
									width={1000}
									height={1200}
									className="
										h-auto
										w-full
										object-cover
										transition-transform
										duration-500
										hover:scale-[1.02]
									"
									sizes="
										(max-width: 640px) 100vw,
										(max-width: 1024px) 50vw,
										33vw
									"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
