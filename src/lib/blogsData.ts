export type Blog = {
  id: number;
  slug: string;
  image: string;
  category: string;
  date: string;

  author: string;
  authorRole: string;
  authorImage: string; // NEW FIELD

  title: string;
  description: string;
  readTime: string;

  heroImage: string;
  heroSubtitle: string;

  industry?: string;
  isFeatured?: boolean;
};

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "ai-digital-signage-trends-2025",
    image: "/images/blog-image-main.jpg",
    category: "Trends",
    date: "Sep 04, 2025",
    author: "Michael Kirnan",
    authorRole: "Senior Software Engineer",
    authorImage: "/images/authors/michael.png", // added

    title: "AI Digital Signage Trends 2025",
    description:
      "Discover how AI-powered digital signage is transforming industries...",
    readTime: "6 min", // updated

    heroImage: "/images/blog-hero-restaurant.png",
    heroSubtitle:
      "Discover how SignageX can boost customer experience and streamline operations.",
    industry: "Restaurants",
    isFeatured: true,
  },
  {
    id: 2,
    slug: "design-effective-digital-displays",
    image: "/images/blog-card-thumbnail.png",
    category: "Design Tips",
    date: "Aug 21, 2025",
    author: "Sarah Malik",
    authorRole: "Product Designer",
    authorImage: "/images/authors/sarah.png", // added

    title: "How to Design Effective Digital Displays",
    description: "Great UI design improves readability and user engagement...",
    readTime: "7 min", // updated

    heroImage: "/images/blog-hero-design.png",
    heroSubtitle:
      "Practical tips to design high-impact layouts for modern digital signage.",
    industry: "Design",
    isFeatured: true,
  },
  {
    id: 3,
    slug: "data-insights-digital-signage",
    image: "/images/blog-card-thumbnail.png",
    category: "Data Insights",
    date: "Aug 21, 2025",
    author: "Sarah Malik",
    authorRole: "Product Designer",
    authorImage: "/images/authors/sarah.png", // added

    title: "Unlocking Data Insights with Digital Signage",
    description:
      "Learn how analytics-driven signage helps you optimize content and ROI.",
    readTime: "5 min", // updated

    heroImage: "/images/blog-hero-data.png",
    heroSubtitle:
      "Turn your displays into a powerful data and experimentation channel.",
    industry: "Analytics",
    isFeatured: false,
  },
];

export const getBlogBySlug = (slug: string) =>
  blogs.find((b) => b.slug === slug);

export const getBlogById = (id: number) =>
  blogs.find((b) => b.id === id);
