"use client";
import React from "react";
import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <div className="py-30 bg-gradient-to-br from-[#0E6693] to-[#080908]">
      <div className="container mx-auto px-5 lg:px-6">
        {/* Heading */}
        <h4 className="font-semibold text-2xl md:text-3xl text-[#e0e9ee] pb-8 text-center">
          Cinematic Trailers & Worldbuilding
        </h4>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8 pb-4">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-white"
          >
            <h4 className="font-semibold text-xl md:text-2xl mb-4">
              Showcase Our Worlds with Cinematic Brilliance
            </h4>
            <p className="text-sm md:text-base leading-relaxed">
              We bring our original games to life with cinematic trailers that
              capture the essence of the worlds we’ve created. Our in-house team
              designs stunning visuals and narratives that highlight our IPs’
              atmospheres, characters, and stakes, paired with worldbuilding
              that makes every detail feel real and immersive.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src="/image/process.jpg"
              alt="Immersive Experience"
              className="rounded-2xl w-full max-w-[617px] h-auto max-h-[1800px] transition-all duration-300"
            />
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 pb-4">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" md:w-1/2 flex justify-center"
          >
            <img
              src="/image/process2.jpg"
              alt="Immersive Experience"
              className="rounded-2xl w-full max-w-[617px] h-auto max-h-[1800px] transition-all duration-300"
            />
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-white"
          >
            <h4 className="font-semibold text-xl md:text-2xl mb-4">
              Showcase Our Worlds with Cinematic Brilliance
            </h4>
            <p className="text-sm md:text-base leading-relaxed">
              We bring our original games to life with cinematic trailers that
              capture the essence of the worlds we’ve created. Our in-house team
              designs stunning visuals and narratives that highlight our IPs’
              atmospheres, characters, and stakes, paired with worldbuilding
              that makes every detail feel real and immersive.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-8 pb-4 ">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-white"
          >
            <h4 className="font-semibold text-xl md:text-2xl mb-4">
              Showcase Our Worlds with Cinematic Brilliance
            </h4>
            <p className="text-sm md:text-base leading-relaxed">
              We bring our original games to life with cinematic trailers that
              capture the essence of the worlds we’ve created. Our in-house team
              designs stunning visuals and narratives that highlight our IPs’
              atmospheres, characters, and stakes, paired with worldbuilding
              that makes every detail feel real and immersive.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <img
              src="/image/process3.jpg"
              alt="Immersive Experience"
              className="rounded-2xl w-full max-w-[617px] h-auto max-h-[1800px] transition-all duration-300"
            />
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 pb-4">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" md:w-1/2 flex justify-center"
          >
            <img
              src="/image/process4.jpg"
              alt="Immersive Experience"
              className="rounded-2xl w-full max-w-[617px] h-auto max-h-[1800px] transition-all duration-300"
            />
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-white"
          >
            <h4 className="font-semibold text-xl md:text-2xl mb-4">
              Showcase Our Worlds with Cinematic Brilliance
            </h4>
            <p className="text-sm md:text-base leading-relaxed">
              We bring our original games to life with cinematic trailers that
              capture the essence of the worlds we’ve created. Our in-house team
              designs stunning visuals and narratives that highlight our IPs’
              atmospheres, characters, and stakes, paired with worldbuilding
              that makes every detail feel real and immersive.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
