import { useState } from "react";
import ListingCard from "../components/ListingCard";

const initialListings = [
  { title: "Veg Biryani", price: 50 },
  { title: "Pizza Slice", price: 80 },
  { title: "Sandwich", price: 30 },
  { title: "Pasta", price: 60 },
  { title: "Fried Rice", price: 70 },
];

export default function ListingsPage() {
  const [search, setSearch] = useState("");

  const filteredListings = initialListings.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f9ff",
        minHeight: "100vh",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          marginBottom: "20px",
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        🍱 Food Listings
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
        }}
      >
        {filteredListings.length > 0 ? (
          filteredListings.map((item, index) => (
            <ListingCard key={index} {...item} />
          ))
        ) : (
          <p style={{ color: "gray" }}>No results found</p>
        )}
      </div>
    </div>
  );
}