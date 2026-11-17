"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, TrendingUp, CreditCard, Shield } from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";
import VideoModal from "@/components/ui/VideoModal";

interface HeroProps {
  onWatchVideo?: () => void;
}

export default function Hero({ onWatchVideo }: HeroProps) {
  const [videoOpen, setVideoOpen] = useState(false);

  const handlePlayClick = () => {
    if (onWatchVideo) {
      onWatchVideo();
    } else {
      setVideoOpen(true);
    }
  };

  return (
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
                type="button"
                onClick={handlePlayClick}
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

      {/* Embedded Video Modal */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
