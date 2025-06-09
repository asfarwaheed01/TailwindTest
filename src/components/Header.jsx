import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 sm:py-6">
      <div className="max-w-7xl mx-auto">
        {/* White rounded navigation container */}
        <div className="bg-white rounded-full shadow-lg px-4 sm:px-8 py-3 sm:py-4 flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl sm:text-2xl font-bold text-gray-800">
              c<span className="text-amber-600">●</span>mpatto
            </div>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Who we are
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              The challenges
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Our process
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
            >
              Why choose us
            </a>
          </nav>

          {/* Contact Button - Desktop only */}
          <button className="hidden lg:block bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-700 transition-colors text-sm font-medium">
            Contact us
          </button>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${
                isMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden mt-2 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-lg py-4 px-6">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Who we are
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                The challenges
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Our process
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors text-base font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why choose us
              </a>
              {/* Contact Button in Mobile Menu */}
              <button
                className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors text-base font-medium mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
