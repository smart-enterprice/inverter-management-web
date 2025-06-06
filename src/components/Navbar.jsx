import React from 'react';
import { 
  FiBell, 
  FiSearch,
  FiSettings,
  FiGrid,
  FiGlobe
} from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="p-4 bg-[#F9FAFB]">
      <div className="flex items-center justify-between px-6 py-2.5 bg-white rounded-xl shadow-sm max-w-[90%] mx-auto">
        {/* Left Side - Search */}
        <div className="flex items-center gap-4 flex-1 max-w-lg">
          {/* Search Bar */}
          <div className="relative w-full">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search (Ctrl+/)"
              className="w-full pl-10 pr-4 py-2 bg-white text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Right Side - Actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-50 rounded-lg">
            <FiBell className="text-base text-gray-600" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full overflow-hidden">
              <img
                src="https://ui-avatars.com/api/?background=9333EA&color=fff"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-sm text-gray-600">
              Welcome, <span className="font-semibold text-gray-900">User</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;