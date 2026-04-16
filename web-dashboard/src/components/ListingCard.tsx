import { useState } from "react";

type Props = {
  title: string;
  price: number;
  category?: string;
  tag?: string;
};

export default function ListingCard({ title, price, category = "Food", tag }: Props) {
  const [hovered, setHovered] = useState(false);
  const [reserved, setReserved] = useState(false);

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#FAFAF7",
    border: "1px solid #E8E6DF",
    borderRadius: "4px",
    padding: "0",
    cursor: "pointer",
    transition: "transform 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.28s ease",
    transform: hovered ? "translateY(-4px)" : "translateY(0)",
    boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.08)" : "0 1px 4px rgba(0,0,0,0.04)",
    overflow: "hidden",
    fontFamily: "'DM Sans', 'Inter', system-ui, sans-serif",
  };

  const imageAreaStyle: React.CSSProperties = {
    backgroundColor: "#EEE9E0",
    height: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  };

  const placeholderTextStyle: React.CSSProperties = {
    fontFamily: "'Playfair Display', 'Georgia', serif",
    fontSize: "13px",
    letterSpacing: "0.12em",
    color: "#9A9185",
    textTransform: "uppercase" as const,
  };

  const bodyStyle: React.CSSProperties = {
    padding: "18px 20px 20px",
  };

  const categoryStyle: React.CSSProperties = {
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "#8A8275",
    marginBottom: "6px",
  };

  const titleStyle: React.CSSProperties = {
    fontFamily: "'Playfair Display', 'Georgia', serif",
    fontSize: "19px",
    fontWeight: 700,
    color: "#1A1814",
    margin: "0 0 4px 0",
    lineHeight: 1.25,
    letterSpacing: "-0.2px",
  };

  const priceStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#6B6560",
    margin: "0 0 16px 0",
    fontWeight: 400,
  };

  const btnStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 0",
    border: reserved ? "1px solid #B5A898" : "1px solid #1A1814",
    borderRadius: "3px",
    backgroundColor: reserved ? "#EEE9E0" : "#1A1814",
    color: reserved ? "#6B6560" : "#FAFAF7",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontFamily: "inherit",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={imageAreaStyle}>
        {tag && (
          <div style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            backgroundColor: "#1A1814",
            color: "#FAFAF7",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            padding: "4px 10px",
            borderRadius: "2px",
          }}>
            {tag}
          </div>
        )}
        <span style={placeholderTextStyle}>{category}</span>
      </div>

      <div style={bodyStyle}>
        <p style={categoryStyle}>{category}</p>
        <h2 style={titleStyle}>{title}</h2>
        <p style={priceStyle}>₹{price}</p>
        <button
          style={btnStyle}
          onClick={(e) => { e.stopPropagation(); setReserved(p => !p); }}
        >
          {reserved ? "Reserved" : "Reserve Now"}
        </button>
      </div>
    </div>
  );
}