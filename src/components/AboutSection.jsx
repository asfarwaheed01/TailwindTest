import React from "react";

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Stats Card (30% width) */}
          <div className="lg:w-[30%] bg-[#AB9075] rounded-3xl p-12 lg:p-6 relative overflow-hidden">
            {/* Decorative circular element */}
            <div className="absolute top-8 right-8">
              <div className="w-20 h-20 rounded-full bg-white/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/40 flex items-center justify-center">
                  {/* Abstract lines pattern */}
                  <div className="space-y-1">
                    <div className="w-8 h-0.5 bg-white/80 rounded-full transform rotate-12"></div>
                    <div className="w-6 h-0.5 bg-white/80 rounded-full transform rotate-12 ml-1"></div>
                    <div className="w-8 h-0.5 bg-white/80 rounded-full transform rotate-12"></div>
                    <div className="w-7 h-0.5 bg-white/80 rounded-full transform rotate-12 ml-0.5"></div>
                    <div className="w-8 h-0.5 bg-white/80 rounded-full transform rotate-12"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info Header */}
            <div className="flex flex-col justify-between h-full">
              <div className="mb-12">
                <div className="text-white/80 text-[15px] font-semibold tracking-wider uppercase mb-1">
                  OUR COMPANY
                </div>
                <div className="text-white/80 text-[15px] font-semibold tracking-wider uppercase">
                  IN NUMBERS
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8">
                {/* First Stat */}
                <div>
                  <div className="text-white text-xl lg:text-4xl font-bold mb-2">
                    150+
                  </div>
                  <div className="text-white/90 text-sm font-medium leading-tight">
                    Furniture Suppliers
                  </div>
                </div>

                {/* Second Stat */}
                <div>
                  <div className="text-white text-xl lg:text-4xl font-bold mb-2">
                    15+
                  </div>
                  <div className="text-white/90 text-sm font-medium leading-tight">
                    Years of Industry
                    <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content and Image (70% width) */}
          <div className="lg:w-[70%] bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row">
            {/* Text Content - Left side of right section */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              {/* Title */}
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-gray-800">
                Who <span className="text-amber-600 font-light">We Are</span>
              </h2>

              {/* Content */}
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-sm lg:text-base">
                  At Compatto, we understand the challenges of creating
                  exceptional spaces that blend elegance, quality, and
                  functionality.
                </p>
                <p className="text-sm lg:text-base">
                  As Greece's premier furniture solutions provider, we've made
                  it our mission to simplify the furnishing process, ensuring
                  that every project is executed flawlessly from initial
                  consultation to final installation.
                </p>
              </div>
            </div>

            {/* Image - Right side of right section with curved left border */}
            <div className="lg:w-1/2 relative">
              <div className="h-full min-h-[300px] lg:min-h-[400px] relative overflow-hidden">
                {/* Curved left border effect */}
                <div className="absolute inset-0 bg-white rounded-l-[3rem] lg:rounded-l-[4rem]"></div>
                <div className="absolute inset-0 ml-8 lg:ml-12">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Person working on architectural plans"
                    className="w-full h-full object-cover rounded-l-[2rem] lg:rounded-l-[3rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
