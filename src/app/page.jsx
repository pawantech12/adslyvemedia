import About from "@/components/home/AboutSection";
import Hero from "@/components/home/HeroSection";
import Process from "@/components/home/ProcessSection";
import Services from "@/components/home/ServicesSection";
import TrustedGrowthPartner from "@/components/home/TrustedGrowthPartnerSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedGrowthPartner />
      <About />
      <Services />
      <Process />
    </>
  );
}
