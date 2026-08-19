import Image from "next/image";

export default function MenuCard({ menu }) {
	return (
		<article className="rounded-md bg-secondary p-2">
			<div className="relative aspect-[4/3] overflow-hidden rounded-md">
				<Image
					src={menu.image.url}
					alt={menu.name}
					fill
					className="object-cover"
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
				/>
			</div>

			<div className="px-1 pb-1 pt-3">
				<h3 className="text-base leading-tight text-dark">{menu.name}</h3>

				<p className="mt-1 text-base leading-tight text-dark/80">
					{menu.description}
				</p>

				<div className="mt-4 flex items-center gap-1">
					<span className="text-primary">★</span>

					<span className="text-sm text-dark">
						{Number(menu.rating).toFixed(1)}
					</span>

					<span className="text-sm text-dark/70">rating</span>
				</div>
			</div>
		</article>
	);
}
