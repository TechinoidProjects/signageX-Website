"use client";

"use client";

import React from "react";
import { Clock, Receipt, Sparkles } from "lucide-react";
import { FeatureItem } from "@/lib/solutionsData";

const iconMap = {
  clock: Clock,
  receipt: Receipt,
  sparkles: Sparkles,
} as const;

type FeatureListProps = {
  items?: FeatureItem[];
  showDividers?: boolean;
};

const FeatureList: React.FC<FeatureListProps> = ({ items, showDividers = true }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center px-6 relative md:w-1/3"
        >
          {/* Icon */}
          <div className="bg-[#8B5CF6] p-3 rounded-xl flex items-center justify-center">
            {React.createElement(iconMap[item.icon], { className: 'w-6 h-6 text-white' })}
          </div>

          <h3 className="mt-4 text-[18px] font-semibold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-gray-600 max-w-[240px]">
            {item.description}
          </p>

          {showDividers && index < items.length - 1 && (
            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
