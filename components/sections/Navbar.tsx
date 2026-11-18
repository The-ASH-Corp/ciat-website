"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu as MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#D2EBE5] border-b border-[#D2EBE5] transition-all">
      <div className="max-w-[1240px] mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/images/ciat-logo.png"
            alt="CIAT - Institute of Accounts & Management"
            width={220}
            height={108}
            className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-all"
            priority
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#08344E]">
          <a
            href="/"
            className="font-semibold text-[#08344E] hover:text-[#00AEEF] transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-[#08344E]/85 hover:text-[#00AEEF] transition-colors"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-[#08344E]/85 hover:text-[#00AEEF] transition-colors"
          >
            Contact
          </a>
          <a
            href="/placements"
            className="text-[#08344E]/85 hover:text-[#00AEEF] transition-colors"
          >
            Placements
          </a>

          <a
            href="/courses"
            className="text-[#08344E]/85 hover:text-[#00AEEF] transition-colors"
          >
            Courses
          </a>
        </nav>

        {/* Header Action Button: Themed Cyan/Green Pill Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/contact"
            className="bg-[#00AEEF] hover:bg-[#00A556] text-white font-semibold text-[15px] px-7 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#08344E] hover:bg-[#D2EBE5]/80 rounded-xl"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#D2EBE5] border-b border-[#08344E]/10 px-6 py-5 flex flex-col gap-4 text-base font-medium text-[#08344E] shadow-xl">
          <a
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#00AEEF]"
          >
            Home
          </a>
          <a
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#00AEEF]"
          >
            About
          </a>
          <a
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#00AEEF]"
          >
            Contact
          </a>
          <a
            href="/placements"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#00AEEF]"
          >
            Placements
          </a>

          <a
            href="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#00AEEF]"
          >
            Courses
          </a>
          <a
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block text-center bg-[#00AEEF] hover:bg-[#00A556] text-white font-semibold py-3 rounded-full mt-2 shadow-sm transition-colors"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
