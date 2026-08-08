import About from "@/components/home/AboutSection";
import Contact from "@/components/home/ContactSection";
import FAQ from "@/components/home/FAQSection";
import Hero from "@/components/home/HeroSection";
import Industries from "@/components/home/IndustriesSection";
import Results from "@/components/home/ResultsSection";
import Services from "@/components/home/ServicesSection";
import TrustedGrowthPartner from "@/components/home/TrustedGrowthPartnerSection";

export default async function Home() {
  return (
    <>
      <Hero />
      <TrustedGrowthPartner />
      <About />
      <Services />

      <Industries />
      <Results />
      <FAQ />

      <Contact />
    </>
  );
}
