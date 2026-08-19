import MenuForm from "@/components/admin/MenuForm";

export default function NewMenuPage() {
	return (
		<div className="p-6 sm:p-8 lg:p-10">
			<div>
				<p className="text-sm text-dark/60">Menu Management</p>

				<h1 className="mt-1 font-young-serif text-4xl sm:text-5xl">
					Add Menu Item
				</h1>
			</div>

			<div className="mt-10 max-w-3xl">
				<MenuForm />
			</div>
		</div>
	);
}
