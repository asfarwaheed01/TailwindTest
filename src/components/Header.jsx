import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto">
        {/* White rounded navigation container */}
        <div className="bg-white rounded-full shadow-lg px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-800">
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

          {/* Contact Button */}
          <button className="bg-amber-600 text-white px-6 py-2.5 rounded-full hover:bg-amber-700 transition-colors text-sm font-medium">
            Contact us
          </button>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
