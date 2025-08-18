import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { DataTable } from "@/components/dashboard/DataTable";

const Index = () => {
  return (
    <DashboardLayout>
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your business today.
        </p>
      </header>

      <DashboardStats />
      <DataTable />
    </DashboardLayout>
  );
};

export default Index;
