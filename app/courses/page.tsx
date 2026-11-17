import type { Metadata } from "next";
import CourseHero from "@/components/sections/CourseHero";
import CourseList from "@/components/sections/CourseList";
import CourseBenefits from "@/components/sections/CourseBenefits";
import CourseAdvisory from "@/components/sections/CourseAdvisory";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Professional Accounting & Taxation Courses - CIAT Institute",
  description:
    "Explore certified professional accounting, GST, Gulf VAT, TallyPrime, and SAP FICO courses at CIAT. 100% practical training with dedicated placement assistance.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white text-[#4F4F4F] font-sans selection:bg-[#00AEEF] selection:text-white">
      <CourseHero />
      <CourseList />
      <CourseBenefits />
      <CourseAdvisory />
      <CtaBanner />
      <Footer />
    </main>
  );
}
