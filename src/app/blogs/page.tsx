import Hero from "@/components/Blog/Hero";
import FeaturedBlogs from "@/components/Blog/FeaturedBlogs";
import SearchAndFilter from "@/components/Blog/AllBlogs";

interface Blog {
  id: number;
  image: string;
  category: string;
  date: string;
  author: string;
  title: string;
  description: string;
}

const blogs: Blog[] = [
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
  },
  {
    id: 10,
    image: "/images/blog-card-thumbnail.png",
    category: "Design Tips",
    date: "Aug 21, 2025",
    author: "Sarah Malik",
    title: "How to Design Effective Digital Displays",
    description: "Great UI design improves readability and user engagement...",
  },
  {
    id: 11,
    image: "/images/blog-card-thumbnail.png",
    category: "Trends",
    date: "Sep 04, 2025",
    author: "Michael Kirnan",
    title: "AI Digital Signage Trends 2025",
    description: "Discover how AI-powered signage is transforming industries...",
  },
  {
    id: 12,
    image: "/images/blog-card-thumbnail.png",
    category: "Design Tips",
    date: "Aug 21, 2025",
    author: "Sarah Malik",
    title: "How to Design Effective Digital Displays",
    description: "Great UI design improves readability and user engagement...",
  },
  {
    id: 13,
    image: "/images/blog-card-thumbnail.png",
    category: "Data Insights",
    date: "Aug 21, 2025",
    author: "Sarah Malik",
    title: "How to Design Effective Digital Displays",
    description: "Great UI design improves readability and user engagement...",
  }
  // more blogs...
];
export default function AllBlogs() {
  return (
    <main className="min-h-screen bg-backgroundLight flex flex-col justify-start items-center  mt-0 md:mt-15">
        <Hero/>
        <FeaturedBlogs/>
        <SearchAndFilter blogs={blogs} />
    </main>
  );
}
