import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function Users() {
  return (
    <DashboardLayout>
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <p className="text-muted-foreground">Manage your users and roles.</p>
      </header>
      <section className="rounded-lg border p-6 bg-card">This section is coming soon.</section>
    </DashboardLayout>
  );
}
