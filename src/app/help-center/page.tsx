
import Hero from "@/components/HelpCenter/Hero";
import HelpArticles from "@/components/HelpCenter/HelpArticles";
import FreeTrialSection from "@/components/common/FreeTrialSection";
export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-start items-center mt-15">
      <Hero />
      <HelpArticles />
      <FreeTrialSection
        heading="Try SignageX For Free"
        subheading="No hidden fees"
        buttonText="Start Free Trial – No Card Needed"
      />
      
    </main>
  );
}
