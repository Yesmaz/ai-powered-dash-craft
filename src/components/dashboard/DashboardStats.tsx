import { StatCard } from "./StatCard";
import { Users, ShoppingCart, TrendingUp, DollarSign } from "lucide-react";

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Users"
        value="2,847"
        change="+12% from last month"
        changeType="positive"
        icon={Users}
      />
      <StatCard
        title="Total Revenue"
        value="$89,240"
        change="+8% from last month"
        changeType="positive"
        icon={DollarSign}
      />
      <StatCard
        title="Orders"
        value="1,234"
        change="+15% from last month"
        changeType="positive"
        icon={ShoppingCart}
      />
      <StatCard
        title="Conversion Rate"
        value="3.2%"
        change="-2% from last month"
        changeType="negative"
        icon={TrendingUp}
      />
    </div>
  );
}