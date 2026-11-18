import React from "react";
import { TrendingUp, Clock, Globe2, Building } from "lucide-react";

export default function PlacementMetricsBar() {
  const metrics = [
    {
      icon: <TrendingUp className="w-6 h-6 text-[#00A556]" />,
      bg: "bg-[#E3F8EE]",
      border: "border-[#C3F3DC]",
      value: "75%",
      label: "Average Salary Hike",
      sub: "Post Course Completion",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#00AEEF]" />,
      bg: "bg-[#E0F5FC]",
      border: "border-[#C7F0FD]",
      value: "30-45 Days",
      label: "Average Placement Time",
      sub: "From final exam clearance",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#00A556]" />,
      bg: "bg-[#E3F8EE]",
      border: "border-[#C3F3DC]",
      value: "6+ Countries",
      label: "Global Placements",
      sub: "India, UAE, Saudi, Qatar & GCC",
    },
    {
      icon: <Building className="w-6 h-6 text-[#00AEEF]" />,
      bg: "bg-[#E0F5FC]",
      border: "border-[#C7F0FD]",
      value: "5+ Drives",
      label: "Interviews Per Student",
      sub: "Guaranteed until offer letter",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8FCFB] rounded-2xl p-6 border border-gray-100 hover:border-[#00AEEF]/30 hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${item.bg} border-2 ${item.border} flex items-center justify-center shrink-0 shadow-sm`}
              >
                {item.icon}
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#08344E]">
                  {item.value}
                </div>
                <div className="text-sm font-bold text-[#08344E] mt-0.5">
                  {item.label}
                </div>
                <div className="text-xs text-[#797979] mt-0.5">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
