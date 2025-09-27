import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative py-20 px-6 md:px-20 bg-gradient-to-b from-[#080908] via-[#030505] to-[#0E6693]">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center lg:px-6">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-300">
            Designed for Developers
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Get started quickly with beautiful prebuilt sections, responsive
            layouts, and the power of Material + Tailwind combined.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition">
            <Link href="/contact">Get Started</Link>
          </button>
        </div>
        <div className="relative w-full h-80 lg:h-[600px] xl:h-[800px]">
          <Image
            src="/image/Md. Ibrahim Hossain (2).png" // replace with your image
            alt="UI Showcase"
            fill
            className="object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
