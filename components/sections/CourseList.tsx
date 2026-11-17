"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Clock,
  BookOpen,
  CheckCircle,
  Star,
  Search,
  Laptop,
  Award,
  ChevronRight,
  FileText,
  X,
} from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

export interface Course {
  id: string;
  title: string;
  category:
    | "Practical Accounting"
    | "ERP & Tally / SAP"
    | "Taxation & Gulf VAT"
    | "Financial Analysis"
    | "Corporate & Management";
  badge?: string;
  badgeColor?: "cyan" | "green";
  duration: string;
  mode: string;
  rating: number;
  reviewCount: number;
  studentsCount: string;
  image: string;
  description: string;
  highlights: string[];
  syllabus: {
    module: string;
    topics: string[];
  }[];
  certification: string;
}

const COURSES: Course[] = [
  {
    id: "dpat",
    title: "Diploma in Practical Accounting & Taxation (DPAT)",
    category: "Practical Accounting",
    badge: "Most Popular",
    badgeColor: "green",
    duration: "6 Months",
    mode: "Classroom & Live Online",
    rating: 4.9,
    reviewCount: 1480,
    studentsCount: "4,200+",
    image: "/images/close-up-businessman-using-calculator-and-laptop-f-2022-08-18-18-39-42-utc.jpg",
    description:
      "A flagship comprehensive program covering fundamental to advanced corporate accounting, GST returns, TDS/TCS, payroll, and final accounts preparation.",
    highlights: [
      "Manual & Computerized Corporate Accounting",
      "Live GST Portal Filing (GSTR-1, 3B, 9)",
      "Income Tax Return Preparation & E-Filing",
      "Audited Balance Sheet & P&L Finalization",
    ],
    syllabus: [
      {
        module: "Module 1: Advanced Financial Accounting",
        topics: [
          "Accounting principles & corporate journal entries",
          "Cash flow, bank reconciliation, and depreciation schedules",
          "Trial balance & ledger scrutiny techniques",
        ],
      },
      {
        module: "Module 2: Complete GST & Indirect Taxation",
        topics: [
          "GST registration, tax invoices, and credit notes",
          "Input Tax Credit (ITC) reconciliation & 2B vs 3B match",
          "Live portal filing: GSTR-1, GSTR-3B, and annual returns",
        ],
      },
      {
        module: "Module 3: Direct Taxation & TDS/TCS",
        topics: [
          "Salary calculation, Form 16, and TDS return filing",
          "Corporate tax provisions and advance tax computations",
          "Income Tax Portal live practice & ITR-1 to ITR-4 filing",
        ],
      },
      {
        module: "Module 4: Practical Balance Sheet Finalization",
        topics: [
          "Year-end adjustment entries and inventory valuation",
          "Preparation of Profit & Loss statements and Balance Sheets",
          "Real-world audit file preparation for CA review",
        ],
      },
    ],
    certification: "CIAT Certified Master Accountant & Govt. Recognized Diploma",
  },
  {
    id: "tally-prime",
    title: "Certified TallyPrime & GST Compliance Practitioner",
    category: "ERP & Tally / SAP",
    badge: "High Demand",
    badgeColor: "cyan",
    duration: "3 Months",
    mode: "Classroom & Online",
    rating: 4.8,
    reviewCount: 920,
    studentsCount: "3,100+",
    image: "/images/graphic-2.jpg",
    description:
      "Master India's #1 accounting software from scratch. Gain hands-on competence with voucher entries, inventory control, GST e-invoicing, and MIS reports.",
    highlights: [
      "TallyPrime 4.0 Architecture & Company Setup",
      "GST E-Way Bill & E-Invoicing Integration",
      "Multi-Godown Inventory & Stock Valuations",
      "Automated Payroll & Statutory Deductions",
    ],
    syllabus: [
      {
        module: "Module 1: TallyPrime Fundamentals",
        topics: [
          "Company creation, chart of accounts, and security levels",
          "Voucher entry (Payment, Receipt, Journal, Contra)",
          "Bank reconciliation statement (BRS) automation",
        ],
      },
      {
        module: "Module 2: Inventory & Order Management",
        topics: [
          "Stock groups, categories, units of measure, and godowns",
          "Purchase & sales order processing with delivery challans",
          "Reorder levels and batch-wise stock aging analysis",
        ],
      },
      {
        module: "Module 3: GST & Statutory Compliance",
        topics: [
          "GST classification, HSN/SAC codes, and tax rates",
          "E-invoicing QR generation & E-way bill generation in Tally",
          "GST report generation: GSTR-1, 2, 3B, and reconciliation",
        ],
      },
      {
        module: "Module 4: Payroll & MIS Management Reports",
        topics: [
          "Pay heads creation, PF, ESI, and Professional Tax setup",
          "Salary slip generation and attendance vouchers",
          "Cash flow, ratio analysis, and executive dashboard exports",
        ],
      },
    ],
    certification: "CIAT Authorized Tally Professional Certification",
  },
  {
    id: "sap-fico",
    title: "SAP FICO Corporate Specialist (FI & CO Modules)",
    category: "ERP & Tally / SAP",
    badge: "Corporate Level",
    badgeColor: "green",
    duration: "4 Months",
    mode: "Classroom & Live Weekend",
    rating: 4.9,
    reviewCount: 810,
    studentsCount: "1,850+",
    image: "/images/Untitled-1.png",
    description:
      "Enterprise financial ERP training on live SAP servers. Master Financial Accounting (FI) and Controlling (CO) for multi-national corporate careers.",
    highlights: [
      "SAP S/4HANA Enterprise Financial Structure",
      "General Ledger, AP (Vendors), & AR (Customers)",
      "Asset Accounting & Bank Ledger Integration",
      "Cost Center & Profit Center Controlling (CO)",
    ],
    syllabus: [
      {
        module: "Module 1: Enterprise Structure & General Ledger",
        topics: [
          "Company code creation, chart of accounts, and fiscal year variants",
          "Posting keys, document types, and field status variants",
          "GL master records creation and document parking/posting",
        ],
      },
      {
        module: "Module 2: Accounts Payable & Receivable (AP/AR)",
        topics: [
          "Vendor & customer master records and reconciliation accounts",
          "Invoice processing, credit memos, and down payments",
          "Automatic Payment Program (APP) configuration",
        ],
      },
      {
        module: "Module 3: Asset Accounting & Bank Accounting",
        topics: [
          "Chart of depreciation, asset classes, and master records",
          "Depreciation run and asset retirement/transfers",
          "Electronic Bank Statement (EBS) configuration",
        ],
      },
      {
        module: "Module 4: Controlling (CO) & Management Reporting",
        topics: [
          "Cost element accounting and cost center hierarchies",
          "Internal orders and profit center accounting",
          "Financial closing cockpit and trial balance consolidation",
        ],
      },
    ],
    certification: "CIAT Certified SAP Corporate Financial Specialist",
  },
  {
    id: "gulf-tax",
    title: "Comprehensive Indian & Gulf VAT Taxation Specialist",
    category: "Taxation & Gulf VAT",
    badge: "International Career",
    badgeColor: "cyan",
    duration: "3.5 Months",
    mode: "Classroom & Online",
    rating: 4.9,
    reviewCount: 670,
    studentsCount: "2,400+",
    image: "/images/business-man-hero.png",
    description:
      "Dual taxation specialization preparing you for high-paying accounting jobs in India as well as Dubai, Saudi Arabia, Qatar, and the wider GCC region.",
    highlights: [
      "UAE VAT (Federal Tax Authority FTA) Laws & Filings",
      "Saudi Arabia ZATCA Phase 2 E-Invoicing Rules",
      "Corporate Tax Framework in the UAE (9% CT)",
      "Indian GST vs GCC VAT Practical Comparative Study",
    ],
    syllabus: [
      {
        module: "Module 1: GCC VAT Law & Framework",
        topics: [
          "GCC Unified VAT Agreement principles & taxable supplies",
          "Standard rated, zero rated, and exempt supplies in the UAE",
          "Designated zones and cross-border GCC transactions",
        ],
      },
      {
        module: "Module 2: UAE VAT Return Filing (EmaraTax)",
        topics: [
          "EmaraTax portal registration and taxpayer dashboard",
          "Calculating output tax and standard input tax recovery",
          "Submitting VAT 201 return and handling FTA penalty rules",
        ],
      },
      {
        module: "Module 3: UAE Corporate Tax (CT) Fundamentals",
        topics: [
          "Scope of UAE Corporate Tax, taxable income calculation",
          "Small Business Relief, free zone qualifying income",
          "Corporate tax registration and withholding provisions",
        ],
      },
      {
        module: "Module 4: Saudi Arabia ZATCA E-Invoicing",
        topics: [
          "ZATCA Phase 1 & Phase 2 integration requirements",
          "XML invoice generation, cryptographic stamps, and QR codes",
          "Double taxation avoidance agreements (DTAA) basics",
        ],
      },
    ],
    certification: "CIAT International Gulf VAT & Corporate Tax Practitioner",
  },
  {
    id: "excel-mis",
    title: "Advanced Excel, Power BI & MIS Financial Modeling",
    category: "Financial Analysis",
    badge: "Essential Skill",
    badgeColor: "green",
    duration: "2 Months",
    mode: "Classroom & Online",
    rating: 4.8,
    reviewCount: 1150,
    studentsCount: "3,800+",
    image: "/images/group-of-asia-young-creative-people-celebrate-proj-2021-09-02-05-10-18-utc.jpg",
    description:
      "Transform raw financial datasets into high-impact management insights. Master dynamic formulas, automated macros, Power Query, and Power BI dashboards.",
    highlights: [
      "Dynamic Formulas (XLOOKUP, INDEX-MATCH, LAMBDA)",
      "Automated Financial Dashboards & Pivot Tables",
      "Power Query Data Cleaning & ETL Pipelines",
      "Budget Forecasting & Financial DCF Modeling",
    ],
    syllabus: [
      {
        module: "Module 1: Advanced Formulas & Data Management",
        topics: [
          "Logical, lookup, and financial functions (XLOOKUP, OFFSET)",
          "Dynamic arrays, sequence formulas, and data validation rules",
          "Conditional formatting, data cleansing, and error auditing",
        ],
      },
      {
        module: "Module 2: Interactive Executive Dashboards",
        topics: [
          "Advanced Pivot Tables, Slicers, and Timelines",
          "Dynamic KPI metric cards and variance sparklines",
          "Creating automated C-Suite monthly MIS reports",
        ],
      },
      {
        module: "Module 3: Power Query & Automation",
        topics: [
          "Connecting multiple ledgers and folder file consolidation",
          "Unpivoting, merging, appending, and transform columns",
          "Automating repetitive weekly and monthly MIS workflows",
        ],
      },
      {
        module: "Module 4: Financial Modeling & Power BI Basics",
        topics: [
          "3-statement integrated financial model building",
          "Sensitivity analysis, Goal Seek, and scenario manager",
          "Importing financial data into Power BI & visual reports",
        ],
      },
    ],
    certification: "CIAT Certified Financial Analytics Specialist",
  },
  {
    id: "edcaf",
    title: "Executive Diploma in Corporate Accounts & Finance (EDCAF)",
    category: "Corporate & Management",
    badge: "Flagship Program",
    badgeColor: "cyan",
    duration: "8 Months",
    mode: "Classroom & Hybrid Mentorship",
    rating: 5.0,
    reviewCount: 520,
    studentsCount: "1,200+",
    image: "/images/team-edited.jpg",
    description:
      "Our premier career-transformation program combining Accounting, Taxation, SAP FICO, Corporate Law, and Financial Management with guaranteed placement drives.",
    highlights: [
      "Complete Dual Certification (Indian & International)",
      "Hands-on TallyPrime + SAP FICO Live Server Access",
      "Corporate ROC Compliance, MCA Filings & Auditing",
      "100% Guaranteed Placement Drive & Interview Coaching",
    ],
    syllabus: [
      {
        module: "Module 1: Corporate Accounting Mastery",
        topics: [
          "Advanced corporate balance sheet and cash flow modeling",
          "Ind AS and IFRS accounting standards overview",
          "Internal control procedures and forensic scrutiny",
        ],
      },
      {
        module: "Module 2: Dual Taxation & Corporate Secretarial",
        topics: [
          "Comprehensive Indian GST, TDS, and Corporate Income Tax",
          "UAE VAT, Gulf Corporate Tax, and international compliance",
          "MCA / ROC e-filing, annual returns, and secretarial registers",
        ],
      },
      {
        module: "Module 3: Enterprise ERP Mastery (Tally & SAP)",
        topics: [
          "Full cycle TallyPrime inventory and financial management",
          "End-to-end SAP FICO configuration and transactional posting",
          "Integration between sales, procurement, and finance",
        ],
      },
      {
        module: "Module 4: Executive Leadership & Placement",
        topics: [
          "Business communication and financial presentations",
          "Resume preparation, mock interviews with corporate CFOs",
          "Guaranteed corporate placement drive attendance",
        ],
      },
    ],
    certification: "CIAT Master Executive Diploma in Accounts & Finance",
  },
];

