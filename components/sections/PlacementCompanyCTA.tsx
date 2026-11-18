"use client";

import React, { useState } from "react";
import { UserCheck, Building2, CheckCircle, ArrowRight } from "lucide-react";

export default function PlacementCompanyCTA() {
  const [recruiterSubmitted, setRecruiterSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const handleRecruiterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyName && contactEmail) {
      setRecruiterSubmitted(true);
      setTimeout(() => {
        setRecruiterSubmitted(false);
        setCompanyName("");
        setContactEmail("");
      }, 5000);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Box 1: For Students */}
          <div className="rounded-[32px] p-8 sm:p-10 bg-gradient-to-br from-[#E0F5FC] to-white border border-[#00AEEF]/30 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white text-[#00AEEF] border border-[#00AEEF]/20 flex items-center justify-center mb-6 shadow-sm">
                <UserCheck className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00AEEF] bg-white px-3 py-1 rounded-full shadow-xs">
                For Ambitious Job Seekers
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#08344E] mt-3 mb-4">
                Want to land a high-paying accounting role?
              </h3>
              <p className="text-sm sm:text-base text-[#4F4F4F] leading-relaxed mb-6">
                Enroll in any of CIAT&apos;s certified programs and gain access to
                unlimited interview drives, resume grooming, and CA mentorship
                until you receive your offer letter.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-[#08344E] mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00A556]" />
                  Dedicated Placement Officer Assigned
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00A556]" />
                  Direct Campus Interview Drives with Big 4 &amp; Corporates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00A556]" />
                  International Placement Desk for UAE &amp; Saudi Arabia
                </li>
              </ul>
            </div>

            <div>
              <a
                href="/courses"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00AEEF] hover:bg-[#00A556] text-white text-sm font-bold transition-all shadow-md active:scale-95"
              >
                <span>Explore Placement-Oriented Courses</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Box 2: For Corporate Recruiters */}
          <div className="rounded-[32px] p-8 sm:p-10 bg-gradient-to-br from-[#E3F8EE] to-white border border-[#00A556]/30 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white text-[#00A556] border border-[#00A556]/20 flex items-center justify-center mb-6 shadow-sm">
                <Building2 className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00A556] bg-white px-3 py-1 rounded-full shadow-xs">
                For Corporate Employers &amp; HRs
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#08344E] mt-3 mb-4">
                Hire practically trained accounts talent
              </h3>
              <p className="text-sm sm:text-base text-[#4F4F4F] leading-relaxed mb-4">
                Eliminate training costs. CIAT graduates possess real hands-on
                competence in TallyPrime, GST filings, TDS compliance, and SAP
                FICO.
              </p>

              {recruiterSubmitted ? (
                <div className="bg-white p-5 rounded-2xl border border-[#00A556] text-center my-4 animate-fade-in">
                  <CheckCircle className="w-8 h-8 text-[#00A556] mx-auto mb-1" />
                  <div className="font-bold text-sm text-[#08344E]">
                    Recruiter Request Received!
                  </div>
                  <div className="text-xs text-[#797979] mt-0.5">
                    Our Corporate Placement Head will share candidate profiles
                    with you shortly.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRecruiterSubmit} className="space-y-3 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Company Name"
                      className="px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-xs text-[#08344E] placeholder-[#797979] outline-none focus:border-[#00A556]"
                    />
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="Official Work Email"
                      className="px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-xs text-[#08344E] placeholder-[#797979] outline-none focus:border-[#00A556]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#00A556] hover:bg-[#00AEEF] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
                  >
                    Request Pre-Screened Resumes
                  </button>
                </form>
              )}
            </div>

            <div className="text-xs text-[#797979] pt-2 border-t border-gray-100 flex items-center justify-between">
              <span>Zero Placement Fee for Recruiters</span>
              <a
                href="/contact"
                className="font-bold text-[#00A556] hover:underline"
              >
                Contact Placement Cell &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
