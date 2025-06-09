import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden rounded-3xl mx-4 mt-4">
      {/* Background Image */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Modern living room with warm lighting"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 pt-20 lg:pt-0">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Bringing Simplicity
                <br />
                <span className="block">In The Furnishing Market</span>
              </h1>
            </div>

            {/* Right Content */}
            <div className="text-white space-y-8 lg:ml-auto lg:max-w-md">
              <p className="text-lg md:text-xl leading-relaxed font-light">
                Compatto simplifies the complex process of furnishing
                all-inclusive, boutique & high-end hotels, and luxury residences
                in Greece & Cyprus.
              </p>
              <button className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg text-base">
                Start Your Furnishing Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements to match the warm ambiance */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
