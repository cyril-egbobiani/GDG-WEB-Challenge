import React from "react";

const Footer = () => (
  <footer className="bg-black pt-12 pb-4 rounded-b-2xl">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        {/* Logo and Brand */}
        <div className="flex flex-col gap-4 min-w-[260px]">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="GDG Logo" className="h-5 w-auto" />
            
          </div>
        </div>
        {/* Links */}
        <div className="flex flex-1 flex-wrap gap-12 justify-between">
          <div>
            <h4 className="text-gray-400 font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white font-semibold hover:underline"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-semibold hover:underline"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold mb-4">Demos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white font-semibold hover:underline"
                >
                  Dark theme
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#2563FF] font-semibold hover:underline"
                >
                  Light theme
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-semibold hover:underline"
                >
                  Classic theme
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white font-semibold hover:underline"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-[#393A3D] my-8"></div>
      {/* Bottom */}
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <span className="text-gray-300 font-poppins text-base font-semibold mb-2 md:mb-0">
          © 2019–2025 All Rights Reserved.
        </span>
        <a
          href="#"
          className="text-white font-poppins font-semibold text-base hover:underline"
        >
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;