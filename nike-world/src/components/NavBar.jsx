import React, { useEffect, useState } from "react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/video/logo.png";

const NavBar = () => {
  const [navState, setNavState] = useState(false);
  const [cartState, setCartState] = useState(false); // Local state for cart
  const [totalQTY, setTotalQTY] = useState(0); // Example local state for total quantity

  const onCartToggle = () => {
    setCartState(!cartState); // Toggle cart state
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
    <>
      <header
        className={`${
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        } transition-all duration-300`}
      >
        <nav className="flex items-center justify-between w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-12 h-auto sm:w-14 md:w-16 transition-all duration-300 ${
                navState && "filter brightness-0"
              }`}
            />
          </div>

          {/* Icons for mobile */}
          <ul className="flex items-center justify-center gap-2 sm:gap-4">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style w-5 h-5 sm:w-6 sm:h-6 ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style w-5 h-5 sm:w-6 sm:h-6 ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center relative">
              <button
                type="button"
                onClick={onCartToggle}
                className="border-none outline-none active:scale-110 transition-all duration-300"
              >
                <ShoppingBagIcon
                  className={`icon-style w-5 h-5 sm:w-6 sm:h-6 ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute -top-2 -right-2 shadow w-4 h-4 sm:w-5 sm:h-5 text-[0.65rem] sm:text-[0.75rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
