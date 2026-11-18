"use client";

import React, { useState } from "react";
import { TrendingUp, Headphones, CreditCard, ArrowRight } from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

interface FeatureCard {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  colorTheme: "cyan" | "green";
  link: string;
}

const FEATURES: FeatureCard[] = [
  {
    id: "efficient-investment",
    icon: TrendingUp,
    title: "Efficient Investment",
    description:
      "Lorem ipsum dolor sit amet, commodo conse consecteturet deus adipiscing elit, sed do eiusmod tempor ut.",
    colorTheme: "cyan",
    link: "#services",
  },
  {
    id: "professional-support",
    icon: Headphones,
    title: "Professional Support",
    description:
      "Lorem ipsum dolor sit amet, commodo conse consecteturet deus adipiscing elit, sed do eiusmod tempor ut.",
    colorTheme: "green",
    link: "#services",
  },
  {
    id: "transparent-pricing",
    icon: CreditCard,
    title: "Transparent Pricing",
    description:
      "Lorem ipsum dolor sit amet, commodo conse consecteturet deus adipiscing elit, sed do eiusmod tempor ut.",
    colorTheme: "cyan",
    link: "#pricing",
  },
];

export default function Features() {
  // Default active card is Card 3 (index 2) matching original design
  // Hovering any card activates it with the elevated background and styling
  const [activeCard, setActiveCard] = useState<number>(2);

  return (
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

        {/* 3 Value Pillars: Interactive Card Elevation on Hover */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end"
          onMouseLeave={() => setActiveCard(2)}
        >
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            const isGreen = feature.colorTheme === "green";
            const isActive = activeCard === index;

            return (
              <div
                key={feature.id}
                onMouseEnter={() => setActiveCard(index)}
                className={`group p-8 sm:p-10 rounded-[28px] min-h-[420px] flex flex-col justify-between transition-all duration-500 cursor-pointer border ${
                  isActive
                    ? isGreen
                      ? "bg-white border-[#C3F3DC] shadow-[0_20px_50px_rgba(0,165,86,0.12)] -translate-y-4 md:-translate-y-6"
                      : "bg-white border-[#C7F0FD] shadow-[0_20px_50px_rgba(0,174,239,0.12)] -translate-y-4 md:-translate-y-6"
                    : "bg-transparent border-transparent shadow-none translate-y-0 hover:bg-white/40"
                }`}
              >
                <div>
                  {/* Top Icon Badge */}
                  <div
                    className={`w-20 h-20 rounded-full border-[5px] flex items-center justify-center mb-6 shadow-sm transition-transform duration-500 ${
                      isActive ? "scale-105" : "group-hover:scale-105"
                    } ${
                      isGreen
                        ? "bg-[#E3F8EE] border-[#C3F3DC] text-[#00A556]"
                        : "bg-[#E0F5FC] border-[#C7F0FD] text-[#00AEEF]"
                    }`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#08344E] mb-4 group-hover:text-[#00AEEF] transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#797979] text-[15px] leading-relaxed mb-8">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Action Arrow */}
                <div className="pt-2">
                  <a
                    href={feature.link}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-500 ${
                      isActive
                        ? isGreen
                          ? "bg-[#E3F8EE] text-[#00A556] shadow-xs scale-105"
                          : "bg-[#E0F5FC] text-[#00AEEF] shadow-xs scale-105"
                        : isGreen
                        ? "bg-transparent text-[#00A556] justify-start group-hover:text-[#00AEEF]"
                        : "bg-transparent text-[#00AEEF] justify-start group-hover:text-[#00A556]"
                    }`}
                    aria-label={`${feature.title} link`}
                  >
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
