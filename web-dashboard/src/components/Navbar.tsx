type Props = {
  setPage: (page: string) => void;
  currentPage?: string;
};

export default function Navbar({ setPage, currentPage }: Props) {
  const navStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 40px",
    height: "60px",
    backgroundColor: "#E8E2D8",   // more visible separation
    borderBottom: "1px solid #CFC7BA", 
    fontFamily: "'DM Sans', 'Inter', system-ui, sans-serif",
  };

  const brandStyle: React.CSSProperties = {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "18px",
    fontWeight: 700,
    color: "#1A1814",
    letterSpacing: "-0.3px",
    cursor: "pointer",
  };

  const navLinksStyle: React.CSSProperties = {
    display: "flex",
    gap: "4px",
  };

  const linkStyle = (page: string): React.CSSProperties => ({
    padding: "7px 16px",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    border: "1px solid",
    borderColor: currentPage === page ? "#1A1814" : "transparent",
    borderRadius: "3px",
    backgroundColor: currentPage === page ? "#1A1814" : "transparent",
    color: currentPage === page ? "#FAFAF7" : "#8A8275",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontFamily: "inherit",
  });

  return (
    <nav style={navStyle}>
      <span style={brandStyle} onClick={() => setPage("listings")}>
        Tastique
      </span>
      <div style={navLinksStyle}>
        <button style={linkStyle("listings")} onClick={() => setPage("listings")}>
          Listings
        </button>
        <button style={linkStyle("dashboard")} onClick={() => setPage("dashboard")}>
          Dashboard
        </button>
      </div>
    </nav>
  );
}