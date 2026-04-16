import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f1eb] flex">
      
      <Sidebar />

      <div className="flex-1">
        <Header />
        <div className="px-12 py-8">{children}</div>
      </div>

    </div>
  );
}