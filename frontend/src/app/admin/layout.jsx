import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminGuard from "@/components/auth/AdminGuard";

export default function AdminLayout({ children }) {
	return (
		<AdminGuard>
			<div className="min-h-screen bg-light text-dark">
				<div className="flex min-h-screen">
					<AdminSidebar />

					<main className="min-w-0 flex-1">{children}</main>
				</div>
			</div>
		</AdminGuard>
	);
}
