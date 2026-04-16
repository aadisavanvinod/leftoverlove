type Props = {
  title: string;
  value: string;
};

export default function StatsCard({ title, value }: Props) {
  return (
    <div
      style={{
        backgroundColor: "#e0f2fe",
        padding: "15px",
        borderRadius: "10px",
        minWidth: "150px",
      }}
    >
      <h3>{title}</h3>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}