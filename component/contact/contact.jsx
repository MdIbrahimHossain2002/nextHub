"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative w-full  bg-gradient-to-br from-[#4c839e] to-[#272c27] bg-opacity-20 text-white p-6 lg:p-12 py-30">
      <div className="relative container mx-auto lg:px-6 flex flex-col lg:flex-row items-center justify-between gap-10 z-10">
        {/* Left Info */}
        <div className="max-w-sm mb-6 lg:mb-0">
          <h2 className="text-4xl font-bold mb-3">Contact Us</h2>
          <p className="text-lg mb-4">
            We collaborate with thousands of creators, entrepreneurs and
            complete legends.
          </p>
          <hr className="border-[#0E6693] border-2 w-full my-4" />

          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/10 p-2 rounded-full flex items-center justify-center w-10 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#0E6693]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm">mibrahimh02@gmial.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-2 rounded-full flex items-center justify-center w-10 h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#0E6693]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24c1.12.37 2.33.57 3.54.57.55 0 1 .45 1 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.21.2 2.42.57 3.54.14.35.05.74-.24 1.05l-2.21 2.2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Phone Number</p>
              <p className="text-sm">01953517108</p>
            </div>
          </div>
        </div>

        {/* Form Design */}
        <form className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-[#0E6693] py-2"
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-[#0E6693] py-2"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-[#0E6693] py-2"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-[#0E6693] py-2"
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                name="message"
                placeholder="Message"
                rows="3"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-[#0E6693] py-2"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-6 py-2 bg-gradient-to-r from-[#1447E6] to-[#0F5378] hover:from-[#1447E6] hover:to-[#0E6693] text-black font-semibold rounded-lg shadow-md transition"
            >
              Submit
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}
