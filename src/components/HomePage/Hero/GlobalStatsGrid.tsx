import React from "react";
import { ImageCard } from "../../ui/cards/ImageCard";
import { StatCard } from "../../ui/cards/StatCard";
import { CircleHighlight } from "./CircleHighlight";
import { Globe2, Users2, FileCode2 } from "lucide-react";

export const GlobalStatsGrid = () => {
  return (
    <section className="w-full bg-transparent py-8 md:py-10 lg:py-12 ">
      {/* Mobile / tablet & landscape phones: show only stats in a single row, hide images */}
      <div className="flex lg:hidden flex-col md:flex-row gap-3 md:gap-4 justify-center items-stretch">
        <div className="flex-1 min-w-0">
          <CircleHighlight
            icon={Users2}
            value="500+"
            label="Clients Worldwide"
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-3 md:gap-4">
          <StatCard icon={Globe2} value="25+" label="Countries Worldwide" />
          <StatCard icon={FileCode2} value="50k+" label="Software Sold" />
        </div>
      </div>

      {/* Desktop: full image + stats grid */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
        
        {/* Left column */}
        <div className="flex flex-col gap-3 md:gap-4">
          <ImageCard src="/images/signage-welcome-screen.png" alt="Display 1" className="md:max-w-[260px] lg:max-w-none" />
          <StatCard
            icon={Globe2}
            value="25+"
            label="Countries Worldwide"
          />
        </div>

        {/* Center-left */}
        <div className="flex justify-end flex-col gap-3 md:gap-4">
          <ImageCard src="/images/signage-wall-display.png" alt="Display 2" className="md:max-w-[260px] lg:max-w-none" />

        </div>

        {/* Center Circle */}
        <div className="flex justify-end flex-col gap-4">
          <CircleHighlight
            icon={Users2}
            value="500+"
            label="Clients Worldwide"
          />
        </div>

        {/* Center-right */}
        <div className="flex justify-end flex-col gap-3 md:gap-4">
          <ImageCard src="/images/signage-ad-screens.png" alt="Display 3" className="md:max-w-[260px] lg:max-w-none" />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-3 md:gap-4">
          <ImageCard src="/images/signage-widescreen.png" alt="Display 4" className="md:max-w-[260px] lg:max-w-none" />
          <StatCard
            icon={FileCode2}
            value="50k+"
            label="Software Sold"
          />
        </div>
      </div>
    </section>
  );
};
