import React from "react";

const Footer = () => (
  <footer className="pt-12 pb-4 rounded-b-2xl">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex-col md:items-start md:justify-between">
        {/* Links */}
        <div className="flex w-full mt-10">
          <ul className="flex flex-col sm:flex-row w-full justify-around gap-4 sm:gap-0">
            {/* Logo and Brand */}

            <img src="/logo.svg" alt="GDG Logo" className="h-5 w-auto" />

            <li>
              <a
                href="#"
                className="text-gray-600 font-poppins font-medium hover:underline"
              >
                Help
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 font-poppins font-medium hover:underline"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 font-poppins font-medium hover:underline"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 font-poppins font-medium hover:underline"
              >
                Resources
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-100 my-8"></div>
      {/* Bottom */}
      <div className="flex md:flex-row  justify-center">
        <span className="text-gray-500 font-poppins text-base font-regular mb-2 md:mb-0">
          ©2025 All Rights Reserved.
        </span>
        {/* <a
          href="#"
          className="text-black font-poppins font-semibold text-base hover:underline"
        >
          Terms of Service
        </a> */}
      </div>
    </div>
  </footer>
);

export default Footer;
