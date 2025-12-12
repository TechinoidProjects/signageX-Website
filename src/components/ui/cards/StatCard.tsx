import React from "react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  value,
  label,
  className,
}) => {
  return (
    <div
      className={`rounded-2xl text-white p-4 md:p-5 lg:p-6 text-center flex flex-col justify-center items-center
      shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-gradient-primary
      ${className}`}
    >
      <Icon className="w-6 h-6 mb-2 opacity-90" />
      <p className="text-xl md:text-2xl lg:text-3xl font-bold">{value}</p>
      <p className="text-xs md:text-sm opacity-90 mt-1">{label}</p>
    </div>
  );
};
