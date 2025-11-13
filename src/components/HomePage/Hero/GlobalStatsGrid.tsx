import React from "react";
import { ImageCard } from "../../ui/cards/ImageCard";
import { StatCard } from "../../ui/cards/StatCard";
import { CircleHighlight } from "./CircleHighlight";
import { Globe2, Users2, FileCode2 } from "lucide-react";

export const GlobalStatsGrid = () => {
  return (
    <section className="w-full bg-transparent py-12 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <ImageCard src="/images/signage-welcome-screen.png" alt="Display 1" />
          <StatCard
            icon={Globe2}
            value="25+"
            label="Countries Worldwide"
          />
        </div>

        {/* Center-left */}
        <div className="flex justify-end flex-col gap-4">
          <ImageCard src="/images/signage-wall-display.png" alt="Display 2" />

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
        <div className="flex justify-end flex-col gap-4">
          <ImageCard src="/images/signage-ad-screens.png" alt="Display 3" />
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4">
          <ImageCard src="/images/signage-widescreen.png" alt="Display 4" />
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
