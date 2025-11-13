import DigitalSignageHero from "@/components/HomePage/Hero";
import SignageSolutions from "@/components/HomePage/SignageSolutions"; 
import {FeatureTabs} from "@/components/HomePage/FeaturedTabs";
import VideoSection from "@/components/HomePage/VideoSection";
import WhyChooseSignageX from "@/components/HomePage/WhyChooseSignageX";
import GetStarted from "@/components/HomePage/GetStarted";
import Pricing from "@/components/HomePage/SignagePricing";
import CTA from "@/components/common/CTA/index"
export default function Home() {
  return (
    <main className="min-h-screen bg-backgroundLight flex flex-col justify-center items-center mt-15">
      <DigitalSignageHero />
      <SignageSolutions />
      <FeatureTabs />
      <WhyChooseSignageX />
      <VideoSection />
      <GetStarted />
      <Pricing />
      <CTA/>
    </main>
  );
}
