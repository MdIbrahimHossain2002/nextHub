"use client";

import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative bg-[url('/image/about.jpg')] bg-cover bg-center pt-[225px] pb-[120px] md:pt-[300px] md:pb-[200px]">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-[40px] md:text-[60px] lg:text-[70px] font-bold uppercase leading-[0.9] mb-4 text-white">
            About Us
          </h2>

          {/* Breadcrumb Nav */}
          <nav aria-label="breadcrumb">
            <ol className="flex flex-wrap justify-center gap-2 text-sm md:text-base font-semibold uppercase">
              <li className="flex items-center">
                <Link href="/" className="text-white hover:text-[#0E6693]">
                  Home
                </Link>
              </li>
              <li className="flex items-center before:content-['›'] before:px-2 before:text-white text-white hover:text-[#0E6693]">
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
