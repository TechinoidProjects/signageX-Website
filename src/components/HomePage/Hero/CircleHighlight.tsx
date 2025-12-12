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
      className={`rounded-2xl lg:rounded-full p-4 md:p-6 lg:aspect-square flex flex-col items-center justify-center text-white text-center
      shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300
      bg-gradient-primary
      ${className}`}
    >
      <Icon className="lg:w-15 lg:h-15 w-7 h-7 mb-2 opacity-90" />
      <p className="text-xl lg:text-2xl lg:text-3xl font-bold">{value}</p>
      <p className="text-xs lg:text-sm opacity-90">{label}</p>
    </div>
  );
};
