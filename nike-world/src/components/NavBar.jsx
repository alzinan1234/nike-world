import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import logo from "../assets/video/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow fixed z-20 w-full bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <svg
              aria-hidden="true"
              className="swoosh-svg"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="100px"
              height="100px"
              fill="none"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <FaSearch className="text-gray-800 w-6 h-6" />
            <FaShoppingCart className="text-gray-800 w-6 h-6" />
            <a
              aria-label="Favorites"
              className="text-red-900 btn-primary-dark"
              href="https://www.nike.com/favorites"
              data-testid="favorite-button"
              title="Favorites"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                ></path>
              </svg>
            </a>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#search"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800"
            >
              <FaSearch className="inline-block mr-2" /> Search
            </a>
            <a
              href="#cart"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800"
            >
              <FaShoppingCart className="inline-block mr-2" /> Cart
            </a>
            <a
              href="https://www.nike.com/favorites"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="20px"
                height="20px"
                className="inline-block mr-2"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                ></path>
              </svg>
              Favorites
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
