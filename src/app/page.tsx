"use client";
import React, { useState } from 'react';
import Navbar from './components/Navbar';

enum PageContent {
  Overview,
  Login,
  Registration,
}

const Page: React.FC = () => {
  const [pageContent, setPageContent] = useState<PageContent>(PageContent.Overview);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleLoginClick = () => {
    setPageContent(PageContent.Login);
  };

  const handleRegistrationClick = () => {
    setPageContent(PageContent.Registration);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Perform search functionality with the query
    console.log('Search query:', query);
  };

  return (
    <div className="bg-gray-800 m-auto min-h-screen">
      <header className="bg-gray-800 py-4">
        <Navbar onSearch={handleSearch} />
      </header>

      <div className="bg-gray-200 h-screen w-full flex justify-items-start justify-center">
        {pageContent === PageContent.Overview && (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black mb-4">Welcome to FNT Tech Support</h1>
            <p className="text-black">Here we value your time.</p>

            <div className="mt-8">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={handleLoginClick}
              >
                Login
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-4"
                onClick={handleRegistrationClick}
              >
                Register
              </button>
            </div>
          </div>
        )}

        {pageContent === PageContent.Login && (
          // Render your Login component here
          <div className="text-center">
            <h1>Login Component</h1>
            {/* Your Login form and logic */}
          </div>
        )}

        {pageContent === PageContent.Registration && (
          // Render your Registration component here
          <div className="text-center">
            <h1>Registration Component</h1>
            {/* Your Registration form and logic */}
          </div>
        )}
      </div>

      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Tech Support. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Page;
