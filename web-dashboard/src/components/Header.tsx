import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { logout } = useAuth();

  return (
    <div className="flex justify-between items-center px-10 py-4 border-b bg-[#f5f1eb]">
      <h1 className="text-xl font-semibold">Leftoverlove</h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-1 rounded-md text-sm hover:opacity-80"
      >
        Logout
      </button>
    </div>
  );
}