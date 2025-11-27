import React from "react";
import Image from "next/image";
import { Heading } from "@/components/common/MainHeading";

interface SignageCardProps {
  heading: string;
  subtext: string;
  imageSrc?: string;
  showImage?: boolean;
}

const SignageCard: React.FC<SignageCardProps> = ({
  heading,
  subtext,
  imageSrc = "/signagex.png",
  showImage = true,
}) => {
  return (
    <div className="w-full h-full md:h-120 mx-auto bg-deep-purple-500 rounded-3xl text-center text-white p-8 md:p-10 flex flex-col items-center justify-start gap-4 shadow-lg transition-all duration-300 hover:scale-[1.02]">
      {/* Heading */}
      <Heading 
        title={heading}
        subtitle={subtext}
        titleColorClass="text-white"
        subtitleColorClass="text-white"
        size="sm"
      />
      

      {/* Image (optional) */}
      {showImage && (
        <div className="relative mt-6 flex items-center h-full justify-center w-full max-w-[55%] mx-auto">
          <div className="absolute inset-0 bg-[#7F56D9] opacity-40 blur-2xl rounded-full w-3/4 h-3/4 mx-auto" />
          <Image
            src={imageSrc}
            alt="SignageX"
            className="relative z-10 w-full h-auto object-contain"
            width={400}
            height={400}
            priority
          />
        </div>
      )}
    </div>
  );
};

export default SignageCard;
