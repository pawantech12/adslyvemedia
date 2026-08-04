import About from "@/components/home/AboutSection";
import Contact from "@/components/home/ContactSection";
import CTA from "@/components/home/CTASection";
import FAQ from "@/components/home/FAQSection";
import Hero from "@/components/home/HeroSection";
import Industries from "@/components/home/IndustriesSection";
import Process from "@/components/home/ProcessSection";
import Results from "@/components/home/ResultsSection";
import Services from "@/components/home/ServicesSection";
import TrustedGrowthPartner from "@/components/home/TrustedGrowthPartnerSection";
import WhyChooseUs from "@/components/home/WhyChooseUsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedGrowthPartner />
      <About />
      <Services />
      {/* <Process /> */}
      {/* <WhyChooseUs /> */}
      <Industries />
      <Results />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
