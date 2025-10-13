import HeroCarousel from "@/components/hero-carousel";
import PerformancesSection from "@/components/performances-section";
import AboutSection from "@/components/about-section";
import DanceTypesPreview from "@/components/dance-types-preview";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      {/* <PerformancesSection /> */}
      <AboutSection />
      <DanceTypesPreview />
    </>
  );
}
