"use client";
import React from "react";

export default function Timeline() {
  return (
    <section className="bg-white py-6 lg:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0E6693] mb-16">
        Our Journey
      </h2>
      <div className="hidden md:block relative container mx-auto px-5 lg:px-6">
        {/* Section Heading */}

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

        <div className="space-y-24">
          {/* Item 1 - odd → year right, content left */}
          <div className="relative flex flex-col sm:flex-row items-center sm:justify-end sm:text-right">
            {/* Year */}
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pl-12 sm:text-right">
              <h3 className="text-2xl font-bold text-[#0E6693] pr-4">1979</h3>
            </div>
            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0E6693] rounded-full border-4 border-white"></div>
            {/* Content */}
            <div className="w-full sm:w-1/2 sm:pr-12 sm:text-left pl-4">
              <h4 className="text-xl font-bold text-[#0E6693]">Chapter One</h4>
              <p className="mt-2 text-gray-600 text-base">
                Paramount Services was founded in 1979 as a family cleaning
                business. Today, it supports over 220 franchisees and offers a
                diverse range of facility services nationwide.
              </p>
            </div>
          </div>

          {/* Item 2 - even → year left, content right */}
          <div className="relative flex flex-col sm:flex-row items-center sm:justify-start sm:text-left">
            {/* Year */}
            <div className="w-full sm:w-1/2 sm:pl-12 sm:text-right pr-4">
              <h4 className="text-xl font-bold text-[#0E6693]">Chapter Two</h4>
              <p className="mt-2 text-gray-600 text-base">
                The first Paramount Services franchise is established in 1996.
                The franchise turnover rapidly grew from $50k per annum to $230k
                per annum.
              </p>
            </div>
            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0E6693] rounded-full border-4 border-white"></div>
            {/* Content */}

            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pr-12 sm:text-left pl-4">
              <h3 className="text-2xl font-bold text-[#0E6693]">1996</h3>
            </div>
          </div>

          {/* Item 3 - odd → year right, content left */}
          <div className="relative flex flex-col sm:flex-row items-center sm:justify-end sm:text-right">
            {/* Year */}
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pl-12 sm:text-right pr-4">
              <h3 className="text-2xl font-bold text-[#0E6693]">2008 - 2018</h3>
            </div>
            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0E6693] rounded-full border-4 border-white"></div>
            {/* Content */}
            <div className="w-full sm:w-1/2 sm:pr-12 sm:text-left pl-4">
              <h4 className="text-xl font-bold text-[#0E6693]">
                Chapter Three
              </h4>
              <p className="mt-2 text-gray-600 text-base">
                Paramount Services is awarded the Westpac Supreme Franchise
                System three times, in 2008, 2015 and 2018, which recognises
                excellence in a franchise system.
              </p>
            </div>
          </div>

          {/* Item 4 - even → year left, content right */}
          <div className="relative flex flex-col sm:flex-row items-center sm:justify-start sm:text-left">
            {/* Year */}
            <div className="w-full sm:w-1/2 sm:pl-12 sm:text-right pr-4">
              <h4 className="text-xl font-bold text-[#0E6693]">Chapter Four</h4>
              <p className="mt-2 text-gray-600 text-base">
                Paramount Services is awarded the Franchise System of the Year
                2023, recognising outstanding achievements in the industry.
              </p>
            </div>
            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0E6693] rounded-full border-4 border-white"></div>
            {/* Content */}

            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pr-12 sm:text-left pl-4">
              <h3 className="text-2xl font-bold text-[#0E6693]">2023</h3>
            </div>
          </div>
        </div>
      </div>



      <div className="block md:hidden relative container mx-auto px-5 lg:px-6">
        {/* Section Heading */}

        {/* Vertical Line */}

        <div className="space-y-24">
          {/* Item 1 - odd → year right, content left */}
          <div className="relative flex flex-col sm:flex-row items-center sm:justify-end sm:text-right">
            {/* Year */}
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pl-12 sm:text-right">
              <h3 className="text-2xl font-bold text-[#0E6693] ">1979</h3>
            </div>
            {/* Dot */}
            {/* Content */}
            <div className="w-full sm:w-1/2 sm:pr-12 sm:text-left ">
              <h4 className="text-xl font-bold text-[#0E6693]">Chapter One</h4>
              <p className="mt-2 text-gray-600 text-base">
                Paramount Services was founded in 1979 as a family cleaning
                business. Today, it supports over 220 franchisees and offers a
                diverse range of facility services nationwide.
              </p>
            </div>
          </div>

          {/* Item 2 - even → year left, content right */}
          <div className="relative flex flex-col sm:flex-row items-center sm:justify-start sm:text-left">
            {/* Year */}
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pr-12 sm:text-left ">
              <h3 className="text-2xl font-bold text-[#0E6693]">1996</h3>
            </div>
            <div className="w-full sm:w-1/2 sm:pl-12 sm:text-right ">
              <h4 className="text-xl font-bold text-[#0E6693]">Chapter Two</h4>
              <p className="mt-2 text-gray-600 text-base">
                The first Paramount Services franchise is established in 1996.
                The franchise turnover rapidly grew from $50k per annum to $230k
                per annum.
              </p>
            </div>
            {/* Dot */}
            {/* Content */}


          </div>

          {/* Item 3 - odd → year right, content left */}
          <div className="relative flex flex-col sm:flex-row items-center sm:justify-end sm:text-right">
            {/* Year */}
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pl-12 sm:text-right ">
              <h3 className="text-2xl font-bold text-[#0E6693]">2008 - 2018</h3>
            </div>
            {/* Dot */}
            {/* Content */}
            <div className="w-full sm:w-1/2 sm:pr-12 sm:text-left ">
              <h4 className="text-xl font-bold text-[#0E6693]">
                Chapter Three
              </h4>
              <p className="mt-2 text-gray-600 text-base">
                Paramount Services is awarded the Westpac Supreme Franchise
                System three times, in 2008, 2015 and 2018, which recognises
                excellence in a franchise system.
              </p>
            </div>
          </div>

          {/* Item 4 - even → year left, content right */}
          <div className="relative flex flex-col sm:flex-row items-center sm:justify-start sm:text-left">
            {/* Year */}
            <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:pr-12 sm:text-left ">
              <h3 className="text-2xl font-bold text-[#0E6693]">2023</h3>
            </div>
            <div className="w-full sm:w-1/2 sm:pl-12 sm:text-right ">
              <h4 className="text-xl font-bold text-[#0E6693]">Chapter Four</h4>
              <p className="mt-2 text-gray-600 text-base">
                Paramount Services is awarded the Franchise System of the Year
                2023, recognising outstanding achievements in the industry.
              </p>
            </div>
            {/* Dot */}
            {/* Content */}


          </div>
        </div>
      </div>
    </section>
  );
}
