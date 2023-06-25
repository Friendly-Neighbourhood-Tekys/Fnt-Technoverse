"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform search functionality with the searchQuery
    console.log('Search query:', searchQuery);
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className='w-4/5 mx-auto mt-20 flex flex-col justify-center items-center space-y-4'>
        <h1 className='text-4xl font-semibold text-black'>404 - Page Not Found</h1>
        <h4 className='py-10 text-lg text-black font-light'>
          Sorry, there isn't much to see here. How about you check out the rest of our amazing website?
        </h4>
        <p>
          Use the search box or the links below to explore our amazing application
        </p>
        <form onSubmit={handleSearch}>
          <input
            className='w-full px-6 py-3 border border-gray-400 rounded-full justify-center'
            type='search'
            placeholder='Go on. Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={handleClick}
          />
        </form>
        <div className='space-x-4 justify-center'>
          <Link className='underline text-blue-600 hover:text-red-500 duration-300' href='/'>
            Homepage
          </Link>
          <Link className='underline text-blue-600 hover:text-red-500 duration-300' href='/contact'>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
