// src/components/LoginPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div className="relative flex flex-row justify-center justify-around items-center min-h-screen overflow-hidden mx-auto bg-white">
      <div className="w-max p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-black">Welcome Back!</h1>
        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-gray-400 focus:border-gray-800 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md border-gray-400 focus:border-gray-800 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link to="/forget" className="text-xs text-blue-600 hover:underline">
            Forget Password?
          </Link>
          <div className="mt-2">
            <Link to="/homepage">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-300">
                Sign In
              </button>
            </Link>
          </div>
        </form>
        <div className="mt-4 text-sm text-center text-gray-700">
          Don't have an account?
          <Link to="/signup" className="text-sm text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
        <div className="mt-4 text-sm text-center text-gray-700">
          <Link to="/" className="text-sm text-blue-600 hover:underline">
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
