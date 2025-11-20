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
    <div className="w-full h-120 mx-auto bg-deep-purple-500 rounded-3xl text-center text-white p-8 md:p-10 flex flex-col items-center justify-start gap-4 shadow-lg transition-all duration-300 hover:scale-[1.02]">
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
        <div className="relative mt-6 flex items-center h-full justify-center w-full max-w-100 md:max-w-[320px] mx-auto">
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



// import React from "react";
// import Image from "next/image";

// interface SignageCardProps {
//   heading: string;
//   subtext: string;
//   imageSrc?: string;
//   showImage?: boolean;
// }

// const SignageCard: React.FC<SignageCardProps> = ({
//   heading,
//   subtext,
//   imageSrc = "/signagex.png", // default image
//   showImage = true,
// }) => {
//   return (
//     <div className="w-full h-120 mx-auto bg-deep-purple-500 rounded-3xl text-center text-white p-8 md:p-10 flex flex-col items-center justify-start gap-4 shadow-lg">
//       {/* Heading */}
//       <h2 className="text-xl md:text-2xl font-display font-semibold">{heading}</h2>

//       {/* Subtext */}
//       <p className="text-sm md:text-base text-[#D1C5E0] max-w-md font-sans">
//         {subtext}
//       </p>

//       {/* Image (optional) */}
//       {showImage && (
//         <div className="relative mt-4 flex justify-center">
//           <div className="absolute inset-0 bg-[#7F56D9] opacity-40 blur-2xl rounded-full w-40 h-40 mx-auto "></div>
//           <Image
//             src={imageSrc}
//             alt="SignageX"
//             className="relative z-10 h-full w-full"
//             width={600}
//             height={600}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignageCard;
