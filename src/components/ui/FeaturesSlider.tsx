"use client";
import React, { useState } from "react";
import Image from "next/image";

export type FeatureItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

interface FeaturesSliderProps {
  items: FeatureItem[];
}

const FeaturesSlider: React.FC<FeaturesSliderProps> = ({ items }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex h-[40vh] xl:h-[85vh] overflow-hidden gap-2 md:gap-6">
      {items.map((item, index) => {
        const isActive = index === active;
        return (
          <div
            key={item.id}
            onClick={() => setActive(index)}
            className={`
              relative flex items-end justify-center cursor-pointer transition-all duration-500
              ${
                isActive
                  ? "flex-4"
                  : "flex-1"
              }
              h-full overflow-hidden text-white bg-black rounded-2xl
            `}
          >
            <Image
              src={item.image}
              alt={item.title}
              height={1600}
              width={1600}
              className={`object-cover transition-all duration-500 h-full w-full ${
                isActive ? "opacity-100" : "opacity-75"
              }`}
            />
            {isActive && (
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-linear-to-t from-black/80 to-transparent">
                <h2 className="text-lg md:text-3xl font-semibold">{item.title}</h2>
                <p className="mt-1 md:mt-2 text-xs md:text-lg opacity-90">{item.description}</p>
              </div>
            )}

            {!isActive && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <p className="text-xl md:text-4xl font-display font-semibold rotate-90 whitespace-nowrap opacity-90">
                  {item.title}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesSlider;
