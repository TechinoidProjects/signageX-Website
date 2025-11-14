import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices } from "lucide-react";
import VideoThumbnail from "./VideoThumbnail";

export default function VideoSection() {
  
  return (
    <section className="bg-white w-full flex justify-center items-center py-8 md:py-16 px-4">
        <div className="container mx-auto flex flex-col justify-center items-center md:gap-4">
        <div className="flex flex-col justify-between items-center md:pb-16 md:gap-6 pb-8 gap-2">
        {/* Badge */}
        <Badge
            text="quick overview"
            icon={Dices}
            variant="outline"
            color="custom"
        />

        {/* Heading */}
        <Heading
            title="SignageX Overview"
            subtitle="Watch our expert break down how AI-powered digital signage transforms engagement, streamlines management, and maximizes ROI for your business."
        />
        </div>
        <VideoThumbnail
            thumbnail="/images/videoThumbnail.jpg"
            youtubeSource="https://www.youtube.com/embed/bXlQ3Mw4uGc"
        />
        </div>
    </section>
  );
}
