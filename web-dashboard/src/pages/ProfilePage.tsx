import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <div className="max-w-5xl mx-auto mt-6">

        <h1 className="text-6xl font-semibold mb-2">Profile</h1>
        <p className="text-gray-600 mb-10 text-lg">Welcome back</p>

        <div className="bg-white/60 backdrop-blur-md p-10 rounded-2xl shadow-sm border border-gray-200">
          
          <h2 className="text-2xl font-semibold mb-1">
            {user.name}
          </h2>

          <p className="text-gray-500">
            {user.email}
          </p>

        </div>

      </div>
    </Layout>
  );
}