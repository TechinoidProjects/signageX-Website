"use client";

import Image from "next/image";
import { FC } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CustomPlanProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  imageSrc?: string;
  imageAlt?: string;
  showImage?: boolean;
  className?: string;
  href: string;
};

const CustomPlanCard: FC<CustomPlanProps> = ({
  icon,
  title,
  description,
  buttonText,
  imageSrc = "",
  imageAlt = "custom plan image",
  showImage = true,
  className,
  href,
}) => {
  const shouldShowImage = showImage && imageSrc !== "";

  return (
    <div
      className={cn(
        "w-full mx-auto bg-deep-purple-500 rounded-2xl text-white h-full relative overflow-hidden",
        className
      )}
    >
      {shouldShowImage && (
        <div className="masked-image absolute right-0 top-0 w-180 h-full ">
          <Image
            src="/images/masked-image.png"
            alt={imageAlt}
            width={1080}
            height={1080}
            className="object-contain"
          />
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-10">
        <div
          className={cn(
            "flex flex-col gap-4 px-6 py-10 h-full",
            shouldShowImage ? "md:w-1/2" : "md:w-full"
          )}
        >
          <div className="flex items-center gap-3">
            <div className="text-xl">{icon}</div>
            <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
          </div>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            {description}
          </p>

          <Button
              color="light"
              size="lg"
              className="mt-10 w-1/4"
              href={href}
          >
              {buttonText}
          </Button>
        </div>

        {shouldShowImage && (
          <div className="w-1/2 p-0 flex justify-center items-center">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1080}
              height={1080}
              className="object-contain h-full w-90"
            />
          </div>
        )}
      </div>
      
      
    </div>
  );
};

export default CustomPlanCard;
