import React from "react";

export default function Stats() {
  return (
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
  );
}
