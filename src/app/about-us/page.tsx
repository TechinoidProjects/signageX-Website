import AboutCarousel from "@/components/About/Carousel";
import TrustSection from "@/components/About/TrustSection";
import OurMission from "@/components/About/OurMission";
import {WhyChooseUs} from "@/components/About/WhyChooseUs/index";
import CTA from "@/components/common/CTA";


export default function AboutUs() {
  return (
    <main className="min-h-screen bg-backgroundLight flex flex-col justify-center items-center mt-0 md:mt-15">
        <AboutCarousel/>
        <TrustSection/>
        <OurMission/>
        <WhyChooseUs/>
        <CTA/>

    </main>
  );
}
