import React from "react";
import clsx from "clsx";

interface HeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  titleColorClass?: string;    // Tailwind class for heading
  subtitleColorClass?: string; // Tailwind class for subtitle
}

export const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  align = "center",
  size = "xl",
  className,
  titleColorClass = "text-neutral-500",     // default Tailwind class
  subtitleColorClass = "text-neutral-300", // default Tailwind class
}) => {
  const sizes = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
    xl: "text-[56px] leading-[58px]",
  };

  return (
    <div
      className={clsx(
        "flex flex-col",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        align === "right" && "items-end text-right",
        className
      )}
    >
      <h2
        className={clsx(
          "font-display font-semibold max-w-[900px]",
          sizes[size],
          titleColorClass
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-3 text-[20px] font-[Lato] max-w-[818px]",
            subtitleColorClass
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
