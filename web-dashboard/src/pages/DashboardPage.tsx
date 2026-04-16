import StatsCard from "../components/StatsCard";

export default function DashboardPage() {
  return (
    <div style={{
      backgroundColor: "#F5F3EE",
      minHeight: "calc(100vh - 60px)",
      fontFamily: "'DM Sans', 'Inter', system-ui, sans-serif",
    }}>

      {/* Hero header */}
      <div style={{ padding: "52px 40px 32px" }}>
        <p style={{
          fontSize: "10px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#8A8275",
          marginBottom: "10px",
        }}>
          Overview
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 700,
          color: "#1A1814",
          margin: "0 0 4px 0",
          letterSpacing: "-0.8px",
          lineHeight: 1.1,
        }}>
          Your Dashboard
        </h1>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(18px, 2.5vw, 26px)",
          fontWeight: 400,
          fontStyle: "italic",
          color: "#9A9185",
          margin: "0",
        }}>
          Live at a glance.
        </p>
      </div>

      {/* Divider row */}
      <div style={{ padding: "0 40px 24px", display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#8A8275", textTransform: "uppercase", whiteSpace: "nowrap" }}>
          Stats
        </span>
        <div style={{ flex: 1, height: "1px", backgroundColor: "#E0DCCC" }} />
      </div>

      {/* Stats grid */}
      <div style={{
        padding: "0 40px 60px",
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
      }}>
        <StatsCard title="Total Listings" value="10" sub="All active items" />
        <StatsCard title="Reservations" value="5" sub="Confirmed today" />
      </div>
    </div>
  );
}