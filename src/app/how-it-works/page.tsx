
import Hero from "@/components/HowItWorks/Hero";
import CTA from "@/components/common/CTA/index";
import HowItWorksFlow from "@/components/HowItWorks/index";
import OurFeatures from "@/components/HowItWorks/OurFeatures";
export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-backgroundLight flex flex-col justify-center items-center mt-15">
      <Hero />
      <HowItWorksFlow />
      <OurFeatures />
      <CTA />
    </main>
  );
}
