"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface IndustryCardProps {
  imageSrc: string;
  title: string;
  href?: string;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  imageSrc,
  title,
  href = "#",
}) => {
  return (
    <div
      className="w-full h-full container mx-auto rounded-xl bg-background-light shadow-sm 
        transition hover:shadow-md hover:-translate-y-1 flex flex-col p-3"
    >
      {/* Image Container */}
      <div className="w-full p-0 mb-2">
        <div className="relative w-full h-75 sm:h-90 md:h-100 rounded-2xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            height={1080}
            width={1080}
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom Area */}
      <Link className="w-full flex items-center justify-between px-4 py-2 bg-gradient-primary rounded-xl " href={href}>
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <button className="w-9 h-9 rounded-full bg-[#452D7B] text-white 
                           flex items-center justify-center transition 
                           hover:bg-[#452D7B]/90" >
          <ArrowUpRight size={18} />
        </button>
      </Link>
    </div>
  );
};
