import React from "react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";
import { Award, Briefcase, TrendingUp, CheckCircle2, Building2 } from "lucide-react";

export default function PlacementHero() {
  return (
    <section className="relative overflow-hidden bg-[#D2EBE5] pt-12 pb-24 lg:pt-16 lg:pb-36">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Title Column */}
          <div className="lg:col-span-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/70 text-[#00A556] font-bold text-xs uppercase tracking-wider mb-5 shadow-sm border border-white/60">
              100% Placement Success
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-[#08344E] leading-[1.18] tracking-tight">
              Empowering Careers, <br />
              Delivering <UnderlineHighlight color="#00A556">Placements</UnderlineHighlight>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#08344E]/85 leading-relaxed font-normal max-w-xl">
              Over 10,000+ CIAT alumni are thriving across Big 4 accounting
              firms, top multinational banks, IT giants, and leading Gulf
              enterprises. Discover our real student placement records and career
              transformations.
            </p>

            {/* Quick Feature Badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-[#08344E]">
              <span className="inline-flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#00A556]" />
                250+ Hiring Partners
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#00AEEF]" />
                Highest Package ₹12.5 LPA
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-[#00A556]" />
                Domestic &amp; Gulf Opportunities
              </span>
            </div>
          </div>

          {/* Right Stats & Highlights Card */}
          <div className="lg:col-span-5 lg:pl-6">
            <div className="bg-white/85 backdrop-blur-sm rounded-[28px] p-8 sm:p-10 border border-white shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <h3 className="text-xl font-bold text-[#08344E] mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-[#00A556]" />
                Placement Track Record
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {/* Stat 1 */}
                <div className="p-4 rounded-2xl bg-[#E3F8EE]/60 border border-[#00A556]/20">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#08344E] flex items-center gap-1">
                    <span>10k</span>
                    <span className="text-[#00A556] text-3xl">+</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#797979] mt-1.5">
                    Students Placed
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="p-4 rounded-2xl bg-[#E0F5FC]/60 border border-[#00AEEF]/20">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#08344E] flex items-center gap-1">
                    <span>250</span>
                    <span className="text-[#00AEEF] text-3xl">+</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#797979] mt-1.5">
                    Recruiters
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="p-4 rounded-2xl bg-[#E0F5FC]/60 border border-[#00AEEF]/20">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#08344E] flex items-center gap-1">
                    <span>12.5</span>
                    <span className="text-[#00AEEF] text-2xl font-bold">LPA</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#797979] mt-1.5">
                    Highest CTC
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="p-4 rounded-2xl bg-[#E3F8EE]/60 border border-[#00A556]/20">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#08344E] flex items-center gap-1">
                    <span>94.8</span>
                    <span className="text-[#00A556] text-3xl">%</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#797979] mt-1.5">
                    Placement Rate
                  </div>
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
