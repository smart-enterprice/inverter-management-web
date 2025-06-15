import React, { useState, useEffect, useRef } from 'react';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

const CustomSelect = ({ value, onChange, options, placeholder, name, searchable = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  // Filter options based on search query
  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-left text-sm flex items-center justify-between hover:border-[#9333EA] focus:outline-none focus:ring-2 focus:ring-[#9333EA]/20 transition-all"
      >
        <span className={value ? "text-gray-900" : "text-gray-500"}>{value || placeholder}</span>
        <FiChevronDown className={`text-gray-400 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => {
            setIsOpen(false);
            setSearchQuery('');
          }} />
          <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg py-1 animate-fadeIn">
            {searchable && (
              <div className="px-2 pb-2">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:border-[#9333EA] focus:ring-1 focus:ring-[#9333EA]/20"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            )}
            <div className="max-h-60 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      onChange({ target: { name, value: option } });
                      setIsOpen(false);
                      setSearchQuery('');
                    }}
                    className={`w-full px-4 py-2 text-sm text-left transition-colors ${
                      value === option 
                        ? 'bg-[#9333EA]/10 text-[#9333EA]' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {option}
                  </button>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-500 text-center">
                  No options found
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomSelect; 