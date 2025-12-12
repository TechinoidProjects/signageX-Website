import { notFound } from "next/navigation";
import BlogDetailHero from "@/components/Blog/BlogDetailHero";
import { blogs } from "@/lib/blogsData";
import BlogContentLayout from "@/components/Blog/BlogContentLayout";

interface BlogSlugPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = await params;
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  const sections = blog.sections ?? [];

  return (
    <main className="min-h-screen bg-white flex flex-col items-center mt-0 md:mt-15">
      <BlogDetailHero
        badge={blog.industry ?? blog.category}
        title={blog.title}
        description={blog.heroSubtitle}
        author={{
          image: blog.authorImage,
          name: blog.author,
          designation: blog.authorRole,
        }}
        readTime={blog.readTime}
        date={blog.date}
        thumbnail={blog.image}
      />

      <BlogContentLayout sections={sections} />
    </main>
  );
}
