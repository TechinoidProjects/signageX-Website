"use client";

import Image from "next/image";
import { Button } from "../button";
import React from "react";

interface UseCaseCardProps {
  imageSrc: string;
  title: string;
  description: string;
  buttonText?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  imageSrc,
  title,
  description,
  buttonText = "View Details",
  className,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm mx-auto p-4 flex flex-col gap-4 ${className}`}
    >
      {/* Image */}
      <div className="w-full h-48 relative">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 bg-background-light rounded-xl">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

        <p className="text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
        <Button size="lg" color="purple"  href="#" className="w-full">
          {buttonText}
        </Button>
        
      </div>
    </div>
  );
};

export default UseCaseCard;
