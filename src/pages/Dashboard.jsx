import React from 'react';
import { FiUsers, FiPackage, FiShoppingBag, FiTruck, FiTrendingUp, FiBox, FiAlertCircle, FiClock, FiArrowRight } from 'react-icons/fi';

const StatCard = ({ icon, title, value }) => (
  <div className="bg-black rounded-2xl p-4 transition-transform hover:scale-[1.02] cursor-pointer">
    <div className="flex items-center justify-between">
      <div className="text-white">
        <p className="text-sm text-gray-400">{title}</p>
        <h3 className="text-xl sm:text-2xl font-bold mt-2">{value}</h3>
      </div>
      <div className="text-white text-xl sm:text-2xl bg-white/10 p-2 rounded-xl">
        {icon}
      </div>
    </div>
  </div>
);

const MetricCard = ({ title, value, subValue, icon }) => (
  <div className="bg-black rounded-2xl p-4 transition-transform hover:scale-[1.02] cursor-pointer">
    <div className="flex items-center justify-between">
      <h3 className="text-sm text-gray-400">{title}</h3>
      <div className="text-white text-xl bg-white/10 p-2 rounded-lg">
        {icon}
      </div>
    </div>
    <div className="text-white">
      <div className="text-xl sm:text-2xl font-bold">{value}</div>
      {subValue && <div className="text-sm text-gray-400 mt-1">{subValue}</div>}
    </div>
  </div>
);

const OrderCard = ({ number, dealer, priority, status }) => {
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'bg-gradient-to-r from-red-400 to-red-500';
      case 'medium': return 'bg-gradient-to-r from-yellow-400 to-yellow-500';
      case 'low': return 'bg-gradient-to-r from-green-400 to-green-500';
      default: return 'bg-gradient-to-r from-gray-400 to-gray-500';
    }
  };

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case 'in-production':
        return 'text-blue-600 bg-blue-50 border border-blue-100';
      case 'packed':
        return 'text-yellow-600 bg-yellow-50 border border-yellow-100';
      case 'billed':
        return 'text-green-600 bg-green-50 border border-green-100';
      default:
        return 'text-gray-600 bg-gray-50 border border-gray-100';
    }
  };

  return (
    <div className="bg-white backdrop-blur-lg rounded-2xl p-4 hover:shadow-lg transition-all border border-black/5 hover:border-black/10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-semibold text-lg">#{number}</h4>
              <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getPriorityColor(priority)}`}>
                {priority}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">{dealer}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(status)}`}>
          {status}
        </span>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const orders = [
    { id: 1, number: "1", dealer: "Green Energy Solutions", priority: "High", status: "in-production" },
    { id: 2, number: "2", dealer: "Green Energy Solutions", priority: "Medium", status: "packed" },
    { id: 3, number: "6", dealer: "Green Energy Solutions", priority: "Low", status: "billed" },
    { id: 4, number: "209", dealer: "Green Energy Solutions", priority: "High", status: "in-production" }
  ];

  return (
    <div className="h-[calc(100vh-80px)] p-4 sm:p-6 overflow-y-auto">
      <div className="grid grid-rows-[auto_auto_1fr] gap-4 h-full max-h-full">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={<FiUsers />} title="Total Admin" value="1" />
          <StatCard icon={<FiUsers />} title="Total Salesmen" value="10" />
          <StatCard icon={<FiUsers />} title="Total Dealers" value="50" />
          <StatCard icon={<FiShoppingBag />} title="Total Orders" value="200" />
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard 
            icon={<FiTrendingUp />}
            title="This Month's Sales Goal"
            value="100/600"
            subValue="25% Achieved"
          />
          <MetricCard 
            icon={<FiShoppingBag />}
            title="Orders This Month"
            value="100"
          />
          <MetricCard 
            icon={<FiTruck />}
            title="Ongoing Orders"
            value="10"
          />
          <MetricCard 
            icon={<FiAlertCircle />}
            title="Low Stock Products"
            value="10"
          />
        </div>

        {/* Pending Orders Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 sm:p-6 shadow-sm border border-black/5 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-black text-white p-2 rounded-xl">
                <FiClock className="text-xl" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">Pending Orders</h2>
                <p className="text-sm text-gray-500">Track your pending order status</p>
              </div>
            </div>
            <button className="w-full sm:w-auto px-4 py-2 bg-black text-white rounded-xl text-sm font-medium hover:bg-black/90 transition-colors inline-flex items-center justify-center gap-2">
              View All Orders
              <FiArrowRight />
            </button>
          </div>
          <div className="grid gap-3 overflow-y-auto max-h-[calc(100vh-400px)]">
            {orders.map(order => (
              <OrderCard 
                key={order.id}
                number={order.number}
                dealer={order.dealer}
                priority={order.priority}
                status={order.status}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
