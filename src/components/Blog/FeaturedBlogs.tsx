import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices } from "lucide-react";
import BlogCard from "@/components/ui/cards/BlogCard";
import { blogs } from "@/lib/blogsData";

export default function FeaturedBlogs() {
  const featuredBlogs = blogs.filter((blog) => blog.isFeatured).slice(0, 3);
  return (
    <section className="bg-background-light w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className=" container mx-auto flex flex-col justify-center items-center  ">
        <div className="flex flex-col justify-between items-center pb-8 gap-2">
          {/* Badge */}
          <Badge
            text="Top Insights"
            icon={Dices}
            variant="outline"
            color="custom"
          />

          {/* Heading */}
          <Heading
            title="Featured Blogs"
            subtitle="Stay ahead with our expert picks on AI digital signage trends, strategies, and innovations."
          />
        </div>

        {featuredBlogs.length > 0 && (
          <BlogCard
            image={featuredBlogs[0].image}
            category={featuredBlogs[0].category}
            date={featuredBlogs[0].date}
            author={featuredBlogs[0].author}
            title={featuredBlogs[0].title}
            description={featuredBlogs[0].description}
            readMoreHref={`/blogs/${featuredBlogs[0].slug}`}
            readTime={featuredBlogs[0].readTime}
          />
        )}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:py-10">
          {featuredBlogs.slice(1, 3).map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              category={blog.category}
              date={blog.date}
              author={blog.author}
              title={blog.title}
              description={blog.description}
              readMoreHref={`/blogs/${blog.slug}`}
              readTime={blog.readTime}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
