type Props = {
  setPage: (page: string) => void;
};

export default function Navbar({ setPage }: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 20px",
        backgroundColor: "#2563eb",
        color: "white",
      }}
    >
      <h2>🍱 LeftoverLove</h2>

      <div>
        <button
          onClick={() => setPage("listings")}
          style={{ marginRight: "10px" }}
        >
          Listings
        </button>

        <button onClick={() => setPage("dashboard")}>
          Dashboard
        </button>
      </div>
    </div>
  );
}