"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 py-2">
      <nav className="container mx-auto px-5 flex justify-between items-center relative">
        <div className="flex items-center gap-3">
          <a href="/" className="w-40 h-30">
            <Image
              src="/assets/images/fitness-saga.jpg"
              width={120}
              height={50}
              alt="Fitness Saga Logo"
              unoptimized
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-base">
          <li>
            <a href="/#features" className="hover:text-[#0052cc]">
              Features
            </a>
          </li>
          <li>
            <a href="/#download" className="hover:text-[#0052cc]">
              Download
            </a>
          </li>
          <li>
            <a
              href="mailto:support@fitnessaga.com"
              className="hover:text-[#0052cc]"
            >
              Support
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7 text-[#0052cc]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-100 md:hidden">
            <ul className="flex flex-col gap-4 p-5 font-medium text-base">
              <li>
                <a href="#features" className="hover:text-[#0052cc]">
                  Features
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-[#0052cc]">
                  Download
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-[#0052cc]">
                  Support
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
