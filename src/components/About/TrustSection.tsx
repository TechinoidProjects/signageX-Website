"use client";

import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices } from "lucide-react";
import SignageCard from "@/components/ui/cards/SignageCard";

export default function TrustSection() {
  return (
    <section className="bg-back-primary w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className="container mx-auto flex flex-col justify-center items-center md:gap-4">
        {/* Header */}
        <div className="flex flex-col justify-between items-center text-center pb-2 md:pb-16 gap-2 md:gap-6">
          <Badge text="Values" icon={Dices} variant="outline" color="white" />

          <Heading
            title="Built on Trust & Innovation"
            subtitle="Guided by AI innovation, we create digital signage solutions that empower businesses and inspire connections."
            titleColorClass="text-white"
            subtitleColorClass="text-white"
          />
        </div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <SignageCard
            heading="Customer-centric Approach"
            subtext="We design AI-powered digital signage to meet customer needs, creating seamless, scalable, and engaging experiences."
            imageSrc="/images/trust-card-image-one.png"
            showImage={true}
          />

          <SignageCard
            heading="No New Hardware Needed"
            subtext="Transform your existing digital signage hardware into a powerful AI-driven network with SignageX."
            imageSrc="/svg/trust-card-image-two.svg"
            showImage={true}
          />

          <SignageCard
            heading="No New Hardware Needed"
            subtext="Transform your existing digital signage hardware into a powerful AI-driven network with SignageX."
            imageSrc="/images/trust-card-image-three.png"
            showImage={true}
          />
        </div>

      </div>
    </section>
  );
}
