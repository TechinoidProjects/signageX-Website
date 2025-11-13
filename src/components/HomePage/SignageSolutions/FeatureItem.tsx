import React from "react";
import { Dice2 } from "lucide-react";

interface FeatureItemProps {
  title: string;
  description: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <li className="flex items-start gap-3">
        <Dice2 className="text-gray-300 rounded-xl rotate-90"  />
      <p className="text-gray-700 text-[16px] font-medium leading-snug">
        {title}{" "}
        <span className="text-gray-500 font-normal">{description}</span>
      </p>
    </li>
  );
};
