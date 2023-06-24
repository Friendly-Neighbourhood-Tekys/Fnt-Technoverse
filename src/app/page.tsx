"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <li className='relative'>
              <button onClick={toggleDropdown}
              className='text-white cursor-auto'> 
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
