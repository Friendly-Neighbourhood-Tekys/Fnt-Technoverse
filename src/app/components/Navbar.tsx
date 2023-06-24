import React, { useState } from 'react';
import Link from 'next/link';

interface NavbarProps {
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    setSearchQuery('');
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <p className="text-white text-lg font-bold">Tech Support</p>
        </div>
        <div>
          <ul className="flex space-x-7">
            <li>
              <Link href="/faq">
                <p className="text-white">FAQ</p>
              </Link>
            </li>
            <li className="relative">
              <button onClick={toggleDropdown} className="text-white cursor-auto">
                Contact Us
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 bg-white py-2 px-4 shadow rounded">
                  <Link href="/contact/email">
                    <p className="text-gray-800 block hover:bg-gray-200 py-1">Email</p>
                  </Link>
                  <Link href="/contact/phone">
                    <p className="text-gray-800 block hover:bg-gray-200 py-1">Phone</p>
                  </Link>
                  <Link href="/contact/form">
                    <p className="text-gray-800 block hover:bg-gray-200 py-1">Contact Form</p>
                  </Link>
                </div>
              )}
            </li>
            <li>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-2 py-1 text-gray-800 bg-gray-200 rounded"
                />
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
