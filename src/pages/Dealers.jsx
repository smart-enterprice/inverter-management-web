import React, { useState } from 'react';
import { FiPlus, FiSearch, FiMoreHorizontal, FiX, FiCheck, FiChevronDown, FiEdit2, FiTrash2, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CreateDealerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 sm:p-6">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg" onClick={e => e.stopPropagation()}>
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Add New Dealer</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <FiX className="text-gray-500" size={20} />
            </button>
          </div>

          <form className="p-6 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dealer Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-300 text-sm"
                  placeholder="Enter dealer name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-300 text-sm"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-300 text-sm"
                  placeholder="Enter city"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-300 text-sm"
                  placeholder="Enter complete address"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-lg bg-[#9333EA] text-white hover:bg-[#8829DD] transition-colors text-sm font-medium"
              >
                Add Dealer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const StatusSelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['All Statuses', 'Active', 'Inactive'];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-300 text-sm bg-white w-[140px] flex items-center justify-between"
      >
        <span className="text-gray-900">{value}</span>
        <FiChevronDown className={`text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-30" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-[140px] bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-40">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-[#9333EA]/5 ${
                  value === option ? 'bg-[#9333EA]/5 text-[#9333EA]' : 'text-gray-700'
                }`}
              >
                <span>{option}</span>
                {value === option && <FiCheck className="text-[#9333EA]" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ActionMenu = ({ dealerId }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 hover:bg-gray-50 rounded-lg transition-colors"
      >
        <FiMoreHorizontal className="text-gray-400" size={18} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-30" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-40">
            <Link
              to={`/dealers/${dealerId}`}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <FiEye size={16} />
              View Details
            </Link>
            <button
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => {
                // Handle edit
                setIsOpen(false);
              }}
            >
              <FiEdit2 size={16} />
              Edit
            </button>
            <button
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              onClick={() => {
                // Handle delete
                setIsOpen(false);
              }}
            >
              <FiTrash2 size={16} />
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const Dealers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');

  const dealers = [
    {
      id: 1,
      name: "Green Energy Solutions",
      phone: "1234567890",
      city: "Solar City",
      status: "Active",
      createdBy: "Admin",
      createdDate: "Jun 06, 2025"
    },
    {
      id: 2,
      name: "Power Tech Distributors",
      phone: "9876543210",
      city: "Electric Town",
      status: "Active",
      createdBy: "Admin",
      createdDate: "Jun 06, 2025"
    },
    {
      id: 3,
      name: "Eco Solutions Ltd",
      phone: "5555555555",
      city: "Green Valley",
      status: "Inactive",
      createdBy: "Admin",
      createdDate: "Jun 05, 2025"
    }
  ];

  // Filter dealers based on search query and selected status
  const filteredDealers = dealers.filter(dealer => {
    const matchesSearch = dealer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         dealer.phone.includes(searchQuery);
    
    const matchesStatus = selectedStatus === 'All Statuses' || 
                         dealer.status === selectedStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Dealers</h1>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#9333EA] text-white rounded-lg hover:bg-[#8829DD] transition-colors w-full sm:w-auto text-sm font-medium"
        >
          <FiPlus className="text-lg" />
          Add New Dealer
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Dealers List</h2>
            <p className="text-sm text-gray-500 mt-1">View and manage all dealers in the system</p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-1 focus:ring-gray-300 text-sm"
              />
            </div>
            <StatusSelect 
              value={selectedStatus}
              onChange={setSelectedStatus}
            />
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900">Dealer Name</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900">Phone Number</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900">City</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900">Status</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900">Created By</th>
                  <th className="text-left py-4 px-4 text-sm font-semibold text-gray-900">Created Date</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDealers.map((dealer) => (
                  <tr key={dealer.id} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 px-4">
                      <span className="text-sm font-medium text-gray-900">{dealer.name}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-600">{dealer.phone}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-600">{dealer.city}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        dealer.status === 'Active' 
                          ? 'bg-green-50 text-green-700'
                          : 'bg-red-50 text-red-700'
                      }`}>
                        {dealer.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-600">{dealer.createdBy}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm text-gray-600">{dealer.createdDate}</span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <ActionMenu dealerId={dealer.id} />
                    </td>
                  </tr>
                ))}
                {filteredDealers.length === 0 && (
                  <tr>
                    <td colSpan="7" className="py-8 text-center">
                      <p className="text-sm text-gray-500">No dealers found matching your criteria</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CreateDealerModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Dealers; 