"use client";

import Image from "next/image";

type PromoSectionProps = {
  imageSrc: string;
  heading: string;
  bgColor?: string;
  textColor?: 'text-gray-800' | 'text-white' | 'text-primary' | 'text-secondary' | 'text-accent';
  description: string;
  reverse?: boolean;
};

const PromoSection = ({
  imageSrc,
  heading,
  description,
  bgColor = "bg-white",
  textColor,
  reverse = false,
}: PromoSectionProps) => {
  const mdDirection = reverse ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div
      className={`w-full flex flex-col ${mdDirection} gap-6 md:gap-10 rounded-2xl container mx-auto`}
    >

      {/* Image */}
      <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative">
        <Image
          src={imageSrc}
          alt={heading}
          fill
          className="rounded-2xl object-cover"
        />
      </div>

      {/* Content */}
      <div className={`w-full md:w-1/2 ${bgColor || 'text-white'} flex flex-col md:justify-between p-6 md:p-8 rounded-2xl h-auto md:h-100 md:h-[400px]`}>
        <h2 className={`text-lg md:text-2xl font-display font-semibold ${textColor || 'text-gray-800'}`}>{heading}</h2>
        <p className={`${textColor ? `${textColor}/70` : 'text-gray-600'} font-sans mt-4 leading-relaxed text-base md:text-md`}>{description}</p>
      </div>

    </div>
  );
};

export default PromoSection;
