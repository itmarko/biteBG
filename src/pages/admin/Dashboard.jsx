// src/pages/admin/Dashboard.jsx
import StatCard from "../../components/admin/StatCard";

const AdminDashboard = () => {
  return (
    <>
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Orders" value="1,245" color="text-blue-600" />
        <StatCard title="Revenue" value="₹98,450" color="text-green-600" />
        <StatCard title="Active Tables" value="18" color="text-purple-600" />
        <StatCard title="Menu Items" value="62" color="text-orange-600" />
      </div>

      {/* Recent Orders Section */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2 px-3">Order ID</th>
                <th className="py-2 px-3">Table</th>
                <th className="py-2 px-3">Status</th>
                <th className="py-2 px-3">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-3">#1023</td>
                <td className="py-2 px-3">Table 4</td>
                <td className="py-2 px-3 text-yellow-600 font-semibold">Cooking</td>
                <td className="py-2 px-3">₹450</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-2 px-3">#1022</td>
                <td className="py-2 px-3">Table 1</td>
                <td className="py-2 px-3 text-green-600 font-semibold">Served</td>
                <td className="py-2 px-3">₹780</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-2 px-3">#1021</td>
                <td className="py-2 px-3">Table 6</td>
                <td className="py-2 px-3 text-blue-600 font-semibold">Paid</td>
                <td className="py-2 px-3">₹320</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
