import React from "react";
import Image from "next/image";
import { Heading } from "@/components/common/MainHeading";

interface SignageCardProps {
  heading: string;
  subtext: string;
  imageSrc?: string;
  showImage?: boolean;
  ImgclassName?: string;
}

const SignageCard: React.FC<SignageCardProps> = ({
  heading,
  subtext,
  imageSrc = "/signagex.png",
  showImage = true,
  ImgclassName = "",
}) => {
  return (
    <div className="w-full h-full mx-auto bg-deep-purple-500 rounded-3xl text-center text-white p-8 md:p-10 flex flex-col items-center justify-start gap-4 shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <Heading 
        title={heading}
        subtitle={subtext}
        titleColorClass="text-white"
        subtitleColorClass="text-white"
        size="sm"

      />
      
      {showImage && (
        <div className={`relative mt-6 flex items-center h-full justify-center w-full max-w-1/2 ${ImgclassName}`}>
          <div className="absolute inset-0 bg-[#7F56D9] opacity-40 blur-2xl rounded-full " />
          <Image
            src={imageSrc}
            alt="SignageX"
            className="relative z-10 w-full h-auto object-contain"
            width={600}
            height={600}
            priority
          />
        </div>
      )}
    </div>
  );
};

export default SignageCard;