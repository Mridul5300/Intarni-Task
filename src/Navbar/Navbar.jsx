
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center py-4 px-2">
          <a href="#" className="font-semibold text-gray-500 text-lg">
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
              <IoClose className="w-6 h-6 transl text-gray-500 hover:text-orange-500" />
            ) : (
              <IoMdMenu className="w-6 h-6 text-gray-500 hover:text-orange-500" />
            )}
          </button>
        </div>

        {/* Primary Nav for larger screens */}
            <div className="hidden md:flex items-center justify-center space-x-1">
            <ul>
             <li className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">
                 Home
               </li>
             </ul>
            <ul>
               <li
                href="#"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                About
              </li>
            </ul>
            <ul>
              <li
                href="#"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Services
              </li>
            </ul>
            <ul>
              <li
                href="#"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Contact
              </li>
            </ul>
          </div>

        {/*  Nav for larger screens */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="#"
            className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
          >
            Log In
          </a>
          <a
            href="#"
            className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${menuOpen ? "" : "hidden"} md:hidden mobile-menu`}>
        <ul className="navbar w-10/12 space-y-5">
        <li   className="cursor-default text-sm px-2 py-4 hover:bg-amber-200 hover:cursor-pointer">
             Home
          </li>
          <li   className="cursor-default text-sm px-2 py-4 hover:bg-amber-200 hover:cursor-pointer">
              About
          </li>
          <li   className="cursor-default text-sm px-2 py-4 hover:bg-amber-200 hover:cursor-pointer">
              Services
          </li>
          <li   className="cursor-default text-sm px-2 py-4 hover:bg-amber-200 hover:cursor-pointer">
              Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

