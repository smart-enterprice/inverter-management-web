import {
  FiUsers,
  FiPackage,
  FiTruck,
  FiSettings,
  FiUser,
  FiClipboard,
  FiBox,
  FiBarChart2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();

  return (
    <aside
      className={`bg-white h-screen shadow-md fixed left-0 top-0 transition-all duration-300 z-20 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-8 relative">
          <div className="flex justify-center mb-6">
            <Link
              to="/dashboard"
              className={`flex items-center gap-2 ${
                isCollapsed ? "justify-center" : ""
              }`}
            >
              <span className="text-2xl">🌀</span>
              <span
                className={`text-lg font-semibold transition-opacity duration-200 ${
                  isCollapsed ? "opacity-0 absolute" : "opacity-100"
                }`}
              >
                Inverter MS
              </span>
            </Link>
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -right-3 top-9 bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-all"
          >
            {isCollapsed ? (
              <FiChevronRight size={16} />
            ) : (
              <FiChevronLeft size={16} />
            )}
          </button>
          <div className="border-b border-gray-200"></div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          <NavItem
            icon={<FiBarChart2 />}
            label="Dashboard"
            to="/dashboard"
            active={location.pathname === "/dashboard"}
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<FiUsers />}
            label="Users"
            to="/users"
            active={location.pathname === "/users"}
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<FiUser />}
            label="Dealers"
            to="/dealers"
            active={location.pathname === "/dealers"}
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<FiBox />}
            label="Products"
            to="/products"
            active={location.pathname === "/products"}
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<FiClipboard />}
            label="Orders"
            to="/orders"
            active={location.pathname === "/orders"}
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<FiTruck />}
            label="Delivery"
            to="/delivery"
            active={location.pathname === "/delivery"}
            isCollapsed={isCollapsed}
          />
          <NavItem
            icon={<FiPackage />}
            label="Billing"
            to="/billing"
            active={location.pathname === "/billing"}
            isCollapsed={isCollapsed}
          />
        </nav>

        <div className="px-3 py-4 space-y-1">
          <NavItem
            icon={<FiSettings />}
            label="Settings"
            to="/settings"
            active={location.pathname === "/settings"}
            isCollapsed={isCollapsed}
          />
        </div>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label, to, active, isCollapsed }) => (
  <Link
    to={to}
    className={`relative flex items-center ${
      isCollapsed ? "justify-center" : ""
    } px-3 py-2.5 rounded-lg transition-all group ${
      active ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
    }`}
  >
    <span className="text-xl">{icon}</span>
    {isCollapsed ? (
      <span className="absolute left-full ml-2 p-2 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 whitespace-nowrap z-50">
        {label}
      </span>
    ) : (
      <span className="ml-3 text-sm font-medium">{label}</span>
    )}
  </Link>
);

export default Sidebar;
