import Layout from "../components/Layout";

export default function DonationsPage() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-semibold mb-8">Donations</h1>

        <div className="grid grid-cols-2 gap-6">
          
          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-lg font-semibold">Food Package</h3>
            <p className="text-gray-500">2 meals donated</p>
          </div>

          <div className="bg-white p-6 rounded-xl border">
            <h3 className="text-lg font-semibold">Leftover Rice</h3>
            <p className="text-gray-500">1 serving donated</p>
          </div>

        </div>

      </div>
    </Layout>
  );
}