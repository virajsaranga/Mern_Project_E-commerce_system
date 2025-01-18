import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-md">
      {/* Flex container for horizontal alignment */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo/Title */}
        <div className="text-white text-2xl font-bold">
          E-Commerce Store
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="/"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
