import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/">
            <a className="text-white text-lg font-bold">Tech Support</a>
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/faq">
                <a className="text-white">FAQ</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-white">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
