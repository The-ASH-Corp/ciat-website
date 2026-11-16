"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Play,
  CheckCircle,
  Phone,
  MapPin,
  ArrowRight,
  TrendingUp,
  Briefcase,
  PieChart,
  Target,
  Headphones,
  CreditCard,
  Shield,
  MessageSquare,
  Video,
  X,
  Menu as MenuIcon,
  ChevronDown,
} from "lucide-react";

// Signature hand-drawn underline SVG with theme colors (#00AEEF and #00A556)
function UnderlineHighlight({
  children,
  color = "#00AEEF",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute -bottom-1 left-0 w-full h-3.5 z-0 pointer-events-none"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
      >
        <path
          d="M3,77.5s200.54-11,493,0"
          transform="translate(-2.75 -68.11)"
          stroke={color}
          strokeWidth="36"
          strokeLinecap="round"
          strokeOpacity="0.85"
          fill="none"
        />
      </svg>
    </span>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
    </svg>
  );
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppointmentSubmitted(true);
    setTimeout(() => setAppointmentSubmitted(false), 5000);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNewsletterSubmitted(true);
      setEmailInput("");
      setTimeout(() => setNewsletterSubmitted(false), 5000);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#4F4F4F] font-sans selection:bg-[#00AEEF] selection:text-white">
      {/* ----------------- 1. HEADER & NAVBAR ----------------- */}
      <header className="sticky top-0 z-50 bg-[#D2EBE5] border-b border-[#D2EBE5] transition-all">
        <div className="max-w-[1240px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/images/inviz-logo.png"
              alt="Inviz Logo"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#08344E]">
            <a
              href="#"
              className="font-semibold text-[#08344E] hover:text-[#00AEEF] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#08344E]/85 hover:text-[#00AEEF] transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-[#08344E]/85 hover:text-[#00AEEF] transition-colors"
            >
              Services
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-[#08344E]/85 hover:text-[#00AEEF] transition-colors py-2">
                Pages
                <ChevronDown className="w-3.5 h-3.5 text-[#08344E]/60 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-2xl py-3 px-2 min-w-[180px] border border-gray-100">
                <a
                  href="#pricing"
                  className="block px-4 py-2 text-sm text-[#08344E] hover:bg-[#E0F5FC] rounded-xl transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#blog"
                  className="block px-4 py-2 text-sm text-[#08344E] hover:bg-[#E0F5FC] rounded-xl transition-colors"
                >
                  Blog
                </a>
                <a
                  href="#faq"
                  className="block px-4 py-2 text-sm text-[#08344E] hover:bg-[#E0F5FC] rounded-xl transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>
            <a
              href="#contact"
              className="text-[#08344E]/85 hover:text-[#00AEEF] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Header Action Button: Themed Cyan/Green Pill Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
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
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#00AEEF]"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#00AEEF]"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#00AEEF]"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#00AEEF]"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-block text-center bg-[#00AEEF] hover:bg-[#00A556] text-white font-semibold py-3 rounded-full mt-2 shadow-sm transition-colors"
            >
              Contact Us
            </a>
          </div>
        )}
      </header>

      {/* ----------------- 2. HERO SECTION ----------------- */}
      <section className="relative overflow-hidden bg-[#D2EBE5] pt-4 pb-20 lg:pt-8 lg:pb-32">
        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 pt-2 lg:pt-6 pr-0 lg:pr-6">
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-[#08344E] leading-[1.15] tracking-tight">
                Invest Smart For <br />
                Grow Your <UnderlineHighlight color="#00AEEF">Wealth</UnderlineHighlight>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#08344E]/85 leading-relaxed max-w-xl font-normal">
                Maximize your business and investment profits with expert guidance
                and innovative solutions.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-5 sm:gap-7">
                <a
                  href="#contact"
                  className="bg-[#08344E] hover:bg-[#00AEEF] text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                >
                  Let&apos;s Get Started
                </a>

                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="flex items-center gap-3 text-[#08344E] font-semibold text-base group cursor-pointer"
                >
                  <span className="w-12 h-12 rounded-full bg-[#00AEEF] group-hover:bg-[#00A556] group-hover:scale-110 flex items-center justify-center text-white shadow-sm transition-all duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </span>
                  <span className="underline underline-offset-4 decoration-2 decoration-[#08344E]/40 group-hover:decoration-[#00AEEF] group-hover:text-[#00AEEF] transition-colors">
                    Watch Video
                  </span>
                </button>
              </div>
            </div>

            {/* Right Businessman Image Column with Floating Badges */}
            <div className="lg:col-span-5 relative flex justify-center items-end mt-6 lg:mt-0">
              <div className="relative w-full max-w-[460px]">
                {/* Subtle soft bright glow behind head */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/70 rounded-full blur-2xl pointer-events-none" />

                {/* Hero Businessman Photo */}
                <Image
                  src="/images/business-man-hero-855x1024.png"
                  alt="Businessman Smiling - Financial Advisor"
                  width={855}
                  height={1024}
                  className="w-full h-auto object-contain relative z-10"
                  priority
                />

                {/* Floating Badge: Top-Right (Circular badge with green graph + curved arrow) */}
                <div className="absolute top-8 right-2 sm:right-6 z-20 flex flex-col items-center">
                  <div className="w-14 h-14 bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-white flex items-center justify-center text-[#00A556]">
                    <TrendingUp className="w-7 h-7" />
                  </div>
                  {/* Hand drawn curve arrow */}
                  <svg
                    className="w-6 h-8 text-[#08344E]/70 -mt-1 ml-4"
                    viewBox="0 0 24 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M12 28 C8 20, 16 12, 10 4 M6 8 L10 4 L14 8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Floating Badge: Mid-Left (Square document/finance icon) */}
                <div className="absolute top-1/3 -left-2 sm:-left-4 z-20 w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border border-white flex items-center justify-center text-[#00AEEF]">
                  <CreditCard className="w-6 h-6" />
                </div>

                {/* Floating Pill Badge: Bottom Left (100% Trusted to Investment) */}
                <div className="absolute bottom-6 left-2 sm:-left-4 z-20 bg-white/95 backdrop-blur-md rounded-full shadow-2xl py-3 px-5 flex items-center gap-3.5 border border-white">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#00AEEF] to-[#00A556] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[13px] font-bold text-[#08344E]">
                      100% trusted to
                    </div>
                    <div className="text-[12px] text-[#797979] capitalize">
                      investment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* White Wave Curve Shape Divider along bottom */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/shape-divider-home-edit.png"
            alt=""
            className="w-full h-auto min-h-[50px] object-cover object-bottom"
          />
        </div>
      </section>

      {/* ----------------- CLIENT LOGOS BAR ----------------- */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity">
            <Image
              src="/images/logo-client-1.png"
              alt="Client Logo 1"
              width={200}
              height={40}
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/images/logo-client-2.png"
              alt="Client Logo 2"
              width={200}
              height={40}
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/images/logo-client-3.png"
              alt="Client Logo 3"
              width={200}
              height={40}
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
            <Image
              src="/images/logo-client-4.png"
              alt="Client Logo 4"
              width={200}
              height={40}
              className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* ----------------- 3. STARTING & GROWING YOUR BUSINESS ----------------- */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          {/* Top 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
                Starting and growing <br />
                your own <UnderlineHighlight color="#00A556">business.</UnderlineHighlight>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-2">
              <p className="text-base sm:text-lg text-[#797979] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur tempoesed uted adipiscing
                elit, sed do eiusmod tempor incididunt labore et dolore magna
                aliqua ut commodo conse. Strategic consulting designed to build
                durable value.
              </p>
            </div>
          </div>

          {/* 3 Value Pillars: Card 1 & 2 Flat, Card 3 Elevated White Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {/* Feature 1: Efficient Investment (Flat) */}
            <div className="p-4 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="w-20 h-20 rounded-full bg-[#E0F5FC] border-[5px] border-[#C7F0FD] text-[#00AEEF] flex items-center justify-center mb-6 shadow-sm">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#08344E] mb-4">
                  Efficient Investment
                </h3>
                <p className="text-[#797979] text-[15px] leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet, commodo conse consecteturet deus
                  adipiscing elit, sed do eiusmod tempor ut.
                </p>
              </div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xl font-bold text-[#00AEEF] hover:text-[#00A556] transition-colors"
                aria-label="Efficient Investment link"
              >
                &rarr;
              </a>
            </div>

            {/* Feature 2: Professional Support (Flat) */}
            <div className="p-4 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="w-20 h-20 rounded-full bg-[#E3F8EE] border-[5px] border-[#C3F3DC] text-[#00A556] flex items-center justify-center mb-6 shadow-sm">
                  <Headphones className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#08344E] mb-4">
                  Professional Support
                </h3>
                <p className="text-[#797979] text-[15px] leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet, commodo conse consecteturet deus
                  adipiscing elit, sed do eiusmod tempor ut.
                </p>
              </div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-xl font-bold text-[#00A556] hover:text-[#00AEEF] transition-colors"
                aria-label="Professional Support link"
              >
                &rarr;
              </a>
            </div>

            {/* Feature 3: Transparent Pricing (ELEVATED WHITE CARD) */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,174,239,0.1)] border border-[#C7F0FD] -translate-y-4 md:-translate-y-8 flex flex-col justify-between">
              <div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#E0F5FC] to-[#E3F8EE] border-[5px] border-[#C7F0FD] text-[#00AEEF] flex items-center justify-center mb-6 shadow-sm">
                  <CreditCard className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#08344E] mb-4">
                  Transparent Pricing
                </h3>
                <p className="text-[#797979] text-[15px] leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet, commodo conse consecteturet deus
                  adipiscing elit, sed do eiusmod tempor ut.
                </p>
              </div>
              <a
                href="#pricing"
                className="w-12 h-12 rounded-full bg-[#E0F5FC] hover:bg-gradient-to-r hover:from-[#00AEEF] hover:to-[#00A556] text-[#00AEEF] hover:text-white flex items-center justify-center text-xl font-bold transition-all shadow-sm"
                aria-label="Transparent Pricing link"
              >
                &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 4. MEET THE EXECUTIVES DRIVING OUR SUCCESS ----------------- */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Visual Composite with Woman Pointing Up & Floating Analytics Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[36px] rounded-tr-[110px] bg-gradient-to-br from-[#E0F5FC] to-[#E3F8EE] h-[460px] sm:h-[500px] overflow-hidden flex items-end justify-center border border-[#BCEBF9]">
                {/* Floating Analytics Graph Card (Top-Right above finger) */}
                <div className="absolute top-6 right-4 sm:right-6 z-20 w-44 sm:w-52 rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white">
                  <Image
                    src="/images/graphic-2.jpg"
                    alt="Analytics Chart"
                    width={786}
                    height={437}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating Team Avatars Strip (Mid-Left) */}
                <div className="absolute top-28 left-4 z-20 rounded-full overflow-hidden shadow-xl border-2 border-white bg-white">
                  <Image
                    src="/images/team-edited.jpg"
                    alt="Team Avatar Heads"
                    width={320}
                    height={110}
                    className="h-9 sm:h-11 w-auto object-cover"
                  />
                </div>

                {/* Woman in striped shirt & grey blazer pointing up */}
                <Image
                  src="/images/business-finance-and-employment-female-successfu-2022-12-16-05-43-40-utc-1.png"
                  alt="Executive Leader Pointing Up"
                  width={900}
                  height={901}
                  className="w-full max-w-[420px] h-auto object-contain relative z-10 -mb-2"
                />
              </div>
            </div>

            {/* Right Column: Text & Checklist */}
            <div className="lg:col-span-6 lg:pl-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
                Meet the executives driving <br />
                our <UnderlineHighlight color="#00AEEF">success.</UnderlineHighlight>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#797979] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-base font-semibold text-[#08344E]">
                  <CheckCircle className="w-5 h-5 text-[#00A556] shrink-0" />
                  <span>Outstanding communication.</span>
                </div>
                <div className="flex items-center gap-3 text-base font-semibold text-[#08344E]">
                  <CheckCircle className="w-5 h-5 text-[#00A556] shrink-0" />
                  <span>Superior management expertise.</span>
                </div>
                <div className="flex items-center gap-3 text-base font-semibold text-[#08344E]">
                  <CheckCircle className="w-5 h-5 text-[#00A556] shrink-0" />
                  <span>Email and live chat support.</span>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-block bg-[#00AEEF] hover:bg-[#00A556] text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 5. STATISTICS COUNTERS BAR (1,465+ | 512+ | 25+) ----------------- */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* Stat 1: Cyan accent */}
            <div className="p-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#08344E] mb-2 flex items-center justify-center gap-1.5">
                <span>1,465</span>
                <span className="text-[#00AEEF] text-4xl">+</span>
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#797979]">
                Happy Customers
              </div>
            </div>

            {/* Stat 2: Emerald Green accent */}
            <div className="p-4 border-t md:border-t-0 md:border-x border-gray-100">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#08344E] mb-2 flex items-center justify-center gap-1.5">
                <span>512</span>
                <span className="text-[#00A556] text-4xl">+</span>
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#797979]">
                Project Complete
              </div>
            </div>

            {/* Stat 3: Cyan accent */}
            <div className="p-4">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#08344E] mb-2 flex items-center justify-center gap-1.5">
                <span>25</span>
                <span className="text-[#00AEEF] text-4xl">+</span>
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#797979]">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 6. EMPOWER YOUR BUSINESS WITH OUR SERVICES (STAGGERED 2X2) ----------------- */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        {/* Decorative service-bg image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 pointer-events-none -z-0">
          <Image
            src="/images/service-bg.png"
            alt="Service Background Motif"
            width={1299}
            height={1301}
            className="w-full h-full object-contain object-right"
          />
        </div>

        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
                Empower your business <br />
                with our <UnderlineHighlight color="#00A556">services.</UnderlineHighlight>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#797979] leading-relaxed max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore. Customized investment
                portfolios and wealth management solutions.
              </p>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-block bg-[#00A556] hover:bg-[#00AEEF] text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                >
                  More Service
                </a>
              </div>
            </div>

            {/* Right Column: 4 Service Cards Grid (Staggered Column 2) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              {/* Column 1: Wealth Management & Asset Management */}
              <div className="space-y-6">
                {/* Service Card 1: Wealth Management (Cyan Accent) */}
                <div className="bg-white rounded-2xl p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#00AEEF]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[220px]">
                  <div>
                    <div className="text-[#00AEEF] mb-4">
                      <Briefcase className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#08344E]">
                      Wealth Management
                    </h3>
                  </div>
                  <div className="pt-4 flex justify-start">
                    <a
                      href="#contact"
                      className="text-2xl text-[#797979] hover:text-[#00AEEF] transition-colors"
                      aria-label="Wealth Management"
                    >
                      &rarr;
                    </a>
                  </div>
                </div>

                {/* Service Card 2: Asset Management (Emerald Green Accent) */}
                <div className="bg-white rounded-2xl p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#00A556]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[220px]">
                  <div>
                    <div className="text-[#00A556] mb-4">
                      <PieChart className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#08344E]">
                      Asset Management
                    </h3>
                  </div>
                  <div className="pt-4 flex justify-start">
                    <a
                      href="#contact"
                      className="text-2xl text-[#797979] hover:text-[#00A556] transition-colors"
                      aria-label="Asset Management"
                    >
                      &rarr;
                    </a>
                  </div>
                </div>
              </div>

              {/* Column 2: Investment Advisory & Investment Options (STAGGERED DOWN) */}
              <div className="space-y-6 sm:mt-10 lg:mt-12">
                {/* Service Card 3: Investment Advisory (Cyan Accent) */}
                <div className="bg-white rounded-2xl p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#00AEEF]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[220px]">
                  <div>
                    <div className="text-[#00AEEF] mb-4">
                      <TrendingUp className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#08344E]">
                      Investment Advisory
                    </h3>
                  </div>
                  <div className="pt-4 flex justify-start">
                    <a
                      href="#contact"
                      className="text-2xl text-[#797979] hover:text-[#00AEEF] transition-colors"
                      aria-label="Investment Advisory"
                    >
                      &rarr;
                    </a>
                  </div>
                </div>

                {/* Service Card 4: Investment Options (Emerald Green Accent) */}
                <div className="bg-white rounded-2xl p-8 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#00A556]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[220px]">
                  <div>
                    <div className="text-[#00A556] mb-4">
                      <Target className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#08344E]">
                      Investment Options
                    </h3>
                  </div>
                  <div className="pt-4 flex justify-start">
                    <a
                      href="#contact"
                      className="text-2xl text-[#797979] hover:text-[#00A556] transition-colors"
                      aria-label="Investment Options"
                    >
                      &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 7. BOOK A CONSULTATION & MAKE APPOINTMENT ----------------- */}
      <section
        id="contact"
        className="relative py-24 bg-gradient-to-br from-[#E0F5FC] via-[#E8F8F5] to-[#E3F8EE] overflow-hidden"
      >
        {/* Soft decorative radial glows */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00A556]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Make Appointment Form Card with #00AEEF to #00A556 Gradient Border */}
            <div className="lg:col-span-6">
              <div className="p-2 sm:p-2.5 rounded-[32px] bg-gradient-to-b from-[#00AEEF] to-[#00A556] shadow-2xl">
                <div className="bg-white rounded-[24px] p-8 sm:p-10 shadow-sm">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#08344E] mb-2">
                    Make Appointment
                  </h3>
                  <p className="text-sm text-[#797979] mb-8">
                    Schedule a private session with our senior investment
                    specialists.
                  </p>

                  {appointmentSubmitted ? (
                    <div className="bg-[#E3F8EE] text-[#08344E] p-6 rounded-2xl border border-[#00A556]/40 text-center animate-fade-in">
                      <CheckCircle className="w-10 h-10 text-[#00A556] mx-auto mb-2" />
                      <h4 className="font-bold text-lg">Thank You!</h4>
                      <p className="text-sm text-[#4F4F4F] mt-1">
                        Your consultation request has been received. Our team will
                        contact you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleAppointmentSubmit} className="space-y-5">
                      <div>
                        <label className="sr-only">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          className="w-full px-5 py-4 rounded-xl bg-[#E0F5FC]/40 border border-gray-200 focus:border-[#00AEEF] focus:bg-white text-[#08344E] placeholder-[#797979] text-sm outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="sr-only">Your Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="Your Email Address"
                          className="w-full px-5 py-4 rounded-xl bg-[#E0F5FC]/40 border border-gray-200 focus:border-[#00AEEF] focus:bg-white text-[#08344E] placeholder-[#797979] text-sm outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="sr-only">Your Message</label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Your Message"
                          className="w-full px-5 py-4 rounded-xl bg-[#E0F5FC]/40 border border-gray-200 focus:border-[#00AEEF] focus:bg-white text-[#08344E] placeholder-[#797979] text-sm outline-none transition-all resize-none"
                        />
                      </div>
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-[#00AEEF] to-[#00A556] hover:from-[#00A556] hover:to-[#00AEEF] text-white font-semibold text-base py-3.5 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Book consultation description & Contact Info */}
            <div className="lg:col-span-6 lg:pl-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
                Book a <UnderlineHighlight color="#00AEEF">consultation</UnderlineHighlight> <br />
                experienced advisors.
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#4F4F4F] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>

              <div className="mt-10 space-y-6">
                {/* Address Card (Cyan Accent) */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white text-[#00AEEF] flex items-center justify-center shrink-0 shadow-sm border border-[#C7F0FD]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-[#08344E]">
                      Our Address
                    </h5>
                    <p className="text-sm text-[#797979] mt-0.5">
                      Seminyak No.19, Badung, Bali.
                    </p>
                  </div>
                </div>

                {/* Contact Card (Emerald Green Accent) */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white text-[#00A556] flex items-center justify-center shrink-0 shadow-sm border border-[#C3F3DC]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-[#08344E]">
                      Contact Info
                    </h5>
                    <p className="text-sm text-[#797979] mt-0.5">
                      (316) 212-3456
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 8. TESTIMONIALS / LEADERSHIP EXECUTIVES ----------------- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Aaron Loeb (Asian female portrait) */}
            <div className="bg-white rounded-2xl p-7 shadow-[0_5px_40px_rgba(0,0,0,0.08)] border border-gray-100 hover:border-[#00AEEF]/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[340px]">
              {/* Photo on right */}
              <div className="absolute right-0 bottom-0 w-36 h-48 pointer-events-none overflow-hidden flex items-end justify-end">
                <Image
                  src="/images/person-1.png"
                  alt="Aaron Loeb"
                  width={314}
                  height={412}
                  className="w-full h-auto object-contain object-bottom opacity-95"
                />
              </div>

              <div>
                <div className="text-5xl font-serif text-[#00AEEF]/30 leading-none mb-4">
                  “
                </div>
                <p className="text-sm italic text-[#797979] leading-relaxed relative z-10 max-w-[65%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut eiusmod tempor.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 relative z-10">
                <strong className="block text-base font-bold text-[#08344E]">
                  Aaron Loeb
                </strong>
                <p className="text-xs text-[#00AEEF] font-semibold">Manager</p>
              </div>
            </div>

            {/* Card 2: Alfredo Torres (Man with glasses, dark suit, arms crossed) */}
            <div className="bg-white rounded-2xl p-7 shadow-[0_5px_40px_rgba(0,0,0,0.08)] border border-gray-100 hover:border-[#00A556]/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[340px]">
              {/* Photo on right */}
              <div className="absolute right-0 bottom-0 w-36 h-48 pointer-events-none overflow-hidden flex items-end justify-end">
                <Image
                  src="/images/person-2.png"
                  alt="Alfredo Torres"
                  width={302}
                  height={403}
                  className="w-full h-auto object-contain object-bottom opacity-95"
                />
              </div>

              <div>
                <div className="text-5xl font-serif text-[#00A556]/30 leading-none mb-4">
                  “
                </div>
                <p className="text-sm italic text-[#797979] leading-relaxed relative z-10 max-w-[65%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut eiusmod tempor.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 relative z-10">
                <strong className="block text-base font-bold text-[#08344E]">
                  Alfredo Torres
                </strong>
                <p className="text-xs text-[#00A556] font-semibold">
                  Investment Banker
                </p>
              </div>
            </div>

            {/* Card 3: Claudia Alves (Woman with pink hair & glasses) */}
            <div className="bg-white rounded-2xl p-7 shadow-[0_5px_40px_rgba(0,0,0,0.08)] border border-gray-100 hover:border-[#00AEEF]/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[340px]">
              {/* Photo on right */}
              <div className="absolute right-0 bottom-0 w-36 h-48 pointer-events-none overflow-hidden flex items-end justify-end">
                <Image
                  src="/images/person-5.png"
                  alt="Claudia Alves"
                  width={275}
                  height={391}
                  className="w-full h-auto object-contain object-bottom opacity-95"
                />
              </div>

              <div>
                <div className="text-5xl font-serif text-[#00AEEF]/30 leading-none mb-4">
                  “
                </div>
                <p className="text-sm italic text-[#797979] leading-relaxed relative z-10 max-w-[65%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut eiusmod tempor.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 relative z-10">
                <strong className="block text-base font-bold text-[#08344E]">
                  Claudia Alves
                </strong>
                <p className="text-xs text-[#00AEEF] font-semibold">
                  Financial Analyst
                </p>
              </div>
            </div>

            {/* Card 4: Verona Blair (Man in dark suit) */}
            <div className="bg-white rounded-2xl p-7 shadow-[0_5px_40px_rgba(0,0,0,0.08)] border border-gray-100 hover:border-[#00A556]/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[340px]">
              {/* Photo on right */}
              <div className="absolute right-0 bottom-0 w-36 h-48 pointer-events-none overflow-hidden flex items-end justify-end">
                <Image
                  src="/images/person-4.png"
                  alt="Verona Blair"
                  width={310}
                  height={403}
                  className="w-full h-auto object-contain object-bottom opacity-95"
                />
              </div>

              <div>
                <div className="text-5xl font-serif text-[#00A556]/30 leading-none mb-4">
                  “
                </div>
                <p className="text-sm italic text-[#797979] leading-relaxed relative z-10 max-w-[65%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut eiusmod tempor.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 relative z-10">
                <strong className="block text-base font-bold text-[#08344E]">
                  Verona Blair
                </strong>
                <p className="text-xs text-[#00A556] font-semibold">
                  Investment Advisor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 9. OUR LATEST NEWS & BLOG (WITH CYAN READ MORE PILL BUTTONS) ----------------- */}
      <section id="blog" className="py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
              Our latest news &amp; <UnderlineHighlight color="#00AEEF">blog</UnderlineHighlight>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Post 1 */}
            <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/close-up-businessman-using-calculator-and-laptop-f-2022-08-18-18-39-42-utc.jpg"
                    alt="Smart investment decisions"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#00AEEF] bg-[#E0F5FC] px-3.5 py-1.5 rounded-full inline-block">
                    Business
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-[#08344E] group-hover:text-[#00AEEF] transition-colors line-clamp-2">
                    Smart investment decisions for a thriving business
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <a
                  href="#blog"
                  className="inline-block bg-[#00AEEF] hover:bg-[#00A556] text-white font-semibold text-xs px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm"
                >
                  Read More
                </a>
              </div>
            </article>

            {/* Post 2 */}
            <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/toxic-boss-angry-businessman-shouting-at-workers-2022-12-16-08-22-23-utc.jpg"
                    alt="5 Benefits of professional investing"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#00A556] bg-[#E3F8EE] px-3.5 py-1.5 rounded-full inline-block">
                    Entrepreneurs
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-[#08344E] group-hover:text-[#00A556] transition-colors line-clamp-2">
                    5 Benefits of professional investing for entrepreneurs
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <a
                  href="#blog"
                  className="inline-block bg-[#00A556] hover:bg-[#00AEEF] text-white font-semibold text-xs px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm"
                >
                  Read More
                </a>
              </div>
            </article>

            {/* Post 3 */}
            <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/images/group-of-asia-young-creative-people-celebrate-proj-2021-09-02-05-10-18-utc.jpg"
                    alt="8 Smart business investment tips"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#00AEEF] bg-[#E0F5FC] px-3.5 py-1.5 rounded-full inline-block">
                    Financial
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-[#08344E] group-hover:text-[#00AEEF] transition-colors line-clamp-2">
                    8 Smart business investment tips for financial freedom
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                <a
                  href="#blog"
                  className="inline-block bg-[#00AEEF] hover:bg-[#00A556] text-white font-semibold text-xs px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm"
                >
                  Read More
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ----------------- 10. CALL TO ACTION BANNER (READY TO TURN DREAMS INTO REALITY) ----------------- */}
      <section className="relative pt-20 pb-16 bg-gradient-to-t from-[#E0F5FC] to-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="relative rounded-[36px] bg-gradient-to-br from-[#E0F5FC] via-white to-[#E3F8EE] px-8 py-16 sm:py-20 text-center overflow-hidden border border-[#BCEBF9] shadow-lg">
            {/* Subtle glow circles */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#00A556]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08344E] leading-[1.25]">
                Ready to turn dreams into <br />
                reality? Let&apos;s get started{" "}
                <UnderlineHighlight color="#00AEEF">now!</UnderlineHighlight>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#4F4F4F]">
                Join thousands of forward-thinking investors building sustainable
                wealth today.
              </p>

              {/* Newsletter Form */}
              <form
                onSubmit={handleNewsletterSubmit}
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
              >
                <div className="relative w-full">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Your email address..."
                    className="w-full bg-white text-[#08344E] placeholder-[#797979] text-sm px-6 py-4 rounded-full border border-gray-200 outline-none focus:border-[#00AEEF] shadow-sm transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#00AEEF] to-[#00A556] hover:from-[#00A556] hover:to-[#00AEEF] text-white font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg shrink-0 active:scale-95"
                >
                  Send
                </button>
              </form>

              {newsletterSubmitted && (
                <p className="mt-4 text-xs font-semibold text-[#00A556]">
                  Thank you for subscribing! We&apos;ll be in touch soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 11. FOOTER (WITH INVIZ LOGO ON TOP-LEFT) ----------------- */}
      <footer className="bg-gradient-to-b from-[#E0F5FC]/70 to-[#E3F8EE]/70 pb-12 pt-6">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="bg-white rounded-[32px] p-8 sm:p-14 shadow-xl border border-white/60">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 lg:gap-10">
              {/* Col 1: Brand & Logo */}
              <div className="md:col-span-1">
                <Image
                  src="/images/inviz-logo.png"
                  alt="Inviz Logo"
                  width={130}
                  height={38}
                  className="h-8 w-auto object-contain mb-4"
                />
              </div>

              {/* Col 2: Menu */}
              <div>
                <h4 className="text-lg font-bold text-[#08344E] mb-5">Menu</h4>
                <ul className="space-y-3 text-sm text-[#797979]">
                  <li>
                    <a href="#" className="hover:text-[#00AEEF] transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-[#00AEEF] transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="hover:text-[#00AEEF] transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-[#00AEEF] transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 3: About */}
              <div>
                <h4 className="text-lg font-bold text-[#08344E] mb-5">About</h4>
                <ul className="space-y-3 text-sm text-[#797979]">
                  <li>
                    <a href="#" className="hover:text-[#00AEEF] transition-colors">
                      Story
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00AEEF] transition-colors">
                      Creative team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00AEEF] transition-colors">
                      Founders
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00AEEF] transition-colors">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 4: Links */}
              <div>
                <h4 className="text-lg font-bold text-[#08344E] mb-5">Links</h4>
                <ul className="space-y-3 text-sm text-[#797979]">
                  <li>
                    <a href="#" className="hover:text-[#00AEEF] transition-colors">
                      Terms of use
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00AEEF] transition-colors">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00AEEF] transition-colors">
                      Cookie policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#00AEEF] transition-colors">
                      Terms &amp; conditions
                    </a>
                  </li>
                </ul>
              </div>

              {/* Col 5: Our Address */}
              <div>
                <h4 className="text-lg font-bold text-[#08344E] mb-5">
                  Our Address
                </h4>
                <p className="text-sm text-[#797979] leading-relaxed mb-3">
                  Seminyak No.19, 80361,
                  <br />
                  Badung, Bali.
                </p>
                <p className="text-sm text-[#00AEEF] font-semibold mb-6">
                  (316) 212-3456
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-3 text-[#08344E]">
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#E0F5FC] hover:bg-[#00AEEF] hover:text-white flex items-center justify-center transition-all"
                    aria-label="YouTube"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#E0F5FC] hover:bg-[#00AEEF] hover:text-white flex items-center justify-center transition-all"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-[#E0F5FC] hover:bg-[#00AEEF] hover:text-white flex items-center justify-center transition-all"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-12 pt-8 border-t border-gray-100 text-center text-xs text-[#797979]">
              &copy; 2024 Inviz. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* ----------------- VIDEO MODAL POPUP ----------------- */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="relative w-full max-w-3xl bg-black rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors"
              aria-label="Close Video"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/nUAtEzcUuVk?autoplay=1"
                title="Inviz Overview Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
