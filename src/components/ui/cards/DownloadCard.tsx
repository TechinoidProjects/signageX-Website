"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DownloadCardProps {
  href: string;
  logo: string;
  title: string;
  version: string;
}

export const DownloadCard: React.FC<DownloadCardProps> = ({
  href,
  logo,
  title,
  version,
}) => {
  return (
    <Link href={href}>
      <div
        className="
          w-full 
          bg-purple-25 
          rounded-2xl 
          p-6 
          flex flex-col items-center justify-center 
          text-center 
          transition-all 
          hover:shadow-md 
          hover:bg-neutral-100
          cursor-pointer
        "
      >
        {/* Logo */}
        <div className="w-12 h-12 relative mb-3">
          <Image src={logo} alt={title} fill className="object-contain" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        {/* Version */}
        <p className="text-sm text-gray-500 mt-1">{version}</p>
      </div>
    </Link>
  );
};
