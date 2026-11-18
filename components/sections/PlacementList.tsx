"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import {
  Search,
  Building2,
  MapPin,
  CheckCircle,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Quote,
  X,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Flame,
} from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export interface PlacementRecord {
  id: string;
  name: string;
  qualification: string;
  role: string;
  company: string;
  location: string;
  packageText: string;
  category:
    | "Taxation & GST"
    | "Audit & Corporate Accounts"
    | "SAP & ERP Specialist"
    | "Gulf & GCC Placements"
    | "Banking & Finance";
  course: string;
  image: string;
  testimonial: string;
  skills: string[];
  hikePercent: string;
}

const PLACEMENTS: PlacementRecord[] = [
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    qualification: "B.Com Fresher",
    role: "Associate Tax Consultant",
    company: "Deloitte India",
    location: "Bengaluru, India",
    packageText: "₹6.8 LPA",
    category: "Taxation & GST",
    course: "Diploma in Practical Accounting & Taxation (DPAT)",
    image: "/images/person-1.png",
    testimonial:
      "The live GST portal filing simulations and CA-led mock interviews prepared me thoroughly for the multi-round Deloitte interviews.",
    skills: ["GST Return Filing", "Income Tax & TDS", "TallyPrime 4.0", "Audit Scrutiny"],
    hikePercent: "Fresh Graduate to 6.8 LPA",
  },
  {
    id: "anjali-menon",
    name: "Anjali Menon",
    qualification: "M.Com Graduate",
    role: "SAP FICO Junior Consultant",
    company: "Ernst & Young (EY)",
    location: "Kochi / Hybrid",
    packageText: "₹7.2 LPA",
    category: "SAP & ERP Specialist",
    course: "SAP FICO Corporate Specialist Program",
    image: "/images/person-2.png",
    testimonial:
      "Working on real SAP S/4HANA live server configurations at CIAT was the single reason I was selected on day 1.",
    skills: ["SAP S/4HANA", "General Ledger (GL)", "AP/AR Configuration", "Controlling (CO)"],
    hikePercent: "85% Salary Hike",
  },
  {
    id: "mohammed-farhan",
    name: "Mohammed Farhan",
    qualification: "BBA Finance",
    role: "Senior VAT & Corporate Tax Executive",
    company: "Al-Futtaim Group",
    location: "Dubai, UAE",
    packageText: "AED 9,500/mo (₹25.5 LPA)",
    category: "Gulf & GCC Placements",
    course: "Comprehensive Indian & Gulf VAT Taxation Specialist",
    image: "/images/person-3.png",
    testimonial:
      "CIAT's curriculum on UAE EmaraTax and Saudi ZATCA e-invoicing made my overseas job transition to Dubai seamless.",
    skills: ["UAE VAT (EmaraTax)", "UAE Corporate Tax 9%", "ZATCA E-Invoicing", "ERP Accounts"],
    hikePercent: "International Direct Offer",
  },
  {
    id: "priya-nair",
    name: "Priya Nair",
    qualification: "B.Com Graduate",
    role: "Statutory Audit Senior Associate",
    company: "KPMG India",
    location: "Mumbai, India",
    packageText: "₹6.5 LPA",
    category: "Audit & Corporate Accounts",
    course: "Executive Diploma in Corporate Accounts & Finance (EDCAF)",
    image: "/images/person-4.png",
    testimonial:
      "I learned balance sheet finalization and audit scrutiny with real company files. That gave me huge leverage in KPMG technical rounds.",
    skills: ["Balance Sheet Finalization", "Ind AS Compliance", "ROC / MCA Filings", "Internal Controls"],
    hikePercent: "90% Salary Growth",
  },
  {
    id: "vikramaditya-rao",
    name: "Vikramaditya Rao",
    qualification: "MBA Finance",
    role: "Corporate Financial Analyst",
    company: "Grant Thornton",
    location: "Hyderabad, India",
    packageText: "₹5.8 LPA",
    category: "Banking & Finance",
    course: "Advanced Excel, Power BI & MIS Financial Modeling",
    image: "/images/person-5.png",
    testimonial:
      "Building automated 3-statement models and Power BI executive dashboards landed me an offer straight after my CIAT capstone project.",
    skills: ["Advanced Excel", "Power BI Dashboards", "DCF Financial Modeling", "Budget Forecasting"],
    hikePercent: "70% Salary Hike",
  },
  {
    id: "sneha-patel",
    name: "Sneha Patel",
    qualification: "B.Com Fresher",
    role: "Accounts & GST Specialist",
    company: "Tata Consultancy Services (TCS)",
    location: "Pune, India",
    packageText: "₹5.4 LPA",
    category: "Taxation & GST",
    course: "Certified TallyPrime & GST Compliance Practitioner",
    image: "/images/our-team-1.png",
    testimonial:
      "The placement cell arranged 3 interviews within 2 weeks of my exam. I had 2 offers in hand and joined TCS finance operations.",
    skills: ["TallyPrime 4.0", "E-Invoicing & E-Way Bills", "Bank Reconciliation", "Payroll"],
    hikePercent: "Direct Campus Selection",
  },
  {
    id: "rizwan-ahmed",
    name: "Rizwan Ahmed",
    qualification: "M.Com Graduate",
    role: "Assistant Finance Manager",
    company: "Lulu Group International",
    location: "Riyadh, Saudi Arabia",
    packageText: "SAR 8,200/mo (₹18 LPA)",
    category: "Gulf & GCC Placements",
    course: "Diploma in Practical Accounting & Taxation (DPAT)",
    image: "/images/our-team-2.png",
    testimonial:
      "CIAT's Gulf placement desk guided me through the entire visa and overseas contract evaluation process with total transparency.",
    skills: ["GCC VAT Compliance", "Inventory Audits", "ZATCA Rules", "Financial Reporting"],
    hikePercent: "Gulf Career Launch",
  },
  {
    id: "divya-krishnan",
    name: "Divya Krishnan",
    qualification: "B.Sc Maths (Non-Commerce)",
    role: "Credit & Financial Risk Officer",
    company: "HDFC Bank",
    location: "Chennai, India",
    packageText: "₹5.6 LPA",
    category: "Banking & Finance",
    course: "Executive Diploma in Corporate Accounts & Finance (EDCAF)",
    image: "/images/our-team-3.png",
    testimonial:
      "Coming from a non-commerce background, CIAT's structured coaching made accounting feel intuitive and opened bank career doors.",
    skills: ["Credit Appraisal", "Financial Ratio Analysis", "Working Capital Scrutiny", "Banking Operations"],
    hikePercent: "Non-Commerce Career Switch",
  },
  {
    id: "abhishek-verma",
    name: "Abhishek Verma",
    qualification: "B.Com Graduate",
    role: "SAP Financial Analyst",
    company: "Infosys",
    location: "Bengaluru, India",
    packageText: "₹6.4 LPA",
    category: "SAP & ERP Specialist",
    course: "SAP FICO Corporate Specialist Program",
    image: "/images/our-team-4.png",
    testimonial:
      "CIAT's step-by-step SAP configuration projects and expert faculty guidance helped me easily clear the technical interview at Infosys.",
    skills: ["SAP S/4HANA FI", "Asset Accounting", "Bank Ledger Posting", "Period-End Closing"],
    hikePercent: "78% Salary Hike",
  },
  {
    id: "meera-nambiar",
    name: "Meera Nambiar",
    qualification: "B.Com Graduate",
    role: "Internal Auditor & Compliance Lead",
    company: "BDO India",
    location: "Kochi / Bengaluru",
    packageText: "₹6.2 LPA",
    category: "Audit & Corporate Accounts",
    course: "Diploma in Practical Accounting & Taxation (DPAT)",
    image: "/images/our-team-5.png",
    testimonial:
      "Direct mentoring from practicing Chartered Accountants gave me practical insights you can never find in conventional college textbooks.",
    skills: ["Internal Audit", "TDS Returns", "Statutory Compliance", "MCA Portals"],
    hikePercent: "82% Salary Hike",
  },
];

