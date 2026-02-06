import { HeroSection } from "@/components/sections/HeroSection";
import { WhoSection } from "@/components/sections/WhoSection";
import { IncludedSection } from "@/components/sections/IncludedSection";
import { SyllabusSection } from "@/components/sections/SyllabusSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { Navbar } from "@/components/Navbar";

export default function Page() {
  return (
    <main className="min-h-screen text-motus-textLight">
      <Navbar />
      <HeroSection />
      <WhoSection />
      <IncludedSection />
      <SyllabusSection />
      <PricingSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}

