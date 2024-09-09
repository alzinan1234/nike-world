import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/video/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" shadow-md fixed z-20  w-full ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="w-24" src={logo} alt="Nike Logo" />
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:flex space-x-8 text-white">
            <a href="#" className="text-slate-200 hover:text-gray-500">
              Men
            </a>
            <a href="#" className="text-slate-200 hover:text-gray-500">
              Women
            </a>
            <a href="#" className="text-slate-200 hover:text-gray-500">
              Kids
            </a>
            <a href="#" className="text-slate-200 hover:text-gray-500">
              Sale
            </a>
          </div>

          {/* Cart icon */}
          <div className="hidden md:flex items-center space-x-4">
            <FaShoppingCart className="text-gray-800 w-6 h-6" />
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">
              3
            </span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="text-gray-800 w-6 h-6" />
              ) : (
                <FaBars className="text-gray-800 w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Men
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Women
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Kids
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Sale
          </a>
          <div className="flex justify-center py-4">
            <FaShoppingCart className="text-gray-800 w-6 h-6" />
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs ml-2">
              3
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
