import { useState } from "react";

type Props = {
  title: string;
  value: string;
  sub?: string;
};

export default function StatsCard({ title, value, sub }: Props) {
  const [hovered, setHovered] = useState(false);

  const cardStyle: React.CSSProperties = {
    backgroundColor: "#FAFAF7",
    border: "1px solid #E8E6DF",
    borderRadius: "4px",
    padding: "24px 28px",
    minWidth: "180px",
    cursor: "default",
    transition: "transform 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.28s ease",
    transform: hovered ? "translateY(-4px)" : "translateY(0)",
    boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.08)" : "0 1px 4px rgba(0,0,0,0.04)",
    fontFamily: "'DM Sans', 'Inter', system-ui, sans-serif",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p style={{
        fontSize: "10px",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "#8A8275",
        margin: "0 0 12px 0",
      }}>
        {title}
      </p>
      <p style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "36px",
        fontWeight: 700,
        color: "#1A1814",
        margin: "0",
        lineHeight: 1,
        letterSpacing: "-1px",
      }}>
        {value}
      </p>
      {sub && (
        <p style={{
          fontSize: "12px",
          color: "#9A9185",
          margin: "8px 0 0 0",
          fontStyle: "italic",
        }}>
          {sub}
        </p>
      )}
    </div>
  );
}