
import Hero from "@/components/common/Hero";
import HelpHero from "@/components/HelpCenter/Hero";
import CTA from "@/components/common/CTA";
export default function Resources() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-start items-center mt-15">
      <Hero 
          badgeText = "Resources"
          heading = "Everything you need to get started"
          subheading = "Guides, templates, and tips to help you design, deploy, and manage your screens with ease."
          buttonText = "Start Free Trail"
          imageOneSrc = "/images/resources-hero-imge-one.png"
          imageTwoSrc = "/images/resources-hero-imge-two.png"
          buttonShown = {false}
      />

      <HelpHero badgeText="community" />

        
      <CTA />
      
    </main>
  );
}
