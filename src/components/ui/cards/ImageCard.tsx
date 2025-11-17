import Image from "next/image";
import React from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ src, alt, className }) => {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden hidden md:block shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
