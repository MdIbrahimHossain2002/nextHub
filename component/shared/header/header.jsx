// components/Header.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger menu icons

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
        ${
          scrolled
            ? "bg-[#0E6693] shadow-lg"
            : "bg-gradient-to-b from-[#080908] via-[#030505] to-transparent"
        }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-extrabold cursor-pointer text-white tracking-wide">
            NextHub
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li className="hover:text-[#1447E6] transition">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#1447E6] transition">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-[#1447E6] transition">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Sign In Button (desktop) */}
        <Link
          href="/signin"
          className={`hidden md:inline-block ml-6 px-5 py-2 rounded-xl text-white font-semibold shadow-lg transition-all duration-300
    ${
      scrolled
        ? "bg-blue-600 hover:bg-blue-700"
        : "bg-gradient-to-r from-[#1447E6] to-[#0F5378] hover:from-[#1447E6] hover:to-[#0E6693]"
    }`}
        >
          Sign In
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0E6693] text-white w-full absolute left-0 top-full shadow-lg">
          <ul className="flex flex-col gap-4 p-6 text-center">
            <li className="hover:text-[#1447E6] transition" onClick={() => setMenuOpen(false)}>
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#1447E6] transition" onClick={() => setMenuOpen(false)}>
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-[#1447E6] transition" onClick={() => setMenuOpen(false)}>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link
                href="/signin"
                className="block w-full px-6 py-2 rounded-xl text-white font-semibold shadow-lg bg-gradient-to-r from-[#1447E6] to-[#0F5378] hover:from-[#1447E6] hover:to-[#0E6693]"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
