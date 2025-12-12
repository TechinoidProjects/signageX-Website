export type BlogSectionContent = {
  id: string;
  heading: string;
  paragraphs: string[];
  image: string;
};

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

  sections: BlogSectionContent[];
};

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "transform-your-restaurant-with-smart-digital-signage",
    image: "/images/blog-image-main.jpg",
    category: "Trends",
    date: "Sep 04, 2025",
    author: "Michael Kirnan",
    authorRole: "Senior Software Engineer",
    authorImage: "/images/avatar1.png", // added

    title: "Transform Your Restaurant with Smart Digital Signage",
    description:
      "Discover how SignageX can boost customer experience and streamline operations.",
    readTime: "6 min", // updated

    heroImage: "/images/blog-hero-restaurant.png",
    heroSubtitle:
      "Discover how SignageX can boost customer experience and streamline operations.",
    industry: "Restaurants",
    isFeatured: true,
    sections: [
      {
        id: "enhance-customer-experience",
        heading: "1. Enhance Customer Experience",
        paragraphs: [
          "Dynamic digital menu boards that update in real-time and enhance the customer ordering experience.",
          "Showcase high-quality visuals of your best-selling dishes to drive upsells at the point of decision.",
          "Reduce perceived wait times with engaging content, promotions, and entertainment on in-queue displays.",
        ],
        image: "/images/blog-image-main.jpg",
      },
      {
        id: "streamline-operations",
        heading: "2. Streamline Restaurant Operations",
        paragraphs: [
          "Automate menu changes based on time of day, inventory levels, or seasonal campaigns.",
          "Empower staff with centralized control over every screen across one or multiple locations.",
          "Minimize printing costs and manual updates with cloud-based content scheduling.",
        ],
        image: "/images/blog-main-mage-two.jpg",
      },
      {
        id: "measure-performance",
        heading: "3. Measure and Optimize Performance",
        paragraphs: [
          "Use built-in analytics to understand which promotions drive the most engagement and sales.",
          "Experiment with A/B testing on menu layouts, pricing, and featured items.",
          "Continuously refine your content strategy using real-time insights.",
        ],
        image: "/images/blog-main-image-three.jpg",
      },
    ],
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
    sections: [
      {
        id: "design-for-attention",
        heading: "1. Design for Attention",
        paragraphs: [
          "Use bold typography and contrast to make key messages legible from a distance.",
          "Limit the number of focal points on screen to avoid overwhelming viewers.",
        ],
        image: "/images/blog-hero-design.png",
      },
      {
        id: "optimize-layouts",
        heading: "2. Optimize Layouts for Readability",
        paragraphs: [
          "Follow a clear visual hierarchy with headings, subheadings, and concise body text.",
          "Align content with natural reading patterns to guide the eye smoothly across the screen.",
        ],
        image: "/images/blog-card-thumbnail.png",
      },
    ],
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
    isFeatured: true,
    sections: [
      {
        id: "capture-data",
        heading: "1. Capture the Right Data",
        paragraphs: [
          "Track impressions, dwell time, and interaction rates across your network of screens.",
          "Combine signage analytics with sales data to understand content performance.",
        ],
        image: "/images/blog-hero-data.png",
      },
      {
        id: "optimize-campaigns",
        heading: "2. Optimize Campaigns with Insights",
        paragraphs: [
          "Identify top-performing content and replicate winning patterns across locations.",
          "Continuously test new variations in messaging, layout, and timing.",
        ],
        image: "/images/blog-card-thumbnail.png",
      },
    ],
  },
];

export const getBlogBySlug = (slug: string) =>
  blogs.find((b) => b.slug === slug);

export const getBlogById = (id: number) =>
  blogs.find((b) => b.id === id);
