import React from "react";
import clsx from "clsx";

interface FeatureCardProps {
  number: string; // e.g. "01"
  title: string; // e.g. "AI-Powered Signage"
  description: string; // e.g. "Design smart layouts and automate content..."
  className?: string; // optional custom styling
  highlightColor?: string; // e.g. "text-purple-500"
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  number,
  title,
  description,
  className,
  highlightColor = "text-purple-500",
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-start justify-center bg-white rounded-xl shadow-sm px-6 py-5 h-full md:h-30 w-full md:max-w-[32%] transition-all duration-300 hover:shadow-md",
        className
      )}
    >
      <h3 className="flex items-baseline space-x-2">
        <span className={clsx("font-semibold text-lg", highlightColor)}>
          {number}
        </span>
        <span className="font-semibold text-neutral-800 text-lg">
          {title}
        </span>
      </h3>
      <p className="text-sm text-neutral-500 mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
