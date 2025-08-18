import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { DataTable } from "@/components/dashboard/DataTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-dashboard-bg">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here's what's happening with your business today.
              </p>
            </div>

            {/* Statistics Cards */}
            <DashboardStats />

            {/* Data Table */}
            <DataTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