const CATEGORIES = [
  "All Placements",
  "Taxation & GST",
  "Audit & Corporate Accounts",
  "SAP & ERP Specialist",
  "Gulf & GCC Placements",
  "Banking & Finance",
] as const;

export default function PlacementList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Placements");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isMarqueePaused, setIsMarqueePaused] = useState<boolean>(false);
  const [activeModalStudent, setActiveModalStudent] = useState<PlacementRecord | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 380;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredPlacements = useMemo(() => {
    return PLACEMENTS.filter((record) => {
      const matchesCategory =
        selectedCategory === "All Placements" ||
        record.category === selectedCategory;

      const matchesQuery =
        searchQuery.trim() === "" ||
        record.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        record.course.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Card renderer matching the exact screenshot model (media_1794975061598_d0dc5cc9.jpg)
  const renderCard = (
    student: PlacementRecord,
    idx: number,
    isCompact: boolean = false
  ) => {
    const isCyan = idx % 2 === 0;
    const hoverBorder = isCyan
      ? "hover:border-[#00AEEF]/50"
      : "hover:border-[#00A556]/50";
    const quoteColor = isCyan ? "text-[#00AEEF]/30" : "text-[#00A556]/30";
    const roleColor = isCyan ? "text-[#00AEEF]" : "text-[#00A556]";
    const packageBg = isCyan
      ? "bg-[#E0F5FC] text-[#00AEEF] border-[#C7F0FD]"
      : "bg-[#E3F8EE] text-[#00A556] border-[#C3F3DC]";

    return (
      <div
        key={`${student.id}-${idx}`}
        onClick={() => setActiveModalStudent(student)}
        className={`group bg-white rounded-2xl p-7 shadow-[0_5px_40px_rgba(0,0,0,0.06)] border border-gray-100 ${hoverBorder} hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[360px] cursor-pointer hover:-translate-y-1.5 ${
          isCompact ? "w-[330px] sm:w-[370px] shrink-0" : "w-full"
        }`}
      >
        {/* Photo cutout on bottom-right (Exact Testimonials.tsx style) */}
        <div className="absolute right-0 bottom-0 w-36 sm:w-44 h-56 pointer-events-none overflow-hidden flex items-end justify-end z-0">
          <Image
            src={student.image}
            alt={student.name}
            width={314}
            height={412}
            className="w-full h-auto object-contain object-bottom opacity-95 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Top Quote Mark & Verified Package Badge */}
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-2 mb-3">
            <div
              className={`text-6xl font-serif ${quoteColor} leading-none select-none`}
            >
              “
            </div>
            <span
              className={`inline-flex items-center gap-1 text-xs font-extrabold px-3 py-1 rounded-full border shadow-2xs ${packageBg}`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              {student.packageText}
            </span>
          </div>

          {/* Student Placement Testimonial */}
          <p className="text-sm italic text-[#797979] leading-relaxed relative z-10 max-w-[62%] sm:max-w-[64%]">
            {student.testimonial}
          </p>

          {/* Skill Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5 max-w-[60%]">
            {student.skills.slice(0, 2).map((skill, sIdx) => (
              <span
                key={sIdx}
                className="text-[10px] font-semibold text-[#08344E]/80 bg-gray-50 border border-gray-200/80 px-2.5 py-0.5 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Info: Student Name, Role, Company & Location */}
        <div className="pt-4 mt-6 border-t border-gray-100 relative z-10 max-w-[68%]">
          <strong className="block text-base sm:text-lg font-bold text-[#08344E] leading-snug">
            {student.name}
          </strong>
          <p className={`text-xs font-bold mt-1 ${roleColor} leading-tight`}>
            {student.role}
          </p>
          <p className="text-xs font-semibold text-[#08344E] mt-1 flex items-center gap-1.5 truncate">
            <Building2 className="w-3.5 h-3.5 text-[#797979] shrink-0" />
            <span className="truncate">{student.company}</span>
          </p>
          <div className="text-[11px] text-[#797979] mt-1 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#797979] shrink-0" />
              <span>{student.location}</span>
            </span>
            <span
              className={`font-bold ${roleColor} group-hover:underline flex items-center gap-0.5`}
            >
              Story &rarr;
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="placement-list" className="py-20 lg:py-28 bg-[#F8FCFB] relative overflow-hidden">
      {/* ======================================================== */}
      {/* 1. ANIMATING PLACEMENT SHOWCASE MARQUEE TRACK            */}
      {/* ======================================================== */}
      <div className="mb-20">
        <div className="max-w-[1240px] mx-auto px-6 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E3F8EE] text-[#00A556] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 border border-[#00A556]/20">
              <Flame className="w-3.5 h-3.5" />
              Live Placement Stream
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#08344E]">
              Recent Alumni Offers &mdash;{" "}
              <UnderlineHighlight color="#00A556">Continuous Track</UnderlineHighlight>
            </h2>
          </div>

          {/* Marquee Interactive Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMarqueePaused(!isMarqueePaused)}
              className="px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-bold text-[#08344E] hover:border-[#00AEEF] hover:text-[#00AEEF] transition-all flex items-center gap-1.5 shadow-2xs"
            >
              {isMarqueePaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-[#00A556]" />
                  <span>Resume Animation</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Pause Track</span>
                </>
              )}
            </button>

            <button
              onClick={() => scrollSlider("left")}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 text-[#08344E] hover:border-[#00AEEF] hover:text-[#00AEEF] flex items-center justify-center transition-all shadow-2xs"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollSlider("right")}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 text-[#08344E] hover:border-[#00AEEF] hover:text-[#00AEEF] flex items-center justify-center transition-all shadow-2xs"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Continuous Infinite Animating Marquee Track */}
        <div
          ref={sliderRef}
          className="overflow-x-auto no-scrollbar py-4 px-6"
        >
          <div
            className={`flex gap-6 ${
              isMarqueePaused ? "" : "animate-marquee"
            }`}
            style={{
              animationPlayState: isMarqueePaused ? "paused" : "running",
            }}
          >
            {/* Duplicated for seamless loop (PLACEMENTS + PLACEMENTS) */}
            {[...PLACEMENTS, ...PLACEMENTS].map((student, idx) =>
              renderCard(student, idx, true)
            )}
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. PLACEMENT CATALOG SEARCH & FILTERABLE GRID            */}
      {/* ======================================================== */}
      <div className="max-w-[1240px] mx-auto px-6 pt-8 border-t border-gray-200/80">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E3F8EE] text-[#00A556] font-bold text-xs uppercase tracking-wider mb-4 border border-[#00A556]/20">
            Student Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
            Meet Our Placed Alumni <br />
            &amp; <UnderlineHighlight color="#00AEEF">Top Achievers</UnderlineHighlight>
          </h2>
          <p className="mt-4 text-[#797979] text-base sm:text-lg">
            Real students, real offer letters. Explore where CIAT graduates work,
            the salaries they command, and the skills that got them hired.
          </p>
        </div>

        {/* Filter Controls: Search & Category Pills */}
        <div className="mb-12 space-y-6">
          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#797979]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by student name, company (Deloitte, EY, KPMG), role, or city..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-gray-200 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 text-[#08344E] text-sm placeholder-[#797979] outline-none shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#797979] hover:text-[#08344E] bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#00AEEF] text-white shadow-md shadow-[#00AEEF]/25 scale-105"
                      : "bg-white text-[#08344E]/80 border border-gray-200 hover:border-[#00AEEF] hover:text-[#00AEEF]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Result Count */}
          <div className="text-center text-xs font-semibold uppercase tracking-wider text-[#797979]">
            Showing {filteredPlacements.length} of {PLACEMENTS.length} Placed Students
          </div>
        </div>

        {/* Placements Cards Grid */}
        {filteredPlacements.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto border border-gray-100 shadow-sm">
            <Briefcase className="w-12 h-12 text-[#797979] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#08344E]">No records found</h3>
            <p className="text-sm text-[#797979] mt-2 mb-6">
              No placement records match &quot;{searchQuery}&quot;. Try searching for
              Deloitte, KPMG, Dubai, SAP, or Taxation.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Placements");
              }}
              className="px-6 py-2.5 rounded-full bg-[#00AEEF] hover:bg-[#00A556] text-white text-sm font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlacements.map((student, idx) =>
              renderCard(student, idx, false)
            )}
          </div>
        )}
      </div>

      {/* Student Placement Story Modal */}
      {activeModalStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-[#D2EBE5] to-[#E3F8EE] border-b border-gray-200 flex items-start justify-between relative">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white border-2 border-white shadow-md shrink-0">
                  <Image
                    src={activeModalStudent.image}
                    alt={activeModalStudent.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-[#00A556] bg-white/80 px-3 py-1 rounded-full mb-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Placement
                  </div>
                  <h3 className="text-2xl font-bold text-[#08344E]">
                    {activeModalStudent.name}
                  </h3>
                  <p className="text-xs text-[#08344E]/80">
                    {activeModalStudent.qualification} &bull; Placed at{" "}
                    <strong className="text-[#08344E]">
                      {activeModalStudent.company}
                    </strong>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveModalStudent(null)}
                className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#08344E] flex items-center justify-center shadow-sm transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5">
              {/* Offer Details Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-[11px] font-bold text-[#797979] uppercase tracking-wider">
                    Package / CTC
                  </div>
                  <div className="text-base font-extrabold text-[#00A556] mt-0.5">
                    {activeModalStudent.packageText}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-[11px] font-bold text-[#797979] uppercase tracking-wider">
                    Designation
                  </div>
                  <div className="text-sm font-bold text-[#08344E] mt-0.5">
                    {activeModalStudent.role}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 col-span-2 sm:col-span-1">
                  <div className="text-[11px] font-bold text-[#797979] uppercase tracking-wider">
                    Job Location
                  </div>
                  <div className="text-sm font-bold text-[#08344E] mt-0.5">
                    {activeModalStudent.location}
                  </div>
                </div>
              </div>

              {/* Course Completed at CIAT */}
              <div className="p-4 rounded-2xl bg-[#E0F5FC]/60 border border-[#00AEEF]/20 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-[#00AEEF] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#08344E] uppercase tracking-wider">
                    Program Completed at CIAT:
                  </div>
                  <div className="text-sm font-bold text-[#00AEEF]">
                    {activeModalStudent.course}
                  </div>
                </div>
              </div>

              {/* Student Experience / Testimonial */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#08344E] mb-2 flex items-center gap-1.5">
                  <Quote className="w-4 h-4 text-[#00A556]" />
                  Student Placement Journey:
                </h4>
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-[#4F4F4F] leading-relaxed italic">
                  &ldquo;{activeModalStudent.testimonial}&rdquo;
                </div>
              </div>

              {/* Key Practical Skills Learned */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#08344E] mb-2">
                  Key Skills Mastered at CIAT:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalStudent.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-full bg-[#E3F8EE] border border-[#00A556]/30 text-xs font-semibold text-[#00A556]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#797979]">
                Want similar placement results? Talk with our career team.
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveModalStudent(null)}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-gray-300 text-xs font-semibold text-[#4F4F4F] hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[#00A556] hover:bg-[#00AEEF] text-white text-xs font-bold text-center transition-all shadow-sm"
                >
                  Enroll for Placements
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
