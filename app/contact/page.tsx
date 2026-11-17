import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import ContactCards from "@/components/sections/ContactCards";
import ContactFaq from "@/components/sections/ContactFaq";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contact Us - CIAT Institute of Accounts & Management",
  description:
    "Get in touch with the CIAT team. Book an appointment, view contact details, and find answers to frequently asked questions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#4F4F4F] font-sans selection:bg-[#00AEEF] selection:text-white">
      <ContactHero />
      <ContactCards />
      <ContactFaq />
      <CtaBanner />
      <Footer />
    </main>
  );
}
