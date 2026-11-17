"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import UnderlineHighlight from "@/components/ui/UnderlineHighlight";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is CIAT?",
    answer:
      "CIAT (Institute of Accounts & Management) is a leading institution specializing in professional accounting education, financial planning, taxation consultancy, and strategic business advisory designed to build durable value.",
  },
  {
    question: "What are CIAT's latest offerings?",
    answer:
      "Our latest offerings include comprehensive corporate finance training, modern computerized accounting programs, professional taxation management, and executive wealth advisory services.",
  },
  {
    question: "What benefits does CIAT offer?",
    answer:
      "Students and clients gain industry-recognized certifications, 100% placement support with leading corporate partners, practical real-world case simulations, and 1-on-1 mentorship from senior financial experts.",
  },
  {
    question: "How to make an appointment?",
    answer:
      "You can easily schedule a consultation through our Make Appointment form on this page, call our direct support line at (316) 212-3456, or reach us via email at contact@domain.com.",
  },
  {
    question: "What are the advantages of CIAT?",
    answer:
      "With over 25+ years of combined institutional experience, cutting-edge curriculum, and dedicated career specialists, CIAT bridges the gap between academic theory and practical corporate financial success.",
  },
];

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#08344E] leading-[1.2]">
              What are the frequently <br />
              asked <UnderlineHighlight color="#00AEEF">questions?</UnderlineHighlight>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#797979] leading-relaxed">
              Find quick answers to common questions about CIAT programs,
              appointment schedules, and corporate consulting services.
            </p>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#00AEEF]/50 shadow-md bg-white"
                      : "border-gray-100 hover:border-gray-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-base sm:text-lg text-[#08344E] hover:text-[#00AEEF] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#00AEEF] text-white"
                          : "bg-[#E0F5FC] text-[#00AEEF]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-[#797979] text-[15px] leading-relaxed animate-fade-in border-t border-gray-50">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
