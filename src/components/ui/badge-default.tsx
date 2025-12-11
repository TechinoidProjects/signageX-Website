import React from "react";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";


const COLOR_MAP = {
  purple: {
    solid: "bg-purple-100 text-purple-600 border-purple-200",
    outline: "bg-transparent text-purple-400 border-purple-400",
  },
  neutral:{
    solid: "bg-background-light text-neutral-500 border-0",
    outline: "bg-transparent text-neutral-500 border-neutral-400",
  },
  white:{
    solid: "bg-white text-purple-300 border-0",
    outline: "bg-transparent text-white border-white",
  },
  lightPurple: {
    solid: "bg-purple-100 text-purple-600 border-purple-200",
    outline: "bg-transparent text-purple-200 border-purple-200",
  },
  violet: {
    solid: "bg-violet-100 text-violet-600 border-violet-200",
    outline: "bg-transparent text-violet-400 border-violet-400",
  },
  indigo: {
    solid: "bg-indigo-100 text-indigo-600 border-indigo-200",
    outline: "bg-transparent text-indigo-400 border-indigo-400",
  },
  blue: {
    solid: "bg-blue-100 text-blue-600 border-blue-200",
    outline: "bg-transparent text-blue-400 border-blue-400",
  },
  sky: {
    solid: "bg-sky-100 text-sky-600 border-sky-200",
    outline: "bg-transparent text-sky-400 border-sky-400",
  },
  cyan: {
    solid: "bg-cyan-100 text-cyan-600 border-cyan-200",
    outline: "bg-transparent text-cyan-400 border-cyan-400",
  },
  teal: {
    solid: "bg-teal-100 text-teal-600 border-teal-200",
    outline: "bg-transparent text-teal-400 border-teal-400",
  },
  emerald: {
    solid: "bg-emerald-100 text-emerald-600 border-emerald-200",
    outline: "bg-transparent text-emerald-400 border-emerald-400",
  },
  green: {
    solid: "bg-green-100 text-green-600 border-green-200",
    outline: "bg-transparent text-green-400 border-green-400",
  },
  lime: {
    solid: "bg-lime-100 text-lime-600 border-lime-200",
    outline: "bg-transparent text-lime-400 border-lime-400",
  },
  yellow: {
    solid: "bg-yellow-100 text-yellow-700 border-yellow-200",
    outline: "bg-transparent text-yellow-500 border-yellow-500",
  },
  amber: {
    solid: "bg-amber-100 text-amber-700 border-amber-200",
    outline: "bg-transparent text-amber-500 border-amber-500",
  },
  orange: {
    solid: "bg-orange-100 text-orange-600 border-orange-200",
    outline: "bg-transparent text-orange-400 border-orange-400",
  },
  red: {
    solid: "bg-red-100 text-red-600 border-red-200",
    outline: "bg-transparent text-red-400 border-red-400",
  },
  rose: {
    solid: "bg-rose-100 text-rose-600 border-rose-200",
    outline: "bg-transparent text-rose-400 border-rose-400",
  },
  pink: {
    solid: "bg-pink-100 text-pink-600 border-pink-200",
    outline: "bg-transparent text-pink-400 border-pink-400",
  },
  fuchsia: {
    solid: "bg-fuchsia-100 text-fuchsia-600 border-fuchsia-200",
    outline: "bg-transparent text-fuchsia-400 border-fuchsia-400",
  },
  gray: {
    solid: "bg-gray-100 text-gray-600 border-gray-200",
    outline: "bg-transparent text-gray-500 border-gray-400",
  },
  grayPurple: {
    solid: "bg-gray-200 text-purple-600 border-gray-200",
    outline: "bg-transparent text-gray-500 border-gray-400",
  },
  zinc: {
    solid: "bg-zinc-100 text-zinc-700 border-zinc-200",
    outline: "bg-transparent text-zinc-500 border-zinc-400",
  },
  custom: {
    solid: "bg-purple-400/[0.04] text-purple-400 border-purple-75",
    outline: "bg-transparent text-purple-400 border-purple-200",
  }, 
  deepPurple: {
    solid: "bg-deep-purple-500 text-white border-deep-purple-500 border-0",
    outline: "bg-transparent text-deep-purple-500 border-deep-purple-500",
  }
} as const;

export type BadgeColor = keyof typeof COLOR_MAP;

interface BadgeProps {
  text: string;
  icon?: LucideIcon;
  showIcon?: boolean;       
  size?: "sm" | "md" | "lg";  // ⭐ NEW SIZE PROP
  variant?: "solid" | "outline";
  color?: BadgeColor;
  textColor?: string;
  borderColor?: string;
  bgColor?: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  text,
  icon: Icon,
  showIcon = true,
  size = "md",
  variant = "solid",
  color = "purple",
  textColor,
  borderColor,
  bgColor,
  className,
}) => {
  const palette = COLOR_MAP[color] ?? COLOR_MAP.purple;
  const variantClasses = variant === "solid" ? palette.solid : palette.outline;

  const sizeClasses = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-4 py-1.5 text-sm",
    lg: "px-5 py-2 text-base",
  }[size];

  const iconSize = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  }[size];

  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 rounded-full font-medium border transition-all my-3",
        variantClasses,
        sizeClasses,
        bgColor,
        textColor,
        borderColor,
        className
      )}
    >
      {Icon && showIcon && <Icon className={iconSize} />}

      <span className="uppercase">{text}</span>
    </div>
  );
};
