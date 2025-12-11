import { notFound } from "next/navigation";
import BlogDetailHero from "@/components/Blog/BlogDetailHero";
import { blogs } from "@/lib/blogsData";

interface BlogSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = await params;
const blog = blogs.find((item) => item.slug === slug)

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white flex flex-col items-center mt-0 md:mt-15">
      <BlogDetailHero
        badge="Restaurants"
        title="Transform Your Restaurant with Smart Digital Signage"
        description="Discover how SignageX can boost customer experience and streamline operations."
        author={{
          image: "/images/avatar1.png",
          name: "Michael Kirnan",
          designation: "Senior Software Engineer",
        }}
        readTime="6 min"
        date="Sep 04, 2025"
        thumbnail="/images/blog-image-main.jpg"
        />
    </main>
  );
}
