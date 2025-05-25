import Navbar from "../components/Navbar";
import StatusBadge from "../components/StatusBadge";

const Dashboard = () => {
  return (
    <>
    <div className="flex flex-col flex-grow">
      <Navbar />

      <div className="p-6 space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["Total Admin", "1"],
            ["Total Salesmen", "10"],
            ["Total Dealers", "50"],
            ["Total Orders", "200"],
            ["This Month's Sales Goal", "100/400 25%"],
            ["Orders This Month", "100"],
            ["Ongoing Orders", "10"],
            ["Low Stock Products", "10"],
          ].map(([label, value], idx) => (
            <div key={idx} className="bg-black text-white rounded-lg p-4 text-sm space-y-1">
              <p>{label}</p>
              <h2 className="text-lg font-bold">{value}</h2>
            </div>
          ))}
        </div>

        {/* Pending Orders */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-bold text-lg mb-4">Pending Orders</h2>
          <div className="space-y-4">
            {[
              { id: 1, dealer: "Green Energy Solutions", status: "HIGH", note: "Status in production" },
              { id: 2, dealer: "Green Energy Solutions", status: "MEDIUM", note: "Status: packed" },
              { id: 6, dealer: "Green Energy Solutions", status: "LOW", note: "Status: billed" },
              { id: 209, dealer: "Green Energy Solutions", status: "HIGH", note: "Status in production" },
            ].map((order, idx) => (
              <div key={idx} className="border p-4 rounded-md flex justify-between items-center">
                <div>
                  <p className="font-semibold">Order #{order.id}</p>
                  <p className="text-sm text-gray-500">Dealer: {order.dealer}</p>
                </div>
                <div className="text-right">
                  <StatusBadge status={order.status} />
                  <p className="text-xs text-gray-500">{order.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
