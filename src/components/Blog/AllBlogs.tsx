"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices, Search } from "lucide-react";
import BlogCard from "@/components/ui/cards/BlogCard";
import Pagination from "./Pagination";

const categories = [
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

interface Blog {
  id: number;
  image: string;
  category: string;
  date: string;
  author: string;
  title: string;
  description: string;
}

export default function SearchAndFilter({ blogs }: { blogs: Blog[] }) {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const PER_PAGE = 12;

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory = activeTab === "All" || blog.category === activeTab;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery, blogs]);

  const totalPages = Math.ceil(filteredBlogs.length / PER_PAGE);

  const paginatedBlogs = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return filteredBlogs.slice(start, start + PER_PAGE);
  }, [filteredBlogs, page]);

  return (
    <section className="bg-white w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className=" container mx-auto flex flex-col justify-center items-center  ">

    <div className="flex flex-col justify-between items-center pb-8 gap-2">
        {/* Badge */}
        <Badge
        text="Blogs"
        icon={Dices}
        variant="outline"
        color="custom"
        />

        {/* Heading */}
        <Heading
        title="All Blogs"
        subtitle=""
        />
    </div>
      <div className="flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-md w-full max-w-3xl">
        <Search className="h-4 w-4 text-neutral-300" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none text-gray-700 w-full"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setPage(1);
          }}
        />
        <button className="px-5 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
          Search
        </button>
      </div>

      <div className="flex flex-wrap mt-6 gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveTab(cat);
              setPage(1);
            }}
            className={`px-4 py-2 rounded-full text-sm transition-all border 
              ${
                activeTab === cat
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
        {filteredBlogs.length === 0 && 
          <p className="mt-12 text-gray-500">No blogs found.</p>
        }
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
        {paginatedBlogs.map((blog) => (
          <BlogCard key={blog.id} readMoreHref={`/blog/${blog.id}`}  direction="vertical" color = "invert" {...blog} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <Pagination
            page={page}
            totalPages={totalPages}
            onChange={(p) => setPage(p)}
          />
        </div>
      )}
    </div>
    </section>
  );
}


        