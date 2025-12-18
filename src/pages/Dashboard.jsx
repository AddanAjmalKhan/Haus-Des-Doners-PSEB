import Sidebar from "../components/layout/Sidebar";
import TopBar from "../components/dashboard/TopBar";
import StatsCard from "../components/dashboard/StatsCard";
import OrdersChart from "../components/dashboard/OrdersChart";
import Filters from "../components/dashboard/Filters";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#F6F7FB]">
      <Sidebar />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
        <TopBar />
        <Filters />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
          <StatsCard
            title="Orders"
            value="40,689"
            trend="+10% Up from yesterday"
            color="blue"
          />
          <StatsCard
            title="Active Customers"
            value="10,293"
            trend="+10% Up from last week"
            color="purple"
          />
          <StatsCard
            title="Existence Customers"
            value="3,350"
            trend="-10% Down from yesterday"
            color="orange"
            negative
          />
          <StatsCard
            title="Turnover"
            value="$89,000"
            trend="+18% Up from yesterday"
            color="green"
          />
        </div>

        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
          <OrdersChart />
        </div>
      </main>
    </div>
  );
}
