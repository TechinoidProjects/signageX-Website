"use client";

import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import PromoSection from "@/components/Industries/PromoSection";

export interface SolutionHighlightCard {
  title: string;
  description: string;
}

export interface SolutionHighlightSectionProps {
  badgeText: string;
  heading: string;
  subheading: string;
  topImage: string;
  bottomImage: string;
  topRightCard: SolutionHighlightCard;
  bottomLeftCard: SolutionHighlightCard;
}

const SolutionHighlightSection: React.FC<SolutionHighlightSectionProps> = ({
  badgeText,
  heading,
  subheading,
  topImage,
  bottomImage,
  topRightCard,
  bottomLeftCard,
}) => {
  return (
    <section className="w-full flex justify-center items-center py-12 md:py-16 bg-white">
      <div className="container mx-auto flex flex-col gap-8 md:gap-10 items-center px-4">
        <div className="flex flex-col items-center gap-3 text-center max-w-3xl">
          <Badge text={badgeText} variant="outline" color="custom" />
          <Heading title={heading} subtitle={subheading} />
        </div>

        <div className="w-full">
          <PromoSection
            imageSrc={topImage}
            heading={topRightCard.title}
            description={topRightCard.description}
            bgColor="bg-background-light"
            reverse={false}
          />
        </div>

        <div className="w-full">
          <PromoSection
            imageSrc={bottomImage}
            heading={bottomLeftCard.title}
            description={bottomLeftCard.description}
            bgColor="bg-background-light"
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionHighlightSection;
