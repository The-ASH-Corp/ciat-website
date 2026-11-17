import React from "react";
import Image from "next/image";

export default function Testimonials() {
  return (
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
  );
}
