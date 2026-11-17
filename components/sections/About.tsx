import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export default function About() {
  return (
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
  );
}
