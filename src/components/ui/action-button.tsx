import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import clsx from "clsx";

export type ActionButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "gradientGhost";
export type ActionButtonSize = "sm" | "md" | "lg";

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: ActionButtonVariant;
  size?: ActionButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  href,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  isLoading = false,
  disabled,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed";

  const variants: Record<ActionButtonVariant, string> = {
    primary:
      "text-white bg-[linear-gradient(92deg,#0F0031_-5.73%,#413263_120.63%)] hover:opacity-90",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white",
    outline:
      "border border-gray-400 text-gray-800 hover:bg-gray-100 dark:text-white dark:border-gray-700",
    ghost:
      "text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800",
    gradientGhost: "text-deep-purple-500 hover:bg-gray-100 ",
  };

  const sizes: Record<ActionButtonSize, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-base",
    lg: "h-12 px-6 text-lg",
  };

  const content = (
    <>
      {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
      {!isLoading && iconLeft && <span className="shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {!isLoading && iconRight && <span className="shrink-0">{iconRight}</span>}
    </>
  );

  const buttonClasses = clsx(
    baseStyles,
    variants[variant],
    sizes[size],
    className,
    "gap-2 font-[Lato] w-70"
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};
