import type { Metadata } from "next";
import PlacementHero from "@/components/sections/PlacementHero";
import PlacementMetricsBar from "@/components/sections/PlacementMetricsBar";
import PlacementList from "@/components/sections/PlacementList";
import PlacementRecruiters from "@/components/sections/PlacementRecruiters";
import PlacementProcess from "@/components/sections/PlacementProcess";
import PlacementCompanyCTA from "@/components/sections/PlacementCompanyCTA";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Placements & Alumni Careers - CIAT Institute of Accounts & Management",
  description:
    "Explore 100% verified placement records, top corporate recruiters (Big 4, Banks, MNCs, Gulf Conglomerates), packages, and career success stories of CIAT graduates.",
};

export default function PlacementsPage() {
  return (
    <main className="min-h-screen bg-white text-[#4F4F4F] font-sans selection:bg-[#00A556] selection:text-white">
      <PlacementHero />
      <PlacementMetricsBar />
      <PlacementList />
      <PlacementRecruiters />
      <PlacementProcess />
      <PlacementCompanyCTA />
      <CtaBanner />
      <Footer />
    </main>
  );
}
