import { FC } from "react";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";

export interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  priceDuration?: string;
  licensesIncluded: number;
  extraLicenseCost: string;
  popular?: boolean;
  buttonLabel?: string;
  href?: string;
  icon?: React.ReactNode;
}

const PricingCard: FC<PricingCardProps> = ({
  title,
  subtitle,
  price,
  priceDuration = "/ month",
  licensesIncluded,
  extraLicenseCost,
  popular = false,
  buttonLabel = "Get Started",
  href = "#",
  icon,
}) => {
  return (
    <div className="w-full sm:w-[48%] lg:w-[32%] bg-background-light rounded-2xl shadow-md p-6 border border-transparent hover:border-purple-300 hover:border-2 hover:scale-[1.02] transition-all duration-100 flex flex-col gap-5">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-1 flex-col">
          <div className="flex items-center gap-2">
            {icon || <BadgeCheck className="text-purple-400 w-5 h-5" />}
            <h3 className="text-lg font-semibold font-display text-gray-900">{title}</h3>
          </div>
          <p className="text-sm text-neutral-300 font-sans">{subtitle}</p>
        </div>
        {popular && (
          <span className="text-xs bg-white text-purple-500 px-3 py-1 rounded-full">
            POPULAR
          </span>
        )}
      </div>

      <div className="text-3xl font-bold text-gray-700">
        {price}{" "}
        <span className="text-base font-medium text-gray-500">
          {priceDuration}
        </span>
      </div>

      <div className="flex justify-between items-center bg-white p-3 rounded-xl">
        <div>
          <p className="text-sm text-gray-800 font-medium">
            Number of license included:
          </p>
          <p className="text-xs text-gray-500">{extraLicenseCost}</p>
        </div>
        <div className="bg-purple-300 text-white text-lg font-semibold px-4 py-1 rounded-full">
          {licensesIncluded.toString().padStart(2, "0")}
        </div>
      </div>

      <Link
        href={href}
        className="w-full bg-gradient-primary text-white py-3 rounded-xl text-center font-semibold hover:opacity-90 transition"
      >
        {buttonLabel}
      </Link>
    </div>
  );
};

export default PricingCard;
