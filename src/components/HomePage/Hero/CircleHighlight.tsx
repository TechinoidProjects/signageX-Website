import React from "react";
import { LucideIcon } from "lucide-react";

interface CircleHighlightProps {
  icon: LucideIcon;
  value: string;
  label: string;
  className?: string;
}

export const CircleHighlight: React.FC<CircleHighlightProps> = ({
  icon: Icon,
  value,
  label,
  className,
}) => {
  return (
    <div
      className={`rounded-full aspect-square flex flex-col items-center justify-center text-white text-center
      shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300
      bg-gradient-primary
      ${className}`}
    >
      <Icon className="w-15 h-15 md:w-7 md:h-7 mb-2 opacity-90" />
      <p className="text-4xl md:text-2xl font-bold">{value}</p>
      <p className="text-xl md:text-sm opacity-90">{label}</p>
    </div>
  );
};
