"use client";

import React from "react";
import Image from "next/image";
import {
  Clock,
  Laptop,
  Star,
  Award,
  CheckCircle2,
  ChevronRight,
  FileText,
  Flame,
  Users,
} from "lucide-react";
import { Course } from "./CourseList";

interface AnimatingCourseCardProps {
  course: Course;
  onOpenSyllabus: (course: Course) => void;
  isCompact?: boolean;
}

export default function AnimatingCourseCard({
  course,
  onOpenSyllabus,
  isCompact = false,
}: AnimatingCourseCardProps) {
  const badgeBg =
    course.badgeColor === "green"
      ? "bg-[#00A556] text-white"
      : "bg-[#00AEEF] text-white";

  return (
    <div
      className={`group bg-white rounded-[28px] overflow-hidden border border-gray-100 hover:border-[#00AEEF]/50 hover:shadow-[0_25px_50px_rgba(0,174,239,0.16)] transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative ${
        isCompact ? "w-[330px] sm:w-[370px] shrink-0" : "w-full"
      }`}
    >
      <div>
        {/* Course Card Thumbnail with Image & Overlays */}
        <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          {/* Top-Left: Animated Live Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
            {course.badge && (
              <span
                className={`text-xs font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 ${badgeBg}`}
              >
                <Flame className="w-3.5 h-3.5 animate-pulse" />
                {course.badge}
              </span>
            )}
          </div>

          {/* Top-Right: Training Mode Pill */}
          <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-md text-[#08344E] text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 border border-white/80">
            <Laptop className="w-3.5 h-3.5 text-[#00AEEF]" />
            <span>{course.mode.split("&")[0]}</span>
          </div>

          {/* Bottom Floating Stats Bar over Image */}
          <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-white text-xs font-medium">
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
              {course.duration}
            </span>

            <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 font-bold">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>{course.rating}</span>
              <span className="text-white/70 font-normal">
                ({course.reviewCount})
              </span>
            </span>
          </div>
        </div>

        {/* Card Body Content */}
        <div className="p-6 pb-4">
          {/* Category Tag + Live Admissions Indicator */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-[#00AEEF] bg-[#E0F5FC] px-3 py-1 rounded-full uppercase tracking-wider">
              {course.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#00A556]">
              <span className="w-2 h-2 rounded-full bg-[#00A556] animate-ping" />
              Live Batch
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#08344E] group-hover:text-[#00AEEF] transition-colors line-clamp-2 min-h-[56px] leading-snug">
            {course.title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-[#797979] leading-relaxed line-clamp-2">
            {course.description}
          </p>

          {/* Live Capacity / Seats Progress Bar */}
          <div className="mt-4 p-3 rounded-2xl bg-[#F8FCFB] border border-gray-100">
            <div className="flex items-center justify-between text-[11px] font-semibold text-[#797979] mb-1.5">
              <span className="flex items-center gap-1 text-[#08344E]">
                <Users className="w-3 h-3 text-[#00A556]" />
                {course.studentsCount} Students Enrolled
              </span>
              <span className="text-[#00A556] font-bold">85% Full</span>
            </div>
            <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#00AEEF] to-[#00A556] rounded-full w-[85%] transition-all duration-1000" />
            </div>
          </div>

          {/* Highlights List with Slide-on-Hover */}
          <div className="mt-4 space-y-2 border-t border-gray-100 pt-3">
            {course.highlights.slice(0, 3).map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-2 text-xs text-[#4F4F4F] group-hover:translate-x-0.5 transition-transform duration-200"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00A556] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{highlight}</span>
              </div>
            ))}
          </div>

          {/* Certification Badge */}
          <div className="mt-3.5 pt-2.5 border-t border-dashed border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#08344E]/80">
            <Award className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
            <span className="truncate">{course.certification}</span>
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3">
        <button
          onClick={() => onOpenSyllabus(course)}
          className="w-full inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-full border border-gray-200 text-[#08344E] hover:border-[#00AEEF] hover:text-[#00AEEF] hover:bg-[#E0F5FC]/30 text-xs font-bold transition-all active:scale-95 shadow-2xs"
        >
          <FileText className="w-3.5 h-3.5" />
          Syllabus
        </button>

        <a
          href="/contact"
          className="w-full inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-full bg-[#00AEEF] hover:bg-[#00A556] text-white text-xs font-bold transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 text-center group/btn"
        >
          <span>Enroll Now</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}
