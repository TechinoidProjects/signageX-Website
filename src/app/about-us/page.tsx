import AboutCarousel from "@/components/About/Carousel";
import TrustSection from "@/components/About/TrustSection";
import OurMission from "@/components/About/OurMission";


export default function AllIndustries() {
  return (
    <main className="min-h-screen bg-backgroundLight flex flex-col justify-center items-center mt-0 md:mt-15">
        <AboutCarousel/>
        <TrustSection/>
        <OurMission/>

    </main>
  );
}
