import Hero from "@/components/Blog/Hero";
import FeaturedBlogs from "@/components/Blog/FeaturedBlogs";
export default function AllBlogs() {
  return (
    <main className="min-h-screen bg-backgroundLight flex flex-col justify-start items-center  mt-0 md:mt-15">
        <Hero/>
        <FeaturedBlogs/>
    </main>
  );
}
