"use client";
import { Heading } from "./MainHeading"; 
import { Dice2, Dice1 } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

interface FreeTrialSectionProps {
  heading: string;
  subheading: string;
  buttonText: string;
}

const FreeTrialSection: React.FC<FreeTrialSectionProps> = ({
  heading,
  subheading,
  buttonText,
}) => {
  return (
    <section className=" relative w-full overflow-hidden py-20 md:py-28 bg-gradient-deep flex flex-col items-center text-center">
      
      <Dice2
        className="absolute z-1 top-[-70] left-[-80] text-purple-400/20 w-40 h-40 md:w-70 md:h-70 rotate-90"
        strokeWidth={1.5}
      />
      <div className="md:flex bg-deep-purple-500 rotate-180 shadow-sm h-15 w-15 md:h-25 md:w-25 md:rounded-2xl rounded-xl absolute md:top-30 md:left-30 top-10 left-5"></div>

      <Dice1
        className="absolute z-1 top-60 right-[-50] md:right-[-150] text-purple-400/20 w-40 h-40 md:w-70 md:h-70 rotate-90"
        strokeWidth={1.5}
      />
      <div className="bg-deep-purple-500 rotate-180 shadow-sm h-25 w-25 rounded-2xl absolute top-60 right-15"></div>

      {/* CONTENT */}
      <Heading
        title={heading}
        subtitle={subheading}
        titleColorClass="text-white"
        subtitleColorClass="text-white/80"
        size="lg"
      /> 
      <Button
        color="white"
        size="lg"
        className="mt-5 mx-auto"
        href="#"
      >
        {buttonText}
      </Button>
    </section>
  );
};

export default FreeTrialSection;
