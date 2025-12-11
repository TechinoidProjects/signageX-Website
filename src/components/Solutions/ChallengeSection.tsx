"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import FeatureCard from "../ui/cards/FeatureCard";

export interface ChallengeCard {
  number: string;
  title: string;
  description: string;
}

export interface ChallengeSectionProps {
  badgeText: string;
  heading: string;
  subheading: string;
  imageLeft: string;
  imageRight: string;
  cards: ChallengeCard[];
}

export const ChallengeSection: React.FC<ChallengeSectionProps> = ({
  badgeText,
  heading,
  subheading,
  imageLeft,
  imageRight,
  cards,
}) => {
  return (
    <section className="w-full flex justify-center items-center py-12 md:py-16 bg-background-light">
      <div className="container mx-auto flex flex-col gap-8 md:gap-10 items-center ">
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge text={badgeText} variant="outline" color="custom" />
          <Heading title={heading} subtitle={subheading} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full px-4 xl:px-0">
          <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-black/5">
            <Image
              src={imageRight}
              alt={heading}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden bg-black/5">
            <Image
              src={imageLeft}
              alt={heading}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full flex gap-4 py-6 items-center justify-between flex-col md:flex-row md:flex-wrap p-0">
          {cards.map((card, index) => (
            <FeatureCard
                key={index}
                number={card.number}
                title={card.title}
                description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
