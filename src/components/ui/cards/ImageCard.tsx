import Image from "next/image";
import React from "react";

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
  imageHeight?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ src, alt, className, imageHeight }) => {
  return (
    <div
      className={`bg-white hidden md:block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className={`w-full ${imageHeight} object-cover`}
      />
    </div>
  );
};
