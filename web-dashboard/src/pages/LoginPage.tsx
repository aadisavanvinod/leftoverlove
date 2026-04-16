import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login();
    navigate("/profile");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#f5f1eb]">
      <div className="bg-white/70 backdrop-blur p-10 rounded-lg w-96 shadow-sm">
        <h2 className="text-3xl mb-6 font-semibold text-center">
          Welcome Back
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border-b bg-transparent p-2 mb-6 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border-b bg-transparent p-2 mb-6 outline-none"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded hover:opacity-80"
        >
          Login
        </button>
      </div>
    </div>
  );
}