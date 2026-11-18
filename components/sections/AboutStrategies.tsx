import React from "react";
import Image from "next/image";
import { TrendingUp, Target } from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export default function AboutStrategies() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
              Our investment and <br />
              business <UnderlineHighlight color="#00A556">strategies.</UnderlineHighlight>
            </h2>

            <div className="mt-12 space-y-10">
              {/* Feature 1: Progressive Path */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-[#E0F5FC] border-[4px] border-[#C7F0FD] text-[#00AEEF] flex items-center justify-center shrink-0 shadow-sm">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#08344E] mb-2">
                    Progressive Path
                  </h3>
                  <p className="text-[#797979] text-[15px] leading-relaxed max-w-md">
                    Lorem ipsum dolor sit amet ut, commodo conse consecteturet.
                    Customized strategies crafted to accelerate long-term capital
                    growth.
                  </p>
                </div>
              </div>

              {/* Feature 2: Growth Goals */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-[#E3F8EE] border-[4px] border-[#C3F3DC] text-[#00A556] flex items-center justify-center shrink-0 shadow-sm">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#08344E] mb-2">
                    Growth Goals
                  </h3>
                  <p className="text-[#797979] text-[15px] leading-relaxed max-w-md">
                    Lorem ipsum dolor sit amet ut, commodo conse consecteturet.
                    Strategic benchmarks aligned with institutional wealth
                    preservation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Phone in Hand Mockup with Floating Analytics Card */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-[460px]">
              {/* Phone in Hand Mockup */}
              <div className="relative z-10 flex justify-center">
                <Image
                  src="/images/iPhone-12-Pro-in-Hand-Mockup-Concrete-Background-edit-907x1024.png"
                  alt="Financial Portfolio Mobile App"
                  width={907}
                  height={1024}
                  className="w-full max-w-[420px] h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Finance Growth Chart Card (Bottom-Left) */}
              <div className="absolute -bottom-4 sm:bottom-6 -left-2 sm:-left-6 z-20 w-44 sm:w-52 rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white">
                <Image
                  src="/images/Group-64.jpg"
                  alt="Financial Growth Analytics"
                  width={354}
                  height={313}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
