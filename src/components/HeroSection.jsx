import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden rounded-3xl mx-4 mt-4 lg:mt-14">
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Modern living room with warm lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
      </div>

      <div className="relative z-10 h-full min-h-screen flex items-end">
        <div className="w-full px-6 sm:px-8 lg:px-12 pb-12 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 lg:gap-16">
              {/* Left Content */}
              <div className="text-white space-y-6 lg:max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Bringing Simplicity
                  <br />
                  In The Furnishing Market
                </h1>
              </div>

              {/* Right Content */}
              <div className="text-white space-y-6 lg:max-w-md flex-shrink-0">
                <p className="text-base sm:text-lg leading-relaxed font-light">
                  Compatto simplifies the complex process of furnishing
                  all-inclusive, boutique & high-end hotels, and luxury
                  residences in Greece & Cyprus.
                </p>
                <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg text-sm sm:text-base">
                  Start Your Furnishing Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
