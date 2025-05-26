import { FiBell, FiUser, FiSearch, FiMenu } from "react-icons/fi";

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-white sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
        >
          <FiMenu className="text-xl text-gray-600" />
        </button>
        <div className="flex-1 max-w-3xl relative hidden sm:block">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search Task"
              className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300 transition-all bg-gray-50"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative">
          <button className="relative h-10 w-10 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-all cursor-pointer">
            <FiBell className="text-xl text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full border-2 border-white font-medium">2</span>
          </button>
        </div>
        <div className="flex items-center gap-3 py-2 cursor-pointer">
          <div className="h-9 w-9 bg-gray-200 rounded-full flex items-center justify-center">
            <FiUser className="text-xl text-gray-600" />
          </div>
          <div className="hidden sm:flex flex-col">
            <div className="text-sm font-medium text-gray-700">Welcome, <span className="text-sm font-semibold text-gray-900">User</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
