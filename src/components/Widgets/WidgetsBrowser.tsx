"use client";

import React from "react";
import WidgetCard, { WidgetItem } from "@/components/ui/cards/WidgetCard";
import WidgetsFilters from "./WidgetFilters";
import Pagination from "@/components/Blog/Pagination";

interface WidgetsBrowserProps {
  items: WidgetItem[];
  allItems: WidgetItem[];
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function WidgetsBrowser({ 
  items, 
  allItems,
  activeTag, 
  onTagChange,
  page,
  totalPages,
  onPageChange
}: WidgetsBrowserProps) {
  const tags = Array.from(new Set(allItems.map((i) => i.tag)));

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6 mt-15">

      {/* Filters */}
      <WidgetsFilters
        tags={tags}
        activeTag={activeTag}
        setActiveTag={onTagChange}
      />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <WidgetCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <Pagination 
            page={page} 
            totalPages={totalPages} 
            onChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
}
