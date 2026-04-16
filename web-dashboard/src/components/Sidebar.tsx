import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-60 bg-white border-r h-screen p-6">
      <h2 className="text-lg font-semibold mb-6">Menu</h2>

      <div className="flex flex-col gap-4 text-gray-700">
        <Link to="/profile" className="hover:text-black">
          Profile
        </Link>

        <Link to="/donations" className="hover:text-black">
          Donations
        </Link>
      </div>
    </div>
  );
}