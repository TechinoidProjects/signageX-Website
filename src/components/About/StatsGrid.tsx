import React from "react";
import { ImageCard } from "@/components/ui/cards/ImageCard";
import { StatCard } from "@/components/ui/cards/StatCard";
import { Globe2, Zap, File, Users } from "lucide-react";

export const GlobalStatsGrid = () => {
  return (
    <section className="w-full bg-transparent py-12 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="flex flex-col gap-4">
          <StatCard
            icon={Globe2}
            value="25+"
            label="Countries Worldwide"
            className="rounded-2xl md:rounded-full"
          />
          <ImageCard src="/images/about-grid-four.jpg" alt="Display 1" imageHeight="h-full"/>
        </div>

        <div className="flex flex-col gap-4">
          <ImageCard src="/images/about-grid-two.jpg" alt="Display 1" imageHeight="h-full"/>
          <StatCard
            icon={Zap}
            value="<1 sec"
            label="Update Speed"
            className="rounded-2xl"
          />
        </div>

        <div className="flex flex-col gap-4 h-full">
          <ImageCard src="/images/about-grid-one.jpg" alt="Display 1" imageHeight="h-full"/>
          <StatCard
            icon={File}
            value="50k+"
            label="Software Sold"
            className="rounded-2xl md:rounded-full md:h-[71%]!"
          />
        </div>

        <div className="flex flex-col gap-4">
          <ImageCard src="/images/about-grid-three.jpg" alt="Display 4" imageHeight="h-full"/>
          <StatCard
            icon={Users}
            value="50k+"
            label="Overall Clients"
            className="rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
};
