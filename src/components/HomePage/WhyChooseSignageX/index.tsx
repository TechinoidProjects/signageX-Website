"use client";

import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices } from "lucide-react";
import SignageCard from "@/components/ui/cards/SignageCard";
import AnimatedCarousel from "@/components/HomePage/WhyChooseSignageX/AnimatedCarousel";

export default function WhyChooseSignageX() {
  const cards = [
    { id: 1, image: "/images/featuredImage1.jpg", title: "October Event" },
    { id: 2, image: "/images/featuredImage2.jpg", title: "Quiz Time" },
    { id: 3, image: "/images/featuredImage3.jpg", title: "Fun Facts" },
    { id: 4, image: "/images/featuredImage4.jpg", title: "Mosquito Trivia" },
    { id: 5, image: "/images/featuredImage5.jpg", title: "November Event" },
  ];

  return (
    <section className="bg-back-primary w-full flex justify-center items-center py-16 px-4">
      <div className="container mx-auto flex flex-col justify-center items-center md:gap-4">
        {/* Header */}
        <div className="flex flex-col justify-between items-center text-center pb-8 gap-6">
          <Badge text="Why Choose Us" icon={Dices} variant="outline" color="white" />

          <Heading
            title="Why Choose SignageX.ai?"
            subtitle="Boost ROI by chatting with AI. This is the future of digital signage powered with AI, brought to you by SignageX"
            titleColorClass="text-white"
            subtitleColorClass="text-white"
          />
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <SignageCard
            heading="Smarter Signage with AI"
            subtext="Harness the power of AI digital signage to create dynamic layouts, smart widgets, and personalized content with just one message."
            imageSrc="/images/SignageX-feature.png"
            showImage={false}
          />

          <SignageCard
            heading="No New Hardware Needed"
            subtext="Transform your existing digital signage hardware into a powerful AI-driven network with SignageX."
            imageSrc="/images/SignageX-feature.png"
            showImage={true}
          />
        </div>

        {/* Carousel */}
        <div className="w-full">
          <AnimatedCarousel cards={cards} interval={5000} />
        </div>
      </div>
    </section>
  );
}
