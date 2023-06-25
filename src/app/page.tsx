"use client";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import RegistrationPage from './components/RegisterPage';
import FAQ from './components/faq';
import LoginPage from './components/login';

enum PageContent {
  Overview,
  Login,
  Registration,
  UserProfile,
}

const Page: React.FC = () => {
  const [pageContent, setPageContent] = useState<PageContent>(PageContent.Overview);

  const handleLoginClick = () => {
    setPageContent(PageContent.Login);
  };

  const handleRegistrationClick = () => {
    setPageContent(PageContent.Registration);
  };

  const handleUserProfileClick = () => {
    setPageContent(PageContent.UserProfile);
  };

  return (
    <Router>

      <div className='w-[95%] mx-auto h-full text-black'>

        <nav className='sticky h-12 m-auto items-center z-10 bg-white top-0 w-full justify-between  border-2 border-gray-600 flex'>
          <div className='text-blue-600 font-medium text-2xl'>FNT Teky Knikals</div>
          <div className='flex px-10 gap-4 h-10 items-center  rounded-lg '>
            <div>Home</div>
            <Link to="/contact" className=" text-black py-2 rounded hover:text-blue-400 ml-4">
              Contact
            </Link>
            <Link to="/faq" className=" text-black py-2 rounded hover:text-blue-400 ml-4">
              FAQ
            </Link>
          </div>





        </nav>


        <div
          id="home"
          className="flex text-black  border-b-[2px] border-x-[2px] border-black max-w-[2000px] min-h-[60vh]  justify-between pl-12"
        >
          <div
            className="max-w-[60%] h-full flex flex-col my-20   justify-center"

          >
            <h1 className="flex mb-5 text-5xl p-10 text-black font-bold ">
              It's time we revamped the Tech Industry
            </h1>
            <p className="text-lg m-4 text-gray-600 opacity-0">
              Throughout history, every attempt to progress has been aimed at enhancing human life while neglecting the well-being of <b>flora and fauna</b>,
              which have often been sacrificed for <b>our benefit</b>. Our medium seeks to provide benefits to the long-suffering domestic animals
              of the world who have been persecuted for ages,in the form of aids and resources under the banner of concerned organizations.
              Introducing <b>Project Shelter</b>.
            </p>
            <div className="m-0 opacity-0">
              <div>
                <img src="https://i.ibb.co/SRdvRkb/download.webp"></img>
                
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className="bg-gray-800 m-auto min-h-screen">

        <Routes>
          <Route
            path="/"
            element={
              <div className=" flex justify-items-start justify-center">
                {pageContent === PageContent.Overview && (



                  <div className="">
                    <a href="#1">
                      <button
                        className={`w-24 h-8  bg-blue-400 font-semibold text-lg px-3 border-[1px] m-2  border-black rounded-md drop-shadow-[0px_0px_0px_rgb(0,0,0)] hover:shadow-none shadow-[6px_6px_0px_rgb(0,0,0)]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all  `}
                        onClick={handleLoginClick}

                      >
                        Login
                      </button>
                    </a>
                    <a href="#1">
                      <button
                        className={`w-24 h-8  bg-blue-400 font-semibold text-lg px-3 border-[1px] m-2  border-black rounded-md drop-shadow-[0px_0px_0px_rgb(0,0,0)] hover:shadow-none shadow-[6px_6px_0px_rgb(0,0,0)]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all  `}
                        onClick={handleRegistrationClick}
                      >
                        Register
                      </button>
                    </a>
                    <a href="#1">
                      <Link to="/faq" className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 ml-4">
                        FAQ
                      </Link>
                    </a>

                  </div>
                )}
                <div id="1">
                  {pageContent === PageContent.Login && (
                    <div className="m-auto  text-center justify-center h-screen w-screen ">
                      <LoginPage />
                    </div>
                  )}

                  {pageContent === PageContent.Registration && (
                    <div className="m-auto p-20 text-center justify-center h-screen w-screen ">
                      <RegistrationPage />
                    </div>
                  )}

                  {pageContent === PageContent.UserProfile && (
                    <div className="m-auto text-center justify-center h-screen w-screen ">
                      <h1>User Profile Component</h1>
                    </div>
                  )}
                </div>
              </div>
            }
          />

          <Route path="/faq" element={<FAQ />} />
        </Routes>


        <footer className="bg-gray-800 py-4">
          <div className="container mx-auto text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Tech Support. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>

  );
};

export default Page;