const CATEGORIES = [
  "All Courses",
  "Practical Accounting",
  "ERP & Tally / SAP",
  "Taxation & Gulf VAT",
  "Financial Analysis",
  "Corporate & Management",
] as const;

export default function CourseList() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Courses");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalCourse, setActiveModalCourse] = useState<Course | null>(null);

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesCategory =
        selectedCategory === "All Courses" ||
        course.category === selectedCategory;

      const matchesQuery =
        searchQuery.trim() === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.highlights.some((h) =>
          h.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="course-list" className="py-20 lg:py-28 bg-[#F8FCFB] relative">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E0F5FC] text-[#00AEEF] font-bold text-xs uppercase tracking-wider mb-4 border border-[#00AEEF]/20">
            Course Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
            Choose Your Career-Focused <br />
            <UnderlineHighlight color="#00A556">Specialization</UnderlineHighlight>
          </h2>
          <p className="mt-4 text-[#797979] text-base sm:text-lg">
            Browse our comprehensive selection of job-ready training programs,
            built with industry experts and Chartered Accountants.
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
              placeholder="Search by course name, topic, software (e.g. GST, Tally, SAP, VAT)..."
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
            Showing {filteredCourses.length} of {COURSES.length} Courses
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center max-w-md mx-auto border border-gray-100 shadow-sm">
            <BookOpen className="w-12 h-12 text-[#797979] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#08344E]">No courses found</h3>
            <p className="text-sm text-[#797979] mt-2 mb-6">
              We couldn&apos;t find any programs matching &quot;{searchQuery}&quot;. Try
              searching for Tally, GST, SAP, or Taxation.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Courses");
              }}
              className="px-6 py-2.5 rounded-full bg-[#00AEEF] hover:bg-[#00A556] text-white text-sm font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => {
              const badgeBg =
                course.badgeColor === "green"
                  ? "bg-[#00A556] text-white"
                  : "bg-[#00AEEF] text-white";

              return (
                <div
                  key={course.id}
                  className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 hover:border-[#00AEEF]/40 hover:shadow-[0_20px_40px_rgba(0,174,239,0.12)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Course Card Thumbnail */}
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                      {/* Badge if present */}
                      {course.badge && (
                        <div
                          className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full shadow-md ${badgeBg}`}
                        >
                          {course.badge}
                        </div>
                      )}

                      {/* Mode Pill */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#08344E] text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                        <Laptop className="w-3.5 h-3.5 text-[#00AEEF]" />
                        {course.mode.split("&")[0]}
                      </div>

                      {/* Duration Tag at Bottom of Image */}
                      <div className="absolute bottom-3 left-4 text-white text-xs font-medium flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
                        {course.duration}
                      </div>

                      {/* Rating pill */}
                      <div className="absolute bottom-3 right-4 text-white text-xs font-bold flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span>{course.rating}</span>
                        <span className="text-white/70 font-normal">
                          ({course.reviewCount})
                        </span>
                      </div>
                    </div>

                    {/* Course Body Content */}
                    <div className="p-6">
                      <span className="text-xs font-semibold text-[#00AEEF] bg-[#E0F5FC] px-3 py-1 rounded-full inline-block mb-3">
                        {course.category}
                      </span>

                      <h3 className="text-xl font-bold text-[#08344E] group-hover:text-[#00AEEF] transition-colors line-clamp-2 min-h-[56px]">
                        {course.title}
                      </h3>

                      <p className="mt-3 text-sm text-[#797979] leading-relaxed line-clamp-2">
                        {course.description}
                      </p>

                      {/* Highlights Bullet List */}
                      <div className="mt-5 pt-5 border-t border-gray-100 space-y-2.5">
                        {course.highlights.map((highlight, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 text-xs text-[#4F4F4F]"
                          >
                            <CheckCircle className="w-4 h-4 text-[#00A556] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Certification Pill */}
                      <div className="mt-4 pt-3 border-t border-dashed border-gray-100 flex items-center gap-2 text-[11px] font-medium text-[#08344E]/80">
                        <Award className="w-4 h-4 text-[#00AEEF] shrink-0" />
                        <span className="truncate">{course.certification}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setActiveModalCourse(course)}
                      className="w-full inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-full border border-[#08344E]/20 text-[#08344E] hover:border-[#00AEEF] hover:text-[#00AEEF] hover:bg-[#E0F5FC]/30 text-xs font-bold transition-all"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Syllabus
                    </button>

                    <a
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-full bg-[#00AEEF] hover:bg-[#00A556] text-white text-xs font-bold transition-all shadow-sm hover:shadow active:scale-95 text-center"
                    >
                      Enroll Now
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Course Syllabus Modal */}
      {activeModalCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div
            className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-[#D2EBE5] to-[#E0F5FC] border-b border-gray-200 flex items-start justify-between relative">
              <div>
                <span className="text-xs font-bold text-[#00AEEF] uppercase tracking-wider bg-white/80 px-3 py-1 rounded-full">
                  {activeModalCourse.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#08344E] mt-2">
                  {activeModalCourse.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-[#08344E]/80">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
                    {activeModalCourse.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Laptop className="w-3.5 h-3.5 text-[#00A556]" />
                    {activeModalCourse.mode}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-[#00AEEF]" />
                    {activeModalCourse.certification}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setActiveModalCourse(null)}
                className="w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#08344E] flex items-center justify-center shadow-sm transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body - Syllabus Modules */}
            <div className="p-6 overflow-y-auto space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#08344E]">
                Detailed Course Curriculum:
              </h4>

              <div className="space-y-4">
                {activeModalCourse.syllabus.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-gray-50 border border-gray-200"
                  >
                    <h5 className="font-bold text-sm text-[#08344E] mb-2">
                      {item.module}
                    </h5>
                    <ul className="space-y-1.5">
                      {item.topics.map((topic, tIdx) => (
                        <li
                          key={tIdx}
                          className="flex items-start gap-2 text-xs text-[#4F4F4F]"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#00A556] shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#797979]">
                Ready to take the next step in your financial career?
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveModalCourse(null)}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-gray-300 text-xs font-semibold text-[#4F4F4F] hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
                <a
                  href="/contact"
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[#00AEEF] hover:bg-[#00A556] text-white text-xs font-bold text-center transition-all shadow-sm"
                >
                  Inquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
