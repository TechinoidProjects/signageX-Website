"use client";

import Image from "next/image";

type PromoSectionProps = {
  imageSrc: string;
  heading: string;
  description: string;
  reverse?: boolean;
};

const PromoSection = ({
  imageSrc,
  heading,
  description,
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
      <div className="w-full md:w-1/2 bg-white flex flex-col md:justify-between p-6 md:p-8 rounded-2xl h-auto md:h-100">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-800">{heading}</h2>
        <p className="text-gray-600 mt-4 leading-relaxed text-base md:text-md">{description}</p>
      </div>

    </div>
  );
};

export default PromoSection;
