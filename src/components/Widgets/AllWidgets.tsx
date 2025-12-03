"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices } from "lucide-react";
import WidgetBrowser from "@/components/Widgets/WidgetsBrowser";
import { WidgetItem } from "@/components/ui/cards/WidgetCard";

const widgetData: WidgetItem[] = [
  {
    id: "1",
    title: "Office Meeting",
    tag: "Clock",
    image: "/images/featuredImage1.jpg",
  },
  {
    id: "3",
    title: "Outdoor Branding",
    tag: "Entertainment",
    image: "/images/featuredImage2.jpg",
  },
  {
    id: "4",
    title: "Another Event",
    tag: "Finance",
    image: "/images/featuredImage3.jpg",
  },
  {
    id: "5",
    title: "Office Meeting",
    tag: "Maps",
    image: "/images/featuredImage4.jpg",
  },
  {
    id: "6",
    title: "Another Event",
    tag: "Meeting Room & Calendar",
    image: "/images/featuredImage1.jpg",
  },
  {
    id: "7",
    title: "Outdoor Branding",
    tag: "Menu Boards & Tables",
    image: "/images/featuredImage2.jpg",
  },
  {
    id: "8",
    title: "Product Showcase",
    tag: "Office",
    image: "/images/featuredImage3.jpg",
  },
   {
    id: "9",
    title: "Office Meeting",
    tag: "News",
    image: "/images/featuredImage1.jpg",
  },
  {
    id: "10",
    title: "Outdoor Branding",
    tag: "Clock",
    image: "/images/featuredImage3.jpg",
  },
  {
    id: "11",
    title: "Another Event",
    tag: "Events & Announcements",
    image: "/images/featuredImage4.jpg",
  },
];

export default function AllWidgets() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const PER_PAGE = 8;

  const filteredWidgets = useMemo(() => {
    return widgetData.filter((widget) => {
      const matchesTag = activeTag ? widget.tag === activeTag : true;
      return matchesTag;
    });
  }, [activeTag]);

  const totalPages = Math.ceil(filteredWidgets.length / PER_PAGE);

  const paginatedWidgets = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return filteredWidgets.slice(start, start + PER_PAGE);
  }, [filteredWidgets, page]);

  const handleTagChange = (tag: string | null) => {
    setActiveTag(tag);
    setPage(1);
  };

  return (
    <section className="bg-white w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className=" container mx-auto flex flex-col justify-center items-center  ">
        <div className="flex flex-col justify-between items-center pb-8 gap-2">
            {/* Badge */}
            <Badge
            text="browse"
            icon={Dices}
            variant="outline"
            color="custom"
            />

            {/* Heading */}
            <Heading
            title="All Widgets & Apps"
            subtitle="Browse all pre-built resources for you"
            />
        </div>
        <WidgetBrowser 
          items={paginatedWidgets} 
          allItems={widgetData}
          activeTag={activeTag}
          onTagChange={handleTagChange}
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
    </div>
    </section>
  );
}


        