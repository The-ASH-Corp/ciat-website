import React from "react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#D2EBE5] pt-12 pb-24 lg:pt-16 lg:pb-36">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Title Column */}
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/70 text-[#00AEEF] font-bold text-xs uppercase tracking-wider mb-5 shadow-sm border border-white/60">
              About us
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-[#08344E] leading-[1.18] tracking-tight">
              Expertise For <br />
              Financial <UnderlineHighlight color="#00AEEF">Growth</UnderlineHighlight>
            </h1>
          </div>

          {/* Right Description & Stats Column */}
          <div className="lg:col-span-5 lg:pl-4">
            <p className="text-base sm:text-lg text-[#08344E]/85 leading-relaxed font-normal">
              CIAT is an organization that specializes in investment, accounts
              and business management, with a professional team that provides
              expert advice and support to clients.
            </p>

            {/* Counters Row */}
            <div className="mt-8 pt-8 border-t border-[#08344E]/15 grid grid-cols-2 gap-6">
              {/* Stat 1 */}
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#08344E] flex items-center gap-1">
                  <span>512</span>
                  <span className="text-[#00A556] text-4xl">+</span>
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#797979] mt-1">
                  Project Complete
                </div>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#08344E] flex items-center gap-1">
                  <span>25</span>
                  <span className="text-[#00AEEF] text-4xl">+</span>
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#797979] mt-1">
                  Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Curve Divider */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/shape-divider-home-edit.png"
          alt=""
          className="w-full h-auto min-h-[50px] object-cover object-bottom"
        />
      </div>
    </section>
  );
}
