"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const gameData = [
  {
    title: "Edgefall: Retribution",
    genre: "Sci-Fi Shooter",
    description:
      "A Story-Driven Sci-Fi Shooter With Branching Narratives, Next-Gen Visuals, And Brutal Decision-Making. Available On PC, PS5.",
    image: "/image/process.jpg",
    alt: "Edgefall",
  },
  {
    title: "Phantom Divide",
    genre: "Sci-Fi Shooter",
    description:
      "Tactical Stealth Meets Supernatural Warfare. Think Fast. Move Silent. Strike Hard.",
    image: "/image/process2.jpg",
    alt: "Phantom Divide",
  },
  {
    title: "Zero Signal",
    genre: "Sci-Fi Shooter",
    description:
      "Multiplayer Chaos Redefined. Squad Up, Drop In, Dominate The Zone.",
    image: "/image/process3.jpg",
    alt: "Zero Signal",
  },
  {
    title: "Edgefall: Retribution",
    genre: "Sci-Fi Shooter",
    description:
      "A Story-Driven Sci-Fi Shooter With Branching Narratives, Next-Gen Visuals, And Brutal Decision-Making. Available On PC, PS5.",
    image: "/image/process.jpg",
    alt: "Edgefall",
  },
  {
    title: "Phantom Divide",
    genre: "Sci-Fi Shooter",
    description:
      "Tactical Stealth Meets Supernatural Warfare. Think Fast. Move Silent. Strike Hard.",
    image: "/image/process2.jpg",
    alt: "Phantom Divide",
  },
  {
    title: "Zero Signal",
    genre: "Sci-Fi Shooter",
    description:
      "Multiplayer Chaos Redefined. Squad Up, Drop In, Dominate The Zone.",
    image: "/image/process3.jpg",
    alt: "Zero Signal",
  },
];

function FeaturedArea() {
  return (
    <section className="bg-gradient-to-br from-[#0E6693] to-[#080908] py-30">
      <div className="container mx-auto px-5 lg:px-6 text-center">
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Step into the worlds we've built. Whether you're here to solo the
          story, squad up for PvP, or explore uncharted realms, this is where it
          all begins.
        </p>

        {/* Swiper Slider with Autoplay */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 2000, // 2 seconds
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {gameData.map((game, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#0F5D86] hover:shadow-2xl transition"
              >
                <img
                  src={game.image}
                  alt={game.alt}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5 text-left">
                  <h5 className="text-gray-900 font-semibold text-lg mb-2">
                    {game.title}
                  </h5>
                  <p className="text-sm text-gray-700 font-medium mb-2">
                    {game.genre}
                  </p>
                  <p className="text-gray-600 text-sm">{game.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default FeaturedArea;
