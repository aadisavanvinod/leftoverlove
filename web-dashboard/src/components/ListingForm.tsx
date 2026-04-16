import { useState } from "react";

export default function ListingForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 16px",
    border: "1px solid #D9D5C7",
    borderRadius: "3px",
    backgroundColor: "#FAFAF7",
    fontSize: "14px",
    color: "#1A1814",
    outline: "none",
    fontFamily: "'DM Sans', 'Inter', system-ui, sans-serif",
    boxSizing: "border-box",
    marginBottom: "12px",
    transition: "border-color 0.2s ease",
  };

  const btnStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 0",
    border: "1px solid #1A1814",
    borderRadius: "3px",
    backgroundColor: "#1A1814",
    color: "#FAFAF7",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    cursor: "pointer",
    fontFamily: "inherit",
    transition: "all 0.2s ease",
    marginTop: "4px",
  };

  const handleSubmit = () => {
    if (!name.trim()) return;
    setSubmitted(true);
    setName("");
    setPrice("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div style={{
      backgroundColor: "#F5F3EE",
      minHeight: "calc(100vh - 60px)",
      fontFamily: "'DM Sans', 'Inter', system-ui, sans-serif",
    }}>
      <div style={{ padding: "52px 40px 32px" }}>
        <p style={{
          fontSize: "10px",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "#8A8275",
          marginBottom: "10px",
        }}>
          New Entry
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
          Add a Listing
        </h1>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "20px",
          fontWeight: 400,
          fontStyle: "italic",
          color: "#9A9185",
          margin: "0 0 40px 0",
        }}>
          Share what's available.
        </p>

        {/* Form card */}
        <div style={{
          backgroundColor: "#FAFAF7",
          border: "1px solid #E8E6DF",
          borderRadius: "4px",
          padding: "28px 32px",
          maxWidth: "440px",
        }}>
          <label style={{
            display: "block",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8A8275",
            marginBottom: "8px",
          }}>
            Food Name
          </label>
          <input
            style={inputStyle}
            placeholder="e.g. Veg Biryani"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label style={{
            display: "block",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#8A8275",
            marginBottom: "8px",
          }}>
            Price (₹)
          </label>
          <input
            style={inputStyle}
            placeholder="e.g. 50"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
          />

          <button style={btnStyle} onClick={handleSubmit}>
            {submitted ? "Added" : "Add Listing"}
          </button>

          {submitted && (
            <p style={{
              fontSize: "12px",
              color: "#6B6560",
              fontStyle: "italic",
              textAlign: "center",
              marginTop: "12px",
            }}>
              Listing added successfully.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}