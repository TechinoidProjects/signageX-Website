"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Badge } from "../../ui/badge-default";

export type WhyChooseFeature = {
  id: string;
  title: string;
  tag: string;
  image: string;
  heading: string;
  subheading: string;
};

interface WhyChooseTabsProps {
  features?: WhyChooseFeature[];
  initialActiveId?: string;
}

/** Default fallback data */
const DEFAULT_FEATURES: WhyChooseFeature[] = [
  {
    id: "smart",
    title: "Smarter AI Tools",
    tag: "Innovation",
    image: "/images/about-image-one.png",
    heading: "Smarter AI Tools",
    subheading:
      "Our AI simplifies content creation and navigation. Build apps, widgets, and layouts in minutes.",
  },
  {
    id: "hardware",
    title: "Use Existing Hardware",
    tag: "COST-EFFICIENT",
    image: "/images/featuredImage1.jpg",
    heading: "Use Existing Hardware",
    subheading:
      "Our AI simplifies content creation and navigation. Build apps, widgets, and layouts in minutes.",
  },
  {
    id: "hub",
    title: "Centralized Management Hub",
    tag: "CONTROL",
    image: "/images/featuredImage2.jpg",
    heading: "Centralized Management Hub",
    subheading:
      "Organize, assign, and update screens from one unified dashboard with full automation.",
  },
  {
    id: "support",
    title: "Reliable 24/7 Support",
    tag: "TRUST",
    image: "/images/featuredImage3.jpg",
    heading: "Reliable Support",
    subheading:
      "Our support ensures smooth operations, uptime, and long-term stability for all deployments.",
  },
];

export const WhyChooseTabs = ({
  features = DEFAULT_FEATURES,
  initialActiveId = features[0].id,
}: WhyChooseTabsProps) => {
  const [active, setActive] = useState(initialActiveId);

  const activeData = features.find((f) => f.id === active)!;

  return (
    <section className="w-full flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-4 w-full">

        {/* Left Image */}
        <div className="w-full md:w-[35%] rounded-2xl overflow-hidden">
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
            <Image
              src={activeData.image}
              alt={activeData.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Tabs */}
        <div className="w-full md:w-[65%] flex flex-col gap-4">

          {features.map((item) => {
            const isActive = item.id === active;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all w-full ${
                  isActive ? "bg-background-light" : ""
                }`}
              >
                <button
                  onClick={() => setActive(item.id)}
                  className="w-full flex items-center justify-between px-4 py-4"
                >
                  <div className="flex flex-col w-full">
                    {!isActive && (
                      <div className="flex w-full items-center gap-4">
                        <span className="text-[15px] font-semibold text-neutral-800">
                          {item.title}
                        </span>
                        <Badge
                          text={item.tag}
                          variant="solid"
                          color="neutral"
                          showIcon={false}
                          size="sm"
                        />
                      </div>
                    )}

                    {isActive && (
                      <div className="w-full px-2 pb-5 pt-2">
                        <div className="flex flex-col gap-2 mb-2">
                          <div className="flex items-center gap-3">
                            <h3 className="md:text-lg text-md font-semibold text-neutral-800">
                              {item.heading}
                            </h3>

                            <Badge
                              text={item.tag}
                              variant="solid"
                              color="deepPurple"
                              showIcon={false}
                              size="sm"
                            />
                          </div>

                          <p className="text-neutral-600 leading-relaxed text-left">
                            {item.subheading}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="bg-purple-400 p-2 rounded-xl text-white max-w-lg">
                    {isActive ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
