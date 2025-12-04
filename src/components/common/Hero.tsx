"use client";

import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dices } from "lucide-react";

type HeroProps = {
  badgeText?: string;
  heading?: string;
  subheading?: string;
  buttonText?: string;
  imageOneSrc?: string;
  imageTwoSrc?: string;
  imageOneAlt?: string;
  imageTwoAlt?: string;
  buttonShown?: boolean;
};

export default function Hero({
  badgeText = "signagex apps",
  heading = "Our Featured Apps",
  subheading = "Launch in minutes. Amplify your reach, influence and income.",
  buttonText = "Start Free Trail",
  imageOneSrc = "/images/Widget-hero-image-main.png",
  imageTwoSrc = "/images/Widget-hero-image-two.png",
  buttonShown = true,
}: HeroProps) {
  return (
    <section className="bg-white w-full flex items-center justify-center py-16 md:py-6">
      <div className="container mx-auto flex flex-col justify-center items-center xl:gap-4">
        
        <div className="flex flex-col justify-between items-center pb-8 gap-6 text-center">
          <Badge text={badgeText} icon={Dices} variant="outline" color="custom" />
          <Heading title={heading} subtitle={subheading} />
          {buttonShown &&
            <Button size="lg" color="purple">{buttonText}</Button>
          }
        </div>
        <div className="container flex flex-col md:flex-row justify-between gap-4 xl:gap-8 w-full px-4 xl:px-0">
          <Image
            src={imageOneSrc}
            className="w-full md:w-1/2 h-60 object-cover rounded-xl"
            alt="Hero Imge One"
            width={500}
            height={500}
          />

          <Image
            src={imageTwoSrc}
            className="w-full md:w-1/2 h-60 object-cover rounded-xl"
            alt="Hero Imge Two"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
