import React from "react";
import clsx from "clsx";
import SignageCard from "@/components/ui/cards/SignageCard";

interface StepCardProps {
  stepNumber: string;
  heading: string;
  subtext: string;
  isOdd: boolean;
  imageSrc?: string;
  showImage?: boolean;
}

export const StepCard: React.FC<StepCardProps> = ({
  stepNumber,
  heading,
  subtext,
  isOdd,
  imageSrc,
  showImage,
}) => {
  return (
    <div
      className={clsx(
        "flex gap-4 md:items-center md:gap-10 w-full",
        isOdd ? "flex-row" : "flex-row-reverse"
      )}
    >
      <span
        className={clsx(
          "pointer-events-none w-[30%] font-display text-[10em] md:text-[22em] font-semibold uppercase leading-none text-center text-white/17",
          isOdd ? "md:-ml-6" : "md:-mr-6"
        )}
      >
        {stepNumber}
      </span>

      <div className="relative w-[70%]">
        <SignageCard
          heading={heading}
          subtext={subtext}
          imageSrc={imageSrc}
          showImage={showImage}
          ImgclassName="hidden md:flex!"
        />
      </div>
    </div>
  );
};
