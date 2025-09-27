import React from "react";

const VisionMission = () => {
  return (
    <section className="relative py-6 lg:py-20 bg-cover bg-center">
      <div className="container mx-auto text-center px-5 lg:px-6">
        <h4 className="text-[#0F5D86] text-2xl sm:text-3xl font-semibold mb-8">
          Vision & Mission
        </h4>

        <p className="text-black text-base sm:text-lg mb-12 max-w-3xl mx-auto">
          Crafting unforgettable experiences. Building a studio players can
          trust.
        </p>

        {/* Mission & Vision Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
          {/* Mission Card */}
          <div className="mission-card bg-dark text-black border border-[#0E6693] rounded-lg shadow-md p-6 flex-1 sm:max-w-xl">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-[#0E6693]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-6C5.925 2 2 5.925 2 12s3.925 10 10 10 10-3.925 10-10S18.075 2 12 2z"
                />
              </svg>
            </div>
            <h6 className="text-[#0E6693] text-center font-semibold mb-2">
              Our Mission
            </h6>
            <p className="text-center text-sm sm:text-base leading-relaxed">
              To build worlds worth escaping to. To tell stories worth
              remembering. And to do it with a studio culture that’s inclusive,
              experimental, and player-first.
            </p>
          </div>

          {/* Vision Card */}
          <div className="mission-card bg-dark text-black border border-[#0E6693] rounded-lg shadow-md p-6 flex-1 sm:max-w-xl">
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-[#0E6693]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5C7.305 4.5 3.275 7.388 2 12c1.275 4.612 5.305 7.5 10 7.5s8.725-2.888 10-7.5c-1.275-4.612-5.305-7.5-10-7.5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
            </div>
            <h6 className="text-[#0E6693] text-center font-semibold mb-2">
              Our Vision
            </h6>
            <p className="text-center text-sm sm:text-base leading-relaxed">
              To shape the next generation of game experiences deeply immersive,
              emotionally intelligent, and globally impactful.
            </p>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-black text-sm sm:text-base max-w-4xl mx-auto mt-12">
          We believe in games that make you feel something. Games that respect
          your time, your wallet, and your imagination. Every title we make is
          designed to earn your investment emotionally and experientially.
        </p>
      </div>
    </section>
  );
};

export default VisionMission;
