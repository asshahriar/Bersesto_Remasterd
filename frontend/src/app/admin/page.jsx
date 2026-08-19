export default function AdminPage() {
	return (
		<div className="p-6 sm:p-8 lg:p-10">
			<div>
				<p className="text-sm text-dark/60">Administration</p>

				<h1 className="mt-1 font-young-serif text-4xl sm:text-5xl">
					Dashboard
				</h1>
			</div>

			<div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
				<div className="rounded-md bg-secondary p-6">
					<p className="text-sm text-dark/60">Reservations</p>

					<p className="mt-3 text-3xl">0</p>
				</div>

				<div className="rounded-md bg-secondary p-6">
					<p className="text-sm text-dark/60">Menu Items</p>

					<p className="mt-3 text-3xl">0</p>
				</div>

				<div className="rounded-md bg-secondary p-6">
					<p className="text-sm text-dark/60">Today&apos;s Reservations</p>

					<p className="mt-3 text-3xl">0</p>
				</div>

				<div className="rounded-md bg-secondary p-6">
					<p className="text-sm text-dark/60">Capacity</p>

					<p className="mt-3 text-3xl">0</p>
				</div>
			</div>
		</div>
	);
}
