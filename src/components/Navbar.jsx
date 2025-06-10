import React, { useState } from "react";

const navLinks = [
  { label: "About GDG", target: "about" },
  { label: "Past Events", target: "past-events" },
  { label: "Upcoming Events", target: "upcoming-events" },
  { label: "Our Organizers", target: "organizers" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-10 w-full bg-white shadow-md mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between rounded-full py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Logo" className="h-4 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => handleNavClick(e, link.target)}
              className="font-poppins text-[#5B616D] hover:text-gray-700 text-sm no-underline"
            >
              {link.label}
            </a>
          ))}
          <button className="font-poppins rounded-full bg-black text-white px-8 py-2 text-sm">
            Login
          </button>
        </div>

        {/* Mobile: Hamburger */}
        <div className="flex items-center md:hidden space-x-4">
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-15 left-0 w-full bg-white shadow-lg rounded-b-2xl flex flex-col items-center p-4 space-y-4 md:hidden z-50
          transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }
        `}
      >
        {navLinks.map((link) => (
          <a
            key={link.target}
            href={`#${link.target}`}
            onClick={(e) => handleNavClick(e, link.target)}
            className="font-poppins text-[#5B616D] hover:text-gray-700 text-sm no-underline"
          >
            {link.label}
          </a>
        ))}
        <button className="font-poppins rounded-full bg-black w-full text-white px-8 py-2 text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
