import type { Metadata } from "next";
import AboutHero from "@/components/sections/AboutHero";
import About from "@/components/sections/About";
import AboutStrategies from "@/components/sections/AboutStrategies";
import Testimonials from "@/components/sections/Testimonials";
import AboutTeam from "@/components/sections/AboutTeam";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About Us - CIAT Institute of Accounts & Management",
  description:
    "Learn more about CIAT, our executive leadership, investment strategies, and professional team.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#4F4F4F] font-sans selection:bg-[#00AEEF] selection:text-white">
      <AboutHero />
      <About />
      <AboutStrategies />
      <Testimonials />
      <AboutTeam />
      <CtaBanner />
      <Footer />
    </main>
  );
}
