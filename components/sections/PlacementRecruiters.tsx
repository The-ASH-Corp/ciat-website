import React from "react";
import Image from "next/image";
import { Building2, CheckCircle2 } from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export default function PlacementRecruiters() {
  const recruiterCategories = [
    {
      title: "Big 4 & Global Audit Firms",
      companies: [
        { name: "Deloitte India", tag: "Taxation & Audit", logo: "/images/logo-client-1.png" },
        { name: "Ernst & Young (EY)", tag: "SAP & Advisory", logo: "/images/logo-client-2.png" },
        { name: "KPMG", tag: "Statutory Audit", logo: "/images/logo-client-3.png" },
        { name: "PwC India", tag: "Tax Consulting", logo: "/images/logo-client-4.png" },
        { name: "Grant Thornton", tag: "Financial Advisory", logo: "/images/logo-client-1.png" },
        { name: "BDO International", tag: "Corporate Accounts", logo: "/images/logo-client-2.png" },
      ],
    },
    {
      title: "Banks, Corporates & Gulf Conglomerates",
      companies: [
        { name: "Al-Futtaim Group", tag: "Dubai, UAE", logo: "/images/logo-client-3.png" },
        { name: "Lulu Group International", tag: "GCC / Saudi Arabia", logo: "/images/logo-client-4.png" },
        { name: "HDFC Bank", tag: "Commercial Banking", logo: "/images/logo-client-1.png" },
        { name: "Tata Consultancy Services", tag: "Enterprise Finance", logo: "/images/logo-client-2.png" },
        { name: "Infosys Limited", tag: "SAP S/4HANA", logo: "/images/logo-client-3.png" },
        { name: "Landmark Group", tag: "Retail Accounts UAE", logo: "/images/logo-client-4.png" },
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E0F5FC] text-[#00AEEF] font-bold text-xs uppercase tracking-wider mb-4 border border-[#00AEEF]/20">
            Hiring Network
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
            Our Prestigious <br />
            <UnderlineHighlight color="#00AEEF">Recruitment</UnderlineHighlight> Partners
          </h2>
          <p className="mt-4 text-[#797979] text-base sm:text-lg">
            Over 250+ multinational corporations, auditing firms, and leading
            business houses regularly recruit practically trained graduates from CIAT.
          </p>
        </div>

        {/* Recruiter Group Cards */}
        <div className="space-y-12">
          {recruiterCategories.map((group, gIdx) => (
            <div key={gIdx}>
              <h3 className="text-lg font-bold text-[#08344E] mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#00A556]" />
                {group.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                {group.companies.map((company, cIdx) => (
                  <div
                    key={cIdx}
                    className="bg-[#F8FCFB] rounded-2xl p-5 border border-gray-100 hover:border-[#00AEEF]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between items-center text-center group"
                  >
                    <div className="h-10 flex items-center justify-center mb-3">
                      <Image
                        src={company.logo}
                        alt={company.name}
                        width={120}
                        height={35}
                        className="max-h-8 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
                      />
                    </div>
                    <div className="text-xs font-bold text-[#08344E] line-clamp-1 group-hover:text-[#00AEEF] transition-colors">
                      {company.name}
                    </div>
                    <span className="mt-1 text-[10px] font-semibold text-[#00A556] bg-[#E3F8EE] px-2 py-0.5 rounded-full">
                      {company.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#E0F5FC]/60 via-[#E3F8EE]/60 to-[#E0F5FC]/60 rounded-3xl p-6 sm:p-8 border border-[#00AEEF]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00A556] text-white flex items-center justify-center shrink-0 shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#08344E]">
                Are you an Employer or HR Manager?
              </h4>
              <p className="text-xs sm:text-sm text-[#4F4F4F]">
                Hire pre-screened, certified accounts and tax professionals with
                zero recruitment charges.
              </p>
            </div>
          </div>
          <a
            href="/contact"
            className="px-6 py-3 rounded-full bg-[#00AEEF] hover:bg-[#00A556] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow active:scale-95 shrink-0"
          >
            Hire From CIAT
          </a>
        </div>
      </div>
    </section>
  );
}
