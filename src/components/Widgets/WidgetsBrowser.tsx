"use client";

import React, { useState } from "react";
import WidgetCard, { WidgetItem } from "@/components/ui/cards/WidgetCard";
import WidgetsFilters from "./WidgetFilters";

interface WidgetsBrowserProps {
  items: WidgetItem[];
}

export default function WidgetsBrowser({ items }: WidgetsBrowserProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = Array.from(new Set(items.map((i) => i.tag)));

  const filtered = items.filter((item) => {
    const matchesTag = activeTag ? item.tag === activeTag : true;
    return matchesTag;
  });

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6 mt-15">

      {/* Filters */}
      <WidgetsFilters
        tags={tags}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
      />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <WidgetCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
