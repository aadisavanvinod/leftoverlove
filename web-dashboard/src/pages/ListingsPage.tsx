import { useState } from "react";
import ListingCard from "../components/ListingCard";

const initialListings = [
  { title: "Veg Biryani", price: 50, category: "Rice", tag: "Popular" },
  { title: "Pizza Slice", price: 80, category: "Italian" },
  { title: "Sandwich", price: 30, category: "Snack", tag: "New" },
  { title: "Pasta", price: 60, category: "Italian" },
];

export default function ListingsPage() {
  const [search, setSearch] = useState("");

  const filtered = initialListings.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{
      backgroundColor: "#F5F3EE",
      minHeight: "100vh",
      fontFamily: "'DM Sans', 'Inter', system-ui, sans-serif",
    }}>

      {/* Top nav bar */}
      <nav style={{
        borderBottom: "1px solid #E0DCCC",
        backgroundColor: "#F5F3EE",
        padding: "0 40px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "18px",
          fontWeight: 700,
          color: "#1A1814",
          letterSpacing: "-0.3px",
        }}>
          Tastique
        </span>
        <span style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#8A8275", textTransform: "uppercase" as const }}>
          Menu
        </span>
      </nav>

      {/* Hero text area */}
      <div style={{ padding: "60px 40px 40px" }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.16em",
          textTransform: "uppercase" as const,
          color: "#8A8275",
          marginBottom: "12px",
        }}>
          Today's Selection
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(32px, 5vw, 54px)",
          fontWeight: 700,
          color: "#1A1814",
          margin: "0 0 6px 0",
          lineHeight: 1.1,
          letterSpacing: "-1px",
        }}>
          Fresh. Simple.
        </h1>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(32px, 5vw, 54px)",
          fontWeight: 400,
          color: "#9A9185",
          margin: "0 0 36px 0",
          lineHeight: 1.1,
          letterSpacing: "-1px",
          fontStyle: "italic",
        }}>
          Made to order.
        </h1>

        {/* Search */}
        <div style={{ maxWidth: "400px", position: "relative" as const }}>
          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px",
              border: "1px solid #D9D5C7",
              borderRadius: "3px",
              backgroundColor: "#FAFAF7",
              fontSize: "14px",
              color: "#1A1814",
              outline: "none",
              boxSizing: "border-box" as const,
              fontFamily: "inherit",
            }}
          />
        </div>
      </div>

      {/* Count label */}
      <div style={{ padding: "0 40px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#8A8275", textTransform: "uppercase" as const }}>
          {filtered.length} items
        </span>
        <div style={{ flex: 1, height: "1px", backgroundColor: "#E0DCCC" }} />
      </div>

      {/* Grid */}
      <div style={{
        padding: "0 40px 60px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "20px",
      }}>
        {filtered.length > 0 ? (
          filtered.map((item, i) => <ListingCard key={i} {...item} />)
        ) : (
          <p style={{ color: "#9A9185", gridColumn: "1/-1", textAlign: "center", padding: "60px 0", fontStyle: "italic" }}>
            No dishes found for "{search}"
          </p>
        )}
      </div>
    </div>
  );
}