import { FiUsers, FiPackage, FiTruck, FiSettings, FiUser, FiClipboard, FiBox, FiBarChart2 } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-white border-r p-5 flex flex-col justify-between">
      <div>
        <h1 className="text-lg font-bold flex items-center gap-2 mb-10">🌀 Name</h1>
        <nav className="space-y-4">
          <NavItem icon={<FiBarChart2 />} label="Dashboard" />
          <NavItem icon={<FiUsers />} label="Users" />
          <NavItem icon={<FiUser />} label="Dealers" />
          <NavItem icon={<FiBox />} label="Products" />
          <NavItem icon={<FiClipboard />} label="Orders" />
          <NavItem icon={<FiTruck />} label="Delivery" />
          <NavItem icon={<FiPackage />} label="Billing" />
        </nav>
      </div>
      <div className="space-y-4">
        <NavItem icon={<FiUser />} label="Account" />
        <NavItem icon={<FiSettings />} label="Settings" />
      </div>
    </div>
  );
};

const NavItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 text-gray-700 hover:text-black cursor-pointer">
    <span className="text-xl">{icon}</span>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default Sidebar;
