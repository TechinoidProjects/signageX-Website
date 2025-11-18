import { Badge } from "../ui/badge-default";
import { Heading } from "../common/MainHeading";
import StoryCarousel, { StorySlide } from "@/components/ui/carousels/story-carousel";
import { Dices } from "lucide-react";

const slides: StorySlide[] = [
  {
    id: "1",
    heading: "Our Story",
    year: "2021 – The Spark",
    description:
      "In 2021, three friends working in tech and design noticed a huge problem: digital signage software was clunky, expensive, and lacked innovation. Businesses had screens but no smart way to manage them. Fueled by late-night brainstorming sessions and countless cups of coffee, they decided to build a solution powered by AI.",
  },
  {
    id: "2",
    heading: "Our Story",
    year: "2022 – The Growth",
    description: "three friends working in tech and design noticed a huge problem: digital signage software was clunky, expensive, and lacked innovation. Businesses had screens but no smart way to manage them...",
  },
  {
    id: "3",
    heading: "Our Story",
    year: "2023 – The Breakthrough",
    description: "three friends working in tech and design noticed a huge problem: digital signage software was clunky, expensive, and lacked innovation. Businesses had screens but no smart way to manage them...",
  },
];

export default function AboutCarousel() {
  return (

    <section className="w-full flex justify-center items-center py-6 px-4">
        <div className=" container mx-auto flex flex-col justify-center items-center md:gap-4">
            <div className="flex flex-col justify-between items-center py-6 gap-6">
                <Badge
                text="about signagex"
                icon={Dices}
                variant="outline"
                color="custom"
                />
                <Heading
                title="Building Future of Signage"
                subtitle="At SignageX, we create AI-powered digital signage solutions that make managing, scaling, and personalizing content effortless for businesses worldwide."
                />
            </div>
            <StoryCarousel slides={slides} />
        </div>

    </section>
    
  );
}