import StatsCard from "../components/StatsCard";

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>

      <StatsCard title="Total Listings" value="10" />
      <StatsCard title="Reservations" value="5" />
    </div>
  );
}