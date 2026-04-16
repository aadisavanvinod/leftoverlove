import { useState } from "react";
import ListingsPage from "./pages/ListingsPage";
import DashboardPage from "./pages/DashboardPage";
import Navbar from "./components/Navbar";

export default function App() {
  const [page, setPage] = useState("listings");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "listings" && <ListingsPage />}
      {page === "dashboard" && <DashboardPage />}
    </div>
  );
}