import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "../app/CartSlice.js";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/video/logo.png";

const NavBar = () => {
  const [navState, setNavState] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${
        navState ? "bg-white shadow-md" : "bg-transparent"
      } transition-all duration-300 z-50`}
    >
      <nav className="flex items-center justify-between px-4 py-2 lg:px-8 lg:py-4 relative">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className={`w-12 h-auto lg:w-16 transition-transform duration-300 ${
              navState ? "filter brightness-0" : "filter brightness-100"
            }`}
          />
        </div>

        {/* Search Input Field */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 mx-auto mt-2 px-4 lg:px-8 w-full max-w-md bg-gray-800 z-50">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border rounded-md shadow-md bg-gray-800 text-white placeholder-white"
            />
          </div>
        )}

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            type="button"
            className={`flex items-center p-2 rounded-full transition-colors duration-300 ${
              navState
                ? "text-slate-900 hover:bg-slate-200"
                : "text-white hover:bg-slate-600"
            }`}
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <MagnifyingGlassIcon className="w-6 h-6" />
          </button>
          <button
            type="button"
            className={`flex items-center p-2 rounded-full transition-colors duration-300 ${
              navState
                ? "text-slate-900 hover:bg-slate-200"
                : "text-white hover:bg-slate-600"
            }`}
          >
            <HeartIcon className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={onCartToggle}
            className="relative flex items-center p-2 rounded-full transition-transform duration-300 active:scale-110"
          >
            <ShoppingBagIcon
              className={`w-6 h-6 ${
                navState ? "text-slate-900" : "text-white"
              }`}
            />
            <div
              className={`absolute top-[-8px] right-[-8px] flex items-center justify-center w-5 h-5 text-xs font-medium rounded-full ${
                navState
                  ? "bg-slate-900 text-white shadow-slate-900"
                  : "bg-white text-slate-900 shadow-slate-100"
              }`}
            >
              {totalQTY}
            </div>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          <li>
            <button
              type="button"
              className={`flex items-center p-2 rounded-full transition-colors duration-300 ${
                navState
                  ? "text-slate-900 hover:bg-slate-200"
                  : "text-white hover:bg-slate-600"
              }`}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`flex items-center p-2 rounded-full transition-colors duration-300 ${
                navState
                  ? "text-slate-900 hover:bg-slate-200"
                  : "text-white hover:bg-slate-600"
              }`}
            >
              <HeartIcon className="w-6 h-6" />
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={onCartToggle}
              className="relative flex items-center p-2 rounded-full transition-transform duration-300 active:scale-110"
            >
              <ShoppingBagIcon
                className={`w-6 h-6 ${
                  navState ? "text-slate-900" : "text-white"
                }`}
              />
              <div
                className={`absolute top-[-8px] right-[-8px] flex items-center justify-center w-5 h-5 text-xs font-medium rounded-full ${
                  navState
                    ? "bg-slate-900 text-white shadow-slate-900"
                    : "bg-white text-slate-900 shadow-slate-100"
                }`}
              >
                {totalQTY}
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
