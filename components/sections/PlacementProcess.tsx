import React from "react";
import { BookOpenCheck, FileCheck, UserCheck, Award } from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export default function PlacementProcess() {
  const steps = [
    {
      step: "01",
      title: "Practical Hands-on Mastery",
      description:
        "Students work on live corporate ledger books, actual GST & TDS return filings, and enterprise SAP S/4HANA configurations.",
      icon: <BookOpenCheck className="w-7 h-7 text-[#00AEEF]" />,
      bg: "bg-[#E0F5FC]",
      border: "border-[#C7F0FD]",
    },
    {
      step: "02",
      title: "Resume & Profile Engineering",
      description:
        "Our HR specialists craft corporate ATS-friendly resumes and optimize your LinkedIn presence for corporate recruiters.",
      icon: <FileCheck className="w-7 h-7 text-[#00A556]" />,
      bg: "bg-[#E3F8EE]",
      border: "border-[#C3F3DC]",
    },
    {
      step: "03",
      title: "CA-Led Mock Interviews",
      description:
        "Multi-stage interview simulations conducted directly by practicing Chartered Accountants and financial controllers.",
      icon: <UserCheck className="w-7 h-7 text-[#00AEEF]" />,
      bg: "bg-[#E0F5FC]",
      border: "border-[#C7F0FD]",
    },
    {
      step: "04",
      title: "Guaranteed Placement Drives",
      description:
        "Direct corporate interview scheduling across our network of 250+ partner companies until you accept your offer letter.",
      icon: <Award className="w-7 h-7 text-[#00A556]" />,
      bg: "bg-[#E3F8EE]",
      border: "border-[#C3F3DC]",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FCFB] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E3F8EE] text-[#00A556] font-bold text-xs uppercase tracking-wider mb-4 border border-[#00A556]/20">
            Placement Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
            Our 4-Stage Placement <br />
            <UnderlineHighlight color="#00A556">Roadmap</UnderlineHighlight>
          </h2>
          <p className="mt-4 text-[#797979] text-base sm:text-lg">
            How we transform ambitious graduates into high-performing,
            corporate-ready accounting professionals.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-7 border border-gray-100 hover:border-[#00AEEF]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl ${item.bg} border-2 ${item.border} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-4xl font-black text-gray-200 group-hover:text-[#00AEEF]/30 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#08344E] mb-3 group-hover:text-[#00AEEF] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#797979] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-[#00A556]">
                <span>Stage {item.step} Complete</span>
                <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
