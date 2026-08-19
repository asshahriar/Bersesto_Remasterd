import Link from "next/link";

export default function AdminMenuPage() {
	return (
		<div className="p-6 sm:p-8 lg:p-10">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="text-sm text-dark/60">Content Management</p>

					<h1 className="mt-1 font-young-serif text-4xl sm:text-5xl">Menu</h1>

					<p className="mt-2 text-base text-dark/60">
						Manage the dishes displayed on your restaurant menu.
					</p>
				</div>

				<Link
					href="/admin/menu/new"
					className="inline-flex w-fit rounded-md bg-dark px-5 py-3 text-sm text-light"
				>
					Add Menu Item
				</Link>
			</div>

			<div className="mt-10 rounded-md border border-dark/10">
				<div className="p-10 text-center text-dark/60">
					No menu items loaded yet.
				</div>
			</div>
		</div>
	);
}
