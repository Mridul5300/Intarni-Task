
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navlink = (
    <>
      <NavLink to={'/'} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "py-2 px-2 font-medium text-teal-400 lg:border-b-2 lg:border-teal-400 lg:hover:border-teal-500" : "py-2 px-2 font-medium text-gray-400 lg:border-b-2 lg:border-transparent lg:hover:border-teal-400"
      }>
        Home
      </NavLink>
      <NavLink to={'/mobile'} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "py-2 px-2 font-medium text-teal-400 lg:border-b-2 lg:border-teal-400 lg:hover:border-teal-500" : "py-2 px-2 font-medium text-gray-400 lg:border-b-2 lg:border-transparent lg:hover:border-teal-400"
      }>
        Mobiles
      </NavLink>
      <NavLink to={'/about'} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "py-2 px-2 font-medium text-teal-400 lg:border-b-2 lg:border-teal-400 lg:hover:border-teal-500" : "py-2 px-2 font-medium text-gray-400 lg:border-b-2 lg:border-transparent lg:hover:border-teal-400"
      }>
        About Us
      </NavLink>
    </>
  );

  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center py-4 px-2">
          <a href="#" className="font-semibold text-gray-100 text-lg">
            Our Website
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="outline-none mobile-menu-button"
          >
            {menuOpen ? (
              <IoClose className="w-6 h-6 text-gray-100 hover:text-teal-400 transition duration-300 ease-in-out" />
            ) : (
              <IoMdMenu className="w-6 h-6 text-gray-100 hover:text-teal-400 transition duration-300 ease-in-out" />
            )}
          </button>
        </div>

        {/* Primary Nav for larger screens */}
        <div className="hidden gap-8 md:flex items-center justify-center space-x-1">
          {navlink}
        </div>

        {/* Nav for larger screens */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="#"
            className="py-2 px-2 font-medium text-gray-400 rounded hover:bg-gray-700 hover:text-teal-400 transition duration-300 ease-in-out"
          >
            Log In
          </a>
          <a
            href="#"
            className="py-2 px-2 font-medium text-gray-900 bg-teal-400 rounded hover:bg-teal-500 hover:text-gray-100 transition duration-300 ease-in-out"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${menuOpen ? "flex" : "hidden"} md:hidden mobile-menu flex flex-col space-y-4`}>
        {navlink}
      </div>
    </div>
  );
};

export default Navbar;

