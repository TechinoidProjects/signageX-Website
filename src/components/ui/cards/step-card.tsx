"use client";

import React, { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  title: string;
  description: string;
  icon?: LucideIcon; // Lucide icon component (e.g. Key, Zap)
  svg?: ReactNode; // Custom SVG element (alternative to icon)
  gradientClass?: string; // optional custom gradient override
}

const StepCard: React.FC<StepCardProps> = ({
  title,
  description,
  icon: Icon,
  svg,
  gradientClass = "bg-gradient-primary",
}) => {
  return (
    <div className="w-full md:max-w-[48%] lg:w-[31.7%] xl:max-w-[32%]">
      <div
        className={`relative w-full flex flex-col justify-between ${gradientClass} h-[417px] rounded-3xl shadow-card p-6 overflow-hidden transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl`}
      >
        {/* Nested Circles */}
        <div className="absolute bottom-40 md:bottom-50 xl:bottom-40 left-0 right-0 flex items-start justify-center pt-12 md:pt-8 xl:pt-12">
          {/* Large Circle */}
          <div className="flex justify-center items-center h-[435px] w-[435px] pt-[26px] pr-[87.5px] pb-[43px] pl-[87.5px] rounded-[10069px] bg-[linear-gradient(132deg,#2B1E4A_-18.69%,#3E305E_89.53%)]">
            {/* Middle Circle */}
            <div className="flex justify-center items-center w-[260px] h-[260px] p-[78px_55px_32px_55px] shrink-0 aspect-square rounded-[10000px] bg-[linear-gradient(180deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.10)_100%)] absolute top-45">
              {/* Small Circle */}
              <div className="flex items-center justify-center w-[150px] h-[150px] rounded-full bg-[#2B1B50] shadow-circle">
                {/* Icon / SVG */}
                {Icon ? (
                  <Icon
                    size={64}
                    strokeWidth={2.5}
                    className="text-[#A78BFA] drop-shadow-[0_0_24px_rgba(167,139,250,0.8)]"
                  />
                ) : (
                  svg
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="mt-auto text-left">
          <h2 className="text-white text-2xl font-bold mb-3 leading-tight">
            {title}
          </h2>
          <p className="text-gray-300 text-base leading-relaxed opacity-90">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
