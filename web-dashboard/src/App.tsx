import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import DonationsPage from "./pages/DonationsPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/donations" element={<DonationsPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;