type Props = {
  title: string;
  price: number;
};

export default function ListingCard({ title, price }: Props) {
  return (
    <div
      style={{
        backgroundColor: "#e0f2fe",
        padding: "16px",
        margin: "12px 0",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ margin: "0 0 8px 0" }}>{title}</h2>
      <p style={{ margin: "0 0 10px 0" }}>₹{price}</p>

      <button
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "8px 12px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
        onClick={() => alert("Reserved!")}
      >
        Reserve
      </button>
    </div>
  );
}