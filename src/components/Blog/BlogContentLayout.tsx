"use client";
import React from "react";
import BlogSection from "./BlogSection";

export type BlogContentSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  image?: string;
};

interface BlogContentLayoutProps {
  sections: BlogContentSection[];
  sidebarTitle?: string;
}

const BlogContentLayout: React.FC<BlogContentLayoutProps> = ({
  sections,
  sidebarTitle = "On this page",
}) => {
  return (
    <section className="w-full flex md:flex-row flex-col container mx-auto gap-10 md:gap-16 py-16 md:px-0 px-4">
      <aside className="md:sticky md:top-24 w-full md:w-[35%] self-start gap-2 flex flex-col">
        <h3 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
          {sidebarTitle}
        </h3>

        <nav className="space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {section.heading}
            </a>
          ))}
        </nav>
      </aside>

      <div className="w-full md:w-[65%]">
        {sections.map((section) => (
          <BlogSection
            key={section.id}
            id={section.id}
            heading={section.heading}
            paragraphs={section.paragraphs}
            image={section.image}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogContentLayout;
