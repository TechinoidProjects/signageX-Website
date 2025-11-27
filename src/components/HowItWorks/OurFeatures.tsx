import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import FeaturesSlider from "@/components/ui/FeaturesSlider";
import { Dices } from "lucide-react";


const features = [
    {
      id: 1,
      title: "Real-Time Updates",
      description:
        "Push instant updates across your entire signage network within seconds.",
      image: "/images/feature-slider-one.png",
    },
    {
      id: 2,
      title: "Interactive Maps",
      description:
        "Help visitors navigate easily using touch-enabled interactive maps.",
      image: "/images/feature-slider-two.png",
    },
    {
      id: 3,
      title: "Emergency Alerts",
      description:
        "Broadcast emergency alerts instantly with maximum visibility.",
      image: "/images/feature-slider-three.png",
    },
    {
      id: 4,
      title: "Centralized Control",
      description:
        "Manage all screens from one unified dashboard with advanced scheduling.",
      image: "/images/feature-slider-four.png",
    },
];
export default function OurFeatures() {
  return (
    <section className="bg-background-light w-full flex justify-center items-center py-16 px-4">
      <div className=" container mx-auto flex flex-col justify-center items-center md:gap-4 ">
        <div className="flex flex-col justify-between items-center pb-16 gap-6">
          <Badge
            text="Seamless Sync"
            icon={Dices}
            variant="outline"
            color="custom"
          />
          <Heading
            title="Our Features"
            subtitle="Unify your tools into one smooth workflow."
          />
        </div>
        <FeaturesSlider items={features} />

      </div>
    </section>
  );
}
