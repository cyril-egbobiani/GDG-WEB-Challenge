import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-2 py-2 pl-8 bg-[#F8F8F8] rounded-full max-w-7xl mx-auto relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="public/assets/logo.svgg" alt="Logo" className="h-4 w-auto" />
      </div>

      {/* Center: Search and Links (hidden on mobile) */}
      <div className="hidden md:flex items-center space-x-10">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-700 mr-2 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="7" strokeWidth="2" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" strokeWidth="2" />
        </svg>
        {/* Nav Links */}
        <a
          href="#"
          className="font-poppins text-[#5B616D] hover:text-gray-700 text-sm no-underline"
        >
          About GDG
        </a>
        <a
          href="#"
          className="font-poppins text-[#5B616D] hover:text-gray-700 text-sm no-underline"
        >
          Chapters
        </a>
        <a
          href="#"
          className="font-poppins text-[#5B616D] hover:text-gray-700 text-sm no-underline"
        >
          Upcoming Events
        </a>
        <button className="font-poppins rounded-full bg-black text-white px-8 py-2 text-sm">
          Login
        </button>
      </div>

      {/* Mobile: Search and Hamburger */}
      <div className="flex items-center md:hidden space-x-4">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-700 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="7" strokeWidth="2" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" strokeWidth="2" />
        </svg>
        {/* Hamburger/X Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          {menuOpen ? (
            // X icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu with Slide Down Animation */}
      <div
        className={`absolute top-20 right-4 w-56 bg-white shadow-lg rounded-lg flex flex-col items-center p-4 space-y-4 md:hidden z-50
          transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        <a
          href="#"
          className="font-poppins text-[#5B616D] hover:text-gray-700 text-sm no-underline"
        >
          About GDG
        </a>
        <a
          href="#"
          className="font-poppins text-[#5B616D] hover:text-gray-700 text-sm no-underline"
        >
          Chapters
        </a>
        <a
          href="#"
          className="font-poppins text-[#5B616D] hover:text-gray-700 text-sm no-underline"
        >
          Upcoming Events
        </a>
        <button className="font-poppins rounded-full bg-black w-full text-white px-8 py-2 text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
