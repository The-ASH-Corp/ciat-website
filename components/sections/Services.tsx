import React from "react";
import Image from "next/image";
import { Briefcase, PieChart, TrendingUp, Target } from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export default function Services() {
  return (
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
  );
}
