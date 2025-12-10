"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown, Dices } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";

type Tab = {
  id: string;
  title: string;
  image: string;
  heading: string;
  subheading: string;
};

interface FeatureTabsProps {
  tabs?: Tab[];                  
  badgeText?: string;
  heading?: string;
  subheading?: string;
}

const tabsData: Tab[] = [
  {
    id: "layout",
    title: "AI Layout Generation",
    image: "/images/featuredImage1.jpg",
    heading: "Create Designs with a Single Prompt",
    subheading:
      "Describe your idea, and our AI instantly generates professional layouts. Ready to customize or publish in seconds.",
  },
  {
    id: "canvas",
    title: "Custom Canvas Design",
    image: "/images/featuredImage2.jpg",
    heading: "Build Custom Canvas Easily",
    subheading:
      "Design and customize canvases that perfectly match your creative workflow using our intuitive builder.",
  },
  {
    id: "apps",
    title: "Pre-built Apps",
    image: "/images/featuredImage3.jpg",
    heading: "Use Ready-Made Templates",
    subheading:
      "Speed up development with pre-built components and app templates optimized for your workflow.",
  },
  {
    id: "dynamic",
    title: "Dynamic Layouts",
    image: "/images/featuredImage4.jpg",
    heading: "Adaptive Design System",
    subheading:
      "Our layouts automatically adapt to your content, ensuring perfect balance and alignment.",
  },
  {
    id: "data",
    title: "Data Builder / Schema",
    image: "/images/featuredImage5.jpg",
    heading: "Manage Data with Ease",
    subheading:
      "Create, manage, and bind data structures directly to your designs with visual schema editing tools.",
  },
];

export const FeatureTabs: React.FC<FeatureTabsProps> = ({
  tabs = tabsData,
  badgeText = "Effortless",
  heading = "Faster Design. Simpler Control",
  subheading = "Create, update, and manage visuals in a few clicks.",
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
  const activeContent = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className="container mx-auto flex flex-col justify-center items-center md:gap-4">
        <div className="flex flex-col justify-between items-center pb-2 md:pb-16 gap-2 md:gap-6">
          <Badge text={badgeText} icon={Dices} variant="outline" color="custom" />
          <Heading title={heading} subtitle={subheading} />
        </div>
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto py-10 ">
          <div className="w-full lg:w-1/3 bg-white">
            <ul className="flex flex-col gap-2">
              {tabs.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-left font-medium
                        ${
                          isActive
                            ? "bg-purple-25 text-neutral-500 rounded-xl"
                            : "text-gray-700 border-b border-neutral-75"
                        }`}
                    >
                      <span>{tab.title}</span>
                      {isActive ? (
                        <div className="bg-purple-300 p-1 rounded-xl">
                          <ChevronRight className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="bg-purple-300 p-1 rounded-xl">
                          <ChevronDown className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="w-full relative h-[400px]">
              {activeContent?.image && (
                <Image
                  src={activeContent.image}
                  alt={activeContent?.title || 'Feature image'}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-display font-semibold text-gray-900 mb-2">
                {activeContent?.heading || 'No content available'}
              </h2>
              <p className="text-gray-600 font-sans">
                {activeContent?.subheading || ''}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
