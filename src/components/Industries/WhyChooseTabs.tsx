"use client";

import { Dices } from "lucide-react";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { WhyChooseTabs, WhyChooseFeature } from "@/components/About/WhyChooseUs/WhyChooseTabs";

type WhyChooseTabsProps = {
  badgeText?: string;
  heading: string;
  subheading: string;
  features: WhyChooseFeature[];
  initialActiveId?: string;
};

export const WhyChooseTabsSection = ({
  badgeText = "why us",
  heading,
  subheading,
  features,
  initialActiveId = features[0]?.id || "",
}: WhyChooseTabsProps) => {
  return (
    <section className="bg-white w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className="container mx-auto flex flex-col justify-center items-center md:gap-4">

        <div className="flex flex-col justify-between items-center text-center pb-2 md:pb-16 gap-2 md:gap-6">
          <Badge
            text={badgeText}
            icon={Dices}
            variant="outline"
            color="custom"
          />

          <Heading title={heading} subtitle={subheading} />
        </div>

        <WhyChooseTabs
          features={features}
          initialActiveId= {initialActiveId}
        />

      </div>
    </section>
  );
};
