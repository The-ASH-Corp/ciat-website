import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Appointment from "@/components/sections/Appointment";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import CtaBanner from "@/components/sections/CtaBanner";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#4F4F4F] font-sans selection:bg-[#00AEEF] selection:text-white">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Features />
      <About />
      <Stats />
      <Services />
      <Appointment />
      <Testimonials />
      <Blog />
      <CtaBanner />
      <Footer />
    </main>
  );
}
