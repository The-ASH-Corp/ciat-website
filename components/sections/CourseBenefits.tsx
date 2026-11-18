import React from "react";
import { Briefcase, Users, ShieldCheck, Award } from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export default function CourseBenefits() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Top 2 Columns Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 lg:mb-20">
          <div className="lg:col-span-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E3F8EE] text-[#00A556] font-bold text-xs uppercase tracking-wider mb-4 border border-[#00A556]/20">
              The CIAT Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
              Why Learn With <br />
              <UnderlineHighlight color="#00A556">CIAT Institute?</UnderlineHighlight>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-base sm:text-lg text-[#797979] leading-relaxed">
              We bridge the gap between academic theory and actual corporate
              expectations. Our programs are designed to transform students and
              working professionals into confident, job-ready accountants and
              financial leaders.
            </p>
          </div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pillar 1: Placement Assistance */}
          <div className="bg-[#F8FCFB] rounded-2xl p-7 border border-gray-100 hover:border-[#00AEEF]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-full bg-[#E0F5FC] border-[4px] border-[#C7F0FD] text-[#00AEEF] flex items-center justify-center mb-6 shadow-sm">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#08344E] mb-3">
                100% Placement Support
              </h3>
              <p className="text-[#797979] text-sm leading-relaxed">
                Dedicated corporate placement wing with 250+ partner companies,
                resume engineering, and mock interview drills.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200/60">
              <span className="text-xs font-semibold text-[#00AEEF]">
                250+ Hiring Partners &rarr;
              </span>
            </div>
          </div>

          {/* Pillar 2: Practicing CA Mentors */}
          <div className="bg-[#F8FCFB] rounded-2xl p-7 border border-gray-100 hover:border-[#00A556]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-full bg-[#E3F8EE] border-[4px] border-[#C3F3DC] text-[#00A556] flex items-center justify-center mb-6 shadow-sm">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#08344E] mb-3">
                Chartered Accountant Mentors
              </h3>
              <p className="text-[#797979] text-sm leading-relaxed">
                Learn directly from experienced Chartered Accountants, certified
                auditors, and corporate financial directors.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200/60">
              <span className="text-xs font-semibold text-[#00A556]">
                Expert Practitioner Faculty &rarr;
              </span>
            </div>
          </div>

          {/* Pillar 3: Real Corporate Projects (Elevated Card) */}
          <div className="bg-white rounded-2xl p-7 shadow-[0_15px_40px_rgba(0,174,239,0.08)] border-2 border-[#C7F0FD] hover:border-[#00AEEF] transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#E0F5FC] to-[#E3F8EE] border-[4px] border-[#C7F0FD] text-[#00AEEF] flex items-center justify-center mb-6 shadow-sm">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#08344E] mb-3">
                Live Company Case Studies
              </h3>
              <p className="text-[#797979] text-sm leading-relaxed">
                Work directly with anonymized real-world client ledgers, real GST
                portal forms, and live company trial balances.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200/60">
              <span className="text-xs font-semibold text-[#00AEEF]">
                100% Practical Training &rarr;
              </span>
            </div>
          </div>

          {/* Pillar 4: Recognized Certifications */}
          <div className="bg-[#F8FCFB] rounded-2xl p-7 border border-gray-100 hover:border-[#00A556]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 rounded-full bg-[#E3F8EE] border-[4px] border-[#C3F3DC] text-[#00A556] flex items-center justify-center mb-6 shadow-sm">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#08344E] mb-3">
                Global Credential Recognition
              </h3>
              <p className="text-[#797979] text-sm leading-relaxed">
                Earn certificates accredited and recognized across India, UAE,
                Qatar, Saudi Arabia, and international MNCs.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200/60">
              <span className="text-xs font-semibold text-[#00A556]">
                Govt. &amp; ISO Accredited &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
