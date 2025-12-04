"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices, ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "@/components/ui/cards/BlogCard";

interface Blog {
  id: number;
  image: string;
  category: string;
  date: string;
  author: string;
  title: string;
  description: string;
}

const educationalBlogs: Blog[] = [
  {
    id: 1,
    image: "/images/blog-card-thumbnail.png",
    category: "Trends",
    date: "Sep 04, 2025",
    author: "Michael Kirnan",
    title: "AI Digital Signage Trends 2025",
    description: "Discover how AI-powered signage is transforming industries...",
  },
  {
    id: 2,
    image: "/images/blog-card-thumbnail.png",
    category: "Design Tips",
    date: "Aug 21, 2025",
    author: "Sarah Malik",
    title: "How to Design Effective Digital Displays",
    description: "Great UI design improves readability and user engagement...",
  },
  {
    id: 3,
    image: "/images/blog-card-thumbnail.png",
    category: "Trends",
    date: "Sep 04, 2025",
    author: "Michael Kirnan",
    title: "AI Digital Signage Trends 2025",
    description: "Discover how AI-powered signage is transforming industries...",
  },
  {
    id: 4,
    image: "/images/blog-card-thumbnail.png",
    category: "Design Tips",
    date: "Aug 21, 2025",
    author: "Sarah Malik",
    title: "How to Design Effective Digital Displays",
    description: "Great UI design improves readability and user engagement...",
  },
  {
    id: 5,
    image: "/images/blog-card-thumbnail.png",
    category: "Trends",
    date: "Sep 04, 2025",
    author: "Michael Kirnan",
    title: "AI Digital Signage Trends 2025",
    description: "Discover how AI-powered signage is transforming industries...",
  },
  {
    id: 6,
    image: "/images/blog-card-thumbnail.png",
    category: "Design Tips",
    date: "Aug 21, 2025",
    author: "Sarah Malik",
    title: "How to Design Effective Digital Displays",
    description: "Great UI design improves readability and user engagement...",
  },
  {
    id: 7,
    image: "/images/blog-card-thumbnail.png",
    category: "Trends",
    date: "Sep 04, 2025",
    author: "Michael Kirnan",
    title: "AI Digital Signage Trends 2025",
    description: "Discover how AI-powered signage is transforming industries...",
  },
  {
    id: 8,
    image: "/images/blog-card-thumbnail.png",
    category: "Design Tips",
    date: "Aug 21, 2025",
    author: "Sarah Malik",
    title: "How to Design Effective Digital Displays",
    description: "Great UI design improves readability and user engagement...",
  },
  {
    id: 9,
    image: "/images/blog-card-thumbnail.png",
    category: "Trends",
    date: "Sep 04, 2025",
    author: "Michael Kirnan",
    title: "AI Digital Signage Trends 2025",
    description: "Discover how AI-powered signage is transforming industries...",
  }
];

const BLOGS_PER_PAGE = 3;

export default function EducationalBlogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(educationalBlogs.length / BLOGS_PER_PAGE);

  // Get current blogs
  const indexOfLastBlog = currentPage * BLOGS_PER_PAGE;
  const indexOfFirstBlog = indexOfLastBlog - BLOGS_PER_PAGE;
  const currentBlogs = educationalBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Generate page dots
  const renderPageDots = () => {
    return Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        onClick={() => paginate(i + 1)}
        className={`w-2 h-2 rounded-full transition-colors ${
          currentPage === i + 1 ? 'bg-primary' : 'bg-gray-300'
        }`}
        aria-label={`Go to page ${i + 1}`}
      />
    ));
  };

  return (
    <section className="bg-white w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col justify-between items-center pb-8 gap-2">
          <Badge text="From Blogs" icon={Dices} variant="outline" color="custom" />

          <Heading
            title="Resources For Education"
            subtitle="Learn from the articles"
          />
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {currentBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              category={blog.category}
              date={blog.date}
              author={blog.author}
              title={blog.title}
              description={blog.description}
              readMoreHref={`/blogs/${blog.id}`}
              direction="vertical"
              color="invert"
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between w-full mt-8">
            <div className="flex items-center gap-2">
              {renderPageDots()}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center ${
                  currentPage === 1 ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center ${
                  currentPage === totalPages ? 'text-gray-300' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}