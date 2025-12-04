
import Hero from "@/components/common/Hero";
import FeaturedWidget from "@/components/Widgets/FeaturedWidget";
import AllWidgets from "@/components/Widgets/AllWidgets";
import CTA from "@/components/common/CTA";
export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-start items-center mt-15">
        <Hero 
            badgeText = "signagex apps"
            heading = "Our Featured Apps"
            subheading = "Launch in minutes. Amplify your reach, influence and income."
            buttonText = "Start Free Trail"
            imageOneSrc = "/images/Widget-hero-image-main.png"
            imageTwoSrc = "/images/Widget-hero-image-two.png"
            buttonShown = {true}
        />
        <FeaturedWidget />
        <AllWidgets />
      <CTA />
      
    </main>
  );
}
