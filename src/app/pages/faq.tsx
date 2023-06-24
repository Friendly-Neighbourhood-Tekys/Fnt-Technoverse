import React from 'react';
import Navbar from '../components/Navbar';

const FAQ: React.FC = () => {
  return (
    <div>
      <Navbar onSearch={function (query: string): void {
        throw new Error('Function not implemented.');
      } } />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        {/* Rest of your content */}
      </div>
    </div>
  );
};

export default FAQ;

