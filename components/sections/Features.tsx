import React from "react";
import { TrendingUp, Headphones, CreditCard } from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export default function Features() {
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
  );
}
