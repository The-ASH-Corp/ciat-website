"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PhoneCall, CheckCircle, ArrowRight, MessageSquare } from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export default function CourseAdvisory() {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [courseInterest, setCourseInterest] = useState("Diploma in Practical Accounting & Taxation");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setPhone("");
      }, 5000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F8FCFB] to-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="bg-[#08344E] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle decorative glow circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00A556]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 text-white">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#00AEEF] font-bold text-xs uppercase tracking-wider mb-5 border border-white/10">
                Free Academic Counseling
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.25]">
                Confused about which program fits your{" "}
                <span className="text-[#00AEEF]">career goals?</span>
              </h2>

              <p className="mt-5 text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
                Whether you are a fresh graduate, a commerce student, or a working
                accountant looking to upskill to SAP or Gulf VAT, our senior
                academic advisors are here to guide you with a personalized learning
                roadmap.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#00A556]/20 flex items-center justify-center text-[#00A556]">
                    ✓
                  </div>
                  <span>1-on-1 Personalized Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#00AEEF]/20 flex items-center justify-center text-[#00AEEF]">
                    ✓
                  </div>
                  <span>Job Market &amp; Salary Insights</span>
                </div>
              </div>
            </div>

            {/* Right Callback Form */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl font-bold text-[#08344E] mb-2 flex items-center gap-2">
                  <PhoneCall className="w-5 h-5 text-[#00AEEF]" />
                  Request a Free Callback
                </h3>
                <p className="text-xs text-[#797979] mb-5">
                  Get in touch with our counselor within 15 minutes.
                </p>

                {submitted ? (
                  <div className="bg-[#E3F8EE] p-6 rounded-2xl border border-[#00A556]/30 text-center animate-fade-in">
                    <CheckCircle className="w-10 h-10 text-[#00A556] mx-auto mb-2" />
                    <h4 className="font-bold text-base text-[#08344E]">
                      Request Received!
                    </h4>
                    <p className="text-xs text-[#4F4F4F] mt-1">
                      Our career advisor will call you shortly at {phone}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-[#08344E] mb-1">
                        Select Course of Interest
                      </label>
                      <select
                        value={courseInterest}
                        onChange={(e) => setCourseInterest(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#08344E] text-xs font-medium focus:border-[#00AEEF] focus:bg-white outline-none"
                      >
                        <option value="Diploma in Practical Accounting & Taxation">
                          Diploma in Practical Accounting &amp; Taxation (DPAT)
                        </option>
                        <option value="Certified TallyPrime & GST Compliance">
                          TallyPrime &amp; GST Compliance
                        </option>
                        <option value="SAP FICO Corporate Specialist">
                          SAP FICO Corporate Specialist
                        </option>
                        <option value="Comprehensive Indian & Gulf VAT">
                          Comprehensive Indian &amp; Gulf VAT
                        </option>
                        <option value="Advanced Excel, Power BI & MIS">
                          Advanced Excel, Power BI &amp; MIS
                        </option>
                        <option value="Executive Diploma in Corporate Accounts">
                          Executive Diploma in Corporate Accounts (EDCAF)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#08344E] mb-1">
                        Mobile Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#08344E] text-xs placeholder-[#797979] focus:border-[#00AEEF] focus:bg-white outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3.5 px-6 rounded-full bg-[#00AEEF] hover:bg-[#00A556] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                    >
                      <span>Book Free Counseling Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="pt-2 text-center">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs text-[#00AEEF] hover:text-[#00A556] font-semibold"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        Or visit our Contact Page &rarr;
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
