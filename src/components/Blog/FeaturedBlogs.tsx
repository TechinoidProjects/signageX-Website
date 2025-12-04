import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices } from "lucide-react";
import BlogCard from "@/components/ui/cards/BlogCard";

export default function FeaturedBlogs() {
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

        <BlogCard
          image="/images/blog-card-image-one.png"
          category="Restaurants"
          date="Sep 04, 2025"
          author="Michael Kirnan"
          title="AI Digital Signage Trends 2025"
          description="Discover how AI-powered digital signage software is shaping the future of retail, healthcare, and education, driving engagement and saving costs with smarter displays."
          readMoreHref="/blogs/ai-digital-signage"
          readTime="8"

        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:py-10">
          <BlogCard
                image="/images/blog-card-image-two.png"
                category="Restaurants"
                date="Sep 04, 2025"
                author="Michael Kirnan"
                title="AI Digital Signage Trends 2025"
                description="Discover how AI-powered digital signage software is shaping the future of retail, healthcare, and education, driving engagement and saving costs with smarter displays."
                readMoreHref="/blogs/ai-digital-signage"
                readTime="8"

            />
          <BlogCard
                image="/images/blog-card-image-three.png"
                category="Restaurants"
                date="Sep 04, 2025"
                author="Michael Kirnan"
                title="AI Digital Signage Trends 2025"
                description="Discover how AI-powered digital signage software is shaping the future of retail, healthcare, and education, driving engagement and saving costs with smarter displays."
                readMoreHref="/blogs/ai-digital-signage"
                readTime="8"

            />
        </div>
      </div>
    </section>
  );
}
