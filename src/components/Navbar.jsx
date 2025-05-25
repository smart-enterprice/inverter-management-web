import { FiBell } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b bg-white sticky top-0 z-10">
      <input
        type="text"
        placeholder="Search Task"
        className="w-1/3 px-4 py-2 rounded-full border text-sm"
      />
      <div className="flex items-center gap-4">
        <button className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800">
          + Create New Order
        </button>
        <FiBell className="text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
