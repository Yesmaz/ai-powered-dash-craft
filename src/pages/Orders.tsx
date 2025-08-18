import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function Orders() {
  return (
    <DashboardLayout>
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
        <p className="text-muted-foreground">Track and manage orders.</p>
      </header>
      <section className="rounded-lg border p-6 bg-card">This section is coming soon.</section>
    </DashboardLayout>
  );
}
