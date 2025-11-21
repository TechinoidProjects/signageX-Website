"use client";

import { useState } from "react";

interface Blog {
  id: number;
  title: string;
  description: string;
  category: string;
}

interface BlogFiltersProps {
  blogs: Blog[];
  onFilter: React.Dispatch<React.SetStateAction<Blog[]>>;
}

const TABS = [
  "All",
  "Trends",
  "AI Signage",
  "Use Cases",
  "Design Tips",
  "Tech Guides",
  "Best Practices",
  "Success Stories",
  "Data Insights",
];

export default function BlogFilters({ blogs, onFilter }: BlogFiltersProps) {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const handleFilter = (tab: string, searchValue: string) => {
    let result = blogs;

    // Filter by category
    if (tab !== "All") {
      result = result.filter((b) => b.category === tab);
    }

    // Search filter
    if (searchValue.trim() !== "") {
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          b.description.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    onFilter(result);
  };

  const onTabClick = (tab: string) => {
    setActiveTab(tab);
    handleFilter(tab, search);
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearch(val);
    handleFilter(activeTab, val);
  };

  return (
    <div className="w-full space-y-5">

      {/* Search Bar */}
      <div className="flex items-center gap-3 bg-white border rounded-full px-5 py-3 shadow-sm">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={onSearchChange}
          className="flex-1 outline-none text-gray-600"
        />

        <button className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm">
          Search
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabClick(tab)}
            className={`px-5 py-2 text-sm rounded-full border transition-all
              ${
                activeTab === tab
                  ? "bg-purple-600 text-white border-purple-600 shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
