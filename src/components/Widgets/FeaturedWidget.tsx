"use client";

import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import AnimatedCards from "@/components/HomePage/WhyChooseSignageX/AnimatedCards";
import { Dices } from "lucide-react";

export default function FeaturedWidget() {
    const cards = [
        { id: 1, image: "/images/featuredImage1.jpg", title: "October Event" },
        { id: 2, image: "/images/featuredImage2.jpg", title: "Quiz Time" },
        { id: 3, image: "/images/featuredImage3.jpg", title: "Fun Facts" },
        { id: 4, image: "/images/featuredImage4.jpg", title: "Mosquito Trivia" },
        { id: 5, image: "/images/featuredImage5.jpg", title: "November Event" },
    ];
  return (
    <section className="bg-back-primary w-full flex justify-center items-center py-8 px-4">
      <div className="container mx-auto flex flex-col justify-center items-center md:gap-4">
        <div className="flex flex-col justify-between items-center text-center pb-8 gap-2 md:gap-6">
            <Badge text="Widgets" icon={Dices} variant="outline" color="white" />
            <Heading
                title="Our Feature Widgets"
                subtitle="Use pre-built widgets to go live in seconds."
                titleColorClass="text-white"
                subtitleColorClass="text-white"
            />
        </div>
        <AnimatedCards cards={cards} interval={5000} />
      </div>
    </section>
  );
}
