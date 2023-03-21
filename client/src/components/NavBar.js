import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500">
      <div className="mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex items-center h-16 justify-between">
          <div className="text-white text-2xl font-bold">MyLabRetriever</div>
          <div className="hidden md:flex items-baseline space-x-4 ml-auto">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/features" className="text-white hover:text-gray-300">
              Features
            </Link>
            <Link to="/chat" className="text-white hover:text-gray-300">
              Chat
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
          >
            Features
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
          >
            Chat
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
