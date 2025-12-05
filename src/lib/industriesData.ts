export type IndustryPromoSection = {
  imageSrc: string;
  heading: string;
  description: string;
  reverse?: boolean;
};

export type Card = {
  id: number;
  image: string;
  title: string;
};

export type Industry = {
  slug: string;
  title: string;
  subheading?: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
  promoSections?: IndustryPromoSection[];
  tabs?: Tab[];
  cards?: Card[];
  features?: WhyChooseFeature[];
};

export type WhyChooseFeature = {
  id: string;
  title: string;
  tag: string;
  image: string;
  heading: string;
  subheading: string;
};

export type Tab = {
  id: string;
  title: string;
  image: string;
  heading: string;
  subheading: string;
};


export const industries: Industry[] = [
  {
    slug: "retail",
    title: "Retail",
    subheading: "Retail",
    description:
      "Retail digital signage displays showcase real-time discounts, seasonal promotions, and new arrivals, driving impulse purchases and increasing foot traffic.",
    imageSrc: "/images/FeaturedImage1.jpg",
    promoSections: [
      {
        imageSrc: "/images/FeaturedImage1.jpg",
        heading: "Promote in-store offers in real time",
        description:
          "Highlight flash sales, limited-time offers, and loyalty deals right where buying decisions happen. Update content in seconds across all locations.",
      },
      {
        imageSrc: "/images/FeaturedImage2.jpg",
        heading: "Turn foot traffic into sales",
        description:
          "Use AI-powered layouts to automatically promote bestsellers, new arrivals, and low-stock items based on time of day and demand.",
        reverse: true,
      },
    ],
    tabs: [
      {
        id: "layout",
        title: "AI Layout Generation",
        image: "/images/featuredImage2.jpg",
        heading: "Create Designs with a Single Prompt",
        subheading: "Describe your idea and our AI will generate stunning retail displays in seconds"
      },
      {
        id: "analytics",
        title: "Real-time Analytics",
        image: "/images/FeaturedImage1.jpg",
        heading: "Data-Driven Performance Insights",
        subheading: "Track engagement and optimize your content with live metrics"
      },
      {
        id: "scheduling",
        title: "Smart Scheduling",
        image: "/images/FeaturedImage3.jpg",
        heading: "Automated Content Rotation",
        subheading: "Schedule promotions and content based on time, day, or inventory levels"
      },
      {
        id: "templates",
        title: "Pre-built Templates",
        image: "/images/FeaturedImage4.jpg",
        heading: "Professional Designs in Minutes",
        subheading: "Choose from hundreds of customizable templates for any retail need"
      },
      {
        id: "integration",
        title: "Seamless Integration",
        image: "/images/FeaturedImage5.jpg",
        heading: "Connect Your Existing Tools",
        subheading: "Integrate with POS, inventory, and CRM systems for dynamic content"
      }
    ],
    cards: [
      { id: 1, image: "/images/featuredImage1.jpg", title: "October Event" },
      { id: 2, image: "/images/featuredImage2.jpg", title: "Quiz Time" },
      { id: 3, image: "/images/featuredImage3.jpg", title: "Fun Facts" },
      { id: 4, image: "/images/featuredImage4.jpg", title: "Mosquito Trivia" },
      { id: 5, image: "/images/featuredImage5.jpg", title: "November Event" },
    ],
    features: [
      {
        id: "smart",
        title: "Grow Without Limits",
        tag: "Scalability",
        image: "/images/about-image-one.png",
        heading: "Grow Without Limits",
        subheading:
          "SignageX adapts seamlessly from single stores to nationwide retail chains, ensuring consistent branding and communication everywhere.",
      },
      {
        id: "hardware",
        title: "Use Existing Hardware",
        tag: "COST-EFFICIENT",
        image: "/images/featuredImage1.jpg",
        heading: "Use Existing Hardware",
        subheading:
          "Our AI simplifies content creation and navigation. Build apps, widgets, and layouts in minutes.",
      },
      {
        id: "hub",
        title: "Centralized Management Hub",
        tag: "CONTROL",
        image: "/images/featuredImage2.jpg",
        heading: "Centralized Management Hub",
        subheading:
          "Organize, assign, and update screens from one unified dashboard with full automation.",
      },
      {
        id: "support",
        title: "Reliable 24/7 Support",
        tag: "TRUST",
        image: "/images/featuredImage3.jpg",
        heading: "Reliable Support",
        subheading:
          "Our support ensures smooth operations, uptime, and long-term stability for all deployments.",
      },
    ],
  },
  {
    slug: "corporate",
    title: "Corporate",
    subheading: "Corporate",
    description:
      "Use digital screens across your offices to broadcast announcements, KPIs, and important internal news to keep teams aligned and informed.",
    imageSrc: "/images/FeaturedImage5.jpg",
    reverse: true,
    promoSections: [
      {
        imageSrc: "/images/FeaturedImage5.jpg",
        heading: "Keep teams aligned across offices",
        description:
          "Share KPIs, announcements, and company updates on digital displays in lobbies, corridors, and collaboration spaces.",
      },
      {
        imageSrc: "/images/FeaturedImage3.jpg",
        heading: "Reinforce culture with visual storytelling",
        description:
          "Celebrate wins, highlight employee stories, and promote internal initiatives with dynamic content templates.",
        reverse: true,
      },
    ],
    tabs: [
      {
        id: "layout",
        title: "AI Layout Generation",
        image: "/images/featuredImage2.jpg",
        heading: "Create Designs with a Single Prompt",
        subheading: "Describe your idea and our AI will generate stunning retail displays in seconds"
      },
      {
        id: "analytics",
        title: "Real-time Analytics",
        image: "/images/FeaturedImage1.jpg",
        heading: "Data-Driven Performance Insights",
        subheading: "Track engagement and optimize your content with live metrics"
      },
      {
        id: "scheduling",
        title: "Smart Scheduling",
        image: "/images/FeaturedImage3.jpg",
        heading: "Automated Content Rotation",
        subheading: "Schedule promotions and content based on time, day, or inventory levels"
      },
      {
        id: "templates",
        title: "Pre-built Templates",
        image: "/images/FeaturedImage4.jpg",
        heading: "Professional Designs in Minutes",
        subheading: "Choose from hundreds of customizable templates for any retail need"
      },
      {
        id: "integration",
        title: "Seamless Integration",
        image: "/images/FeaturedImage5.jpg",
        heading: "Connect Your Existing Tools",
        subheading: "Integrate with POS, inventory, and CRM systems for dynamic content"
      }
    ],
    cards: [
      { id: 1, image: "/images/featuredImage1.jpg", title: "October Event" },
      { id: 2, image: "/images/featuredImage2.jpg", title: "Quiz Time" },
      { id: 3, image: "/images/featuredImage3.jpg", title: "Fun Facts" },
      { id: 4, image: "/images/featuredImage4.jpg", title: "Mosquito Trivia" },
      { id: 5, image: "/images/featuredImage5.jpg", title: "November Event" },
    ],
    features: [
      {
        id: "smart",
        title: "Smarter AI Tools",
        tag: "Innovation",
        image: "/images/about-image-one.png",
        heading: "Smarter AI Tools",
        subheading:
          "Our AI simplifies content creation and navigation. Build apps, widgets, and layouts in minutes.",
      },
      {
        id: "hardware",
        title: "Use Existing Hardware",
        tag: "COST-EFFICIENT",
        image: "/images/featuredImage1.jpg",
        heading: "Use Existing Hardware",
        subheading:
          "Our AI simplifies content creation and navigation. Build apps, widgets, and layouts in minutes.",
      },
      {
        id: "hub",
        title: "Centralized Management Hub",
        tag: "CONTROL",
        image: "/images/featuredImage2.jpg",
        heading: "Centralized Management Hub",
        subheading:
          "Organize, assign, and update screens from one unified dashboard with full automation.",
      },
      {
        id: "support",
        title: "Reliable 24/7 Support",
        tag: "TRUST",
        image: "/images/featuredImage3.jpg",
        heading: "Reliable Support",
        subheading:
          "Our support ensures smooth operations, uptime, and long-term stability for all deployments.",
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    subheading: "Healthcare",
    description:
      "Improve patient experience and communication with waiting-room displays, wayfinding, and real-time queue information.",
    imageSrc: "/images/FeaturedImage2.jpg",
    promoSections: [
      {
        imageSrc: "/images/FeaturedImage2.jpg",
        heading: "Reduce perceived wait times",
        description:
          "Share educational content, health tips, and queue updates to make waiting rooms feel faster and more informative.",
      },
      {
        imageSrc: "/images/FeaturedImage3.jpg",
        heading: "Guide visitors effortlessly",
        description:
          "Use clear, visual wayfinding signage to direct patients and visitors to the right department without confusion.",
        reverse: true,
      },
    ],
    tabs: [
      {
        id: "layout",
        title: "AI Layout Generation",
        image: "/images/featuredImage2.jpg",
        heading: "Create Designs with a Single Prompt",
        subheading: "Describe your idea and our AI will generate stunning retail displays in seconds"
      },
      {
        id: "analytics",
        title: "Real-time Analytics",
        image: "/images/FeaturedImage1.jpg",
        heading: "Data-Driven Performance Insights",
        subheading: "Track engagement and optimize your content with live metrics"
      },
      {
        id: "scheduling",
        title: "Smart Scheduling",
        image: "/images/FeaturedImage3.jpg",
        heading: "Automated Content Rotation",
        subheading: "Schedule promotions and content based on time, day, or inventory levels"
      },
      {
        id: "templates",
        title: "Pre-built Templates",
        image: "/images/FeaturedImage4.jpg",
        heading: "Professional Designs in Minutes",
        subheading: "Choose from hundreds of customizable templates for any retail need"
      },
      {
        id: "integration",
        title: "Seamless Integration",
        image: "/images/FeaturedImage5.jpg",
        heading: "Connect Your Existing Tools",
        subheading: "Integrate with POS, inventory, and CRM systems for dynamic content"
      }
    ],
    cards: [
      { id: 1, image: "/images/featuredImage1.jpg", title: "October Event" },
      { id: 2, image: "/images/featuredImage2.jpg", title: "Quiz Time" },
      { id: 3, image: "/images/featuredImage3.jpg", title: "Fun Facts" },
      { id: 4, image: "/images/featuredImage4.jpg", title: "Mosquito Trivia" },
      { id: 5, image: "/images/featuredImage5.jpg", title: "November Event" },
    ],
    features: [
      {
        id: "smart",
        title: "Smarter AI Tools",
        tag: "Innovation",
        image: "/images/about-image-one.png",
        heading: "Smarter AI Tools",
        subheading:
          "Our AI simplifies content creation and navigation. Build apps, widgets, and layouts in minutes.",
      },
      {
        id: "hardware",
        title: "Use Existing Hardware",
        tag: "COST-EFFICIENT",
        image: "/images/featuredImage1.jpg",
        heading: "Use Existing Hardware",
        subheading:
          "Our AI simplifies content creation and navigation. Build apps, widgets, and layouts in minutes.",
      },
      {
        id: "hub",
        title: "Centralized Management Hub",
        tag: "CONTROL",
        image: "/images/featuredImage2.jpg",
        heading: "Centralized Management Hub",
        subheading:
          "Organize, assign, and update screens from one unified dashboard with full automation.",
      },
      {
        id: "support",
        title: "Reliable 24/7 Support",
        tag: "TRUST",
        image: "/images/featuredImage3.jpg",
        heading: "Reliable Support",
        subheading:
          "Our support ensures smooth operations, uptime, and long-term stability for all deployments.",
      },
    ],
  },
  {
    slug: "education",
    title: "Education",
    subheading: "Education",
    description:
      "Engage students and staff with campus-wide announcements, timetables, and event promotions on digital displays.",
    imageSrc: "/images/FeaturedImage3.jpg",
    reverse: true,
    promoSections: [
      {
        imageSrc: "/images/FeaturedImage3.jpg",
        heading: "Keep campuses informed",
        description:
          "Display schedules, room changes, emergency alerts, and announcements across common areas and corridors.",
      },
      {
        imageSrc: "/images/FeaturedImage1.jpg",
        heading: "Boost event attendance",
        description:
          "Promote workshops, clubs, and campus events with attention-grabbing visuals that update in real time.",
        reverse: true,
      },
    ],
    tabs: [
      {
        id: "layout",
        title: "AI Layout Generation",
        image: "/images/featuredImage2.jpg",
        heading: "Create Designs with a Single Prompt",
        subheading: "Describe your idea and our AI will generate stunning retail displays in seconds"
      },
      {
        id: "analytics",
        title: "Real-time Analytics",
        image: "/images/FeaturedImage1.jpg",
        heading: "Data-Driven Performance Insights",
        subheading: "Track engagement and optimize your content with live metrics"
      },
      {
        id: "scheduling",
        title: "Smart Scheduling",
        image: "/images/FeaturedImage3.jpg",
        heading: "Automated Content Rotation",
        subheading: "Schedule promotions and content based on time, day, or inventory levels"
      },
      {
        id: "templates",
        title: "Pre-built Templates",
        image: "/images/FeaturedImage4.jpg",
        heading: "Professional Designs in Minutes",
        subheading: "Choose from hundreds of customizable templates for any retail need"
      },
      {
        id: "integration",
        title: "Seamless Integration",
        image: "/images/FeaturedImage5.jpg",
        heading: "Connect Your Existing Tools",
        subheading: "Integrate with POS, inventory, and CRM systems for dynamic content"
      }
    ],
    cards: [
      { id: 1, image: "/images/featuredImage1.jpg", title: "October Event" },
      { id: 2, image: "/images/featuredImage2.jpg", title: "Quiz Time" },
      { id: 3, image: "/images/featuredImage3.jpg", title: "Fun Facts" },
      { id: 4, image: "/images/featuredImage4.jpg", title: "Mosquito Trivia" },
      { id: 5, image: "/images/featuredImage5.jpg", title: "November Event" },
    ],
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    subheading: "F&B",
    description:
      "Dynamic menu boards, upsells, and promotions that are easy to update and optimize for dayparts and inventory.",
    imageSrc: "/images/FeaturedImage2.jpg",
    promoSections: [
      {
        imageSrc: "/images/FeaturedImage2.jpg",
        heading: "Modern digital menu boards",
        description:
          "Showcase menus, combos, and upsell items with visuals that adapt to breakfast, lunch, and dinner service.",
      },
      {
        imageSrc: "/images/FeaturedImage4.jpg",
        heading: "Promote high-margin items",
        description:
          "Use AI to highlight best-performing items and time-based offers that increase average order value.",
        reverse: true,
      },
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    subheading: "Hospitality",
    description:
      "Enhance guest experience with digital concierge screens, event information, and real-time offers across properties.",
    imageSrc: "/images/FeaturedImage4.jpg",
    promoSections: [
      {
        imageSrc: "/images/FeaturedImage4.jpg",
        heading: "Welcome guests with personalized signage",
        description:
          "Show branded welcomes, wayfinding, and daily highlights in lobbies, lifts, and corridors.",
      },
      {
        imageSrc: "/images/FeaturedImage1.jpg",
        heading: "Promote on-site services",
        description:
          "Drive bookings for spas, restaurants, and events with targeted, location-aware offers.",
        reverse: true,
      },
    ],
  },
  {
    slug: "government",
    title: "Government",
    subheading: "Government",
    description:
      "Securely share public service announcements, queue information, and guidance across facilities and kiosks.",
    imageSrc: "/images/FeaturedImage3.jpg",
    promoSections: [
      {
        imageSrc: "/images/FeaturedImage3.jpg",
        heading: "Communicate public information clearly",
        description:
          "Display announcements, safety messages, and policy updates in government offices and public spaces.",
      },
      {
        imageSrc: "/images/FeaturedImage2.jpg",
        heading: "Streamline queues and services",
        description:
          "Use queue dashboards and service screens to guide citizens to the right counters and reduce confusion.",
        reverse: true,
      },
    ],
  },
  {
    slug: "transportation",
    title: "Transport",
    subheading: "Transport",
    description:
      "Display arrival/departure info, alerts, and wayfinding across stations and terminals in real-time.",
    imageSrc: "/images/FeaturedImage1.jpg",
    reverse: true,
    promoSections: [
      {
        imageSrc: "/images/FeaturedImage1.jpg",
        heading: "Real-time travel information",
        description:
          "Show arrivals, departures, delays, and platform changes instantly across all screens.",
      },
      {
        imageSrc: "/images/FeaturedImage2.jpg",
        heading: "Guide passengers effortlessly",
        description:
          "Combine wayfinding and service alerts to move passengers smoothly through busy terminals.",
        reverse: true,
      },
    ],
  },
  {
    slug: "fitness",
    title: "Fitness",
    subheading: "Fitness",
    description:
      "Motivate members with class schedules, performance leaderboards, and targeted promotions on screens around your gym.",
    imageSrc: "/images/FeaturedImage5.jpg",
    promoSections: [
      {
        imageSrc: "/images/FeaturedImage5.jpg",
        heading: "Keep members motivated",
        description:
          "Show leaderboards, workout tips, and class highlights on screens across the gym floor.",
      },
      {
        imageSrc: "/images/FeaturedImage1.jpg",
        heading: "Promote memberships and add-ons",
        description:
          "Upsell personal training, premium tiers, and new programs with targeted visual campaigns.",
        reverse: true,
      },
    ],
  },
  {
    slug: "entertainment",
    title: "Entertainment",
    subheading: "Entertainment",
    description:
      "Drive ticket sales and promote upcoming events across venues using dynamic, eye-catching displays.",
    imageSrc: "/images/FeaturedImage1.jpg",
    promoSections: [
      {
        imageSrc: "/images/FeaturedImage1.jpg",
        heading: "Promote upcoming shows",
        description:
          "Highlight headliners, schedules, and special events with motion-rich visuals that stand out.",
      },
      {
        imageSrc: "/images/FeaturedImage3.jpg",
        heading: "Boost on-site spending",
        description:
          "Advertise food, drinks, and merch in real time based on audience size and event type.",
        reverse: true,
      },
    ],
  },
  {
    slug: "financial-institutions",
    title: "Financial Institutions",
    subheading: "Finance",
    description:
      "Communicate product updates, queue info, and marketing messages across branches and digital touchpoints.",
    imageSrc: "/images/FeaturedImage2.jpg",
    promoSections: [
      {
        imageSrc: "/images/FeaturedImage2.jpg",
        heading: "Build trust with clear communication",
        description:
          "Show transparent product information, rates, and compliance content on branch displays.",
      },
      {
        imageSrc: "/images/FeaturedImage4.jpg",
        heading: "Simplify in-branch journeys",
        description:
          "Guide visitors to the right counters and share queue updates to reduce perceived waiting time.",
        reverse: true,
      },
    ],
  },
];
